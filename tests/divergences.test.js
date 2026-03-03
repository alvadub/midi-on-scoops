/* eslint-disable no-unused-expressions */

const { expect } = require('chai');
const { inlineChord } = require('harmonics');
const { transform } = require('../build/main.cjs');

describe('spec divergences (verified)', () => {
  it('uses slice token for range-like expressions', () => {
    expect(transform('0..10')).to.deep.equal([{ type: 'slice', value: ['0', '10'] }]);
  });

  it('does not support scale operator syntax (**)', () => {
    expect(() => transform('C2 phrygian.. ** /2')).to.throw();
  });

  it('parses progression sample as generic tokens in current tokenizer', () => {
    expect(transform('D4 minor... ++ I IV V ii 0..2')).to.deep.equal([
      { type: 'note', value: 'D4' },
      { type: 'mode', value: 'minor...' },
      { type: 'value', value: '++ I IV V ii' },
      { type: 'slice', value: ['0', '2'] },
    ]);
  });

  it('uses harmonics chord fixtures as arrays', () => {
    expect(inlineChord('CM')).to.deep.equal(['C4', 'E4', 'G4']);
  });
});
