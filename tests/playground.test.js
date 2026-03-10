/* eslint-disable no-unused-expressions */

import './_setup.js';
import { parse } from '../src/lib/parser.js';
import {
  extractDraftTempo,
  extractDraftBars,
  extractDraftKey,
  extractDraftBankSelection,
  buildTrackLineMap,
  applyLatestInputWins,
  buildArrangementDisplayExpansion,
  buildSectionTimeline,
  getSectionAtBeat,
  findTimelineIndex,
  getMaxPatternSlots,
} from '../src/lib/playground.js';

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

  it('extracts bank header selections', () => {
    const meta = extractDraftBankSelection(`
      ; bank: default
      ; bank.drums: tr808
      ; bank.instruments: gm
    `);
    expect(meta).to.deep.equal({
      bank: 'default',
      drums: 'tr808',
      instruments: 'gm',
    });
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

  it('builds track line map with suffix -- comments like parser', () => {
    const src = `
      # lead -- bright
        #0 90 x--- -- stab
      ## bass -- low
        #33 80 x--- -- groove
    `;
    const map = buildTrackLineMap(src);
    expect(map.get('0/lead')).to.deep.equal([2]);
    expect(map.get('33/bass')).to.deep.equal([4]);
  });

  it('builds track line map with channel aliases', () => {
    const src = `
      # drums
        #bd x---
        #sd --x-
      # keys
        #piano x--- C4
    `;
    const map = buildTrackLineMap(src);
    expect(map.get('2001/drums')).to.deep.equal([2]);
    expect(map.get('2004/drums')).to.deep.equal([3]);
    expect(map.get('0/keys')).to.deep.equal([5]);
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

  it('expands bracket arrangement blocks (live and finite)', () => {
    const expanded = buildArrangementDisplayExpansion(`
      > [A B C %]
      > [A B] x3
    `);
    expect(expanded.map(x => x.name)).to.deep.equal([
      'A', 'B', 'C', 'C',
      'A', 'B', 'A', 'B', 'A', 'B',
    ]);
    expect(expanded.slice(0, 4).every(x => x.blockLive)).to.equal(true);
    expect(expanded.slice(4).every(x => x.blockLive)).to.equal(false);
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
      {
        name: 'A',
        displayOrder: 0,
        start: 0,
        end: 3,
        blockId: null,
        blockLive: false,
        blockStartOrder: null,
        blockEndOrder: null,
        blockStart: null,
        blockEnd: null,
      },
      {
        name: 'B',
        displayOrder: 1,
        start: 4,
        end: 5,
        blockId: null,
        blockLive: false,
        blockStartOrder: null,
        blockEndOrder: null,
        blockStart: null,
        blockEnd: null,
      },
    ]);
    expect(getSectionAtBeat(timeline, 4)).to.deep.equal({
      index: 1,
      item: {
        name: 'B',
        displayOrder: 1,
        start: 4,
        end: 5,
        blockId: null,
        blockLive: false,
        blockStartOrder: null,
        blockEndOrder: null,
        blockStart: null,
        blockEnd: null,
      },
    });
    expect(findTimelineIndex(timeline, 0, null)).to.equal(0);
    expect(findTimelineIndex(timeline, null, 'B')).to.equal(1);
  });

  it('builds loop range metadata for live arrangement blocks', () => {
    const context = {
      main: [[{ type: 'value', value: 'A' }]],
      tracks: { melody: { 'A#0': [{}] } },
    };
    const merged = [[
      [['0', 'melody', [{ v: 1 }, { v: 0 }]]],
      [['0', 'melody', [{ v: 1 }]]],
      [['0', 'melody', [{ v: 1 }, { v: 0 }, { v: 1 }]]],
    ]];
    const timeline = buildSectionTimeline(context, merged, '> [A B C]');
    expect(timeline[0].blockId).to.equal(timeline[1].blockId);
    expect(timeline[1].blockId).to.equal(timeline[2].blockId);
    expect(timeline[0].blockLive).to.equal(true);
    expect(timeline[0].blockStart).to.equal(0);
    expect(timeline[2].blockEnd).to.equal(5);
  });

  it('marks bracket tokens with shared block metadata for click hooks', () => {
    const expanded = buildArrangementDisplayExpansion('> [A B C %]');
    expect(expanded.length).to.equal(4);
    expect(expanded.every(item => item.blockId === expanded[0].blockId)).to.equal(true);
    expect(expanded.every(item => Number.isFinite(item.blockStartOrder))).to.equal(true);
    expect(expanded.every(item => Number.isFinite(item.blockEndOrder))).to.equal(true);
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
