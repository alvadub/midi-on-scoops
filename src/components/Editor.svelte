<script>
  import { onMount } from 'svelte';
  import { parse } from '../lib';

  const text = `
@tempo: 127

# skank
notes: C2 phrygian.. ** /2
pattern: x-x_-xx_ *4
`.trim();

  let ast = null;
  console.log(42)
  onMount(async () => {
    try {
      console.log(text);
      ast = await parse(text);
    } catch (e) {
      console.error(e);
    }
  });

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

<pre>{JSON.stringify(ast, null, 2)}</pre>
