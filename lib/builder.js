'use strict';

const scribble = require('scribbletune');
const jsmidgen = require('jsmidgen');

const fs = require('fs');

const reducer = require('./reducer');

// FIXME: improve this and make a proper PR for it
function write(tracks, options, fileName) {
  options = options || {};

  const file = new jsmidgen.File();

  const unique = Object.keys(tracks).reduce((prev, cur) => {
    if (tracks[cur].filter(x => x.context.only).length) {
      prev.push(cur);
    }
    return prev;
  }, []);

  Object.keys(tracks).forEach((name, i) => {
    if (unique.length && unique.indexOf(name) === -1) {
      return;
    }

    const track = new jsmidgen.Track();

    tracks[name].forEach(set => {
      const context = set.context;
      const notes = set.clipObj;

      if (context.skip) {
        return;
      }

      let _instrument = context.instrument || options.instrument;
      let _delay = (context.delay && parseInt(context.delay, 10)) || undefined;

      if (_instrument) {
        _instrument = parseInt(`0x${_instrument}`, 16);
      }

      track.setInstrument(i, _instrument || 0x1, _delay);
      track.setTempo(context.tempo || options.tempo || 120);

      file.addTrack(track);

      notes.forEach(noteObj => {
        const level = Math.min(noteObj.level || 127, context.level || 127);

        if (noteObj.note) {
          if (typeof noteObj.note === 'string') {
            track.noteOn(i, noteObj.note, noteObj.length, level);
            track.noteOff(i, noteObj.note, noteObj.length, level);
          } else {
            track.addChord(i, noteObj.note, noteObj.length, level);
          }
        } else {
          track.noteOff(i, '', noteObj.length);
        }
      });
    });
  });

  fs.writeFileSync(fileName, file.toBytes(), 'binary');
}

function merge(target, source) {
  Object.keys(source).forEach(key => {
    if (typeof target[key] === 'undefined') {
      target[key] = source[key];
    }
  });

  return target;
}

module.exports = ast => {
  const map = {};

  Object.keys(ast.tracks).forEach(key => {
    const context = merge(ast.tracks[key].context, ast.context);
    const props = ast.tracks[key].options;
    const config = {};

    props.forEach(field => {
      config[field.prop] = Array.isArray(field.input)
        ? reducer(field.input, context)
        : field.input;
    });

    if (Array.isArray(config.pattern)) {
      config.pattern = config.pattern.join('');
    }

    let clip;

    try {
      clip = scribble.clip(config);
    } catch (e) {
      throw new Error(`Invalid clip settings, given '${JSON.stringify(config, null, 2)}'`);
    }

    map[key] = map[key] || [];
    map[key].push({
      clipObj: clip,
      context: ast.tracks[key].context || {},
    });
  });

  return {
    save(fileName) {
      return Promise.resolve()
        .then(() => write(map, ast.context, fileName));
    },
  };
};
