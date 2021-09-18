import * as harmonics from 'harmonics';

import {
  isPattern, isNumber, transform, level,
} from './tokenize';

import {
  repeat, range, flatten,
} from './utils';

export function fetch(input, context) {
  let result = null;
  if (input.charAt() === '%') result = context.notes[input];
  if (context.data[input]) result = context.data[input];
  return result;
}

export function reduce(input, context) {
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
      prev.push(...cur);
      return prev;
    }

    switch (cur.type) {
      case 'pattern':
      case 'number':
      case 'note':
        if (cur.repeat) prev.push(...repeat(cur.value, cur.repeat));
        else if (Array.isArray(cur.value)) prev.push(...cur.value);
        else prev.push(cur.value);
        break;

      case 'chord':
        if (cur.repeat) prev.push(...repeat(cur.value, cur.repeat));
        else if (cur.unfold) prev.push(...cur.value);
        else prev.push(cur.value);

        if (cur.type !== 'chord') {
          skip = true;
        }
        break;

      case 'range':
        if (next.type === 'divide') {
          prev.push(...range(cur.value[0], cur.value[1], next.value));
          skip = true;
        } else {
          const value = range(cur.value[0], cur.value[1]);

          if (next.type === 'multiply') {
            prev.push(...flatten(repeat(value, next.value)));
            skip = true;
          } else if (cur.repeat) {
            prev.push(...repeat(value, cur.repeat));
          } else {
            prev.push(...value);
          }
        }
        break;

      case 'divide':
        return prev.map(x => x / cur.value);

      case 'multiply':
        prev.push(...repeat(last, cur.value - 1));
        break;

      case 'slice':
        return prev.slice(cur.value[0], cur.value[1]);

      case 'mode':
        prev[prev.length - 1] = `${last} ${cur.value}`;
        break;

      case 'param':
      case 'value': {
        let value = fetch(cur.value, context);
        if (value === null) {
          throw new Error(`Missing expression for '${cur.value}'`);
        }

        if (value[0] && value[0].type) {
          value = reduce(value, context);

          if (cur.repeat) {
            prev.push(...repeat(value, cur.repeat).reduce((_prev, _cur) => {
              _prev.push(..._cur);
              return _prev;
            }, []));
          } else {
            prev.push(...value);
          }

          return prev;
        }

        value = Array.isArray(value) ? value : [value];
        if (cur.repeat) prev.push(...repeat(value, cur.repeat));
        else prev.push(...value);
      } break;
      default: {
        console.log(prev, cur);
        throw new Error('FIXME');
      }
    }

    return prev;
  }, []).map(item => {
    if (typeof item === 'string' && item.includes(' ')) {
      return harmonics.scale(item);
    }
    return item;
  });
}

export function parse(buffer) {
  const tracks = {};
  const notes = {};
  const main = [];
  const data = {};

  let suffix = '';
  let track;
  let info = {};
  buffer.split(/\r?\n/g).forEach((line, nth) => {
    line = line.replace(/;.+?$/, '').trim();
    if (!line) return;

    try {
      if (line.charAt() === '%') {
        const [name, ...value] = line.split(/\s+/);

        if (value.length > 0) notes[name] = transform(value.join(' '));
      } else if (line.charAt() === '#') {
        if (track) {
          tracks[track] = info;
          suffix = '';
          info = {};
        }

        track = line.substr(1).trim();
      } else if (line.charAt() === '>') {
        main.push(transform(line.substr(1).trim()));
      } else if (line.charAt() === '@') {
        suffix = `.${line.substr(1).split(' ')[0]}`;
      } else if (line.indexOf(':') > 0) {
        const [name, ...value] = line.split(':');

        data[name] = transform(value.join(':').trim());
      } else {
        const ticks = transform(line);
        const index = ticks.findIndex(x => x.type === 'pattern');
        const input = ticks.slice(0, index > 0 ? index : 1);
        const values = index > 0 ? ticks.slice(index) : ticks;
        const offset = values.findIndex(x => x.type !== 'pattern');
        const channel = input[0].value + suffix;

        if (!info[channel]) {
          info[channel] = [];
        }

        let spec;
        if (offset > 0) {
          spec = {
            notes: values.slice(offset),
            clips: values.slice(0, offset),
          };
        } else if (offset === 0) {
          spec = { values: values.slice(1) };
        } else {
          spec = { clips: values };
        }

        if (input.length > 1) {
          spec.values = input.slice(1);
        }
        info[channel].push(spec);
      }
    } catch (e) {
      const msg = typeof e === 'string' ? e : e.message;

      throw new SyntaxError(`${msg}\n  at line ${nth + 1}\n${line}`);
    }
  });

  if (track) {
    tracks[track] = info;
  }

  return { main, data, notes, tracks };
}
