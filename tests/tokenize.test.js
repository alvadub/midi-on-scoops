/* eslint-disable no-unused-expressions */

import './_setup.js';
import { inlineChord } from 'harmonics';
import { transform, split } from '../src/lib/tokenize.js';

function tok(type, value, extra = {}) {
  return { type, value, ...extra };
}

describe('tokenizer', () => {
  it('can handle syntax errors', () => {
    expect(() => transform()).to.throw();
    expect(() => transform('')).to.throw();
    expect(() => transform('/')).to.throw();
    expect(() => transform('*')).to.throw();
    expect(() => transform('x / 2')).to.throw();
    expect(() => transform('2 / x')).to.throw();
    expect(() => transform('1 2 * x')).to.throw();
    expect(() => transform('CM ... / 2')).to.throw();
    expect(() => transform('Dm7 ... * 2')).to.throw();
    expect(() => transform('1 / 2 / 3 / 4 / 5')).to.throw();
    expect(() => transform('1 * 2 * 3 * 4 * 5')).to.throw();
  });

  it('can build an ast from input', () => {
    expect(transform('x')).to.deep.equal([tok('pattern', 'x')]);
    expect(transform('#3 x-xx')).to.deep.equal([tok('channel', '#3'), tok('pattern', 'x-xx')]);
    expect(transform('x x2')).to.deep.equal([tok('pattern', 'x'), tok('multiply', 2)]);
    expect(transform('x-xx x2')).to.deep.equal([tok('pattern', 'x-xx'), tok('multiply', 2)]);
    expect(transform('x /2')).to.deep.equal([tok('pattern', 'x'), tok('divide', 2)]);
    expect(transform('C4 major ++ I IV V')).to.deep.equal([
      tok('note', 'C4'),
      tok('mode', 'major'),
      tok('progression', 'I IV V'),
    ]);
    expect(transform('C4 minor ** 1 3 5')).to.deep.equal([
      tok('note', 'C4'),
      tok('mode', 'minor'),
      tok('degrees', ['1', '3', '5']),
    ]);
    expect(transform('1..10')).to.deep.equal([tok('slice', [1, 10])]);
    expect(transform('1..10 x2')).to.deep.equal([tok('slice', [1, 10]), tok('multiply', 2)]);
    expect(transform('1..10 /2')).to.deep.equal([tok('slice', [1, 10]), tok('divide', 2)]);
    expect(transform('1..10 1..2')).to.deep.equal([tok('slice', [1, 10]), tok('slice', [1, 2])]);
    expect(transform('1..10 x3 /2')).to.deep.equal([tok('slice', [1, 10]), tok('multiply', 3), tok('divide', 2)]);
    expect(transform('1..10 /2 1..1')).to.deep.equal([tok('slice', [1, 10]), tok('divide', 2), tok('slice', [1, 1])]);
    expect(transform('1..10 1..2 /2 x2 1..3')).to.deep.equal([
      tok('slice', [1, 10]),
      tok('slice', [1, 2]),
      tok('divide', 2),
      tok('multiply', 2),
      tok('slice', [1, 3]),
    ]);
  });

  it('preserves bracket substeps when splitting patterns', () => {
    expect(split('xxxxxxx[xx]')).to.deep.equal([
      'x', 'x', 'x', 'x', 'x', 'x', 'x', ['x', 'x'],
    ]);
  });

  it('should handle regular notes', () => {
    expect(transform('c3 c3 c3 c4 f3 f3 f3 f4')).to.deep.equal([
      tok('note', 'c3'),
      tok('note', 'c3'),
      tok('note', 'c3'),
      tok('note', 'c4'),
      tok('note', 'f3'),
      tok('note', 'f3'),
      tok('note', 'f3'),
      tok('note', 'f4'),
    ]);
  });

  it('should handle scribble-modes', () => {
    expect(transform('c d e')).to.deep.equal([tok('value', 'c'), tok('value', 'd'), tok('value', 'e')]);
    const modeA = transform('c major 4 1..2').map(x => x.type);
    const modeB = transform('c minor 3 1..2 f minor 3').map(x => x.type);
    expect(modeA).to.deep.equal(['value', 'mode', 'number', 'slice']);
    expect(modeB.includes('mode')).to.equal(true);
  });

  it('can multiple regular notes', () => {
    expect(transform('c4 x2 d3 x3')).to.deep.equal([
      tok('note', 'c4'),
      tok('multiply', 2),
      tok('note', 'd3'),
      tok('multiply', 3),
    ]);
    expect(transform('c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4').length).to.equal(16);
  });

  it('should handle scribble-chords', () => {
    expect(transform('CM')).to.deep.equal([tok('value', 'CM')]);
    expect(transform('CM FMaj')).to.deep.equal([
      tok('value', 'CM'),
      tok('value', 'FMaj'),
    ]);
  });

  it('should handle unpacked-chords', () => {
    expect(transform('a3|c4|e4')).to.deep.equal([tok('chord', ['a3', 'c4', 'e4'])]);
  });

  it('should handle scribble-scales', () => {
    expect(transform('C4 major C5 minor')).to.deep.equal([
      tok('note', 'C4'),
      tok('mode', 'major'),
      tok('note', 'C5'),
      tok('mode', 'minor'),
    ]);
  });

  it('should handle scribble-progressions', () => {
    expect(transform('C4 minor I iv iii III ii° ..')).to.deep.equal([
      tok('note', 'C4'),
      tok('mode', 'minor I iv iii III ii°'),
      tok('slice', [1, Infinity]),
    ]);
    expect(transform('C4 minor ++ I iv iii')).to.deep.equal([
      tok('note', 'C4'),
      tok('mode', 'minor'),
      tok('progression', 'I iv iii'),
    ]);
  });

  it('can unfold/spread notes by chord-names', () => {
    expect(transform('Dm7...')).to.deep.equal([tok('slice', ['Dm7', '.'])]);
    expect(transform('Dm7.. 1..2')).to.deep.equal([tok('chord', inlineChord('Dm7'), { unfold: true }), tok('slice', [1, 2])]);
    expect(transform('Dm7').length).to.equal(1);
  });

  it('can expands, divide and duplicate regular chords', () => {
    expect(transform('CM /2 x2')).to.deep.equal([
      tok('value', 'CM'),
      tok('divide', 2),
      tok('multiply', 2),
    ]);
    expect(transform('Cmaj7 x2')).to.deep.equal([
      tok('chord', inlineChord('Cmaj7')),
      tok('multiply', 2),
    ]);
  });

  it('can slice and duplicate unfolded chords', () => {
    expect(transform('CM... 1..2')).to.deep.equal([
      tok('slice', ['CM', '.']),
      tok('slice', [1, 2]),
    ]);
    expect(transform('CM... x2 Dm7.. 1..7')).to.deep.equal([tok('slice', ['CM', '.']), tok('multiply', 2), tok('chord', inlineChord('Dm7'), { unfold: true }), tok('slice', [1, 7])]);
  });

  it('can handle ranges, slicing, duplicates, etc.', () => {
    expect(transform('5 10..120 /11 127x3')).to.deep.equal([
      tok('number', 5),
      tok('slice', [10, 120]),
      tok('divide', 11),
      tok('number', 127, { repeat: 3 }),
    ]);
    expect(transform('c3 x6 a#2 a#2 c3 x6 d#3 d#3 d#3')).to.deep.equal([
      tok('note', 'c3'),
      tok('multiply', 6),
      tok('note', 'a#2'),
      tok('note', 'a#2'),
      tok('note', 'c3'),
      tok('multiply', 6),
      tok('note', 'd#3'),
      tok('note', 'd#3'),
      tok('note', 'd#3'),
    ]);
  });

  it('will return placeholders as-is on tokenization', () => {
    expect(transform('g3 x7 f2 %')).to.deep.equal([
      tok('note', 'g3'),
      tok('multiply', 7),
      tok('note', 'f2', { repeat: 2 }),
    ]);
    expect(transform('%Am % % %')).to.deep.equal([tok('param', '%Am', { repeat: 4 })]);
  });

  it('throws when ++ is missing progression symbols', () => {
    expect(() => transform('C4 major ++')).to.throw();
  });

  it('throws when ** is missing degree symbols', () => {
    expect(() => transform('C4 minor **')).to.throw();
  });

  it('throws on zero-based slice start', () => {
    expect(() => transform('0..10')).to.throw("Slice start must be >= 1");
  });
});
