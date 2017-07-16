'use strict';

const utils = require('./utils');

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
      utils.add(prev, cur.map(x => utils.resolve(x, context)));
      return prev;
    }

    switch (cur.type) {
      case 'pattern':
      case 'number':
      case 'note':
        if (cur.repeat) utils.add(prev, utils.repeat(cur.value, cur.repeat));
        else if (Array.isArray(cur.value)) utils.add(prev, cur.value);
        else prev.push(cur.value);
        break;

      case 'chord':
        if (cur.repeat) utils.add(prev, utils.repeat(cur.value, cur.repeat));
        else if (cur.unfold) utils.add(prev, cur.value);
        else prev.push(cur.value);
        break;

      case 'range':
        if (next.type === 'divide') {
          utils.add(prev, utils.range(cur.value[0], cur.value[1], next.value));
          skip = true;
        } else {
          const value = utils.range(cur.value[0], cur.value[1]);

          if (next.type === 'multiply') {
            utils.add(prev, utils.flatten(utils.repeat(value, next.value)));
            skip = true;
          } else if (cur.repeat) {
            utils.add(prev, utils.repeat(value, cur.repeat));
          } else {
            utils.add(prev, value);
          }
        }
        break;

      case 'divide':
        return prev.map(x => x / cur.value);

      case 'multiply':
        utils.add(prev, utils.repeat(last, cur.value - 1));
        break;

      case 'slice':
        return prev.slice(cur.value[0], cur.value[1]);

      case 'param':
      default: {
        let value = cur.value.indexOf('%') > -1
          ? utils.resolve(context[cur.value], context)
          : cur.value;

        if (value === null) {
          throw new Error(`Missing expression for '${cur.value}'`);
        }

        if (value[0] && value[0].type) {
          value = reduce(value, context);

          if (cur.repeat) {
            utils.add(prev, utils.repeat(value, cur.repeat).reduce((_prev, _cur) => {
              utils.add(_prev, _cur);
              return _prev;
            }, []));
          } else {
            utils.add(prev, value);
          }

          return prev;
        }

        value = Array.isArray(value)
          ? value.map(x => utils.resolve(x, context))
          : [value];

        if (cur.repeat) utils.add(prev, utils.repeat(value, cur.repeat));
        else utils.add(prev, value);
      }
    }

    return prev;
  }, []);
};
