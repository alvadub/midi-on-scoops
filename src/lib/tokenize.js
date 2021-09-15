export const RE_SEPARATOR = /\|/;
export const RE_PATTERN = /^[[\]x_-]+$/;
export const RE_NUMBER = /^\d+(?:\.\d+)?$/;
export const RE_CHORD = /^[A-G][Mm][#\d\w-]*/;
export const RE_MODE = /^(?![iv])[a-z]{2,}/;
export const RE_TRIM = /\.+$/;

const TONES = {
  C: 0,
  'C#': 1,
  'Db': 1,
  D: 2,
  'D#': 3,
  'Eb': 3,
  E: 4,
  F: 5,
  'F#': 6,
  'Gb': 6,
  G: 7,
  'G#': 8,
  'Ab': 8,
  A: 9,
  'A#': 10,
  'Bb': 10,
  B: 11,
};

const CACHE = {};

export function uc(value) {
  return value[0].toUpperCase() + value.substr(1);
}

export function note(value) {
  if (typeof value !== 'string') return false;
  if (CACHE[value]) return CACHE[value];

  const parts = value.split(/(?=-?\d+)/);
  const offset = TONES[uc(parts[0].substr(0, 2))];

  return CACHE[value] = parseInt(parts[1] || 3, 10) * 12 + offset;
}

export function isNote(value) {
  return !isNaN(note(value));
}

export function getType(value) {
  if (RE_PATTERN.test(value)) {
    return 'pattern';
  }

  if (RE_NUMBER.test(value)) {
    return 'number';
  }

  if (RE_CHORD.test(value)) {
    return 'chord';
  }

  if (RE_MODE.test(value)) {
    return 'mode';
  }

  if (isNote(value)) {
    return 'note';
  }

  return 'value';
}

export default (scribble, expression) => {
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
      item.value = scribble.chord(value.replace(RE_TRIM, ''));

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

    if (cur === '**' || cur === '++') {
      const values = [];

      for (let c = ast.length - 1; c >= 0; c -= 1) {
        values.unshift(ast[c]);

        if (ast[c].type === 'note') {
          ast.pop();
          break;
        }

        ast.pop();
      }

      add(cur === '**' ? 'scale' : 'progression', [values.map(x => x.value).join(' ')]);
      return prev;
    }

    if (cur.indexOf('%') > -1) {
      if (cur === '%') {
        if (!ast[ast.length - 1]) {
          throw new Error(`Missing expression to repeat, given '${tokens.slice(0, i).join(' ')}'`);
        }

        ast[ast.length - 1].repeat = ast[ast.length - 1].repeat || 1;
        ast[ast.length - 1].repeat += 1;
      } else {
        add('param', cur);
      }

      return prev;
    }

    if (isNote(cur) || RE_CHORD.test(cur) || RE_MODE.test(cur) || RE_NUMBER.test(cur)) {
      carry.push(cur);

      if (!next || carry.length === 3
        || !(isNote(next) || RE_MODE.test(next) || RE_NUMBER.test(next))) {
        const old = carry.splice(0, carry.length);
        const note = old[0];

        let mode = old[1];
        let octave = old[2];

        if (!octave && RE_NUMBER.test(mode)) {
          octave = mode;
          mode = undefined;
        }

        if (note.length < 2
          && isNote(note)
          && (RE_MODE.test(mode) || RE_NUMBER.test(octave))) {
          add('mode', old.join(' '));
          return prev;
        }

        old.forEach(x => {
          add(x.length > 1 || !isNote(x)
            ? getType(x)
            : 'mode', x);
        });
      }

      return prev;
    }

    if (typeof cur === 'string' && cur.indexOf('..') > -1) {
      type = last.type === 'mode'
        || last.type === 'scale'
        || last.type === 'progression'
        || (last.type === 'chord' && last.unfold)
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

    if (!type && getType(cur) === 'value' && Array.isArray(last.value)) {
      last.value[1] = last.value[1] || '';
      last.value[1] += last.value[1] ? ' ' : '';
      last.value[1] += cur;
      return cur;
    }

    add(type || getType(cur), typeof cur === 'string' && RE_NUMBER.test(cur)
      ? parseInt(cur, 10)
      : cur);

    return cur;
  }, null);

  return ast.map(item => {
    if (item.type === 'scale' || item.type === 'progression') {
      if (item.value[0].indexOf('...') > -1) {
        item.spread = true;
      } else if (item.value[0].indexOf('..') > -1) {
        item.unfold = true;
      }

      item.value = scribble[item.type](item.value[0].replace(RE_TRIM, ''), item.value[1]);

      if (!Array.isArray(item.value)) {
        item.value = item.value.split(' ');
      }
    }

    return item;
  });
};
