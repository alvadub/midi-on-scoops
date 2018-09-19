'use strict';

const RE_NORMALIZE = /\W/g;

function add(obj, args) {
  Array.prototype.push.apply(obj, args);
}

function range(min, max, step) {
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

function repeat(value, times) {
  const out = [];

  while (times) {
    out.push(value);

    times -= 1;
  }

  return out;
}

function resolve(value, context) {
  if (!value) {
    return null;
  }

  if (typeof value === 'string' && value.indexOf('%') > -1) {
    return resolve(context[value], context);
  }

  return value;
}

function merge(target, source) {
  Object.keys(source).forEach(key => {
    if (typeof target[key] === 'undefined') {
      target[key] = source[key];
    }
  });

  return target;
}

function flatten(value) {
  return value.reduce((prev, cur) => prev.concat(Array.isArray(cur)
    ? flatten(cur)
    : cur), []);
}

function normalize(value) {
  return value.replace(RE_NORMALIZE, '_');
}

module.exports = {
  add,
  range,
  repeat,
  resolve,
  merge,
  flatten,
  normalize,
};
