import { pitch, isPattern } from './tokenize';
import { reduce } from './parser';

/**

how this would work?

we have tracks,
  then we have channels
    and channels can be tagged...

we could build like a book, where each page
is the full scene, from all tracks, grouped by tag

then, when resolving, iterate params until tracks are reach

finally, expand all gathered values and concatenate all pieces...
*/

export function convert(values, cycle) {
  return value => {
    if (Array.isArray(value)) return value.map(pitch);
    if (typeof value === 'string') {
      if (isPattern(value)) {
        let offset = 0;
        return value.split('').map(x => {
          if (values.length > 0 && x !== '-') {
            if (cycle && offset >= values.length) offset = 0;
            return values[offset++] || 0; // eslint-disable-line
          }
          return x === '-' ? 0 : 127;
        });
      }
      return pitch(value);
    }
    return value;
  };
}

export function mix(ctx) {
  const index = { ...ctx.data };
  const scenes = {};

  Object.entries(ctx.tracks).forEach(([name, tracks]) => {
    Object.entries(tracks).forEach(([ch, clips]) => {
      const [tag, id] = ch.split('#');
      const key = tag || 'default';
      const values = [];

      clips.forEach(clip => {
        const fn = convert(clip.values ? reduce(clip.values, index) : []);

        values.push({
          clips: reduce(clip.input, index, fn),
          notes: clip.data ? reduce(clip.data, index, fn) : [],
        });
      });

      if (!scenes[key]) scenes[key] = [];
      scenes[key].push({ id, name, values });
    });
  });

  // if (ctx.tracks) {
  //   Object.keys(ctx.tracks).forEach(key => {
  //     Object.keys(ctx.tracks[key]).forEach(sub => {
  //       const name = `@${sub.split('.').pop()}`;

  //       index[name] = { type: 'channel', name: key, value: [] };
  //     });

  //     Object.keys(ctx.tracks[key]).forEach(track => {
  //       const name = track.split('.').pop();
  //       const prop = `@${name}`;

  //       index[prop] = index[prop] || { value: [] };
  //       index[prop].value.push(ctx.tracks[key][track]);
  //     });
  //   });
  // }

  // if (!ctx.main.length) {
  //   Object.keys(index).forEach(key => {
  //     console.log(key);
  //   });
  // }

  // FIXME: how to compose?
  //
  // we have `>` as markers for entry-points, values resolved here are
  // bundled into a giant array of values... that array, is then translated on the
  // fly or compiled down to MIDI files...
  // console.log({groups});
  // Object.keys(index).forEach(key => {
  //   index[key].tracks = index[key].value;
  //   console.log(index[key].tracks);
  // });

  console.log(require('util').inspect(scenes, { colors: true, depth: 10 }));
  return [];
}
