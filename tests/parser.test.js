import { expect } from 'chai';
import { parse } from '../src/lib/parser';

describe('parser', () => {
  it('should extract bars/notes from channels', () => {
    const sample = `
      # drums
      35  x--- x--- x--- x---
      14  ---- ---- x--- ----

      # skanking
      1   ---- x--- ---- x--- Cm Cm
    `;

    expect(parse(sample)).to.eql({
      drums: {
        35: { pattern: 'x---x---x---x---'.split('') },
        14: { pattern: '--------x-------'.split('') },
      },
      skanking: {
        1: { notes: ['Cm', 'Cm'], pattern: '----x-------x---'.split('') },
      },
    });
  });
});

//   let value = `# skanking demo

// ; our variables
// %X  a4|c5|e5
// %Y  g4|d4|a#4

// @scene 1

//   ; drumkit
//   ; CH VOL PAN?
//   3       ---- ---- ---- ---- x--- ---- ---- ----
//   14      ---- ---- ---- ---- x--- ---- ---- ----
//   37      x--- x--- ---- x--- x--- ---- x--- ----
//   35      x--- x--- x--- x--- x--- x--- x--- x--- ; after comment

//   ; chords
//   15      ---- ---- x--- ---- ---- ---- x--- ---- %X %
//   165     ---- x--- ---- x--- ---- x--- ---- x--- %X % % %

// @scene 2

//   ; chords
//   ;15  ---- ---- x--- ---- ---- ---- x--- ---- %Y %
//   ;183 ---- x--- ---- x--- ---- x--- ---- x--- %Y % % %

//   ; how to handle duration, e.g. x__-
//   ; how to repeat from previous stacks?
//   ; they should merge from previous ones? then extends?

// > 1 1 2 1
// `;
