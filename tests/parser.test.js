import { expect } from 'chai';
import { parse, reduce } from '../src/lib/parser';

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

    expect(parse(sample).tracks).to.eql({ sample: {} });
  });

  it('should extract locals', () => {
    const sample = `
      %x c4 %
    `;

    expect(parse(sample).notes).to.eql({
      '%x': [t(48, { repeat: 2 })],
    });
  });

  it('should extract channels', () => {
    const sample = `
      # drums
      35  x--- ---- x--- ----
      35  ---- x--- ---- x---
      14  ---- ---- x--- ----
    `;

    expect(parse(sample).tracks).to.eql({
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

    expect(parse(sample).tracks).to.eql({
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

    expect(parse(sample).tracks).to.eql({
      skanking: {
        1: [{
          clips: [p('----'), p('x---'), p('----'), p('x---')],
          notes: [t(48, { repeat: 2 })],
          values: [n(120)],
        }],
      },
    });
  });

  it('should extract tags', () => {
    expect(parse(`
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
        foo: [v('A'), v('A'), v('B'), v('A')],
        main: [m('foo'), { type: 'multiply', value: 4 }],
      },
      main: [[m('main')]],
      notes: {},
      tracks: {
        mix: {
          '1.A': [{
            clips: [p('x---'), p('----')],
            notes: [t(60)],
            values: [n(120)],
          }],
          '1.B': [{
            clips: [p('x---'), p('x---')],
            notes: [t(62)],
            values: [v('.')],
          }],
        },
      },
    });
  });
});

describe('reducer', () => {
  it('should resolve numbers', () => {
    const ctx = parse(`
      A: 1
      D: 2x3

      b: A
      c: D
      a: b c

      > a % b *5
    `);

    expect(ctx.main.map(x => reduce(x, ctx))).to.eql([[1, 2, 2, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1]]);
  });

  it('should resolve notes', () => {
    const ctx = parse(`
      %x Cm7_4
      > %x C4 Bb3 CM7sus4
    `);

    expect(ctx.main.map(x => reduce(x, ctx))).to.eql([[[48, 51, 55, 58], 48, 46, [48, 53, 55, 59]]]);
  });
});
