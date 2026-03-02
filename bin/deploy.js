#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

const PROJECT_ROOT = path.join(__dirname, '..');
const SRC = path.join(PROJECT_ROOT, 'build');
const DEST = path.join(PROJECT_ROOT, '..', 'midi-on-scoops-pages');
const DOMAIN = 'm0s.soypache.co';

function run(cmd) {
  return execSync(cmd, { cwd: DEST, stdio: 'pipe', encoding: 'utf8' }).trim();
}

function ensureDirExists(dir, label) {
  if (!fs.existsSync(dir)) {
    throw new Error(`Missing ${label}: ${dir}`);
  }
}

function main() {
  ensureDirExists(SRC, 'build output');
  ensureDirExists(DEST, 'gh-pages worktree');

  // Keep git metadata in the worktree root; remove only deployed artifacts.
  fs.readdirSync(DEST).forEach(entry => {
    if (entry === '.git') return;
    fs.removeSync(path.join(DEST, entry));
  });
  fs.copySync(SRC, DEST, { overwrite: true, errorOnExist: false });
  fs.writeFileSync(path.join(DEST, 'CNAME'), `${DOMAIN}\n`, 'utf8');
  fs.writeFileSync(path.join(DEST, '.nojekyll'), '\n', 'utf8');

  run('git add -A');
  const hasChanges = run('git status --porcelain').length > 0;
  if (!hasChanges) {
    console.log('No changes to deploy.');
    return;
  }

  const ts = new Date().toISOString();
  run(`git commit -m "deploy: ${ts}"`);
  run('git push');
  console.log(`Deployed to gh-pages at ${ts}`);
}

main();
