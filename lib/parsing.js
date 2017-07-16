'use strict';

const tokenize = require('./tokenize');

const RE_LINES = /\r?\n/;

const S_ANNOTATION = '@';
const S_VARIABLE = '%';
const S_COMMENT = ';';
const S_HEADING = '#';
const S_PREFIX = ':';

const KEYWORDS = [
  'notes',
  'pattern',
  'accentMap',
  'accentHi',
  'accentLow',
  'shuffle',
  'sizzle',
  'noteLength',
];

module.exports = text => {
  if (!text || typeof text !== 'string') {
    throw new Error(`Expecting a valid string, given '${text}'`);
  }

  const ast = {
    lines: [],
    tracks: {},
    context: {},
    settings: {},
  };

  const input = text.split(RE_LINES);

  let currentTrack;

  input.forEach((line, i) => {
    if (!line.trim()) {
      ast.lines.push({
        offset: i,
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

    if (left.indexOf(S_ANNOTATION) > -1 && left.charAt() === S_ANNOTATION) {
      const key = (name || left).substr(1).trim();
      const value = (prefix && left.substr(key.length + 2).trim()) || true;

      if (currentTrack) {
        ast.tracks[currentTrack].settings[key] = value;
      } else {
        ast.settings[key] = value;
      }

      ast.lines.push({
        offset: i,
        input: value,
        type: 'annotation',
        prop: key,
        comment: right ? right.substr(1).trim() : undefined,
      });

      return;
    }

    if (left.indexOf(S_VARIABLE) > -1 && left.charAt() === S_VARIABLE) {
      let value;

      try {
        value = tokenize(left.substr(name.length + 1).trim());
      } catch (e) {
        throw new Error(`Invalid expression at line ${i + 1}. ${e.message}`);
      }

      if (currentTrack) {
        ast.tracks[currentTrack].context[name] = value;
      } else {
        ast.context[name] = value;
      }

      ast.lines.push({
        offset: i,
        input: value || undefined,
        type: 'assignment',
        prop: name,
        comment: right ? right.substr(1).trim() : undefined,
      });
      return;
    }

    if (prefix > -1 && KEYWORDS.indexOf(name) === -1) {
      throw new Error(`Expecting a valid keyword, given '${left}' (line ${i + 1})`);
    }

    const subject = {
      offset: i,
      label: heading === 0 ? left.substr(heading + 1).trim() : undefined,
      type: heading === 0 ? 'instrument' : 'expression',
      prop: name || undefined,
      comment: right ? right.substr(1).trim() : undefined,
    };

    if (heading === 0 && subject.label !== currentTrack) {
      currentTrack = subject.label;

      if (!ast.tracks[currentTrack]) {
        ast.tracks[currentTrack] = {
          params: [],
          context: {},
          settings: {},
        };
      }
    }

    if (subject.prop && subject.type === 'expression') {
      if (!currentTrack) {
        throw new Error(`There is no active track for '${subject.prop}' (line ${i + 1})`);
      }

      try {
        subject.input = tokenize(left.substr(prefix + 1).trim());
      } catch (e) {
        throw new Error(`Invalid expression at line ${i + 1}. ${e.message}`);
      }

      ast.tracks[currentTrack].params.push({
        comment: subject.comment,
        input: subject.input,
        prop: subject.prop,
      });
    }

    ast.lines.push(subject);
  });

  return ast;
};
