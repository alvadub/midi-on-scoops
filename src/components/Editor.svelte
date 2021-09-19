<script>
  import Player from './player.js';
  import { parse } from '../lib/parser';

  // FIXME: implements, first, a good parser for these inputs...
  // here we'll have 2 axis, horizontally we stack bars...
  // vertically we can create layers of those stacks...
  // then, we can use the Y-axis to play as scenes!

  let value = `# skanking demo

; our variables
%X  a4|c5|e5
%Y  g4|d4|a#4

@A

  ; drumkit
  #3       ---- ---- ---- ---- x--- ---- ---- ----
  #14      ---- ---- ---- ---- x--- ---- ---- ----
  #37      x--- x--- ---- x--- x--- ---- x--- ----

           120  %    115  125  %    %    115  120
  #35      x--- x--- x--- x--- x--- x--- x--- x--- ; after comment

  ; chords
  #15      ---- ---- x--- ---- ---- ---- x--- ---- %X %
  #165     ---- x--- ---- x--- ---- x--- ---- x--- %X % % %

@B

  ; chords
  #15      ---- ---- x--- ---- ---- ---- x--- ---- %Y %
  #183     ---- x--- ---- x--- ---- x--- ---- x--- %Y % % %

  ; how to handle duration, e.g. x__-
  ; how to repeat from previous stacks?
  ; they should merge from previous ones? then extends?

> A A B A
`;

  function getData(input) {
    console.log(parse(input));
    return [];
  }

  window.p = window.p || null;
  setTimeout(() => {
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

