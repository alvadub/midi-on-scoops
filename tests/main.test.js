/* eslint-disable no-unused-expressions */

const harmonics = require('harmonics');
const { expect } = require('chai');

const {
  mix, build,
  parse, reduce,
  pitch, isNote, isChord,
} = require('../build/main.cjs');

// delete require.cache[require.resolve('../build/main.cjs')];

function p(value) {
  return { type: 'pattern', value };
}

function v(value) {
  return { type: 'value', value };
}

function n(value, extra) {
  return { type: 'number', value, ...extra };
}

function m(value) {
  return { type: 'mode', value };
}

function t(value, extra) {
  return { type: 'note', value, ...extra };
}

function k(values, notes = []) {
  return { send: values, notes };
}

describe('tokenize', () => {
  it('should parse tones', () => {
    expect(isNote('c')).to.be.false;
    expect(isNote('c3')).to.be.true;
    expect(isNote('CM_4')).to.be.false;
    expect(isNote('C4 major')).to.be.false;
  });

  it('should parse chords', () => {
    expect(isChord('c')).to.be.false;
    expect(isChord('c3')).to.be.true;
    expect(isChord('CM_4')).to.be.true;
    expect(isChord('C4 major')).to.be.false;
  });

  describe('pitch', () => {
    it('convert from notes to midi', () => {
      expect(['C5', 'Eb5', 'F5', 'Gb5', 'G5', 'Bb5'].map(pitch)).to.eql([72, 75, 77, 78, 79, 82]);
    });
  });
});

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

    expect(parse(sample).data).to.eql({
      '%x': [t('c4', { repeat: 2 })],
    });
  });

  it('should extract channels', () => {
    const sample = `
      # drums
      #35  x--- ---- x--- ----
      #35  ---- x--- ---- x---
      #14  ---- ---- x--- ----
    `;

    expect(parse(sample).tracks).to.eql({
      drums: {
        '#35': [
          { input: [p('x---'), p('----'), p('x---'), p('----')], length: 16 },
          { input: [p('----'), p('x---'), p('----'), p('x---')], length: 16 },
        ],
        '#14': [{ input: [p('----'), p('----'), p('x---'), p('----')], length: 16 }],
      },
    });
  });

  it('should extract values', () => {
    const sample = `
      # multiple
      #1 2/3 4*5 67%
    `;

    expect(parse(sample).tracks).to.eql({
      multiple: {
        '#1': [{ values: [n(2 / 3), n(4 * 5), n(85.09)] }],
      },
    });
  });

  it('should extract notes', () => {
    const sample = `
      # skanking

      #1 ---- x--- ---- x--- c4 %
              120       115
    `;

    expect(parse(sample).tracks).to.eql({
      skanking: {
        '#1': [{
          data: [t('c4', { repeat: 2 })],
          input: [p('----'), p('x---'), p('----'), p('x---')],
          length: 16,
          values: [n(120), n(115)],
        }],
      },
    });
  });

  it('should extract tags', () => {
    expect(parse(`
      # mix

        @A
          #1 120 x--- ---- c5

        @B
          #1 .   x--- x--- d5

      foo: A A B A
      main: foo *4

      > main
    `)).to.eql({
      data: {
        foo: [v('A'), v('A'), v('B'), v('A')],
        main: [m('foo'), { type: 'multiply', value: 4 }],
      },
      main: [[m('main')]],
      tracks: {
        mix: {
          'A#1': [{
            data: [t('c5')],
            input: [p('x---'), p('----')],
            length: 8,
            values: [n(120)],
          }],
          'B#1': [{
            data: [t('d5')],
            input: [p('x---'), p('x---')],
            length: 8,
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
      > 3 /2 4.5 /1.5
    `);

    expect(ctx.main.map(x => reduce(x, ctx.data))).to.eql([
      [1, 2, 2, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1],
      [1.5, 4.5 / 1.5],
    ]);
  });

  it('should resolve notes', () => {
    const ctx = parse(`
      %x Cm7_4
      %y C4 major
      %z C5 minor blues CmMaj9b6
      %o C4 minor I iv iii III ii°
      > %x C4 Bb3 CM7sus4
      > %y C3
      > %z %o
    `);

    expect(ctx.main.map(x => reduce(x, ctx.data))).to.eql([
      [['C4', 'Eb4', 'G4', 'Bb4'], 'C4', 'Bb3', ['C4', 'F4', 'G4', 'B4']],
      [['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'], 'C3'],
      [
        ['C5', 'Eb5', 'F5', 'Gb5', 'G5', 'Bb5'],
        ['C4', 'D4', 'Eb4', 'G4', 'Ab4', 'B4'],
        [['C4', 'E4', 'G4'], ['F4', 'Ab4', 'C5'], ['Eb4', 'Gb4', 'Bb4'], ['Eb4', 'G4', 'Bb4'], ['D4', 'F4', 'Ab4', 'C5']],
      ],
    ]);
  });
});

describe('mixup', () => {
  it('should compose simple tracks', () => {
    expect(mix(parse(`
      # track
      #1 -x
    `))).to.eql([
      { track: [[['1', [0], [127]]]] },
    ]);

    expect(mix(parse(`
      # track
      #1 125 ---x
    `))).to.eql([
      { track: [[['1', [0], [0], [0], [125]]]] },
    ]);

    expect(mix(parse(`
      # track
      #1 ---x x---
         100  120
    `))).to.eql([
      { track: [[['1', [0], [0], [0], [100], [120], [0], [0], [0]]]] },
    ]);
  });

  it.only('should compose mixed tracks', () => {
    const A1 = ['1', [127], [0], [0], [0], [0], [0], [127], [0]];
    const B1 = ['1', [0], [127], [0], [0], [127], [0], [0], [0]];
    const B1_ = ['1', [0], [127], [0], [0], [127], [127], [0], [0]];
    const B2 = ['2', [0], [0], [0], [0], [0], [0], [0], [115, 60]];

    const AA1 = ['3', [0], [0], [0], [127], [0], [0], [0], [127]];
    const BB1 = ['3', [0], [0], [0], [0], [0], [127], [0], [127]];

    const test = mix(parse(`
      # track
        @A
          #1 x--- --x-
        @B
          #1 -x-- x---
          #1 -x-- xx--

          #2 ---- ---x C4
                       115

      # other
        @A
          #3 ---x ---x
        @B
          #3 ---- -x-x

      > A % B A
    `));

    // console.log(require('util').inspect(test,{depth:10,colors:1}));

    expect(test[0][0]).to.eql([A1, AA1]);
    expect(test[0][1]).to.eql([A1, AA1]);
    expect(test[0][2]).to.eql([B1, B1_, B2, BB1]);
    expect(test[0][3]).to.eql([A1, AA1]);
  });
});

describe.skip('midi', () => {
  it('should encode output', async () => {
    const midi = mix(parse(`
      # piano
        @A
          #1 --x- --x- --x- --x- Cm_4 % % %

      # bass
        @A
          #1 x-x- x-x- x-x- x-x- x C3 D3 Eb3 F3 G3 F3 Eb3 D3 C3

      > A
    `));

    const c = [60, 63, 67];
    const l = 127;

    expect(midi).to.eql([{
      piano: [['1', [[0], [0], [l, c], [0], [0], [0], [l, c], [0], [0], [0], [l, c], [0], [0], [0], [l, c], [0]]]],
      bass: [['1', [[l, 48], [0], [l, 50], [0], [l, 51], [0], [l, 53], [0], [l, 55], [0], [l, 53], [0], [l, 51], [0], [l, 50], [0], [l, 48]]]],
    }]);

    const { exec } = require('child_process');
    const fs = require('fs-extra');
    const out = '/tmp/test.midi';

    fs.outputFileSync(out, build(midi, 90), 'binary');

    await new Promise(ok => {
      exec(`timidity ${out}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        ok();
      });
    });
  }).timeout(60000);
});
