<script>
  import { onMount } from 'svelte';
  import Player from './player.js';
  import { parse, merge } from '../lib';

  // FIXME: implements, first, a good parser for these inputs...
  // here we'll have 2 axis, horizontally we stack bars...
  // vertically we can create layers of those stacks...
  // then, we can use the Y-axis to play as scenes!

  // how to add?
  //  %x Cm_4
  //  %y %x +7n ; plus its 7th
  //  %y %x -1n ; plus its 8th - 1n (2 semitones)
  //  %y %x -1.5 ; transport all by -3 semitones
  // how to drop?
  //  %x c3|e3|g3
  //  %y %x :2 ; drops notes c3|g3

  // %c f#2 c#2 e2 f#2 e2 c#2 b1 c#2
  // %c b2 e2 g2 b2 g2 e2 c#2 e2
  // %d %c +1.5 ; shifts all by 3 semitones?

  let transpose = 0;
  let length = 16;
  let value = `
%F a3|c#4|f#4
%G b3|d#4|g#4
%A c#4|e4|a4
%E b3|d4|f#4
%C d3|f#4|a4 ; how to sum notes to chords?
%B c#4|f4|g#3|b4

# synth
  @INTRO
    #518      ---- ---- ---- ---- ---- ---- ---- ----
  @N < INTRO
  @A
    #518 75   x--- --x- ---- ---- x--- --x- ---- ---- %F %G %A %G
  @B < A
    #518      %E % % %
  @C < A
    #518      %C % %F %
  @D < A
    #518      %C % %B %

## bass
  %c f#2 c#2 e2 f#2 e2 c#2 b1 c#2
  %d b2 a2 b2 d3 d3 b2 a2 ; how to transpose?
  @INTRO
    #393      ---- ---- ---- ---- ---- ---- ---- ----
  @A
    #393  112 x-x- x-x- x-x- x-x- x-x- x-x- x-x- x-x- %c %
  @N < A
  @B
    #393      x-x- x-x- --x- x-x- x-x- x-x- --x- x-x- %d %
  @C < INTRO
  @D < INTRO

## drums
  @INTRO
    #2123     ---- ---- ---- ---- ---- ---- ---- ----
    #2081 50  x-x- x-x- x-x- x-x- x-x- x-x- x-x- x-x-
    #2028     ---- x--- ---- x--- ---- x--- ---- x---
    #2001     x--- ---- x--- ---- x--- ---- x--- ----
  @A < INTRO
    #2123 90  x--- x--- x--- x--- x--- x--- x--- x---
    #2123 70  --x- --x- --x- --x- --x- --x- --x- --x-
  @N < A
  @B < A
  @C < A
  @D < A

> INTRO N *2 A %
> A % B A B A
> A % B A C *3 D
> A % B A B A
> A % B A B A
> A % B A C *3 D
> A % B A B A
`;

//   let value = `

// # tetris
// %a E4   B3 C4 D4   C4 B3 A3   A3 C4 E4   D4 C4 B3   B3 C4 D4   E4 C4 A3 A3
// %b D4   F4 A4 G4   F4 E4 E4   C4 E4 D4   C4 B3 B3   C4 D4 E4   C4 A3 A3

// @A
//   #2 x-xx x-xx x-xx x-xx x-xx x-x- x-x- x--- %a

// @B
//   #2 x-xx x-x- x-xx --x- x-xx x-xx x-x- x--- %b

// > A B

// `;

  function build(midi) {
    const mix = [];

    function get(nth, name) {
      const key = nth + name;

      if (!get[key]) {
        const track = [nth, name, []];

        mix.push(track);
        get[key] = { track };
      }
      return get[key];
    }

    midi.forEach(section => {
      section.forEach(parts => {
        parts.forEach(e => {
          const { track } = get(e[0], e[1]);

          for (let i = 0; i < e[2].length; i += 1) {
            track[2].push(e[2][i]);
          }
        });
      });
    });
    return mix;
  }

  function getData(input) {
    try {
      return build(merge(parse(input)));
    } catch (e) {
      // ignore
    }
  }

  window.p = window.p || null;
  let tempo = (p && p.bpm) || 116;
  let playing;

  function stop() {
    if (p && playing) {
      playing = false;
      p.stopLoopMachine();
    }
  }

  function play() {
    stop();
    if (p) {
      playing = true;
      p.setLoopMachine(getData(value), tempo, length, transpose);
      p.playLoopMachine();
    }
  }

  onMount(() => {
    p = window.p || new Player();
    p.setLoopMachine(getData(value), tempo, length, transpose);
    setTimeout(play, 1000);
  });

  $: if (p) {
    if (p.setLoopMachine(getData(value), tempo, length, transpose) && playing) {
      p.playLoopMachine(p.beatIndex);
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
<input type="number" bind:value={transpose} />
<textarea bind:value style="width:100%;height:98%" />
