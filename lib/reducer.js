'use strict';

module.exports = function reduce(input, context) {
  let last;

  const result = input.reduce((prev, cur) => {
    if (typeof cur === 'string' && cur.charAt() === '%') {
      let value = cur !== '%'
        ? (context[cur] && context[cur])
        : null;

      if (cur === '%') {
        value = last || prev[prev.length - 1];
      }

      value = Array.isArray(value)
        ? reduce(value, context)
        : value;

      if (Array.isArray(value)) {
        Array.prototype.push.apply(prev, value);
      } else {
        prev.push(value);
      }

      last = value;
    } else {
      prev.push(cur);
    }

    return prev;
  }, []);

  return result;
};
