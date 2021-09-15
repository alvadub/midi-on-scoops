<script>
  import Player from './player.js';
  import { note, isNote, default as tokenize } from '../lib/tokenize';

  let value = `# skanking demo

; our variables
%X  a4|c5|e5

; drumkit
3   x--- x--- ---- ---- x--- ---- ---- x---
14  ---- ---- ---- ---- x--- ---- ---- ----
37  x--- ---- ---- x--- x--- ---- x--- ----
35  x-x- x--- x--- x--- x--- x--- x--- x--- ; after comment

; chords
17  ---- ---- x--- ---- ---- ---- x--- ---- %X %

`;


  function encode(input) {
    if (Array.isArray(input)) return input.map(x => x && encode(x));
    if (Array.isArray(input.value)) return encode(input.value);

    if (typeof input === 'object') {
      console.log('OBJECT', input);
      return (parseInt(input, 10) || 1) * 12 + encode(input.value);
    }

    if (!isNote(input)) {
      console.log('INVALID', input);
      return -1;
    }
    return note(input);
  }

  function reduce(values, ctx) {
    return values ? values.reduce((memo, cur) => {
      if (cur === '%') {
        memo.push(memo[memo.length - 1]);
      } else if (typeof cur === 'string' && cur.charAt() === '%') {
        memo.push(...reduce(ctx[cur], ctx));
      } else {
        memo.push(cur);
      }
      return memo;
    }, []) : [];
  }

  function parse(buffer) {
    const tracks = {};

    let track;
    let data = {};
    buffer.split('\n').forEach(line => {
      line = line.replace(/;.+?$/, '');
      if (!line.trim()) return;
      if (line.charAt() === '%') {
        const [name, value] = line.split(/\s+/);

        if (value) data[name] = tokenize(scribble, value);
      } else if (line.charAt() === '#') {
        if (track) {
          tracks[track] = data;
          data = {};
        }

        track = line.substr(1).trim();
      } else {
        const [ins, ...ticks] = line.split(/\s+/);
        const offset = ticks.findIndex(x => !'x-_'.includes(x.charAt()));

        if (offset > 0) {
          data[`#${ins}`] = {
            notes: reduce(ticks.slice(offset), data),
            pattern: ticks.slice(0, offset).join('').split(''),
          };
        } else {
          data[`#${ins}`] = { pattern: ticks.join('').split('') };
        }
      }
    });

    if (track) {
      tracks[track] = data;
    }
    console.log(tracks);
    return tracks;
  }

  window.p = window.p || null;
  setTimeout(() =>  {
    p = window.p || new Player();
    p.setLoopMachine(getData(value));
  }, 200);

  let tempo = (p && p.bpm) || 127;

  function stop() {
    if (p) p.stopLoopMachine();
  }

  function play() {
    stop();
    if (p) p.playLoopMachine();
  }

  function getData(text) {
    const tracks = parse(text);
    const midi = [];

    Object.keys(tracks).forEach(name => {
      Object.entries(tracks[name]).forEach(([kind, token]) => {
        if (kind.charAt() === '#') {
          const steps = token.pattern.map(x => (x === 'x' ? 127 : 0));
          const notes = encode(token.notes || []);

          midi.push([kind.substr(1), ...steps, ...notes]);
        }
      });
    });

    return midi;
  }

  $: if (p) {
    if (p.bpm !== tempo) {
      p.playLoopMachine(tempo);
    } else {
      p.setLoopMachine(getData(value));
    }
  }
</script>

<style>
  textarea {
    font-family: monospace;
    display: block;
  }
</style>

<button on:click={play}>Play</button>
<button on:click={stop}>Stop</button>
<input type="number" bind:value={tempo} />
<textarea bind:value cols="64" rows="20" />

