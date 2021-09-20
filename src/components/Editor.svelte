<script>
  import Player from './player.js';
  import { mix, parse } from '../lib';

  // FIXME: implements, first, a good parser for these inputs...
  // here we'll have 2 axis, horizontally we stack bars...
  // vertically we can create layers of those stacks...
  // then, we can use the Y-axis to play as scenes!

  let length = 16;
  let value = `
%F a3|c#4|f#4
%G b3|d#4|g#4
%A c#4|e4|a4
%E b3|d4|f#4
%C c#4|e4|g#4

# synth
  @INTRO
    #518      ---- ---- ---- ---- ---- ---- ---- ---- ; how to auto-fill missing tracks?
  @A
    #518 75   x--- --x- ---- ---- x--- --x- ---- ---- %F %G %A %G
  @B
    #518 75   x--- --x- ---- ---- x--- --x- ---- ---- %E % % %
  @C
    #518      x--- --x- ---- ---- x--- --x- ---- ---- %C % % %

## bass
  %c f#2 c#2 e2 f#2 e2 c#2 b1 c#2
  %d b2 a2 b2 d3 d3 b2 a2 ; how to transpose?
  @INTRO
    #393      ---- ---- ---- ---- ---- ---- ---- ---- ; if present, it gets played... if missing, then is muted...
  @A
    #393  112 x-x- x-x- x-x- x-x- x-x- x-x- x-x- x-x- %c %
  @B
    #393  112 x-x- x-x- --x- x-x- x-x- x-x- --x- x-x- %d %
  @C
    #393      ---- ---- ---- ---- ---- ---- ---- ----

## drums
  @INTRO
    #2081 100 x-x- x-x- x-x- x-x- x-x- x-x- x-x- x-x-
    #2113     x--- ---- ---- ---- ---- ---- ---- ----
    #2028 120 ---- x--- ---- x--- ---- x--- ---- x---
    #2001 120 x--- ---- x--- ---- x--- ---- x--- ----
  @A
    #2081 120 x-x- x-x- x-x- x-x- x-x- x-x- x-x- x-x-
    #2113 90  --x- --x- --x- --x- --x- --x- --x- --x-
    #2028 120 ---- x--- ---- x--- ---- x--- ---- x---
    #2001 120 x--- ---- x--- ---- x--- ---- x--- ----
  @B
    #2081 120 x-x- x-x- x-x- x-x- x-x- x-x- x-x- x-x-
    #2113 90  --x- --x- --x- --x- --x- --x- --x- --x-
    #2028 120 ---- x--- ---- x--- ---- x--- ---- x---
    #2001 120 x--- ---- x--- ---- x--- ---- x--- ----
  @C
    #2081 120 x-x- x-x- x-x- x-x- x-x- x-x- x-x- x-x-
    #2113 90  --x- --x- --x- --x- --x- --x- --x- --x-
    #2028 120 ---- x--- ---- x--- ---- x--- ---- x---
    #2001 120 x--- ---- x--- ---- x--- ---- x--- ----

> INTRO A % A % B A B A C % A %
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
    setTimeout(play, 2000);
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

