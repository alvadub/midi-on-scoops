import './_setup.js';
import { compressDub } from '../src/lib/compress.js';
import { parse } from '../src/lib/parser.js';
import { merge } from '../src/lib/mixup.js';

function normalize(value) {
  return String(value).replace(/\r/g, '').trim();
}

describe('compress', () => {
  it('should keep unchanged source when there is no profitable candidate', () => {
    const source = `
      # bass
      @A
        #1 x--- C4 D4 E4
        #1 x--- G4 A4 B4
    `;

    const result = compressDub(source, {
      minOccurrences: 3,
      minSequenceLength: 4,
    });

    expect(result.hasCompressed).to.equal(false);
    expect(result.source).to.equal(normalize(source));
    expect(result.summary.variables).to.equal(0);
  });

  it('should extract repeated chord literals', () => {
    const source = `
      # bass
      @A
        #1 x--- C4|E4|G4 C4|E4|G4 C4|E4|G4
    `;

    const result = compressDub(source, {
      minOccurrences: 2,
      minSequenceLength: 2,
    });

    expect(result.hasCompressed).to.equal(true);
    expect(result.definitions).to.have.length(1);
    expect(result.definitions[0].name).to.equal('%c1');
    expect(result.source).to.include('%c1');
    expect(result.source).to.include('%c1 %c1 %c1');
  });

  it('should extract repeated note/chord sequences', () => {
    const source = `
      # lead
      @A
        #1 x--- C4 D4 E4 F4 C4 D4 E4 F4 C4 D4 E4 F4
    `;

    const result = compressDub(source, {
      minOccurrences: 2,
      minSequenceLength: 4,
    });

    expect(result.hasCompressed).to.equal(true);
    expect(result.definitions[0].name).to.equal('%c1');
    expect(result.source).to.match(/%c1 %c1 %c1/);
  });

  it('should produce deterministic naming and order across runs', () => {
    const source = `
      # test
      @A
        #1 x--- C4 D4 E4 F4 C4 D4 E4 F4 C4 D4 E4 F4 C4|E4|G4 C4|E4|G4 C4|E4|G4
    `;

    const first = compressDub(source);
    const second = compressDub(source);

    expect(first.source).to.equal(second.source);
    expect(first.definitions.map(entry => entry.name)).to.deep.equal(['%c1', '%c2']);
  });

  it('should keep merged playback output unchanged', () => {
  const source = `
      # groove
      @A
        #1 x--- 80 C4 D4 E4 F4 C4 D4 E4 F4 C4 D4 E4 F4
        #1 x--- 80 G4 F4 E4 D4 G4 F4 E4 D4
      @B
        #1 x--- C4 D4 E4 F4 C4 D4 E4 F4 C4 D4 E4 F4
      > A A B
    `;

    const result = compressDub(source);
    const original = merge(parse(source));
    const rebuilt = merge(parse(result.source));

    expect(rebuilt).to.deep.equal(original);
  });

  it('should preserve suffix -- comments after rewrite', () => {
    const source = `
      # groove
      @A
        #1 x--- C4 D4 E4 F4 C4 D4 E4 F4 -- motif
      > A
    `;

    const result = compressDub(source, {
      minOccurrences: 2,
      minSequenceLength: 4,
    });

    expect(result.hasCompressed).to.equal(true);
    expect(result.source).to.include('-- motif');
    expect(() => parse(result.source)).to.not.throw();
  });
});
