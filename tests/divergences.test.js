/* eslint-disable no-unused-expressions */

const { expect } = require('chai');
const { inlineChord } = require('harmonics');
const { transform } = require('../build/main.cjs');

describe('spec divergences (verified)', () => {
  it('rejects zero-based slice syntax', () => {
    expect(() => transform('0..10')).to.throw("Slice start must be >= 1");
  });

  it('supports degree selection syntax (**)', () => {
    expect(transform('C2 phrygian ** 1 3 5')).to.deep.equal([
      { type: 'note', value: 'C2' },
      { type: 'mode', value: 'phrygian' },
      { type: 'degrees', value: ['1', '3', '5'] },
    ]);
  });

  it('parses progression sample as explicit progression token', () => {
    expect(transform('D4 minor... ++ I IV V ii 1..2')).to.deep.equal([
      { type: 'note', value: 'D4' },
      { type: 'mode', value: 'minor...' },
      { type: 'progression', value: 'I IV V ii' },
      { type: 'slice', value: [1, 2] },
    ]);
  });

  it('uses harmonics chord fixtures as arrays', () => {
    expect(inlineChord('CM')).to.deep.equal(['C4', 'E4', 'G4']);
  });
});
