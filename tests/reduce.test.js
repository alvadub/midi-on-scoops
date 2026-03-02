/* eslint-disable no-unused-expressions */

const { expect } = require('chai');
const { reduce } = require('../build/main.cjs');

describe('reduce (spec migration)', () => {
  const context = {
    '%a': 'a2',
    '%x': ['%a', ['a2', 'b2']],
    '%Am': [['a3', 'c4', 'e3']],
    '%Cm': ['c3', 'd#3', 'g3'],
  };

  it('resolves notes with multiply and repeat', () => {
    expect(reduce([
      { type: 'note', value: 'g1' },
      { type: 'multiply', value: 7 },
      { type: 'note', value: 'f1', repeat: 2 },
    ], context)).to.deep.equal(['g1', 'g1', 'g1', 'g1', 'g1', 'g1', 'g1', 'f1', 'f1']);
  });

  it('resolves param references from context', () => {
    expect(reduce([
      { type: 'param', value: '%Am' },
      { type: 'param', value: '%x' },
    ], context)).to.deep.equal([
      context['%Am'][0],
      '%a',
      ['a2', 'b2'],
    ]);
  });

  it('handles unfolded chord slice chain in current reducer', () => {
    expect(reduce([
      { type: 'chord', value: ['F3', 'Ab3', 'C4'], unfold: true },
      { type: 'slice', value: [0, 2] },
      { type: 'note', value: 'd3' },
    ], context)).to.deep.equal(['F3', 'Ab3', 'C4', [0, 2], 'd3']);
  });

  it('flattens number arrays', () => {
    expect(reduce([
      { type: 'number', value: 5 },
      { type: 'number', value: [100, 120] },
    ], context)).to.deep.equal([5, 100, 120]);
  });

  it('multiplies notes', () => {
    expect(reduce([
      { type: 'note', value: 'c3' },
      { type: 'multiply', value: 2 },
    ])).to.deep.equal(['c3', 'c3']);
  });

  it('multiplies patterns', () => {
    expect(reduce([
      { type: 'pattern', value: 'x---' },
      { type: 'multiply', value: 4 },
    ])).to.deep.equal(['x---', 'x---', 'x---', 'x---']);
  });

  it('divides number arrays using current reducer behavior', () => {
    expect(reduce([
      { type: 'number', value: [1, 2, 3, 4, 5] },
      { type: 'divide', value: 2 },
    ])).to.deep.equal([1, 2, 3, 4, 2.5]);
  });

  it('repeats notes', () => {
    expect(reduce([
      { type: 'note', value: 'c3', repeat: 3 },
    ])).to.deep.equal(['c3', 'c3', 'c3']);
  });

  it.skip('legacy range expansion semantics from CoffeeScript reducer', () => {});
  it.skip('legacy scale handling from CoffeeScript reducer', () => {});
  it.skip('legacy progression handling from CoffeeScript reducer', () => {});
});

