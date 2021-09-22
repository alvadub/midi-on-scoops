import { File, Track } from 'jsmidgen';
import { zip, flatten } from './utils';
import { isPattern } from './tokenize';
import { reduce } from './parser';

const DEFAULT = Symbol('@main');

// import MIDIWriter from 'midi-writer-js';
// console.log(MIDIWriter.Utils.getTickDuration('2'));

export function build(midi, bpm = 120, length = 16) {
  const file = new File();
  const q = 16;
  const o = {};

  bpm *= length / q;

  let ch = 0;
  function get(nth, name) {
    const key = nth + name;

    if (!get[key]) {
      const track = new Track();
      const chan = nth === '0' ? 9 : ch;

      file.addTrack(track);
      get[key] = { chan, track };
      if (nth !== '0') ch += 1;
    }
    return get[key];
  }

  midi.forEach(section => {
    section.forEach(parts => {
      parts.forEach(e => {
        const { chan, track } = get(e[0], e[1]);

        track.setTempo(bpm);
        if (chan !== 9) {
          track.instrument(chan, e[0]);
        }

        for (let i = 0; i < e[2].length; i += 1) {
          const tick = e[2][i];

          if (tick.v > 0) {
            const note = tick.n || 'C3';

            if (Array.isArray(note)) {
              track.noteOff(chan, '', q);
              track.addChord(chan, note, q, tick.v);
            } else {
              track.noteOn(chan, note, q, tick.v);
              track.noteOff(chan, note, q);
            }
          } else {
            track.noteOff(chan, '', q * 2);
          }
        }
      });
    });
  });
  return file.toBytes();
}

export function pack(values, notes) {
  return value => {
    let result = value;
    if (typeof value === 'string') {
      if (isPattern(value)) {
        let offset = 0;
        result = value.split('').map(x => {
          const token = { v: x === '-' ? 0 : 127 };
          if (x !== '-') {
            token.v = typeof values[offset] !== 'undefined' ? values[offset] : token.v || 0;
            if (typeof notes[offset] !== 'undefined') token.n = notes[offset];
            if (values.length === 1) token.v = values[0];
            if (token.v || token.n) offset += 1;
          }
          return token;
        });
      }
    }
    return result;
  };
}

export function merge(ctx) {
  const scenes = {};

  Object.entries(ctx.tracks).forEach(([name, channels]) => {
    Object.entries(channels).forEach(([ch, clips]) => {
      const [tag, midi] = ch.split('#');
      const key = tag || DEFAULT;

      let ticks;
      let inc = 0;
      clips.forEach(clip => {
        const values = clip.values ? reduce(clip.values, ctx.data) : [];
        const notes = clip.data ? reduce(clip.data, ctx.data) : [];

        if (clip.input) {
          if (values.length > 1) values.shift();

          const input = flatten(reduce(clip.input, ctx.data, pack(values, notes)));

          if (!ticks) {
            ticks = input;
            return;
          }

          zip(ticks, input, (a, b) => {
            if (b.v > 0) a.v = b.v;
          });
        }

        if (ticks) {
          const mode = clip.values
            && clip.values[0]
            && clip.values[0].type === 'mode' ? clip.values[0].value : null;

          ticks.forEach(tick => {
            if (tick.v > 0) {
              if (!tick.n && notes.length > 0) tick.n = notes.shift();
              if (mode && values.length > 0) tick[mode[0].toLowerCase()] = values.shift();
            }
          });
        }
      });

      if (!scenes[key]) scenes[key] = { tracks: [] };
      scenes[key].tracks.push([midi, name, ticks]);
    });
  });

  if (!ctx.main.length) {
    ctx.main = [[{ type: 'value', value: DEFAULT }]];
  }

  return ctx.main.map(track => {
    return reduce(track, scenes).map(item => {
      return [].concat(item).reduce((memo, x) => {
        memo.push(...x.tracks);
        return memo;
      }, []);
    });
  });
}
