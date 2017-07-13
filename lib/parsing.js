'use strict';

const tokenize = require('./tokenize');

const RE_LINES = /\r?\n/;

const S_COMMENT = '--';
const S_HEADING = '#';
const S_PREFIX = ':';

const PREFIXES = {
  n: 'notes',
  p: 'pattern',
  a: 'accentMap',
  hi: 'accentHi',
  lo: 'accentLow',
  sh: 'shuffle',
  sz: 'sizzle',
  nl: 'noteLength',
};

module.exports = (text, options) => {
  if (!text || typeof text !== 'string') {
    throw new Error(`Expecting a valid string, given '${text}'`);
  }

  options = options || {};

  const ast = {
    lines: [],
    tracks: {},
  };

  const input = text.split(RE_LINES);

  let currentTrack;

  input.forEach((line, i) => {
    if (!line.trim()) {
      ast.lines.push({
        offset: i,
        input: line,
        type: 'empty',
      });
      return;
    }

    const offset = line.indexOf(S_COMMENT);

    if (offset > -1) {
      const left = line.substr(0, offset);
      const right = line.substr(offset);

      const heading = left.indexOf(S_HEADING);
      const prefix = left.indexOf(S_PREFIX);

      const name = heading === -1 && prefix > -1
        ? left.substr(0, prefix).trim()
        : null;

      if (prefix > -1 && !PREFIXES[name]) {
        throw new Error(`Expecting a valid prefix, given '${name}'`);
      }

      const subject = {
        offset: i,
        input: (prefix > -1 && (name === 'n' || name === 'p' || name === 'a'))
          ? tokenize(left.substr(prefix + 1).trim(), options)
          : left,
        label: heading > -1 ? left.substr(heading + 1).trim() : null,
        type: heading > -1 ? 'instrument' : 'expression',
        prop: PREFIXES[name],
        comment: right,
      };

      if (heading > -1 && subject.label !== currentTrack) {
        currentTrack = subject.label;
        ast.tracks[currentTrack] = ast.tracks[currentTrack] || [];
      }

      if (subject.prop && subject.type === 'expression') {
        ast.tracks[currentTrack].push({
          comment: subject.comment,
          input: subject.input,
          prop: subject.prop,
        });
      }

      ast.lines.push(subject);
    }
  });

  return ast;
};
