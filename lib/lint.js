import { parse, reduce } from "./parser.js";
import { merge, pack } from "./mixup.js";
import { split } from "./tokenize.js";
import { flatten } from "./utils.js";
import { buildArrangementDisplayExpansion } from "./playground.js";
import { resolveChannelToken } from "./channels.js";
function deepVisit(node, fn) {
  if (Array.isArray(node)) {
    node.forEach((item) => deepVisit(item, fn));
    return;
  }
  fn(node);
}
function countPatternStats(node) {
  const stats = {
    hits: 0,
    slots: 0,
    sustainAfterHit: true
  };
  let seenHit = false;
  deepVisit(node, (value) => {
    if (typeof value !== "string") return;
    const parts = split(value);
    deepVisit(parts, (part) => {
      if (part === "x") {
        stats.hits += 1;
        stats.slots += 1;
        seenHit = true;
        return;
      }
      if (part === "-") {
        stats.slots += 1;
        return;
      }
      if (part === "_") {
        stats.slots += 1;
        if (!seenHit) stats.sustainAfterHit = false;
      }
    });
  });
  return stats;
}
function flattenSectionBeats(beats) {
  let active = 0;
  deepVisit(beats, (tick) => {
    if (tick && typeof tick === "object" && tick.v > 0) active += 1;
  });
  return active;
}
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
function scanClipLineMap(source, opts = {}) {
  const clipLineMap = /* @__PURE__ */ new Map();
  const explicitClipCounts = /* @__PURE__ */ new Map();
  const sectionNames = /* @__PURE__ */ new Set();
  const sectionLineMap = /* @__PURE__ */ new Map();
  const trackLineMap = /* @__PURE__ */ new Map();
  const trackHasClip = /* @__PURE__ */ new Set();
  const variableDefinitionLineMap = /* @__PURE__ */ new Map();
  const variableReferenceCounts = /* @__PURE__ */ new Map();
  const patternDefinitionLineMap = /* @__PURE__ */ new Map();
  const patternReferenceCounts = /* @__PURE__ */ new Map();
  let track = null;
  let prefix = "";
  const counters = /* @__PURE__ */ new Map();
  String(source || "").split(/\r?\n/).forEach((rawLine, nth) => {
    const line = stripInlineComment(rawLine).trim();
    if (!line) return;
    if (line.indexOf("# ") >= 0) {
      track = line.split(/\s+/).slice(1).join(" ");
      if (track && !trackLineMap.has(track)) trackLineMap.set(track, nth + 1);
      prefix = "";
      return;
    }
    if (line.charAt() === "%") {
      const [name, ...rest] = line.split(/\s+/);
      if (/^%[a-zA-Z_]\w*$/.test(name) && !variableDefinitionLineMap.has(name)) {
        variableDefinitionLineMap.set(name, nth + 1);
      }
      rest.forEach((token) => {
        if (/^%[a-zA-Z_]\w*$/.test(token)) {
          variableReferenceCounts.set(token, (variableReferenceCounts.get(token) || 0) + 1);
        }
        if (/^&[a-zA-Z_]\w*$/.test(token)) {
          patternReferenceCounts.set(token, (patternReferenceCounts.get(token) || 0) + 1);
        }
      });
      return;
    }
    if (line.charAt() === "&") {
      const [name, ...rest] = line.split(/\s+/);
      if (/^&[a-zA-Z_]\w*$/.test(name) && !patternDefinitionLineMap.has(name)) {
        patternDefinitionLineMap.set(name, nth + 1);
      }
      rest.forEach((token) => {
        if (/^%[a-zA-Z_]\w*$/.test(token)) {
          variableReferenceCounts.set(token, (variableReferenceCounts.get(token) || 0) + 1);
        }
        if (/^&[a-zA-Z_]\w*$/.test(token)) {
          patternReferenceCounts.set(token, (patternReferenceCounts.get(token) || 0) + 1);
        }
      });
      return;
    }
    if (line.charAt() === "@") {
      const name = line.substr(1).split(/\s+/)[0];
      prefix = name || "";
      if (prefix) {
        sectionNames.add(prefix);
        if (!sectionLineMap.has(prefix)) sectionLineMap.set(prefix, nth + 1);
      }
      return;
    }
    line.split(/\s+/).forEach((token) => {
      if (/^%[a-zA-Z_]\w*$/.test(token)) {
        variableReferenceCounts.set(token, (variableReferenceCounts.get(token) || 0) + 1);
      }
      if (/^&[a-zA-Z_]\w*$/.test(token)) {
        patternReferenceCounts.set(token, (patternReferenceCounts.get(token) || 0) + 1);
      }
    });
    if (!track) return;
    if (!/^#[^\s]+\b/.test(line)) return;
    const channelValue = line.match(/^(#[^\s]+)\b/);
    if (!channelValue) return;
    let resolved;
    try {
      resolved = resolveChannelToken(channelValue[1], opts.channelAliases);
    } catch (e) {
      return;
    }
    const channel = `${prefix}${resolved}`;
    const key = `${track}|${channel}`;
    const idx = counters.get(key) || 0;
    counters.set(key, idx + 1);
    explicitClipCounts.set(key, (explicitClipCounts.get(key) || 0) + 1);
    trackHasClip.add(track);
    clipLineMap.set(`${key}|${idx}`, nth + 1);
  });
  return {
    clipLineMap,
    explicitClipCounts,
    sectionNames,
    sectionLineMap,
    trackLineMap,
    trackHasClip,
    variableDefinitionLineMap,
    variableReferenceCounts,
    patternDefinitionLineMap,
    patternReferenceCounts
  };
}
function inputSignature(clip, context) {
  if (!clip || !clip.input) return null;
  try {
    return JSON.stringify(reduce(clip.input, context.data));
  } catch (e) {
    return null;
  }
}
function scanInvalidTokenPrefixes(source) {
  const warnings = [];
  String(source || "").split(/\r?\n/).forEach((rawLine, nth) => {
    const line = stripInlineComment(rawLine).trim();
    if (!line) return;
    const tokens = line.split(/\s+/);
    tokens.forEach((token) => {
      const pos = token.search(/[#@<%&>]/);
      if (pos <= 0) return;
      const prefix = token.slice(0, pos);
      const symbol = token.charAt(pos);
      let invalid = false;
      if (symbol === "#") {
        const noteLike = pos === 1 && /^[a-gA-G]$/.test(prefix) && /^\d/.test(token.slice(pos + 1));
        invalid = !noteLike;
      } else {
        invalid = true;
      }
      if (!invalid) return;
      warnings.push({
        rule: "invalid-token-prefix",
        message: `Token '${token}' has invalid prefix '${prefix}' before '${symbol}'.`,
        line: nth + 1
      });
    });
  });
  return warnings;
}
function parseErrorLine(error) {
  const text = String(error && error.message || error || "");
  const match = text.match(/\bat line\s+(\d+)\b/i);
  if (!match) return null;
  const line = parseInt(match[1], 10);
  return Number.isInteger(line) && line > 0 ? line : null;
}
function lintDub(source, opts = {}) {
  const report = {
    errors: [],
    warnings: []
  };
  let context = opts.context;
  let merged = opts.merged;
  report.warnings.push(...scanInvalidTokenPrefixes(source));
  try {
    if (!context) context = parse(source);
  } catch (e) {
    report.errors.push({
      rule: "parse-error",
      message: e && e.message ? e.message : "Parse error",
      line: parseErrorLine(e),
      stack: e && e.stack ? String(e.stack) : null
    });
    return report;
  }
  const {
    clipLineMap,
    explicitClipCounts,
    sectionNames,
    sectionLineMap,
    trackLineMap,
    trackHasClip,
    variableDefinitionLineMap,
    variableReferenceCounts,
    patternDefinitionLineMap,
    patternReferenceCounts
  } = scanClipLineMap(source, opts);
  const expanded = buildArrangementDisplayExpansion(source);
  const usedSections = new Set(expanded.map((item) => item.name));
  expanded.forEach((item, idx) => {
    if (!sectionNames.has(item.name)) {
      report.errors.push({
        rule: "unknown-section",
        message: `Arrangement token '${item.name}' (index ${idx}) has no matching @section.`,
        line: null
      });
    }
  });
  if (expanded.length > 0) {
    sectionNames.forEach((name) => {
      if (usedSections.has(name)) return;
      report.warnings.push({
        rule: "unused-section",
        message: `Section '@${name}' is defined but never used in arrangement.`,
        line: sectionLineMap.get(name) || null
      });
    });
  }
  variableDefinitionLineMap.forEach((line, name) => {
    if ((variableReferenceCounts.get(name) || 0) > 0) return;
    report.warnings.push({
      rule: "unused-variable",
      message: `Variable '${name}' is defined but never used.`,
      line
    });
  });
  patternDefinitionLineMap.forEach((line, name) => {
    if ((patternReferenceCounts.get(name) || 0) > 0) return;
    report.warnings.push({
      rule: "unused-pattern-variable",
      message: `Pattern variable '${name}' is defined but never used.`,
      line
    });
  });
  Object.keys(context.tracks || {}).forEach((trackName) => {
    if (trackHasClip.has(trackName)) return;
    report.warnings.push({
      rule: "empty-track",
      message: `Track '${trackName}' has no channel clips.`,
      line: trackLineMap.get(trackName) || null
    });
  });
  Object.entries(context.tracks || {}).forEach(([trackName, channels]) => {
    Object.entries(channels || {}).forEach(([channel, clips]) => {
      const channelMatch = String(channel).match(/#(\d+)$/);
      if (channelMatch && typeof opts.resolveInstrument === "function") {
        const program = parseInt(channelMatch[1], 10);
        const isValid = opts.resolveInstrument(String(program));
        if (!isValid) {
          report.warnings.push({
            rule: "invalid-instrument",
            message: `Track '${trackName}' channel '${channel}' uses unsupported instrument/program number '${program}'.`,
            line: clipLineMap.get(`${trackName}|${channel}|0`) || trackLineMap.get(trackName) || null
          });
        }
      }
      const inputClips = (clips || []).filter((clip) => clip && clip.input);
      const explicitCount = explicitClipCounts.get(`${trackName}|${channel}`) || 0;
      const unmergedInputs = inputClips.filter((clip) => !clip.merge);
      const seenInputSignatures = /* @__PURE__ */ new Set();
      let hasDuplicateInput = false;
      for (let i = 0; i < unmergedInputs.length; i += 1) {
        const signature = inputSignature(unmergedInputs[i], context);
        if (!signature) continue;
        if (seenInputSignatures.has(signature)) {
          hasDuplicateInput = true;
          break;
        }
        seenInputSignatures.add(signature);
      }
      if (explicitCount > 1 && hasDuplicateInput) {
        const line = clipLineMap.get(`${trackName}|${channel}|0`) || null;
        report.warnings.push({
          rule: "duplicate-input-clips",
          message: `Track '${trackName}' channel '${channel}' has repeated input clips without explicit '!' or '+' merge operator.`,
          line
        });
      }
      (clips || []).forEach((clip, clipIndex) => {
        if (!clip || !clip.input) return;
        const line = clipLineMap.get(`${trackName}|${channel}|${clipIndex}`) || null;
        let input;
        let stats;
        let values = [];
        let notes = [];
        try {
          values = clip.values ? reduce(clip.values, context.data) : [];
          notes = clip.data ? reduce(clip.data, context.data) : [];
          input = flatten(reduce(clip.input, context.data, pack(values.slice(), notes.slice())));
          stats = countPatternStats(reduce(clip.input, context.data));
        } catch (e) {
          report.errors.push({
            rule: "clip-reduce-failed",
            message: `Unable to evaluate clip in '${trackName}' '${channel}': ${e.message}`,
            line,
            stack: e && e.stack ? String(e.stack) : null
          });
          return;
        }
        const outOfRangeLevel = values.find((value) => typeof value === "number" && Number.isFinite(value) && (value < 0 || value > 127));
        if (typeof outOfRangeLevel === "number") {
          report.warnings.push({
            rule: "invalid-level",
            message: `Track '${trackName}' '${channel}' has level/velocity '${outOfRangeLevel}' outside MIDI range 0..127.`,
            line
          });
        }
        const noteEvents = notes;
        const noteCount = Array.isArray(noteEvents) ? noteEvents.length : 0;
        if (noteCount > stats.hits) {
          report.warnings.push({
            rule: "missing-pulses",
            message: `Track '${trackName}' '${channel}' has ${noteCount} notes/chords but only ${stats.hits} hit pulses.`,
            line
          });
        }
        if (!stats.sustainAfterHit) {
          report.warnings.push({
            rule: "orphan-sustain",
            message: `Track '${trackName}' '${channel}' uses '_' before any 'x' hit in the same pattern.`,
            line
          });
        }
        if (stats.hits > 0 && flattenSectionBeats(input) === 0) {
          report.warnings.push({
            rule: "silent-pattern",
            message: `Track '${trackName}' '${channel}' resolves to silence after reduction.`,
            line
          });
        }
      });
    });
  });
  if (!merged) {
    try {
      merged = merge(context);
    } catch (e) {
      if (!report.errors.some((item) => item.rule === "unknown-section")) {
        report.errors.push({
          rule: "merge-error",
          message: e && e.message ? e.message : "Merge error",
          line: null,
          stack: e && e.stack ? String(e.stack) : null
        });
      }
    }
  }
  if (expanded.length && Array.isArray(merged)) {
    let flatIndex = 0;
    merged.forEach((group) => {
      (group || []).forEach((parts) => {
        const token = expanded[flatIndex];
        if (token && flattenSectionBeats(parts.map((t) => t[2])) === 0) {
          report.warnings.push({
            rule: "silent-section",
            message: `Section '${token.name}' resolves to silence.`,
            line: null
          });
        }
        flatIndex += 1;
      });
    });
  }
  return report;
}
export {
  lintDub
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2xpYi9zcmMvbGliL2xpbnQuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHBhcnNlLCByZWR1Y2UgfSBmcm9tICcuL3BhcnNlci5qcyc7XG5pbXBvcnQgeyBtZXJnZSwgcGFjayB9IGZyb20gJy4vbWl4dXAuanMnO1xuaW1wb3J0IHsgc3BsaXQgfSBmcm9tICcuL3Rva2VuaXplLmpzJztcbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7IGJ1aWxkQXJyYW5nZW1lbnREaXNwbGF5RXhwYW5zaW9uIH0gZnJvbSAnLi9wbGF5Z3JvdW5kLmpzJztcbmltcG9ydCB7IHJlc29sdmVDaGFubmVsVG9rZW4gfSBmcm9tICcuL2NoYW5uZWxzLmpzJztcblxuZnVuY3Rpb24gZGVlcFZpc2l0KG5vZGUsIGZuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgbm9kZS5mb3JFYWNoKGl0ZW0gPT4gZGVlcFZpc2l0KGl0ZW0sIGZuKSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZuKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBjb3VudFBhdHRlcm5TdGF0cyhub2RlKSB7XG4gIGNvbnN0IHN0YXRzID0ge1xuICAgIGhpdHM6IDAsXG4gICAgc2xvdHM6IDAsXG4gICAgc3VzdGFpbkFmdGVySGl0OiB0cnVlLFxuICB9O1xuICBsZXQgc2VlbkhpdCA9IGZhbHNlO1xuXG4gIGRlZXBWaXNpdChub2RlLCB2YWx1ZSA9PiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHJldHVybjtcblxuICAgIGNvbnN0IHBhcnRzID0gc3BsaXQodmFsdWUpO1xuICAgIGRlZXBWaXNpdChwYXJ0cywgcGFydCA9PiB7XG4gICAgICBpZiAocGFydCA9PT0gJ3gnKSB7XG4gICAgICAgIHN0YXRzLmhpdHMgKz0gMTtcbiAgICAgICAgc3RhdHMuc2xvdHMgKz0gMTtcbiAgICAgICAgc2VlbkhpdCA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJ0ID09PSAnLScpIHtcbiAgICAgICAgc3RhdHMuc2xvdHMgKz0gMTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHBhcnQgPT09ICdfJykge1xuICAgICAgICBzdGF0cy5zbG90cyArPSAxO1xuICAgICAgICBpZiAoIXNlZW5IaXQpIHN0YXRzLnN1c3RhaW5BZnRlckhpdCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gc3RhdHM7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5TZWN0aW9uQmVhdHMoYmVhdHMpIHtcbiAgbGV0IGFjdGl2ZSA9IDA7XG4gIGRlZXBWaXNpdChiZWF0cywgdGljayA9PiB7XG4gICAgaWYgKHRpY2sgJiYgdHlwZW9mIHRpY2sgPT09ICdvYmplY3QnICYmIHRpY2sudiA+IDApIGFjdGl2ZSArPSAxO1xuICB9KTtcbiAgcmV0dXJuIGFjdGl2ZTtcbn1cblxuZnVuY3Rpb24gZmluZFN1ZmZpeERhc2hDb21tZW50SW5kZXgobGluZSkge1xuICBjb25zdCBtYXRjaCA9IFN0cmluZyhsaW5lIHx8ICcnKS5tYXRjaCgvXFxzLS1cXHMvKTtcbiAgaWYgKCFtYXRjaCB8fCB0eXBlb2YgbWF0Y2guaW5kZXggIT09ICdudW1iZXInKSByZXR1cm4gLTE7XG4gIGlmICghL1xcUy8udGVzdChTdHJpbmcobGluZSB8fCAnJykuc2xpY2UoMCwgbWF0Y2guaW5kZXgpKSkgcmV0dXJuIC0xO1xuICByZXR1cm4gbWF0Y2guaW5kZXg7XG59XG5cbmZ1bmN0aW9uIHN0cmlwSW5saW5lQ29tbWVudChsaW5lKSB7XG4gIGNvbnN0IHZhbHVlID0gU3RyaW5nKGxpbmUgfHwgJycpO1xuICBjb25zdCBzZW1pY29sb25JbmRleCA9IHZhbHVlLmluZGV4T2YoJzsnKTtcbiAgY29uc3QgZGFzaENvbW1lbnRJbmRleCA9IGZpbmRTdWZmaXhEYXNoQ29tbWVudEluZGV4KHZhbHVlKTtcbiAgaWYgKHNlbWljb2xvbkluZGV4IDwgMCAmJiBkYXNoQ29tbWVudEluZGV4IDwgMCkgcmV0dXJuIHZhbHVlO1xuICBpZiAoc2VtaWNvbG9uSW5kZXggPCAwKSByZXR1cm4gdmFsdWUuc2xpY2UoMCwgZGFzaENvbW1lbnRJbmRleCk7XG4gIGlmIChkYXNoQ29tbWVudEluZGV4IDwgMCkgcmV0dXJuIHZhbHVlLnNsaWNlKDAsIHNlbWljb2xvbkluZGV4KTtcbiAgcmV0dXJuIHZhbHVlLnNsaWNlKDAsIE1hdGgubWluKHNlbWljb2xvbkluZGV4LCBkYXNoQ29tbWVudEluZGV4KSk7XG59XG5cbmZ1bmN0aW9uIHNjYW5DbGlwTGluZU1hcChzb3VyY2UsIG9wdHMgPSB7fSkge1xuICBjb25zdCBjbGlwTGluZU1hcCA9IG5ldyBNYXAoKTtcbiAgY29uc3QgZXhwbGljaXRDbGlwQ291bnRzID0gbmV3IE1hcCgpO1xuICBjb25zdCBzZWN0aW9uTmFtZXMgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHNlY3Rpb25MaW5lTWFwID0gbmV3IE1hcCgpO1xuICBjb25zdCB0cmFja0xpbmVNYXAgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHRyYWNrSGFzQ2xpcCA9IG5ldyBTZXQoKTtcbiAgY29uc3QgdmFyaWFibGVEZWZpbml0aW9uTGluZU1hcCA9IG5ldyBNYXAoKTtcbiAgY29uc3QgdmFyaWFibGVSZWZlcmVuY2VDb3VudHMgPSBuZXcgTWFwKCk7XG4gIGNvbnN0IHBhdHRlcm5EZWZpbml0aW9uTGluZU1hcCA9IG5ldyBNYXAoKTtcbiAgY29uc3QgcGF0dGVyblJlZmVyZW5jZUNvdW50cyA9IG5ldyBNYXAoKTtcbiAgbGV0IHRyYWNrID0gbnVsbDtcbiAgbGV0IHByZWZpeCA9ICcnO1xuICBjb25zdCBjb3VudGVycyA9IG5ldyBNYXAoKTtcblxuICBTdHJpbmcoc291cmNlIHx8ICcnKS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2goKHJhd0xpbmUsIG50aCkgPT4ge1xuICAgIGNvbnN0IGxpbmUgPSBzdHJpcElubGluZUNvbW1lbnQocmF3TGluZSkudHJpbSgpO1xuICAgIGlmICghbGluZSkgcmV0dXJuO1xuXG4gICAgaWYgKGxpbmUuaW5kZXhPZignIyAnKSA+PSAwKSB7XG4gICAgICB0cmFjayA9IGxpbmUuc3BsaXQoL1xccysvKS5zbGljZSgxKS5qb2luKCcgJyk7XG4gICAgICBpZiAodHJhY2sgJiYgIXRyYWNrTGluZU1hcC5oYXModHJhY2spKSB0cmFja0xpbmVNYXAuc2V0KHRyYWNrLCBudGggKyAxKTtcbiAgICAgIHByZWZpeCA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChsaW5lLmNoYXJBdCgpID09PSAnJScpIHtcbiAgICAgIGNvbnN0IFtuYW1lLCAuLi5yZXN0XSA9IGxpbmUuc3BsaXQoL1xccysvKTtcbiAgICAgIGlmICgvXiVbYS16QS1aX11cXHcqJC8udGVzdChuYW1lKSAmJiAhdmFyaWFibGVEZWZpbml0aW9uTGluZU1hcC5oYXMobmFtZSkpIHtcbiAgICAgICAgdmFyaWFibGVEZWZpbml0aW9uTGluZU1hcC5zZXQobmFtZSwgbnRoICsgMSk7XG4gICAgICB9XG4gICAgICByZXN0LmZvckVhY2goKHRva2VuKSA9PiB7XG4gICAgICAgIGlmICgvXiVbYS16QS1aX11cXHcqJC8udGVzdCh0b2tlbikpIHtcbiAgICAgICAgICB2YXJpYWJsZVJlZmVyZW5jZUNvdW50cy5zZXQodG9rZW4sICh2YXJpYWJsZVJlZmVyZW5jZUNvdW50cy5nZXQodG9rZW4pIHx8IDApICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKC9eJlthLXpBLVpfXVxcdyokLy50ZXN0KHRva2VuKSkge1xuICAgICAgICAgIHBhdHRlcm5SZWZlcmVuY2VDb3VudHMuc2V0KHRva2VuLCAocGF0dGVyblJlZmVyZW5jZUNvdW50cy5nZXQodG9rZW4pIHx8IDApICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChsaW5lLmNoYXJBdCgpID09PSAnJicpIHtcbiAgICAgIGNvbnN0IFtuYW1lLCAuLi5yZXN0XSA9IGxpbmUuc3BsaXQoL1xccysvKTtcbiAgICAgIGlmICgvXiZbYS16QS1aX11cXHcqJC8udGVzdChuYW1lKSAmJiAhcGF0dGVybkRlZmluaXRpb25MaW5lTWFwLmhhcyhuYW1lKSkge1xuICAgICAgICBwYXR0ZXJuRGVmaW5pdGlvbkxpbmVNYXAuc2V0KG5hbWUsIG50aCArIDEpO1xuICAgICAgfVxuICAgICAgcmVzdC5mb3JFYWNoKCh0b2tlbikgPT4ge1xuICAgICAgICBpZiAoL14lW2EtekEtWl9dXFx3KiQvLnRlc3QodG9rZW4pKSB7XG4gICAgICAgICAgdmFyaWFibGVSZWZlcmVuY2VDb3VudHMuc2V0KHRva2VuLCAodmFyaWFibGVSZWZlcmVuY2VDb3VudHMuZ2V0KHRva2VuKSB8fCAwKSArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgvXiZbYS16QS1aX11cXHcqJC8udGVzdCh0b2tlbikpIHtcbiAgICAgICAgICBwYXR0ZXJuUmVmZXJlbmNlQ291bnRzLnNldCh0b2tlbiwgKHBhdHRlcm5SZWZlcmVuY2VDb3VudHMuZ2V0KHRva2VuKSB8fCAwKSArIDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobGluZS5jaGFyQXQoKSA9PT0gJ0AnKSB7XG4gICAgICBjb25zdCBuYW1lID0gbGluZS5zdWJzdHIoMSkuc3BsaXQoL1xccysvKVswXTtcbiAgICAgIHByZWZpeCA9IG5hbWUgfHwgJyc7XG4gICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgIHNlY3Rpb25OYW1lcy5hZGQocHJlZml4KTtcbiAgICAgICAgaWYgKCFzZWN0aW9uTGluZU1hcC5oYXMocHJlZml4KSkgc2VjdGlvbkxpbmVNYXAuc2V0KHByZWZpeCwgbnRoICsgMSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGluZS5zcGxpdCgvXFxzKy8pLmZvckVhY2goKHRva2VuKSA9PiB7XG4gICAgICBpZiAoL14lW2EtekEtWl9dXFx3KiQvLnRlc3QodG9rZW4pKSB7XG4gICAgICAgIHZhcmlhYmxlUmVmZXJlbmNlQ291bnRzLnNldCh0b2tlbiwgKHZhcmlhYmxlUmVmZXJlbmNlQ291bnRzLmdldCh0b2tlbikgfHwgMCkgKyAxKTtcbiAgICAgIH1cbiAgICAgIGlmICgvXiZbYS16QS1aX11cXHcqJC8udGVzdCh0b2tlbikpIHtcbiAgICAgICAgcGF0dGVyblJlZmVyZW5jZUNvdW50cy5zZXQodG9rZW4sIChwYXR0ZXJuUmVmZXJlbmNlQ291bnRzLmdldCh0b2tlbikgfHwgMCkgKyAxKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICghdHJhY2spIHJldHVybjtcbiAgICBpZiAoIS9eI1teXFxzXStcXGIvLnRlc3QobGluZSkpIHJldHVybjtcblxuICAgIGNvbnN0IGNoYW5uZWxWYWx1ZSA9IGxpbmUubWF0Y2goL14oI1teXFxzXSspXFxiLyk7XG4gICAgaWYgKCFjaGFubmVsVmFsdWUpIHJldHVybjtcbiAgICBsZXQgcmVzb2x2ZWQ7XG4gICAgdHJ5IHtcbiAgICAgIHJlc29sdmVkID0gcmVzb2x2ZUNoYW5uZWxUb2tlbihjaGFubmVsVmFsdWVbMV0sIG9wdHMuY2hhbm5lbEFsaWFzZXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY2hhbm5lbCA9IGAke3ByZWZpeH0ke3Jlc29sdmVkfWA7XG4gICAgY29uc3Qga2V5ID0gYCR7dHJhY2t9fCR7Y2hhbm5lbH1gO1xuICAgIGNvbnN0IGlkeCA9IGNvdW50ZXJzLmdldChrZXkpIHx8IDA7XG4gICAgY291bnRlcnMuc2V0KGtleSwgaWR4ICsgMSk7XG4gICAgZXhwbGljaXRDbGlwQ291bnRzLnNldChrZXksIChleHBsaWNpdENsaXBDb3VudHMuZ2V0KGtleSkgfHwgMCkgKyAxKTtcbiAgICB0cmFja0hhc0NsaXAuYWRkKHRyYWNrKTtcbiAgICBjbGlwTGluZU1hcC5zZXQoYCR7a2V5fXwke2lkeH1gLCBudGggKyAxKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBjbGlwTGluZU1hcCxcbiAgICBleHBsaWNpdENsaXBDb3VudHMsXG4gICAgc2VjdGlvbk5hbWVzLFxuICAgIHNlY3Rpb25MaW5lTWFwLFxuICAgIHRyYWNrTGluZU1hcCxcbiAgICB0cmFja0hhc0NsaXAsXG4gICAgdmFyaWFibGVEZWZpbml0aW9uTGluZU1hcCxcbiAgICB2YXJpYWJsZVJlZmVyZW5jZUNvdW50cyxcbiAgICBwYXR0ZXJuRGVmaW5pdGlvbkxpbmVNYXAsXG4gICAgcGF0dGVyblJlZmVyZW5jZUNvdW50cyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5wdXRTaWduYXR1cmUoY2xpcCwgY29udGV4dCkge1xuICBpZiAoIWNsaXAgfHwgIWNsaXAuaW5wdXQpIHJldHVybiBudWxsO1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZWR1Y2UoY2xpcC5pbnB1dCwgY29udGV4dC5kYXRhKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzY2FuSW52YWxpZFRva2VuUHJlZml4ZXMoc291cmNlKSB7XG4gIGNvbnN0IHdhcm5pbmdzID0gW107XG4gIFN0cmluZyhzb3VyY2UgfHwgJycpLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaCgocmF3TGluZSwgbnRoKSA9PiB7XG4gICAgY29uc3QgbGluZSA9IHN0cmlwSW5saW5lQ29tbWVudChyYXdMaW5lKS50cmltKCk7XG4gICAgaWYgKCFsaW5lKSByZXR1cm47XG5cbiAgICBjb25zdCB0b2tlbnMgPSBsaW5lLnNwbGl0KC9cXHMrLyk7XG4gICAgdG9rZW5zLmZvckVhY2goKHRva2VuKSA9PiB7XG4gICAgICBjb25zdCBwb3MgPSB0b2tlbi5zZWFyY2goL1sjQDwlJj5dLyk7XG4gICAgICBpZiAocG9zIDw9IDApIHJldHVybjtcbiAgICAgIGNvbnN0IHByZWZpeCA9IHRva2VuLnNsaWNlKDAsIHBvcyk7XG4gICAgICBjb25zdCBzeW1ib2wgPSB0b2tlbi5jaGFyQXQocG9zKTtcbiAgICAgIGxldCBpbnZhbGlkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzeW1ib2wgPT09ICcjJykge1xuICAgICAgICBjb25zdCBub3RlTGlrZSA9IHBvcyA9PT0gMSAmJiAvXlthLWdBLUddJC8udGVzdChwcmVmaXgpICYmIC9eXFxkLy50ZXN0KHRva2VuLnNsaWNlKHBvcyArIDEpKTtcbiAgICAgICAgaW52YWxpZCA9ICFub3RlTGlrZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludmFsaWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWludmFsaWQpIHJldHVybjtcbiAgICAgIHdhcm5pbmdzLnB1c2goe1xuICAgICAgICBydWxlOiAnaW52YWxpZC10b2tlbi1wcmVmaXgnLFxuICAgICAgICBtZXNzYWdlOiBgVG9rZW4gJyR7dG9rZW59JyBoYXMgaW52YWxpZCBwcmVmaXggJyR7cHJlZml4fScgYmVmb3JlICcke3N5bWJvbH0nLmAsXG4gICAgICAgIGxpbmU6IG50aCArIDEsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiB3YXJuaW5ncztcbn1cblxuZnVuY3Rpb24gcGFyc2VFcnJvckxpbmUoZXJyb3IpIHtcbiAgY29uc3QgdGV4dCA9IFN0cmluZygoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSkgfHwgZXJyb3IgfHwgJycpO1xuICBjb25zdCBtYXRjaCA9IHRleHQubWF0Y2goL1xcYmF0IGxpbmVcXHMrKFxcZCspXFxiL2kpO1xuICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgbGluZSA9IHBhcnNlSW50KG1hdGNoWzFdLCAxMCk7XG4gIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKGxpbmUpICYmIGxpbmUgPiAwID8gbGluZSA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW50RHViKHNvdXJjZSwgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IHJlcG9ydCA9IHtcbiAgICBlcnJvcnM6IFtdLFxuICAgIHdhcm5pbmdzOiBbXSxcbiAgfTtcblxuICBsZXQgY29udGV4dCA9IG9wdHMuY29udGV4dDtcbiAgbGV0IG1lcmdlZCA9IG9wdHMubWVyZ2VkO1xuICByZXBvcnQud2FybmluZ3MucHVzaCguLi5zY2FuSW52YWxpZFRva2VuUHJlZml4ZXMoc291cmNlKSk7XG5cbiAgdHJ5IHtcbiAgICBpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBwYXJzZShzb3VyY2UpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmVwb3J0LmVycm9ycy5wdXNoKHtcbiAgICAgIHJ1bGU6ICdwYXJzZS1lcnJvcicsXG4gICAgICBtZXNzYWdlOiBlICYmIGUubWVzc2FnZSA/IGUubWVzc2FnZSA6ICdQYXJzZSBlcnJvcicsXG4gICAgICBsaW5lOiBwYXJzZUVycm9yTGluZShlKSxcbiAgICAgIHN0YWNrOiBlICYmIGUuc3RhY2sgPyBTdHJpbmcoZS5zdGFjaykgOiBudWxsLFxuICAgIH0pO1xuICAgIHJldHVybiByZXBvcnQ7XG4gIH1cblxuICBjb25zdCB7XG4gICAgY2xpcExpbmVNYXAsXG4gICAgZXhwbGljaXRDbGlwQ291bnRzLFxuICAgIHNlY3Rpb25OYW1lcyxcbiAgICBzZWN0aW9uTGluZU1hcCxcbiAgICB0cmFja0xpbmVNYXAsXG4gICAgdHJhY2tIYXNDbGlwLFxuICAgIHZhcmlhYmxlRGVmaW5pdGlvbkxpbmVNYXAsXG4gICAgdmFyaWFibGVSZWZlcmVuY2VDb3VudHMsXG4gICAgcGF0dGVybkRlZmluaXRpb25MaW5lTWFwLFxuICAgIHBhdHRlcm5SZWZlcmVuY2VDb3VudHMsXG4gIH0gPSBzY2FuQ2xpcExpbmVNYXAoc291cmNlLCBvcHRzKTtcbiAgY29uc3QgZXhwYW5kZWQgPSBidWlsZEFycmFuZ2VtZW50RGlzcGxheUV4cGFuc2lvbihzb3VyY2UpO1xuICBjb25zdCB1c2VkU2VjdGlvbnMgPSBuZXcgU2V0KGV4cGFuZGVkLm1hcChpdGVtID0+IGl0ZW0ubmFtZSkpO1xuICBleHBhbmRlZC5mb3JFYWNoKChpdGVtLCBpZHgpID0+IHtcbiAgICBpZiAoIXNlY3Rpb25OYW1lcy5oYXMoaXRlbS5uYW1lKSkge1xuICAgICAgcmVwb3J0LmVycm9ycy5wdXNoKHtcbiAgICAgICAgcnVsZTogJ3Vua25vd24tc2VjdGlvbicsXG4gICAgICAgIG1lc3NhZ2U6IGBBcnJhbmdlbWVudCB0b2tlbiAnJHtpdGVtLm5hbWV9JyAoaW5kZXggJHtpZHh9KSBoYXMgbm8gbWF0Y2hpbmcgQHNlY3Rpb24uYCxcbiAgICAgICAgbGluZTogbnVsbCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG4gIGlmIChleHBhbmRlZC5sZW5ndGggPiAwKSB7XG4gICAgc2VjdGlvbk5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGlmICh1c2VkU2VjdGlvbnMuaGFzKG5hbWUpKSByZXR1cm47XG4gICAgICByZXBvcnQud2FybmluZ3MucHVzaCh7XG4gICAgICAgIHJ1bGU6ICd1bnVzZWQtc2VjdGlvbicsXG4gICAgICAgIG1lc3NhZ2U6IGBTZWN0aW9uICdAJHtuYW1lfScgaXMgZGVmaW5lZCBidXQgbmV2ZXIgdXNlZCBpbiBhcnJhbmdlbWVudC5gLFxuICAgICAgICBsaW5lOiBzZWN0aW9uTGluZU1hcC5nZXQobmFtZSkgfHwgbnVsbCxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyaWFibGVEZWZpbml0aW9uTGluZU1hcC5mb3JFYWNoKChsaW5lLCBuYW1lKSA9PiB7XG4gICAgaWYgKCh2YXJpYWJsZVJlZmVyZW5jZUNvdW50cy5nZXQobmFtZSkgfHwgMCkgPiAwKSByZXR1cm47XG4gICAgcmVwb3J0Lndhcm5pbmdzLnB1c2goe1xuICAgICAgcnVsZTogJ3VudXNlZC12YXJpYWJsZScsXG4gICAgICBtZXNzYWdlOiBgVmFyaWFibGUgJyR7bmFtZX0nIGlzIGRlZmluZWQgYnV0IG5ldmVyIHVzZWQuYCxcbiAgICAgIGxpbmUsXG4gICAgfSk7XG4gIH0pO1xuXG4gIHBhdHRlcm5EZWZpbml0aW9uTGluZU1hcC5mb3JFYWNoKChsaW5lLCBuYW1lKSA9PiB7XG4gICAgaWYgKChwYXR0ZXJuUmVmZXJlbmNlQ291bnRzLmdldChuYW1lKSB8fCAwKSA+IDApIHJldHVybjtcbiAgICByZXBvcnQud2FybmluZ3MucHVzaCh7XG4gICAgICBydWxlOiAndW51c2VkLXBhdHRlcm4tdmFyaWFibGUnLFxuICAgICAgbWVzc2FnZTogYFBhdHRlcm4gdmFyaWFibGUgJyR7bmFtZX0nIGlzIGRlZmluZWQgYnV0IG5ldmVyIHVzZWQuYCxcbiAgICAgIGxpbmUsXG4gICAgfSk7XG4gIH0pO1xuXG4gIE9iamVjdC5rZXlzKGNvbnRleHQudHJhY2tzIHx8IHt9KS5mb3JFYWNoKCh0cmFja05hbWUpID0+IHtcbiAgICBpZiAodHJhY2tIYXNDbGlwLmhhcyh0cmFja05hbWUpKSByZXR1cm47XG4gICAgcmVwb3J0Lndhcm5pbmdzLnB1c2goe1xuICAgICAgcnVsZTogJ2VtcHR5LXRyYWNrJyxcbiAgICAgIG1lc3NhZ2U6IGBUcmFjayAnJHt0cmFja05hbWV9JyBoYXMgbm8gY2hhbm5lbCBjbGlwcy5gLFxuICAgICAgbGluZTogdHJhY2tMaW5lTWFwLmdldCh0cmFja05hbWUpIHx8IG51bGwsXG4gICAgfSk7XG4gIH0pO1xuXG4gIE9iamVjdC5lbnRyaWVzKGNvbnRleHQudHJhY2tzIHx8IHt9KS5mb3JFYWNoKChbdHJhY2tOYW1lLCBjaGFubmVsc10pID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhjaGFubmVscyB8fCB7fSkuZm9yRWFjaCgoW2NoYW5uZWwsIGNsaXBzXSkgPT4ge1xuICAgICAgY29uc3QgY2hhbm5lbE1hdGNoID0gU3RyaW5nKGNoYW5uZWwpLm1hdGNoKC8jKFxcZCspJC8pO1xuICAgICAgaWYgKGNoYW5uZWxNYXRjaCAmJiB0eXBlb2Ygb3B0cy5yZXNvbHZlSW5zdHJ1bWVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBwcm9ncmFtID0gcGFyc2VJbnQoY2hhbm5lbE1hdGNoWzFdLCAxMCk7XG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBvcHRzLnJlc29sdmVJbnN0cnVtZW50KFN0cmluZyhwcm9ncmFtKSk7XG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgIHJlcG9ydC53YXJuaW5ncy5wdXNoKHtcbiAgICAgICAgICAgIHJ1bGU6ICdpbnZhbGlkLWluc3RydW1lbnQnLFxuICAgICAgICAgICAgbWVzc2FnZTogYFRyYWNrICcke3RyYWNrTmFtZX0nIGNoYW5uZWwgJyR7Y2hhbm5lbH0nIHVzZXMgdW5zdXBwb3J0ZWQgaW5zdHJ1bWVudC9wcm9ncmFtIG51bWJlciAnJHtwcm9ncmFtfScuYCxcbiAgICAgICAgICAgIGxpbmU6IGNsaXBMaW5lTWFwLmdldChgJHt0cmFja05hbWV9fCR7Y2hhbm5lbH18MGApIHx8IHRyYWNrTGluZU1hcC5nZXQodHJhY2tOYW1lKSB8fCBudWxsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlucHV0Q2xpcHMgPSAoY2xpcHMgfHwgW10pLmZpbHRlcihjbGlwID0+IGNsaXAgJiYgY2xpcC5pbnB1dCk7XG4gICAgICBjb25zdCBleHBsaWNpdENvdW50ID0gZXhwbGljaXRDbGlwQ291bnRzLmdldChgJHt0cmFja05hbWV9fCR7Y2hhbm5lbH1gKSB8fCAwO1xuICAgICAgY29uc3QgdW5tZXJnZWRJbnB1dHMgPSBpbnB1dENsaXBzLmZpbHRlcihjbGlwID0+ICFjbGlwLm1lcmdlKTtcbiAgICAgIGNvbnN0IHNlZW5JbnB1dFNpZ25hdHVyZXMgPSBuZXcgU2V0KCk7XG4gICAgICBsZXQgaGFzRHVwbGljYXRlSW5wdXQgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5tZXJnZWRJbnB1dHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gaW5wdXRTaWduYXR1cmUodW5tZXJnZWRJbnB1dHNbaV0sIGNvbnRleHQpO1xuICAgICAgICBpZiAoIXNpZ25hdHVyZSkgY29udGludWU7XG4gICAgICAgIGlmIChzZWVuSW5wdXRTaWduYXR1cmVzLmhhcyhzaWduYXR1cmUpKSB7XG4gICAgICAgICAgaGFzRHVwbGljYXRlSW5wdXQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHNlZW5JbnB1dFNpZ25hdHVyZXMuYWRkKHNpZ25hdHVyZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChleHBsaWNpdENvdW50ID4gMSAmJiBoYXNEdXBsaWNhdGVJbnB1dCkge1xuICAgICAgICBjb25zdCBsaW5lID0gY2xpcExpbmVNYXAuZ2V0KGAke3RyYWNrTmFtZX18JHtjaGFubmVsfXwwYCkgfHwgbnVsbDtcbiAgICAgICAgcmVwb3J0Lndhcm5pbmdzLnB1c2goe1xuICAgICAgICAgIHJ1bGU6ICdkdXBsaWNhdGUtaW5wdXQtY2xpcHMnLFxuICAgICAgICAgIG1lc3NhZ2U6IGBUcmFjayAnJHt0cmFja05hbWV9JyBjaGFubmVsICcke2NoYW5uZWx9JyBoYXMgcmVwZWF0ZWQgaW5wdXQgY2xpcHMgd2l0aG91dCBleHBsaWNpdCAnIScgb3IgJysnIG1lcmdlIG9wZXJhdG9yLmAsXG4gICAgICAgICAgbGluZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIChjbGlwcyB8fCBbXSkuZm9yRWFjaCgoY2xpcCwgY2xpcEluZGV4KSA9PiB7XG4gICAgICAgIGlmICghY2xpcCB8fCAhY2xpcC5pbnB1dCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGxpbmUgPSBjbGlwTGluZU1hcC5nZXQoYCR7dHJhY2tOYW1lfXwke2NoYW5uZWx9fCR7Y2xpcEluZGV4fWApIHx8IG51bGw7XG4gICAgICAgIGxldCBpbnB1dDtcbiAgICAgICAgbGV0IHN0YXRzO1xuICAgICAgICBsZXQgdmFsdWVzID0gW107XG4gICAgICAgIGxldCBub3RlcyA9IFtdO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFsdWVzID0gY2xpcC52YWx1ZXMgPyByZWR1Y2UoY2xpcC52YWx1ZXMsIGNvbnRleHQuZGF0YSkgOiBbXTtcbiAgICAgICAgICBub3RlcyA9IGNsaXAuZGF0YSA/IHJlZHVjZShjbGlwLmRhdGEsIGNvbnRleHQuZGF0YSkgOiBbXTtcbiAgICAgICAgICBpbnB1dCA9IGZsYXR0ZW4ocmVkdWNlKGNsaXAuaW5wdXQsIGNvbnRleHQuZGF0YSwgcGFjayh2YWx1ZXMuc2xpY2UoKSwgbm90ZXMuc2xpY2UoKSkpKTtcbiAgICAgICAgICBzdGF0cyA9IGNvdW50UGF0dGVyblN0YXRzKHJlZHVjZShjbGlwLmlucHV0LCBjb250ZXh0LmRhdGEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJlcG9ydC5lcnJvcnMucHVzaCh7XG4gICAgICAgICAgICBydWxlOiAnY2xpcC1yZWR1Y2UtZmFpbGVkJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBVbmFibGUgdG8gZXZhbHVhdGUgY2xpcCBpbiAnJHt0cmFja05hbWV9JyAnJHtjaGFubmVsfSc6ICR7ZS5tZXNzYWdlfWAsXG4gICAgICAgICAgICBsaW5lLFxuICAgICAgICAgICAgc3RhY2s6IGUgJiYgZS5zdGFjayA/IFN0cmluZyhlLnN0YWNrKSA6IG51bGwsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgb3V0T2ZSYW5nZUxldmVsID0gdmFsdWVzLmZpbmQodmFsdWUgPT4gKFxuICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcidcbiAgICAgICAgICAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpXG4gICAgICAgICAgJiYgKHZhbHVlIDwgMCB8fCB2YWx1ZSA+IDEyNylcbiAgICAgICAgKSk7XG4gICAgICAgIGlmICh0eXBlb2Ygb3V0T2ZSYW5nZUxldmVsID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIHJlcG9ydC53YXJuaW5ncy5wdXNoKHtcbiAgICAgICAgICAgIHJ1bGU6ICdpbnZhbGlkLWxldmVsJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBUcmFjayAnJHt0cmFja05hbWV9JyAnJHtjaGFubmVsfScgaGFzIGxldmVsL3ZlbG9jaXR5ICcke291dE9mUmFuZ2VMZXZlbH0nIG91dHNpZGUgTUlESSByYW5nZSAwLi4xMjcuYCxcbiAgICAgICAgICAgIGxpbmUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBub3RlRXZlbnRzID0gbm90ZXM7XG4gICAgICAgIGNvbnN0IG5vdGVDb3VudCA9IEFycmF5LmlzQXJyYXkobm90ZUV2ZW50cykgPyBub3RlRXZlbnRzLmxlbmd0aCA6IDA7XG5cbiAgICAgICAgaWYgKG5vdGVDb3VudCA+IHN0YXRzLmhpdHMpIHtcbiAgICAgICAgICByZXBvcnQud2FybmluZ3MucHVzaCh7XG4gICAgICAgICAgICBydWxlOiAnbWlzc2luZy1wdWxzZXMnLFxuICAgICAgICAgICAgbWVzc2FnZTogYFRyYWNrICcke3RyYWNrTmFtZX0nICcke2NoYW5uZWx9JyBoYXMgJHtub3RlQ291bnR9IG5vdGVzL2Nob3JkcyBidXQgb25seSAke3N0YXRzLmhpdHN9IGhpdCBwdWxzZXMuYCxcbiAgICAgICAgICAgIGxpbmUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXN0YXRzLnN1c3RhaW5BZnRlckhpdCkge1xuICAgICAgICAgIHJlcG9ydC53YXJuaW5ncy5wdXNoKHtcbiAgICAgICAgICAgIHJ1bGU6ICdvcnBoYW4tc3VzdGFpbicsXG4gICAgICAgICAgICBtZXNzYWdlOiBgVHJhY2sgJyR7dHJhY2tOYW1lfScgJyR7Y2hhbm5lbH0nIHVzZXMgJ18nIGJlZm9yZSBhbnkgJ3gnIGhpdCBpbiB0aGUgc2FtZSBwYXR0ZXJuLmAsXG4gICAgICAgICAgICBsaW5lLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXRzLmhpdHMgPiAwICYmIGZsYXR0ZW5TZWN0aW9uQmVhdHMoaW5wdXQpID09PSAwKSB7XG4gICAgICAgICAgcmVwb3J0Lndhcm5pbmdzLnB1c2goe1xuICAgICAgICAgICAgcnVsZTogJ3NpbGVudC1wYXR0ZXJuJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IGBUcmFjayAnJHt0cmFja05hbWV9JyAnJHtjaGFubmVsfScgcmVzb2x2ZXMgdG8gc2lsZW5jZSBhZnRlciByZWR1Y3Rpb24uYCxcbiAgICAgICAgICAgIGxpbmUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICBpZiAoIW1lcmdlZCkge1xuICAgIHRyeSB7XG4gICAgICBtZXJnZWQgPSBtZXJnZShjb250ZXh0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIXJlcG9ydC5lcnJvcnMuc29tZShpdGVtID0+IGl0ZW0ucnVsZSA9PT0gJ3Vua25vd24tc2VjdGlvbicpKSB7XG4gICAgICAgIHJlcG9ydC5lcnJvcnMucHVzaCh7XG4gICAgICAgICAgcnVsZTogJ21lcmdlLWVycm9yJyxcbiAgICAgICAgICBtZXNzYWdlOiBlICYmIGUubWVzc2FnZSA/IGUubWVzc2FnZSA6ICdNZXJnZSBlcnJvcicsXG4gICAgICAgICAgbGluZTogbnVsbCxcbiAgICAgICAgICBzdGFjazogZSAmJiBlLnN0YWNrID8gU3RyaW5nKGUuc3RhY2spIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGV4cGFuZGVkLmxlbmd0aCAmJiBBcnJheS5pc0FycmF5KG1lcmdlZCkpIHtcbiAgICBsZXQgZmxhdEluZGV4ID0gMDtcbiAgICBtZXJnZWQuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAoZ3JvdXAgfHwgW10pLmZvckVhY2gocGFydHMgPT4ge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGV4cGFuZGVkW2ZsYXRJbmRleF07XG4gICAgICAgIGlmICh0b2tlbiAmJiBmbGF0dGVuU2VjdGlvbkJlYXRzKHBhcnRzLm1hcCh0ID0+IHRbMl0pKSA9PT0gMCkge1xuICAgICAgICAgIHJlcG9ydC53YXJuaW5ncy5wdXNoKHtcbiAgICAgICAgICAgIHJ1bGU6ICdzaWxlbnQtc2VjdGlvbicsXG4gICAgICAgICAgICBtZXNzYWdlOiBgU2VjdGlvbiAnJHt0b2tlbi5uYW1lfScgcmVzb2x2ZXMgdG8gc2lsZW5jZS5gLFxuICAgICAgICAgICAgbGluZTogbnVsbCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBmbGF0SW5kZXggKz0gMTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHJlcG9ydDtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsT0FBTyxjQUFjO0FBQzlCLFNBQVMsT0FBTyxZQUFZO0FBQzVCLFNBQVMsYUFBYTtBQUN0QixTQUFTLGVBQWU7QUFDeEIsU0FBUyx3Q0FBd0M7QUFDakQsU0FBUywyQkFBMkI7QUFFcEMsU0FBUyxVQUFVLE1BQU0sSUFBSTtBQUMzQixNQUFJLE1BQU0sUUFBUSxJQUFJLEdBQUc7QUFDdkIsU0FBSyxRQUFRLFVBQVEsVUFBVSxNQUFNLEVBQUUsQ0FBQztBQUN4QztBQUFBLEVBQ0Y7QUFDQSxLQUFHLElBQUk7QUFDVDtBQUVBLFNBQVMsa0JBQWtCLE1BQU07QUFDL0IsUUFBTSxRQUFRO0FBQUEsSUFDWixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxpQkFBaUI7QUFBQSxFQUNuQjtBQUNBLE1BQUksVUFBVTtBQUVkLFlBQVUsTUFBTSxXQUFTO0FBQ3ZCLFFBQUksT0FBTyxVQUFVLFNBQVU7QUFFL0IsVUFBTSxRQUFRLE1BQU0sS0FBSztBQUN6QixjQUFVLE9BQU8sVUFBUTtBQUN2QixVQUFJLFNBQVMsS0FBSztBQUNoQixjQUFNLFFBQVE7QUFDZCxjQUFNLFNBQVM7QUFDZixrQkFBVTtBQUNWO0FBQUEsTUFDRjtBQUNBLFVBQUksU0FBUyxLQUFLO0FBQ2hCLGNBQU0sU0FBUztBQUNmO0FBQUEsTUFDRjtBQUNBLFVBQUksU0FBUyxLQUFLO0FBQ2hCLGNBQU0sU0FBUztBQUNmLFlBQUks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
