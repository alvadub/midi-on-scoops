import { reduce } from './parser';

export function mix(ctx) {
  const index = { ...ctx.data };

  if (ctx.tracks) {
    Object.keys(ctx.tracks).forEach(key => {
      Object.keys(ctx.tracks[key]).forEach(sub => {
        const name = `@${sub.split('.').pop()}`;

        index[name] = { type: 'channel', value: [key, ctx.tracks[key][sub]] };
      });
    });
  }

  if (!ctx.main.length) {
    Object.keys(index).forEach(key => {
      ctx.main.push({ type: 'param', value: key });
    });
    return reduce(ctx.main, { data: index });
  }

  // FIXME: how to compose?
  //
  // we have `>` as markers for entry-points, values resolved here are
  // bundled into a giant array of values... that array, is then translated on the
  // fly or compiled down to MIDI files...

  console.log(JSON.stringify(ctx, null, 2));
  return [{ type: 'channel' }];
}
