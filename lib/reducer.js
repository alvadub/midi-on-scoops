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

function resolve(value, context) {
  if (!value) {
    return null;
  }

  if (typeof value === 'string' && value.indexOf('%') > -1) {
    return resolve(context[value], context);
  }

  return value;
}

module.exports = function reduce(input, context) {
  if (!Array.isArray(input)) {
    return input;
  }

  let skip;

  return input.reduce((prev, cur, i) => {
    const last = prev[prev.length - 1];
    const next = input[i + 1] || {};

    if (skip) {
      skip = false;
      return prev;
    }

    if (Array.isArray(cur)) {
      add(prev, cur.map(x => resolve(x, context)));
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
        let value = cur.value.indexOf('%') > -1
          ? resolve(context[cur.value], context)
          : cur.value;

        if (value === null) {
          throw new Error(`Missing expression for '${cur.value}'`);
        }

        if (value[0] && value[0].type) {
          value = reduce(value, context);

          if (cur.repeat) {
            add(prev, repeat(value, cur.repeat).reduce((_prev, _cur) => {
              add(_prev, _cur);
              return _prev;
            }, []));
          } else {
            add(prev, value);
          }

          return prev;
        }

        value = Array.isArray(value)
          ? value.map(x => resolve(x, context))
          : [value];

        if (cur.repeat) add(prev, repeat(value, cur.repeat));
        else add(prev, value);
      }
    }

    return prev;
  }, []);
};
