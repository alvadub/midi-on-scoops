'use strict';

const scribble = require('scribbletune');

const RE_SEPARATOR = /[,|]/;
const RE_PATTERN = /^[x_-]+$/;
const RE_NUMBER = /^\d+(?:\.\d+)?$/;
const RE_CHORD = /^[A-G][#\w-]{3,7}/;
const RE_NOTE = /^[a-gA-G][#b]?\d*/;
const RE_MODE = /^(?:[a-z]{2,}|[a-g])$/;
const RE_TRIM = /\.+$/;

function getType(value) {
  if (RE_PATTERN.test(value)) {
    return 'pattern';
  }

  if (RE_NUMBER.test(value)) {
    return 'number';
  }

  if (RE_CHORD.test(value)) {
    return 'chord';
  }

  if (RE_NOTE.test(value)) {
    return 'note';
  }

  if (RE_MODE.test(value)) {
    return 'mode';
  }

  return 'value';
}

module.exports = expression => {
  if (!expression || typeof expression !== 'string') {
    throw new Error(`Expecting a valid string, given '${expression}'`);
  }

  const tokens = expression.split(/\s+/);

  if (!tokens) {
    throw new Error(`Expecting a valid expression, given '${expression}'`);
  }

  const ast = [];
  const carry = [];

  function add(type, value) {
    const item = { type, value };

    if (type === 'chord' && typeof value === 'string') {
      item.value = scribble.chord(value.replace(RE_TRIM, ''));

      if (value.indexOf('...') > -1) {
        item.spread = 2;
      } else if (value.indexOf('..') > -1) {
        item.spread = 1;
      }
    }

    ast.push(item);
  }

  tokens.reduce((prev, cur, i) => {
    let type;

    const next = tokens[i + 1];
    const last = ast[ast.length - 1] || {};

    if (RE_SEPARATOR.test(cur)) {
      add('chord', cur.split(RE_SEPARATOR));
      return prev;
    }

    if (RE_NOTE.test(cur) || RE_MODE.test(cur) || RE_NUMBER.test(cur)) {
      carry.push(cur);

      if (!next || carry.length === 3
        || !(RE_NOTE.test(next) || RE_MODE.test(next) || RE_NUMBER.test(next))) {
        const old = carry.splice(0, carry.length);

        if (RE_NUMBER.test(old[old.length - 1])
          || (RE_MODE.test(old[old.length - 1]) && old[old.length - 1].length > 1)) {
          add('mode', old.join(' '));
        } else {
          old.forEach(note => {
            add(note.length > 1 ? getType(note) : 'mode', note);
          });
        }
      }

      return prev;
    }

    if (typeof cur === 'string' && cur.indexOf('..') > -1) {
      type = last.type === 'mode' || last.type === 'chord'
        || (Array.isArray(prev) && last.type !== 'range')
        ? 'slice'
        : 'range';

      const x = cur.split('..');

      if (!(RE_NUMBER.test(x[0]) && RE_NUMBER.test(x[1]))) {
        throw new Error(`Expecting valid numbers for ${type}, given '${prev} ${cur}'`);
      }

      cur = x.map(n => parseInt(n, 10));
    }

    if (typeof cur === 'string' && (cur.charAt() === '/' || cur.charAt() === '*')) {
      const operator = cur.charAt() === '/' ? 'divide' : 'multiply';
      const number = cur.substr(1);

      if (!RE_NUMBER.test(number)) {
        throw new Error(`Expecting a valid expression to ${operator}, given '${tokens.slice(0, i).join(' ')} ${cur}'`);
      }

      add(operator, parseInt(number, 10));

      return prev;
    }

    add(type || getType(cur), typeof cur === 'string' && RE_NUMBER.test(cur)
      ? parseInt(cur, 10)
      : cur);

    return cur;
  }, null);

  return ast;
};
