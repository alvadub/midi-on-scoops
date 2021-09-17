import tokenize, { note, isNote } from './tokenize';

export function encode(input) {
  if (Array.isArray(input)) return input.map(x => x && encode(x));
  if (Array.isArray(input.value)) return encode(input.value);

  if (typeof input === 'object') {
    console.log('OBJECT', input);
    return (parseInt(input, 10) || 1) * 12 + encode(input.value);
  }

  if (!isNote(input)) {
    console.log('INVALID', input);
    return -1;
  }
  return note(input);
}

export function reduce(values, ctx) {
  return values ? values.reduce((memo, cur) => {
    if (cur === '%') {
      memo.push(memo[memo.length - 1]);
    } else if (typeof cur === 'string' && cur.charAt() === '%') {
      memo.push(...reduce(ctx[cur], ctx));
    } else {
      memo.push(cur);
    }
    return memo;
  }, []) : [];
}

export function parse(buffer) {
  const tracks = {};

  let track;
  let data = {};
  buffer.split('\n').forEach(line => {
    line = line.replace(/;.+?$/, '').trim();
    if (!line) return;
    if (line.charAt() === '%') {
      const [name, value] = line.split(/\s+/);

      if (value) data[name] = tokenize(scribble, value);
    } else if (line.charAt() === '#') {
      if (track) {
        tracks[track] = data;
        data = {};
      }

      track = line.substr(1).trim();
    } else if (line.charAt() === '>') {
      console.log('SECTION');
    } else if (line.charAt() === '@') {
      console.log('SCENE');
    } else {
      const [ins, ...ticks] = line.split(/\s+/);
      const offset = ticks.findIndex(x => !'x-_'.includes(x.charAt()));

      if (offset > 0) {
        data[ins] = {
          notes: reduce(ticks.slice(offset), data),
          pattern: ticks.slice(0, offset).join('').split(''),
        };
      } else {
        data[ins] = { pattern: ticks.join('').split('') };
      }
    }
  });

  if (track) {
    tracks[track] = data;
  }

  // const midi = [];

  // Object.keys(tracks).forEach(name => {
  //   Object.entries(tracks[name]).forEach(([kind, token]) => {
  //     if (kind.charAt() === '#') {
  //       const steps = token.pattern.map(x => (x === 'x' ? 127 : 0));
  //       const notes = encode(token.notes || []);

  //       midi.push([parseInt(kind.substr(1), 10), ...steps, ...notes]);
  //     }
  //   });
  // });

  return tracks;
}
