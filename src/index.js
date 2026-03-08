import { scale } from 'harmonics';
import Player from './components/player.js';
import {
  parse,
  merge,
  extractDraftTempo,
  extractDraftBars,
  extractDraftKey,
  buildMixFromMerged,
  buildTrackLineMap,
  buildSectionTimeline as buildSectionTimelineFromSource,
  getSectionAtBeat as getSectionAtBeatFromTimeline,
  findTimelineIndex as findTimelineIndexFromTimeline,
  getMaxPatternSlots as getMaxPatternSlotsFromContext,
} from './lib';
import { lintDub } from './lib/lint.js';
import { reduce } from './lib/parser.js';
import { blockAtCursor } from './lib/blocks.js';
import { createEditor } from './components/editor.js';
import { createMixer } from './components/mixer.js';
import { MidiAccess, msgNorm, msgType, msgValue } from './lib/midi.js';
import { MidiLearn } from './components/midi-learn.js';
import { SnapshotManager } from './lib/snapshots.js';

let tempo = 146;
let bars = 16;
let transpose = 0;
let playing = false;
let songLoop = false;
let debounceTimer = null;
let statusResetTimer = null;
let editorApi = null;
let mixerApi = null;
let lastContext = null;
let trackLineMap = new Map();
let lastFlashedBeatIndex = -1;
let sectionTimeline = [];
let pendingSectionLaunch = null;
let lastSectionTimelineIndex = -1;
let defaultArrangementLoopBlockId = null;
let activeArrangementLoopBlockId = null;
let arrangementLoopDisabled = false;
let visualizerData = null;
let midiAccess = null;
let midiLearn = null;
let snapshotManager = null;
let midiLearnKeyHeld = false;

const p = window.p || new Player();
window.p = p;

const STORAGE_KEY = 'scoops:draft';

const BILLY_JEAN = `; Billy Jean - Michael Jackson
; tempo: 117
; bars: 16

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

> INTRO N x2 A %
> A % B A B A
> A % B A C x3 D
> A % B A B A
> A % B A B A
> A % B A C x3 D
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

const LOCKS = `
; Locks - Iration Steppas
; tempo: 74
; bars: 8

%Cm c4|eb4|g4
%Fm c4|f4|g#4

## skanking
  @A
    #1 100 -x-x-x-x %Cm % %Fm %

## hats
  @A
    #2035 90 x-x-x-x-
    #2035 90 xxxxxxx[xx]

> A x4
`.trim();

const ODE_TO_JOY = `
; Ode to Joy (Beethoven)
; tempo: 120
; bars: 16

%melA e4 e4 f4 g4 g4 f4 e4 d4 c4 c4 d4 e4 e4 d4 d4
%melB e4 e4 f4 g4 g4 f4 e4 d4 c4 c4 d4 e4 d4 c4 c4

%chA c3|e3|g3 c3|f3|a3 g2|b2|d3 c3|e3|g3
%bassA c2 c2 g1 c2

# lead
  @A
    #0 96 x-x-x-x-x-x-x-x-x-x-x-x-x-x-x- %melA
  @B
    #0 96 x-x-x-x-x-x-x-x-x-x-x-x-x-x-x- %melB

## harmony
  @A
    #48 72 x--- x--- x--- x--- %chA
  @B < A

## bass
  @A
    #33 88 x--- x--- x--- x--- %bassA
  @B < A

## drums
  @A
    #2001 110 x--- x--- x--- x---
    #2035 78 x-x-x-x- x-x-x-x-
    #2035 78 xxxxxxx[xx] xxxxxxx[xx]
    #2004 100 ---- x--- ---- x---
  @B < A

> A B
`.trim();

const HOT_CROSS_BUNS_MIDI_PLAIN = `
; MIDI import: hot_cross_buns.bitmidi.mid
; tempo: 125
; bars: 16

# imported
  @A
    #0 77 x---x--- x------- x---x--- x------- x-x-x-x- x-x-x-x- x---x--- x---x-x- x-x-x-x- x---x--- x-x-x-x- x------- x-x-x-x- x-x-x-x- x---x--- x------- x------- D5 D4 G4 D5 D4 G4 D5 C5 B4 A4 G4 A4 B4 C5 D5 D4 G4 G4 G4 D5 D5 D5 D5 C5 C5 B4 B4 B4 B4 A4 D5 C5 B4 A4 G4 A4 B4 C5 D5 D4 G4 G4

## imported_chords
  @A
    #0 74 x------- x------- x------- x------- x------- x------- x------- x------- x------- x------- x------- x------- x------- x------- x------- x------- x------- D3|A3|D5 G3|B3|G4 D3|A3|D5 G3|B3|G4 B2|G3|D5 B2|D3|G4 D3|A3|D5 G3|B3|G4 B2|G3|D5 C3|G3|C5 D3|G3|B4 D3|Gb3|A4 B2|G3|D5 B2|D3|G4 D3|A3|D5 G3|B3|G4 G3|B3|G4

> A
`.trim();

const HOT_CROSS_BUNS_MIDI_SUSTAIN = `
; MIDI import: hot_cross_buns.bitmidi.mid
; tempo: 125
; bars: 16

# imported
  @A
    #0 77 x---x--- x------- x---x--- x------- x-x-x-x- x-x-x-x- x---x--- x---x-x- x-x-x-x- x---x--- x-x-x-x- x------- x-x-x-x- x-x-x-x- x---x--- x------- x------- D5 D4 G4 D5 D4 G4 D5 C5 B4 A4 G4 A4 B4 C5 D5 D4 G4 G4 G4 D5 D5 D5 D5 C5 C5 B4 B4 B4 B4 A4 D5 C5 B4 A4 G4 A4 B4 C5 D5 D4 G4 G4

## imported_chords
  @A
    #0 74 x_______ x_______ x_______ x_______ x_______ x_______ x_______ x_______ x_______ x_______ x_______ x_______ x_______ x_______ x_______ x_______ x------- D3|A3|D5 G3|B3|G4 D3|A3|D5 G3|B3|G4 B2|G3|D5 B2|D3|G4 D3|A3|D5 G3|B3|G4 B2|G3|D5 C3|G3|C5 D3|G3|B4 D3|Gb3|A4 B2|G3|D5 B2|D3|G4 D3|A3|D5 G3|B3|G4 G3|B3|G4

> A
`.trim();

const PRESETS = {
  tetris: TETRIS,
  billy_jean: BILLY_JEAN,
  locks: LOCKS,
  ode_to_joy: ODE_TO_JOY,
  hot_cross_buns_midi_plain: HOT_CROSS_BUNS_MIDI_PLAIN,
  hot_cross_buns_midi_sustain: HOT_CROSS_BUNS_MIDI_SUSTAIN,
};

const PRESET_LABELS = {
  tetris: 'Tetris',
  billy_jean: 'Billy Jean',
  locks: 'Locks',
  ode_to_joy: 'Ode to Joy',
  hot_cross_buns_midi_plain: 'Hot Cross Buns (MIDI plain)',
  hot_cross_buns_midi_sustain: 'Hot Cross Buns (MIDI sustain)',
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

function getData(input) {
  trackLineMap = buildTrackLineMap(input);
  try {
    lastContext = parse(input);
    const merged = merge(lastContext);
    syncLintIndicator(lintDub(input, { context: lastContext, merged }));
    sectionTimeline = buildSectionTimelineFromSource(lastContext, merged, editorApi ? editorApi.getValue() : '');
    const defaultLoop = sectionTimeline.find(item => item.blockId && item.blockLive);
    defaultArrangementLoopBlockId = defaultLoop ? defaultLoop.blockId : null;
    if (activeArrangementLoopBlockId && !sectionTimeline.some(item => item.blockId === activeArrangementLoopBlockId)) {
      activeArrangementLoopBlockId = null;
    }
    const built = buildMixFromMerged(merged);

    return built;
  } catch (e) {
    lastContext = null;
    syncLintIndicator(null);
    sectionTimeline = [];
    defaultArrangementLoopBlockId = null;
    activeArrangementLoopBlockId = null;
    arrangementLoopDisabled = false;
    console.error('Parse error:', e);
    showError(e.message || 'Parse error');
    return [];
  }
}

function getSectionAtBeat(beatIndex) {
  return getSectionAtBeatFromTimeline(sectionTimeline, beatIndex);
}

function findTimelineIndex(displayOrder, name) {
  return findTimelineIndexFromTimeline(sectionTimeline, displayOrder, name);
}

function getLoopBlockById(blockId) {
  if (!blockId) return null;
  const item = sectionTimeline.find(entry => entry.blockId === blockId);
  if (!item || !Number.isFinite(item.blockStart) || !Number.isFinite(item.blockEnd)) return null;
  return {
    id: blockId,
    start: item.blockStart,
    end: item.blockEnd,
  };
}

function resolveArrangementLoopBlockId() {
  if (activeArrangementLoopBlockId) return activeArrangementLoopBlockId;
  if (arrangementLoopDisabled) return null;
  return defaultArrangementLoopBlockId;
}

function applyArrangementLoopRange() {
  const blockId = resolveArrangementLoopBlockId();
  const range = getLoopBlockById(blockId);
  if (range) {
    p.setArrangementLoopRange({ start: range.start, end: range.end });
  } else {
    p.setArrangementLoopRange(null);
  }
  if (editorApi) editorApi.setActiveArrangementLoopBlock(range ? range.id : null);
}

function setArrangementLoopFromClick(meta) {
  const blockId = meta && meta.blockId ? meta.blockId : null;
  const hadLoop = Boolean(resolveArrangementLoopBlockId());
  if (blockId) {
    arrangementLoopDisabled = false;
    activeArrangementLoopBlockId = blockId;
    applyArrangementLoopRange();
    return;
  }
  if (hadLoop) {
    activeArrangementLoopBlockId = null;
    arrangementLoopDisabled = true;
    applyArrangementLoopRange();
  }
}

function jumpToSectionTimelineIndex(index) {
  const target = sectionTimeline[index];
  if (!target) return;
  p.beatIndex = target.start;
  if (playing) {
    p.stopLoopMachine();
    p.playLoopMachine(target.start);
  }
  syncCurrentSectionUI();
}

function syncCurrentSectionUI() {
  const active = p.loopStarted ? getSectionAtBeat(p.beatIndex) : null;
  setCurrentSectionIndicator(active ? active.item.name : null);
  if (editorApi) {
    editorApi.setActiveSectionByOrder(active ? active.item.displayOrder : null);
  }
  applyArrangementLoopRange();
}

function setCurrentSectionIndicator(name) {
  const el = document.getElementById('section-indicator-label');
  if (!el) return;
  el.textContent = name ? `Section: ${name}` : 'Section: —';
}

function queueSectionLaunch(name, order, meta = {}) {
  if (!sectionTimeline.length) return;
  setArrangementLoopFromClick(meta);
  if (!name) return;
  const targetIndex = findTimelineIndex(order, name);
  if (targetIndex < 0) return;
  if (!playing) {
    const target = sectionTimeline[targetIndex];
    play(target ? target.start : undefined);
    return;
  }
  pendingSectionLaunch = { name, order, index: targetIndex };
  if (editorApi) editorApi.setQueuedArrangementToken(order);
  showStatus(`Queued section ${name}`, 'playing');
}

function getMaxPatternSlots() {
  return getMaxPatternSlotsFromContext(lastContext);
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

function listInstrumentOptions() {
  const options = [];
  try {
    const keys = p.player && p.player.loader && p.player.loader.instrumentKeys
      ? p.player.loader.instrumentKeys()
      : [];
    for (let i = 0; i < keys.length; i += 1) {
      const info = p.player.loader.instrumentInfo(i);
      const value = `#${i}`;
      options.push({
        value,
        label: info && info.title ? `${info.title} (${value})` : value,
      });
    }
  } catch (e) {
    // ignore and fallback below
  }

  try {
    const drumKeys = p.player && p.player.loader && p.player.loader.drumKeys
      ? p.player.loader.drumKeys()
      : [];
    for (let i = 0; i < drumKeys.length; i += 1) {
      const value = `#${2000 + i}`;
      const info = p.player.loader.drumInfo(i);
      options.push({
        value,
        label: info && info.title ? `${info.title} (${value})` : value,
      });
    }
  } catch (e) {
    // ignore and fallback below
  }

  if (options.length) return options;
  return [
    ...Array.from({ length: 128 }, (_, i) => ({ value: `#${i}`, label: `#${i}` })),
    ...Array.from({ length: 128 }, (_, i) => ({ value: `#${2000 + i}`, label: `#${2000 + i}` })),
  ];
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
  const sectionPattern = new RegExp(`^@${name}(?:\\s+<\\s+\\S+)?$`);
  const start = lines.findIndex(line => sectionPattern.test(line.trim()));
  if (start < 0) return null;
  const headerLine = lines[start].trim();
  const inheritMatch = headerLine.match(/^@\S+\s+<\s+(\S+)$/);

  const preview = [];
  for (let i = start + 1; i < lines.length && preview.length < 4; i += 1) {
    const line = lines[i];
    if (/^\s*@/.test(line)) break;
    if (line.trim()) preview.push(line.trim());
  }
  if (preview.length) return preview.join(' | ');
  if (inheritMatch) return `Inherits from @${inheritMatch[1]}`;
  return 'Section marker';
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

function labelCursorToken(token) {
  if (!token || !token.value) return 'Cursor: —';
  const map = {
    'tok-pattern': 'Pattern',
    'tok-note': 'Note',
    'tok-chord': 'Chord',
    'tok-var-ref': 'Variable',
    'tok-var-def': 'Variable Def',
    'tok-repeat': 'Repeat',
    'tok-mode': 'Mode',
    'tok-channel': 'Channel',
    'tok-number': 'Number',
    'tok-level': 'Level',
    'tok-inherit': 'Inherit',
    'tok-section': 'Section',
    'tok-progression': 'Progression',
    'tok-operator': 'Operator',
    'tok-comment': 'Comment',
    'tok-track': 'Track',
    'tok-subtrack': 'Subtrack',
    'tok-unknown': 'Token',
  };
  const kind = map[token.type] || 'Token';
  if (token.type !== 'tok-unknown') return `Cursor: ${kind}`;
  return `Cursor: ${token.value}`;
}

function setCursorTokenIndicator(token) {
  const el = document.getElementById('cursor-token-indicator');
  if (!el) return;
  el.textContent = labelCursorToken(token);
}

function syncLintIndicator(report) {
  const el = document.getElementById('lint-indicator');
  if (!el) return;

  if (!report) {
    el.textContent = 'Lint: —';
    el.dataset.state = 'idle';
    el.title = 'No lint report yet.';
    return;
  }

  const errors = report.errors ? report.errors.length : 0;
  const warnings = report.warnings ? report.warnings.length : 0;
  const issues = []
    .concat((report.errors || []).map(item => ({ ...item, level: 'error' })))
    .concat((report.warnings || []).map(item => ({ ...item, level: 'warn' })));
  if (!issues.length) {
    el.title = 'No lint issues.';
  } else {
    const shown = issues.slice(0, 12).map(item => {
      const where = item.line ? `line ${item.line}` : 'global';
      const rule = item.rule ? ` [${item.rule}]` : '';
      return `${item.level.toUpperCase()} ${where}${rule}: ${item.message}`;
    });
    const rest = issues.length - shown.length;
    el.title = rest > 0
      ? `${shown.join('\n')}\n... and ${rest} more issue(s).`
      : shown.join('\n');
  }

  if (errors > 0) {
    el.textContent = `Lint: ${errors} err${warnings ? `, ${warnings} warn` : ''}`;
    el.dataset.state = 'error';
    return;
  }

  if (warnings > 0) {
    el.textContent = `Lint: ${warnings} warn`;
    el.dataset.state = 'warning';
    return;
  }

  el.textContent = 'Lint: ok';
  el.dataset.state = 'ok';
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

function updateLoopCheckbox() {
  const loopCheckbox = document.getElementById('loop-checkbox');
  if (loopCheckbox) loopCheckbox.checked = Boolean(songLoop);
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
    if (idx % 16 === 0) {
      segment.classList.add('beat-bar16');
    } else if (idx % 8 === 0) {
      segment.classList.add('beat-bar8');
    } else if (idx % 4 === 0) {
      segment.classList.add('beat-bar4');
    }
  });
}

async function loadPresetByName(name) {
  let preset = PRESETS[name];
  if (!preset) preset = await loadExample(name);
  if (!editorApi || !preset) return;

  editorApi.setValue(preset.trim());
  const presetTempo = extractDraftTempo(preset);
  const presetBars = extractDraftBars(preset);
  const presetKey = extractDraftKey(preset);
  if (typeof presetTempo === 'number') {
    tempo = presetTempo;
  }
  if (typeof presetBars === 'number') bars = presetBars;
  if (typeof presetKey === 'number') transpose = presetKey;
  if (mixerApi && (typeof presetTempo === 'number' || typeof presetBars === 'number' || typeof presetKey === 'number')) {
    mixerApi.syncTransport({ tempo, bars, transpose });
  }
  localStorage.setItem(STORAGE_KEY, editorApi.getValue());
  setQueryLoad(name);
  showStatus(`Loaded preset: ${PRESET_LABELS[name] || name}`, 'ready');
  updateLoop();
  editorApi.focus();
}

function syncMixer(data) {
  if (!mixerApi) return;
  mixerApi.update(data);
  syncSnapshotsPanel();
  if (midiLearn) midiLearn.setActions(buildMidiActions());
}

function syncSnapshotsPanel() {
  if (!mixerApi || !snapshotManager) return;
  mixerApi.setSnapshots(snapshotManager.snapshots, snapshotManager.selectedId);
}

function buildMidiActions() {
  const actions = {
    'transport:play': () => {
      if (playing) stop();
      else play();
    },
    'transport:bpm': data => {
      tempo = 60 + Math.round(msgNorm(data) * 140);
      updateLoop();
      if (mixerApi) mixerApi.syncTransport({ tempo });
    },
    'transport:transpose': data => {
      transpose = Math.round((msgNorm(data) * 24) - 12);
      updateLoop();
      if (mixerApi) mixerApi.syncTransport({ transpose });
    },
  };

  p.getTrackKeys().forEach(key => {
    actions[`track:${key}:vol`] = data => p.setVolume(key, msgNorm(data));
    actions[`track:${key}:mute`] = data => {
      if (msgType(data) === 'noteoff') return;
      const cur = p.getTrackState(key);
      p.setMute(key, !cur.muted);
    };
    actions[`track:${key}:solo`] = data => {
      if (msgType(data) === 'noteoff') return;
      const cur = p.getTrackState(key);
      p.setSolo(key, !cur.solo);
    };
    actions[`track:${key}:epi`] = data => {
      if (msgType(data) === 'noteoff') return;
      const cur = p.getTrackState(key);
      p.setEpicenterEnabled(key, !cur.epicenterOn);
    };
  });

  for (let i = 0; i < p.pads.length; i += 1) {
    actions[`pad:${i}:trig`] = data => {
      const type = msgType(data);
      const velocity = msgValue(data) || 127;
      if (type === 'noteoff') {
        if (p.pads[i] && p.pads[i].looping) p.stopPad(i);
        return;
      }
      p.triggerPad(i, p.pads[i] && p.pads[i].looping, velocity);
    };
  }

  actions['global:lpf'] = data => p.setMasterLPF(20 * Math.pow(1000, msgNorm(data)));
  actions['master:preamp:toggle'] = data => {
    if (msgType(data) === 'noteoff') return;
    p.setMasterPreampEnabled(!p.masterPreampState.enabled);
  };
  actions['master:preamp:cut1'] = data => {
    const cutoffs = (p.masterPreampState.cutoffs || []).slice();
    cutoffs[0] = 20 * Math.pow(1000, msgNorm(data));
    p.setMasterPreampCutoffs(cutoffs);
  };
  actions['master:preamp:cut2'] = data => {
    const cutoffs = (p.masterPreampState.cutoffs || []).slice();
    cutoffs[1] = 20 * Math.pow(1000, msgNorm(data));
    p.setMasterPreampCutoffs(cutoffs);
  };
  actions['master:preamp:cut3'] = data => {
    const cutoffs = (p.masterPreampState.cutoffs || []).slice();
    cutoffs[2] = 20 * Math.pow(1000, msgNorm(data));
    p.setMasterPreampCutoffs(cutoffs);
  };
  actions['master:preamp:cut4'] = data => {
    const cutoffs = (p.masterPreampState.cutoffs || []).slice();
    cutoffs[3] = 20 * Math.pow(1000, msgNorm(data));
    p.setMasterPreampCutoffs(cutoffs);
  };
  actions['master:preamp:hpf'] = data => p.setMasterPreampHPF(20 * Math.pow(1000, msgNorm(data)));
  actions['master:preamp:lpf'] = data => p.setMasterPreampLPF(20 * Math.pow(1000, msgNorm(data)));
  actions['master:preamp:q'] = data => p.setMasterPreampQ(0.7 + (msgNorm(data) * 10));
  for (let i = 0; i < 5; i += 1) {
    actions[`master:preamp:b${i + 1}:rev`] = data => p.setMasterPreampBandReverbSend(i, msgNorm(data));
    actions[`master:preamp:b${i + 1}:dly`] = data => p.setMasterPreampBandDelaySend(i, msgNorm(data));
  }
  return actions;
}

function saveSnapshotInteractive() {
  if (!snapshotManager || !mixerApi) return;
  const name = window.prompt('Snapshot name', `Snapshot ${snapshotManager.snapshots.length + 1}`);
  if (!name) return;
  snapshotManager.saveSnapshot(mixerApi.captureState(), name);
  syncSnapshotsPanel();
  showStatus(`Saved snapshot: ${name}`, 'ready');
}

function recallSnapshot(id) {
  if (!snapshotManager || !mixerApi) return;
  const item = snapshotManager.getSnapshot(id);
  if (!item) return;
  snapshotManager.selectedId = id;
  mixerApi.applyState(item.state);
  syncSnapshotsPanel();
  updateLoop();
  showStatus(`Recalled snapshot: ${item.name}`, playing ? 'playing' : 'ready');
}

function exportSnapshots() {
  if (!snapshotManager) return;
  const data = snapshotManager.exportJSON();
  const blob = new Blob([data], { type: 'application/json' });
  const href = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = href;
  a.download = 'scoops-snapshots.json';
  a.click();
  URL.revokeObjectURL(href);
}

function importSnapshots() {
  if (!snapshotManager) return;
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json,.json';
  input.addEventListener('change', async () => {
    const [file] = input.files || [];
    if (!file) return;
    const text = await file.text();
    try {
      snapshotManager.importJSON(text);
      syncSnapshotsPanel();
      showStatus('Snapshots imported', 'ready');
    } catch (e) {
      showError(e.message || 'Invalid snapshot file');
    }
  });
  input.click();
}

async function initMidi() {
  const midiBtn = document.getElementById('midi-btn');
  if (!midiBtn) return;
  if (!navigator.requestMIDIAccess) {
    midiBtn.disabled = true;
    midiBtn.textContent = 'MIDI: unsupported';
    return;
  }
  midiBtn.disabled = false;
  midiBtn.textContent = 'MIDI: connect';
  midiBtn.title = 'Hold L and click a control to MIDI-learn it';
  midiAccess = new MidiAccess();
  midiLearn = new MidiLearn(midiAccess);
  midiLearn.setActions(buildMidiActions());

  midiAccess.on(data => {
    if (midiLearn) midiLearn.dispatch(data);
  });
  midiAccess.onState(names => {
    midiBtn.textContent = names.length ? `MIDI: ${names[0]}` : 'MIDI: no input';
  });
  midiLearn.onBound = controlId => {
    showStatus(`Bound MIDI to ${controlId}`, 'ready');
  };

  function setLearnLabelMode(active) {
    const mixerRoot = document.getElementById('mixer-panel');
    if (!mixerRoot) return;
    const controls = mixerRoot.querySelectorAll('[data-midi-id]');
    controls.forEach(control => {
      if (!control || control.tagName !== 'BUTTON') return;
      if (!control.dataset.learnLabelOrig) {
        control.dataset.learnLabelOrig = control.textContent || '';
      }
      if (active) {
        control.textContent = 'Learn';
      } else {
        control.textContent = control.dataset.learnLabelOrig || control.textContent;
      }
    });
  }

  document.addEventListener('keydown', e => {
    if (e.code === 'KeyL' && !e.metaKey && !e.ctrlKey && !e.altKey) {
      if (midiLearnKeyHeld) return;
      midiLearnKeyHeld = true;
      setLearnLabelMode(true);
    }
  });
  document.addEventListener('keyup', e => {
    if (e.code === 'KeyL') {
      midiLearnKeyHeld = false;
      setLearnLabelMode(false);
    }
  });
  window.addEventListener('blur', () => {
    midiLearnKeyHeld = false;
    setLearnLabelMode(false);
  });
  document.addEventListener('pointerdown', e => {
    if (!midiLearn || !midiLearnKeyHeld) return;
    const target = e.target && e.target.closest ? e.target.closest('[data-midi-id]') : null;
    if (!target) return;
    const mixerRoot = document.getElementById('mixer-panel');
    if (!mixerRoot || !mixerRoot.contains(target)) return;
    const controlId = target.dataset.midiId;
    if (!controlId) return;
    midiLearn.startLearn(controlId);
    target.classList.add('midi-learning-target');
    showStatus(`Learning ${controlId}... move hardware control`, 'warning');
    const clearClass = () => target.classList.remove('midi-learning-target');
    const oldBound = midiLearn.onBound;
    midiLearn.onBound = (...args) => {
      clearClass();
      if (typeof oldBound === 'function') oldBound(...args);
      midiLearn.onBound = oldBound;
    };
    setTimeout(() => {
      if (midiLearn && midiLearn.learning === controlId) {
        midiLearn.cancelLearn();
        clearClass();
        midiLearn.onBound = oldBound;
        showStatus('MIDI learn cancelled', 'ready');
      }
    }, 8000);
  });

  midiBtn.addEventListener('click', async () => {
    try {
      const names = await midiAccess.connect();
      midiBtn.textContent = names.length ? `MIDI: ${names[0]}` : 'MIDI: no input';
      showStatus('MIDI connected', 'ready');
    } catch (e) {
      midiBtn.textContent = 'MIDI: blocked';
      showError('MIDI access denied');
    }
  });
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
    if ((e.metaKey || e.ctrlKey) && e.code === 'KeyS') {
      e.preventDefault();
      if (snapshotManager && mixerApi) saveSnapshotInteractive();
    }
    if (!editingField && /^Digit[0-9]$/.test(e.code)) {
      const n = parseInt(e.code.replace('Digit', ''), 10);
      if (snapshotManager && n > 0 && n <= snapshotManager.snapshots.length) {
        const item = snapshotManager.snapshots[n - 1];
        if (item) recallSnapshot(item.id);
      }
    }
    if (e.code === 'Escape') {
      stop();
    }
  });
}

function bindTopVisualizer(canvas) {
  if (!canvas || !p || !p.visualizer) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const analyser = p.visualizer;
  const bins = analyser.frequencyBinCount;
  visualizerData = visualizerData && visualizerData.length === bins
    ? visualizerData
    : new Uint8Array(bins);
  let lastCssW = 0;
  let lastCssH = 0;

  function resize(force = false) {
    const rect = canvas.getBoundingClientRect();
    const cssW = Math.max(1, Math.floor(rect.width));
    const cssH = Math.max(1, Math.floor(rect.height));
    if (!force && cssW === lastCssW && cssH === lastCssH) return;
    lastCssW = cssW;
    lastCssH = cssH;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
    canvas.width = Math.max(1, Math.floor(cssW * dpr));
    canvas.height = Math.max(1, Math.floor(cssH * dpr));
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize(true);
  window.addEventListener('resize', () => resize(true));

  function draw() {
    resize();
    const w = canvas.clientWidth || 1;
    const h = canvas.clientHeight || 1;
    ctx.clearRect(0, 0, w, h);
    analyser.getByteFrequencyData(visualizerData);
    const bars = 32;
    const gap = 1;
    const usableWidth = Math.max(1, w - ((bars - 1) * gap));
    const bw = Math.max(1, usableWidth / bars);
    const band = Math.max(1, Math.floor(visualizerData.length / bars));
    for (let i = 0; i < bars; i += 1) {
      const start = i * band;
      const end = Math.min(visualizerData.length, start + band);
      let peak = 0;
      for (let j = start; j < end; j += 1) {
        if (visualizerData[j] > peak) peak = visualizerData[j];
      }
      const mag = Math.min(1, Math.pow(peak / 255, 0.9) * 1.7);
      const bh = Math.max(1, mag * h);
      const x = i * (bw + gap);
      const y = h - bh;
      ctx.fillStyle = 'rgba(0, 255, 136, 0.92)';
      ctx.fillRect(x, y, bw, bh);
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

function createDOM(initialText, initialPreset) {
  document.body.innerHTML = '';

  const toolbar = document.createElement('div');
  toolbar.id = 'toolbar';
  const toolbarControls = document.createElement('div');
  toolbarControls.id = 'toolbar-controls';
  const topVisualizer = document.createElement('div');
  topVisualizer.id = 'top-visualizer';
  const topVisualizerCanvas = document.createElement('canvas');
  topVisualizerCanvas.id = 'top-visualizer-canvas';
  topVisualizer.appendChild(topVisualizerCanvas);

  // const aboutLink = document.createElement('a');
  // aboutLink.id = 'about-link';
  // aboutLink.href = 'landing.html';
  // aboutLink.textContent = '← About';

  const playBtn = document.createElement('button');
  playBtn.id = 'play-btn';
  playBtn.textContent = '▶ Play';
  playBtn.addEventListener('click', play);

  const stopBtn = document.createElement('button');
  stopBtn.id = 'stop-btn';
  stopBtn.textContent = '■ Stop';
  stopBtn.addEventListener('click', stop);

  const loopLabel = document.createElement('label');
  loopLabel.className = 'field-group';
  loopLabel.textContent = 'Loop ';
  const loopCheckbox = document.createElement('input');
  loopCheckbox.id = 'loop-checkbox';
  loopCheckbox.type = 'checkbox';
  loopCheckbox.addEventListener('change', () => {
    songLoop = Boolean(loopCheckbox.checked);
    p.setSongLoop(songLoop);
    updateLoopCheckbox();
    showStatus(songLoop ? 'Loop enabled' : 'Loop disabled', 'ready');
  });
  loopLabel.appendChild(loopCheckbox);
  updateLoopCheckbox();

  const midiBtn = document.createElement('button');
  midiBtn.id = 'midi-btn';
  midiBtn.textContent = 'MIDI: init';

  const presetLabel = document.createElement('label');
  presetLabel.className = 'field-group';
  // presetLabel.textContent = 'Preset ';
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

    // toolbarControls.appendChild(aboutLink);
    toolbarControls.appendChild(playBtn);
    toolbarControls.appendChild(stopBtn);
    toolbarControls.appendChild(loopLabel);
    toolbarControls.appendChild(midiBtn);

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
    instrumentOptions: listInstrumentOptions(),
    suggestions: true,
    onCursorToken: setCursorTokenIndicator,
    getSuggestDockEl: () => document.getElementById('context-tool'),
    onSuggestVisibilityChange: isOpen => {
      const el = document.getElementById('context-tool');
      if (!el) return;
      el.classList.toggle('context-open', Boolean(isOpen));
    },
    onArrangementSectionClick: queueSectionLaunch,
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
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.code === 'Enter') {
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

  const contextTool = document.createElement('div');
  contextTool.id = 'context-tool';
  const topBadges = document.createElement('div');
  topBadges.id = 'top-badges';

  const sectionIndicator = document.createElement('span');
  sectionIndicator.id = 'section-indicator';
  const sectionIndicatorLabel = document.createElement('span');
  sectionIndicatorLabel.id = 'section-indicator-label';
  sectionIndicatorLabel.textContent = 'Section: —';
  sectionIndicator.appendChild(sectionIndicatorLabel);
  const cursorTokenIndicator = document.createElement('span');
  cursorTokenIndicator.id = 'cursor-token-indicator';
  cursorTokenIndicator.textContent = 'Cursor: —';
  const lintIndicator = document.createElement('span');
  lintIndicator.id = 'lint-indicator';
  lintIndicator.textContent = 'Lint: —';
  lintIndicator.dataset.state = 'idle';
  const tokenBadges = document.createElement('div');
  tokenBadges.id = 'token-badges';
  tokenBadges.appendChild(lintIndicator);
  tokenBadges.appendChild(cursorTokenIndicator);
  tokenBadges.appendChild(sectionIndicator);
  topBadges.appendChild(contextTool);
  topBadges.appendChild(tokenBadges);
  toolbar.appendChild(topBadges);
  toolbar.appendChild(topVisualizer);
  toolbar.appendChild(toolbarControls);
  bindTopVisualizer(topVisualizerCanvas);

  statusbar.appendChild(presetLabel);
  statusbar.appendChild(beatDots);
  statusbar.appendChild(statusMessage);

  const workspace = document.createElement('div');
  workspace.id = 'workspace';
  const rightColumn = document.createElement('div');
  rightColumn.id = 'right-column';
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
    onSnapshotSave: saveSnapshotInteractive,
    onSnapshotRecall: recallSnapshot,
    onSnapshotDelete(id) {
      if (!snapshotManager) return;
      snapshotManager.deleteSnapshot(id);
      syncSnapshotsPanel();
    },
    onSnapshotExport: exportSnapshots,
    onSnapshotImport: importSnapshots,
  });
  p.onBeat = (key, when, beatIndex) => {
    const wait = Math.max(0, (when - p.audioContext.currentTime) * 1000);
    setTimeout(() => {
      mixerApi.flashVU(key);
      if (!editorApi) return;
      if (lastFlashedBeatIndex !== beatIndex) {
        editorApi.clearActiveTokenHighlight();
        lastFlashedBeatIndex = beatIndex;
      }
      const lines = trackLineMap.get(key);
      if (!lines || !lines.length) return;
      const beatDurationMs = (240000 / ((tempo || 1) * (bars || 1)));
      editorApi.flashActiveTokens(lines, beatIndex, beatDurationMs);
    }, wait);
  };
  p.onPlaybackEnd = () => {
    if (!playing) return;
    stop();
    showStatus('Ended', 'ready');
  };

  workspace.appendChild(editorApi.el);
  rightColumn.appendChild(toolbar);
  rightColumn.appendChild(beatIndicatorBar);
  rightColumn.appendChild(statusbar);
  rightColumn.appendChild(mixerApi.el);
  workspace.appendChild(rightColumn);
  document.body.appendChild(workspace);

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

function play(startBeat = undefined) {
  stop();
  if (!editorApi) return;

  if (p.audioContext.state === 'suspended') {
    p.audioContext.resume();
  }
  playing = true;
  const data = getData(editorApi.getValue());
  p.setLoopMachine(data, tempo, bars, transpose);
  p.setSongLoop(songLoop);
  applyArrangementLoopRange();
  updateBeatDots();
  updateToolbarBeats();
  syncMixer(data);
  p.playLoopMachine(typeof startBeat === 'number' ? startBeat : undefined);
  syncCurrentSectionUI();
  lastSectionTimelineIndex = -1;
  pendingSectionLaunch = null;
  if (editorApi) editorApi.setQueuedArrangementToken(null);
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
    editorApi.setActiveSection(null);
    editorApi.setQueuedArrangementToken(null);
    editorApi.setActiveArrangementLoopBlock(null);
  }
  setCurrentSectionIndicator(null);
  lastFlashedBeatIndex = -1;
  lastSectionTimelineIndex = -1;
  pendingSectionLaunch = null;
  updatePlayButton();
  setReadyStatus();
}

function updateLoop() {
  if (!editorApi || !p) return;

  const data = getData(editorApi.getValue());
  const changed = p.setLoopMachine(data, tempo, bars, transpose);
  applyArrangementLoopRange();
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

  if (p.loopStarted) {
    const active = getSectionAtBeat(p.beatIndex);
    const currentIndex = active ? active.index : -1;
    if (pendingSectionLaunch && lastSectionTimelineIndex >= 0 && currentIndex !== lastSectionTimelineIndex) {
      jumpToSectionTimelineIndex(pendingSectionLaunch.index);
      pendingSectionLaunch = null;
      if (editorApi) editorApi.setQueuedArrangementToken(null);
    }
    lastSectionTimelineIndex = currentIndex;
  }

  syncCurrentSectionUI();

  requestAnimationFrame(beatIndicator);
}

async function bootstrap() {
  snapshotManager = new SnapshotManager();
  const params = new URLSearchParams(window.location.search);
  const initialPreset = params.get('load');
  const initialDraft = await resolveInitialDraft();
  const initialTempo = extractDraftTempo(initialDraft);
  const initialBars = extractDraftBars(initialDraft);
  const initialKey = extractDraftKey(initialDraft);
  if (typeof initialTempo === 'number') tempo = initialTempo;
  if (typeof initialBars === 'number') bars = initialBars;
  if (typeof initialKey === 'number') transpose = initialKey;
  const editor = createDOM(initialDraft, initialPreset);
  bindGlobalShortcuts();
  const data = getData(editor.getValue());
  p.setLoopMachine(data, tempo, bars, transpose);
  p.setSongLoop(songLoop);
  updateBeatDots();
  updateToolbarBeats();
  syncMixer(data);
  syncSnapshotsPanel();
  syncCurrentSectionUI();
  setReadyStatus();
  initMidi();
  requestAnimationFrame(beatIndicator);
}

bootstrap();

export default {};
