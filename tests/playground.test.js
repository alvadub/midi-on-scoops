/* eslint-disable no-unused-expressions */

const { expect } = require('chai');
const {
  extractDraftTempo,
  extractDraftBars,
  extractDraftKey,
  buildTrackLineMap,
  applyLatestInputWins,
  buildArrangementDisplayExpansion,
  buildSectionTimeline,
  getSectionAtBeat,
  findTimelineIndex,
  getMaxPatternSlots,
  parse,
} = require('../build/main.cjs');

describe('playground helpers', () => {
  it('extracts and clamps draft header values', () => {
    expect(extractDraftTempo('; tempo: 500')).to.equal(200);
    expect(extractDraftTempo('; tempo: 42')).to.equal(60);
    expect(extractDraftBars('; bars: 2')).to.equal(4);
    expect(extractDraftBars('; bars: 100')).to.equal(32);
    expect(extractDraftKey('; key: -40')).to.equal(-12);
    expect(extractDraftKey('; key: 40')).to.equal(12);
    expect(extractDraftTempo('; foo: 120')).to.equal(null);
  });

  it('builds track line map from track/channel lines', () => {
    const src = `
      # lead
        #0 90 x---
      ## bass
        #33 80 x---
    `;
    const map = buildTrackLineMap(src);
    expect(map.get('0/lead')).to.deep.equal([2]);
    expect(map.get('33/bass')).to.deep.equal([4]);
  });

  it('keeps only the latest input clip for duplicated channels', () => {
    const ctx = {
      tracks: {
        hats: {
          '#2035': [
            { input: [{ type: 'pattern', value: 'x-x-x-x-' }] },
            { values: [{ type: 'number', value: 90 }] },
            { input: [{ type: 'pattern', value: 'xxxxxxx[xx]' }] },
          ],
        },
      },
    };
    const before = ctx.tracks.hats['#2035'].slice();
    expect(before).to.have.lengthOf(3);
    applyLatestInputWins(ctx);
    const after = ctx.tracks.hats['#2035'];
    expect(after).to.have.lengthOf(1);
    expect(after[0].input[0].value).to.equal('xxxxxxx[xx]');
  });

  it('expands arrangement tokens with xN and %', () => {
    const expanded = buildArrangementDisplayExpansion(`
      > A x3 B % C x2
    `);
    expect(expanded.map(x => x.name)).to.deep.equal(['A', 'A', 'A', 'B', 'B', 'C', 'C']);
  });

  it('builds section timeline and resolves section queries', () => {
    const context = {
      main: [[{ type: 'value', value: 'A' }]],
      tracks: { melody: { 'A#0': [{}] } },
    };
    const merged = [[
      [['0', 'melody', [{ v: 1 }, { v: 0 }, { v: 1 }, { v: 0 }]]],
      [['0', 'melody', [{ v: 1 }, { v: 0 }]]],
    ]];
    const timeline = buildSectionTimeline(context, merged, '> A B');
    expect(timeline).to.deep.equal([
      { name: 'A', displayOrder: 0, start: 0, end: 3 },
      { name: 'B', displayOrder: 1, start: 4, end: 5 },
    ]);
    expect(getSectionAtBeat(timeline, 4)).to.deep.equal({
      index: 1,
      item: { name: 'B', displayOrder: 1, start: 4, end: 5 },
    });
    expect(findTimelineIndex(timeline, 0, null)).to.equal(0);
    expect(findTimelineIndex(timeline, null, 'B')).to.equal(1);
  });

  it('computes max pattern slots from parser context', () => {
    const ctx = parse(`
      # one
        #1 x---
      # two
        #2 x--- x---
      > A
    `);
    expect(getMaxPatternSlots(ctx)).to.equal(8);
  });
});
