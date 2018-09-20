const jsmidgen = require('jsmidgen');

const fs = require('fs-extra');
const path = require('path');

const { utils, convert } = require('../dist/dubber.cjs');

function write(tracks, options, fileName) {
  options = options || {};

  const unique = Object.keys(tracks).reduce((prev, cur) => {
    if (tracks[cur].filter(x => (x.settings || {}).only).length) {
      prev.push(cur);
    }
    return prev;
  }, []);

  const bundle = options.bundle
    ? new jsmidgen.File()
    : null;

  const files = [];
  const opts = {};

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
      const settings = Object.assign(opts, set.settings || {});
      const channel = settings.channel || i;
      const notes = set.clipObj;

      if (settings.export || settings.skip) {
        return;
      }

      if (!bundle && (!file || options.export)) {
        file = new jsmidgen.File();
      }

      const track = new jsmidgen.Track();

      const _delay = (settings.offset && parseInt(settings.offset, 10)) || undefined;

      let _instrument = settings.instrument || options.instrument;

      if (_instrument) {
        _instrument = _instrument.indexOf('0x') === 0
          ? parseInt(_instrument, 16)
          : parseInt(_instrument, 10);
      }

      track.setTempo(settings.tempo || options.tempo || 120);

      if (bundle) {
        bundle.addTrack(track);
      } else {
        file.addTrack(track);
      }

      notes.forEach((noteObj, k) => {
        const level = Math.min(Math.min(noteObj.level || 127, settings.level || 127), options.level || 127);

        track.setInstrument(channel, _instrument || 0, _delay);

        if (noteObj.note) {
          if (typeof noteObj.note === 'string') {
            track.noteOn(channel, noteObj.note, noteObj.length, level);
            track.noteOff(channel, noteObj.note, noteObj.length, level);
          } else {
            track.addChord(channel, noteObj.note, noteObj.length, level);
          }
        } else if (k === 0) {
          // FIXME: https://github.com/dingram/jsmidgen/issues/22
          // this hack apply volume=1 to avoid added noise...
          track.addNote(channel, '', noteObj.length, 0, 1);
        } else {
          track.noteOff(channel, '', noteObj.length);
        }
      });

      if (file) {
        _tracks.push(settings);

        if (options.export) {
          saveTrack(channel);
        }
      }
    });

    if (!options.export && file) {
      saveTrack();
    }
  });

  if (bundle) {
    fs.outputFileSync(`${fileName}.mid`, bundle.toBytes(), 'binary');

    files.unshift({
      filepath: `${fileName}.mid`,
      settings: options,
    });
  }

  return files;
}

module.exports = ast => {
  const map = convert(ast);

  return {
    save(songName) {
      return Promise.resolve()
        .then(() => write(map, ast.settings, songName));
    },
  };
};
