'use strict';

const scribble = require('scribbletune');

const RE_TOKENIZE = /[*/]+|[\dx._-]+|(?:[a-z]{2,}|[a-g][#b]?|%)\S*/gi;
const RE_CHORDS = /^[A-G][\w#]{3,7}-?\d*(?:\.{2,3})?$/;
const RE_NOTES = /^(?:[a-z]{2,}|[a-g][#b]?\d*|#\d+)$/i;
const RE_RANGE = /^-?[\d.]+\.\.-?[\d.]+$/;
const RE_DUPLICATE = /^\d+[\d.]*x\d+$/;
const RE_NUMBER = /^-?\d+(?:\.\d+)?$/;
const RE_MODES = /^(?:yo|\w{5,})$/;
const RE_SPREAD = /\.{2,3}$/g;
const RE_PATTERN = /^[x_-]+$/;
const RE_SEPARATOR = /[|,]/;
const RE_MUL = /^\*$/;
const RE_DIV = /^\/$/;

function add(out, value) {
  Array.prototype.push.apply(out, value);
}

function push(out, value) {
  if (RE_PATTERN.test(value)) add(out, value.split(''));
  if (RE_NUMBER.test(value)) add(out, [parseFloat(value)]);

  return out;
}

function repeat(value) {
  const set = value.split('x');
  const acc = [];

  for (let i = 0; i < set[1]; i++) {
    acc.push(parseFloat(set[0]));
  }

  return acc;
}

function range(min, max, step) {
  const acc = [];

  if (!step) {
    for (let i = min; i <= max; i++) {
      acc.push(parseFloat(i));
    }

    return acc;
  }

  const diff = (max - min) / step;

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

function splice(out, value, subvalue) {
  const set = value.split('..');

  if (subvalue !== false) {
    if (Array.isArray(out[out.length - 1])) {
      out = out[out.length - 1];
    }
  }

  if (set[0] > 0) out.splice(0, set[0]);

  out.splice(set[1]);
}

function sequence(out, value, _splice) {
  let _suffix;

  if (RE_PATTERN.test(value[0])) {
    return;
  }

  if (!(RE_MODES.test(value[1]) || RE_NUMBER.test(value[1]))) {
    _suffix = value.pop();
  }

  if (_splice !== false) {
    out.splice(out.length - value.length);
  }

  const octave = RE_NUMBER.test(value[value.length - 1])
    ? parseInt(value.pop(), 10)
    : undefined;

  const note = value.shift();
  const mode = value.join(' ') || undefined;

  if (note.indexOf('..') > -1 || RE_CHORDS.test(note)) {
    const chord = scribble.chord(note.replace(RE_SPREAD, ''));

    if (!chord.length) {
      throw new Error(`Expecting a valid chord, given '${note}'`);
    }

    _suffix = octave;

    add(out, note.indexOf('...') === -1
      ? [chord]
      : chord);
  } else {
    add(out, scribble.mode(note, mode, octave));
  }

  if (_suffix) {
    push(out, _suffix);
  }
}

// FIXME: add options?
module.exports = expression => {
  if (!expression || typeof expression !== 'string') {
    throw new Error(`Expecting a valid string, given '${expression}'`);
  }

  const tokens = expression.match(RE_TOKENIZE);

  if (!tokens) {
    throw new Error(`Expecting a valid expression, given '${expression}'`);
  }

  const acc = [];

  let value;
  let capture;
  let offset = 0;

  while (offset < tokens.length) {
    const prev = tokens[offset - 1] || '';
    const token = tokens[offset];
    const nextToken = tokens[offset + 1] || '';

    if (token.charAt() === '%') {
      acc.push(token);
      offset++;
      continue;
    }

    if (RE_SEPARATOR.test(token)) {
      add(acc, [token.split(RE_SEPARATOR)]);
      offset++;
      continue;
    }

    if (!(RE_DIV.test(token) || RE_MUL.test(token)
      || RE_NUMBER.test(token) || RE_NOTES.test(token) || RE_PATTERN.test(token)
      || RE_CHORDS.test(token) || RE_RANGE.test(token) || RE_DUPLICATE.test(token))) {
      throw new Error(`Expecting a valid expression, given '${token}'`);
    }

    if ((RE_MUL.test(prev) || RE_DIV.test(prev))
      && (RE_MUL.test(nextToken) || RE_DIV.test(nextToken))) {
      throw new Error(`Expecting a valid expression, given '${prev} ${token} ${nextToken}'`);
    }

    if (capture && !value) {
      capture = null;

      if (RE_MUL.test(token)) {
        const copy = [];

        let max = nextToken;

        while (max--) {
          copy.push(prev);
        }

        add(acc, copy);
        offset++;
        continue;
      }

      if (RE_RANGE.test(nextToken)) {
        splice(acc, nextToken, false);
        offset++;
        offset++;
        continue;
      }
    }

    if (RE_NOTES.test(token) && RE_MUL.test(nextToken)) {
      capture = true;
      offset++;
      continue;
    }

    if (RE_NOTES.test(prev)
      && !(RE_NUMBER.test(token) || RE_CHORDS.test(token))
      && !(RE_MODES.test(token) || RE_NUMBER.test(nextToken))) {
      if (!nextToken) add(acc, [prev, token]);
      else add(acc, [prev]);
      offset++;
      continue;
    }

    if (RE_CHORDS.test(prev) && RE_MUL.test(token) && RE_NUMBER.test(nextToken)) {
      sequence(acc, [prev], false);

      let copy;

      if (Array.isArray(acc[acc.length - 1])) {
        copy = [acc[acc.length - 1].slice()];
      } else {
        copy = acc.slice();
      }

      let max = nextToken - 1;

      while (max--) {
        add(acc, copy);
      }

      capture = true;
      offset++;
      continue;
    }

    if (RE_CHORDS.test(token)) {
      if (!RE_MUL.test(nextToken)) {
        sequence(acc, [token], false);
      }

      offset++;
      continue;
    }

    if (RE_CHORDS.test(prev) && !RE_MUL.test(token)) {
      if (RE_RANGE.test(token)) {
        splice(acc, token);
      } else if (!nextToken) {
        add(acc, [token]);
      }

      offset++;
      continue;
    }

    if (RE_RANGE.test(prev)) {
      value = value || [];

      add(value, div(prev));

      if (!RE_RANGE.test(nextToken)) {
        add(acc, value);

        if (RE_RANGE.test(token)) add(acc, div(token));
        else push(acc, token);

        if (nextToken) push(acc, nextToken);

        value = null;
        offset++;
      }

      offset++;
      continue;
    }

    if (RE_RANGE.test(token)) {
      if (prev
        && !(RE_RANGE.test(prev))
        && !(RE_DIV.test(nextToken) || RE_MUL.test(nextToken))) {
        push(acc, prev);

        if (!nextToken) {
          add(acc, div(token));
        }

        offset++;
        continue;
      }

      if (!prev && !nextToken) {
        add(acc, div(token));
        offset++;
        continue;
      }
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
          offset++;
        }

        value = null;
        offset++;
      }

      offset++;
      continue;
    }

    if (RE_NOTES.test(token) && !nextToken) {
      sequence(acc, [token]);
      offset++;
      continue;
    }

    if (RE_RANGE.test(token)) {
      if (!RE_DIV.test(nextToken)) {
        splice(acc, token);
        offset++;
        continue;
      }

      if (prev) {
        push(acc, prev);
      }
    }

    if (RE_DUPLICATE.test(token)) {
      add(acc, repeat(token));
      offset++;
      continue;
    }

    if (RE_DIV.test(prev) && RE_NUMBER.test(value) && nextToken) {
      add(acc, div(value, token));
      offset++;
      continue;
    }

    if (RE_DIV.test(token)) {
      if (!prev || !RE_NUMBER.test(prev)) {
        throw new Error(`Expecting a valid number, given '${prev} / ${nextToken}'`);
      }
    }

    if (RE_MUL.test(nextToken) || RE_DIV.test(nextToken)) {
      capture = true;
      value = token;
      offset += 2;
      continue;
    }

    if (RE_PATTERN.test(nextToken) || RE_NUMBER.test(nextToken)) {
      if (token) push(acc, token);
      capture = null;
      offset++;
      continue;
    }

    if (!prev && (RE_DIV.test(token) || RE_MUL.test(token))) {
      throw new Error(`Expecting a valid number first, given '${token}'`);
    }

    if (prev && !(RE_DIV.test(prev) || RE_MUL.test(prev))) {
      if (token) push(acc, token);
      capture = null;
    }

    if (capture) {
      if (RE_DIV.test(prev)) {
        if (RE_RANGE.test(value)) {
          add(acc, div(value, token));
          capture = null;
          offset++;
          continue;
        }

        if (!(RE_NUMBER.test(value) && RE_NUMBER.test(token))) {
          throw new Error(`Expecting a valid number, given '${value} / ${token}'`);
        }

        add(acc, div(value, token));
      }

      if (RE_MUL.test(prev)) {
        if (!RE_NUMBER.test(token)) {
          throw new Error(`Expect a valid number, given '${value} * ${token}'`);
        }

        if (RE_NUMBER.test(value)) {
          push(acc, value * token);
        } else {
          push(acc, value.repeat(token));
        }
      }

      value = null;
      capture = null;
    }

    offset++;
  }

  return acc;
};
