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

  return ctx.main.reduce((prev, x) => prev.concat(reduce(x, { data: index })), []);
}
