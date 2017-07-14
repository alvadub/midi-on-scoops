'use strict';

// FIXME: reuse...
const RE_PATTERN = /^[x_-]+$/;

module.exports = function reduce(input, context) {
  let pattern;
  let last;

  const result = input.reduce((prev, cur) => {
    if (typeof cur === 'string' && cur.charAt() === '%') {
      let value = cur !== '%'
        ? (context[cur] && context[cur].input)
        : null;

      if (cur === '%') {
        value = last || prev[prev.length - 1];
      }

      last = value;

      if (Array.isArray(value)) {
        Array.prototype.push.apply(prev, reduce(value, context));
      } else {
        pattern = RE_PATTERN.test(value);
        prev.push(value);
      }
    } else {
      prev.push(cur);
    }

    return prev;
  }, []);

  if (pattern) {
    return result.join('');
  }

  return result;
};
