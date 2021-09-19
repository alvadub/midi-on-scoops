import { pitch, isPattern } from './tokenize';
import { reduce } from './parser';

const DEFAULT = Symbol('@main');

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

  Object.entries(ctx.tracks).forEach(([name, tracks]) => {
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

      if (!scenes[key]) scenes[key] = [];
      scenes[key].push({ midi, name, track });
    });
  });

  if (!ctx.main.length) {
    ctx.main = [[{ type: 'value', value: DEFAULT }]];
  }

  return ctx.main.map(track => {
    return reduce(track, scenes).reduce((memo, cur) => {
      if (!memo[cur.name]) memo[cur.name] = [];

      cur.track.forEach(clip => {
        memo[cur.name].push([cur.midi, clip]);
      });
      return memo;
    }, {});
  });
}
