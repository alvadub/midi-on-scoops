'use strict';

const scribble = require('scribbletune');
const jsmidgen = require('jsmidgen');

const fs = require('fs-extra');
const path = require('path');

const utils = require('./utils');
const reducer = require('./reducer');

function write(tracks, options, fileName) {
  options = options || {};

  const unique = Object.keys(tracks).reduce((prev, cur) => {
    if (tracks[cur].filter(x => (x.settings || {}).only).length) {
      prev.push(cur);
    }
    return prev;
  }, []);

  const files = [];

  Object.keys(tracks).forEach(name => {
    if (unique.length && unique.indexOf(name) === -1) {
      return;
    }

    tracks[name].forEach((set, i) => {
      const file = new jsmidgen.File();
      const track = new jsmidgen.Track();

      const settings = set.settings || {};
      const notes = set.clipObj;

      if (settings.skip) {
        return;
      }

      const _delay = (settings.delay && parseInt(settings.delay, 10)) || undefined;

      let _instrument = settings.instrument || options.instrument;

      if (_instrument) {
        _instrument = parseInt(`0x${_instrument}`, 16);
      }

      track.setInstrument(i, _instrument || 0x1, _delay);
      track.setTempo(settings.tempo || options.tempo || 120);

      file.addTrack(track);

      notes.forEach(noteObj => {
        const level = Math.min(Math.min(noteObj.level || 127, settings.level || 127), options.level || 127);

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

      const filepath = path.join(fileName, `${utils.normalize(name)}.mid`);

      fs.outputFileSync(filepath, file.toBytes(), 'binary');

      files.push({ settings, filepath });
    });
  });

  return files;
}

module.exports = ast => {
  const map = {};

  Object.keys(ast.tracks).forEach(key => {
    const context = utils.merge(ast.tracks[key].context, ast.context);
    const props = ast.tracks[key].params;
    const config = {};

    props.forEach(field => {
      config[field.prop] = reducer(field.input, context);
    });

    // FIXME: stats?
    // console.log(key, config.notes.length);
    // console.log(key, config.pattern.length);

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
      settings: ast.tracks[key].settings || {},
    });
  });

  return {
    save(songName) {
      return Promise.resolve()
        .then(() => write(map, ast.settings, songName));
    },
  };
};
