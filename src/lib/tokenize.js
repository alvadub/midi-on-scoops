import { inlineChord } from 'harmonics';
import { euclidean, parseEuclideanToken } from './euclidean';

export const RE_SEPARATOR = /\|/;
export const RE_PATTERN = /^(?:[x_-]|\[.+?\])+$/;
export const RE_NUMBER = /^(?:\.?\d+|\d+(?:\.\d+)?)$/;
export const RE_CHORD = /^[a-gA-G][^#\s]*\d+(?:\.\.)?$/;
export const RE_NOTE = /^[a-gA-G][#b]?\d+$/;
export const RE_MODE = /^(?![ivIV]{1,3})[a-z]{2,}/;
export const RE_PROG = /^[ivIV]{1,3}°?$/;
export const RE_TRIM = /\.+$/;
export const RE_DEGREE = /^\d+(?:\.\.\d+)?$/;

const CACHE = {};

export function split(value) {
  let data = [];
  try {
    data = JSON.stringify(value.split(/(?=[\d[\]x_-])/));
    data = data.replace(/,"\[",/g, ', [');
    data = data.replace(/"\[",/g, '[');
    data = data.replace(/,"\]"/g, ']');
    data = JSON.parse(data);
  } catch (e) {
    // ignore
  }
  return data;
}

export function level(value) {
  if (!CACHE[value]) {
    if (value.includes('%')) {
      CACHE[value] = 127 * parseFloat(`.${value}`);
    } else if (value.includes('/')) {
      const [a, b] = value.split('/');

      CACHE[value] = a / b;
    } else if (value.includes('*')) {
      const [a, b] = value.split('*');

      CACHE[value] = a * b;
    } else {
      CACHE[value] = parseFloat(value);
    }
  }
  return CACHE[value];
}

export function validate(re, value) {
  if (!CACHE[re.source + value]) {
    CACHE[re.source + value] = re.test(value);
  }
  return CACHE[re.source + value];
}

export function isProgression(value) {
  return validate(RE_PROG, value);
}

export function isDegree(value) {
  return validate(RE_DEGREE, value);
}

export function isPattern(value) {
  return validate(RE_PATTERN, value);
}

export function isNumber(value) {
  return validate(RE_NUMBER, value);
}

export function isChord(value) {
  return validate(RE_CHORD, value);
}

export function isNote(value) {
  return validate(RE_NOTE, value);
}

export function isMode(value) {
  return validate(RE_MODE, value);
}

export function getType(value) {
  const key = `T${value}`;
  if (!CACHE[key]) {
    if (isNote(value)) CACHE[key] = 'note';
    else if (isChord(value)) CACHE[key] = 'chord';
    else if (isPattern(value)) CACHE[key] = 'pattern';
    else if (isMode(value)) CACHE[key] = 'mode';
    else if (isNumber(value)) CACHE[key] = 'number';
    else CACHE[key] = 'value';
  }
  return CACHE[key];
}

export function transform(expression) {
  if (!expression || typeof expression !== 'string') {
    throw new Error(`Expecting a valid string, given '${expression}'`);
  }

  if (CACHE[`$${expression}`]) return CACHE[`$${expression}`];

  const tokens = expression.split(/\s+/);

  if (!tokens.length) {
    throw new Error(`Expecting a valid expression, given '${expression}'`);
  }

  const ast = [];
  const carry = [];
  const ignore = new Set();

  function add(type, value) {
    const item = { type, value };

    if (type === 'number' && typeof value === 'string') {
      item.value = typeof value === 'string' ? level(value) : value;
    }

    if (type === 'chord' && typeof value === 'string') {
      item.value = inlineChord(value.replace(RE_TRIM, ''));

      if (value.includes('..')) {
        item.unfold = true;
      }
    }

    if (type === 'value' && value.indexOf('x') > -1) {
      const x = value.split('x');

      if (!(isNumber(x[0]) && isNumber(x[1]))) {
        throw new Error(`Expecting valid numbers for ${type}, given '${value}'`);
      }

      item.value = parseInt(x[0], 10);
      item.repeat = parseInt(x[1], 10);
      item.type = 'number';
    }

    ast.push(item);
  }

  tokens.reduce((prev, cur, i) => {
    if (ignore.has(i)) return prev;

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

    if (cur === '**') {
      const degrees = [];
      let offset = i + 1;

      while (tokens[offset] && isDegree(tokens[offset])) {
        degrees.push(tokens[offset]);
        ignore.add(offset);
        offset += 1;
      }

      if (!degrees.length) {
        throw new Error(`Missing degree expression after '**', given '${tokens.slice(0, i + 1).join(' ')}'`);
      }

      add('degrees', degrees);
      return prev;
    }

    if (typeof cur === 'string' && cur.charAt() === '*') {
      throw new Error(`Deprecated repeat syntax '${cur}'. Use 'xN' instead`);
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
      if (last.type === 'mode' || last.type === 'progression' || last.type === 'value') {
        last.value += ` ${cur}`;
        return prev;
      }

      add('value', cur);
      return prev;
    }

    if (cur === '++') {
      const progression = [];
      let offset = i + 1;

      while (tokens[offset] && isProgression(tokens[offset])) {
        progression.push(tokens[offset]);
        ignore.add(offset);
        offset += 1;
      }

      if (!progression.length) {
        throw new Error(`Missing progression after '++', given '${tokens.slice(0, i + 1).join(' ')}'`);
      }

      add('progression', progression.join(' '));
      return prev;
    }

    if (cur.charAt() === '#') {
      add('channel', cur);
      return prev;
    }

    const euclid = parseEuclideanToken(cur);
    if (euclid) {
      add('pattern', euclidean(euclid.onsets, euclid.steps, euclid.rotation));
      return prev;
    }

    if (isNote(cur) || isChord(cur) || isMode(cur) || isNumber(cur)) {
      carry.push(cur);

      if (
        !next
        || carry.length === 3
        || !(isNote(next) || isMode(next) || isNumber(next))
      ) {
        const old = carry.splice(0, carry.length);
        const test = old[0];

        let mode = old[1];
        let octave = old[2];

        if (!octave && isNumber(mode)) {
          octave = mode;
          mode = undefined;
        }

        if (
          test.length < 2
          && isNote(test)
          && (isMode(mode) || isNumber(octave))
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
      const parts = cur.split('..');
      const rawMin = parts[0];
      const rawMax = parts[1];
      const min = rawMin
        ? (isNumber(rawMin) ? parseInt(rawMin, 10) : rawMin)
        : 1;
      const max = rawMax
        ? (isNumber(rawMax) ? parseInt(rawMax, 10) : rawMax)
        : Infinity;

      if (typeof min === 'number' && min < 1) {
        throw new Error(`Slice start must be >= 1, given '${cur}'`);
      }

      type = 'slice';
      cur = [min, max];
    }

    if (typeof cur === 'string' && !isPattern(cur) && (cur.charAt() === '/' || /^x\d+$/.test(cur))) {
      const operator = cur.charAt() === '/' ? 'divide' : 'multiply';
      const number = cur.substr(1);

      if (!isNumber(number)) {
        throw new Error(`Expecting a valid expression to ${operator}, given '${tokens.slice(0, i).join(' ')} ${cur}'`);
      }

      add(operator, parseFloat(number));
      return prev;
    }

    if (!type && getType(cur) === 'value' && Array.isArray(last.value)) {
      last.value[1] = last.value[1] || '';
      last.value[1] += last.value[1] ? ' ' : '';
      last.value[1] += cur;
      return cur;
    }

    add(type || getType(cur), typeof cur === 'string' && isNumber(cur) ? parseInt(cur, 10) : cur);
    return cur;
  }, null);

  CACHE[`$${expression}`] = ast;
  return ast;
}
