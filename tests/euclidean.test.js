/* eslint-disable no-unused-expressions */

const { expect } = require('chai');
const { transform, euclidean } = require('../build/main.cjs');

describe('euclidean rhythm', () => {
  it('builds classic euclidean patterns', () => {
    expect(euclidean(3, 8)).to.equal('x--x--x-');
    expect(euclidean(5, 8)).to.equal('x-x-xx-x');
    expect(euclidean(0, 8)).to.equal('--------');
  });

  it('supports rotation', () => {
    expect(euclidean(3, 8, 2)).to.equal('x-x--x--');
  });

  it('tokenizes shorthand into pattern tokens', () => {
    expect(transform('(3,8)')).to.deep.equal([{ type: 'pattern', value: 'x--x--x-' }]);
    expect(transform('bd(3,8,1)')).to.deep.equal([{ type: 'pattern', value: '-x--x--x' }]);
  });
});
