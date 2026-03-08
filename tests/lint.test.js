const { expect } = require('chai');
const { lintDub } = require('../build/main.cjs');

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
          #2035 xxxx
      > A
    `);

    expect(report.warnings.map(w => w.rule)).to.include('duplicate-input-clips');
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
});
