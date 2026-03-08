#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { note } = require('tonal-midi');

function readVarLen(buffer, offset) {
  let value = 0;
  let i = offset;
  let b = 0;
  do {
    b = buffer[i];
    value = (value << 7) | (b & 0x7F);
    i += 1;
  } while (b & 0x80);
  return { value, offset: i };
}

function parseMidi(buffer) {
  if (buffer.slice(0, 4).toString('ascii') !== 'MThd') {
    throw new Error('Invalid MIDI header');
  }
  const headerLen = buffer.readUInt32BE(4);
  const format = buffer.readUInt16BE(8);
  const trackCount = buffer.readUInt16BE(10);
  const division = buffer.readUInt16BE(12);
  const ppqn = division & 0x7FFF;

  let offset = 8 + headerLen;
  const tracks = [];
  const noteSpans = [];
  const tempos = [];
  const programs = {};

  for (let t = 0; t < trackCount; t += 1) {
    const id = buffer.slice(offset, offset + 4).toString('ascii');
    if (id !== 'MTrk') throw new Error(`Invalid track chunk at ${offset}`);
    const len = buffer.readUInt32BE(offset + 4);
    const end = offset + 8 + len;
    offset += 8;

    let tick = 0;
    let running = null;
    const events = [];
    const active = new Map();
    while (offset < end) {
      const delta = readVarLen(buffer, offset);
      tick += delta.value;
      offset = delta.offset;

      let status = buffer[offset];
      if (status < 0x80) {
        if (running == null) throw new Error('Invalid running status');
        status = running;
      } else {
        offset += 1;
        running = status;
      }

      if (status === 0xFF) {
        const metaType = buffer[offset];
        offset += 1;
        const metaLen = readVarLen(buffer, offset);
        offset = metaLen.offset;
        const data = buffer.slice(offset, offset + metaLen.value);
        offset += metaLen.value;
        if (metaType === 0x51 && data.length === 3) {
          const usPerQuarter = (data[0] << 16) | (data[1] << 8) | data[2];
          tempos.push({ tick, usPerQuarter });
        }
        continue;
      }

      if (status === 0xF0 || status === 0xF7) {
        const syxLen = readVarLen(buffer, offset);
        offset = syxLen.offset + syxLen.value;
        continue;
      }

      const type = status & 0xF0;
      const channel = status & 0x0F;
      const d1 = buffer[offset];
      offset += 1;
      let d2 = 0;
      if (![0xC0, 0xD0].includes(type)) {
        d2 = buffer[offset];
        offset += 1;
      }

      if (type === 0xC0) {
        programs[channel] = d1;
      }

      if (type === 0x90 && d2 > 0) {
        events.push({ tick, channel, note: d1, velocity: d2 });
        if (channel !== 9) {
          const key = `${channel}:${d1}`;
          const stack = active.get(key) || [];
          stack.push({ startTick: tick, velocity: d2 });
          active.set(key, stack);
        }
      } else if (type === 0x80 || (type === 0x90 && d2 === 0)) {
        if (channel !== 9) {
          const key = `${channel}:${d1}`;
          const stack = active.get(key) || [];
          const head = stack.pop();
          if (head) {
            noteSpans.push({
              channel,
              note: d1,
              velocity: head.velocity,
              startTick: head.startTick,
              endTick: Math.max(head.startTick + 1, tick),
            });
          }
          if (stack.length) active.set(key, stack);
          else active.delete(key);
        }
      }
    }
    active.forEach((stack, key) => {
      const [channelStr, noteStr] = key.split(':');
      const channel = parseInt(channelStr, 10);
      const noteValue = parseInt(noteStr, 10);
      stack.forEach(head => {
        noteSpans.push({
          channel,
          note: noteValue,
          velocity: head.velocity,
          startTick: head.startTick,
          endTick: Math.max(head.startTick + 1, tick),
        });
      });
    });
    tracks.push(events);
  }

  return {
    format, ppqn, tracks, noteSpans, tempos, programs,
  };
}

function roundDiv(n, d) {
  return Math.round(n / d);
}

function buildPulseSlots(events, ppqn, programs = {}, slotsPerBeat = 4, subDiv = 4) {
  const slotTicks = ppqn / slotsPerBeat;
  const subTicks = slotTicks / subDiv;
  const lanes = new Map();

  events.forEach(ev => {
    const isDrum = ev.channel === 9;
    const laneKey = isDrum ? `${ev.channel}:${ev.note}` : `${ev.channel}`;
    if (!lanes.has(laneKey)) {
      lanes.set(laneKey, {
        channel: ev.channel,
        isDrum,
        note: isDrum ? ev.note : null,
        program: Number.isFinite(programs[ev.channel]) ? programs[ev.channel] : 0,
        velocity: [],
        slots: new Map(),
      });
    }
    const lane = lanes.get(laneKey);
    lane.velocity.push(ev.velocity);

    let slot = Math.floor(ev.tick / slotTicks);
    let sub = roundDiv(ev.tick - (slot * slotTicks), subTicks);
    if (sub >= subDiv) {
      slot += 1;
      sub = 0;
    }
    const slotMap = lane.slots.get(slot) || new Map();
    const key = Math.max(0, Math.min(subDiv - 1, sub));
    const subEvents = slotMap.get(key) || [];
    subEvents.push(ev);
    slotMap.set(key, subEvents);
    lane.slots.set(slot, slotMap);
  });

  return { lanes: [...lanes.values()], slotTicks, subDiv };
}

function patternFromSlots(slotsMap, totalSlots, subDiv, selector) {
  const slots = [];
  const notes = [];
  const toNoteName = n => note(n) || 'C4';
  const selectedVel = [];
  for (let i = 0; i < totalSlots; i += 1) {
    const subMap = slotsMap.get(i);
    if (!subMap || subMap.size === 0) {
      slots.push('-');
      continue;
    }

    const chars = Array.from({ length: subDiv }, () => '-');
    let hasAny = false;
    for (let j = 0; j < subDiv; j += 1) {
      if (!subMap.has(j)) {
        continue;
      }
      const events = subMap.get(j);
      const tones = [...new Set(events.map(x => x.note))].sort((a, b) => a - b);
      const token = selector(tones, toNoteName);
      if (!token) continue;
      hasAny = true;
      chars[j] = 'x';
      notes.push(token);
      selectedVel.push(...events.map(x => x.velocity));
    }
    if (!hasAny) {
      slots.push('-');
      continue;
    }
    slots.push(chars[0] === 'x' && chars.slice(1).every(ch => ch === '-') ? 'x' : `[${chars.join('')}]`);
  }

  const chunked = [];
  for (let i = 0; i < slots.length; i += 8) {
    chunked.push(slots.slice(i, i + 8).join(''));
  }
  return { pattern: chunked.join(' '), notes, velocity: median(selectedVel) };
}

function median(values) {
  if (!values.length) return 100;
  const sorted = values.slice().sort((a, b) => a - b);
  const m = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? Math.round((sorted[m - 1] + sorted[m]) / 2) : sorted[m];
}

function withLoopTail(slotsMap, tailSlot) {
  let lastSlot = -1;
  let lastSub = -1;
  let lastEvents = null;
  for (const [slot, subMap] of slotsMap.entries()) {
    if (!subMap || subMap.size === 0) continue;
    for (const [sub, events] of subMap.entries()) {
      if (!events || !events.length) continue;
      if (slot > lastSlot || (slot === lastSlot && sub > lastSub)) {
        lastSlot = slot;
        lastSub = sub;
        lastEvents = events;
      }
    }
  }
  if (!lastEvents || !lastEvents.length) return slotsMap;

  const next = new Map(slotsMap);
  const tail = new Map(next.get(tailSlot) || []);
  tail.set(0, lastEvents.slice());
  next.set(tailSlot, tail);
  return next;
}

function buildSustainLanes(noteSpans, ppqn, programs = {}, slotsPerBeat = 4) {
  const slotTicks = ppqn / slotsPerBeat;
  const lanes = new Map();
  (noteSpans || []).forEach(ev => {
    const key = `${ev.channel}`;
    if (!lanes.has(key)) {
      lanes.set(key, {
        channel: ev.channel,
        program: Number.isFinite(programs[ev.channel]) ? programs[ev.channel] : 0,
        slots: new Map(),
      });
    }
    const lane = lanes.get(key);
    const startSlot = Math.max(0, Math.floor(ev.startTick / slotTicks));
    const endSlot = Math.max(startSlot + 1, Math.ceil(ev.endTick / slotTicks));
    for (let slot = startSlot; slot < endSlot; slot += 1) {
      const state = lane.slots.get(slot) || { onset: new Map(), active: new Map() };
      state.active.set(ev.note, ev.velocity);
      if (slot === startSlot) state.onset.set(ev.note, ev.velocity);
      lane.slots.set(slot, state);
    }
  });
  return [...lanes.values()];
}

function withLoopTailSustainSlots(slotsMap, tailSlot) {
  let lastSlot = -1;
  let lastState = null;
  for (const [slot, state] of slotsMap.entries()) {
    if (!state || !state.onset || state.onset.size === 0) continue;
    if (slot > lastSlot) {
      lastSlot = slot;
      lastState = state;
    }
  }
  if (!lastState) return slotsMap;
  const next = new Map(slotsMap);
  next.set(tailSlot, {
    onset: new Map(lastState.onset),
    active: new Map(lastState.active),
  });
  return next;
}

function buildMelodyFromSustainSlots(slotsMap, totalSlots) {
  const out = [];
  const notes = [];
  const velocities = [];
  let current = null;
  const toNoteName = n => note(n) || 'C4';
  for (let slot = 0; slot < totalSlots; slot += 1) {
    const state = slotsMap.get(slot);
    if (!state) {
      out.push('-');
      current = null;
      continue;
    }
    const onsetNotes = [...state.onset.keys()].sort((a, b) => a - b);
    if (onsetNotes.length === 1) {
      current = onsetNotes[onsetNotes.length - 1];
      out.push('x');
      notes.push(toNoteName(current));
      velocities.push(state.onset.get(current) || 100);
      continue;
    }
    if (onsetNotes.length > 1) {
      current = null;
      out.push('-');
      continue;
    }
    if (current != null && state.active.has(current)) {
      out.push('_');
      continue;
    }
    current = null;
    out.push('-');
  }
  const chunks = [];
  for (let i = 0; i < out.length; i += 8) chunks.push(out.slice(i, i + 8).join(''));
  return { pattern: chunks.join(' '), notes, velocity: median(velocities) };
}

function buildChordsFromSustainSlots(slotsMap, totalSlots) {
  const out = [];
  const notes = [];
  const velocities = [];
  let current = null;
  const toNoteName = n => note(n) || 'C4';
  for (let slot = 0; slot < totalSlots; slot += 1) {
    const state = slotsMap.get(slot);
    if (!state) {
      out.push('-');
      current = null;
      continue;
    }
    const onsetNotes = [...state.onset.keys()].sort((a, b) => a - b);
    if (onsetNotes.length >= 2) {
      current = onsetNotes;
      out.push('x');
      notes.push(current.map(toNoteName).join('|'));
      onsetNotes.forEach(n => velocities.push(state.onset.get(n) || 100));
      continue;
    }
    // Keep sustaining the voiced chord while at least one chord tone
    // remains active; this avoids choppy retriggers from per-note note-off variance.
    if (current && current.some(n => state.active.has(n))) {
      out.push('_');
      continue;
    }
    current = null;
    out.push('-');
  }
  const chunks = [];
  for (let i = 0; i < out.length; i += 8) chunks.push(out.slice(i, i + 8).join(''));
  return { pattern: chunks.join(' '), notes, velocity: median(velocities) };
}

function toDub(midi, sourceName, options = {}) {
  const sustain = Boolean(options && options.sustain);
  const events = midi.tracks.reduce((memo, tr) => memo.concat(tr), []);
  const firstTempo = midi.tempos[0] ? Math.round(60000000 / midi.tempos[0].usPerQuarter) : 120;
  const exportTempo = firstTempo;
  const { lanes: pulseLanes, subDiv } = buildPulseSlots(events, midi.ppqn, midi.programs, 4, 4);
  const drumLanes = pulseLanes.filter(x => x.isDrum);
  const melodicSustainLanes = sustain
    ? buildSustainLanes(midi.noteSpans || [], midi.ppqn, midi.programs, 4)
    : [];
  const pulseMelodicLanes = pulseLanes.filter(x => !x.isDrum);
  const sustainLaneByChannel = new Map(
    melodicSustainLanes.map(lane => [lane.channel, lane]),
  );

  let maxSlot = 0;
  pulseLanes.forEach(l => {
    const laneMax = [...l.slots.keys()].reduce((m, n) => Math.max(m, n), 0);
    if (laneMax > maxSlot) maxSlot = laneMax;
  });
  melodicSustainLanes.forEach(l => {
    const laneMax = [...l.slots.keys()].reduce((m, n) => Math.max(m, n), 0);
    if (laneMax > maxSlot) maxSlot = laneMax;
  });
  const baseSlots = Math.max(1, maxSlot + 1);
  const paddedSlots = Math.ceil(baseSlots / 8) * 8;
  const totalSlots = paddedSlots + 8;
  const tailSlot = paddedSlots;

  const melodyLines = [];
  const chordLines = [];
  const drumLines = [];

  pulseMelodicLanes
    .sort((a, b) => (a.channel - b.channel) || ((a.note || 0) - (b.note || 0)))
    .forEach(lane => {
      const instrument = lane.program;
      const laneSlots = withLoopTail(lane.slots, tailSlot);
      const melody = patternFromSlots(
        laneSlots,
        totalSlots,
        subDiv,
        (tones, toNoteName) => (tones.length ? toNoteName(tones[tones.length - 1]) : null),
      );
      if (melody.notes.length) {
        melodyLines.push(`    #${instrument} ${melody.velocity} ${melody.pattern} ${melody.notes.join(' ')}`);
      }

      const sustainLane = sustain ? sustainLaneByChannel.get(lane.channel) : null;
      const chords = sustain && sustainLane
        ? buildChordsFromSustainSlots(withLoopTailSustainSlots(sustainLane.slots, tailSlot), totalSlots)
        : patternFromSlots(
          laneSlots,
          totalSlots,
          subDiv,
          (tones, toNoteName) => {
            if (tones.length < 2) return null;
            return tones.map(toNoteName).join('|');
          },
        );
      if (chords.notes.length) {
        chordLines.push(`    #${instrument} ${chords.velocity} ${chords.pattern} ${chords.notes.join(' ')}`);
      }
    });

  drumLanes
    .sort((a, b) => (a.channel - b.channel) || ((a.note || 0) - (b.note || 0)))
    .forEach(lane => {
      const laneSlots = withLoopTail(lane.slots, tailSlot);
      const out = patternFromSlots(
        laneSlots,
        totalSlots,
        subDiv,
        (tones, toNoteName) => (tones.length ? toNoteName(tones[0]) : null),
      );
      if (!out.notes.length) return;
      drumLines.push(`    #0 ${out.velocity} ${out.pattern} ${out.notes[0]} x${out.notes.length}`);
    });

  const lines = [];
  lines.push(`; MIDI import: ${sourceName}`);
  lines.push(`; tempo: ${exportTempo}`);
  lines.push(`; bars: 16`);
  lines.push('');
  if (melodyLines.length) {
    lines.push('# imported');
    lines.push('  @A');
    lines.push(...melodyLines);
  }
  if (chordLines.length) {
    if (lines[lines.length - 1] !== '') lines.push('');
    lines.push('## imported_chords');
    lines.push('  @A');
    lines.push(...chordLines);
  }
  if (drumLines.length) {
    if (lines[lines.length - 1] !== '') lines.push('');
    lines.push('## imported_drums');
    lines.push('  @A');
    lines.push(...drumLines);
  }

  lines.push('');
  lines.push('> A');
  return `${lines.join('\n')}\n`;
}

function usage() {
  console.log('Usage: midi2dub <input.mid> [output.dub] [--sustain]');
}

function main(argv) {
  const args = argv.slice(2).filter(Boolean);
  const sustain = args.includes('--sustain');
  const positional = args.filter(x => x !== '--sustain');
  if (!positional.length) {
    usage();
    process.exit(1);
  }
  const input = positional[0];
  const output = positional[1];
  if (!fs.existsSync(input)) {
    console.error(`Input not found: ${input}`);
    process.exit(1);
  }
  const buffer = fs.readFileSync(input);
  const midi = parseMidi(buffer);
  const dub = toDub(midi, path.basename(input), { sustain });
  if (output) {
    fs.writeFileSync(output, dub, 'utf8');
    console.log(`Wrote ${output}`);
  } else {
    process.stdout.write(dub);
  }
}

if (require.main === module) {
  try {
    main(process.argv);
  } catch (e) {
    console.error(e.message || String(e));
    process.exit(1);
  }
}

module.exports = {
  parseMidi,
  toDub,
};
