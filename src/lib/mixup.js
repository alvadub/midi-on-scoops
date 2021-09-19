import { pitch, isPattern } from './tokenize';
import { reduce } from './parser';

const DEFAULT = Symbol('@main');

export function convert(values, cycle, reset) {
  return value => {
    let result = value;
    if (Array.isArray(value)) result = value.map(pitch);
    else if (typeof value === 'string') {
      if (isPattern(value)) {
        let offset = reset || 0;
        result = value.split('').map(x => {
          if (values.length > 0 && x !== '-') {
            if (cycle && offset > values.length) offset = reset;
            return values[offset++] || 0; // eslint-disable-line
          }
          return x === '-' ? 0 : 127;
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
        const fn = convert(clip.values ? reduce(clip.values, ctx.data) : []);

        track.push({
          send: reduce(clip.input, ctx.data, fn).reduce((memo, cur) => memo.concat(cur), []),
          notes: clip.data ? reduce(clip.data, ctx.data, fn) : [],
        });
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
        memo[cur.name].push([cur.midi, clip.send, clip.notes]);
      });
      return memo;
    }, {});
  });
}
