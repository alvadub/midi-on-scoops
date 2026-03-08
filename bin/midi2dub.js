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
      } else if (type === 0x80 || (type === 0x90 && d2 === 0)) {
        // ignore note-off for first-pass pulse extraction
      }
    }
    tracks.push(events);
  }

  return { format, ppqn, tracks, tempos, programs };
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

function toDub(midi, sourceName) {
  const events = midi.tracks.reduce((memo, tr) => memo.concat(tr), []);
  const firstTempo = midi.tempos[0] ? Math.round(60000000 / midi.tempos[0].usPerQuarter) : 120;
  const { lanes, subDiv } = buildPulseSlots(events, midi.ppqn, midi.programs, 4, 4);
  let maxSlot = 0;
  lanes.forEach(l => {
    const laneMax = [...l.slots.keys()].reduce((m, n) => Math.max(m, n), 0);
    if (laneMax > maxSlot) maxSlot = laneMax;
  });
  const totalSlots = Math.max(1, maxSlot + 1);

  const melodyLines = [];
  const chordLines = [];
  const drumLines = [];

  lanes
    .sort((a, b) => (a.channel - b.channel) || ((a.note || 0) - (b.note || 0)))
    .forEach(lane => {
      const instrument = lane.isDrum ? 0 : lane.program;
      if (lane.isDrum) {
        const out = patternFromSlots(
          lane.slots,
          totalSlots,
          subDiv,
          (tones, toNoteName) => (tones.length ? toNoteName(tones[0]) : null),
        );
        if (!out.notes.length) return;
        drumLines.push(`    #${instrument} ${out.velocity} ${out.pattern} ${out.notes[0]} x${out.notes.length}`);
        return;
      }

      const melody = patternFromSlots(
        lane.slots,
        totalSlots,
        subDiv,
        (tones, toNoteName) => (tones.length ? toNoteName(tones[tones.length - 1]) : null),
      );
      if (melody.notes.length) {
        melodyLines.push(`    #${instrument} ${melody.velocity} ${melody.pattern} ${melody.notes.join(' ')}`);
      }

      const chords = patternFromSlots(
        lane.slots,
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

  const lines = [];
  lines.push(`; MIDI import: ${sourceName}`);
  lines.push(`; tempo: ${firstTempo}`);
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
  console.log('Usage: midi2dub <input.mid> [output.dub]');
}

function main(argv) {
  const args = argv.slice(2).filter(Boolean);
  if (!args.length) {
    usage();
    process.exit(1);
  }
  const input = args[0];
  const output = args[1];
  if (!fs.existsSync(input)) {
    console.error(`Input not found: ${input}`);
    process.exit(1);
  }
  const buffer = fs.readFileSync(input);
  const midi = parseMidi(buffer);
  const dub = toDub(midi, path.basename(input));
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
