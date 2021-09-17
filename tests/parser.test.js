import { expect } from 'chai';
import scribble from 'scribbletune';
import { parse } from '../src/lib/parser';

function test(sample) {
  return parse(scribble, sample);
}

function p(value) {
  return { type: 'pattern', value };
}

function v(value) {
  return { type: 'value', value };
}

function n(value) {
  return { type: 'number', value };
}

function m(value) {
  return { type: 'mode', value };
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
      %x c4 %
    `;

    expect(test(sample).notes).to.eql({
      '%x': [t('c4', { repeat: 2 })],
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
      1 2/3 . 4*5 67%
    `;

    expect(test(sample).tracks).to.eql({
      multiple: {
        1: [{ values: [n(2 / 3), v('.'), n(4 * 5), n(85.09)] }],
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

  it('should extract tags', () => {
    expect(test(`
      # mix

        @A
          1 120 x--- ---- c5

        @B
          1 .   x--- x--- d5

      foo: A A B A
      main: foo *4

      > main
    `)).to.eql({
      data: {
        foo: [m('A'), m('A'), m('B'), m('A')],
        main: [m('foo'), { type: 'multiply', value: 4 }],
      },
      main: [[m('main')]],
      notes: {},
      tracks: {
        mix: {
          '1.A': [{
            clips: [p('x---'), p('----')],
            notes: [t('c5')],
            values: [n(120)],
          }],
          '1.B': [{
            clips: [p('x---'), p('x---')],
            notes: [t('d5')],
            values: [v('.')],
          }],
        },
      },
    });
  });
});
