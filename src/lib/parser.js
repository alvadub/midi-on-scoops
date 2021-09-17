import {
  isPattern, isNumber, transform, level,
} from './tokenize';

import {
  add, repeat, range, flatten,
} from './utils';

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
      add(prev, cur);
      return prev;
    }

    switch (cur.type) {
      case 'pattern':
      case 'number':
      case 'note':
        if (cur.repeat) add(prev, repeat(cur.value, cur.repeat));
        else if (Array.isArray(cur.value)) add(prev, cur.value);
        else prev.push(cur.value);
        break;

      case 'chord':
      case 'scale':
      case 'progression':
        if (cur.repeat) add(prev, repeat(cur.value, cur.repeat));
        else if (cur.unfold) add(prev, cur.value);
        else prev.push(cur.value);

        if (cur.type !== 'chord') {
          skip = true;
        }
        break;

      case 'range':
        if (next.type === 'divide') {
          add(prev, range(cur.value[0], cur.value[1], next.value));
          skip = true;
        } else {
          const value = range(cur.value[0], cur.value[1]);

          if (next.type === 'multiply') {
            add(prev, flatten(repeat(value, next.value)));
            skip = true;
          } else if (cur.repeat) {
            add(prev, repeat(value, cur.repeat));
          } else {
            add(prev, value);
          }
        }
        break;

      case 'divide':
        return prev.map(x => x / cur.value);

      case 'multiply':
        add(prev, repeat(last, cur.value - 1));
        break;

      case 'slice':
        return prev.slice(cur.value[0], cur.value[1]);

      case 'param':
      default: {
        let value = cur.value.indexOf('%') > -1
          ? context[cur.value]
          : cur.value;

        if (value === null) {
          throw new Error(`Missing expression for '${cur.value}'`);
        }

        if (value[0] && value[0].type) {
          value = reduce(value, context);

          if (cur.repeat) {
            add(prev, repeat(value, cur.repeat).reduce((_prev, _cur) => {
              add(_prev, _cur);
              return _prev;
            }, []));
          } else {
            add(prev, value);
          }

          return prev;
        }

        value = Array.isArray(value) ? value : [value];
        if (cur.repeat) add(prev, repeat(value, cur.repeat));
        else add(prev, value);
      }
    }

    return prev;
  }, []);
}

export function parse(scribble, buffer) {
  const tracks = {};
  const notes = {};

  let suffix = '';
  let track;
  let info = {};
  buffer.split(/\r?\n/g).forEach((line, nth) => {
    line = line.replace(/;.+?$/, '').trim();
    if (!line) return;

    try {
      if (line.charAt() === '%') {
        const [name, ...value] = line.split(/\s+/);

        if (value.length > 0) notes[name] = transform(scribble, value.join(' '));
      } else if (line.charAt() === '#') {
        if (track) {
          tracks[track] = info;
          suffix = '';
          info = {};
        }

        track = line.substr(1).trim();
      } else if (line.charAt() === '>') {
        console.log('SECTION');
      } else if (line.charAt() === '@') {
        suffix = `.${line.substr(1).split(' ')[0]}`;
      } else {
        const ticks = transform(scribble, line);
        const index = ticks.findIndex(x => x.type === 'pattern');
        const input = ticks.slice(0, index > 0 ? index : 1);
        const values = index > 0 ? ticks.slice(index) : ticks;
        const offset = values.findIndex(x => x.type !== 'pattern');

        if (!info[input[0].value + suffix]) {
          info[input[0].value + suffix] = [];
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
        info[input[0].value + suffix].push(spec);
      }
    } catch (e) {
      throw new SyntaxError(`${e.message}\n  at line ${nth + 1}\n${line}`);
    }
  });

  if (track) {
    tracks[track] = info;
  }

  return { notes, tracks };
}
