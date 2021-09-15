<script>
  // import { onMount } from 'svelte';
  import Player from './player.js';
//   import { parse } from '../lib';

//   const text = `
// @tempo: 127

// # skank
// notes: C2 phrygian.. ** /2
// pattern: x-x_-xx_ *4
// `.trim();

//   let p;
//   let ast = null;
//   onMount(async () => {
//     try {
//       ast = await parse(text);
//     } catch (e) {
//       console.error(e);
//     }

//     window.p = window.p || null;
//     setTimeout(() =>  {
//       p = window.p || new Player();
//       p.setLoopMachine(getData(value));
//     }, 200);
//   });

  let value = `
3  x--- ---- ---- x--- x--- ---- ---- ----
13 ---- ---- ---- ---- x--- ---- ---- ----
37 x--- x--- x--- x--- x--- x--- x--- x---
35 ---- x--- x--- x--- x--- x--- x--- x---
24 ---- ---- ---- ---- ---- ---- ---- ----
 `.trim();

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
    return text.trim().split('\n').map(line => {
      const [n, ...d] = line.split(/\s+/);
      const l = d.join('').split('');

      return [parseInt(n, 10), ...l.map(x => x === 'x')];
    });
  }

  $: if (p) {
    if (p.bpm !== tempo) {
      stop();
      p.playLoopMachine(tempo);
    } else {
      console.log('SET');
      p.setLoopMachine(getData(value));
    }
  }

//   function get(data, ctx) {
//     let v;
//     v = tokenize(scribble, data);
//     v = data ? reduce(v, ctx) : [];
//     if (v.some(x => x.includes('%'))) {
//       return v.reduce((p, d) => p.concat(get(d, ctx)), []);
//     }
//     return v;
//   }

//   let tracks = [];
//   let tempo = 116;
//   let channel = 0;
//   let channels = 0;
//   let session = null;
//   function onClick() {
//     const data = jsyaml.load(text.replace(/  %/gm, '  __'));
//     const ctx = {};

//     Object.keys(data.let).forEach(key => {
//       if (key.indexOf('__') === 0) {
//         data.let[`%${key.substr(2)}`] = data.let[key];
//         delete data.let[key];
//       }
//     })

//     data.loop.forEach(node => {
//       node.clips.forEach(clip => {
//         clip.notes = get(clip.notes, data.let);
//         clip.pattern = get(clip.pattern, data.let).join('');
//         clip.instrument = clip.use || node.use || 'PolySynth';
//       });
//       tracks.push(node);
//     });

//     session = new scribble.Session();
//     channel = 0;

//     tracks.forEach(t => {
//       session.createChannel(t);
//       if (t.clips.length > channels) channels = t.clips.length;
//     });
//     onChannel();
//   }

//   function onChannel() {
//     Tone.context.resume().then(() => Tone.Transport.start());
//     session.startRow(channel);
//   }

//   $: Tone.Transport.bpm.value = tempo;
</script>

<!-- <textarea cols="60" rows=12 value={text} />
<input type="number" bind:value={tempo} />
<input type="number" bind:value={channel} min="0" max={channels} />
<button on:click={onClick}>PLAY</button>
<button on:click={onChannel}>GO</button>
 -->

<!-- <pre>{JSON.stringify(ast, null, 2)}</pre> -->

<style>
  textarea {
    font-family: monospace;
    display: block;
  }
</style>

<button on:click={play}>Play</button>
<button on:click={stop}>Stop</button>
<input type="number" bind:value={tempo} />
<textarea bind:value cols="64" rows="4" />

