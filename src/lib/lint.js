import { parse, reduce } from './parser';
import { merge, pack } from './mixup';
import { split } from './tokenize';
import { flatten } from './utils';
import { buildArrangementDisplayExpansion } from './playground';

function deepVisit(node, fn) {
  if (Array.isArray(node)) {
    node.forEach(item => deepVisit(item, fn));
    return;
  }
  fn(node);
}

function countPatternStats(node) {
  const stats = {
    hits: 0,
    slots: 0,
    sustainAfterHit: true,
  };
  let seenHit = false;

  deepVisit(node, value => {
    if (typeof value !== 'string') return;

    const parts = split(value);
    deepVisit(parts, part => {
      if (part === 'x') {
        stats.hits += 1;
        stats.slots += 1;
        seenHit = true;
        return;
      }
      if (part === '-') {
        stats.slots += 1;
        return;
      }
      if (part === '_') {
        stats.slots += 1;
        if (!seenHit) stats.sustainAfterHit = false;
      }
    });
  });

  return stats;
}

function flattenSectionBeats(beats) {
  let active = 0;
  deepVisit(beats, tick => {
    if (tick && typeof tick === 'object' && tick.v > 0) active += 1;
  });
  return active;
}

function scanClipLineMap(source) {
  const clipLineMap = new Map();
  const sectionNames = new Set();
  let track = null;
  let prefix = '';
  const counters = new Map();

  String(source || '').split(/\r?\n/).forEach((rawLine, nth) => {
    const line = rawLine.replace(/;.+?$/, '').trim();
    if (!line) return;

    if (line.indexOf('# ') >= 0) {
      track = line.split(/\s+/).slice(1).join(' ');
      prefix = '';
      return;
    }

    if (line.charAt() === '@') {
      const name = line.substr(1).split(/\s+/)[0];
      prefix = name || '';
      if (prefix) sectionNames.add(prefix);
      return;
    }

    if (!track) return;
    if (!/^#\d+\b/.test(line)) return;

    const channelValue = line.match(/^#(\d+)\b/);
    if (!channelValue) return;
    const channel = `${prefix}#${channelValue[1]}`;
    const key = `${track}|${channel}`;
    const idx = counters.get(key) || 0;
    counters.set(key, idx + 1);
    clipLineMap.set(`${key}|${idx}`, nth + 1);
  });

  return { clipLineMap, sectionNames };
}

export function lintDub(source, opts = {}) {
  const report = {
    errors: [],
    warnings: [],
  };

  let context = opts.context;
  let merged = opts.merged;

  try {
    if (!context) context = parse(source);
  } catch (e) {
    report.errors.push({
      rule: 'parse-error',
      message: e && e.message ? e.message : 'Parse error',
      line: null,
    });
    return report;
  }

  const { clipLineMap, sectionNames } = scanClipLineMap(source);
  const expanded = buildArrangementDisplayExpansion(source);
  expanded.forEach((item, idx) => {
    if (!sectionNames.has(item.name)) {
      report.errors.push({
        rule: 'unknown-section',
        message: `Arrangement token '${item.name}' (index ${idx}) has no matching @section.`,
        line: null,
      });
    }
  });

  Object.entries(context.tracks || {}).forEach(([trackName, channels]) => {
    Object.entries(channels || {}).forEach(([channel, clips]) => {
      const inputClips = (clips || []).filter(clip => clip && clip.input);
      if (inputClips.length > 1 && inputClips.some(clip => !clip.merge)) {
        const line = clipLineMap.get(`${trackName}|${channel}|0`) || null;
        report.warnings.push({
          rule: 'duplicate-input-clips',
          message: `Track '${trackName}' channel '${channel}' has repeated input clips without explicit '!' or '+' merge operator.`,
          line,
        });
      }

      (clips || []).forEach((clip, clipIndex) => {
        if (!clip || !clip.input) return;

        const line = clipLineMap.get(`${trackName}|${channel}|${clipIndex}`) || null;
        let input;
        let stats;

        try {
          const values = clip.values ? reduce(clip.values, context.data) : [];
          const notes = clip.data ? reduce(clip.data, context.data) : [];
          input = flatten(reduce(clip.input, context.data, pack(values.slice(), notes.slice())));
          stats = countPatternStats(reduce(clip.input, context.data));
        } catch (e) {
          report.errors.push({
            rule: 'clip-reduce-failed',
            message: `Unable to evaluate clip in '${trackName}' '${channel}': ${e.message}`,
            line,
          });
          return;
        }

        const noteEvents = clip.data ? reduce(clip.data, context.data) : [];
        const noteCount = Array.isArray(noteEvents) ? noteEvents.length : 0;

        if (noteCount > stats.hits) {
          report.warnings.push({
            rule: 'missing-pulses',
            message: `Track '${trackName}' '${channel}' has ${noteCount} notes/chords but only ${stats.hits} hit pulses.`,
            line,
          });
        }

        if (!stats.sustainAfterHit) {
          report.warnings.push({
            rule: 'orphan-sustain',
            message: `Track '${trackName}' '${channel}' uses '_' before any 'x' hit in the same pattern.`,
            line,
          });
        }

        if (stats.hits > 0 && flattenSectionBeats(input) === 0) {
          report.warnings.push({
            rule: 'silent-pattern',
            message: `Track '${trackName}' '${channel}' resolves to silence after reduction.`,
            line,
          });
        }
      });
    });
  });

  if (!merged) {
    try {
      merged = merge(context);
    } catch (e) {
      if (!report.errors.some(item => item.rule === 'unknown-section')) {
        report.errors.push({
          rule: 'merge-error',
          message: e && e.message ? e.message : 'Merge error',
          line: null,
        });
      }
    }
  }

  if (expanded.length && Array.isArray(merged)) {
    let flatIndex = 0;
    merged.forEach(group => {
      (group || []).forEach(parts => {
        const token = expanded[flatIndex];
        if (token && flattenSectionBeats(parts.map(t => t[2])) === 0) {
          report.warnings.push({
            rule: 'silent-section',
            message: `Section '${token.name}' resolves to silence.`,
            line: null,
          });
        }
        flatIndex += 1;
      });
    });
  }

  return report;
}
