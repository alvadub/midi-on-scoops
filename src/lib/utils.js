export const RE_NORMALIZE = /\W/g;

export function range(min, max, step) {
  const acc = [];
  if (!step) {
    for (let i = min; i <= max; i += 1) {
      acc.push(i);
    }
  } else {
    const diff = (max - min) / step;

    for (let i = min; i <= max; i += diff) {
      acc.push(i);
    }
  }

  return acc;
}

export function repeat(value, times) {
  const out = [];

  while (times) {
    out.push(value);

    times -= 1;
  }

  return out;
}

export function resolve(value, context) {
  if (!value) {
    return null;
  }

  if (typeof value === 'string' && value.indexOf('%') > -1) {
    return resolve(context[value], context);
  }

  return value;
}

export function merge(target, source) {
  Object.keys(source).forEach(key => {
    if (typeof target[key] === 'undefined') {
      target[key] = source[key];
    }
  });

  return target;
}

export function flatten(value) {
  return value.reduce((prev, cur) => prev.concat(Array.isArray(cur)
    ? flatten(cur)
    : cur), []);
}

export function normalize(value) {
  return value.replace(RE_NORMALIZE, '_');
}
