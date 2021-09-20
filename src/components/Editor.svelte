<script>
  import Player from './player.js';
  import { mix, parse } from '../lib';

  // FIXME: implements, first, a good parser for these inputs...
  // here we'll have 2 axis, horizontally we stack bars...
  // vertically we can create layers of those stacks...
  // then, we can use the Y-axis to play as scenes!

  let value = `

%F a3|c#4|f#4
%G b3|d#4|g#4
%A c#4|e4|a4
%G b3|d#4|g#4

# synth
  @A
    #3 115 x--- ---- ---- x--- ---- ---- ---- ---- %F %G ; %A %G

## bass
  @A
    #6 112 x--- x--- x--- x--- x--- x--- x--- x--- f#2 c#2 e2 f#2 e2 c#2 b1 c#2

> A

`;

  function build(midi) {
    const piece = [];

    // let ch = 0;
    // function get(nth, name) {
    //   const key = nth + name;

    //   if (!get[key]) {
    //     const track = new Track();
    //     const chan = nth === '0' ? 9 : ch;

    //     file.addTrack(track);
    //     get[key] = { chan, track };
    //     if (nth !== '0') ch += 1;
    //   }
    //   return get[key];
    // }

    // midi.forEach(section => {
    //   section.forEach(parts => {
    //     parts.forEach(e => {
    //       const { chan, track } = get(e[0], e[1]);

    //       track.setTempo(bpm);
    //       if (chan !== 9) {
    //         track.instrument(chan, e[0]);
    //       }

    //       for (let i = 2; i < e.length; i += 1) {
    //         const tick = e[i];

    //         if (tick[0] > 0) {
    //           const note = tick[1] || 60;

    //           if (Array.isArray(note)) {
    //             track.noteOff(chan, '', q);
    //             track.addChord(chan, note, q, tick[0]);
    //           } else {
    //             track.noteOn(chan, note, q, tick[0]);
    //             track.noteOff(chan, note, q);
    //           }
    //         } else {
    //           track.noteOff(chan, '', q * 2);
    //         }
    //       }
    //     });
    //   });
    // });
    return midi;
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
    p.setLoopMachine(getData(value));
    setTimeout(play, 1000);
  }, 200);

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

