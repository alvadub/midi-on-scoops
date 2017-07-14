'use strict';

const scribble = require('scribbletune');
const jsmidgen = require('jsmidgen');

const fs = require('fs');

const reducer = require('./reducer');

// FIXME: improve this and make a proper PR for it
function write(tracks, options, fileName) {
  options = options || {};

  const file = new jsmidgen.File();

  Object.keys(tracks).forEach(name => {
    const notes = tracks[name];
    const track = new jsmidgen.Track();

    // FIXME: consider individual settings per intrument-track
    track.setInstrument(0, options.instrument || 0x1);
    track.setTempo(options.tempo || 120);

    file.addTrack(track);

    // FIXME: why this is an array?
    notes[0].forEach(noteObj => {
      const level = noteObj.level || 127;

      if (noteObj.note) {
        if (typeof noteObj.note === 'string') {
          track.noteOn(0, noteObj.note, noteObj.length, level);
          track.noteOff(0, noteObj.note, noteObj.length, level);
        } else {
          track.addChord(0, noteObj.note, noteObj.length, level);
        }
      } else {
        track.noteOff(0, '', noteObj.length);
      }
    });
  });

  fs.writeFileSync(fileName, file.toBytes(), 'binary');
}

// FIXME: apply options
module.exports = (ast, options) => {
  const map = {};

  Object.keys(ast.tracks).forEach(key => {
    const props = ast.tracks[key];
    const config = {};

    props.forEach(field => {
      config[field.prop] = Array.isArray(field.input)
        ? reducer(field.input, ast.context)
        : field.input;
    });

    const clip = scribble.clip(config);

    map[key] = map[key] || [];
    map[key].push(clip);
  });

  return {
    save(fileName) {
      return Promise.resolve()
        .then(() => write(map, options, fileName));
    },
  };
};
