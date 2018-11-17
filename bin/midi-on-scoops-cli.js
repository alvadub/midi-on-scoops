const fs = require('fs');
const path = require('path');
const wargs = require('wargs');
const watch = require('node-watch');
const keypress = require('keypress');
const spawn = require('child_process').spawn;

const { parse } = require('../dist/midi-on-scoops.cjs');
const builder = require('./builder');

const children = [];
const argv = wargs(process.argv.slice(2), {
  boolean: 'b',
  alias: {
    o: 'output',
    b: 'bundle',
  },
});

const USAGE_INFO = `
Usage:
  dub                # Interactive REPL
  dub play [...]     # Play one or more .dub sources
  dub watch [...]    # Watch on *.dub files or directories
  dub export [...]   # Save sources as one or more .midi files

Options:
      --bundle       # Export tracks as a single .midi file
      --output       # Directory for exported .midi files  (default: generated)

Additional args after -- will set the default playback arguments, e.g.
  dub play track -- fluidsynth -i --gain 2 Unison.sf2

Examples:
  dub play examples/billy_jean
  dub watch path/to/music
  dub export -b src/*.dub -o sample

`;

if (!argv._.length || argv.flags.help) {
  process.stdout.write(USAGE_INFO);
  process.exit(1);
}

const log = msg => process.stdout.write(msg);

const prefix = '♫';
const CLR = '\x1b[K';

const playback = !argv.raw.length
  ? ['timidity']
  : argv.raw;

let isPaused;
let sources;
let tracks;

function onFail(e) {
  log(`\n${e.message}\n`);
}

function killAll() {
  children.splice(0, children.length)
    .map(child => child.kill('SIGINT'));
}

function exit() {
  killAll();
  process.exit(1);
}

function read(name) {
  const file = !name.includes('.dub')
    ? `${name}.dub`
    : name;

  if (!fs.existsSync(file)) {
    throw new Error(`File '${file}' does not exists`);
  }

  return fs.readFileSync(file).toString();
}

async function play(file, isExport) {
  const name = path.basename(file);

  log(`\b        ${isExport ? 'Exporting' : 'Loading'} ${name} ...${CLR}\r`);

  let ast;
  let code;

  const importer = x => read(path.resolve(file, '..', x));

  try {
    ast = await parse(read(file), importer);
    code = builder(ast);
  } catch (e) {
    log(`\n${e.message}\n`);
    return;
  }

  if (!isExport) {
    killAll();

    if (ast.settings.pause) {
      setTimeout(() => {
        log(`\b        ❚❚ Pause: ${name}${CLR}\r`);
      }, 100);
      return;
    }
  }

  let _bin;
  let _argv;

  if (ast.settings.playback) {
    _argv = ast.settings.playback.split(' ');
    _bin = _argv.shift();
  } else {
    _argv = playback.slice(1);
    _bin = playback[0];
  }

  return code.save(file, argv.flags.output || 'generated', argv.flags.bundle || ast.settings.bundle)
    .then(destFiles => {
      const _length = Object.keys(ast.tracks).length;

      if (isExport) {
        process.nextTick(() => {
          log(`\b        ☉ Exported: ${name} (${destFiles.length} track${
            destFiles.length === 1 ? '' : 's'
          }${_length !== destFiles.length ? `, ${_length} clip${
            _length === 1 ? '' : 's'
          }` : ''})${CLR}\r\n`);
          process.exit(0);
        });
        return;
      }

      if (argv.flags.bundle || ast.settings.bundle) {
        destFiles.splice(1, destFiles.length);
      }

      const deferred = [];

      destFiles.forEach(midi => {
        let cmd = [_bin].concat(_argv);

        if (midi.settings.playback) {
          cmd = midi.settings.playback.split(' ').map(x => {
            if (/\.sf2/i.test(x)) {
              return path.resolve(file, '..', x);
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

      process.nextTick(() => {
        log(`\b        ► Playing: ${name} (${destFiles.length} track${
          destFiles.length === 1 ? '' : 's'
        }${_length !== destFiles.length ? `, ${_length} clip${
          _length === 1 ? '' : 's'
        }` : ''})${CLR}\r`);
      });

      return Promise.all(deferred).then(() => {
        log(`\b        ${isPaused ? '❚❚ Paused' : '⏏ Stopped'} playing: ${name}${CLR}\r`);
      });
    });
}

function playAll(isExport) {
  return tracks
    .reduce((prev, cur) => prev.then(() => play(cur, isExport)), Promise.resolve())
    .catch(onFail);
}

let i = 0;

const chars = '\\|/-';

setInterval(() => {
  log(`\b${chars[i % chars.length]} ( ${prefix} )\r`);
  i += 1;
}, 200);

const command = ['play', 'watch', 'export'].includes(argv._[0])
  ? argv._.shift()
  : 'play';

if (['watch', 'play'].includes(command) || !argv._.length) {
  keypress(process.stdin);

  process.stdin.on('keypress', (ch, key) => {
    if (key && key.name === 'space') {
      if (!isPaused) {
        isPaused = true;
        killAll();
      } else {
        isPaused = false;
        playAll();
      }
    }

    if (key && key.ctrl && key.name === 'c') {
      process.stdin.pause();
      exit();
    }
  });

  process.stdin.setRawMode(true);
  process.stdin.resume();
}

function onClose() {
  if (!isPaused) {
    process.nextTick(exit);
  }
}

try {
  sources = argv._.map(x => {
    const exists = fs.existsSync(x);
    const isDir = exists && fs.statSync(x).isDirectory();

    if (isDir) {
      return {
        isDir: true,
        filepath: path.resolve(x),
      };
    }

    if (!exists && !x.includes('.dub')) {
      x = `${x}.dub`;
    }

    return fs.existsSync(x) ? { filepath: path.resolve(x) } : null;
  }).filter(Boolean);
} catch (e) {
  onFail(e);
}

switch (command) {
  case 'watch': {
    log(`\b        Watching ${sources.length} source${sources.length === 1 ? '' : 's'} ...${CLR}\r`);

    let timeout;

    sources.forEach(src => {
      watch(src.filepath, { recursive: false, filter: src.isDir ? /\.dub$/ : undefined }, (evt, file) => {
        try {
          if (evt === 'update') {
            clearTimeout(timeout);

            tracks = tracks || [];

            if (!tracks.includes(file)) {
              tracks.push(file);
            }

            timeout = setTimeout(() => play(file).catch(onFail));
          }
        } catch (e) {
          log(`\n${e.message}\n`);
        }

        log(`\b        ${path.basename(file)} changed${CLR}\r`);
      });
    });
  }
    break;


  case 'export':
  case 'play':
  default:
    tracks = sources.reduce((prev, cur) => {
      if (cur.isDir) {
        fs.readdirSync(cur.filepath)
          .filter(x => x.includes('.dub'))
          .forEach(x => {
            prev.push(path.join(cur.filepath, x));
          });
      } else {
        prev.push(cur.filepath);
      }
      return prev;
    }, []);

    playAll(command === 'export').then(onClose);
    break;
}

process.on('SIGINT', () => {
  log('\r\r');
  exit();
});
