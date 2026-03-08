#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function loadLib() {
  try {
    return require('../build/main.cjs.js');
  } catch (e) {
    try {
      return require('../dist/midi-on-scoops.cjs');
    } catch (_e) {
      process.stderr.write('Unable to load built library. Run `npm run build` first.\n');
      process.exit(2);
    }
  }
}

function readFile(file) {
  const filepath = path.resolve(process.cwd(), file);
  if (!fs.existsSync(filepath)) {
    throw new Error(`File not found: ${file}`);
  }
  return {
    name: file,
    source: fs.readFileSync(filepath, 'utf8'),
  };
}

function formatIssue(level, issue) {
  const pos = issue.line ? `:${issue.line}` : '';
  const rule = issue.rule ? ` [${issue.rule}]` : '';
  return `${level}${pos}${rule} ${issue.message}`;
}

function lintOne(lib, target, strict) {
  const report = lib.lintDub(target.source);
  const header = `${target.name}: ${report.errors.length} error(s), ${report.warnings.length} warning(s)\n`;
  process.stdout.write(header);
  report.errors.forEach(item => process.stdout.write(`  ${formatIssue('error', item)}\n`));
  report.warnings.forEach(item => process.stdout.write(`  ${formatIssue('warn', item)}\n`));
  if (!report.errors.length && !report.warnings.length) {
    process.stdout.write('  ok\n');
  }
  return report.errors.length > 0 || (strict && report.warnings.length > 0);
}

function main() {
  const lib = loadLib();
  const args = process.argv.slice(2);
  const strict = args.includes('--strict');
  const files = args.filter(arg => arg !== '--strict');
  const targets = [];

  if (!files.length) {
    const source = fs.readFileSync(0, 'utf8');
    targets.push({ name: '<stdin>', source });
  } else {
    files.forEach(file => targets.push(readFile(file)));
  }

  let failed = false;
  targets.forEach(target => {
    if (lintOne(lib, target, strict)) failed = true;
  });

  process.exit(failed ? 1 : 0);
}

main();
