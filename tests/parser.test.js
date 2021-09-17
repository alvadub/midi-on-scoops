import { expect } from 'chai';
import scribble from 'scribbletune';
import { parse } from '../src/lib/parser';

function test(sample) {
  return parse(scribble, sample);
}

function p(value) {
  return { type: 'pattern', value };
}

function n(value) {
  return { type: 'number', value };
}

function t(value, extra) {
  return { type: 'note', value, ...extra };
}

describe('parser', () => {
  it('should extract tracks', () => {
    const sample = `
      # sample
    `;

    expect(test(sample).tracks).to.eql({ sample: {} });
  });

  it('should extract locals', () => {
    const sample = `
      %x c4
    `;

    expect(test(sample).notes).to.eql({
      '%x': [t('c4')],
    });
  });

  it('should extract channels', () => {
    const sample = `
      # drums
      35  x--- ---- x--- ----
      35  ---- x--- ---- x---
      14  ---- ---- x--- ----
    `;

    expect(test(sample).tracks).to.eql({
      drums: {
        35: [
          { clips: [p('x---'), p('----'), p('x---'), p('----')] },
          { clips: [p('----'), p('x---'), p('----'), p('x---')] },
        ],
        14: [{ clips: [p('----'), p('----'), p('x---'), p('----')] }],
      },
    });
  });

  it('should extract values', () => {
    const sample = `
      # multiple
      1 2 3
    `;

    expect(test(sample).tracks).to.eql({
      multiple: {
        1: [{ values: [n(2), n(3)] }],
      },
    });
  });

  it('should extract notes', () => {
    const sample = `
      # skanking
      1 120 ---- x--- ---- x--- c4 %
    `;

    expect(test(sample).tracks).to.eql({
      skanking: {
        1: [{
          clips: [p('----'), p('x---'), p('----'), p('x---')],
          notes: [t('c4', { repeat: 2 })],
          values: [n(120)],
        }],
      },
    });
  });
});
