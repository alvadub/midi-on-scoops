'use strict';

const jsmidgen = require('jsmidgen');

const fs = require('fs-extra');
const path = require('path');

const utils = require('./utils');
const converter = require('./convert');

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

    let file;

    const _tracks = [];

    function saveTrack(suffix) {
      const filepath = path.join(fileName,
        `${utils.normalize(name)}${suffix ? `_${suffix}` : ''}.mid`);

      fs.outputFileSync(filepath, file.toBytes(), 'binary');

      files.push({
        filepath,
        settings: _tracks.reduce((prev, cur) => utils.merge(prev, cur), {}),
      });
    }

    tracks[name].forEach((set, i) => {
      const settings = set.settings || {};
      const notes = set.clipObj;

      if (settings.export || settings.skip) {
        return;
      }

      if (!file || options.export) {
        file = new jsmidgen.File();
      }

      const track = new jsmidgen.Track();

      const _delay = (settings.offset && parseInt(settings.offset, 10)) || undefined;

      let _instrument = settings.instrument || options.instrument;

      if (_instrument) {
        _instrument = parseInt(`0x${_instrument}`, 16);
      }

      track.setInstrument(i, _instrument || 0x1, _delay);
      track.setTempo(settings.tempo || options.tempo || 120);

      file.addTrack(track);

      notes.forEach((noteObj, k) => {
        const level = Math.min(Math.min(noteObj.level || 127, settings.level || 127), options.level || 127);

        if (noteObj.note) {
          if (typeof noteObj.note === 'string') {
            track.noteOn(i, noteObj.note, noteObj.length, level);
            track.noteOff(i, noteObj.note, noteObj.length, level);
          } else {
            track.addChord(i, noteObj.note, noteObj.length, level);
          }
        } else if (k === 0) {
          // FIXME: https://github.com/dingram/jsmidgen/issues/22
          // this hack apply volume=1 to avoid added noise...
          track.addNote(i, '', noteObj.length, 0, 1);
        } else {
          track.noteOff(i, '', noteObj.length);
        }
      });

      _tracks.push(settings);

      if (options.export && file) {
        saveTrack(i);
      }
    });

    if (!options.export && file) {
      saveTrack();
    }
  });

  return files;
}

module.exports = ast => {
  const map = converter(ast);

  return {
    save(songName) {
      return Promise.resolve()
        .then(() => write(map, ast.settings, songName));
    },
  };
};
