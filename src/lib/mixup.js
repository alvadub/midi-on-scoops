import { reduce } from './parser';

export function mix(ctx) {
  const index = { ...ctx.data };

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
  //     console.log(ctx);
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

  console.log(require('util').inspect(index, { colors: true, depth: 10 }));
  return [{ type: 'channel' }];
}
