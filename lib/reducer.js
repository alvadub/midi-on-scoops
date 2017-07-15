'use strict';

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

  while (times--) {
    out.push(value);
  }

  return out;
}

function flatten(value) {
  return value.reduce((prev, cur) =>
    prev.concat(Array.isArray(cur)
      ? flatten(cur)
      : cur), []);
}

function resolve(value, context, callback) {
  value = Array.isArray(context[value])
    ? context[value].map(x => callback(x, context))
    : context[value];

  if (value.indexOf('%')) {
    return resolve(value, context, callback);
  }

  return value;
}

module.exports = function reduce(input, context) {
  if (!Array.isArray(input)) {
    return resolve(input, context, reduce);
  }

  let skip;

  return input.reduce((prev, cur, i) => {
    const last = prev[prev.length - 1];
    const next = input[i + 1] || {};

    if (skip) {
      skip = false;
      return prev;
    }

    switch (cur.type) {
      case 'pattern':
      case 'number':
      case 'note':
        if (cur.repeat) add(prev, repeat(cur.value, cur.repeat));
        else if (Array.isArray(cur.value)) add(prev, cur.value);
        else prev.push(cur.value);
        break;

      case 'chord':
        if (cur.repeat) add(prev, repeat(cur.value, cur.repeat));
        else if (cur.unfold) add(prev, cur.value);
        else prev.push(cur.value);
        break;

      case 'range':
        if (next.type === 'divide') {
          add(prev, range(cur.value[0], cur.value[1], next.value));
          skip = true;
        } else {
          const value = range(cur.value[0], cur.value[1]);

          if (next.type === 'multiply') {
            add(prev, flatten(repeat(value, next.value)));
            skip = true;
          } else if (cur.repeat) {
            add(prev, repeat(value, cur.repeat));
          } else {
            add(prev, value);
          }
        }
        break;

      case 'divide':
        return prev.map(x => x / cur.value);

      case 'multiply':
        add(prev, repeat(last, cur.value - 1));
        break;

      case 'slice':
        return prev.slice(cur.value[0], cur.value[1]);

      case 'param':
      default: {
        const value = resolve(cur.value, context, reduce);

        if (cur.repeat) add(prev, repeat(value, cur.repeat));
        else prev.push(value);
      }
    }

    return prev;
  }, []);
};
