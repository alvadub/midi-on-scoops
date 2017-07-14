'use strict';

module.exports = (input, context) => {
  return input.reduce((prev, cur) => {
    let value;

    if (cur.charAt() === '%') {
      value = cur === '%'
        ? prev[prev.length - 1]
        : (context[cur] && context[cur].input);

      if (!value) {
        throw new Error(`Expecting a value for ${cur}, given '${value}'`);
      }
    } else {
      value = cur;
    }

    value = !Array.isArray(value) && value
      ? [value]
      : value;

    Array.prototype.push.apply(prev, value.map(x => {
      if (x.indexOf('%') > -1) {
        return reduce(x, context);
      }

      return x;
    }));

    return prev;
  }, []);
};
