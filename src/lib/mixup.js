import { File, Track } from 'jsmidgen';
import { pitch, isPattern } from './tokenize';
import { reduce } from './parser';

const DEFAULT = Symbol('@main');

export function build(midi, bpm = 120) {
  const file = new File();
  const q = 16;
  const o = {};

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
        // reusing the `chan` will stack notes after...
        const { chan, track } = get(e[0], e[1]);
        track.setTempo(bpm);

        if (chan !== 9) {
          track.instrument(chan, e[0]);
        }

        for (let i = 2; i < e.length; i += 1) {
          const tick = e[i];

          if (tick[0] > 0) {
            const note = tick[1] || 60;

            if (Array.isArray(note)) {
              track.noteOff(chan, '', q);
              track.addChord(chan, note, q, tick[0]);
            } else {
              track.noteOn(chan, note, q, tick[0]);
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
    if (Array.isArray(value)) result = value.map(pitch);
    else if (typeof value === 'string') {
      if (isPattern(value)) {
        let offset = 0;
        result = value.split('').map(x => {
          const token = [x === '-' ? 0 : 127];
          if (x !== '-') {
            token[0] = typeof values[offset] !== 'undefined' ? values[offset] : token[0] || 0;
            if (typeof notes[offset] !== 'undefined') token[1] = notes[offset];
            if (values.length === 1) token[0] = values[0];
            offset += 1;
          }
          return token;
        });
      } else {
        result = pitch(value);
      }
    }
    return result;
  };
}

export function mix(ctx) {
  const scenes = {};

  Object.entries(ctx.tracks).forEach(([src, tracks]) => {
    Object.entries(tracks).forEach(([ch, clips]) => {
      const [tag, midi] = ch.split('#');
      const key = tag || DEFAULT;
      const track = [];

      clips.forEach(clip => {
        const values = clip.values ? reduce(clip.values, ctx.data) : [];
        const notes = clip.data ? pitch(reduce(clip.data, ctx.data)) : [];
        const fn = pack(values, notes);

        track.push(reduce(clip.input, ctx.data, fn).reduce((memo, cur) => memo.concat(cur), []));
      });

      if (!scenes[key]) scenes[key] = { tracks: [] };
      scenes[key].tracks.push({ src, midi, track });
    });
  });

  if (!ctx.main.length) {
    ctx.main = [[{ type: 'value', value: DEFAULT }]];
  }

  return ctx.main.map(track => {
    return reduce(track, scenes).map(item => {
      return [].concat(item).reduce((memo, x) => {
        x.tracks.forEach(t => {
          t.track.forEach(_ => {
            memo.push([t.midi, t.src, ..._]);
          });
        });
        return memo;
      }, []);
    });
  });
}
