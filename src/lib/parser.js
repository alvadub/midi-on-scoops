import { getChordsByProgression } from 'scribbletune/src/progression';
import { scale, inlineChord } from 'harmonics';

import { isProgression, isPattern, transform } from './tokenize';
import { repeat, range, flatten } from './utils';

export function reduce(input, context, callback) {
  if (!Array.isArray(input)) return input;

  const fn = typeof callback === 'function' ? callback : (v => v);

  let skip;
  return input.reduce((prev, cur, i) => {
    const last = prev[prev.length - 1];
    const next = input[i + 1] || {};
    const old = input[i - 1] || {};

    if (skip) {
      skip = false;
      return prev;
    }

    if (Array.isArray(cur)) {
      prev.push(...cur);
      return prev;
    }

    if (cur.type === 'value' && cur.value === '.') {
      if (prev.length > 0) prev.push(prev[0]);
      return prev;
    }

    if (old.type === 'pattern' && cur.type === 'pattern') {
      prev[prev.length - 1] += cur.value;
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

      case 'divide':
        prev[prev.length - 1] /= cur.value;
        return prev;

      case 'multiply':
        prev.push(...repeat(last, cur.value - 1));
        break;

      case 'slice':
        if (Array.isArray(last)) {
          prev[prev.length - 1] = last.slice(cur.value[0] - 1, cur.value[1]);
        } else {
          prev.push(cur.value);
        }
        break;

      case 'mode':
        prev[prev.length - 1] = `${last} ${cur.value}`;
        break;

      case 'param':
      case 'value': {
        let value = null;
        if (typeof context[cur.value] !== 'undefined') value = context[cur.value];
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
        throw new Error(`Unhandled '${cur.type}'`);
      }
    }

    return prev;
  }, []).reduce((memo, item) => {
    const prev = memo[memo.length - 1];

    if (
      Array.isArray(prev)
      && Array.isArray(item)
      && typeof item[0] === 'number'
      && item.length === 2
    ) {
      const offset = item[1] === Infinity ? prev.length : item[1];
      const [base, length] = String(offset).split(/\D/);

      memo.pop();
      memo.push(...prev.slice(item[0] - 1, base));

      if (String(offset).includes('>')) {
        const parts = memo.slice(-length - 1);

        parts.pop();
        parts.reverse();
        memo.push(...parts);
      }
      return memo;
    }

    if (typeof item === 'string' && item.includes(' ')) {
      const chunks = item.split(' ');

      if (chunks.some(isProgression)) {
        const offset = chunks.findIndex(isProgression);
        const [a, b] = [chunks.slice(0, offset), chunks.slice(offset)];

        memo.push(getChordsByProgression(a.join(' '), b.join(' ')).split(' ').map(x => fn(inlineChord(x))));
      } else {
        memo.push(fn(scale(item)));
      }
    } else {
      memo.push(fn(item));
    }
    return memo;
  }, []);
}

export function parse(buffer) {
  const tracks = {};
  const main = [];
  const data = {};

  let channel = null;
  let prefix = '';
  let track;
  let info = {};
  buffer.split(/\r?\n/g).forEach((line, nth) => {
    line = line.replace(/;.+?$/, '').trim();
    if (!line) return;

    try {
      if (line.charAt() === '%') {
        const [name, ...value] = line.split(/\s+/);

        if (value.length > 0) {
          data[name] = transform(value.join(' '));
        }
      } else if (line.indexOf('# ') >= 0) {
        if (track) {
          tracks[track] = info;
          channel = null;
          prefix = '';
          info = {};
        }

        track = line.split(/\s+/).slice(1).join(' ');
      } else if (line.charAt() === '>') {
        main.push(transform(line.substr(1).trim()));
      } else if (line.charAt() === '@') {
        prefix = line.substr(1).split(' ')[0];
      } else if (line.indexOf(':') > 0) {
        const [name, ...value] = line.split(':');

        data[name] = transform(value.join(':').trim());
      } else {
        const ticks = transform(line);

        if (!ticks[0] || ticks[0].type !== 'channel') {
          if (!channel) throw new TypeError(`Missing channel, given '${line}'`);

          const end = info[channel][info[channel].length - 1];

          if (!end.values) end.values = [{ type: 'number', value: 127 }];
          end.values.push(...ticks);
          return;
        }

        const index = ticks.findIndex(x => x.type === 'pattern');
        const input = ticks.slice(0, index > 0 ? index : 1);
        const values = index > 0 ? ticks.slice(index) : ticks;
        const offset = values.findIndex(x => x.type !== 'pattern');

        channel = prefix + input[0].value;
        if (!info[channel]) {
          info[channel] = [];
        }

        let spec;
        if (offset > 0) {
          spec = {
            data: values.slice(offset),
            input: values.slice(0, offset),
          };
        } else if (offset === 0) {
          spec = { values: values.slice(1) };
        } else {
          spec = { input: values };
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
  return { main, data, tracks };
}
