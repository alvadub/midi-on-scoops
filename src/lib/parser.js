import { getChordsByProgression } from 'scribbletune/src/progression';
import { scale, inlineChord } from 'harmonics';

import { isProgression, transform } from './tokenize';
import { repeat, clone } from './utils';

function parseDegreeToken(token) {
  if (/^\d+$/.test(token)) return [parseInt(token, 10)];
  if (/^\d+\.\.\d+$/.test(token)) {
    const [a, b] = token.split('..').map(n => parseInt(n, 10));
    if (a > b) {
      throw new Error(`Invalid degree range '${token}'. Use ascending ranges like '1..7'`);
    }
    const out = [];
    for (let i = a; i <= b; i += 1) out.push(i);
    return out;
  }
  throw new Error(`Invalid degree expression '${token}'`);
}

function selectScaleDegrees(base, rawDegrees, mapFn) {
  const notes = mapFn(scale(base));
  const values = rawDegrees.reduce((memo, token) => {
    memo.push(...parseDegreeToken(token));
    return memo;
  }, []);

  values.forEach(deg => {
    if (deg < 1 || deg > notes.length) {
      throw new Error(`Degree '${deg}' is out of range for '${base}'. Allowed range is 1..${notes.length}`);
    }
  });

  return values.map(deg => notes[deg - 1]);
}

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

      case 'progression':
        if (typeof last !== 'string') {
          throw new Error(`Missing expression for '++ ${cur.value}'`);
        }
        if (last.includes('...')) {
          throw new Error(`Invalid syntax '${last} ++ ${cur.value}'. Use either '...' (expand scale) or '++' (progression), not both`);
        }
        prev[prev.length - 1] = `${last} ++ ${cur.value}`;
        break;

      case 'degrees':
        if (typeof last !== 'string') {
          throw new Error(`Missing expression for '** ${cur.value.join(' ')}'`);
        }
        if (last.includes('...')) {
          throw new Error(`Invalid syntax '${last} ** ${cur.value.join(' ')}'. Use either '...' (expand scale) or '**' (degree selection), not both`);
        }
        prev[prev.length - 1] = `${last} ** ${cur.value.join(' ')}`;
        break;

      case 'param':
      case 'value': {
        let value = null;
        if (typeof context[cur.value] !== 'undefined') value = context[cur.value];
        if (value === null) {
          if (cur.type === 'value' && typeof cur.value === 'string') {
            if (cur.value.startsWith('++ ') && typeof prev[prev.length - 1] === 'string') {
              if (prev[prev.length - 1].includes('...')) {
                throw new Error(`Invalid syntax '${prev[prev.length - 1]} ${cur.value}'. Use either '...' (expand scale) or '++' (progression), not both`);
              }
              prev[prev.length - 1] = `${prev[prev.length - 1]} ${cur.value}`;
              return prev;
            }

            if (cur.value.includes(' ')) {
              prev.push(cur.value);
              return prev;
            }

            try {
              const chord = inlineChord(cur.value);
              if (Array.isArray(chord) && chord.length > 0) {
                value = [chord];
              }
            } catch (e) {
              // Keep regular missing-expression errors for non-chord values.
            }
          }

          if (value === null) {
            throw new Error(`Missing expression for '${cur.value}'`);
          }
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
      if (item.includes(' ** ')) {
        const [base, raw] = item.split(/\s+\*\*\s+/);
        const degreeTokens = raw.trim().split(/\s+/).filter(Boolean);

        memo.push(selectScaleDegrees(base, degreeTokens, fn));
        return memo;
      }

      const chunks = item.split(' ');

      if (chunks.some(isProgression)) {
        const offset = chunks.findIndex(isProgression);
        const [a, b] = [chunks.slice(0, offset), chunks.slice(offset)];

        if (a[a.length - 1] === '++') a.pop();

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
  const trackPatternSlots = {};

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
        const [name, ...extend] = line.substr(1).split(' ');

        if (extend[0] === '<') {
          const key = `${extend[1]}#`;

          Object.keys(info)
            .filter(x => x.indexOf(key) === 0)
            .forEach(k => {
              info[`${name}#${k.split('#')[1]}`] = clone(info[k]);
            });
        }
        prefix = name;
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

        const notes = ticks.findIndex(x => ['note', 'chord', 'param'].includes(x.type));
        const index = ticks.findIndex(x => x.type === 'pattern');
        const value = index > 0 ? ticks.slice(index) : ticks;
        const offset = value.findIndex(x => x.type !== 'pattern');
        const inputs = ticks.slice(0, index > 0 ? index : 1);

        channel = prefix + inputs[0].value;
        if (!info[channel]) {
          info[channel] = [];
        }

        let spec;
        if (notes > 0 && index === -1) {
          const end = info[channel][info[channel].length - 1];
          if (!end || !end.input) {
            throw new TypeError(`Missing expression for '${line}'`);
          }

          spec = {
            input: end.input,
            values: value.slice(1, notes),
            data: value.slice(notes),
          };
        } else if (offset > 0) {
          spec = {
            data: value.slice(offset),
            input: value.slice(0, offset),
          };
        } else if (offset === 0) {
          spec = { values: value.slice(1) };
        } else {
          spec = { input: value };
        }

        if (inputs.length > 1) {
          spec.values = inputs.slice(1);
        }
        
        // Count pattern slots for this channel
        function countPatternSlots(patternString) {
          let count = 0;
          let i = 0;
          while (i < patternString.length) {
            if (patternString[i] === '[') {
              // Skip the bracketed group as 1 slot
              const endBracket = patternString.indexOf(']', i);
              if (endBracket > i) {
                count += 1;
                i = endBracket + 1;
              } else {
                i += 1;
              }
            } else if (patternString[i] === 'x' || patternString[i] === '-' || patternString[i] === '_') {
              // Each individual character is 1 slot
              count += 1;
              i += 1;
            } else {
              i += 1;
            }
          }
          return count;
        }
        
        let patternSlots = 0;
        if (spec.input && Array.isArray(spec.input)) {
          spec.input.forEach(token => {
            if (token.type === 'pattern' && typeof token.value === 'string') {
              patternSlots += countPatternSlots(token.value);
            }
          });
        }
        if (spec.data && Array.isArray(spec.data)) {
          spec.data.forEach(token => {
            if (token.type === 'pattern' && typeof token.value === 'string') {
              patternSlots += countPatternSlots(token.value);
            }
          });
        }
        
        // Accumulate slot count for this channel
        if (!trackPatternSlots[channel]) {
          trackPatternSlots[channel] = 0;
        }
        trackPatternSlots[channel] += patternSlots;

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
  const result = { main, data, tracks };
  Object.defineProperty(result, 'trackPatternSlots', {
    value: trackPatternSlots,
    enumerable: false,
    configurable: true,
    writable: true,
  });
  return result;
}
