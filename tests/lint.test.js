import './_setup.js';
import { lintDub } from '../src/lib/lint.js';

describe('lint', () => {
  it('reports unknown sections in arrangement', () => {
    const report = lintDub(`
      # lead
        @A
          #0 x---
      > A B
    `);

    expect(report.errors.map(e => e.rule)).to.include('unknown-section');
  });

  it('reports note/pulse mismatches', () => {
    const report = lintDub(`
      # lead
        @A
          #0 x--- C4 D4
      > A
    `);

    expect(report.warnings.map(w => w.rule)).to.include('missing-pulses');
  });

  it('reports sustain before hit', () => {
    const report = lintDub(`
      # lead
        @A
          #0 _x--
      > A
    `);

    expect(report.warnings.map(w => w.rule)).to.include('orphan-sustain');
  });

  it('reports duplicate input clips on same channel', () => {
    const report = lintDub(`
      # hats
        @A
          #2035 x-x-
          #2035 x-x-
      > A
    `);

    expect(report.warnings.map(w => w.rule)).to.include('duplicate-input-clips');
  });

  it('does not warn when repeated channel clips have different inputs', () => {
    const report = lintDub(`
      # hats
        @A
          #2035 x-x-
          #2035 xxxx
      > A
    `);

    expect(report.warnings.map(w => w.rule)).to.not.include('duplicate-input-clips');
  });

  it('does not warn for duplicate channel input when using explicit merge operators', () => {
    const report = lintDub(`
      # hats
        @A
          #2035 ! x-x-
          #2035 + xxxx
      > A
    `);

    expect(report.warnings.map(w => w.rule)).to.not.include('duplicate-input-clips');
  });

  it('passes a valid basic pattern', () => {
    const report = lintDub(`
      # lead
        @A
          #0 x---x--- C4 D4
      > A
    `);

    expect(report.errors).to.eql([]);
    expect(report.warnings.map(w => w.rule)).to.not.include('missing-pulses');
  });

  it('reports unused section definitions', () => {
    const report = lintDub(`
      # lead
        @A
          #0 x---
        @B
          #0 x---
      > A
    `);

    expect(report.warnings.map(w => w.rule)).to.include('unused-section');
  });

  it('reports unused variables', () => {
    const report = lintDub(`
      %unused C4 D4
      # lead
        @A
          #0 x--- C4
      > A
    `);

    expect(report.warnings.map(w => w.rule)).to.include('unused-variable');
  });

  it('reports invalid instrument/program ranges', () => {
    const report = lintDub(`
      # lead
        @A
          #900 x---
      > A
    `, {
      resolveInstrument(value) {
        return value === '0' || value === '1';
      },
    });

    expect(report.warnings.map(w => w.rule)).to.include('invalid-instrument');
  });

  it('reports out-of-range levels', () => {
    const report = lintDub(`
      # lead
        @A
          #0 200 x--- C4
      > A
    `);

    expect(report.warnings.map(w => w.rule)).to.include('invalid-level');
  });

  it('reports tracks without clips', () => {
    const report = lintDub(`
      # lead
      > A
    `);

    expect(report.warnings.map(w => w.rule)).to.include('empty-track');
  });

  it('reports invalid prefixes before structural tokens', () => {
    const report = lintDub(`
      # lead
        foo@A
        _#0 x---
        oops%var C4
        bad&A x---
        _< A
        #0 x--- c#4
      > A
    `);

    expect(report.warnings.map(w => w.rule)).to.include('invalid-token-prefix');
  });

  it('attaches line numbers for parse errors when available', () => {
    const report = lintDub(`
      # piano
        @C
          #3 x---
        @D _< C
          #3 %g
      > C D
    `);

    const parseError = report.errors.find(err => err.rule === 'parse-error');
    expect(parseError).to.exist;
    expect(Number.isInteger(parseError.line)).to.equal(true);
    expect(parseError.line > 0).to.equal(true);
  });
});
