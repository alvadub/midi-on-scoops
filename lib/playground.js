import { parseArrangementBody } from "./arrangement.js";
import { resolveChannelToken } from "./channels.js";
function findSuffixDashCommentIndex(line) {
  const match = String(line || "").match(/\s--\s/);
  if (!match || typeof match.index !== "number") return -1;
  if (!/\S/.test(String(line || "").slice(0, match.index))) return -1;
  return match.index;
}
function stripInlineComment(line) {
  const value = String(line || "");
  const semicolonIndex = value.indexOf(";");
  const dashCommentIndex = findSuffixDashCommentIndex(value);
  if (semicolonIndex < 0 && dashCommentIndex < 0) return value;
  if (semicolonIndex < 0) return value.slice(0, dashCommentIndex);
  if (dashCommentIndex < 0) return value.slice(0, semicolonIndex);
  return value.slice(0, Math.min(semicolonIndex, dashCommentIndex));
}
function splitDefinitionSuffixComment(line) {
  const raw = String(line || "");
  const semicolonIndex = raw.indexOf(";");
  const scoped = semicolonIndex >= 0 ? raw.slice(0, semicolonIndex) : raw;
  const dashCommentIndex = findSuffixDashCommentIndex(scoped);
  if (dashCommentIndex < 0) return { code: scoped, comment: "" };
  return {
    code: scoped.slice(0, dashCommentIndex),
    comment: scoped.slice(dashCommentIndex + 4).trim()
  };
}
function extractDraftTempo(input) {
  const m = String(input || "").match(/^\s*;\s*tempo\s*:\s*(\d+(?:\.\d+)?)\s*$/im);
  if (!m) return null;
  const n = Math.round(parseFloat(m[1]));
  if (!Number.isFinite(n)) return null;
  return Math.max(60, Math.min(200, n));
}
function extractDraftBars(input) {
  const m = String(input || "").match(/^\s*;\s*bars\s*:\s*(\d+)\s*$/im);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  if (!Number.isFinite(n)) return null;
  return Math.max(4, Math.min(32, n));
}
function extractDraftKey(input) {
  const m = String(input || "").match(/^\s*;\s*key\s*:\s*([+-]?\d+)\s*$/im);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  if (!Number.isFinite(n)) return null;
  return Math.max(-12, Math.min(12, n));
}
function extractDraftBankSelection(input) {
  const out = {
    bank: null,
    drums: null,
    instruments: null
  };
  String(input || "").split(/\r?\n/).forEach((line) => {
    const m = String(line).match(/^\s*;\s*bank(?:\.(drums|instruments))?\s*:\s*([a-z0-9._-]+)\s*$/i);
    if (!m) return;
    const scope = String(m[1] || "bank").toLowerCase();
    const value = String(m[2] || "").trim();
    if (!value) return;
    if (scope === "bank") out.bank = value;
    if (scope === "drums") out.drums = value;
    if (scope === "instruments") out.instruments = value;
  });
  return out;
}
function buildMixFromMerged(midi) {
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
  midi.forEach((section) => {
    section.forEach((parts) => {
      parts.forEach((e) => {
        const { track } = get(e[0], e[1]);
        for (let i = 0; i < e[2].length; i += 1) {
          track[2].push(e[2][i]);
        }
      });
    });
  });
  return mix;
}
function buildTrackLineMap(input, options = {}) {
  const map = /* @__PURE__ */ new Map();
  let currentTrack = null;
  String(input || "").split(/\r?\n/).forEach((rawLine, lineNumber) => {
    const line = stripInlineComment(rawLine).trim();
    if (!line) return;
    if (/^#{1,2}\s+/.test(line) && !/^#\d+/.test(line)) {
      currentTrack = line.replace(/^#{1,2}\s+/, "").trim();
      return;
    }
    if (!currentTrack) return;
    const match = line.match(/^(#[^\s]+)\b/);
    if (!match) return;
    const resolvedChannel = resolveChannelToken(match[1], options.channelAliases);
    const key = `${parseInt(resolvedChannel.slice(1), 10)}/${currentTrack}`;
    const prev = map.get(key) || [];
    if (!prev.includes(lineNumber)) prev.push(lineNumber);
    map.set(key, prev);
  });
  return map;
}
function collectVariableDefinitions(input) {
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  String(input || "").split(/\r?\n/).forEach((raw, idx) => {
    const { code, comment } = splitDefinitionSuffixComment(raw);
    const line = code.trim();
    const match = line.match(/^\s*([%&][^\s]+)\s+/);
    if (!match) return;
    const name = match[1];
    if (!name || seen.has(name)) return;
    seen.add(name);
    out.push({ name, line: idx + 1, comment });
  });
  return out;
}
function applyLatestInputWins(context) {
  Object.values(context && context.tracks || {}).forEach((channels) => {
    Object.keys(channels || {}).forEach((ch) => {
      const clips = channels[ch] || [];
      const lastInput = clips.reduce((idx, clip, i) => clip && clip.input ? i : idx, -1);
      if (lastInput > 0) channels[ch] = clips.slice(lastInput);
    });
  });
  return context;
}
function buildArrangementDisplayExpansion(sourceText) {
  const lines = String(sourceText || "").split(/\r?\n/);
  const expanded = [];
  let tokenOrder = 0;
  let blockOrder = 0;
  lines.forEach((rawLine) => {
    const noComment = rawLine.replace(/;.*$/, "");
    const trimmed = noComment.trim();
    if (!trimmed.startsWith(">")) return;
    const body = trimmed.slice(1).trim();
    if (!body) return;
    const parsed = parseArrangementBody(body, {
      orderOffset: tokenOrder,
      blockOffset: blockOrder
    });
    tokenOrder = parsed.nextOrder;
    blockOrder = parsed.nextBlock;
    expanded.push(...parsed.expanded);
  });
  return expanded;
}
function buildSectionTimeline(context, merged, sourceText) {
  if (!context || !Array.isArray(merged) || merged.length === 0) return [];
  if (!context.main || !context.main.length) return [];
  const expanded = buildArrangementDisplayExpansion(sourceText || "");
  const flattenedSections = [];
  merged.forEach((group) => {
    (group || []).forEach((parts) => {
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
    const blockId = token ? token.blockId : null;
    const blockLive = token ? Boolean(token.blockLive) : false;
    const blockStartOrder = token ? token.blockStartOrder : null;
    const blockEndOrder = token ? token.blockEndOrder : null;
    const beats = Math.max(1, mergedBeats);
    const start = cursor;
    const end = Math.max(start, start + beats - 1);
    cursor = end + 1;
    timeline.push({
      name,
      displayOrder,
      start,
      end,
      blockId,
      blockLive,
      blockStartOrder,
      blockEndOrder,
      blockStart: null,
      blockEnd: null
    });
  });
  const blocks = /* @__PURE__ */ new Map();
  timeline.forEach((item) => {
    if (!item.blockId) return;
    const prev = blocks.get(item.blockId);
    if (!prev) {
      blocks.set(item.blockId, {
        start: item.start,
        end: item.end
      });
      return;
    }
    prev.start = Math.min(prev.start, item.start);
    prev.end = Math.max(prev.end, item.end);
  });
  timeline.forEach((item) => {
    if (!item.blockId) return;
    const block = blocks.get(item.blockId);
    if (!block) return;
    item.blockStart = block.start;
    item.blockEnd = block.end;
  });
  return timeline;
}
function getSectionAtBeat(sectionTimeline, beatIndex) {
  const index = (sectionTimeline || []).findIndex((section) => section.name && beatIndex >= section.start && beatIndex <= section.end);
  if (index < 0) return null;
  return { index, item: sectionTimeline[index] };
}
function findTimelineIndex(sectionTimeline, displayOrder, name) {
  if (typeof displayOrder === "number" && displayOrder >= 0) {
    const idx = (sectionTimeline || []).findIndex((section) => section.displayOrder === displayOrder);
    if (idx >= 0) return idx;
  }
  if (name) return (sectionTimeline || []).findIndex((section) => section.name === name);
  return -1;
}
function getMaxPatternSlots(context) {
  if (!context || !context.trackPatternSlots) return 0;
  const slots = Object.values(context.trackPatternSlots);
  if (slots.length === 0) return 0;
  return Math.max(...slots);
}
export {
  applyLatestInputWins,
  buildArrangementDisplayExpansion,
  buildMixFromMerged,
  buildSectionTimeline,
  buildTrackLineMap,
  collectVariableDefinitions,
  extractDraftBankSelection,
  extractDraftBars,
  extractDraftKey,
  extractDraftTempo,
  findTimelineIndex,
  getMaxPatternSlots,
  getSectionAtBeat
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2xpYi9zcmMvbGliL3BsYXlncm91bmQuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHBhcnNlQXJyYW5nZW1lbnRCb2R5IH0gZnJvbSAnLi9hcnJhbmdlbWVudC5qcyc7XG5pbXBvcnQgeyByZXNvbHZlQ2hhbm5lbFRva2VuIH0gZnJvbSAnLi9jaGFubmVscy5qcyc7XG5cbmZ1bmN0aW9uIGZpbmRTdWZmaXhEYXNoQ29tbWVudEluZGV4KGxpbmUpIHtcbiAgY29uc3QgbWF0Y2ggPSBTdHJpbmcobGluZSB8fCAnJykubWF0Y2goL1xccy0tXFxzLyk7XG4gIGlmICghbWF0Y2ggfHwgdHlwZW9mIG1hdGNoLmluZGV4ICE9PSAnbnVtYmVyJykgcmV0dXJuIC0xO1xuICBpZiAoIS9cXFMvLnRlc3QoU3RyaW5nKGxpbmUgfHwgJycpLnNsaWNlKDAsIG1hdGNoLmluZGV4KSkpIHJldHVybiAtMTtcbiAgcmV0dXJuIG1hdGNoLmluZGV4O1xufVxuXG5mdW5jdGlvbiBzdHJpcElubGluZUNvbW1lbnQobGluZSkge1xuICBjb25zdCB2YWx1ZSA9IFN0cmluZyhsaW5lIHx8ICcnKTtcbiAgY29uc3Qgc2VtaWNvbG9uSW5kZXggPSB2YWx1ZS5pbmRleE9mKCc7Jyk7XG4gIGNvbnN0IGRhc2hDb21tZW50SW5kZXggPSBmaW5kU3VmZml4RGFzaENvbW1lbnRJbmRleCh2YWx1ZSk7XG4gIGlmIChzZW1pY29sb25JbmRleCA8IDAgJiYgZGFzaENvbW1lbnRJbmRleCA8IDApIHJldHVybiB2YWx1ZTtcbiAgaWYgKHNlbWljb2xvbkluZGV4IDwgMCkgcmV0dXJuIHZhbHVlLnNsaWNlKDAsIGRhc2hDb21tZW50SW5kZXgpO1xuICBpZiAoZGFzaENvbW1lbnRJbmRleCA8IDApIHJldHVybiB2YWx1ZS5zbGljZSgwLCBzZW1pY29sb25JbmRleCk7XG4gIHJldHVybiB2YWx1ZS5zbGljZSgwLCBNYXRoLm1pbihzZW1pY29sb25JbmRleCwgZGFzaENvbW1lbnRJbmRleCkpO1xufVxuXG5mdW5jdGlvbiBzcGxpdERlZmluaXRpb25TdWZmaXhDb21tZW50KGxpbmUpIHtcbiAgY29uc3QgcmF3ID0gU3RyaW5nKGxpbmUgfHwgJycpO1xuICBjb25zdCBzZW1pY29sb25JbmRleCA9IHJhdy5pbmRleE9mKCc7Jyk7XG4gIGNvbnN0IHNjb3BlZCA9IHNlbWljb2xvbkluZGV4ID49IDAgPyByYXcuc2xpY2UoMCwgc2VtaWNvbG9uSW5kZXgpIDogcmF3O1xuICBjb25zdCBkYXNoQ29tbWVudEluZGV4ID0gZmluZFN1ZmZpeERhc2hDb21tZW50SW5kZXgoc2NvcGVkKTtcbiAgaWYgKGRhc2hDb21tZW50SW5kZXggPCAwKSByZXR1cm4geyBjb2RlOiBzY29wZWQsIGNvbW1lbnQ6ICcnIH07XG4gIHJldHVybiB7XG4gICAgY29kZTogc2NvcGVkLnNsaWNlKDAsIGRhc2hDb21tZW50SW5kZXgpLFxuICAgIGNvbW1lbnQ6IHNjb3BlZC5zbGljZShkYXNoQ29tbWVudEluZGV4ICsgNCkudHJpbSgpLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdERyYWZ0VGVtcG8oaW5wdXQpIHtcbiAgY29uc3QgbSA9IFN0cmluZyhpbnB1dCB8fCAnJykubWF0Y2goL15cXHMqO1xccyp0ZW1wb1xccyo6XFxzKihcXGQrKD86XFwuXFxkKyk/KVxccyokL2ltKTtcbiAgaWYgKCFtKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgbiA9IE1hdGgucm91bmQocGFyc2VGbG9hdChtWzFdKSk7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIE1hdGgubWF4KDYwLCBNYXRoLm1pbigyMDAsIG4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3REcmFmdEJhcnMoaW5wdXQpIHtcbiAgY29uc3QgbSA9IFN0cmluZyhpbnB1dCB8fCAnJykubWF0Y2goL15cXHMqO1xccypiYXJzXFxzKjpcXHMqKFxcZCspXFxzKiQvaW0pO1xuICBpZiAoIW0pIHJldHVybiBudWxsO1xuICBjb25zdCBuID0gcGFyc2VJbnQobVsxXSwgMTApO1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBNYXRoLm1heCg0LCBNYXRoLm1pbigzMiwgbikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdERyYWZ0S2V5KGlucHV0KSB7XG4gIGNvbnN0IG0gPSBTdHJpbmcoaW5wdXQgfHwgJycpLm1hdGNoKC9eXFxzKjtcXHMqa2V5XFxzKjpcXHMqKFsrLV0/XFxkKylcXHMqJC9pbSk7XG4gIGlmICghbSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IG4gPSBwYXJzZUludChtWzFdLCAxMCk7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKG4pKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIE1hdGgubWF4KC0xMiwgTWF0aC5taW4oMTIsIG4pKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3REcmFmdEJhbmtTZWxlY3Rpb24oaW5wdXQpIHtcbiAgY29uc3Qgb3V0ID0ge1xuICAgIGJhbms6IG51bGwsXG4gICAgZHJ1bXM6IG51bGwsXG4gICAgaW5zdHJ1bWVudHM6IG51bGwsXG4gIH07XG5cbiAgU3RyaW5nKGlucHV0IHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBjb25zdCBtID0gU3RyaW5nKGxpbmUpLm1hdGNoKC9eXFxzKjtcXHMqYmFuayg/OlxcLihkcnVtc3xpbnN0cnVtZW50cykpP1xccyo6XFxzKihbYS16MC05Ll8tXSspXFxzKiQvaSk7XG4gICAgaWYgKCFtKSByZXR1cm47XG4gICAgY29uc3Qgc2NvcGUgPSBTdHJpbmcobVsxXSB8fCAnYmFuaycpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgdmFsdWUgPSBTdHJpbmcobVsyXSB8fCAnJykudHJpbSgpO1xuICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICBpZiAoc2NvcGUgPT09ICdiYW5rJykgb3V0LmJhbmsgPSB2YWx1ZTtcbiAgICBpZiAoc2NvcGUgPT09ICdkcnVtcycpIG91dC5kcnVtcyA9IHZhbHVlO1xuICAgIGlmIChzY29wZSA9PT0gJ2luc3RydW1lbnRzJykgb3V0Lmluc3RydW1lbnRzID0gdmFsdWU7XG4gIH0pO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZE1peEZyb21NZXJnZWQobWlkaSkge1xuICBjb25zdCBtaXggPSBbXTtcblxuICBmdW5jdGlvbiBnZXQobnRoLCBuYW1lKSB7XG4gICAgY29uc3Qga2V5ID0gbnRoICsgbmFtZTtcblxuICAgIGlmICghZ2V0W2tleV0pIHtcbiAgICAgIGNvbnN0IHRyYWNrID0gW250aCwgbmFtZSwgW11dO1xuICAgICAgbWl4LnB1c2godHJhY2spO1xuICAgICAgZ2V0W2tleV0gPSB7IHRyYWNrIH07XG4gICAgfVxuICAgIHJldHVybiBnZXRba2V5XTtcbiAgfVxuXG4gIG1pZGkuZm9yRWFjaChzZWN0aW9uID0+IHtcbiAgICBzZWN0aW9uLmZvckVhY2gocGFydHMgPT4ge1xuICAgICAgcGFydHMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgY29uc3QgeyB0cmFjayB9ID0gZ2V0KGVbMF0sIGVbMV0pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVbMl0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB0cmFja1syXS5wdXNoKGVbMl1baV0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBtaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRyYWNrTGluZU1hcChpbnB1dCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcbiAgbGV0IGN1cnJlbnRUcmFjayA9IG51bGw7XG4gIFN0cmluZyhpbnB1dCB8fCAnJykuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKChyYXdMaW5lLCBsaW5lTnVtYmVyKSA9PiB7XG4gICAgY29uc3QgbGluZSA9IHN0cmlwSW5saW5lQ29tbWVudChyYXdMaW5lKS50cmltKCk7XG4gICAgaWYgKCFsaW5lKSByZXR1cm47XG5cbiAgICBpZiAoL14jezEsMn1cXHMrLy50ZXN0KGxpbmUpICYmICEvXiNcXGQrLy50ZXN0KGxpbmUpKSB7XG4gICAgICBjdXJyZW50VHJhY2sgPSBsaW5lLnJlcGxhY2UoL14jezEsMn1cXHMrLywgJycpLnRyaW0oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWN1cnJlbnRUcmFjaykgcmV0dXJuO1xuICAgIGNvbnN0IG1hdGNoID0gbGluZS5tYXRjaCgvXigjW15cXHNdKylcXGIvKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm47XG4gICAgY29uc3QgcmVzb2x2ZWRDaGFubmVsID0gcmVzb2x2ZUNoYW5uZWxUb2tlbihtYXRjaFsxXSwgb3B0aW9ucy5jaGFubmVsQWxpYXNlcyk7XG4gICAgY29uc3Qga2V5ID0gYCR7cGFyc2VJbnQocmVzb2x2ZWRDaGFubmVsLnNsaWNlKDEpLCAxMCl9LyR7Y3VycmVudFRyYWNrfWA7XG4gICAgY29uc3QgcHJldiA9IG1hcC5nZXQoa2V5KSB8fCBbXTtcbiAgICBpZiAoIXByZXYuaW5jbHVkZXMobGluZU51bWJlcikpIHByZXYucHVzaChsaW5lTnVtYmVyKTtcbiAgICBtYXAuc2V0KGtleSwgcHJldik7XG4gIH0pO1xuICByZXR1cm4gbWFwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29sbGVjdFZhcmlhYmxlRGVmaW5pdGlvbnMoaW5wdXQpIHtcbiAgY29uc3Qgb3V0ID0gW107XG4gIGNvbnN0IHNlZW4gPSBuZXcgU2V0KCk7XG4gIFN0cmluZyhpbnB1dCB8fCAnJykuc3BsaXQoL1xccj9cXG4vKS5mb3JFYWNoKChyYXcsIGlkeCkgPT4ge1xuICAgIGNvbnN0IHsgY29kZSwgY29tbWVudCB9ID0gc3BsaXREZWZpbml0aW9uU3VmZml4Q29tbWVudChyYXcpO1xuICAgIGNvbnN0IGxpbmUgPSBjb2RlLnRyaW0oKTtcbiAgICBjb25zdCBtYXRjaCA9IGxpbmUubWF0Y2goL15cXHMqKFslJl1bXlxcc10rKVxccysvKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm47XG4gICAgY29uc3QgbmFtZSA9IG1hdGNoWzFdO1xuICAgIGlmICghbmFtZSB8fCBzZWVuLmhhcyhuYW1lKSkgcmV0dXJuO1xuICAgIHNlZW4uYWRkKG5hbWUpO1xuICAgIG91dC5wdXNoKHsgbmFtZSwgbGluZTogaWR4ICsgMSwgY29tbWVudCB9KTtcbiAgfSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseUxhdGVzdElucHV0V2lucyhjb250ZXh0KSB7XG4gIE9iamVjdC52YWx1ZXMoKGNvbnRleHQgJiYgY29udGV4dC50cmFja3MpIHx8IHt9KS5mb3JFYWNoKGNoYW5uZWxzID0+IHtcbiAgICBPYmplY3Qua2V5cyhjaGFubmVscyB8fCB7fSkuZm9yRWFjaChjaCA9PiB7XG4gICAgICBjb25zdCBjbGlwcyA9IGNoYW5uZWxzW2NoXSB8fCBbXTtcbiAgICAgIGNvbnN0IGxhc3RJbnB1dCA9IGNsaXBzLnJlZHVjZSgoaWR4LCBjbGlwLCBpKSA9PiAoY2xpcCAmJiBjbGlwLmlucHV0ID8gaSA6IGlkeCksIC0xKTtcbiAgICAgIGlmIChsYXN0SW5wdXQgPiAwKSBjaGFubmVsc1tjaF0gPSBjbGlwcy5zbGljZShsYXN0SW5wdXQpO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGNvbnRleHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEFycmFuZ2VtZW50RGlzcGxheUV4cGFuc2lvbihzb3VyY2VUZXh0KSB7XG4gIGNvbnN0IGxpbmVzID0gU3RyaW5nKHNvdXJjZVRleHQgfHwgJycpLnNwbGl0KC9cXHI/XFxuLyk7XG4gIGNvbnN0IGV4cGFuZGVkID0gW107XG4gIGxldCB0b2tlbk9yZGVyID0gMDtcbiAgbGV0IGJsb2NrT3JkZXIgPSAwO1xuXG4gIGxpbmVzLmZvckVhY2gocmF3TGluZSA9PiB7XG4gICAgY29uc3Qgbm9Db21tZW50ID0gcmF3TGluZS5yZXBsYWNlKC87LiokLywgJycpO1xuICAgIGNvbnN0IHRyaW1tZWQgPSBub0NvbW1lbnQudHJpbSgpO1xuICAgIGlmICghdHJpbW1lZC5zdGFydHNXaXRoKCc+JykpIHJldHVybjtcbiAgICBjb25zdCBib2R5ID0gdHJpbW1lZC5zbGljZSgxKS50cmltKCk7XG4gICAgaWYgKCFib2R5KSByZXR1cm47XG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VBcnJhbmdlbWVudEJvZHkoYm9keSwge1xuICAgICAgb3JkZXJPZmZzZXQ6IHRva2VuT3JkZXIsXG4gICAgICBibG9ja09mZnNldDogYmxvY2tPcmRlcixcbiAgICB9KTtcbiAgICB0b2tlbk9yZGVyID0gcGFyc2VkLm5leHRPcmRlcjtcbiAgICBibG9ja09yZGVyID0gcGFyc2VkLm5leHRCbG9jaztcbiAgICBleHBhbmRlZC5wdXNoKC4uLnBhcnNlZC5leHBhbmRlZCk7XG4gIH0pO1xuXG4gIHJldHVybiBleHBhbmRlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkU2VjdGlvblRpbWVsaW5lKGNvbnRleHQsIG1lcmdlZCwgc291cmNlVGV4dCkge1xuICBpZiAoIWNvbnRleHQgfHwgIUFycmF5LmlzQXJyYXkobWVyZ2VkKSB8fCBtZXJnZWQubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gIGlmICghY29udGV4dC5tYWluIHx8ICFjb250ZXh0Lm1haW4ubGVuZ3RoKSByZXR1cm4gW107XG5cbiAgY29uc3QgZXhwYW5kZWQgPSBidWlsZEFycmFuZ2VtZW50RGlzcGxheUV4cGFuc2lvbihzb3VyY2VUZXh0IHx8ICcnKTtcbiAgY29uc3QgZmxhdHRlbmVkU2VjdGlvbnMgPSBbXTtcbiAgbWVyZ2VkLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgIChncm91cCB8fCBbXSkuZm9yRWFjaChwYXJ0cyA9PiB7XG4gICAgICBmbGF0dGVuZWRTZWN0aW9ucy5wdXNoKHBhcnRzKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgdGltZWxpbmUgPSBbXTtcbiAgbGV0IGN1cnNvciA9IDA7XG4gIGZsYXR0ZW5lZFNlY3Rpb25zLmZvckVhY2goKHBhcnRzLCBpZHgpID0+IHtcbiAgICBjb25zdCBtZXJnZWRCZWF0cyA9IChwYXJ0cyB8fCBbXSkucmVkdWNlKChtYXgsIHQpID0+IHtcbiAgICAgIGNvbnN0IGxlbiA9IEFycmF5LmlzQXJyYXkodFsyXSkgPyB0WzJdLmxlbmd0aCA6IDA7XG4gICAgICByZXR1cm4gTWF0aC5tYXgobWF4LCBsZW4pO1xuICAgIH0sIDApO1xuICAgIGNvbnN0IHRva2VuID0gZXhwYW5kZWRbaWR4XSB8fCBleHBhbmRlZFtleHBhbmRlZC5sZW5ndGggLSAxXSB8fCBudWxsO1xuICAgIGNvbnN0IG5hbWUgPSB0b2tlbiA/IHRva2VuLm5hbWUgOiBudWxsO1xuICAgIGNvbnN0IGRpc3BsYXlPcmRlciA9IHRva2VuID8gdG9rZW4uZGlzcGxheU9yZGVyIDogbnVsbDtcbiAgICBjb25zdCBibG9ja0lkID0gdG9rZW4gPyB0b2tlbi5ibG9ja0lkIDogbnVsbDtcbiAgICBjb25zdCBibG9ja0xpdmUgPSB0b2tlbiA/IEJvb2xlYW4odG9rZW4uYmxvY2tMaXZlKSA6IGZhbHNlO1xuICAgIGNvbnN0IGJsb2NrU3RhcnRPcmRlciA9IHRva2VuID8gdG9rZW4uYmxvY2tTdGFydE9yZGVyIDogbnVsbDtcbiAgICBjb25zdCBibG9ja0VuZE9yZGVyID0gdG9rZW4gPyB0b2tlbi5ibG9ja0VuZE9yZGVyIDogbnVsbDtcbiAgICBjb25zdCBiZWF0cyA9IE1hdGgubWF4KDEsIG1lcmdlZEJlYXRzKTtcbiAgICBjb25zdCBzdGFydCA9IGN1cnNvcjtcbiAgICBjb25zdCBlbmQgPSBNYXRoLm1heChzdGFydCwgc3RhcnQgKyBiZWF0cyAtIDEpO1xuICAgIGN1cnNvciA9IGVuZCArIDE7XG4gICAgdGltZWxpbmUucHVzaCh7XG4gICAgICBuYW1lLFxuICAgICAgZGlzcGxheU9yZGVyLFxuICAgICAgc3RhcnQsXG4gICAgICBlbmQsXG4gICAgICBibG9ja0lkLFxuICAgICAgYmxvY2tMaXZlLFxuICAgICAgYmxvY2tTdGFydE9yZGVyLFxuICAgICAgYmxvY2tFbmRPcmRlcixcbiAgICAgIGJsb2NrU3RhcnQ6IG51bGwsXG4gICAgICBibG9ja0VuZDogbnVsbCxcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgYmxvY2tzID0gbmV3IE1hcCgpO1xuICB0aW1lbGluZS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGlmICghaXRlbS5ibG9ja0lkKSByZXR1cm47XG4gICAgY29uc3QgcHJldiA9IGJsb2Nrcy5nZXQoaXRlbS5ibG9ja0lkKTtcbiAgICBpZiAoIXByZXYpIHtcbiAgICAgIGJsb2Nrcy5zZXQoaXRlbS5ibG9ja0lkLCB7XG4gICAgICAgIHN0YXJ0OiBpdGVtLnN0YXJ0LFxuICAgICAgICBlbmQ6IGl0ZW0uZW5kLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHByZXYuc3RhcnQgPSBNYXRoLm1pbihwcmV2LnN0YXJ0LCBpdGVtLnN0YXJ0KTtcbiAgICBwcmV2LmVuZCA9IE1hdGgubWF4KHByZXYuZW5kLCBpdGVtLmVuZCk7XG4gIH0pO1xuXG4gIHRpbWVsaW5lLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaWYgKCFpdGVtLmJsb2NrSWQpIHJldHVybjtcbiAgICBjb25zdCBibG9jayA9IGJsb2Nrcy5nZXQoaXRlbS5ibG9ja0lkKTtcbiAgICBpZiAoIWJsb2NrKSByZXR1cm47XG4gICAgaXRlbS5ibG9ja1N0YXJ0ID0gYmxvY2suc3RhcnQ7XG4gICAgaXRlbS5ibG9ja0VuZCA9IGJsb2NrLmVuZDtcbiAgfSk7XG5cbiAgcmV0dXJuIHRpbWVsaW5lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VjdGlvbkF0QmVhdChzZWN0aW9uVGltZWxpbmUsIGJlYXRJbmRleCkge1xuICBjb25zdCBpbmRleCA9IChzZWN0aW9uVGltZWxpbmUgfHwgW10pLmZpbmRJbmRleChzZWN0aW9uID0+IChcbiAgICBzZWN0aW9uLm5hbWUgJiYgYmVhdEluZGV4ID49IHNlY3Rpb24uc3RhcnQgJiYgYmVhdEluZGV4IDw9IHNlY3Rpb24uZW5kXG4gICkpO1xuICBpZiAoaW5kZXggPCAwKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIHsgaW5kZXgsIGl0ZW06IHNlY3Rpb25UaW1lbGluZVtpbmRleF0gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRUaW1lbGluZUluZGV4KHNlY3Rpb25UaW1lbGluZSwgZGlzcGxheU9yZGVyLCBuYW1lKSB7XG4gIGlmICh0eXBlb2YgZGlzcGxheU9yZGVyID09PSAnbnVtYmVyJyAmJiBkaXNwbGF5T3JkZXIgPj0gMCkge1xuICAgIGNvbnN0IGlkeCA9IChzZWN0aW9uVGltZWxpbmUgfHwgW10pLmZpbmRJbmRleChzZWN0aW9uID0+IHNlY3Rpb24uZGlzcGxheU9yZGVyID09PSBkaXNwbGF5T3JkZXIpO1xuICAgIGlmIChpZHggPj0gMCkgcmV0dXJuIGlkeDtcbiAgfVxuICBpZiAobmFtZSkgcmV0dXJuIChzZWN0aW9uVGltZWxpbmUgfHwgW10pLmZpbmRJbmRleChzZWN0aW9uID0+IHNlY3Rpb24ubmFtZSA9PT0gbmFtZSk7XG4gIHJldHVybiAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heFBhdHRlcm5TbG90cyhjb250ZXh0KSB7XG4gIGlmICghY29udGV4dCB8fCAhY29udGV4dC50cmFja1BhdHRlcm5TbG90cykgcmV0dXJuIDA7XG4gIGNvbnN0IHNsb3RzID0gT2JqZWN0LnZhbHVlcyhjb250ZXh0LnRyYWNrUGF0dGVyblNsb3RzKTtcbiAgaWYgKHNsb3RzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG4gIHJldHVybiBNYXRoLm1heCguLi5zbG90cyk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiQUFBQSxTQUFTLDRCQUE0QjtBQUNyQyxTQUFTLDJCQUEyQjtBQUVwQyxTQUFTLDJCQUEyQixNQUFNO0FBQ3hDLFFBQU0sUUFBUSxPQUFPLFFBQVEsRUFBRSxFQUFFLE1BQU0sUUFBUTtBQUMvQyxNQUFJLENBQUMs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
