import { File, Track } from 'jsmidgen';
import { pitch, isPattern } from './tokenize';
import { reduce } from './parser';

const DEFAULT = Symbol('@main');

export function build(test, bpm = 120) {
  const file = new File();
  const q = (1.5 / bpm) * 1000;
  const o = {};

  let ch = 0;
  test.forEach(info => {
    Object.keys(info).forEach(key => {
      info[key].forEach(clips => {
        const track = new Track();

        track.setTempo(bpm);
        file.addTrack(track);

        let chan = clips[0] === '0' ? 9 : ch;
        if (chan !== 9) {
          chan = o[clips[0]] || (o[clips[0]] = chan); // eslint-disable-line
          track.instrument(chan, clips[0]);
          ch += 1;
        }

        clips[1].forEach((tick, i) => {
          if (tick[0] > 0) {
            const note = tick[1] || 90;

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
        });
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
            memo.push([t.midi, ..._]);
          });
        });
        return memo;
      }, []);
    });
  });
}
