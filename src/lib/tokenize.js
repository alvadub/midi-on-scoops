import * as harmonics from 'harmonics';

export const RE_SEPARATOR = /\|/;
export const RE_PATTERN = /^[x_-]+$/;
export const RE_NUMBER = /^\d+(?:\.\d+)?$/;
export const RE_CHORD = /^[a-gA-G][^#\s]*\d+$/;
export const RE_NOTE = /^[a-gA-G][#b]?\d+$/;
export const RE_MODE = /^(?![ivIV]{1,3})[a-z]{2,}/;
export const RE_PROG = /^[ivIV]{1,3}$/;
export const RE_TRIM = /\.+$/;

const CACHE = {};
const TONES = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

export function level(value) {
  if (value.includes('%')) {
    return 127 * parseFloat(`.${value}`);
  }

  if (value.includes('/')) {
    const [a, b] = value.split('/');

    return a / b;
  }

  if (value.includes('*')) {
    const [a, b] = value.split('*');

    return a * b;
  }

  return parseFloat(value);
}

export function pitch(value) {
  if (Array.isArray(value)) return value.map(pitch);
  if (typeof value !== 'string') return false;
  if (CACHE[value]) return CACHE[value];

  const parts = value.split(/(?=-?\d+)/);

  if (parts.length > 2) {
    throw new TypeError(`Unknown '${value}' value`);
  }

  const base = parts[0][0].toUpperCase();
  const sub = parts[0][1];

  let offset = TONES[base];
  if (sub === '#') offset += 1;
  if (sub === 'b') offset -= 1;

  let note = parseInt(parts.pop(), 10);
  if (offset > 11) {
    offset = 0;
    note += 1;
  }
  if (offset < 0) {
    offset = 11;
    note -= 1;
  }

  CACHE[value] = note * 12 + offset;
  return CACHE[value];
}

export function isProgression(value) {
  return RE_PROG.test(value);
}

export function isPattern(value) {
  return RE_PATTERN.test(value);
}

export function isNumber(value) {
  return RE_NUMBER.test(value);
}

export function isChord(value) {
  return RE_CHORD.test(value);
}

export function isNote(value) {
  return RE_NOTE.test(value);
}

export function getType(value) {
  if (isNote(value)) return 'note';
  if (isChord(value)) return 'chord';
  if (RE_MODE.test(value)) return 'mode';
  if (RE_NUMBER.test(value)) return 'number';
  if (RE_PATTERN.test(value)) return 'pattern';
  return 'value';
}

export function transform(expression) {
  if (!expression || typeof expression !== 'string') {
    throw new Error(`Expecting a valid string, given '${expression}'`);
  }

  const tokens = expression.split(/\s+/);

  if (!tokens.length) {
    throw new Error(`Expecting a valid expression, given '${expression}'`);
  }

  const ast = [];
  const carry = [];

  function add(type, value) {
    const item = { type, value };

    if (type === 'number' && typeof value === 'string') {
      item.value = parseInt(value, 10);
    }

    if (type === 'chord' && typeof value === 'string') {
      item.value = harmonics.inlineChord(value.replace(RE_TRIM, ''));

      if (value.indexOf('...') > -1) {
        item.spread = true;
      } else if (value.indexOf('..') > -1) {
        item.unfold = true;
      }
    }

    if (type === 'value' && value.indexOf('x') > -1) {
      const x = value.split('x');

      if (!(RE_NUMBER.test(x[0]) && RE_NUMBER.test(x[1]))) {
        throw new Error(`Expecting valid numbers for ${type}, given '${value}'`);
      }

      item.value = parseInt(x[0], 10);
      item.repeat = parseInt(x[1], 10);
      item.type = 'number';
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

    if (typeof cur === 'string' && (
      (cur.includes('/') && cur.indexOf('/') > 0)
      || (cur.includes('*') && cur.indexOf('*') > 0)
      || (cur.includes('%') && cur.indexOf('%') > 0)
    )) {
      add('number', level(cur));
      return prev;
    }

    if (cur.indexOf('%') > -1) {
      if (cur === '%') {
        if (!last.type) {
          throw new Error(`Missing expression to repeat, given '${tokens.slice(0, i).join(' ')}'`);
        }

        last.repeat = last.repeat || 1;
        last.repeat += 1;
      } else {
        add('param', cur);
      }

      return prev;
    }

    if (isProgression(cur)) {
      last.value += ` ${cur}`;
      return prev;
    }

    if (isNote(cur) || isChord(cur) || RE_MODE.test(cur) || RE_NUMBER.test(cur)) {
      carry.push(cur);

      if (
        !next
        || carry.length === 3
        || !(isNote(next) || RE_MODE.test(next) || RE_NUMBER.test(next))
      ) {
        const old = carry.splice(0, carry.length);
        const test = old[0];

        let mode = old[1];
        let octave = old[2];

        if (!octave && RE_NUMBER.test(mode)) {
          octave = mode;
          mode = undefined;
        }

        if (
          test.length < 2
          && isNote(test)
          && (RE_MODE.test(mode) || RE_NUMBER.test(octave))
        ) {
          add('mode', old.join(' '));
          return prev;
        }

        old.forEach(x => {
          add(x.length > 1 || !isNote(x) ? getType(x) : 'mode', x);
        });
      }
      return prev;
    }

    if (typeof cur === 'string' && cur.indexOf('..') > -1) {
      type = last.type === 'mode'
        || (last.type === 'chord' && last.unfold)
        || (Array.isArray(prev) && last.type !== 'range') ? 'slice' : 'range';

      const parts = cur.split('..');

      if (!(RE_NUMBER.test(parts[0]) && RE_NUMBER.test(parts[1]))) {
        throw new Error(`Expecting valid numbers for ${type}, given '${prev} ${cur}'`);
      }

      cur = parts.map(n => parseInt(n, 10));
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

    if (!type && getType(cur) === 'value' && Array.isArray(last.value)) {
      last.value[1] = last.value[1] || '';
      last.value[1] += last.value[1] ? ' ' : '';
      last.value[1] += cur;
      return cur;
    }

    add(type || getType(cur), typeof cur === 'string' && RE_NUMBER.test(cur) ? parseInt(cur, 10) : cur);
    return cur;
  }, null);

  return ast;
}
