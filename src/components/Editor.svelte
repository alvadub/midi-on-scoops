<script>
  import Player from './player.js';
  import { mix, parse } from '../lib';

  // FIXME: implements, first, a good parser for these inputs...
  // here we'll have 2 axis, horizontally we stack bars...
  // vertically we can create layers of those stacks...
  // then, we can use the Y-axis to play as scenes!

  let value = `

%d C4|Eb4|G4

# piano
  @A
    #3 115 --x- --x- --x- --x- %d % % %

## bass
  @A
    #6 112 x-x- x-x- x-x- x-x- C3 minor ..5>3

> A

`;

  function getData(input) {
    try {
      return mix(parse(input));
    } catch (e) {
      // ignore
    }
  }

  window.p = window.p || null;
  setTimeout(() => {
    p = window.p || new Player();
    p.setLoopMachine(getData(value));
  }, 200);

  let tempo = (p && p.bpm) || 90;

  function stop() {
    if (p) p.stopLoopMachine();
  }

  function play() {
    stop();
    if (p) p.playLoopMachine(tempo);
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
<textarea bind:value cols="64" rows="30" />

