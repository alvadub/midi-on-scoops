import { parse } from "./parser.js";
import { merge } from "./mixup.js";
import { transform } from "./tokenize.js";
const DEFAULT_OPTIONS = {
  aggressive: false,
  maxVariableIndex: 1,
  minOccurrences: 2,
  minSequenceLength: 2
};
const VARIABLE_PREFIX = "c";
const CANDIDATE_TOKEN_TYPES = /* @__PURE__ */ new Set(["note", "chord"]);
function normalizeSource(source) {
  return String(source || "").replace(/\r/g, "").trim();
}
function findSuffixDashCommentIndex(rawLine) {
  const match = rawLine.match(/\s--\s/);
  if (!match || typeof match.index !== "number") return -1;
  if (!/\S/.test(rawLine.slice(0, match.index))) return -1;
  return match.index;
}
function stripComment(rawLine) {
  const semicolonIndex = rawLine.indexOf(";");
  const dashCommentIndex = findSuffixDashCommentIndex(rawLine);
  let index = -1;
  if (semicolonIndex >= 0 && dashCommentIndex >= 0) {
    index = Math.min(semicolonIndex, dashCommentIndex);
  } else if (semicolonIndex >= 0) {
    index = semicolonIndex;
  } else if (dashCommentIndex >= 0) {
    index = dashCommentIndex;
  }
  if (index < 0) return {
    code: rawLine,
    comment: ""
  };
  return {
    code: rawLine.slice(0, index),
    comment: rawLine.slice(index)
  };
}
function toInt(value, fallback) {
  const parsed = parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}
function tokenText(token) {
  if (!token) return "";
  switch (token.type) {
    case "channel":
      return String(token.value);
    case "chord":
      return token.value.join("|");
    case "number":
    case "mode":
    case "param":
    case "value":
      return String(token.value);
    case "slice":
      return `${token.value[0]}..${token.value[1]}`;
    case "pattern":
      return token.value;
    default:
      return String(token.value);
  }
}
function tokensToText(tokens) {
  return tokens.map(tokenText).join(" ");
}
function isCandidateToken(token) {
  return CANDIDATE_TOKEN_TYPES.has(token && token.type);
}
function buildLineSegments(tokens, hasChannel) {
  const segments = [];
  if (!hasChannel) {
    return [{
      kind: "values",
      start: 0,
      end: tokens.length,
      tokens: tokens.slice(0, tokens.length)
    }];
  }
  const notes = tokens.findIndex((token) => ["note", "chord", "param"].includes(token.type));
  const index = tokens.findIndex((token) => token.type === "pattern");
  const value = index > 0 ? tokens.slice(index) : tokens;
  const offset = value.findIndex((token) => token.type !== "pattern");
  const inputs = tokens.slice(0, index > 0 ? index : 1);
  let values = [];
  let data = [];
  let valuesStart = -1;
  let dataStart = -1;
  if (notes > 0 && index === -1) {
    values = value.slice(1, notes);
    valuesStart = 1;
    data = value.slice(notes);
    dataStart = valuesStart + values.length;
  } else if (offset > 0) {
    data = value.slice(offset);
    dataStart = index + offset;
  } else if (offset === 0) {
    values = value.slice(1);
    valuesStart = 1;
  }
  if (inputs.length > 1) {
    let rest = inputs.slice(1);
    if (rest[0] && rest[0].type === "value" && (rest[0].value === "!" || rest[0].value === "+")) {
      rest = rest.slice(1);
    }
    if (rest.length > 0) {
      values = rest;
      valuesStart = 1;
    }
  }
  if (valuesStart >= 0 && values.length) {
    segments.push({
      kind: "values",
      start: valuesStart,
      end: valuesStart + values.length,
      tokens: tokens.slice(valuesStart, valuesStart + values.length)
    });
  }
  if (dataStart >= 0 && data.length) {
    segments.push({
      kind: "data",
      start: dataStart,
      end: dataStart + data.length,
      tokens: tokens.slice(dataStart, dataStart + data.length)
    });
  }
  return segments;
}
function parseClipLines(source) {
  const lines = normalizeSource(source).split("\n");
  const lineEntries = /* @__PURE__ */ new Map();
  const segments = [];
  let prefix = "";
  let channel = null;
  lines.forEach((rawLine, lineNumber) => {
    const { code, comment } = stripComment(rawLine);
    const line = code.trim();
    if (!line) return;
    if (line.charAt() === ";") return;
    if (line.indexOf("# ") >= 0) {
      prefix = "";
      channel = null;
      return;
    }
    if (line.charAt() === "@") {
      prefix = line.substr(1).trim().split(" ")[0];
      channel = null;
      return;
    }
    if (line.charAt() === ">" || line.indexOf(":") > 0 || line.charAt() === "%" && line.charAt(1) !== "%") {
      return;
    }
    let tokens;
    try {
      tokens = transform(line);
    } catch (error) {
      const msg = typeof error === "string" ? error : error.message;
      throw new SyntaxError(`${msg}
  at line ${lineNumber + 1}
${line}`);
    }
    if (!tokens.length) return;
    const hasChannel = tokens[0] && tokens[0].type === "channel";
    if (!hasChannel && !channel) {
      throw new TypeError(`Missing channel, given '${line}'`);
    }
    if (hasChannel) {
      channel = `${prefix}${tokens[0].value}`;
      void channel;
    }
    const lineSegments = buildLineSegments(tokens, hasChannel);
    if (!lineSegments.length) return;
    const entry = {
      raw: rawLine,
      indent: rawLine.match(/^\s*/)[0] || "",
      comment,
      tokens,
      segments: []
    };
    lineSegments.forEach((range) => {
      const segment = {
        id: segments.length,
        line: lineNumber,
        kind: range.kind,
        start: range.start,
        end: range.end,
        tokens: range.tokens
      };
      segments.push(segment);
      entry.segments.push(segment);
    });
    lineEntries.set(lineNumber, entry);
  });
  return {
    lines,
    lineEntries,
    segments
  };
}
function collectCandidates(segments, minSequenceLength) {
  const literals = /* @__PURE__ */ new Map();
  const sequences = /* @__PURE__ */ new Map();
  segments.forEach((segment) => {
    segment.tokens.forEach((token, index) => {
      if (token.type !== "chord") return;
      const text = tokenText(token);
      const key = `chord:${text}`;
      if (!literals.has(key)) {
        literals.set(key, {
          key,
          text,
          textLength: text.length,
          tokenCount: 1,
          occurrences: []
        });
      }
      literals.get(key).occurrences.push({
        segmentId: segment.id,
        start: index,
        length: 1
      });
    });
    if (segment.tokens.length < minSequenceLength) return;
    for (let start = 0; start < segment.tokens.length; start += 1) {
      if (!isCandidateToken(segment.tokens[start])) continue;
      const parts = [];
      for (let end = start; end < segment.tokens.length; end += 1) {
        const token = segment.tokens[end];
        if (!isCandidateToken(token)) break;
        parts.push(tokenText(token));
        if (parts.length < minSequenceLength) continue;
        const text = parts.join(" ");
        const key = `seq:${text}`;
        if (!sequences.has(key)) {
          sequences.set(key, {
            key,
            text,
            textLength: text.length,
            tokenCount: parts.length,
            occurrences: []
          });
        }
        sequences.get(key).occurrences.push({
          segmentId: segment.id,
          start,
          length: parts.length
        });
        const existing = sequences.get(key);
        if (parts.length > existing.tokenCount) {
          existing.tokenCount = parts.length;
          existing.textLength = text.length;
        }
      }
    }
  });
  return {
    literals: [...literals.values()],
    sequences: [...sequences.values()]
  };
}
function sortCandidates(candidates, options) {
  return candidates.filter((candidate) => candidate.occurrences.length >= options.minOccurrences).sort((a, b) => {
    if (b.tokenCount !== a.tokenCount) return b.tokenCount - a.tokenCount;
    if (b.textLength !== a.textLength) return b.textLength - a.textLength;
    if (b.occurrences.length !== a.occurrences.length) return b.occurrences.length - a.occurrences.length;
    return a.key.localeCompare(b.key);
  });
}
function releaseMarks(perSegmentUsed, marks) {
  marks.forEach(({ segmentId, index }) => {
    const slots = perSegmentUsed[segmentId];
    if (slots) {
      slots[index] = false;
    }
  });
}
function pickCandidate(candidate, perSegmentUsed, options, stats) {
  const ordered = candidate.occurrences.slice().sort((a, b) => {
    if (a.segmentId !== b.segmentId) return a.segmentId - b.segmentId;
    return a.start - b.start;
  });
  const selected = [];
  const marks = [];
  ordered.forEach((occurrence) => {
    const used = perSegmentUsed[occurrence.segmentId] || (perSegmentUsed[occurrence.segmentId] = []);
    let conflict = false;
    for (let i = occurrence.start; i < occurrence.start + occurrence.length; i += 1) {
      if (used[i]) {
        conflict = true;
        break;
      }
    }
    if (conflict) return;
    for (let i = occurrence.start; i < occurrence.start + occurrence.length; i += 1) {
      used[i] = true;
      marks.push({
        segmentId: occurrence.segmentId,
        index: i
      });
    }
    selected.push(occurrence);
  });
  if (selected.length < options.minOccurrences) {
    releaseMarks(perSegmentUsed, marks);
    return null;
  }
  const name = `${VARIABLE_PREFIX}${stats.nextVariable}`;
  const replacementText = `%${name}`;
  const definitionCost = options.aggressive ? 0 : candidate.textLength + replacementText.length + 1;
  const savings = selected.length * (candidate.textLength - replacementText.length) - definitionCost;
  if (!options.aggressive && savings <= 0) {
    releaseMarks(perSegmentUsed, marks);
    return null;
  }
  stats.nextVariable += 1;
  stats.totalReplacements += selected.length;
  stats.totalTokenSavings += selected.length * (candidate.tokenCount - 1) - 1;
  return {
    name,
    selected,
    candidate,
    savings
  };
}
function chooseCandidates(candidates, perSegmentUsed, options, stats) {
  const chosen = [];
  const ordered = sortCandidates(candidates, options);
  ordered.forEach((candidate) => {
    const picked = pickCandidate(candidate, perSegmentUsed, options, stats);
    if (!picked) return;
    chosen.push(picked);
  });
  return chosen;
}
function buildDefinitions(chosen, segments) {
  return chosen.map((item) => {
    const first = item.selected[0];
    const segment = segments[first.segmentId];
    const expression = segment.tokens.slice(first.start, first.start + first.length).map(tokenText).join(" ");
    return {
      name: `%${item.name}`,
      expression,
      line: `%${item.name} ${expression}`,
      replacements: item.selected.length,
      savings: item.savings
    };
  });
}
function applyReplacements(parsed, chosen) {
  const replacementsByLine = /* @__PURE__ */ new Map();
  chosen.forEach((item) => {
    const token = {
      type: "param",
      value: `%${item.name}`
    };
    item.selected.forEach((occurrence) => {
      const segment = parsed.segments[occurrence.segmentId];
      const start = segment.start + occurrence.start;
      const end = segment.start + occurrence.start + occurrence.length;
      const list = replacementsByLine.get(segment.line) || [];
      list.push({ start, end, token });
      replacementsByLine.set(segment.line, list);
    });
  });
  const outLines = parsed.lines.slice();
  replacementsByLine.forEach((replacements, lineNumber) => {
    const entry = parsed.lineEntries.get(lineNumber);
    if (!entry) return;
    const lineTokens = entry.tokens.slice();
    replacements.sort((a, b) => b.start - a.start).forEach((item) => {
      lineTokens.splice(item.start, item.end - item.start, item.token);
    });
    outLines[lineNumber] = `${entry.indent}${tokensToText(lineTokens)}${entry.comment}`;
  });
  return outLines;
}
function insertDefinitions(lines, definitions) {
  if (!definitions.length) return lines;
  const definitionLines = definitions.map((item) => item.line);
  let insertAt = 0;
  while (insertAt < lines.length) {
    const { code } = stripComment(lines[insertAt]);
    const clean = code.trim();
    if (!clean || clean.charAt() === ";" || clean.charAt() === "%") {
      insertAt += 1;
      continue;
    }
    break;
  }
  const output = lines.slice();
  output.splice(insertAt, 0, ...definitionLines);
  return output;
}
function parseExistingVariableIndexes(ast) {
  return Object.keys(ast.data || {}).filter((name) => /^%c\d+$/.test(name)).map((name) => parseInt(name.slice(2), 10)).filter((name) => Number.isFinite(name));
}
function safeMerge(ctx) {
  try {
    return merge(ctx);
  } catch (error) {
    return null;
  }
}
function compressDub(source, opts = {}) {
  const options = {
    ...DEFAULT_OPTIONS,
    ...opts,
    minOccurrences: toInt(opts.minOccurrences, DEFAULT_OPTIONS.minOccurrences),
    minSequenceLength: toInt(opts.minSequenceLength, DEFAULT_OPTIONS.minSequenceLength)
  };
  const normalized = normalizeSource(source);
  const sourceAst = parse(normalized);
  const parsed = parseClipLines(normalized);
  const existing = parseExistingVariableIndexes(sourceAst);
  const nextVariable = Math.max(
    options.maxVariableIndex,
    existing.length ? Math.max(...existing) + 1 : options.maxVariableIndex
  );
  const stats = {
    nextVariable,
    totalReplacements: 0,
    totalTokenSavings: 0,
    variables: 0
  };
  const candidates = collectCandidates(parsed.segments, options.minSequenceLength);
  const usedBySegment = {};
  const chosenLiterals = chooseCandidates(candidates.literals, usedBySegment, options, stats);
  const chosenSequences = chooseCandidates(candidates.sequences, usedBySegment, options, stats);
  const chosen = [...chosenLiterals, ...chosenSequences];
  if (!chosen.length) {
    return {
      source: normalized,
      definitions: [],
      summary: {
        replacements: 0,
        variables: 0,
        tokenSavings: 0,
        charSavings: 0
      },
      merged: safeMerge(sourceAst),
      mergedCompressed: null,
      hasCompressed: false
    };
  }
  const definitions = buildDefinitions(chosen, parsed.segments);
  const replacedLines = applyReplacements(parsed, chosen);
  const withDefinitions = insertDefinitions(replacedLines, definitions);
  const output = normalizeSource(withDefinitions.join("\n"));
  return {
    source: output,
    definitions,
    summary: {
      replacements: stats.totalReplacements,
      variables: definitions.length,
      tokenSavings: stats.totalTokenSavings,
      charSavings: Math.max(0, normalized.length - output.length)
    },
    merged: safeMerge(sourceAst),
    mergedCompressed: safeMerge(parse(output)),
    hasCompressed: true
  };
}
export {
  compressDub
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2xpYi9zcmMvbGliL2NvbXByZXNzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4vcGFyc2VyLmpzJztcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAnLi9taXh1cC5qcyc7XG5pbXBvcnQgeyB0cmFuc2Zvcm0gfSBmcm9tICcuL3Rva2VuaXplLmpzJztcblxuY29uc3QgREVGQVVMVF9PUFRJT05TID0ge1xuICBhZ2dyZXNzaXZlOiBmYWxzZSxcbiAgbWF4VmFyaWFibGVJbmRleDogMSxcbiAgbWluT2NjdXJyZW5jZXM6IDIsXG4gIG1pblNlcXVlbmNlTGVuZ3RoOiAyLFxufTtcblxuY29uc3QgVkFSSUFCTEVfUFJFRklYID0gJ2MnO1xuY29uc3QgQ0FORElEQVRFX1RPS0VOX1RZUEVTID0gbmV3IFNldChbJ25vdGUnLCAnY2hvcmQnXSk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNvdXJjZShzb3VyY2UpIHtcbiAgcmV0dXJuIFN0cmluZyhzb3VyY2UgfHwgJycpLnJlcGxhY2UoL1xcci9nLCAnJykudHJpbSgpO1xufVxuXG5mdW5jdGlvbiBmaW5kU3VmZml4RGFzaENvbW1lbnRJbmRleChyYXdMaW5lKSB7XG4gIGNvbnN0IG1hdGNoID0gcmF3TGluZS5tYXRjaCgvXFxzLS1cXHMvKTtcbiAgaWYgKCFtYXRjaCB8fCB0eXBlb2YgbWF0Y2guaW5kZXggIT09ICdudW1iZXInKSByZXR1cm4gLTE7XG4gIGlmICghL1xcUy8udGVzdChyYXdMaW5lLnNsaWNlKDAsIG1hdGNoLmluZGV4KSkpIHJldHVybiAtMTtcbiAgcmV0dXJuIG1hdGNoLmluZGV4O1xufVxuXG5mdW5jdGlvbiBzdHJpcENvbW1lbnQocmF3TGluZSkge1xuICBjb25zdCBzZW1pY29sb25JbmRleCA9IHJhd0xpbmUuaW5kZXhPZignOycpO1xuICBjb25zdCBkYXNoQ29tbWVudEluZGV4ID0gZmluZFN1ZmZpeERhc2hDb21tZW50SW5kZXgocmF3TGluZSk7XG4gIGxldCBpbmRleCA9IC0xO1xuXG4gIGlmIChzZW1pY29sb25JbmRleCA+PSAwICYmIGRhc2hDb21tZW50SW5kZXggPj0gMCkge1xuICAgIGluZGV4ID0gTWF0aC5taW4oc2VtaWNvbG9uSW5kZXgsIGRhc2hDb21tZW50SW5kZXgpO1xuICB9IGVsc2UgaWYgKHNlbWljb2xvbkluZGV4ID49IDApIHtcbiAgICBpbmRleCA9IHNlbWljb2xvbkluZGV4O1xuICB9IGVsc2UgaWYgKGRhc2hDb21tZW50SW5kZXggPj0gMCkge1xuICAgIGluZGV4ID0gZGFzaENvbW1lbnRJbmRleDtcbiAgfVxuXG4gIGlmIChpbmRleCA8IDApIHJldHVybiB7XG4gICAgY29kZTogcmF3TGluZSxcbiAgICBjb21tZW50OiAnJyxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGNvZGU6IHJhd0xpbmUuc2xpY2UoMCwgaW5kZXgpLFxuICAgIGNvbW1lbnQ6IHJhd0xpbmUuc2xpY2UoaW5kZXgpLFxuICB9O1xufVxuXG5mdW5jdGlvbiB0b0ludCh2YWx1ZSwgZmFsbGJhY2spIHtcbiAgY29uc3QgcGFyc2VkID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgcmV0dXJuIE51bWJlci5pc0Zpbml0ZShwYXJzZWQpICYmIHBhcnNlZCA+IDAgPyBwYXJzZWQgOiBmYWxsYmFjaztcbn1cblxuZnVuY3Rpb24gdG9rZW5UZXh0KHRva2VuKSB7XG4gIGlmICghdG9rZW4pIHJldHVybiAnJztcblxuICBzd2l0Y2ggKHRva2VuLnR5cGUpIHtcbiAgICBjYXNlICdjaGFubmVsJzpcbiAgICAgIHJldHVybiBTdHJpbmcodG9rZW4udmFsdWUpO1xuICAgIGNhc2UgJ2Nob3JkJzpcbiAgICAgIHJldHVybiB0b2tlbi52YWx1ZS5qb2luKCd8Jyk7XG4gICAgY2FzZSAnbnVtYmVyJzpcbiAgICBjYXNlICdtb2RlJzpcbiAgICBjYXNlICdwYXJhbSc6XG4gICAgY2FzZSAndmFsdWUnOlxuICAgICAgcmV0dXJuIFN0cmluZyh0b2tlbi52YWx1ZSk7XG4gICAgY2FzZSAnc2xpY2UnOlxuICAgICAgcmV0dXJuIGAke3Rva2VuLnZhbHVlWzBdfS4uJHt0b2tlbi52YWx1ZVsxXX1gO1xuICAgIGNhc2UgJ3BhdHRlcm4nOlxuICAgICAgcmV0dXJuIHRva2VuLnZhbHVlO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gU3RyaW5nKHRva2VuLnZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbnNUb1RleHQodG9rZW5zKSB7XG4gIHJldHVybiB0b2tlbnMubWFwKHRva2VuVGV4dCkuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBpc0NhbmRpZGF0ZVRva2VuKHRva2VuKSB7XG4gIHJldHVybiBDQU5ESURBVEVfVE9LRU5fVFlQRVMuaGFzKHRva2VuICYmIHRva2VuLnR5cGUpO1xufVxuXG5mdW5jdGlvbiBidWlsZExpbmVTZWdtZW50cyh0b2tlbnMsIGhhc0NoYW5uZWwpIHtcbiAgY29uc3Qgc2VnbWVudHMgPSBbXTtcblxuICBpZiAoIWhhc0NoYW5uZWwpIHtcbiAgICByZXR1cm4gW3tcbiAgICAgIGtpbmQ6ICd2YWx1ZXMnLFxuICAgICAgc3RhcnQ6IDAsXG4gICAgICBlbmQ6IHRva2Vucy5sZW5ndGgsXG4gICAgICB0b2tlbnM6IHRva2Vucy5zbGljZSgwLCB0b2tlbnMubGVuZ3RoKSxcbiAgICB9XTtcbiAgfVxuXG4gIGNvbnN0IG5vdGVzID0gdG9rZW5zLmZpbmRJbmRleCh0b2tlbiA9PiBbJ25vdGUnLCAnY2hvcmQnLCAncGFyYW0nXS5pbmNsdWRlcyh0b2tlbi50eXBlKSk7XG4gIGNvbnN0IGluZGV4ID0gdG9rZW5zLmZpbmRJbmRleCh0b2tlbiA9PiB0b2tlbi50eXBlID09PSAncGF0dGVybicpO1xuICBjb25zdCB2YWx1ZSA9IGluZGV4ID4gMCA/IHRva2Vucy5zbGljZShpbmRleCkgOiB0b2tlbnM7XG4gIGNvbnN0IG9mZnNldCA9IHZhbHVlLmZpbmRJbmRleCh0b2tlbiA9PiB0b2tlbi50eXBlICE9PSAncGF0dGVybicpO1xuICBjb25zdCBpbnB1dHMgPSB0b2tlbnMuc2xpY2UoMCwgaW5kZXggPiAwID8gaW5kZXggOiAxKTtcblxuICBsZXQgdmFsdWVzID0gW107XG4gIGxldCBkYXRhID0gW107XG4gIGxldCB2YWx1ZXNTdGFydCA9IC0xO1xuICBsZXQgZGF0YVN0YXJ0ID0gLTE7XG5cbiAgaWYgKG5vdGVzID4gMCAmJiBpbmRleCA9PT0gLTEpIHtcbiAgICB2YWx1ZXMgPSB2YWx1ZS5zbGljZSgxLCBub3Rlcyk7XG4gICAgdmFsdWVzU3RhcnQgPSAxO1xuICAgIGRhdGEgPSB2YWx1ZS5zbGljZShub3Rlcyk7XG4gICAgZGF0YVN0YXJ0ID0gdmFsdWVzU3RhcnQgKyB2YWx1ZXMubGVuZ3RoO1xuICB9IGVsc2UgaWYgKG9mZnNldCA+IDApIHtcbiAgICBkYXRhID0gdmFsdWUuc2xpY2Uob2Zmc2V0KTtcbiAgICBkYXRhU3RhcnQgPSBpbmRleCArIG9mZnNldDtcbiAgfSBlbHNlIGlmIChvZmZzZXQgPT09IDApIHtcbiAgICB2YWx1ZXMgPSB2YWx1ZS5zbGljZSgxKTtcbiAgICB2YWx1ZXNTdGFydCA9IDE7XG4gIH1cblxuICBpZiAoaW5wdXRzLmxlbmd0aCA+IDEpIHtcbiAgICBsZXQgcmVzdCA9IGlucHV0cy5zbGljZSgxKTtcblxuICAgIGlmIChcbiAgICAgIHJlc3RbMF1cbiAgICAgICYmIHJlc3RbMF0udHlwZSA9PT0gJ3ZhbHVlJ1xuICAgICAgJiYgKHJlc3RbMF0udmFsdWUgPT09ICchJyB8fCByZXN0WzBdLnZhbHVlID09PSAnKycpXG4gICAgKSB7XG4gICAgICByZXN0ID0gcmVzdC5zbGljZSgxKTtcbiAgICB9XG5cbiAgICBpZiAocmVzdC5sZW5ndGggPiAwKSB7XG4gICAgICB2YWx1ZXMgPSByZXN0O1xuICAgICAgdmFsdWVzU3RhcnQgPSAxO1xuICAgIH1cbiAgfVxuXG4gIGlmICh2YWx1ZXNTdGFydCA+PSAwICYmIHZhbHVlcy5sZW5ndGgpIHtcbiAgICBzZWdtZW50cy5wdXNoKHtcbiAgICAgIGtpbmQ6ICd2YWx1ZXMnLFxuICAgICAgc3RhcnQ6IHZhbHVlc1N0YXJ0LFxuICAgICAgZW5kOiB2YWx1ZXNTdGFydCArIHZhbHVlcy5sZW5ndGgsXG4gICAgICB0b2tlbnM6IHRva2Vucy5zbGljZSh2YWx1ZXNTdGFydCwgdmFsdWVzU3RhcnQgKyB2YWx1ZXMubGVuZ3RoKSxcbiAgICB9KTtcbiAgfVxuXG4gIGlmIChkYXRhU3RhcnQgPj0gMCAmJiBkYXRhLmxlbmd0aCkge1xuICAgIHNlZ21lbnRzLnB1c2goe1xuICAgICAga2luZDogJ2RhdGEnLFxuICAgICAgc3RhcnQ6IGRhdGFTdGFydCxcbiAgICAgIGVuZDogZGF0YVN0YXJ0ICsgZGF0YS5sZW5ndGgsXG4gICAgICB0b2tlbnM6IHRva2Vucy5zbGljZShkYXRhU3RhcnQsIGRhdGFTdGFydCArIGRhdGEubGVuZ3RoKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBzZWdtZW50cztcbn1cblxuZnVuY3Rpb24gcGFyc2VDbGlwTGluZXMoc291cmNlKSB7XG4gIGNvbnN0IGxpbmVzID0gbm9ybWFsaXplU291cmNlKHNvdXJjZSkuc3BsaXQoJ1xcbicpO1xuICBjb25zdCBsaW5lRW50cmllcyA9IG5ldyBNYXAoKTtcbiAgY29uc3Qgc2VnbWVudHMgPSBbXTtcblxuICBsZXQgcHJlZml4ID0gJyc7XG4gIGxldCBjaGFubmVsID0gbnVsbDtcblxuICBsaW5lcy5mb3JFYWNoKChyYXdMaW5lLCBsaW5lTnVtYmVyKSA9PiB7XG4gICAgY29uc3QgeyBjb2RlLCBjb21tZW50IH0gPSBzdHJpcENvbW1lbnQocmF3TGluZSk7XG4gICAgY29uc3QgbGluZSA9IGNvZGUudHJpbSgpO1xuXG4gICAgaWYgKCFsaW5lKSByZXR1cm47XG4gICAgaWYgKGxpbmUuY2hhckF0KCkgPT09ICc7JykgcmV0dXJuO1xuXG4gICAgaWYgKGxpbmUuaW5kZXhPZignIyAnKSA+PSAwKSB7XG4gICAgICBwcmVmaXggPSAnJztcbiAgICAgIGNoYW5uZWwgPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChsaW5lLmNoYXJBdCgpID09PSAnQCcpIHtcbiAgICAgIHByZWZpeCA9IGxpbmUuc3Vic3RyKDEpLnRyaW0oKS5zcGxpdCgnICcpWzBdO1xuICAgICAgY2hhbm5lbCA9IG51bGw7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGxpbmUuY2hhckF0KCkgPT09ICc+JyB8fCBsaW5lLmluZGV4T2YoJzonKSA+IDAgfHwgKGxpbmUuY2hhckF0KCkgPT09ICclJyAmJiBsaW5lLmNoYXJBdCgxKSAhPT0gJyUnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB0b2tlbnM7XG4gICAgdHJ5IHtcbiAgICAgIHRva2VucyA9IHRyYW5zZm9ybShsaW5lKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgbXNnID0gdHlwZW9mIGVycm9yID09PSAnc3RyaW5nJyA/IGVycm9yIDogZXJyb3IubWVzc2FnZTtcbiAgICAgIHRocm93IG5ldyBTeW50YXhFcnJvcihgJHttc2d9XFxuICBhdCBsaW5lICR7bGluZU51bWJlciArIDF9XFxuJHtsaW5lfWApO1xuICAgIH1cblxuICAgIGlmICghdG9rZW5zLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgaGFzQ2hhbm5lbCA9IHRva2Vuc1swXSAmJiB0b2tlbnNbMF0udHlwZSA9PT0gJ2NoYW5uZWwnO1xuICAgIGlmICghaGFzQ2hhbm5lbCAmJiAhY2hhbm5lbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTWlzc2luZyBjaGFubmVsLCBnaXZlbiAnJHtsaW5lfSdgKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzQ2hhbm5lbCkge1xuICAgICAgY2hhbm5lbCA9IGAke3ByZWZpeH0ke3Rva2Vuc1swXS52YWx1ZX1gO1xuICAgICAgdm9pZCBjaGFubmVsO1xuICAgIH1cblxuICAgIGNvbnN0IGxpbmVTZWdtZW50cyA9IGJ1aWxkTGluZVNlZ21lbnRzKHRva2VucywgaGFzQ2hhbm5lbCk7XG4gICAgaWYgKCFsaW5lU2VnbWVudHMubGVuZ3RoKSByZXR1cm47XG5cbiAgICBjb25zdCBlbnRyeSA9IHtcbiAgICAgIHJhdzogcmF3TGluZSxcbiAgICAgIGluZGVudDogcmF3TGluZS5tYXRjaCgvXlxccyovKVswXSB8fCAnJyxcbiAgICAgIGNvbW1lbnQsXG4gICAgICB0b2tlbnMsXG4gICAgICBzZWdtZW50czogW10sXG4gICAgfTtcblxuICAgIGxpbmVTZWdtZW50cy5mb3JFYWNoKHJhbmdlID0+IHtcbiAgICAgIGNvbnN0IHNlZ21lbnQgPSB7XG4gICAgICAgIGlkOiBzZWdtZW50cy5sZW5ndGgsXG4gICAgICAgIGxpbmU6IGxpbmVOdW1iZXIsXG4gICAgICAgIGtpbmQ6IHJhbmdlLmtpbmQsXG4gICAgICAgIHN0YXJ0OiByYW5nZS5zdGFydCxcbiAgICAgICAgZW5kOiByYW5nZS5lbmQsXG4gICAgICAgIHRva2VuczogcmFuZ2UudG9rZW5zLFxuICAgICAgfTtcbiAgICAgIHNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICBlbnRyeS5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgIH0pO1xuXG4gICAgbGluZUVudHJpZXMuc2V0KGxpbmVOdW1iZXIsIGVudHJ5KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBsaW5lcyxcbiAgICBsaW5lRW50cmllcyxcbiAgICBzZWdtZW50cyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29sbGVjdENhbmRpZGF0ZXMoc2VnbWVudHMsIG1pblNlcXVlbmNlTGVuZ3RoKSB7XG4gIGNvbnN0IGxpdGVyYWxzID0gbmV3IE1hcCgpO1xuICBjb25zdCBzZXF1ZW5jZXMgPSBuZXcgTWFwKCk7XG5cbiAgc2VnbWVudHMuZm9yRWFjaChzZWdtZW50ID0+IHtcbiAgICBzZWdtZW50LnRva2Vucy5mb3JFYWNoKCh0b2tlbiwgaW5kZXgpID0+IHtcbiAgICAgIGlmICh0b2tlbi50eXBlICE9PSAnY2hvcmQnKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IHRleHQgPSB0b2tlblRleHQodG9rZW4pO1xuICAgICAgY29uc3Qga2V5ID0gYGNob3JkOiR7dGV4dH1gO1xuICAgICAgaWYgKCFsaXRlcmFscy5oYXMoa2V5KSkge1xuICAgICAgICBsaXRlcmFscy5zZXQoa2V5LCB7XG4gICAgICAgICAga2V5LFxuICAgICAgICAgIHRleHQsXG4gICAgICAgICAgdGV4dExlbmd0aDogdGV4dC5sZW5ndGgsXG4gICAgICAgICAgdG9rZW5Db3VudDogMSxcbiAgICAgICAgICBvY2N1cnJlbmNlczogW10sXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBsaXRlcmFscy5nZXQoa2V5KS5vY2N1cnJlbmNlcy5wdXNoKHtcbiAgICAgICAgc2VnbWVudElkOiBzZWdtZW50LmlkLFxuICAgICAgICBzdGFydDogaW5kZXgsXG4gICAgICAgIGxlbmd0aDogMSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHNlZ21lbnQudG9rZW5zLmxlbmd0aCA8IG1pblNlcXVlbmNlTGVuZ3RoKSByZXR1cm47XG5cbiAgICBmb3IgKGxldCBzdGFydCA9IDA7IHN0YXJ0IDwgc2VnbWVudC50b2tlbnMubGVuZ3RoOyBzdGFydCArPSAxKSB7XG4gICAgICBpZiAoIWlzQ2FuZGlkYXRlVG9rZW4oc2VnbWVudC50b2tlbnNbc3RhcnRdKSkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IHBhcnRzID0gW107XG4gICAgICBmb3IgKGxldCBlbmQgPSBzdGFydDsgZW5kIDwgc2VnbWVudC50b2tlbnMubGVuZ3RoOyBlbmQgKz0gMSkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHNlZ21lbnQudG9rZW5zW2VuZF07XG4gICAgICAgIGlmICghaXNDYW5kaWRhdGVUb2tlbih0b2tlbikpIGJyZWFrO1xuXG4gICAgICAgIHBhcnRzLnB1c2godG9rZW5UZXh0KHRva2VuKSk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPCBtaW5TZXF1ZW5jZUxlbmd0aCkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IHBhcnRzLmpvaW4oJyAnKTtcbiAgICAgICAgY29uc3Qga2V5ID0gYHNlcToke3RleHR9YDtcbiAgICAgICAgaWYgKCFzZXF1ZW5jZXMuaGFzKGtleSkpIHtcbiAgICAgICAgICBzZXF1ZW5jZXMuc2V0KGtleSwge1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgdGV4dCxcbiAgICAgICAgICAgIHRleHRMZW5ndGg6IHRleHQubGVuZ3RoLFxuICAgICAgICAgICAgdG9rZW5Db3VudDogcGFydHMubGVuZ3RoLFxuICAgICAgICAgICAgb2NjdXJyZW5jZXM6IFtdLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VxdWVuY2VzLmdldChrZXkpLm9jY3VycmVuY2VzLnB1c2goe1xuICAgICAgICAgIHNlZ21lbnRJZDogc2VnbWVudC5pZCxcbiAgICAgICAgICBzdGFydCxcbiAgICAgICAgICBsZW5ndGg6IHBhcnRzLmxlbmd0aCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBzZXF1ZW5jZXMuZ2V0KGtleSk7XG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiBleGlzdGluZy50b2tlbkNvdW50KSB7XG4gICAgICAgICAgZXhpc3RpbmcudG9rZW5Db3VudCA9IHBhcnRzLmxlbmd0aDtcbiAgICAgICAgICBleGlzdGluZy50ZXh0TGVuZ3RoID0gdGV4dC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgbGl0ZXJhbHM6IFsuLi5saXRlcmFscy52YWx1ZXMoKV0sXG4gICAgc2VxdWVuY2VzOiBbLi4uc2VxdWVuY2VzLnZhbHVlcygpXSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc29ydENhbmRpZGF0ZXMoY2FuZGlkYXRlcywgb3B0aW9ucykge1xuICByZXR1cm4gY2FuZGlkYXRlc1xuICAgIC5maWx0ZXIoY2FuZGlkYXRlID0+IGNhbmRpZGF0ZS5vY2N1cnJlbmNlcy5sZW5ndGggPj0gb3B0aW9ucy5taW5PY2N1cnJlbmNlcylcbiAgICAuc29ydCgoYSwgYikgPT4ge1xuICAgICAgaWYgKGIudG9rZW5Db3VudCAhPT0gYS50b2tlbkNvdW50KSByZXR1cm4gYi50b2tlbkNvdW50IC0gYS50b2tlbkNvdW50O1xuICAgICAgaWYgKGIudGV4dExlbmd0aCAhPT0gYS50ZXh0TGVuZ3RoKSByZXR1cm4gYi50ZXh0TGVuZ3RoIC0gYS50ZXh0TGVuZ3RoO1xuICAgICAgaWYgKGIub2NjdXJyZW5jZXMubGVuZ3RoICE9PSBhLm9jY3VycmVuY2VzLmxlbmd0aCkgcmV0dXJuIGIub2NjdXJyZW5jZXMubGVuZ3RoIC0gYS5vY2N1cnJlbmNlcy5sZW5ndGg7XG4gICAgICByZXR1cm4gYS5rZXkubG9jYWxlQ29tcGFyZShiLmtleSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbGVhc2VNYXJrcyhwZXJTZWdtZW50VXNlZCwgbWFya3MpIHtcbiAgbWFya3MuZm9yRWFjaCgoeyBzZWdtZW50SWQsIGluZGV4IH0pID0+IHtcbiAgICBjb25zdCBzbG90cyA9IHBlclNlZ21lbnRVc2VkW3NlZ21lbnRJZF07XG4gICAgaWYgKHNsb3RzKSB7XG4gICAgICBzbG90c1tpbmRleF0gPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwaWNrQ2FuZGlkYXRlKGNhbmRpZGF0ZSwgcGVyU2VnbWVudFVzZWQsIG9wdGlvbnMsIHN0YXRzKSB7XG4gIGNvbnN0IG9yZGVyZWQgPSBjYW5kaWRhdGUub2NjdXJyZW5jZXMuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEuc2VnbWVudElkICE9PSBiLnNlZ21lbnRJZCkgcmV0dXJuIGEuc2VnbWVudElkIC0gYi5zZWdtZW50SWQ7XG4gICAgcmV0dXJuIGEuc3RhcnQgLSBiLnN0YXJ0O1xuICB9KTtcblxuICBjb25zdCBzZWxlY3RlZCA9IFtdO1xuICBjb25zdCBtYXJrcyA9IFtdO1xuXG4gIG9yZGVyZWQuZm9yRWFjaChvY2N1cnJlbmNlID0+IHtcbiAgICBjb25zdCB1c2VkID0gcGVyU2VnbWVudFVzZWRbb2NjdXJyZW5jZS5zZWdtZW50SWRdIHx8IChwZXJTZWdtZW50VXNlZFtvY2N1cnJlbmNlLnNlZ21lbnRJZF0gPSBbXSk7XG4gICAgbGV0IGNvbmZsaWN0ID0gZmFsc2U7XG5cbiAgICBmb3IgKGxldCBpID0gb2NjdXJyZW5jZS5zdGFydDsgaSA8IG9jY3VycmVuY2Uuc3RhcnQgKyBvY2N1cnJlbmNlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAodXNlZFtpXSkge1xuICAgICAgICBjb25mbGljdCA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY29uZmxpY3QpIHJldHVybjtcblxuICAgIGZvciAobGV0IGkgPSBvY2N1cnJlbmNlLnN0YXJ0OyBpIDwgb2NjdXJyZW5jZS5zdGFydCArIG9jY3VycmVuY2UubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHVzZWRbaV0gPSB0cnVlO1xuICAgICAgbWFya3MucHVzaCh7XG4gICAgICAgIHNlZ21lbnRJZDogb2NjdXJyZW5jZS5zZWdtZW50SWQsXG4gICAgICAgIGluZGV4OiBpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHNlbGVjdGVkLnB1c2gob2NjdXJyZW5jZSk7XG4gIH0pO1xuXG4gIGlmIChzZWxlY3RlZC5sZW5ndGggPCBvcHRpb25zLm1pbk9jY3VycmVuY2VzKSB7XG4gICAgcmVsZWFzZU1hcmtzKHBlclNlZ21lbnRVc2VkLCBtYXJrcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBuYW1lID0gYCR7VkFSSUFCTEVfUFJFRklYfSR7c3RhdHMubmV4dFZhcmlhYmxlfWA7XG4gIGNvbnN0IHJlcGxhY2VtZW50VGV4dCA9IGAlJHtuYW1lfWA7XG4gIGNvbnN0IGRlZmluaXRpb25Db3N0ID0gb3B0aW9ucy5hZ2dyZXNzaXZlID8gMCA6IChjYW5kaWRhdGUudGV4dExlbmd0aCArIHJlcGxhY2VtZW50VGV4dC5sZW5ndGggKyAxKTtcbiAgY29uc3Qgc2F2aW5ncyA9IHNlbGVjdGVkLmxlbmd0aCAqIChjYW5kaWRhdGUudGV4dExlbmd0aCAtIHJlcGxhY2VtZW50VGV4dC5sZW5ndGgpIC0gZGVmaW5pdGlvbkNvc3Q7XG5cbiAgaWYgKCFvcHRpb25zLmFnZ3Jlc3NpdmUgJiYgc2F2aW5ncyA8PSAwKSB7XG4gICAgcmVsZWFzZU1hcmtzKHBlclNlZ21lbnRVc2VkLCBtYXJrcyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzdGF0cy5uZXh0VmFyaWFibGUgKz0gMTtcbiAgc3RhdHMudG90YWxSZXBsYWNlbWVudHMgKz0gc2VsZWN0ZWQubGVuZ3RoO1xuICBzdGF0cy50b3RhbFRva2VuU2F2aW5ncyArPSBzZWxlY3RlZC5sZW5ndGggKiAoY2FuZGlkYXRlLnRva2VuQ291bnQgLSAxKSAtIDE7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIHNlbGVjdGVkLFxuICAgIGNhbmRpZGF0ZSxcbiAgICBzYXZpbmdzLFxuICB9O1xufVxuXG5mdW5jdGlvbiBjaG9vc2VDYW5kaWRhdGVzKGNhbmRpZGF0ZXMsIHBlclNlZ21lbnRVc2VkLCBvcHRpb25zLCBzdGF0cykge1xuICBjb25zdCBjaG9zZW4gPSBbXTtcbiAgY29uc3Qgb3JkZXJlZCA9IHNvcnRDYW5kaWRhdGVzKGNhbmRpZGF0ZXMsIG9wdGlvbnMpO1xuICBvcmRlcmVkLmZvckVhY2goY2FuZGlkYXRlID0+IHtcbiAgICBjb25zdCBwaWNrZWQgPSBwaWNrQ2FuZGlkYXRlKGNhbmRpZGF0ZSwgcGVyU2VnbWVudFVzZWQsIG9wdGlvbnMsIHN0YXRzKTtcbiAgICBpZiAoIXBpY2tlZCkgcmV0dXJuO1xuXG4gICAgY2hvc2VuLnB1c2gocGlja2VkKTtcbiAgfSk7XG4gIHJldHVybiBjaG9zZW47XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRGVmaW5pdGlvbnMoY2hvc2VuLCBzZWdtZW50cykge1xuICByZXR1cm4gY2hvc2VuLm1hcChpdGVtID0+IHtcbiAgICBjb25zdCBmaXJzdCA9IGl0ZW0uc2VsZWN0ZWRbMF07XG4gICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzW2ZpcnN0LnNlZ21lbnRJZF07XG4gICAgY29uc3QgZXhwcmVzc2lvbiA9IHNlZ21lbnQudG9rZW5zXG4gICAgICAuc2xpY2UoZmlyc3Quc3RhcnQsIGZpcnN0LnN0YXJ0ICsgZmlyc3QubGVuZ3RoKVxuICAgICAgLm1hcCh0b2tlblRleHQpXG4gICAgICAuam9pbignICcpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IGAlJHtpdGVtLm5hbWV9YCxcbiAgICAgIGV4cHJlc3Npb24sXG4gICAgICBsaW5lOiBgJSR7aXRlbS5uYW1lfSAke2V4cHJlc3Npb259YCxcbiAgICAgIHJlcGxhY2VtZW50czogaXRlbS5zZWxlY3RlZC5sZW5ndGgsXG4gICAgICBzYXZpbmdzOiBpdGVtLnNhdmluZ3MsXG4gICAgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5UmVwbGFjZW1lbnRzKHBhcnNlZCwgY2hvc2VuKSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50c0J5TGluZSA9IG5ldyBNYXAoKTtcblxuICBjaG9zZW4uZm9yRWFjaChpdGVtID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IHtcbiAgICAgIHR5cGU6ICdwYXJhbScsXG4gICAgICB2YWx1ZTogYCUke2l0ZW0ubmFtZX1gLFxuICAgIH07XG5cbiAgICBpdGVtLnNlbGVjdGVkLmZvckVhY2gob2NjdXJyZW5jZSA9PiB7XG4gICAgICBjb25zdCBzZWdtZW50ID0gcGFyc2VkLnNlZ21lbnRzW29jY3VycmVuY2Uuc2VnbWVudElkXTtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gc2VnbWVudC5zdGFydCArIG9jY3VycmVuY2Uuc3RhcnQ7XG4gICAgICBjb25zdCBlbmQgPSBzZWdtZW50LnN0YXJ0ICsgb2NjdXJyZW5jZS5zdGFydCArIG9jY3VycmVuY2UubGVuZ3RoO1xuXG4gICAgICBjb25zdCBsaXN0ID0gcmVwbGFjZW1lbnRzQnlMaW5lLmdldChzZWdtZW50LmxpbmUpIHx8IFtdO1xuICAgICAgbGlzdC5wdXNoKHsgc3RhcnQsIGVuZCwgdG9rZW4gfSk7XG4gICAgICByZXBsYWNlbWVudHNCeUxpbmUuc2V0KHNlZ21lbnQubGluZSwgbGlzdCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IG91dExpbmVzID0gcGFyc2VkLmxpbmVzLnNsaWNlKCk7XG5cbiAgcmVwbGFjZW1lbnRzQnlMaW5lLmZvckVhY2goKHJlcGxhY2VtZW50cywgbGluZU51bWJlcikgPT4ge1xuICAgIGNvbnN0IGVudHJ5ID0gcGFyc2VkLmxpbmVFbnRyaWVzLmdldChsaW5lTnVtYmVyKTtcbiAgICBpZiAoIWVudHJ5KSByZXR1cm47XG5cbiAgICBjb25zdCBsaW5lVG9rZW5zID0gZW50cnkudG9rZW5zLnNsaWNlKCk7XG4gICAgcmVwbGFjZW1lbnRzXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5zdGFydCAtIGEuc3RhcnQpXG4gICAgICAuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgbGluZVRva2Vucy5zcGxpY2UoaXRlbS5zdGFydCwgaXRlbS5lbmQgLSBpdGVtLnN0YXJ0LCBpdGVtLnRva2VuKTtcbiAgICAgIH0pO1xuXG4gICAgb3V0TGluZXNbbGluZU51bWJlcl0gPSBgJHtlbnRyeS5pbmRlbnR9JHt0b2tlbnNUb1RleHQobGluZVRva2Vucyl9JHtlbnRyeS5jb21tZW50fWA7XG4gIH0pO1xuXG4gIHJldHVybiBvdXRMaW5lcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0RGVmaW5pdGlvbnMobGluZXMsIGRlZmluaXRpb25zKSB7XG4gIGlmICghZGVmaW5pdGlvbnMubGVuZ3RoKSByZXR1cm4gbGluZXM7XG5cbiAgY29uc3QgZGVmaW5pdGlvbkxpbmVzID0gZGVmaW5pdGlvbnMubWFwKGl0ZW0gPT4gaXRlbS5saW5lKTtcbiAgbGV0IGluc2VydEF0ID0gMDtcblxuICB3aGlsZSAoaW5zZXJ0QXQgPCBsaW5lcy5sZW5ndGgpIHtcbiAgICBjb25zdCB7IGNvZGUgfSA9IHN0cmlwQ29tbWVudChsaW5lc1tpbnNlcnRBdF0pO1xuICAgIGNvbnN0IGNsZWFuID0gY29kZS50cmltKCk7XG5cbiAgICBpZiAoIWNsZWFuIHx8IGNsZWFuLmNoYXJBdCgpID09PSAnOycgfHwgY2xlYW4uY2hhckF0KCkgPT09ICclJykge1xuICAgICAgaW5zZXJ0QXQgKz0gMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGJyZWFrO1xuICB9XG5cbiAgY29uc3Qgb3V0cHV0ID0gbGluZXMuc2xpY2UoKTtcbiAgb3V0cHV0LnNwbGljZShpbnNlcnRBdCwgMCwgLi4uZGVmaW5pdGlvbkxpbmVzKTtcbiAgcmV0dXJuIG91dHB1dDtcbn1cblxuZnVuY3Rpb24gcGFyc2VFeGlzdGluZ1ZhcmlhYmxlSW5kZXhlcyhhc3QpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGFzdC5kYXRhIHx8IHt9KVxuICAgIC5maWx0ZXIobmFtZSA9PiAvXiVjXFxkKyQvLnRlc3QobmFtZSkpXG4gICAgLm1hcChuYW1lID0+IHBhcnNlSW50KG5hbWUuc2xpY2UoMiksIDEwKSlcbiAgICAuZmlsdGVyKG5hbWUgPT4gTnVtYmVyLmlzRmluaXRlKG5hbWUpKTtcbn1cblxuZnVuY3Rpb24gc2FmZU1lcmdlKGN0eCkge1xuICB0cnkge1xuICAgIHJldHVybiBtZXJnZShjdHgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzc0R1Yihzb3VyY2UsIG9wdHMgPSB7fSkge1xuICBjb25zdCBvcHRpb25zID0ge1xuICAgIC4uLkRFRkFVTFRfT1BUSU9OUyxcbiAgICAuLi5vcHRzLFxuICAgIG1pbk9jY3VycmVuY2VzOiB0b0ludChvcHRzLm1pbk9jY3VycmVuY2VzLCBERUZBVUxUX09QVElPTlMubWluT2NjdXJyZW5jZXMpLFxuICAgIG1pblNlcXVlbmNlTGVuZ3RoOiB0b0ludChvcHRzLm1pblNlcXVlbmNlTGVuZ3RoLCBERUZBVUxUX09QVElPTlMubWluU2VxdWVuY2VMZW5ndGgpLFxuICB9O1xuXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVTb3VyY2Uoc291cmNlKTtcbiAgY29uc3Qgc291cmNlQXN0ID0gcGFyc2Uobm9ybWFsaXplZCk7XG5cbiAgY29uc3QgcGFyc2VkID0gcGFyc2VDbGlwTGluZXMobm9ybWFsaXplZCk7XG4gIGNvbnN0IGV4aXN0aW5nID0gcGFyc2VFeGlzdGluZ1ZhcmlhYmxlSW5kZXhlcyhzb3VyY2VBc3QpO1xuICBjb25zdCBuZXh0VmFyaWFibGUgPSBNYXRoLm1heChcbiAgICBvcHRpb25zLm1heFZhcmlhYmxlSW5kZXgsXG4gICAgZXhpc3RpbmcubGVuZ3RoID8gTWF0aC5tYXgoLi4uZXhpc3RpbmcpICsgMSA6IG9wdGlvbnMubWF4VmFyaWFibGVJbmRleCxcbiAgKTtcblxuICBjb25zdCBzdGF0cyA9IHtcbiAgICBuZXh0VmFyaWFibGUsXG4gICAgdG90YWxSZXBsYWNlbWVudHM6IDAsXG4gICAgdG90YWxUb2tlblNhdmluZ3M6IDAsXG4gICAgdmFyaWFibGVzOiAwLFxuICB9O1xuXG4gIGNvbnN0IGNhbmRpZGF0ZXMgPSBjb2xsZWN0Q2FuZGlkYXRlcyhwYXJzZWQuc2VnbWVudHMsIG9wdGlvbnMubWluU2VxdWVuY2VMZW5ndGgpO1xuICBjb25zdCB1c2VkQnlTZWdtZW50ID0ge307XG4gIGNvbnN0IGNob3NlbkxpdGVyYWxzID0gY2hvb3NlQ2FuZGlkYXRlcyhjYW5kaWRhdGVzLmxpdGVyYWxzLCB1c2VkQnlTZWdtZW50LCBvcHRpb25zLCBzdGF0cyk7XG4gIGNvbnN0IGNob3NlblNlcXVlbmNlcyA9IGNob29zZUNhbmRpZGF0ZXMoY2FuZGlkYXRlcy5zZXF1ZW5jZXMsIHVzZWRCeVNlZ21lbnQsIG9wdGlvbnMsIHN0YXRzKTtcbiAgY29uc3QgY2hvc2VuID0gWy4uLmNob3NlbkxpdGVyYWxzLCAuLi5jaG9zZW5TZXF1ZW5jZXNdO1xuXG4gIGlmICghY2hvc2VuLmxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICBzb3VyY2U6IG5vcm1hbGl6ZWQsXG4gICAgICBkZWZpbml0aW9uczogW10sXG4gICAgICBzdW1tYXJ5OiB7XG4gICAgICAgIHJlcGxhY2VtZW50czogMCxcbiAgICAgICAgdmFyaWFibGVzOiAwLFxuICAgICAgICB0b2tlblNhdmluZ3M6IDAsXG4gICAgICAgIGNoYXJTYXZpbmdzOiAwLFxuICAgICAgfSxcbiAgICAgIG1lcmdlZDogc2FmZU1lcmdlKHNvdXJjZUFzdCksXG4gICAgICBtZXJnZWRDb21wcmVzc2VkOiBudWxsLFxuICAgICAgaGFzQ29tcHJlc3NlZDogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGRlZmluaXRpb25zID0gYnVpbGREZWZpbml0aW9ucyhjaG9zZW4sIHBhcnNlZC5zZWdtZW50cyk7XG4gIGNvbnN0IHJlcGxhY2VkTGluZXMgPSBhcHBseVJlcGxhY2VtZW50cyhwYXJzZWQsIGNob3Nlbik7XG4gIGNvbnN0IHdpdGhEZWZpbml0aW9ucyA9IGluc2VydERlZmluaXRpb25zKHJlcGxhY2VkTGluZXMsIGRlZmluaXRpb25zKTtcbiAgY29uc3Qgb3V0cHV0ID0gbm9ybWFsaXplU291cmNlKHdpdGhEZWZpbml0aW9ucy5qb2luKCdcXG4nKSk7XG5cbiAgcmV0dXJuIHtcbiAgICBzb3VyY2U6IG91dHB1dCxcbiAgICBkZWZpbml0aW9ucyxcbiAgICBzdW1tYXJ5OiB7XG4gICAgICByZXBsYWNlbWVudHM6IHN0YXRzLnRvdGFsUmVwbGFjZW1lbnRzLFxuICAgICAgdmFyaWFibGVzOiBkZWZpbml0aW9ucy5sZW5ndGgsXG4gICAgICB0b2tlblNhdmluZ3M6IHN0YXRzLnRvdGFsVG9rZW5TYXZpbmdzLFxuICAgICAgY2hhclNhdmluZ3M6IE1hdGgubWF4KDAsIG5vcm1hbGl6ZWQubGVuZ3RoIC0gb3V0cHV0Lmxlbmd0aCksXG4gICAgfSxcbiAgICBtZXJnZWQ6IHNhZmVNZXJnZShzb3VyY2VBc3QpLFxuICAgIG1lcmdlZENvbXByZXNzZWQ6IHNhZmVNZXJnZShw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
