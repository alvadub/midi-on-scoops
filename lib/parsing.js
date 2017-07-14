'use strict';

const tokenize = require('./tokenize');

const RE_LINES = /\r?\n/;

const S_VARIABLE = '%';
const S_COMMENT = ';';
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

module.exports = text => {
  if (!text || typeof text !== 'string') {
    throw new Error(`Expecting a valid string, given '${text}'`);
  }

  const ast = {
    lines: [],
    tracks: {},
    context: {},
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

    let left;
    let right;

    if (offset > -1) {
      left = line.substr(0, offset);
      right = line.substr(offset);
    } else {
      left = line;
    }

    const heading = left.indexOf(S_HEADING);
    const prefix = left.indexOf(S_PREFIX);

    const name = heading !== 0 && prefix > -1
      ? left.substr(0, prefix).trim()
      : null;

    if (left.indexOf(S_VARIABLE) > -1 && left.charAt() === S_VARIABLE) {
      ast.context[name] = {
        input: tokenize(left.substr(name.length + 1).trim()),
        comment: right ? right.substr(1).trim() : null,
      };
      return;
    }

    if (prefix > -1 && !PREFIXES[name]) {
      throw new Error(`Expecting a valid prefix, given '${left}'`);
    }

    const subject = {
      offset: i,
      input: (prefix > -1 && (name === 'n' || name === 'p' || name === 'a'))
        ? tokenize(left.substr(prefix + 1).trim())
        : left,
      label: heading === 0 ? left.substr(heading + 1).trim() : null,
      type: heading === 0 ? 'instrument' : 'expression',
      prop: PREFIXES[name],
      comment: right ? right.substr(1).trim() : null,
    };

    if (heading === 0 && subject.label !== currentTrack) {
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
  });

  return ast;
};
