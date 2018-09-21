'use strict';

const fs = require('fs');
const path = require('path');
const watch = require('node-watch');
const spawn = require('child_process').spawn;

const { parse } = require('../dist/midi-on-scoops.cjs');
const builder = require('./builder');

const children = [];

const log = msg => process.stdout.write(msg);

const musicDir = process.argv.slice(2)[0] || 'music';
const prefix = '♫';
const CLR = '\x1b[K';

const bin = process.argv.slice(2)[1] || 'timidity';
const argv = process.argv.slice(4);

function onFail(e) {
  log(`\n${e.message}\n`);
}

function exit() {
  children.forEach((child, k) => {
    children.splice(k, 1);
    child.kill('SIGINT');
  });

  process.exit(1);
}

function read(name) {
  const file = name.indexOf('.dub') === -1
    ? `${name}.dub`
    : name;

  if (!fs.existsSync(file)) {
    throw new Error(`File '${file}' does not exists`);
  }

  return fs.readFileSync(file).toString();
}

async function play(name) {
  log(`\b        Loading ${name} ...${CLR}\r`);

  let ast;
  let code;

  const importer = x => read(path.resolve(name, '..', x));

  try {
    ast = await parse(read(name), importer);
    code = builder(ast);
  } catch (e) {
    log(`\n${e.message}\n`);
    return;
  }

  children.splice(0, children.length)
    .forEach(child => {
      child.kill('SIGINT');
    });

  if (ast.settings.pause) {
    setTimeout(() => {
      log(`\b        ❚❚ Pause: ${name}${CLR}\r`);
    }, 100);
    return;
  }

  let _bin;
  let _argv;

  if (ast.settings.playback) {
    _argv = ast.settings.playback.split(' ');
    _bin = _argv.shift();
  } else {
    _argv = argv.slice();
    _bin = bin;
  }

  return code
    .save(name.replace('.dub', ''))
    .then(destFiles => {
      const deferred = [];

      if (ast.settings.bundle) {
        destFiles.splice(1, destFiles.length);
      }

      destFiles.forEach(midi => {
        let cmd = [_bin].concat(_argv);

        if (midi.settings.playback) {
          cmd = midi.settings.playback.split(' ').map(x => {
            if (/\.sf2/i.test(x)) {
              return path.resolve(name, '..', x);
            }

            return x;
          });
        }

        deferred.push(new Promise((resolve, reject) => {
          const args = cmd.slice(1).concat(midi.filepath);

          const child = spawn(cmd[0], args, {
            detached: false,
          });

          child.on('close', resolve);
          child.on('error', reject);

          children.push(child);
        }));
      });

      const _length = Object.keys(ast.tracks).length;

      process.nextTick(() => {
        log(`\b        ► Playing: ${name} (${destFiles.length} track${
          destFiles.length === 1 ? '' : 's'
        }${_length !== destFiles.length ? `, ${_length} clip${
          _length === 1 ? '' : 's'
        }` : ''})${CLR}\r`);
      });

      return Promise.all(deferred).then(() => {
        log(`\b        ⏏ Stopped playing: ${name}${CLR}\r`);
      });
    });
}

let i = 0;

const chars = '\\|/-';

setInterval(() => {
  log(`\b${chars[i % chars.length]} ( ${prefix} )\r`);
  i += 1;
}, 200);

if (process.argv.slice(2)[0] && process.argv.slice(2)[0].indexOf('.dub') > -1) {
  Promise.resolve()
    .then(() => play(process.argv.slice(2)[0]))
    .then(() => setTimeout(exit, 100))
    .catch(onFail);
} else {
  log(`\b        Watching from: ${musicDir} ...${CLR}\r`);

  watch(musicDir, { recursive: true, filter: /\.dub$/ }, (evt, name) => {
    try {
      if (evt === 'update') {
        process.nextTick(() => play(name).catch(onFail));
      }
    } catch (e) {
      log(`\n${e.message}\n`);
    }

    log(`\b        ${name} changed${CLR}\r`);
  });
}

process.on('SIGINT', () => {
  log('\r\r');
  exit();
});
