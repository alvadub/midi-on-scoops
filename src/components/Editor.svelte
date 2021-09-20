<script>
  import Player from './player.js';
  import { mix, parse } from '../lib';

  // FIXME: implements, first, a good parser for these inputs...
  // here we'll have 2 axis, horizontally we stack bars...
  // vertically we can create layers of those stacks...
  // then, we can use the Y-axis to play as scenes!

  let length = 32;
  let value = `

%F a3|c#4|f#4
%G b3|d#4|g#4
%A c#4|e4|a4
%G b3|d#4|g#4

# synth
  @A
    #3 115 x--- ---- ---- x--- ---- ---- ---- ---- %F %G
  @B
    #3 115 x--- ---- ---- x--- ---- ---- ---- ---- %A %G

## bass
  %c f#2 c#2 e2 f#2 e2 c#2 b1 c#2
  @A
    #6 112 x--- x--- x--- x--- x--- x--- x--- x--- %c
  @B
    #6 112 x--- x--- x--- x--- x--- x--- x--- x--- %c

> A B

`;

  function build(midi) {
    const piece = [];

    let group;
    function get(nth, name) {
      const key = nth + name;

      if (!get[key]) {
        const track = [nth, name];

        group.push(track);
        get[key] = { track };
      }
      return get[key];
    }

    midi.forEach(section => {
      group = [];
      piece.push(group);
      section.forEach(parts => {
        parts.forEach(e => {
          const { track } = get(e[0], e[1]);

          for (let i = 2; i < e.length; i += 1) {
            track.push(e[i]);
          }
        });
      });
    });
    return [piece];
  }

  function getData(input) {
    try {
      return build(mix(parse(input)));
    } catch (e) {
      // ignore
    }
  }

  window.p = window.p || null;
  let tempo = (p && p.bpm) || 116;

  function stop() {
    if (p) p.stopLoopMachine();
  }

  function play() {
    stop();
    if (p) p.playLoopMachine(tempo);
  }

  setTimeout(() => {
    p = window.p || new Player();
    p.setLoopMachine(getData(value), length);
    setTimeout(play, 1000);
  }, 200);

  $: if (p) {
    if (p.bpm !== tempo) {
      p.playLoopMachine(tempo);
    } else {
      p.setLoopMachine(getData(value), length);
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
<input type="number" bind:value={length} />
<textarea bind:value cols="64" rows="30" />

