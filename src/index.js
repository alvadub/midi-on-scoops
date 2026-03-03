import { scale } from 'harmonics';
import Player from './components/player.js';
import { parse, merge } from './lib';
import { reduce } from './lib/parser.js';
import { blockAtCursor } from './lib/blocks.js';
import { createEditor } from './components/editor.js';
import { createMixer } from './components/mixer.js';

let tempo = 146;
let bars = 8;
let transpose = 0;
let playing = false;
let debounceTimer = null;
let statusResetTimer = null;
let editorApi = null;
let mixerApi = null;
let lastContext = null;
let trackLineMap = new Map();
let lastFlashedBeatIndex = -1;

const FEATURE_FLAGS = {
  blockEval: true,
  activeTokenFlash: true,
  autocomplete: true,
  beatGroupingAccents: true,
};

const p = window.p || new Player();
window.p = p;

const STORAGE_KEY = 'scoops:draft';

const BILLY_JEAN = `
%F a3|c#4|f#4
%G b3|d#4|g#4
%A c#4|e4|a4
%E b3|d4|f#4
%C d3|f#4|a4 ; how to sum notes to chords?
%B c#4|f4|g#3|b4

# synth
  @INTRO
    #518      ---- ---- ---- ---- ---- ---- ---- ----
  @N < INTRO
  @A
    #518 75   x--- --x- ---- ---- x--- --x- ---- ---- %F %G %A %G
  @B < A
    #518      %E % % %
  @C < A
    #518      %C % %F %
  @D < A
    #518      %C % %B %

## bass
  %c f#2 c#2 e2 f#2 e2 c#2 b1 c#2
  %d b2 a2 b2 d3 d3 b2 a2 ; how to transpose?
  @INTRO
    #393      ---- ---- ---- ---- ---- ---- ---- ----
  @A
    #393  112 x-x- x-x- x-x- x-x- x-x- x-x- x-x- x-x- %c %
  @N < A
  @B
    #393      x-x- x-x- --x- x-x- x-x- x-x- --x- x-x- %d %
  @C < INTRO
  @D < INTRO

## drums
  @INTRO
    #2123     ---- ---- ---- ---- ---- ---- ---- ----
    #2081 50  x-x- x-x- x-x- x-x- x-x- x-x- x-x- x-x-
    #2028     ---- x--- ---- x--- ---- x--- ---- x---
    #2001     x--- ---- x--- ---- x--- ---- x--- ----
  @A < INTRO
    #2123 90  x--- x--- x--- x--- x--- x--- x--- x---
    #2123 70  --x- --x- --x- --x- --x- --x- --x- --x-
  @N < A
  @B < A
  @C < A
  @D < A

> INTRO N *2 A %
> A % B A B A
> A % B A C *3 D
> A % B A B A
> A % B A B A
> A % B A C *3 D
> A % B A B A
`;

const TETRIS = `
%a E4 B3 C4 D4 C4 B3 A3
%b A3 C4 E4 D4 C4 B3
%c B3 C4 D4 E4 C4 A3 A3

%d D4 F4 A4 G4 F4 E4
%e E4 C4 E4 D4 C4 B3

%f E4 C4 D4 B3 C4 A3 Ab3 B3
%g E4 C4 D4 B3 C4 E4 A3 Ab3

# piano
  @A
    #3 x-xx x-xx x-xx x-xx x-xx x-x- x-x- x--- %a %b %c
  @B
    #3 -x-x x-xx x-xx x-xx x-xx x-x- x-x- x--- %d %e %c
  @C
    #3 x--- x--- x--- x--- x--- x--- x--- x--- %f
  @D < C
    #3 %g

%x E2 E2 A2 A2 Ab2 E2 A2
%y D2 D2 C2 C2 E2 E2 A2
%z A2 A2 Ab2 Ab2 A2 A2 Ab3
%z_ A2 A2 Ab2 Ab2 A2 A2 A4 Ab4

# bass
  @A
    #2 x--- x--- x--- x--- x--- x--- x--- ---- %x
  @B < A
    #2 %y
  @C < A
    #2 %z
  @D
    #2 x--- x--- x--- x--- x--- x-x- x--- ---- %z_

> A B A B C D
`.trim();

const PLAYGROUND = `
%a C4 phrygian.. ++ I I III IV

# scales
  @A
    #3 100 -x-x -x-x -x-x -x-x %a %a

## drums
  @A
    #0 120 [xx]-[xx]- [xx]-[xx]- d#1
    #0 110 -x-x -x-x d2
    #0 100 [xx][xx][xx][xx] [xx][xx][xx][xx] f#2

> A *4
`.trim();

const LOCKS = `
%Cm c4|eb4|g4 %
%Fm c4|f4|g#4 %

# drums
  @A
    #0 127 xxxxxxxxxxx[xx]xxxx [xx]xxxxxxxxxxxxxxx f#2
    #0 127 --x---x---x-x-x[xx] --x---x---x--[-x]x- c#2
    #0 90  ----------------x___------------ a3
    #0 120 --[xx]---[xx]---[xx]---[xx]- d#1

## skanking
  @A
    #1 100 -x-x-x-x-x-x-x-x %Cm %Fm

> A *4
`.trim();

const PRESETS = {
  tetris: TETRIS,
  billy_jean: BILLY_JEAN,
  playground: PLAYGROUND,
  locks: LOCKS,
};

const PRESET_LABELS = {
  tetris: 'Tetris',
  billy_jean: 'Billy Jean',
  playground: 'Playground',
  locks: 'Locks',
};

const SCALE_INFO = {
  major: 'W W H W W W H  -  do re mi fa sol la ti',
  minor: 'W H W W H W W  -  do re mib fa sol lab sib',
  dorian: 'W H W W W H W  -  minor with raised 6th',
  phrygian: 'H W W W H W W  -  minor with lowered 2nd',
  lydian: 'W W W H W W H  -  major with raised 4th',
  mixolydian: 'W W H W W H W  -  major with lowered 7th',
  locrian: 'H W W H W W W  -  diminished flavor',
};

function build(midi) {
  const mix = [];

  function get(nth, name) {
    const key = nth + name;

    if (!get[key]) {
      const track = [nth, name, []];
      mix.push(track);
      get[key] = { track };
    }
    return get[key];
  }

  midi.forEach(section => {
    section.forEach(parts => {
      parts.forEach(e => {
        const { track } = get(e[0], e[1]);
        for (let i = 0; i < e[2].length; i += 1) {
          track[2].push(e[2][i]);
        }
      });
    });
  });
  return mix;
}

function buildTrackLineMap(input) {
  const map = new Map();
  let currentTrack = null;
  String(input || '').split(/\r?\n/).forEach((rawLine, lineNumber) => {
    const line = rawLine.replace(/;.+?$/, '').trim();
    if (!line) return;

    if (/^#{1,2}\s+/.test(line) && !/^#\d+/.test(line)) {
      currentTrack = line.replace(/^#{1,2}\s+/, '').trim();
      return;
    }

    if (!currentTrack) return;
    const match = line.match(/^#(\d+)\b/);
    if (!match) return;
    const key = `${parseInt(match[1], 10)}/${currentTrack}`;
    const prev = map.get(key) || [];
    if (!prev.includes(lineNumber)) prev.push(lineNumber);
    map.set(key, prev);
  });
  return map;
}

function getData(input) {
  trackLineMap = buildTrackLineMap(input);
  try {
    lastContext = parse(input);
    return build(merge(lastContext));
  } catch (e) {
    lastContext = null;
    console.error('Parse error:', e);
    showError(e.message || 'Parse error');
    return [];
  }
}

function getMaxPatternSlots() {
  if (!lastContext || !lastContext.trackPatternSlots) return 0;

  const slots = Object.values(lastContext.trackPatternSlots);
  if (slots.length === 0) return 0;

  return Math.max(...slots);
}

function evalBlock() {
  if (!editorApi) return;
  const source = editorApi.getValue();
  const cursorPos = editorApi.getCursorPosition();
  const block = blockAtCursor(source, cursorPos);
  const data = getData(source);
  if (!data.length) return;

  p.updateTracks(data);
  updateBeatDots();
  syncMixer(data);
  editorApi.flashLines(block.startLine, block.endLine);
  showStatus(`Block updated: ${block.name}`, playing ? 'playing' : 'ready');
}

function resolveVarTooltip(name) {
  if (!lastContext || !lastContext.data || !lastContext.data[name]) return null;
  try {
    const data = reduce(lastContext.data[name], lastContext.data);
    const out = Array.isArray(data) ? data.flat(Infinity) : [data];
    const shown = out.slice(0, 16).map(item => (
      Array.isArray(item) ? item.join('|') : String(item)
    ));
    return shown.join('  ') + (out.length > shown.length ? ' …' : '');
  } catch (e) {
    return null;
  }
}

function resolveInstrumentTooltip(value) {
  const n = parseInt(value, 10);
  if (Number.isNaN(n)) return null;
  try {
    const info = n >= 2000
      ? p.player.loader.drumInfo(n - 2000)
      : p.player.loader.instrumentInfo(n);
    return info && info.title ? info.title : null;
  } catch (e) {
    return null;
  }
}

function resolveModeTooltip(name) {
  if (!name) return null;
  return SCALE_INFO[name.toLowerCase()] || null;
}

function normalizeNote(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function resolveNoteTooltip(noteStr) {
  const SEMITONES = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 };
  const m = noteStr.match(/^([a-gA-G])([#b]?)(\d+)$/);
  if (!m) return null;
  const base = SEMITONES[m[1].toLowerCase()];
  const alt = m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0;
  const oct = parseInt(m[3], 10);
  const midi = (oct + 1) * 12 + base + alt;
  const freq = (440 * Math.pow(2, (midi - 69) / 12)).toFixed(1);
  const isMiddleC = midi === 60;
  return `MIDI ${midi} · ${freq} Hz${isMiddleC ? ' · middle C' : ''}`;
}

function resolveChordTooltip(chordStr) {
  return chordStr.split('|').map(normalizeNote).join('  ');
}

function resolveModeNotes(modeName) {
  try {
    return scale(`C4 ${modeName}`);
  } catch {
    return null;
  }
}

function resolveVelocityTooltip(v) {
  const n = parseInt(v, 10);
  if (Number.isNaN(n) || n < 0 || n > 127) return null;
  const pct = Math.round((n / 127) * 100);
  const db = n > 0 ? (20 * Math.log10(n / 127)).toFixed(1) : '−∞';
  const dyn = n === 0 ? 'silent (ppp)'
    : n <= 25 ? 'very soft (pp)'
    : n <= 50 ? 'soft (mp)'
    : n <= 75 ? 'medium (mf)'
    : n <= 100 ? 'loud (f)'
    : n <= 115 ? 'very loud (ff)'
    : 'maximum (fff)';
  return `${pct}% of max · ${db} dB · ${dyn}`;
}

function resolveSectionTooltip(name) {
  if (!editorApi) return null;
  const lines = editorApi.getValue().split('\n');
  const sectionHeader = `@${name}`;
  const start = lines.findIndex(line => line.trim() === sectionHeader);
  if (start < 0) return null;

  const preview = [];
  for (let i = start + 1; i < lines.length && preview.length < 4; i += 1) {
    const line = lines[i];
    if (/^\s*@/.test(line)) break;
    if (line.trim()) preview.push(line.trim());
  }
  return preview.length ? preview.join(' | ') : null;
}

function showError(msg) {
  clearTimeout(statusResetTimer);
  const statusEl = document.getElementById('status-message');
  const statusbar = document.getElementById('statusbar');
  if (statusEl) {
    statusEl.textContent = `Error: ${msg}`;
  }
  if (statusbar) {
    statusbar.dataset.state = 'error';
  }
}

function showStatus(msg, state = 'ready') {
  clearTimeout(statusResetTimer);
  const statusEl = document.getElementById('status-message');
  const statusbar = document.getElementById('statusbar');
  if (statusEl) {
    statusEl.textContent = msg;
  }
  if (statusbar) {
    statusbar.dataset.state = state;
  }
}

function setReadyStatus() {
  showStatus('Ready', 'ready');
}

function markDirty() {
  showStatus('Unsaved changes', 'warning');
}

function saveSuccess() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  showStatus(`Saved ${hh}:${mm}`, 'ready');
}

function setQueryLoad(name) {
  const url = new URL(window.location.href);
  if (name) {
    url.searchParams.set('load', name);
  } else {
    url.searchParams.delete('load');
  }
  window.history.replaceState({}, '', url.toString());
}

function updatePlayButton() {
  const playBtn = document.getElementById('play-btn');
  if (playBtn) playBtn.textContent = playing ? '▶ Playing...' : '▶ Play';
}

function updateBeatDots() {
  // No longer needed - progress bar is static, width is updated in beatIndicator()
}

function updateToolbarBeats() {
  const beatIndicatorContainer = document.getElementById('beat-indicator-bar');
  if (!beatIndicatorContainer) return;

  const maxSlots = getMaxPatternSlots();
  if (maxSlots === 0) return; // Don't update if no patterns found

  // Remove extra segments
  while (beatIndicatorContainer.children.length > maxSlots) {
    beatIndicatorContainer.removeChild(beatIndicatorContainer.lastChild);
  }

  // Add more segments
  while (beatIndicatorContainer.children.length < maxSlots) {
    const segment = document.createElement('span');
    segment.className = 'beat-segment';
    beatIndicatorContainer.appendChild(segment);
  }

  [...beatIndicatorContainer.children].forEach((segment, idx) => {
    segment.classList.remove('beat-bar4', 'beat-bar8', 'beat-bar16');
    if (!FEATURE_FLAGS.beatGroupingAccents) return;
    if (idx % 16 === 0) {
      segment.classList.add('beat-bar16');
    } else if (idx % 8 === 0) {
      segment.classList.add('beat-bar8');
    } else if (idx % 4 === 0) {
      segment.classList.add('beat-bar4');
    }
  });
}

function loadPresetByName(name) {
  const preset = PRESETS[name];
  if (!editorApi || !preset) return;

  editorApi.setValue(preset.trim());
  localStorage.setItem(STORAGE_KEY, editorApi.getValue());
  setQueryLoad(name);
  showStatus(`Loaded preset: ${PRESET_LABELS[name] || name}`, 'ready');
  updateLoop();
  editorApi.focus();
}

function syncMixer(data) {
  if (!mixerApi) return;
  mixerApi.update(data);
}

function bindGlobalShortcuts() {
  document.addEventListener('keydown', e => {
    const target = e.target;
    const editingField = target && (
      target.tagName === 'TEXTAREA'
      || target.tagName === 'INPUT'
      || target.tagName === 'SELECT'
    );

    if ((e.metaKey || e.ctrlKey) && e.code === 'Enter' && !editingField) {
      e.preventDefault();
      if (playing) stop();
      else play();
    }
    if (e.code === 'Escape') {
      stop();
    }
  });
}

function createDOM(initialText, initialPreset) {
  document.body.innerHTML = '';

  const toolbar = document.createElement('div');
  toolbar.id = 'toolbar';

  const aboutLink = document.createElement('a');
  aboutLink.id = 'about-link';
  aboutLink.href = 'landing.html';
  aboutLink.textContent = '← About';

  const playBtn = document.createElement('button');
  playBtn.id = 'play-btn';
  playBtn.textContent = '▶ Play';
  playBtn.addEventListener('click', play);

  const stopBtn = document.createElement('button');
  stopBtn.id = 'stop-btn';
  stopBtn.textContent = '■ Stop';
  stopBtn.addEventListener('click', stop);

  const mixerBtn = document.createElement('button');
  mixerBtn.id = 'mixer-btn';
  mixerBtn.textContent = '⊞ Mixer';
  const midiBtn = document.createElement('button');
  midiBtn.id = 'midi-btn';
  midiBtn.textContent = '🎛 MIDI';
  midiBtn.disabled = true;
  midiBtn.title = 'MIDI support comes next';

  const presetLabel = document.createElement('label');
  presetLabel.className = 'field-group';
  presetLabel.textContent = 'Preset ';
  const presetSelect = document.createElement('select');
  presetSelect.id = 'preset-select';
  const customOption = document.createElement('option');
  customOption.value = '';
  customOption.textContent = 'Custom';
  presetSelect.appendChild(customOption);
  Object.keys(PRESETS).forEach(name => {
    const option = document.createElement('option');
    option.value = name;
    option.textContent = PRESET_LABELS[name] || name;
    presetSelect.appendChild(option);
  });
  if (initialPreset && PRESETS[initialPreset]) {
    presetSelect.value = initialPreset;
  }
  presetSelect.addEventListener('change', () => {
    if (presetSelect.value) {
      loadPresetByName(presetSelect.value);
    }
  });
   presetLabel.appendChild(presetSelect);

    toolbar.appendChild(aboutLink);
    toolbar.appendChild(playBtn);
    toolbar.appendChild(stopBtn);
    toolbar.appendChild(mixerBtn);
    toolbar.appendChild(midiBtn);
    toolbar.appendChild(presetLabel);

  const beatIndicatorBar = document.createElement('div');
  beatIndicatorBar.id = 'beat-indicator-bar';
  for (let i = 0; i < 16; i += 1) {
    const segment = document.createElement('span');
    segment.className = 'beat-segment';
    beatIndicatorBar.appendChild(segment);
  }

   editorApi = createEditor(initialText, {
    resolveNote: resolveNoteTooltip,
    resolveChord: resolveChordTooltip,
    resolveMode: resolveModeTooltip,
    resolveModeNotes,
    resolveVelocity: resolveVelocityTooltip,
    resolveSection: resolveSectionTooltip,
    resolveVar: resolveVarTooltip,
    resolveInstrument: resolveInstrumentTooltip,
    suggestions: FEATURE_FLAGS.autocomplete,
    onInput: () => {
      const presetSelect = document.getElementById('preset-select');
      if (presetSelect) presetSelect.value = '';
      setQueryLoad(null);
      markDirty();
      updateLoop();
      saveDraft();
    },
  });

  editorApi.on('keydown', e => {
    if (FEATURE_FLAGS.blockEval && (e.metaKey || e.ctrlKey) && e.shiftKey && e.code === 'Enter') {
      e.preventDefault();
      evalBlock();
      return;
    }
    if ((e.metaKey || e.ctrlKey) && e.code === 'Enter') {
      e.preventDefault();
      if (playing) stop();
      else play();
    }
  });

  const statusbar = document.createElement('div');
  statusbar.id = 'statusbar';
  statusbar.dataset.state = 'ready';

  const beatDots = document.createElement('div');
  beatDots.id = 'beat-dots';
  const progressBar = document.createElement('div');
  progressBar.id = 'progress-bar';
  beatDots.appendChild(progressBar);

  const statusMessage = document.createElement('span');
  statusMessage.id = 'status-message';
  statusMessage.textContent = 'Ready';

  statusbar.appendChild(beatDots);
  statusbar.appendChild(statusMessage);

  const workspace = document.createElement('div');
  workspace.id = 'workspace';
  mixerApi = createMixer(p, {
    tempo,
    bars,
    transpose,
    onChange(next) {
      if (typeof next.tempo === 'number') tempo = next.tempo;
      if (typeof next.bars === 'number') bars = next.bars;
      if (typeof next.transpose === 'number') transpose = next.transpose;
      updateLoop();
    },
  });
  mixerApi.toggle(false);
  mixerBtn.addEventListener('click', () => {
    const open = mixerApi.toggle();
    workspace.classList.toggle('mixer-open', open);
  });
  p.onBeat = (key, when, beatIndex) => {
    const wait = Math.max(0, (when - p.audioContext.currentTime) * 1000);
    setTimeout(() => {
      mixerApi.flashVU(key);
      if (!FEATURE_FLAGS.activeTokenFlash || !editorApi) return;
      if (lastFlashedBeatIndex !== beatIndex) {
        editorApi.clearActiveTokenHighlight();
        lastFlashedBeatIndex = beatIndex;
      }
      const lines = trackLineMap.get(key);
      if (!lines || !lines.length) return;
      editorApi.flashActiveTokens(lines, beatIndex);
    }, wait);
  };

  document.body.appendChild(toolbar);
  document.body.appendChild(beatIndicatorBar);
  workspace.appendChild(editorApi.el);
  workspace.appendChild(mixerApi.el);
  document.body.appendChild(workspace);
  document.body.appendChild(statusbar);

  return editorApi;
}

async function loadExample(name) {
  if (PRESETS[name]) return PRESETS[name];
  try {
    const response = await fetch(`examples/${name}.dub`);
    if (response.ok) {
      return await response.text();
    }
  } catch (e) {
    // ignore and use fallback
  }
  return null;
}

async function resolveInitialDraft() {
  const params = new URLSearchParams(window.location.search);
  const load = params.get('load');

  if (load) {
    const draft = await loadExample(load);
    if (draft) return draft.trim();
  }

  return localStorage.getItem(STORAGE_KEY) || TETRIS;
}

function saveDraft() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    if (editorApi) {
      localStorage.setItem(STORAGE_KEY, editorApi.getValue());
      saveSuccess();
    }
  }, 300);
}

function play() {
  stop();
  if (!editorApi) return;

  if (p.audioContext.state === 'suspended') {
    p.audioContext.resume();
  }
  playing = true;
  const data = getData(editorApi.getValue());
  p.setLoopMachine(data, tempo, bars, transpose);
  updateBeatDots();
  updateToolbarBeats();
  syncMixer(data);
  p.playLoopMachine();
  updatePlayButton();
  showStatus('Playing', 'playing');
}

function stop() {
  if (playing) {
    playing = false;
    p.stopLoopMachine();
  }
  if (editorApi) {
    editorApi.clearActiveTokenHighlight();
  }
  lastFlashedBeatIndex = -1;
  updatePlayButton();
  setReadyStatus();
}

function updateLoop() {
  if (!editorApi || !p) return;

  const data = getData(editorApi.getValue());
  const changed = p.setLoopMachine(data, tempo, bars, transpose);
  updateBeatDots();
  updateToolbarBeats();
  syncMixer(data);
  if (changed && playing) {
    p.playLoopMachine(p.beatIndex);
  }
}

function beatIndicator() {
  const progressBar = document.getElementById('progress-bar');
  const beatSegments = document.querySelectorAll('.beat-segment');
  const activeIndex = p.loopStarted ? p.beatIndex : -1;

  // Update progress bar width
  if (progressBar) {
    const totalBeats = p.beats.length || 1;
    const progress = p.loopStarted ? ((activeIndex + 1) / totalBeats) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }

  // Beat segments cycle through pattern slots
  // Map beatIndex to segment range (cycle through beatSegments.length positions)
  const segmentActiveIndex = p.loopStarted && beatSegments.length > 0
    ? activeIndex % beatSegments.length
    : -1;
  beatSegments.forEach((segment, i) => segment.classList.toggle('active', i === segmentActiveIndex));

  requestAnimationFrame(beatIndicator);
}

async function bootstrap() {
  const params = new URLSearchParams(window.location.search);
  const initialPreset = params.get('load');
  const initialDraft = await resolveInitialDraft();
  const editor = createDOM(initialDraft, initialPreset);
  bindGlobalShortcuts();
  const data = getData(editor.getValue());
  p.setLoopMachine(data, tempo, bars, transpose);
  updateBeatDots();
  updateToolbarBeats();
  syncMixer(data);
  setReadyStatus();
  requestAnimationFrame(beatIndicator);
}

bootstrap();

export default {};
