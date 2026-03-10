/* eslint-disable no-unused-expressions */

import { exec } from 'child_process';
import fs from 'fs-extra';
import './_setup.js';
import { flatten, zip } from '../src/lib/utils.js';
import { build, merge, pack } from '../src/lib/mixup.js';
import { parse, reduce } from '../src/lib/parser.js';
import { isNote, isChord } from '../src/lib/tokenize.js';

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

function play(midi, bpm, length) {
  const out = '/tmp/test.mid';

  fs.outputFileSync(out, build(midi, bpm, length), 'binary');

  return new Promise(ok => {
    exec(`timidity ${out}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
      ok();
    });
  });
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

  // describe('pitch', () => {
  //   it('convert from notes to midi', () => {
  //     expect(['C5', 'Eb5', 'F5', 'Gb5', 'G5', 'Bb5'].map(pitch)).to.eql([72, 75, 77, 78, 79, 82]);
  //   });
  // });
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
      #35  ---- [xx-x]--- ---- x---
      #14  [1]--- ---- ---- ----
    `;

    expect(parse(sample).tracks).to.eql({
      drums: {
        '#35': [
          { input: [p('x---'), p('----'), p('x---'), p('----')] },
          { input: [p('----'), p('[xx-x]---'), p('----'), p('x---')] },
        ],
        '#14': [{ input: [p('[1]---'), p('----'), p('----'), p('----')] }],
      },
    });
  });

  it('should resolve channel aliases to numeric channels', () => {
    const sample = `
      # rhythm
      #bd x---
      #sd --x-
      #hh x-x-
      #piano x--- C4
    `;

    expect(parse(sample).tracks).to.eql({
      rhythm: {
        '#2001': [{ input: [p('x---')] }],
        '#2004': [{ input: [p('--x-')] }],
        '#2035': [{ input: [p('x-x-')] }],
        '#0': [{ input: [p('x---')], data: [t('C4')] }],
      },
    });
  });

  it('should throw on unknown channel aliases', () => {
    const sample = `
      # rhythm
      #drumz x---
    `;
    expect(() => parse(sample)).to.throw("Unknown channel alias '#drumz'");
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
    `;

    expect(parse(sample).tracks).to.eql({
      skanking: {
        '#1': [{
          data: [t('c4', { repeat: 2 })],
          input: [p('----'), p('x---'), p('----'), p('x---')],
        }],
      },
    });
  });

  it('should support suffix -- comments without breaking pattern tokens', () => {
    const sample = `
      # hats -- track label
      #1 x--- --x- C4 D4 -- accent
      #1 x--- --x- E4 F4
    `;

    expect(parse(sample).tracks).to.eql({
      hats: {
        '#1': [
          {
            data: [t('C4'), t('D4')],
            input: [p('x---'), p('--x-')],
          },
          {
            data: [t('E4'), t('F4')],
            input: [p('x---'), p('--x-')],
          },
        ],
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
      main: foo x4

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
            values: [n(120)],
          }],
          'B#1': [{
            data: [t('d5')],
            input: [p('x---'), p('x---')],
            values: [v('.')],
          }],
        },
      },
    });
  });

  it('should extend tracks', () => {
    const ast = parse(`
      # track
        @A
          #1 x--- x--- C4 D4
        @B < A
          #1 110 120   G4 A4

      # other
        @C
          #1 ---x ---x
    `);

    const D = [{ type: 'note', value: 'C4' }, { type: 'note', value: 'D4' }];
    const D1 = [{ type: 'note', value: 'G4' }, { type: 'note', value: 'A4' }];
    const A1 = { data: D, input: [{ type: 'pattern', value: 'x---' }, { type: 'pattern', value: 'x---' }] };
    const AA1 = {
      input: A1.input,
      values: [{ type: 'number', value: 110 }, { type: 'number', value: 120 }],
      data: D1,
    };

    expect(ast.tracks).to.eql({
      track: {
        'A#1': [A1],
        'B#1': [A1, AA1],
      },
      other: {
        'C#1': [{ input: [{ type: 'pattern', value: '---x' }, { type: 'pattern', value: '---x' }] }],
      },
    });
  });

  it('should parse explicit merge operators for duplicate channels', () => {
    const ast = parse(`
      # hats
        @A
          #2035 ! 70 x-x-
          #2035 + 95 ----x---
    `);

    expect(ast.tracks).to.eql({
      hats: {
        'A#2035': [
          {
            merge: 'replace',
            input: [{ type: 'pattern', value: 'x-x-' }],
            values: [{ type: 'number', value: 70 }],
          },
          {
            merge: 'layer',
            input: [{ type: 'pattern', value: '----x---' }],
            values: [{ type: 'number', value: 95 }],
          },
        ],
      },
    });
  });

  it('should parse bracket arrangement lines', () => {
    const ast = parse(`
      # groove
        @A
          #1 x---
        @B
          #1 --x-
        @C
          #1 -x--
      > [A B C %]
      > [A B] x2
    `);

    expect(ast.main).to.eql([
      [
        v('A'),
        v('B'),
        v('C'),
        v('C'),
      ],
      [
        v('A'),
        v('B'),
        v('A'),
        v('B'),
      ],
    ]);
  });
});

describe('reducer', () => {
  it('should resolve durations', () => {
    const input = [{ type: 'pattern', value: '[1]--x' }];

    expect(reduce(input, {}, pack([120], ['c3', 'c4']))).to.eql([[
      [{ l: '1', v: 120, n: 'c3' }],
      { v: 0 },
      { v: 0 },
      { v: 120, n: 'c4' },
    ]]);
  });

  it('should honor scribbletune sustain with _ and rest with -', () => {
    const input = [{ type: 'pattern', value: 'x_--x' }];
    expect(reduce(input, {}, pack([90, 100], ['c3', 'd3']))).to.eql([[
      { v: 90, n: 'c3' },
      { v: 0, h: 1 },
      { v: 0 },
      { v: 0 },
      { v: 100, n: 'd3' },
    ]]);
  });

  it('should cycle note/chord consumption when pulses exceed notes', () => {
    const input = [{ type: 'pattern', value: 'x-x-x-' }];
    expect(reduce(input, {}, pack([90], ['c3', 'd3']))).to.eql([[
      { v: 90, n: 'c3' },
      { v: 0 },
      { v: 90, n: 'd3' },
      { v: 0 },
      { v: 90, n: 'c3' },
      { v: 0 },
    ]]);
  });

  it('should cycle velocity consumption when pulses exceed levels', () => {
    const input = [{ type: 'pattern', value: 'x-x-x-' }];
    expect(reduce(input, {}, pack([70, 90], ['c3']))).to.eql([[
      { v: 70, n: 'c3' },
      { v: 0 },
      { v: 90, n: 'c3' },
      { v: 0 },
      { v: 70, n: 'c3' },
      { v: 0 },
    ]]);
  });

  it('should resolve numbers', () => {
    const ctx = parse(`
      A: 1
      D: 2x3

      b: A
      c: D
      a: b c

      > a % b x5
      > 3 /2 4.5 /1.5
    `);

    expect(ctx.main.map(x => reduce(x, ctx.data))).to.eql([
      [1, 2, 2, 2, 1, 2, 2, 2, 1, 1, 1, 1, 1],
      [1.5, 4.5 / 1.5],
    ]);
  });

  it('should resolve notes', () => {
    const ctx = parse(`
      %x Cm7_4 1..3
      %y C4 major ..5
      %z C5 minor blues CmMaj9b6
      %o C4 minor I iv iii III ii° ..
      > %x C4 Bb3 CM7sus4
      > %y C3
      > %z %o
    `);

    expect(ctx.main.map(x => reduce(x, ctx.data))).to.eql([
      [['C4', 'Eb4', 'G4'], 'C4', 'Bb3', ['C4', 'F4', 'G4', 'B4']],
      ['C4', 'D4', 'E4', 'F4', 'G4', 'C3'],
      [
        ['C5', 'Eb5', 'F5', 'Gb5', 'G5', 'Bb5'],
        ['C4', 'D4', 'Eb4', 'G4', 'Ab4', 'B4'],
        ['C4', 'E4', 'G4'], ['F4', 'Ab4', 'C5'], ['Eb4', 'Gb4', 'Bb4'], ['Eb4', 'G4', 'Bb4'], ['D4', 'F4', 'Ab4', 'C5'],
      ],
    ]);
  });
});

describe('remix', () => {
  it('should merge track channels', () => {
    const sample = `
      4t: 7

      # hi hat
      #1 120     x--- x--- a1 a2
      #1 110     --x- --x- a3 a4
                 .    115

      #1 length  4t % 4 4t
      #1 panning .5 .4 .5 .6
    `;

    const test = merge(parse(sample));

    expect(test).to.eql([[[
      ['1', 'hi hat', [
        { v: 0 }, { v: 0 }, { v: 110, n: 'a3', l: 7, p: 0.5 }, { v: 0 },
        { v: 0 }, { v: 0 }, { v: 115, n: 'a4', l: 7, p: 0.4 }, { v: 0 },
      ]],
    ]]]);
  });

  it('should compose simple tracks', () => {
    expect(merge(parse(`
      # track
      #1 -x
    `))).to.eql([
      [[['1', 'track', [{ v: 0 }, { v: 127 }]]]],
    ]);

    expect(merge(parse(`
      # track
      #1 125 ---x
    `))).to.eql([
      [[['1', 'track', [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 125 }]]]],
    ]);

    expect(merge(parse(`
      # hats
      #2035 90 xxxxxxx[xx]
    `))[0][0][0][2]).to.eql([
      { v: 90 }, { v: 90 }, { v: 90 }, { v: 90 }, { v: 90 }, { v: 90 }, { v: 90 }, [{ v: 90 }, { v: 90 }],
    ]);

    expect(merge(parse(`
      # hats
      #2035 90 x-x-x-x-
      #2035 90 xxxxxxx[xx]
    `))[0][0][0][2]).to.eql([
      { v: 90 }, { v: 90 }, { v: 90 }, { v: 90 }, { v: 90 }, { v: 90 }, { v: 90 }, [{ v: 90 }, { v: 90 }],
    ]);

    expect(merge(parse(`
      # track
      #1 ---x x---
         100  120
    `))).to.eql([
      [[['1', 'track', [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 100 }, { v: 120 }, { v: 0 }, { v: 0 }, { v: 0 }]]]],
    ]);
  });

  it('should compose mixed tracks', () => {
    const A1 = ['1', 'track', [{ v: 127 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 127 }, { v: 0 }]];
    const B1 = ['1', 'track', [{ v: 0 }, { v: 127 }, { v: 0 }, { v: 0 }, { v: 127 }, { v: 127 }, { v: 0 }, { v: 0 }]];
    const B2 = ['2', 'track', [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 115, n: 'C4' }]];

    const AA1 = ['3', 'other', [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 127 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 127 }]];
    const BB1 = ['3', 'other', [{ v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 0 }, { v: 127 }, { v: 0 }, { v: 127 }]];

    const midi = merge(parse(`
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

    expect(midi[0][0]).to.eql([A1, AA1]);
    expect(midi[0][1]).to.eql([A1, AA1]);
    expect(midi[0][2]).to.eql([B1, B2, BB1]);
    expect(midi[0][3]).to.eql([A1, AA1]);
  });

  it('layers clips with + and keeps replace semantics for repeated !', () => {
    const layered = merge(parse(`
      # hats
        @A
          #2035 ! 70 x-x-
          #2035 + 90 --x-
      > A
    `))[0][0][0][2];

    expect(layered).to.eql([
      { v: 70 },
      { v: 0 },
      { v: 90 },
      { v: 0 },
    ]);

    const replaced = merge(parse(`
      # hats
        @A
          #2035 ! 70 x-x-
          #2035 ! 90 --x-
      > A
    `))[0][0][0][2];

    expect(replaced).to.eql([
      { v: 0 },
      { v: 0 },
      { v: 90 },
      { v: 0 },
    ]);
  });

  it('keeps note overrides on inherited sections without dropping notes', () => {
    const midi = merge(parse(`
      %a C4 D4
      %b E4 F4

      # lead
        @A
          #1 x-x- %a
        @B < A
          #1 %b

      > A B
    `));

    const sectionA = midi[0][0][0][2].filter(t => t.v > 0).map(t => t.n);
    const sectionB = midi[0][1][0][2].filter(t => t.v > 0).map(t => t.n);

    expect(sectionA).to.eql(['C4', 'D4']);
    expect(sectionB).to.eql(['E4', 'F4']);
  });

  it('preserves sustain slots with single shared velocity for notes', () => {
    const ticks = merge(parse(`
      # melody
        @A
          #0 77 x___x--- D5 D4
      > A
    `))[0][0][0][2];

    expect(ticks.slice(0, 8)).to.eql([
      { v: 77, n: 'D5' },
      { v: 0, h: 1 },
      { v: 0, h: 1 },
      { v: 0, h: 1 },
      { v: 77, n: 'D4' },
      { v: 0 },
      { v: 0 },
      { v: 0 },
    ]);
  });

  it('preserves sustain slots with single shared velocity for chords', () => {
    const ticks = merge(parse(`
      # chords
        @A
          #0 77 x___x--- D3|A3|D5 G3|B3|G4
      > A
    `))[0][0][0][2];

    expect(ticks.slice(0, 8)).to.eql([
      { v: 77, n: ['D3', 'A3', 'D5'] },
      { v: 0, h: 1 },
      { v: 0, h: 1 },
      { v: 0, h: 1 },
      { v: 77, n: ['G3', 'B3', 'G4'] },
      { v: 0 },
      { v: 0 },
      { v: 0 },
    ]);
  });
});

describe('midi', () => {
  it.skip('should encode output', async () => {
    const midi = merge(parse(`
      # piano
        @A
          #1 115 --x- --x- --x- --x- Cm_4 % % %

      ## bass
        @A
          #1 112 x-x- x-x- x-x- x-x- C3 minor ..5>3

      > A % % %
    `));

    const f = g => {
      const o = { v: g[0] };
      if (g[1]) o.n = g[1];
      return o;
    };
    const c = ['C4', 'Eb4', 'G4'];
    const l = 112;

    expect(midi[0][0]).to.eql([
      ['1', 'piano', [
        [0], [0], [l + 3, c], [0], [0], [0], [l + 3, c], [0], [0], [0], [l + 3, c], [0], [0], [0], [l + 3, c], [0],
      ].map(f)],
      ['1', 'bass', [
        [l, 'C3'], [0], [l, 'D3'], [0], [l, 'Eb3'], [0], [l, 'F3'], [0], [l, 'G3'], [0], [l, 'F3'], [0], [l, 'Eb3'], [0], [l, 'D3'], [0],
      ].map(f)],
    ]);

    expect(midi[0][1]).to.eql(midi[0][0]);

    await play(midi, 90, 16);
  }).timeout(60000);

  it.skip('should play billy jean', async () => {
    await play(merge(parse(`
      %F a3|c#4|f#4
      %G b3|d#4|g#4
      %A c#4|e4|a4

      # synth
        @A
          #1 115 x--- --x- ---- ---- x--- --x- ---- ---- %F %G %A %G

      ## bass
        %c f#2 c#2 e2 f#2 e2 c#2 b1 c#2
        @A
          #2 112 x-x- x-x- x-x- x-x- x-x- x-x- x-x- x-x- %c %

      > A
    `)), 116, 16);
  }).timeout(60000);
});
