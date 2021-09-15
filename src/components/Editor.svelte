<script>
  import Player from './player.js';
  import { tokenize } from '../lib';
  import { RE_NOTE } from '../lib/tokenize';

  let value = `# skanking demo

; our variables
%X  c4|d#4|g4
%Y  c4|f4|g#4

; drumkit
3   x--- x--- ---- ---- x--- ---- ---- x---
17  ---- ---- ---- ---- x--- ---- ---- ----
37  x--- ---- ---- x--- x--- ---- x--- ----
35  ---- x--- x--- x--- x--- x--- x--- x--- ; after comment

; chords
144 ---- ---- x--- ---- ---- ---- x--- ---- %X

`;

  const tones = {
    C: 0,
    'C#': 1,
    'Db': 1,
    D: 2,
    'D#': 3,
    'Eb': 3,
    E: 4,
    F: 5,
    'F#': 6,
    'Gb': 6,
    G: 7,
    'G#': 8,
    'Ab': 8,
    A: 9,
    'A#': 10,
    'Bb': 10,
    B: 11,
  };

  function encode(note) {
    if (Array.isArray(note)) return note.map(x => x && encode(x));
    if (Array.isArray(note.value)) return encode(note.value);

    if (!RE_NOTE.test(note)) {
      console.log('INVALID', note);
      return -1;
    }

    const [, tone, minmaj, add] = note.match(RE_NOTE);

    return parseInt(add, 10) * 12 + tones[tone.toUpperCase()];
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

        data[name] = tokenize(scribble, value);
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

          midi.push([parseInt(kind.substr(1), 10), ...steps, ...notes]);
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

