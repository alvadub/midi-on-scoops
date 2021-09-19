import { pitch } from './tokenize';
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

// export function convert(pattern, values) {
//   const copy = values ? values.slice() : [];

//   return pattern.split('').reduce((memo, cur) => {
//     let tmp = cur === '-' ? 0 : 127;
//     if (cur === 'x' && values && copy.length > 0) {
//       tmp = copy.shift();

//       if (Array.isArray(tmp)) {
//         tmp = tmp.map(pitch);
//       } else {
//         tmp = pitch(tmp);
//       }
//     }
//     if (typeof tmp === 'number') memo.push(tmp);
//     return memo;
//   }, []);
// }

export function mix(ctx) {
  const index = { ...ctx.data };
  const scenes = {};

  Object.entries(ctx.tracks).forEach(([name, tracks]) => {
    Object.entries(tracks).forEach(([ch, clips]) => {
      const [tag, id] = ch.split('#');
      const key = tag || 'default';
      const values = [];

      clips.forEach(clip => {
        // values.push(convert(reduce(clip.input, index).join(''), clip.data));
        // console.log(clip);
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
  return [{ type: 'channel' }];
}
