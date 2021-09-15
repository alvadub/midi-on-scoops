<script>
  import Player from './player.js';

  let value = `
3   x--- x--- ---- ---- x--- ---- ---- x---
17  ---- ---- ---- ---- x--- ---- ---- ----
37  x--- x--- x--- x--- x--- x--- x--- x---
35  ---- x--- x--- x--- x--- x--- x--- x---
128 ---- ---- x--- ---- ---- ---- x--- ----
144 ---- x--- ---- x--- ---- x--- ---- x---
 `.trim();

  window.p = window.p || null;
  setTimeout(() =>  {
    p = window.p || new Player();
    p.setLoopMachine(getData(value));
  }, 200);

  let tempo = (p && p.bpm) || 140;

  function stop() {
    if (p) p.stopLoopMachine();
  }

  function play() {
    stop();
    if (p) p.playLoopMachine();
  }

  function getData(text) {
    return text.trim().split('\n').map(line => {
      const [n, ...d] = line.split(/\s+/);
      const l = d.join('').split('');

      return [parseInt(n, 10), ...l.map(x => x === 'x')];
    });
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
<textarea bind:value cols="64" rows="6" />

