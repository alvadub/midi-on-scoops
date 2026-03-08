export function extractDraftTempo(input) {
  const m = String(input || '').match(/^\s*;\s*tempo\s*:\s*(\d+(?:\.\d+)?)\s*$/im);
  if (!m) return null;
  const n = Math.round(parseFloat(m[1]));
  if (!Number.isFinite(n)) return null;
  return Math.max(60, Math.min(200, n));
}

export function extractDraftBars(input) {
  const m = String(input || '').match(/^\s*;\s*bars\s*:\s*(\d+)\s*$/im);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  if (!Number.isFinite(n)) return null;
  return Math.max(4, Math.min(32, n));
}

export function extractDraftKey(input) {
  const m = String(input || '').match(/^\s*;\s*key\s*:\s*([+-]?\d+)\s*$/im);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  if (!Number.isFinite(n)) return null;
  return Math.max(-12, Math.min(12, n));
}

export function buildMixFromMerged(midi) {
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

export function buildTrackLineMap(input) {
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

export function applyLatestInputWins(context) {
  Object.values((context && context.tracks) || {}).forEach(channels => {
    Object.keys(channels || {}).forEach(ch => {
      const clips = channels[ch] || [];
      const lastInput = clips.reduce((idx, clip, i) => (clip && clip.input ? i : idx), -1);
      if (lastInput > 0) channels[ch] = clips.slice(lastInput);
    });
  });
  return context;
}

export function buildArrangementDisplayExpansion(sourceText) {
  const lines = String(sourceText || '').split(/\r?\n/);
  const expanded = [];
  let tokenOrder = 0;

  lines.forEach(rawLine => {
    const noComment = rawLine.replace(/;.*$/, '');
    const trimmed = noComment.trim();
    if (!trimmed.startsWith('>')) return;
    const body = trimmed.slice(1).trim();
    if (!body) return;
    const parts = body.split(/\s+/);
    let last = null;
    parts.forEach(part => {
      if (/^[A-Z][A-Z0-9]*$/.test(part)) {
        last = { name: part, displayOrder: tokenOrder };
        tokenOrder += 1;
        expanded.push(last);
        return;
      }
      if (/^x(\d+)$/.test(part) && last) {
        const count = Math.max(1, parseInt(part.slice(1), 10));
        for (let i = 1; i < count; i += 1) {
          expanded.push({ name: last.name, displayOrder: tokenOrder });
        }
        tokenOrder += 1;
        return;
      }
      if (part === '%' && last) {
        expanded.push({ name: last.name, displayOrder: tokenOrder });
        tokenOrder += 1;
      }
    });
  });

  return expanded;
}

export function buildSectionTimeline(context, merged, sourceText) {
  if (!context || !Array.isArray(merged) || merged.length === 0) return [];
  if (!context.main || !context.main.length) return [];

  const expanded = buildArrangementDisplayExpansion(sourceText || '');
  const flattenedSections = [];
  merged.forEach(group => {
    (group || []).forEach(parts => {
      flattenedSections.push(parts);
    });
  });

  const timeline = [];
  let cursor = 0;
  flattenedSections.forEach((parts, idx) => {
    const mergedBeats = (parts || []).reduce((max, t) => {
      const len = Array.isArray(t[2]) ? t[2].length : 0;
      return Math.max(max, len);
    }, 0);
    const token = expanded[idx] || expanded[expanded.length - 1] || null;
    const name = token ? token.name : null;
    const displayOrder = token ? token.displayOrder : null;
    const beats = Math.max(1, mergedBeats);
    const start = cursor;
    const end = Math.max(start, start + beats - 1);
    cursor = end + 1;
    timeline.push({ name, displayOrder, start, end });
  });
  return timeline;
}

export function getSectionAtBeat(sectionTimeline, beatIndex) {
  const index = (sectionTimeline || []).findIndex(section => (
    section.name && beatIndex >= section.start && beatIndex <= section.end
  ));
  if (index < 0) return null;
  return { index, item: sectionTimeline[index] };
}

export function findTimelineIndex(sectionTimeline, displayOrder, name) {
  if (typeof displayOrder === 'number' && displayOrder >= 0) {
    const idx = (sectionTimeline || []).findIndex(section => section.displayOrder === displayOrder);
    if (idx >= 0) return idx;
  }
  if (name) return (sectionTimeline || []).findIndex(section => section.name === name);
  return -1;
}

export function getMaxPatternSlots(context) {
  if (!context || !context.trackPatternSlots) return 0;
  const slots = Object.values(context.trackPatternSlots);
  if (slots.length === 0) return 0;
  return Math.max(...slots);
}
