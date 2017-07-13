'use strict';

const scribble = require('scribbletune');

const RE_TOKENIZE = /[*/]+|[\dx._-]+|[a-z]{2,}|[a-f]/ig;
const RE_NOTES = /^(?:[a-z]{2,}|[a-f]|#\d+)$/;
const RE_RANGE = /^-?[\d.]+\.\.-?[\d.]+$/;
const RE_DUPLICATE = /^\d+[\d.]*x\d+$/;
const RE_NUMBER = /^-?\d+(?:\.\d+)?$/;
const RE_PATTERN = /^[x_-]+$/;
const RE_MUL = /^\*$/;
const RE_DIV = /^\/$/;

function repeat(value) {
  const set = value.split('x');
  const acc = [];

  for (let i = 0; i < set[1]; i += 1) {
    acc.push(parseFloat(set[0]));
  }

  return acc;
}

function range(min, max, step) {
  if (!step) {
    return [min, 'RANGE', max];
  }

  const diff = (max - min) / step;
  const acc = [];

  for (let i = parseFloat(min); i <= max; i += diff) {
    acc.push(i);
  }

  return acc;
}

function div(value, times) {
  if (RE_RANGE.test(value)) {
    const set = value.split('..');

    return range(set[0], set[1], times);
  }

  return [value / times];
}

function add(out, value) {
  Array.prototype.push.apply(out, value);
}

function push(out, value) {
  if (RE_PATTERN.test(value)) add(out, value.split(''));
  if (RE_NUMBER.test(value)) add(out, [parseFloat(value)]);

  return out;
}

function splice(out, value) {
  const set = value.split('..');

  if (set[0] > 0) out.splice(0, set[0]);

  out.splice(set[1]);
}

function sequence(out, value) {
  out.splice(out.length - value.length);

  const octave = RE_NUMBER.test(value[value.length - 1])
    ? parseInt(value.pop(), 10)
    : 3;

  const note = value.shift();

  add(out, scribble.mode(note, value.join(' ') || undefined, octave));
}

module.exports = expression => {
  if (!expression || typeof expression !== 'string') {
    throw new Error(`Expecting a valid string, given '${expression}'`);
  }

  const tokens = expression.match(RE_TOKENIZE);
  const acc = [];

  let value;
  let capture;
  let offset = 0;

  while (offset < tokens.length) {
    const prev = tokens[offset - 1] || '';
    const token = tokens[offset];
    const nextToken = tokens[offset + 1] || '';

    if (!(RE_NUMBER.test(token)
      || RE_PATTERN.test(token) || RE_NOTES.test(token)
      || RE_RANGE.test(token) || RE_DUPLICATE.test(token))) {
      throw new Error(`Expecting a valid expression, given '${token}'`);
    }

    if (!nextToken && !prev) {
      push(acc, token);
    }

    if (RE_NOTES.test(prev)) {
      value = value || [];
      value.push(prev);

      if (!RE_NUMBER.test(nextToken)) {
        sequence(acc, value.concat(token));

        if (RE_RANGE.test(nextToken)) {
          splice(acc, nextToken);
          offset += 1;
        }

        value = null;
        offset += 1;
      }

      offset += 1;
      continue;
    }

    if (RE_NOTES.test(token) && !nextToken) {
      sequence(acc, [token]);
      offset += 1;
      continue;
    }

    if (RE_RANGE.test(token)) {
      if (!RE_DIV.test(nextToken)) {
        splice(acc, token);
        offset += 1;
        continue;
      }

      if (prev) {
        push(acc, prev);
      }
    }

    if (RE_DUPLICATE.test(token)) {
      add(acc, repeat(token));
      offset += 1;
      continue;
    }

    if (RE_MUL.test(nextToken) || RE_DIV.test(nextToken)) {
      capture = true;
      value = token;
      offset += 2;
      continue;
    }

    if (RE_PATTERN.test(nextToken) || RE_NUMBER.test(nextToken)) {
      if (token) push(acc, token);
      offset += 1;
      continue;
    }

    if (prev && !(RE_DIV.test(prev) || RE_MUL.test(prev))) {
      if (token) push(acc, token);
    }

    if (capture) {
      if (RE_DIV.test(prev)) {
        if (RE_RANGE.test(value)) {
          add(acc, div(value, token));
          offset += 1;
          continue;
        }

        if (!(RE_NUMBER.test(value) && RE_NUMBER.test(token))) {
          throw new Error(`Expecting a valid number, given '${value} / ${token}'`);
        }

        push(acc, value / token);
      }

      if (RE_MUL.test(prev)) {
        if (!RE_NUMBER.test(token)) {
          throw new Error(`Expect a valid number, given '${value} * ${token}'`);
        }

        if (RE_NUMBER.test(value)) push(acc, value * token);
        else push(acc, value.repeat(token));
      }

      value = null;
      capture = null;
    }

    offset++;
  }

  return acc;
};
