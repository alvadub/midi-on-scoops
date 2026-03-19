import { parseArrangementBody } from "../lib/arrangement.js";
function esc(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function span(cls, value, attrs = {}) {
  const dataAttrs = Object.entries(attrs).map(([key, attrValue]) => {
    const kebabKey = String(key).replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    return ` data-${kebabKey}="${esc(attrValue)}"`;
  }).join("");
  return `<span class="${cls}"${dataAttrs}>${esc(value)}</span>`;
}
function classify(token) {
  if (!token) return null;
  if (token === "<") return "tok-inherit";
  if (token === "%") return "tok-var-ref";
  if (token.charAt(0) === "%") return "tok-var-ref";
  if (token.charAt(0) === "&") return "tok-var-ref";
  if (/^x\d+$/.test(token)) return "tok-repeat";
  if (/^[x_\-[\]]+$/.test(token)) return "tok-pattern";
  if (/^(?:[a-zA-Z_]\w*)?\(\d+\s*,\s*\d+(?:\s*,\s*-?\d+)?\)$/.test(token)) return "tok-pattern";
  if (/^[a-gA-G][#b]?\d+$/.test(token)) return "tok-note";
  if (token.includes("|")) return "tok-chord";
  if (/^(major|minor|phrygian|dorian|mixolydian|locrian|lydian)$/i.test(token)) return "tok-mode";
  if (/^(?:I|II|III|IV|V|VI|VII|i|ii|iii|iv|v|vi|vii)°?$/.test(token)) return "tok-progression";
  if (/^(?:\+\+|\.\.|>>|\*\*)$/.test(token)) return "tok-operator";
  if (/^#\d+$/.test(token)) return "tok-channel";
  if (/^-?\d+(\.\d+)?$/.test(token)) return "tok-number";
  return null;
}
function renderToken(token) {
  const cls = classify(token);
  if (!cls) return esc(token);
  if (cls === "tok-inherit") return span(cls, token, { inherit: "1" });
  if (cls === "tok-var-ref" && token !== "%") return span(cls, token, { var: token });
  if (cls === "tok-var-ref" && token === "%") return span(cls, token, { repeatLast: "1" });
  if (cls === "tok-channel") return span(cls, token, { instrument: token.slice(1) });
  if (cls === "tok-mode") return span(cls, token, { mode: token.toLowerCase() });
  if (cls === "tok-pattern") {
    const chars = token.split("").map((ch, idx) => `<span class="tok-pattern-step" data-pattern-step="${idx}" data-pattern-char="${esc(ch)}">${esc(ch)}</span>`).join("");
    return `<span class="${cls}" data-pattern="${esc(token)}">${chars}</span>`;
  }
  if (cls === "tok-note") return span(cls, token, { note: token });
  if (cls === "tok-chord") return span(cls, token, { chord: token });
  if (cls === "tok-number") return span(cls, token, { number: token });
  if (cls === "tok-repeat") return span(cls, token, { repeat: token.slice(1) });
  return span(cls, token);
}
function renderArrangementToken(part, tokenMeta) {
  const attrs = {};
  if (tokenMeta && Number.isFinite(tokenMeta.order)) attrs.arrOrder = tokenMeta.order;
  if (tokenMeta && tokenMeta.blockId) attrs.arrBlockId = tokenMeta.blockId;
  if (tokenMeta && tokenMeta.blockLive) attrs.arrBlockLive = "1";
  if (tokenMeta && Number.isFinite(tokenMeta.blockStartOrder)) attrs.arrBlockStartOrder = tokenMeta.blockStartOrder;
  if (tokenMeta && Number.isFinite(tokenMeta.blockEndOrder)) attrs.arrBlockEndOrder = tokenMeta.blockEndOrder;
  if (tokenMeta && tokenMeta.kind === "section") {
    return span("tok-section tok-arr-token", part, { ...attrs, section: part });
  }
  if (tokenMeta && tokenMeta.kind === "repeat-last") {
    return span("tok-var-ref tok-arr-token tok-arr-repeat", part, { ...attrs, repeatLast: "1" });
  }
  if (tokenMeta && tokenMeta.kind === "repeat") {
    const n = /^x(\d+)$/.test(part) ? part.slice(1) : "";
    return span("tok-repeat tok-arr-token tok-arr-repeat", part, { ...attrs, repeat: n });
  }
  if (tokenMeta && (tokenMeta.kind === "block-open" || tokenMeta.kind === "block-close")) {
    return span("tok-operator tok-arr-token tok-arr-bracket", part, attrs);
  }
  return renderToken(part);
}
function isDegreeToken(token) {
  return /^\d+(?:\.\.\d+)?$/.test(token);
}
function renderTokens(text) {
  const parts = text.split(/(\s+)/);
  let degreeContext = false;
  return parts.map((part) => {
    if (/\s+/.test(part) || !part) return part;
    if (degreeContext && isDegreeToken(part)) {
      return span("tok-number tok-degree", part, { degree: part });
    }
    degreeContext = part === "**";
    return renderToken(part);
  }).join("");
}
function splitComment(line) {
  const value = String(line || "");
  const semicolonIndex = value.indexOf(";");
  const dashMatch = value.match(/\s--\s/);
  const dashIndex = dashMatch && typeof dashMatch.index === "number" && /\S/.test(value.slice(0, dashMatch.index)) ? dashMatch.index : -1;
  if (semicolonIndex < 0 && dashIndex < 0) return [value, ""];
  if (semicolonIndex < 0) return [value.slice(0, dashIndex), value.slice(dashIndex)];
  if (dashIndex < 0) return [value.slice(0, semicolonIndex), value.slice(semicolonIndex)];
  const idx = Math.min(semicolonIndex, dashIndex);
  return [value.slice(0, idx), value.slice(idx)];
}
function renderBase(base, arrangementState = null) {
  if (!base.trim()) return esc(base);
  if (/^\s*##\s+/.test(base)) {
    return base.replace(/^(\s*##\s+)(.*)$/, (_, p1, p2) => `${esc(p1)}${span("tok-subtrack", p2)}`);
  }
  if (/^\s*#\s+/.test(base)) {
    return base.replace(/^(\s*#\s+)(.*)$/, (_, p1, p2) => `${esc(p1)}${span("tok-track", p2)}`);
  }
  if (/^\s*@/.test(base)) {
    const inheritMatch = base.match(/^(\s*)(@[^\s]+)(\s*)<(\s*)([^\s]+)(.*)$/);
    if (inheritMatch) {
      const [, indent, sourceToken, leftGap, rightGap, targetToken, rest] = inheritMatch;
      const sourceName = sourceToken.slice(1);
      return `${esc(indent)}${span("tok-section-head", sourceToken, { sectionHead: sourceName })}${esc(leftGap)}${span("tok-inherit", "<", {
        inherit: "1",
        inheritSource: sourceName,
        inheritTarget: targetToken
      })}${esc(rightGap)}${esc(targetToken)}${renderTokens(rest)}`;
    }
    const headerMatch = base.match(/^(\s*)(@[^\s]+)(.*)$/);
    if (headerMatch) {
      const [, indent, sourceToken, rest] = headerMatch;
      return `${esc(indent)}${span("tok-section-head", sourceToken, { sectionHead: sourceToken.slice(1) })}${renderTokens(rest)}`;
    }
    return renderTokens(base);
  }
  if (/^\s*>/.test(base)) {
    const indent = esc(base.match(/^\s*/)[0]);
    const tail = base.trimStart().slice(1);
    const lead = tail.match(/^\s*/)[0] || "";
    const body = tail.slice(lead.length);
    const parsed = parseArrangementBody(body, arrangementState ? {
      orderOffset: arrangementState.orderOffset,
      blockOffset: arrangementState.blockOffset
    } : void 0);
    if (arrangementState) {
      arrangementState.orderOffset = parsed.nextOrder;
      arrangementState.blockOffset = parsed.nextBlock;
    }
    let tokenIndex = 0;
    const rendered = (body.match(/\s+|\[|\]|[^\s\[\]]+/g) || []).map((part) => {
      if (!part || /^\s+$/.test(part)) return part;
      const tokenMeta = parsed.tokens[tokenIndex] || null;
      tokenIndex += 1;
      return renderArrangementToken(part, tokenMeta);
    }).join("");
    return `${indent}${span("tok-arrangement", ">")}${esc(lead)}${rendered}`;
  }
  if (/^\s*[%&][^\s]+\s+/.test(base)) {
    return base.replace(/^(\s*)([%&][^\s]+)(\s*)(.*)$/, (_, i, v, s, rest) => `${esc(i)}${span("tok-var-def", v, { var: v })}${esc(s)}${renderTokens(rest)}`);
  }
  if (/^\s*#\d+/.test(base)) {
    let velocityTagged = false;
    return base.split(/(\s+)/).map((part) => {
      if (/^\s*$/.test(part)) return part;
      const cls = classify(part);
      if (cls === "tok-number" && !velocityTagged) {
        velocityTagged = true;
        return span(cls, part, { velocity: part });
      }
      return renderToken(part);
    }).join("");
  }
  return renderTokens(base);
}
function highlight(input) {
  const arrangementState = { orderOffset: 0, blockOffset: 0 };
  return String(input || "").split(/\r?\n/).map((line, lineNumber) => {
    const [base, comment] = splitComment(line);
    const rendered = renderBase(base, arrangementState);
    const content = !comment ? rendered : `${rendered}${span("tok-comment", comment)}`;
    return `<span class="hl-line" data-line="${lineNumber}">${content}</span>`;
  }).join("");
}
const DIATONIC = { c: 0, d: 1, e: 2, f: 3, g: 4, a: 5, b: 6 };
const E4_DIATONIC = 4 * 7 + 2;
function normalizeNote(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function noteToPos(noteStr) {
  const m = noteStr.match(/^([a-gA-G])([#b]?)(\d+)$/);
  if (!m) return null;
  const diatPos = parseInt(m[3], 10) * 7 + DIATONIC[m[1].toLowerCase()];
  return diatPos - E4_DIATONIC;
}
function noteToMidi(noteStr) {
  const m = String(noteStr || "").match(/^([a-gA-G])([#b]?)(\d+)$/);
  if (!m) return null;
  const SEMITONES = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 };
  const base = SEMITONES[m[1].toLowerCase()];
  const alt = m[2] === "#" ? 1 : m[2] === "b" ? -1 : 0;
  const oct = parseInt(m[3], 10);
  if (Number.isNaN(oct)) return null;
  return (oct + 1) * 12 + base + alt;
}
function buildStaffSVG(notes, mode = "chord") {
  if (!notes || notes.length === 0) return "";
  const sorted = notes.map((n) => ({ note: n, pos: noteToPos(n) })).filter((n) => n.pos !== null).sort((a, b) => a.pos - b.pos);
  if (sorted.length === 0) return "";
  const W = 200;
  const H = 130;
  const CENTER_Y = 66;
  const clefByRange = (() => {
    const avg = sorted.reduce((sum, n) => sum + n.pos, 0) / sorted.length;
    if (avg <= -6) return { symbol: "\u{1D122}", basePos: -8, size: 48, y: CENTER_Y + 16 };
    if (avg >= 2) return { symbol: "\u{1D11E}", basePos: 4, size: 52, y: CENTER_Y + 10 };
    return { symbol: "\u{1D121}", basePos: -2, size: 46, y: CENTER_Y + 14 };
  })();
  const toY = (absPos) => CENTER_Y - (absPos - clefByRange.basePos) * 5;
  let svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`;
  svg += "<style>.staff-line,.ledger{stroke:#fff;stroke-width:1}</style>";
  for (let i = 0; i < 5; i += 1) {
    const y = CENTER_Y - 20 + i * 10;
    svg += `<line class="staff-line" x1="0" y1="${y}" x2="${W}" y2="${y}"/>`;
  }
  svg += `<text x="8" y="${clefByRange.y}" fill="#fff" font-size="${clefByRange.size}" font-family="serif">${clefByRange.symbol}</text>`;
  const isScale = mode === "scale";
  const isSingle = mode === "single";
  const noteCount = sorted.length;
  let noteX;
  if (isScale) {
    const step = noteCount > 1 ? 148 / (noteCount - 1) : 0;
    sorted.forEach((n, i) => {
      n.x = 42 + i * step;
    });
  } else if (isSingle) {
    sorted[0].x = 100;
  } else {
    noteX = 95;
    for (let i = 0; i < sorted.length; i += 1) {
      const curr = sorted[i];
      const prev = i > 0 ? sorted[i - 1] : null;
      curr.x = noteX;
      if (prev && Math.abs(curr.pos - prev.pos) === 1) {
        curr.x = prev.x + 11;
      }
    }
  }
  sorted.forEach((n) => {
    const y = toY(n.pos);
    const localPos = n.pos - clefByRange.basePos;
    const m = n.note.match(/^([a-gA-G])([#b]?)(\d+)$/);
    const accidental = m ? m[2] : "";
    for (let p = 6; p <= localPos; p += 2) {
      const ly = CENTER_Y - p * 5;
      svg += `<line class="ledger" x1="${n.x - 9}" y1="${ly}" x2="${n.x + 9}" y2="${ly}"/>`;
    }
    for (let p = -6; p >= localPos; p -= 2) {
      const ly = CENTER_Y - p * 5;
      svg += `<line class="ledger" x1="${n.x - 9}" y1="${ly}" x2="${n.x + 9}" y2="${ly}"/>`;
    }
    if (isScale) {
      svg += `<ellipse cx="${n.x}" cy="${y}" rx="5" ry="4" fill="none" stroke="#fff" stroke-width="1.2" transform="rotate(-15 ${n.x} ${y})"/>`;
    } else if (isSingle) {
      svg += `<ellipse cx="${n.x}" cy="${y}" rx="5" ry="4" fill="#fff" transform="rotate(-15 ${n.x} ${y})"/>`;
    } else {
      svg += `<ellipse cx="${n.x}" cy="${y}" rx="5" ry="4" fill="#fff" transform="rotate(-15 ${n.x} ${y})"/>`;
    }
    if (accidental === "#") {
      svg += `<text x="${n.x - 14}" y="${y + 4}" fill="#fff" font-size="10">\u266F</text>`;
    } else if (accidental === "b") {
      svg += `<text x="${n.x - 12}" y="${y + 4}" fill="#fff" font-size="11">\u266D</text>`;
    }
  });
  if (!isScale && !isSingle && sorted.length > 0) {
    const lowestPos = sorted[0].pos - clefByRange.basePos;
    const highestPos = sorted[sorted.length - 1].pos - clefByRange.basePos;
    let stemDir = lowestPos <= 0 ? "up" : "down";
    if (stemDir === "up") {
      const highY = CENTER_Y - highestPos * 5;
      const highX = sorted[sorted.length - 1].x;
      svg += `<line x1="${highX + 5}" y1="${highY}" x2="${highX + 5}" y2="${highY - 28}" stroke="#fff" stroke-width="1.2"/>`;
    } else {
      const lowY = CENTER_Y - lowestPos * 5;
      const lowX = sorted[0].x;
      svg += `<line x1="${lowX - 5}" y1="${lowY}" x2="${lowX - 5}" y2="${lowY + 28}" stroke="#fff" stroke-width="1.2"/>`;
    }
  }
  svg += "</svg>";
  return svg;
}
function buildPatternPreviewMarkup(pattern) {
  const symbols = String(pattern || "").split("");
  if (!symbols.length) return null;
  const cells = symbols.map((ch, i) => {
    const cls = ch === "x" || ch === "X" ? "is-pulse" : ch === "-" ? "is-rest" : ch === "_" ? "is-hold" : "is-sub";
    const group = i % 4 === 0 ? "is-group" : "";
    return `<span class="pp-cell ${cls} ${group}" aria-label="step ${i + 1}"></span>`;
  }).join("");
  return `<div class="pattern-preview" aria-label="Pattern preview"><div class="pp-grid">${cells}</div></div>`;
}
function describePattern(pattern) {
  const symbols = String(pattern || "").split("");
  if (!symbols.length) return "Empty pattern";
  const pulseIdx = [];
  let holds = 0;
  let rests = 0;
  symbols.forEach((ch, i) => {
    const low = ch.toLowerCase();
    if (low === "x") pulseIdx.push(i);
    else if (ch === "_") holds += 1;
    else if (ch === "-") rests += 1;
  });
  if (pulseIdx.length === 0) {
    if (rests === symbols.length || holds === 0) return `All silence (${symbols.length} steps)`;
    return `No pulses (${holds} holds, ${rests} rests)`;
  }
  const parts = [`${pulseIdx.length} pulse${pulseIdx.length !== 1 ? "s" : ""} in ${symbols.length} steps`];
  if (pulseIdx.length > 1) {
    const gaps = pulseIdx.slice(1).map((idx, i) => idx - pulseIdx[i]);
    const even = gaps.every((g) => g === gaps[0]);
    if (even) {
      const n = gaps[0];
      if (n === 2) parts.push("in 2nds");
      else if (n === 3) parts.push("in 3rds");
      else if (n === 4) parts.push("in 4ths");
      else parts.push(`every ${n} steps`);
    }
  }
  if (rests > 0) parts.push(`${rests} rests`);
  return parts.join(" \xB7 ");
}
function placeTooltip(tipEl, x, y) {
  const margin = 8;
  const offset = 12;
  tipEl.hidden = false;
  tipEl.style.left = "-9999px";
  tipEl.style.top = "-9999px";
  const rect = tipEl.getBoundingClientRect();
  const width = Math.min(rect.width || 320, Math.max(0, window.innerWidth - margin * 2));
  const height = Math.min(rect.height || 180, Math.max(0, window.innerHeight - margin * 2));
  let left = x + offset;
  let top = y + offset;
  if (left + width > window.innerWidth - margin) left = window.innerWidth - margin - width;
  if (top + height > window.innerHeight - margin) top = window.innerHeight - margin - height;
  left = Math.max(margin, left);
  top = Math.max(margin, top);
  tipEl.style.left = `${left}px`;
  tipEl.style.top = `${top}px`;
}
function charOffsetOfElement(root, target, sourceText = "") {
  if (!root || !target || !root.contains(target)) return -1;
  const lineEl = target.closest("[data-line]");
  const lineNumber = lineEl ? parseInt(lineEl.dataset.line, 10) : 0;
  if (!lineEl || Number.isNaN(lineNumber)) return -1;
  const lineRange = document.createRange();
  lineRange.selectNodeContents(lineEl);
  lineRange.setEndBefore(target);
  const offsetInLine = lineRange.toString().length;
  const sourceLines = String(sourceText).split(/\r?\n/);
  let total = offsetInLine;
  for (let i = 0; i < lineNumber; i++) {
    total += (sourceLines[i] ? sourceLines[i].length : 0) + 1;
  }
  return total;
}
function tokenAtCursor(text, cursorPos) {
  const src = String(text || "");
  const pos = Math.max(0, Math.min(src.length, cursorPos || 0));
  const lineStart = src.lastIndexOf("\n", Math.max(0, pos - 1)) + 1;
  let lineEnd = src.indexOf("\n", pos);
  if (lineEnd < 0) lineEnd = src.length;
  const lineText = src.slice(lineStart, lineEnd);
  const [base, comment] = splitComment(lineText);
  const commentPos = comment ? lineStart + base.length : -1;
  if (commentPos >= 0 && pos >= commentPos) {
    const value2 = src.slice(commentPos, lineEnd);
    return { type: "tok-comment", value: value2, start: commentPos, end: lineEnd };
  }
  const headerMatch = lineText.match(/^(\s*)(#{1,2})\s+(.+)$/);
  if (headerMatch) {
    const hash = headerMatch[2];
    const body = headerMatch[3];
    const hashStart = lineStart + headerMatch[1].length;
    const bodyStart = lineStart + headerMatch[1].length + hash.length + 1;
    const bodyEnd = bodyStart + body.length;
    if (pos >= hashStart && pos <= bodyEnd) {
      return {
        type: hash === "##" ? "tok-subtrack" : "tok-track",
        value: body,
        start: hashStart,
        end: bodyEnd
      };
    }
  }
  const varDefMatch = lineText.match(/^(\s*)([%&][^\s]+)\b/);
  if (varDefMatch) {
    const tokenStart = lineStart + varDefMatch[1].length;
    const tokenValue = varDefMatch[2];
    const tokenEnd = tokenStart + tokenValue.length;
    if (pos >= tokenStart && pos <= tokenEnd) {
      return {
        type: "tok-var-def",
        value: tokenValue,
        start: tokenStart,
        end: tokenEnd
      };
    }
  }
  let start = pos;
  let end = pos;
  while (start > 0 && !/\s/.test(src[start - 1])) start -= 1;
  while (end < src.length && !/\s/.test(src[end])) end += 1;
  const value = src.slice(start, end);
  if (!value) return null;
  let type = classify(value);
  if (!type && /^@[^\s]+$/.test(value)) type = "tok-section";
  if (!type) type = "tok-unknown";
  return { type, value, start, end };
}
function createEditor(initialText, options = {}) {
  const wrap = document.createElement("div");
  wrap.id = "editor-wrap";
  const gutter = document.createElement("div");
  gutter.id = "editor-gutter";
  gutter.setAttribute("aria-hidden", "true");
  const pre = document.createElement("pre");
  pre.id = "editor-hl";
  pre.setAttribute("aria-hidden", "true");
  const ta = document.createElement("textarea");
  ta.id = "editor";
  ta.spellcheck = false;
  ta.autocomplete = "off";
  ta.value = initialText;
  const tip = document.createElement("div");
  tip.id = "var-tooltip";
  tip.hidden = true;
  tip.innerHTML = '<strong></strong><span class="tooltip-resolved"></span><div class="tooltip-staff"></div>';
  const suggestInput = document.createElement("input");
  suggestInput.id = "suggest-input";
  suggestInput.hidden = true;
  suggestInput.type = "text";
  suggestInput.autocomplete = "off";
  suggestInput.spellcheck = false;
  suggestInput.setAttribute("aria-label", "Completions");
  const suggestMenu = document.createElement("ul");
  suggestMenu.id = "suggest-menu";
  suggestMenu.hidden = true;
  suggestMenu.setAttribute("role", "listbox");
  suggestMenu.setAttribute("aria-label", "Completions");
  const tipTitle = tip.querySelector("strong");
  const tipBody = tip.querySelector(".tooltip-resolved");
  const tipStaff = tip.querySelector(".tooltip-staff");
  const flashTimers = /* @__PURE__ */ new Set();
  let scrubState = null;
  let activeTokens = [];
  let queuedArrangementOrder = null;
  let suggestState = {
    open: false,
    allItems: [],
    items: [],
    activeIndex: 0,
    token: null,
    dismissedToken: null
  };
  let lintReport = null;
  const HISTORY_LIMIT = 200;
  const history = {
    entries: [],
    index: -1,
    applying: false
  };
  const SUGGESTIONS_ENABLED = options.suggestions !== false;
  const MODE_CANDIDATES = ["major", "minor", "dorian", "phrygian", "lydian", "mixolydian", "locrian"];
  const NOTE_CANDIDATES = "ABCDEFG".split("").flatMap((note) => ["", "#", "b"].flatMap((accidental) => [3, 4, 5].map((octave) => `${note}${accidental}${octave}`)));
  const INSTRUMENT_OPTIONS = Array.isArray(options.instrumentOptions) && options.instrumentOptions.length ? options.instrumentOptions : [
    ...Array.from({ length: 128 }, (_, i) => `#${i}`),
    ...Array.from({ length: 128 }, (_, i) => `#${2e3 + i}`)
  ].map((value) => {
    const raw = value.slice(1);
    const title = options.resolveInstrument ? options.resolveInstrument(raw) : null;
    return {
      value,
      label: title ? `${title} (${value})` : value
    };
  });
  const ALL_CANDIDATES = [...NOTE_CANDIDATES, ...MODE_CANDIDATES];
  const tooltipHandlers = [
    options.resolveNote && {
      attr: "note",
      resolve: options.resolveNote,
      notes: (value) => [value],
      staffMode: "single",
      title: (value) => normalizeNote(value)
    },
    options.resolveChord && {
      attr: "chord",
      resolve: options.resolveChord,
      notes: (value) => value.split("|").map(normalizeNote),
      staffMode: "chord",
      title: () => "Chord"
    },
    options.resolveMode && {
      attr: "mode",
      resolve: options.resolveMode,
      notes: options.resolveModeNotes,
      staffMode: "scale",
      title: (value) => value
    },
    options.resolveInstrument && {
      attr: "instrument",
      resolve: options.resolveInstrument,
      title: (value) => `#${value}`
    },
    options.resolveSection && {
      attr: "section",
      resolve: options.resolveSection,
      title: (value) => `@${value}`
    },
    {
      attr: "inherit",
      resolve: (_value, el) => {
        const from = el && el.dataset ? el.dataset.inheritSource : null;
        const to = el && el.dataset ? el.dataset.inheritTarget : null;
        if (from && to) {
          return `Section @${from} inherits from @${to}`;
        }
        return "Inherit/copy from another section";
      },
      title: (_value, el) => {
        const from = el && el.dataset ? el.dataset.inheritSource : null;
        const to = el && el.dataset ? el.dataset.inheritTarget : null;
        return from && to ? `@${from} < @${to}` : "<";
      }
    },
    options.resolveVar && {
      attr: "var",
      resolve: options.resolveVar,
      title: (value) => value
    },
    {
      attr: "repeatLast",
      resolve: () => "Repeats the preceding expression once more",
      title: () => "%"
    },
    options.resolveVelocity && {
      attr: "velocity",
      resolve: options.resolveVelocity,
      title: (v) => `Velocity ${v}`
    },
    {
      attr: "repeat",
      resolve: (v) => {
        const n = parseInt(v, 10);
        return `Plays the preceding sequence ${n} time${n !== 1 ? "s" : ""} in a row`;
      },
      title: (v) => `\xD7${v}`
    },
    {
      attr: "number",
      resolve: () => "Numeric value \u2014 used as velocity, octave, or parameter",
      title: (v) => v
    },
    {
      attr: "degree",
      resolve: (value) => {
        const range = String(value || "").match(/^(\d+)\.\.(\d+)$/);
        if (range) {
          const a = parseInt(range[1], 10);
          const b = parseInt(range[2], 10);
          return `Selects scale degrees ${a} through ${b} from the current root+mode context (**)`;
        }
        const n = parseInt(value, 10);
        if (!Number.isNaN(n)) {
          return `Selects scale degree ${n} from the current root+mode context (**)`;
        }
        return "Selects degrees from the current root+mode context (**)";
      },
      title: (value) => `Degree ${value}`
    },
    {
      attr: "pattern",
      resolve: (value) => `${describePattern(value)}
x = hit  |  - = rest  |  _ = sustain  |  [ ] = subdivide`,
      title: () => "Rhythm pattern",
      visual: (value) => buildPatternPreviewMarkup(value)
    }
  ].filter(Boolean);
  function sync() {
    pre.innerHTML = highlight(ta.value);
    const lineCount = String(ta.value).split(/\r?\n/).length;
    gutter.innerHTML = Array.from({ length: lineCount }, (_, index) => `<span class="editor-ln" data-line="${index + 1}">${index + 1}</span>`).join("");
    syncGutterHeights();
    applyLintMarkers();
    applyLintLineMarkers();
    applyQueuedArrangementToken();
  }
  function syncGutterHeights() {
    const gutterLines = [...gutter.querySelectorAll(".editor-ln[data-line]")];
    const editorLines = [...pre.querySelectorAll(".hl-line[data-line]")];
    if (!pre.isConnected) {
      gutterLines.forEach((lineEl) => {
        lineEl.style.height = "";
      });
      return;
    }
    const count = Math.min(gutterLines.length, editorLines.length);
    for (let i = 0; i < count; i += 1) {
      const h = Math.max(1, editorLines[i].getBoundingClientRect().height);
      gutterLines[i].style.height = `${h}px`;
    }
  }
  function buildLintLineMap() {
    const map = /* @__PURE__ */ new Map();
    if (!lintReport) return map;
    const push = (level, item) => {
      if (!item || !Number.isInteger(item.line) || item.line < 1) return;
      const line = item.line;
      const existing = map.get(line) || { level: "warning", messages: [] };
      if (level === "error") existing.level = "error";
      const prefix = item.rule ? `[${item.rule}] ` : "";
      const text = `${level.toUpperCase()}: ${prefix}${item.message}`;
      if (!existing.messages.includes(text)) existing.messages.push(text);
      map.set(line, existing);
    };
    (lintReport.errors || []).forEach((item) => push("error", item));
    (lintReport.warnings || []).forEach((item) => push("warning", item));
    return map;
  }
  function applyLintLineMarkers() {
    const lineMap = buildLintLineMap();
    const lineNums = gutter.querySelectorAll(".editor-ln[data-line]");
    lineNums.forEach((el) => {
      el.classList.remove("has-lint-error", "has-lint-warning");
      el.removeAttribute("data-lint-level");
      el.removeAttribute("data-lint");
      const line = parseInt(el.dataset.line, 10);
      const info = lineMap.get(line);
      if (!info) return;
      if (info.level === "error") el.classList.add("has-lint-error");
      else el.classList.add("has-lint-warning");
      el.dataset.lintLevel = info.level;
      el.dataset.lint = info.messages.join("\n");
    });
    const lines = pre.querySelectorAll(".hl-line[data-line]");
    lines.forEach((el) => {
      el.classList.remove("has-lint-error", "has-lint-warning");
      el.removeAttribute("data-lint-level");
      el.removeAttribute("data-lint");
      const line = parseInt(el.dataset.line, 10) + 1;
      const info = lineMap.get(line);
      if (!info) return;
      if (info.level === "error") el.classList.add("has-lint-error");
      else el.classList.add("has-lint-warning");
      el.dataset.lintLevel = info.level;
      el.dataset.lint = info.messages.join("\n");
    });
  }
  function buildHistoryEntry() {
    return {
      value: ta.value,
      start: ta.selectionStart,
      end: ta.selectionEnd
    };
  }
  function pushHistoryEntry() {
    if (history.applying) return;
    const next = buildHistoryEntry();
    const current = history.entries[history.index];
    if (current && current.value === next.value && current.start === next.start && current.end === next.end) {
      return;
    }
    if (history.index < history.entries.length - 1) {
      history.entries.splice(history.index + 1);
    }
    history.entries.push(next);
    if (history.entries.length > HISTORY_LIMIT) {
      history.entries.shift();
    }
    history.index = history.entries.length - 1;
  }
  function runInputEffects() {
    sync();
    hideTooltip();
    updateSuggestions();
    if (!scrubState) emitCursorToken();
    if (options.onInput) options.onInput(ta.value);
  }
  function applyHistoryEntry(entry) {
    if (!entry) return;
    history.applying = true;
    ta.value = entry.value;
    ta.selectionStart = entry.start;
    ta.selectionEnd = entry.end;
    history.applying = false;
    runInputEffects();
  }
  function undoHistory() {
    if (history.index <= 0) return false;
    history.index -= 1;
    applyHistoryEntry(history.entries[history.index]);
    return true;
  }
  function redoHistory() {
    if (history.index >= history.entries.length - 1) return false;
    history.index += 1;
    applyHistoryEntry(history.entries[history.index]);
    return true;
  }
  function applyLintMarkers() {
    pre.querySelectorAll(".tok-error").forEach((el) => {
      el.classList.remove("tok-error");
      if (el.dataset) delete el.dataset.lint;
    });
    const mark = (el, reason) => {
      if (!el) return;
      el.classList.add("tok-error");
      if (el.dataset) el.dataset.lint = reason || "Invalid token value";
    };
    const source = String(ta.value || "");
    const varDefs = /* @__PURE__ */ new Set();
    const sectionDefs = /* @__PURE__ */ new Set();
    source.split(/\r?\n/).forEach((rawLine) => {
      const noComment = rawLine.replace(/;.*$/, "");
      const varMatch = noComment.match(/^\s*(%[^\s]+)\s+/);
      if (varMatch) varDefs.add(varMatch[1]);
      const sectionMatch = noComment.match(/^\s*@([^\s<]+)/);
      if (sectionMatch) sectionDefs.add(sectionMatch[1]);
    });
    pre.querySelectorAll(".tok-channel[data-instrument]").forEach((el) => {
      const raw = el.dataset.instrument;
      const n = parseInt(raw, 10);
      if (Number.isNaN(n)) {
        mark(el, "Invalid instrument number");
        return;
      }
      if (options.resolveInstrument && !options.resolveInstrument(raw)) {
        mark(el, `Unknown instrument #${raw}`);
      }
    });
    pre.querySelectorAll("[data-velocity]").forEach((el) => {
      const n = parseInt(el.dataset.velocity, 10);
      if (Number.isNaN(n) || n < 0 || n > 127) {
        mark(el, "Velocity must be between 0 and 127");
      }
    });
    pre.querySelectorAll(".tok-repeat[data-repeat]").forEach((el) => {
      const n = parseInt(el.dataset.repeat, 10);
      if (Number.isNaN(n) || n < 1) {
        mark(el, "Repeat must be >= 1");
      }
    });
    pre.querySelectorAll(".tok-degree[data-degree]").forEach((el) => {
      const raw = String(el.dataset.degree || "");
      const range = raw.match(/^(\d+)\.\.(\d+)$/);
      if (range) {
        const a = parseInt(range[1], 10);
        const b = parseInt(range[2], 10);
        if (a < 1 || b < 1) {
          mark(el, "Degree range must be >= 1");
          return;
        }
        if (a > b) {
          mark(el, "Degree range must be ascending");
        }
        return;
      }
      const n = parseInt(raw, 10);
      if (Number.isNaN(n) || n < 1) {
        mark(el, "Degree must be >= 1");
      }
    });
    pre.querySelectorAll(".tok-note[data-note]").forEach((el) => {
      const midi = noteToMidi(el.dataset.note);
      if (midi == null || midi < 0 || midi > 127) {
        mark(el, "Note out of MIDI range (0..127)");
      }
    });
    pre.querySelectorAll(".tok-var-ref[data-var]").forEach((el) => {
      const name = el.dataset.var;
      if (!name || name === "%") return;
      if (!varDefs.has(name)) {
        mark(el, `Unknown variable ${name}`);
      }
    });
    pre.querySelectorAll(".tok-arr-token.tok-section[data-section]").forEach((el) => {
      const name = el.dataset.section;
      if (!sectionDefs.has(name)) {
        mark(el, `Unknown section @${name}`);
      }
    });
    pre.querySelectorAll(".tok-inherit[data-inherit-target]").forEach((el) => {
      const target = String(el.dataset.inheritTarget || "").trim();
      if (!target) return;
      if (!sectionDefs.has(target)) {
        mark(el, `Unknown inherited section @${target}`);
      }
    });
  }
  function hideTooltip() {
    tip.hidden = true;
    tipStaff.innerHTML = "";
    tipStaff.hidden = true;
  }
  function clearScrubCursor() {
    wrap.classList.remove("scrub-hover");
    wrap.classList.remove("scrub-active");
  }
  function clearActiveTokenHighlight() {
    activeTokens.forEach((token) => token.classList.remove("tok-active"));
    activeTokens = [];
  }
  function emitCursorToken() {
    if (!options.onCursorToken) return;
    const token = tokenAtCursor(ta.value, ta.selectionStart);
    options.onCursorToken(token);
  }
  function emitScrubToken(value) {
    if (!options.onCursorToken) return;
    options.onCursorToken({ type: "tok-level", value: String(value) });
  }
  function isCommentToggleShortcut(e) {
    if (!(e.metaKey || e.ctrlKey) || e.altKey) return false;
    if (e.code === "Slash") return true;
    if (e.code === "Digit7" && e.shiftKey) return true;
    if (e.key === "/") return true;
    return false;
  }
  function lineColAt(text, pos) {
    const src = String(text || "");
    const clamped = Math.max(0, Math.min(src.length, pos || 0));
    const lines = src.split("\n");
    let total = 0;
    for (let i = 0; i < lines.length; i += 1) {
      const lineLen = lines[i].length;
      const lineEnd = total + lineLen;
      if (clamped <= lineEnd) {
        return { line: i, col: clamped - total };
      }
      total = lineEnd + 1;
    }
    const lastLine = Math.max(0, lines.length - 1);
    return { line: lastLine, col: lines[lastLine].length };
  }
  function offsetAt(lines, line, col) {
    let total = 0;
    const idx = Math.max(0, Math.min(lines.length - 1, line));
    for (let i = 0; i < idx; i += 1) total += lines[i].length + 1;
    const clampedCol = Math.max(0, Math.min(lines[idx].length, col));
    return total + clampedCol;
  }
  function jumpToLine(lineNumber) {
    const lines = ta.value.split("\n");
    if (!lines.length) return;
    const parsed = parseInt(lineNumber, 10);
    if (!Number.isInteger(parsed) || parsed < 1) return;
    const idx = Math.max(0, Math.min(lines.length - 1, parsed - 1));
    const pos = offsetAt(lines, idx, 0);
    ta.selectionStart = pos;
    ta.selectionEnd = pos;
    ta.focus({ preventScroll: true });
    const lineEl = pre.querySelector(`.hl-line[data-line="${idx}"]`);
    if (lineEl) {
      const targetTop = Math.max(0, lineEl.offsetTop - Math.floor(ta.clientHeight * 0.35));
      ta.scrollTop = targetTop;
      pre.scrollTop = ta.scrollTop;
      gutter.scrollTop = ta.scrollTop;
    }
    emitCursorToken();
    updateSuggestions();
  }
  function toggleSelectionComments() {
    const src = ta.value;
    const selStart = ta.selectionStart;
    const selEnd = ta.selectionEnd;
    const startLC = lineColAt(src, selStart);
    const endProbe = selEnd > selStart ? selEnd - 1 : selEnd;
    const endLC = lineColAt(src, endProbe);
    const lines = src.split("\n");
    const startLine = Math.max(0, startLC.line);
    const endLine = Math.max(startLine, endLC.line);
    const slice = lines.slice(startLine, endLine + 1);
    const nonEmpty = slice.filter((line) => line.trim().length > 0);
    const uncomment = nonEmpty.length > 0 && nonEmpty.every((line) => /^\s*;\s?/.test(line));
    for (let i = startLine; i <= endLine; i += 1) {
      const line = lines[i];
      if (!line || !line.trim()) continue;
      if (uncomment) {
        lines[i] = line.replace(/^(\s*);\s?/, "$1");
      } else {
        lines[i] = line.replace(/^(\s*)/, "$1; ");
      }
    }
    const nextValue = lines.join("\n");
    ta.value = nextValue;
    const nextLines = nextValue.split("\n");
    const newStart = offsetAt(nextLines, startLC.line, startLC.col);
    const newEndLine = selEnd > selStart ? endLC.line : startLC.line;
    const newEndCol = selEnd > selStart ? endLC.col + 1 : startLC.col;
    const newEnd = offsetAt(nextLines, newEndLine, newEndCol);
    ta.selectionStart = newStart;
    ta.selectionEnd = Math.max(newStart, newEnd);
    ta.dispatchEvent(new Event("input", { bubbles: true }));
  }
  function setActiveSection(sectionName, occurrence = null) {
    pre.querySelectorAll(".tok-section.is-active-section").forEach((el) => el.classList.remove("is-active-section"));
    if (!sectionName) return;
    const matches = [...pre.querySelectorAll(`.tok-section[data-section="${sectionName}"]`)];
    if (!matches.length) return;
    if (typeof occurrence === "number" && occurrence >= 0) {
      const target = matches[occurrence];
      if (target) target.classList.add("is-active-section");
      return;
    }
    matches.forEach((el) => el.classList.add("is-active-section"));
  }
  function setActiveSectionByOrder(order) {
    pre.querySelectorAll(".tok-arr-token.is-active-section").forEach((el) => el.classList.remove("is-active-section"));
    if (typeof order !== "number" || order < 0) return;
    const target = pre.querySelector(`.tok-arr-token[data-arr-order="${order}"]`);
    if (target) target.classList.add("is-active-section");
  }
  function setActiveArrangementLoopBlock(blockId) {
    pre.querySelectorAll(".tok-arr-token.is-active-loop-block").forEach((el) => el.classList.remove("is-active-loop-block"));
    if (!blockId) return;
    pre.querySelectorAll(`.tok-arr-token[data-arr-block-id="${blockId}"]`).forEach((el) => el.classList.add("is-active-loop-block"));
  }
  function applyQueuedArrangementToken() {
    pre.querySelectorAll(".tok-arr-token.is-queued-section").forEach((el) => el.classList.remove("is-queued-section"));
    if (typeof queuedArrangementOrder !== "number" || queuedArrangementOrder < 0) return;
    const target = pre.querySelector(`.tok-arr-token[data-arr-order="${queuedArrangementOrder}"]`);
    if (target) target.classList.add("is-queued-section");
  }
  function setQueuedArrangementToken(order) {
    queuedArrangementOrder = typeof order === "number" && order >= 0 ? order : null;
    applyQueuedArrangementToken();
  }
  function getPartialToken() {
    const pos = ta.selectionStart;
    const src = ta.value;
    const lineStart = src.lastIndexOf("\n", Math.max(0, pos - 1)) + 1;
    const lineEndRaw = src.indexOf("\n", pos);
    const lineEnd = lineEndRaw < 0 ? src.length : lineEndRaw;
    const lineText = src.slice(lineStart, lineEnd);
    const [base, comment] = splitComment(lineText);
    const commentPos = comment ? lineStart + base.length : -1;
    if (commentPos >= 0 && pos >= commentPos) return null;
    let tokenStart = pos;
    let tokenEnd = pos;
    while (tokenStart > 0 && !/\s/.test(src[tokenStart - 1])) tokenStart -= 1;
    while (tokenEnd < src.length && !/\s/.test(src[tokenEnd])) tokenEnd += 1;
    if (tokenStart === tokenEnd) return null;
    const tokenText = src.slice(tokenStart, tokenEnd);
    const relPos = Math.max(0, pos - tokenStart);
    const relLeft = tokenText.lastIndexOf("|", Math.max(0, relPos - 1));
    const relRightRaw = tokenText.indexOf("|", relPos);
    const relRight = relRightRaw < 0 ? tokenText.length : relRightRaw;
    const partStart = relLeft + 1;
    const partEnd = relRight;
    if (partStart >= partEnd) return null;
    const partText = tokenText.slice(partStart, partEnd);
    if (!partText) return null;
    return {
      text: partText,
      start: tokenStart + partStart,
      end: tokenStart + partEnd
    };
  }
  function getSuggestions(partial) {
    if (!partial || !partial.text || partial.text.length < 1) return [];
    const lineStart = ta.value.lastIndexOf("\n", Math.max(0, partial.start - 1)) + 1;
    const lineEndRaw = ta.value.indexOf("\n", partial.start);
    const lineEnd = lineEndRaw < 0 ? ta.value.length : lineEndRaw;
    const line = ta.value.slice(lineStart, lineEnd).trimStart();
    if (/^#{1,2}\s+/.test(line)) return [];
    if (partial.text.startsWith("@")) return [];
    const before = ta.value.slice(0, partial.start).trimEnd();
    if (before.endsWith("<")) return [];
    const defs = String(ta.value || "").split(/\r?\n/).map((raw) => raw.replace(/;.*$/, "")).map((raw) => raw.match(/^\s*([%&][^\s]+)\s+/)).filter(Boolean).map((match) => match[1]);
    const uniqueDefs = [...new Set(defs)];
    const buildVarOptions = (sigil) => {
      const token = String(partial.text || "");
      const prefix = token.charAt(0) === sigil ? token : sigil;
      return uniqueDefs.filter((name) => name.charAt(0) === sigil).filter((name) => name.toLowerCase().startsWith(prefix.toLowerCase())).map((name) => ({ value: name, label: `${name} variable` }));
    };
    const lineBeforeToken = ta.value.slice(lineStart, partial.start).trim();
    if (partial.text.startsWith("%") || partial.text === "%") {
      if (!lineBeforeToken) return [];
      return buildVarOptions("%");
    }
    if (partial.text.startsWith("&") || partial.text === "&") {
      if (!lineBeforeToken) return [];
      return buildVarOptions("&");
    }
    const cls = classify(partial.text);
    if (cls === "tok-channel" || partial.text.startsWith("#")) {
      return INSTRUMENT_OPTIONS;
    }
    if (cls && cls !== "tok-note" && cls !== "tok-mode") return [];
    return ALL_CANDIDATES.map((value) => ({ value, label: value }));
  }
  function getCaretCoords() {
    const mirror = document.createElement("div");
    const style = window.getComputedStyle(ta);
    const props = [
      "font",
      "fontSize",
      "fontFamily",
      "fontWeight",
      "lineHeight",
      "letterSpacing",
      "textTransform",
      "textIndent",
      "whiteSpace",
      "wordSpacing",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "borderTopWidth",
      "borderRightWidth",
      "borderBottomWidth",
      "borderLeftWidth",
      "boxSizing"
    ];
    props.forEach((prop) => {
      mirror.style[prop] = style[prop];
    });
    mirror.style.position = "absolute";
    mirror.style.visibility = "hidden";
    mirror.style.pointerEvents = "none";
    mirror.style.top = "0";
    mirror.style.left = "0";
    mirror.style.width = `${ta.clientWidth}px`;
    mirror.style.overflow = "hidden";
    mirror.style.whiteSpace = "pre-wrap";
    mirror.style.wordWrap = "break-word";
    const before = ta.value.slice(0, ta.selectionStart);
    const marker = document.createElement("span");
    marker.textContent = "\u200B";
    mirror.textContent = before;
    mirror.appendChild(marker);
    wrap.appendChild(mirror);
    const top = marker.offsetTop - ta.scrollTop;
    const left = marker.offsetLeft - ta.scrollLeft;
    wrap.removeChild(mirror);
    return { top, left };
  }
  function resizeSuggestInput() {
    const text = (suggestInput.value || suggestInput.placeholder || "").trim();
    const widthCh = Math.max(6, Math.min(28, text.length + 2));
    suggestInput.style.width = `${widthCh}ch`;
  }
  function getDockEl() {
    return options.getSuggestDockEl ? options.getSuggestDockEl() : null;
  }
  function setContextOpen(open) {
    if (options.onSuggestVisibilityChange) options.onSuggestVisibilityChange(open);
  }
  function hideSuggest() {
    suggestState.open = false;
    suggestState.allItems = [];
    suggestState.items = [];
    suggestState.activeIndex = 0;
    suggestState.token = null;
    suggestInput.hidden = true;
    suggestInput.value = "";
    suggestInput.placeholder = "";
    suggestInput.style.width = "";
    suggestMenu.hidden = true;
    suggestMenu.innerHTML = "";
    setContextOpen(false);
  }
  function setSuggestMenuOpen(open) {
    suggestMenu.hidden = !open;
    if (open) {
      requestAnimationFrame(() => {
        const active = suggestMenu.querySelector('li[data-active="1"]');
        if (active) active.scrollIntoView({ block: "nearest" });
      });
    }
  }
  function isSameSuggestToken(a, b) {
    return Boolean(
      a && b && a.start === b.start && a.end === b.end && a.text === b.text
    );
  }
  function renderSuggestItems() {
    if (!suggestState.items.length) {
      suggestMenu.innerHTML = '<li class="suggest-empty" aria-disabled="true">No matches. Keep typing or press Esc.</li>';
      return;
    }
    suggestMenu.innerHTML = suggestState.items.map((item, idx) => `<li role="option" data-value="${item.value}" data-active="${idx === suggestState.activeIndex ? "1" : "0"}">${item.label || item.value}</li>`).join("");
    if (!suggestMenu.hidden) {
      const active = suggestMenu.querySelector('li[data-active="1"]');
      if (active) active.scrollIntoView({ block: "nearest" });
    }
  }
  function applySuggestFilter(rawQuery) {
    const query = String(rawQuery || "").trim().toLowerCase();
    if (!query) {
      suggestState.items = suggestState.allItems.slice();
      suggestState.activeIndex = 0;
      renderSuggestItems();
      return;
    }
    suggestState.items = suggestState.allItems.filter((item) => item.value.toLowerCase().includes(query) || String(item.label || "").toLowerCase().includes(query));
    suggestState.activeIndex = 0;
    renderSuggestItems();
  }
  function showSuggest(items, token) {
    if (!items.length) {
      hideSuggest();
      return;
    }
    const dockEl = options.getSuggestDockEl ? options.getSuggestDockEl() : null;
    if (!dockEl) {
      hideSuggest();
      return;
    }
    if (suggestInput.parentElement !== dockEl) dockEl.appendChild(suggestInput);
    if (suggestMenu.parentElement !== dockEl) dockEl.appendChild(suggestMenu);
    suggestState.open = true;
    suggestState.allItems = items;
    suggestState.items = items.slice();
    suggestState.activeIndex = 0;
    suggestState.token = token;
    const initialQuery = "";
    suggestInput.value = initialQuery;
    suggestInput.placeholder = token.text || "";
    applySuggestFilter(initialQuery);
    resizeSuggestInput();
    suggestInput.hidden = false;
    if (token && token.text) {
      const raw = token.text.trim();
      const exact = suggestState.items.findIndex((item) => item.value === raw);
      const exactCI = exact >= 0 ? exact : suggestState.items.findIndex((item) => item.value.toLowerCase() === raw.toLowerCase());
      if (exactCI >= 0) {
        suggestState.activeIndex = exactCI;
        renderSuggestItems();
      }
    }
    setSuggestMenuOpen(document.activeElement === suggestInput);
    setContextOpen(true);
  }
  function updateSuggestions() {
    if (!SUGGESTIONS_ENABLED) return;
    if (scrubState) {
      hideSuggest();
      return;
    }
    const partial = getPartialToken();
    if (!partial) {
      suggestState.dismissedToken = null;
      hideSuggest();
      return;
    }
    if (isSameSuggestToken(partial, suggestState.dismissedToken)) {
      hideSuggest();
      return;
    }
    const items = getSuggestions(partial);
    if (!items.length) {
      hideSuggest();
      return;
    }
    showSuggest(items, partial);
  }
  function acceptSuggestion(value) {
    if (!suggestState.token) return;
    const { start, end } = suggestState.token;
    ta.value = `${ta.value.slice(0, start)}${value}${ta.value.slice(end)}`;
    const nextPos = start + value.length;
    ta.selectionStart = nextPos;
    ta.selectionEnd = nextPos;
    suggestState.dismissedToken = null;
    ta.dispatchEvent(new Event("input", { bubbles: true }));
    hideSuggest();
  }
  function moveSuggest(delta) {
    if (!suggestState.open || !suggestState.items.length) return;
    const size = suggestState.items.length;
    suggestState.activeIndex = (suggestState.activeIndex + delta + size) % size;
    renderSuggestItems();
  }
  function currentSuggestValue() {
    if (!suggestState.items.length) return "";
    const active = suggestState.items[suggestState.activeIndex];
    return active ? active.value : "";
  }
  function focusEditor() {
    ta.focus({ preventScroll: true });
    setTimeout(() => ta.focus({ preventScroll: true }), 0);
  }
  function resolveValidSuggestion(raw) {
    const text = String(raw || "").trim();
    if (!text || !suggestState.allItems.length) return "";
    const exact = suggestState.allItems.find((item) => item.value === text);
    if (exact) return exact.value;
    const exactCI = suggestState.allItems.find((item) => item.value.toLowerCase() === text.toLowerCase());
    if (exactCI) return exactCI.value;
    const labelExact = suggestState.allItems.find((item) => String(item.label || "") === text);
    if (labelExact) return labelExact.value;
    return "";
  }
  function getScrubTarget(elements) {
    return elements.find((el) => el.dataset && (typeof el.dataset.number !== "undefined" || typeof el.dataset.velocity !== "undefined"));
  }
  function parseScrubRaw(raw) {
    const isFloat = String(raw).includes(".");
    const decimalPlaces = isFloat ? String(raw).split(".")[1].length : 0;
    return {
      value: parseFloat(raw),
      isFloat,
      decimalPlaces
    };
  }
  function beginScrub(e, span2) {
    const raw = typeof span2.dataset.number !== "undefined" ? span2.dataset.number : span2.dataset.velocity;
    const parsed = parseScrubRaw(raw);
    if (Number.isNaN(parsed.value)) return;
    const startOffset = charOffsetOfElement(pre, span2, ta.value);
    if (startOffset < 0) return;
    scrubState = {
      startX: e.clientX,
      startValue: parsed.value,
      isFloat: parsed.isFloat,
      decimalPlaces: parsed.decimalPlaces,
      attr: typeof span2.dataset.velocity !== "undefined" ? "velocity" : "number",
      startOffset,
      currentLength: span2.textContent.length,
      currentText: raw,
      moved: false
    };
    wrap.classList.add("scrub-active");
    hideTooltip();
    hideSuggest();
    emitScrubToken(raw);
    e.preventDefault();
  }
  function applyScrub(e) {
    if (!scrubState) return;
    const STEP_PX = 4;
    const deltaUnits = Math.round((e.clientX - scrubState.startX) / STEP_PX);
    const baseStep = scrubState.isFloat ? Math.pow(10, -scrubState.decimalPlaces) : 1;
    const modifier = e.shiftKey ? 10 : e.altKey ? 0.1 : 1;
    let nextValue = scrubState.startValue + deltaUnits * baseStep * modifier;
    if (scrubState.attr === "velocity") {
      nextValue = Math.max(1, Math.min(127, Math.round(nextValue)));
    }
    const nextText = scrubState.isFloat && scrubState.attr !== "velocity" ? nextValue.toFixed(scrubState.decimalPlaces) : String(Math.round(nextValue));
    if (nextText === scrubState.currentText) return;
    const start = scrubState.startOffset;
    const end = start + scrubState.currentLength;
    ta.value = ta.value.slice(0, start) + nextText + ta.value.slice(end);
    scrubState.currentLength = nextText.length;
    scrubState.currentText = nextText;
    scrubState.moved = true;
    emitScrubToken(nextText);
    ta.dispatchEvent(new Event("input", { bubbles: true }));
  }
  function endScrub() {
    if (!scrubState) return;
    scrubState = null;
    wrap.classList.remove("scrub-active");
    clearScrubCursor();
    document.removeEventListener("mousemove", applyScrub);
    document.removeEventListener("mouseup", endScrub);
  }
  function flashLines(startLine, endLine) {
    const start = Math.max(0, startLine);
    const end = Math.max(start, endLine);
    for (let line = start; line <= end; line += 1) {
      const lineEl = pre.querySelector(`[data-line="${line}"]`);
      if (!lineEl) continue;
      lineEl.classList.add("block-flash");
      const timer = setTimeout(() => {
        lineEl.classList.remove("block-flash");
        flashTimers.delete(timer);
      }, 800);
      flashTimers.add(timer);
    }
  }
  function getNoteLikeTokenSpans(lineEl) {
    return [...lineEl.querySelectorAll("span")].filter((token) => {
      const ds = token.dataset || {};
      return token.classList.contains("tok-note") || token.classList.contains("tok-chord") || token.classList.contains("tok-var-ref") || token.classList.contains("tok-mode") || token.classList.contains("tok-progression") || typeof ds.repeatLast !== "undefined" || typeof ds.var !== "undefined";
    });
  }
  function flashActiveTokens(lineNumbers, beatIndex, beatDurationMs = 0) {
    if (!Array.isArray(lineNumbers) || !lineNumbers.length) return;
    const tokenIndex = Number.isInteger(beatIndex) ? Math.max(0, beatIndex) : 0;
    const getPatternTiming = (lineEl) => {
      const rawSteps = [...lineEl.querySelectorAll(".tok-pattern-step")];
      const slots = [];
      for (let i = 0; i < rawSteps.length; i += 1) {
        const step = rawSteps[i];
        const ch = String(step.dataset.patternChar || "").toLowerCase();
        if (ch === "[") {
          const inner = [];
          let j = i + 1;
          while (j < rawSteps.length) {
            const innerStep = rawSteps[j];
            const innerChar = String(innerStep.dataset.patternChar || "").toLowerCase();
            if (innerChar === "]") break;
            if (innerChar === "x" || innerChar === "-" || innerChar === "_") {
              inner.push(innerStep);
            }
            j += 1;
          }
          if (inner.length) {
            slots.push({
              steps: inner,
              pulses: inner.filter((s) => String(s.dataset.patternChar || "").toLowerCase() === "x")
            });
          }
          i = j;
          continue;
        }
        if (ch === "x" || ch === "-" || ch === "_") {
          slots.push({
            steps: [step],
            pulses: ch === "x" ? [step] : []
          });
        }
      }
      return slots;
    };
    const flashPatternPulses = (slot, durationMs) => {
      if (!slot || !slot.pulses || !slot.pulses.length) return;
      const pulses = slot.pulses;
      if (pulses.length === 1 || !durationMs || durationMs <= 0) {
        pulses.forEach((pulseEl) => {
          pulseEl.classList.add("tok-active");
          activeTokens.push(pulseEl);
        });
        return;
      }
      const stepMs = durationMs / slot.steps.length;
      pulses.forEach((pulseEl) => {
        const slotIndex = slot.steps.indexOf(pulseEl);
        const delay = Math.max(0, Math.floor(slotIndex * stepMs));
        const timer = setTimeout(() => {
          pulseEl.classList.add("tok-active");
          activeTokens.push(pulseEl);
          flashTimers.delete(timer);
        }, delay);
        flashTimers.add(timer);
      });
    };
    const patternByLine = /* @__PURE__ */ new Map();
    lineNumbers.forEach((lineNumber) => {
      const lineEl = pre.querySelector(`[data-line="${lineNumber}"]`);
      if (!lineEl) return;
      patternByLine.set(lineNumber, getPatternTiming(lineEl));
    });
    const referencePatternSteps = [...patternByLine.values()].filter((slots) => slots.length > 0).sort((a, b) => {
      const pulses = (slots) => slots.reduce((sum, slot) => sum + slot.pulses.length, 0);
      return pulses(b) - pulses(a);
    })[0] || [];
    function pulseInfo(slots) {
      if (!slots.length) return null;
      const stepIndex = tokenIndex % slots.length;
      const slot = slots[stepIndex];
      let pulseCount = 0;
      for (let i = 0; i <= stepIndex; i += 1) {
        pulseCount += slots[i].pulses.length;
      }
      const pulsesPerPattern = slots.reduce((sum, s) => sum + s.pulses.length, 0);
      const cycleIndex = Math.floor(tokenIndex / slots.length);
      const absolutePulseIndex = pulsesPerPattern > 0 ? cycleIndex * pulsesPerPattern + Math.max(0, pulseCount - slot.pulses.length) : 0;
      return { slot, isPulse: slot.pulses.length > 0, absolutePulseIndex };
    }
    lineNumbers.forEach((lineNumber) => {
      const lineEl = pre.querySelector(`[data-line="${lineNumber}"]`);
      if (!lineEl) return;
      const ownPatternSteps = patternByLine.get(lineNumber) || [];
      const info = pulseInfo(ownPatternSteps.length ? ownPatternSteps : referencePatternSteps);
      if (ownPatternSteps.length && info && info.slot && info.isPulse) {
        flashPatternPulses(info.slot, beatDurationMs);
      }
      const noteTokens = getNoteLikeTokenSpans(lineEl);
      if (!noteTokens.length) return;
      if (info && !info.isPulse) return;
      const idx = info ? info.absolutePulseIndex : tokenIndex;
      const token = noteTokens[(idx % noteTokens.length + noteTokens.length) % noteTokens.length];
      if (!token) return;
      token.classList.add("tok-active");
      activeTokens.push(token);
    });
  }
  ta.addEventListener("scroll", () => {
    pre.scrollTop = ta.scrollTop;
    pre.scrollLeft = ta.scrollLeft;
    gutter.scrollTop = ta.scrollTop;
  });
  window.addEventListener("resize", syncGutterHeights);
  ta.addEventListener("input", () => {
    pushHistoryEntry();
    runInputEffects();
  });
  ta.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && !e.altKey) {
      const key = String(e.key || "").toLowerCase();
      const wantsUndo = key === "z" && !e.shiftKey;
      const wantsRedo = key === "z" && e.shiftKey || key === "y";
      if (wantsUndo || wantsRedo) {
        e.preventDefault();
        const handled = wantsUndo ? undoHistory() : redoHistory();
        if (!handled) emitCursorToken();
        return;
      }
    }
    if (isCommentToggleShortcut(e)) {
      e.preventDefault();
      toggleSelectionComments();
      return;
    }
    if (e.key === "[" && !e.metaKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const selected = ta.value.slice(start, end);
      const wrapped = `[${selected}]`;
      ta.value = `${ta.value.slice(0, start)}${wrapped}${ta.value.slice(end)}`;
      if (start === end) {
        const nextPos = start + 1;
        ta.selectionStart = nextPos;
        ta.selectionEnd = nextPos;
      } else {
        ta.selectionStart = start + 1;
        ta.selectionEnd = end + 1;
      }
      ta.dispatchEvent(new Event("input", { bubbles: true }));
      return;
    }
    if (!suggestState.open) return;
    if (document.activeElement !== suggestInput) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      moveSuggest(1);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      moveSuggest(-1);
      return;
    }
    if (e.key === "Tab" || e.key === "Enter") {
      e.preventDefault();
      const typed = suggestInput.value && suggestInput.value.trim();
      const next = currentSuggestValue() || resolveValidSuggestion(typed);
      if (next) acceptSuggestion(next);
      return;
    }
    if (e.key === "Escape") {
      suggestState.dismissedToken = suggestState.token || getPartialToken();
      hideSuggest();
      focusEditor();
    }
  });
  ta.addEventListener("mousemove", (e) => {
    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    const scrubTarget = getScrubTarget(elements);
    wrap.classList.toggle("scrub-hover", Boolean(scrubTarget) && !scrubState);
    if (scrubState) {
      hideTooltip();
      return;
    }
    const found = tooltipHandlers.map((handler) => {
      const hit = elements.find((el) => el.dataset && el.dataset[handler.attr]);
      return hit ? { handler, value: hit.dataset[handler.attr], element: hit } : null;
    }).find(Boolean);
    if (!found) {
      hideTooltip();
      return;
    }
    const text = found.handler.resolve(found.value, found.element);
    if (!text) {
      hideTooltip();
      return;
    }
    tipTitle.textContent = found.handler.title(found.value, found.element);
    tipBody.textContent = text;
    if (found.handler.visual) {
      const visual = found.handler.visual(found.value, found.element);
      if (visual) {
        tipStaff.innerHTML = visual;
        tipStaff.hidden = false;
      } else {
        tipStaff.innerHTML = "";
        tipStaff.hidden = true;
      }
    } else if (found.handler.notes) {
      const noteArr = found.handler.notes(found.value);
      if (noteArr && noteArr.length) {
        tipStaff.innerHTML = buildStaffSVG(noteArr, found.handler.staffMode);
        tipStaff.hidden = false;
      } else {
        tipStaff.innerHTML = "";
        tipStaff.hidden = true;
      }
    } else {
      tipStaff.innerHTML = "";
      tipStaff.hidden = true;
    }
    placeTooltip(tip, e.clientX, e.clientY);
  });
  ta.addEventListener("mousedown", (e) => {
    if (e.button !== 0 || scrubState) return;
    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    const arrToken = elements.find((el) => el.classList && el.classList.contains("tok-arr-token"));
    if (arrToken && options.onArrangementSectionClick) {
      e.preventDefault();
      const order = parseInt(arrToken.dataset.arrOrder, 10);
      options.onArrangementSectionClick(
        arrToken.dataset.section || null,
        Number.isFinite(order) ? order : null,
        {
          blockId: arrToken.dataset.arrBlockId || null,
          blockLive: arrToken.dataset.arrBlockLive === "1"
        }
      );
      ta.focus();
      return;
    }
    const target = getScrubTarget(elements);
    if (!target) return;
    beginScrub(e, target);
    document.addEventListener("mousemove", applyScrub);
    document.addEventListener("mouseup", endScrub);
  });
  suggestInput.addEventListener("input", () => {
    if (!suggestState.open) return;
    const value = suggestInput.value;
    const token = suggestState.token;
    if (!token) return;
    suggestState.token = { ...token, text: value || token.text };
    applySuggestFilter(value);
    resizeSuggestInput();
    if (!value) return;
    const idx = suggestState.items.findIndex((item) => item.value.toLowerCase() === value.toLowerCase());
    if (idx >= 0) {
      suggestState.activeIndex = idx;
      renderSuggestItems();
      return;
    }
    const prefix = suggestState.items.findIndex((item) => item.value.toLowerCase().startsWith(value.toLowerCase()));
    if (prefix >= 0) {
      suggestState.activeIndex = prefix;
      renderSuggestItems();
    }
  });
  suggestInput.addEventListener("change", () => {
    const value = resolveValidSuggestion(suggestInput.value);
    if (!value) return;
    acceptSuggestion(value);
    ta.focus();
  });
  suggestInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      moveSuggest(1);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      moveSuggest(-1);
      return;
    }
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      const typed = suggestInput.value && suggestInput.value.trim();
      const value = currentSuggestValue() || resolveValidSuggestion(typed);
      if (!value) return;
      acceptSuggestion(value);
      ta.focus();
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      const hasQuery = Boolean((suggestInput.value || "").trim());
      if (!hasQuery) {
        suggestState.dismissedToken = suggestState.token || getPartialToken();
        hideSuggest();
        focusEditor();
        return;
      }
      suggestState.dismissedToken = null;
      suggestInput.value = "";
      applySuggestFilter("");
      resizeSuggestInput();
      setSuggestMenuOpen(true);
      suggestInput.focus({ preventScroll: true });
    }
  });
  suggestInput.addEventListener("focus", () => {
    if (!suggestState.open || !suggestState.items.length) return;
    setSuggestMenuOpen(true);
  });
  suggestInput.addEventListener("blur", () => {
    setTimeout(() => {
      const active = document.activeElement;
      setSuggestMenuOpen(false);
      if (active === ta) return;
      if (active === suggestInput) return;
      if (suggestMenu.contains(active)) return;
      hideSuggest();
    }, 80);
  });
  ta.addEventListener("mouseleave", () => {
    hideTooltip();
    clearScrubCursor();
  });
  gutter.addEventListener("mousemove", (e) => {
    const lineEl = e.target && e.target.closest ? e.target.closest(".editor-ln[data-lint-level][data-lint]") : null;
    if (!lineEl) {
      hideTooltip();
      return;
    }
    const line = parseInt(lineEl.dataset.line, 10);
    const level = lineEl.dataset.lintLevel === "error" ? "ERROR" : "WARN";
    tipTitle.textContent = Number.isInteger(line) ? `Line ${line} \xB7 ${level}` : level;
    tipBody.textContent = String(lineEl.dataset.lint || "").replace(/\n+/g, "  |  ");
    tipStaff.innerHTML = "";
    tipStaff.hidden = true;
    placeTooltip(tip, e.clientX, e.clientY);
  });
  gutter.addEventListener("mouseleave", () => {
    hideTooltip();
  });
  ta.addEventListener("blur", () => {
    setTimeout(() => {
      const active = document.activeElement;
      if (active === suggestInput) return;
      if (suggestMenu.contains(active)) return;
      hideSuggest();
    }, 80);
  });
  suggestMenu.addEventListener("mousedown", (e) => {
    const item = e.target.closest("li[data-value]");
    if (!item) return;
    e.preventDefault();
    acceptSuggestion(item.dataset.value);
    ta.focus();
  });
  ta.addEventListener("click", () => {
    emitCursorToken();
    updateSuggestions();
  });
  ta.addEventListener("keyup", () => {
    emitCursorToken();
    updateSuggestions();
  });
  ta.addEventListener("focus", () => {
    emitCursorToken();
    updateSuggestions();
  });
  wrap.appendChild(gutter);
  wrap.appendChild(pre);
  wrap.appendChild(ta);
  wrap.appendChild(tip);
  history.entries = [buildHistoryEntry()];
  history.index = 0;
  sync();
  emitCursorToken();
  requestAnimationFrame(syncGutterHeights);
  return {
    el: wrap,
    textarea: ta,
    on: (event, fn) => ta.addEventListener(event, fn),
    getValue: () => ta.value,
    getCursorPosition: () => ta.selectionStart,
    flashLines,
    flashActiveTokens,
    clearActiveTokenHighlight,
    setActiveSection,
    setActiveSectionByOrder,
    setActiveArrangementLoopBlock,
    setQueuedArrangementToken,
    jumpToLine,
    setLintReport: (report) => {
      lintReport = report || null;
      applyLintLineMarkers();
    },
    setValue: (value) => {
      ta.value = value;
      ta.selectionStart = 0;
      ta.selectionEnd = 0;
      history.entries = [buildHistoryEntry()];
      history.index = 0;
      sync();
      hideTooltip();
      hideSuggest();
      clearActiveTokenHighlight();
    },
    focus: () => ta.focus()
  };
}
export {
  createEditor
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvZWRpdG9yLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBwYXJzZUFycmFuZ2VtZW50Qm9keSB9IGZyb20gJy4uL2xpYi9hcnJhbmdlbWVudC5qcyc7XG5cbmZ1bmN0aW9uIGVzYyh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5cbmZ1bmN0aW9uIHNwYW4oY2xzLCB2YWx1ZSwgYXR0cnMgPSB7fSkge1xuICBjb25zdCBkYXRhQXR0cnMgPSBPYmplY3QuZW50cmllcyhhdHRycylcbiAgICAubWFwKChba2V5LCBhdHRyVmFsdWVdKSA9PiB7XG4gICAgICBjb25zdCBrZWJhYktleSA9IFN0cmluZyhrZXkpLnJlcGxhY2UoL1tBLVpdL2csIGxldHRlciA9PiBgLSR7bGV0dGVyLnRvTG93ZXJDYXNlKCl9YCk7XG4gICAgICByZXR1cm4gYCBkYXRhLSR7a2ViYWJLZXl9PVwiJHtlc2MoYXR0clZhbHVlKX1cImA7XG4gICAgfSlcbiAgICAuam9pbignJyk7XG4gIHJldHVybiBgPHNwYW4gY2xhc3M9XCIke2Nsc31cIiR7ZGF0YUF0dHJzfT4ke2VzYyh2YWx1ZSl9PC9zcGFuPmA7XG59XG5cbmZ1bmN0aW9uIGNsYXNzaWZ5KHRva2VuKSB7XG4gIGlmICghdG9rZW4pIHJldHVybiBudWxsO1xuICBpZiAodG9rZW4gPT09ICc8JykgcmV0dXJuICd0b2staW5oZXJpdCc7XG4gIGlmICh0b2tlbiA9PT0gJyUnKSByZXR1cm4gJ3Rvay12YXItcmVmJztcbiAgaWYgKHRva2VuLmNoYXJBdCgwKSA9PT0gJyUnKSByZXR1cm4gJ3Rvay12YXItcmVmJztcbiAgaWYgKHRva2VuLmNoYXJBdCgwKSA9PT0gJyYnKSByZXR1cm4gJ3Rvay12YXItcmVmJztcbiAgaWYgKC9eeFxcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcmVwZWF0JztcbiAgaWYgKC9eW3hfXFwtW1xcXV0rJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLXBhdHRlcm4nO1xuICBpZiAoL14oPzpbYS16QS1aX11cXHcqKT9cXChcXGQrXFxzKixcXHMqXFxkKyg/OlxccyosXFxzKi0/XFxkKyk/XFwpJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLXBhdHRlcm4nO1xuICBpZiAoL15bYS1nQS1HXVsjYl0/XFxkKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1ub3RlJztcbiAgaWYgKHRva2VuLmluY2x1ZGVzKCd8JykpIHJldHVybiAndG9rLWNob3JkJztcbiAgaWYgKC9eKG1ham9yfG1pbm9yfHBocnlnaWFufGRvcmlhbnxtaXhvbHlkaWFufGxvY3JpYW58bHlkaWFuKSQvaS50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stbW9kZSc7XG4gIGlmICgvXig/Okl8SUl8SUlJfElWfFZ8Vkl8VklJfGl8aWl8aWlpfGl2fHZ8dml8dmlpKVx1MDBCMD8kLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcHJvZ3Jlc3Npb24nO1xuICBpZiAoL14oPzpcXCtcXCt8XFwuXFwufD4+fFxcKlxcKikkLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stb3BlcmF0b3InO1xuICBpZiAoL14jXFxkKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1jaGFubmVsJztcbiAgaWYgKC9eLT9cXGQrKFxcLlxcZCspPyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1udW1iZXInO1xuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9rZW4odG9rZW4pIHtcbiAgY29uc3QgY2xzID0gY2xhc3NpZnkodG9rZW4pO1xuICBpZiAoIWNscykgcmV0dXJuIGVzYyh0b2tlbik7XG4gIGlmIChjbHMgPT09ICd0b2staW5oZXJpdCcpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgaW5oZXJpdDogJzEnIH0pO1xuICBpZiAoY2xzID09PSAndG9rLXZhci1yZWYnICYmIHRva2VuICE9PSAnJScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgdmFyOiB0b2tlbiB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay12YXItcmVmJyAmJiB0b2tlbiA9PT0gJyUnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IHJlcGVhdExhc3Q6ICcxJyB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1jaGFubmVsJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBpbnN0cnVtZW50OiB0b2tlbi5zbGljZSgxKSB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1tb2RlJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBtb2RlOiB0b2tlbi50b0xvd2VyQ2FzZSgpIH0pO1xuICBpZiAoY2xzID09PSAndG9rLXBhdHRlcm4nKSB7XG4gICAgY29uc3QgY2hhcnMgPSB0b2tlblxuICAgICAgLnNwbGl0KCcnKVxuICAgICAgLm1hcCgoY2gsIGlkeCkgPT4gYDxzcGFuIGNsYXNzPVwidG9rLXBhdHRlcm4tc3RlcFwiIGRhdGEtcGF0dGVybi1zdGVwPVwiJHtpZHh9XCIgZGF0YS1wYXR0ZXJuLWNoYXI9XCIke2VzYyhjaCl9XCI+JHtlc2MoY2gpfTwvc3Bhbj5gKVxuICAgICAgLmpvaW4oJycpO1xuICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCIke2Nsc31cIiBkYXRhLXBhdHRlcm49XCIke2VzYyh0b2tlbil9XCI+JHtjaGFyc308L3NwYW4+YDtcbiAgfVxuICBpZiAoY2xzID09PSAndG9rLW5vdGUnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IG5vdGU6IHRva2VuIH0pO1xuICBpZiAoY2xzID09PSAndG9rLWNob3JkJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBjaG9yZDogdG9rZW4gfSk7XG4gIGlmIChjbHMgPT09ICd0b2stbnVtYmVyJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBudW1iZXI6IHRva2VuIH0pO1xuICBpZiAoY2xzID09PSAndG9rLXJlcGVhdCcpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgcmVwZWF0OiB0b2tlbi5zbGljZSgxKSB9KTtcbiAgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFycmFuZ2VtZW50VG9rZW4ocGFydCwgdG9rZW5NZXRhKSB7XG4gIGNvbnN0IGF0dHJzID0ge307XG4gIGlmICh0b2tlbk1ldGEgJiYgTnVtYmVyLmlzRmluaXRlKHRva2VuTWV0YS5vcmRlcikpIGF0dHJzLmFyck9yZGVyID0gdG9rZW5NZXRhLm9yZGVyO1xuICBpZiAodG9rZW5NZXRhICYmIHRva2VuTWV0YS5ibG9ja0lkKSBhdHRycy5hcnJCbG9ja0lkID0gdG9rZW5NZXRhLmJsb2NrSWQ7XG4gIGlmICh0b2tlbk1ldGEgJiYgdG9rZW5NZXRhLmJsb2NrTGl2ZSkgYXR0cnMuYXJyQmxvY2tMaXZlID0gJzEnO1xuICBpZiAodG9rZW5NZXRhICYmIE51bWJlci5pc0Zpbml0ZSh0b2tlbk1ldGEuYmxvY2tTdGFydE9yZGVyKSkgYXR0cnMuYXJyQmxvY2tTdGFydE9yZGVyID0gdG9rZW5NZXRhLmJsb2NrU3RhcnRPcmRlcjtcbiAgaWYgKHRva2VuTWV0YSAmJiBOdW1iZXIuaXNGaW5pdGUodG9rZW5NZXRhLmJsb2NrRW5kT3JkZXIpKSBhdHRycy5hcnJCbG9ja0VuZE9yZGVyID0gdG9rZW5NZXRhLmJsb2NrRW5kT3JkZXI7XG5cbiAgaWYgKHRva2VuTWV0YSAmJiB0b2tlbk1ldGEua2luZCA9PT0gJ3NlY3Rpb24nKSB7XG4gICAgcmV0dXJuIHNwYW4oJ3Rvay1zZWN0aW9uIHRvay1hcnItdG9rZW4nLCBwYXJ0LCB7IC4uLmF0dHJzLCBzZWN0aW9uOiBwYXJ0IH0pO1xuICB9XG4gIGlmICh0b2tlbk1ldGEgJiYgdG9rZW5NZXRhLmtpbmQgPT09ICdyZXBlYXQtbGFzdCcpIHtcbiAgICByZXR1cm4gc3BhbigndG9rLXZhci1yZWYgdG9rLWFyci10b2tlbiB0b2stYXJyLXJlcGVhdCcsIHBhcnQsIHsgLi4uYXR0cnMsIHJlcGVhdExhc3Q6ICcxJyB9KTtcbiAgfVxuICBpZiAodG9rZW5NZXRhICYmIHRva2VuTWV0YS5raW5kID09PSAncmVwZWF0Jykge1xuICAgIGNvbnN0IG4gPSAvXngoXFxkKykkLy50ZXN0KHBhcnQpID8gcGFydC5zbGljZSgxKSA6ICcnO1xuICAgIHJldHVybiBzcGFuKCd0b2stcmVwZWF0IHRvay1hcnItdG9rZW4gdG9rLWFyci1yZXBlYXQnLCBwYXJ0LCB7IC4uLmF0dHJzLCByZXBlYXQ6IG4gfSk7XG4gIH1cbiAgaWYgKHRva2VuTWV0YSAmJiAodG9rZW5NZXRhLmtpbmQgPT09ICdibG9jay1vcGVuJyB8fCB0b2tlbk1ldGEua2luZCA9PT0gJ2Jsb2NrLWNsb3NlJykpIHtcbiAgICByZXR1cm4gc3BhbigndG9rLW9wZXJhdG9yIHRvay1hcnItdG9rZW4gdG9rLWFyci1icmFja2V0JywgcGFydCwgYXR0cnMpO1xuICB9XG4gIHJldHVybiByZW5kZXJUb2tlbihwYXJ0KTtcbn1cblxuZnVuY3Rpb24gaXNEZWdyZWVUb2tlbih0b2tlbikge1xuICByZXR1cm4gL15cXGQrKD86XFwuXFwuXFxkKyk/JC8udGVzdCh0b2tlbik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRva2Vucyh0ZXh0KSB7XG4gIGNvbnN0IHBhcnRzID0gdGV4dC5zcGxpdCgvKFxccyspLyk7XG4gIGxldCBkZWdyZWVDb250ZXh0ID0gZmFsc2U7XG4gIHJldHVybiBwYXJ0cy5tYXAocGFydCA9PiB7XG4gICAgaWYgKC9cXHMrLy50ZXN0KHBhcnQpIHx8ICFwYXJ0KSByZXR1cm4gcGFydDtcbiAgICBpZiAoZGVncmVlQ29udGV4dCAmJiBpc0RlZ3JlZVRva2VuKHBhcnQpKSB7XG4gICAgICByZXR1cm4gc3BhbigndG9rLW51bWJlciB0b2stZGVncmVlJywgcGFydCwgeyBkZWdyZWU6IHBhcnQgfSk7XG4gICAgfVxuICAgIGRlZ3JlZUNvbnRleHQgPSBwYXJ0ID09PSAnKionO1xuICAgIHJldHVybiByZW5kZXJUb2tlbihwYXJ0KTtcbiAgfSkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIHNwbGl0Q29tbWVudChsaW5lKSB7XG4gIGNvbnN0IHZhbHVlID0gU3RyaW5nKGxpbmUgfHwgJycpO1xuICBjb25zdCBzZW1pY29sb25JbmRleCA9IHZhbHVlLmluZGV4T2YoJzsnKTtcbiAgY29uc3QgZGFzaE1hdGNoID0gdmFsdWUubWF0Y2goL1xccy0tXFxzLyk7XG4gIGNvbnN0IGRhc2hJbmRleCA9IGRhc2hNYXRjaCAmJiB0eXBlb2YgZGFzaE1hdGNoLmluZGV4ID09PSAnbnVtYmVyJyAmJiAvXFxTLy50ZXN0KHZhbHVlLnNsaWNlKDAsIGRhc2hNYXRjaC5pbmRleCkpXG4gICAgPyBkYXNoTWF0Y2guaW5kZXhcbiAgICA6IC0xO1xuXG4gIGlmIChzZW1pY29sb25JbmRleCA8IDAgJiYgZGFzaEluZGV4IDwgMCkgcmV0dXJuIFt2YWx1ZSwgJyddO1xuICBpZiAoc2VtaWNvbG9uSW5kZXggPCAwKSByZXR1cm4gW3ZhbHVlLnNsaWNlKDAsIGRhc2hJbmRleCksIHZhbHVlLnNsaWNlKGRhc2hJbmRleCldO1xuICBpZiAoZGFzaEluZGV4IDwgMCkgcmV0dXJuIFt2YWx1ZS5zbGljZSgwLCBzZW1pY29sb25JbmRleCksIHZhbHVlLnNsaWNlKHNlbWljb2xvbkluZGV4KV07XG4gIGNvbnN0IGlkeCA9IE1hdGgubWluKHNlbWljb2xvbkluZGV4LCBkYXNoSW5kZXgpO1xuICByZXR1cm4gW3ZhbHVlLnNsaWNlKDAsIGlkeCksIHZhbHVlLnNsaWNlKGlkeCldO1xufVxuXG5mdW5jdGlvbiByZW5kZXJCYXNlKGJhc2UsIGFycmFuZ2VtZW50U3RhdGUgPSBudWxsKSB7XG4gIGlmICghYmFzZS50cmltKCkpIHJldHVybiBlc2MoYmFzZSk7XG5cbiAgaWYgKC9eXFxzKiMjXFxzKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoL14oXFxzKiMjXFxzKykoLiopJC8sIChfLCBwMSwgcDIpID0+IGAke2VzYyhwMSl9JHtzcGFuKCd0b2stc3VidHJhY2snLCBwMil9YCk7XG4gIH1cbiAgaWYgKC9eXFxzKiNcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqI1xccyspKC4qKSQvLCAoXywgcDEsIHAyKSA9PiBgJHtlc2MocDEpfSR7c3BhbigndG9rLXRyYWNrJywgcDIpfWApO1xuICB9XG4gIGlmICgvXlxccypALy50ZXN0KGJhc2UpKSB7XG4gICAgY29uc3QgaW5oZXJpdE1hdGNoID0gYmFzZS5tYXRjaCgvXihcXHMqKShAW15cXHNdKykoXFxzKik8KFxccyopKFteXFxzXSspKC4qKSQvKTtcbiAgICBpZiAoaW5oZXJpdE1hdGNoKSB7XG4gICAgICBjb25zdCBbLCBpbmRlbnQsIHNvdXJjZVRva2VuLCBsZWZ0R2FwLCByaWdodEdhcCwgdGFyZ2V0VG9rZW4sIHJlc3RdID0gaW5oZXJpdE1hdGNoO1xuICAgICAgY29uc3Qgc291cmNlTmFtZSA9IHNvdXJjZVRva2VuLnNsaWNlKDEpO1xuICAgICAgcmV0dXJuIGAke2VzYyhpbmRlbnQpfSR7c3BhbigndG9rLXNlY3Rpb24taGVhZCcsIHNvdXJjZVRva2VuLCB7IHNlY3Rpb25IZWFkOiBzb3VyY2VOYW1lIH0pfSR7ZXNjKGxlZnRHYXApfSR7c3BhbigndG9rLWluaGVyaXQnLCAnPCcsIHtcbiAgICAgICAgaW5oZXJpdDogJzEnLFxuICAgICAgICBpbmhlcml0U291cmNlOiBzb3VyY2VOYW1lLFxuICAgICAgICBpbmhlcml0VGFyZ2V0OiB0YXJnZXRUb2tlbixcbiAgICAgIH0pfSR7ZXNjKHJpZ2h0R2FwKX0ke2VzYyh0YXJnZXRUb2tlbil9JHtyZW5kZXJUb2tlbnMocmVzdCl9YDtcbiAgICB9XG4gICAgY29uc3QgaGVhZGVyTWF0Y2ggPSBiYXNlLm1hdGNoKC9eKFxccyopKEBbXlxcc10rKSguKikkLyk7XG4gICAgaWYgKGhlYWRlck1hdGNoKSB7XG4gICAgICBjb25zdCBbLCBpbmRlbnQsIHNvdXJjZVRva2VuLCByZXN0XSA9IGhlYWRlck1hdGNoO1xuICAgICAgcmV0dXJuIGAke2VzYyhpbmRlbnQpfSR7c3BhbigndG9rLXNlY3Rpb24taGVhZCcsIHNvdXJjZVRva2VuLCB7IHNlY3Rpb25IZWFkOiBzb3VyY2VUb2tlbi5zbGljZSgxKSB9KX0ke3JlbmRlclRva2VucyhyZXN0KX1gO1xuICAgIH1cbiAgICByZXR1cm4gcmVuZGVyVG9rZW5zKGJhc2UpO1xuICB9XG4gIGlmICgvXlxccyo+Ly50ZXN0KGJhc2UpKSB7XG4gICAgY29uc3QgaW5kZW50ID0gZXNjKGJhc2UubWF0Y2goL15cXHMqLylbMF0pO1xuICAgIGNvbnN0IHRhaWwgPSBiYXNlLnRyaW1TdGFydCgpLnNsaWNlKDEpO1xuICAgIGNvbnN0IGxlYWQgPSB0YWlsLm1hdGNoKC9eXFxzKi8pWzBdIHx8ICcnO1xuICAgIGNvbnN0IGJvZHkgPSB0YWlsLnNsaWNlKGxlYWQubGVuZ3RoKTtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUFycmFuZ2VtZW50Qm9keShib2R5LCBhcnJhbmdlbWVudFN0YXRlID8ge1xuICAgICAgb3JkZXJPZmZzZXQ6IGFycmFuZ2VtZW50U3RhdGUub3JkZXJPZmZzZXQsXG4gICAgICBibG9ja09mZnNldDogYXJyYW5nZW1lbnRTdGF0ZS5ibG9ja09mZnNldCxcbiAgICB9IDogdW5kZWZpbmVkKTtcbiAgICBpZiAoYXJyYW5nZW1lbnRTdGF0ZSkge1xuICAgICAgYXJyYW5nZW1lbnRTdGF0ZS5vcmRlck9mZnNldCA9IHBhcnNlZC5uZXh0T3JkZXI7XG4gICAgICBhcnJhbmdlbWVudFN0YXRlLmJsb2NrT2Zmc2V0ID0gcGFyc2VkLm5leHRCbG9jaztcbiAgICB9XG4gICAgbGV0IHRva2VuSW5kZXggPSAwO1xuICAgIGNvbnN0IHJlbmRlcmVkID0gKGJvZHkubWF0Y2goL1xccyt8XFxbfFxcXXxbXlxcc1xcW1xcXV0rL2cpIHx8IFtdKVxuICAgICAgLm1hcChwYXJ0ID0+IHtcbiAgICAgICAgaWYgKCFwYXJ0IHx8IC9eXFxzKyQvLnRlc3QocGFydCkpIHJldHVybiBwYXJ0O1xuICAgICAgICBjb25zdCB0b2tlbk1ldGEgPSBwYXJzZWQudG9rZW5zW3Rva2VuSW5kZXhdIHx8IG51bGw7XG4gICAgICAgIHRva2VuSW5kZXggKz0gMTtcbiAgICAgICAgcmV0dXJuIHJlbmRlckFycmFuZ2VtZW50VG9rZW4ocGFydCwgdG9rZW5NZXRhKTtcbiAgICAgIH0pXG4gICAgICAuam9pbignJyk7XG4gICAgcmV0dXJuIGAke2luZGVudH0ke3NwYW4oJ3Rvay1hcnJhbmdlbWVudCcsICc+Jyl9JHtlc2MobGVhZCl9JHtyZW5kZXJlZH1gO1xuICB9XG4gIGlmICgvXlxccypbJSZdW15cXHNdK1xccysvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC9eKFxccyopKFslJl1bXlxcc10rKShcXHMqKSguKikkLywgKF8sIGksIHYsIHMsIHJlc3QpID0+IGAke2VzYyhpKX0ke3NwYW4oJ3Rvay12YXItZGVmJywgdiwgeyB2YXI6IHYgfSl9JHtlc2Mocyl9JHtyZW5kZXJUb2tlbnMocmVzdCl9YCk7XG4gIH1cbiAgaWYgKC9eXFxzKiNcXGQrLy50ZXN0KGJhc2UpKSB7XG4gICAgbGV0IHZlbG9jaXR5VGFnZ2VkID0gZmFsc2U7XG4gICAgcmV0dXJuIGJhc2Uuc3BsaXQoLyhcXHMrKS8pLm1hcChwYXJ0ID0+IHtcbiAgICAgIGlmICgvXlxccyokLy50ZXN0KHBhcnQpKSByZXR1cm4gcGFydDtcbiAgICAgIGNvbnN0IGNscyA9IGNsYXNzaWZ5KHBhcnQpO1xuICAgICAgaWYgKGNscyA9PT0gJ3Rvay1udW1iZXInICYmICF2ZWxvY2l0eVRhZ2dlZCkge1xuICAgICAgICB2ZWxvY2l0eVRhZ2dlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBzcGFuKGNscywgcGFydCwgeyB2ZWxvY2l0eTogcGFydCB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZW5kZXJUb2tlbihwYXJ0KTtcbiAgICB9KS5qb2luKCcnKTtcbiAgfVxuICByZXR1cm4gcmVuZGVyVG9rZW5zKGJhc2UpO1xufVxuXG5mdW5jdGlvbiBoaWdobGlnaHQoaW5wdXQpIHtcbiAgY29uc3QgYXJyYW5nZW1lbnRTdGF0ZSA9IHsgb3JkZXJPZmZzZXQ6IDAsIGJsb2NrT2Zmc2V0OiAwIH07XG4gIHJldHVybiBTdHJpbmcoaW5wdXQgfHwgJycpXG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKChsaW5lLCBsaW5lTnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBbYmFzZSwgY29tbWVudF0gPSBzcGxpdENvbW1lbnQobGluZSk7XG4gICAgICBjb25zdCByZW5kZXJlZCA9IHJlbmRlckJhc2UoYmFzZSwgYXJyYW5nZW1lbnRTdGF0ZSk7XG4gICAgICBjb25zdCBjb250ZW50ID0gIWNvbW1lbnQgPyByZW5kZXJlZCA6IGAke3JlbmRlcmVkfSR7c3BhbigndG9rLWNvbW1lbnQnLCBjb21tZW50KX1gO1xuICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cImhsLWxpbmVcIiBkYXRhLWxpbmU9XCIke2xpbmVOdW1iZXJ9XCI+JHtjb250ZW50fTwvc3Bhbj5gO1xuICAgIH0pXG4gICAgLmpvaW4oJycpO1xufVxuXG5jb25zdCBESUFUT05JQyA9IHsgYzogMCwgZDogMSwgZTogMiwgZjogMywgZzogNCwgYTogNSwgYjogNiB9O1xuY29uc3QgRTRfRElBVE9OSUMgPSA0ICogNyArIDI7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5vdGUocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIG5vdGVUb1Bvcyhub3RlU3RyKSB7XG4gIGNvbnN0IG0gPSBub3RlU3RyLm1hdGNoKC9eKFthLWdBLUddKShbI2JdPykoXFxkKykkLyk7XG4gIGlmICghbSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGRpYXRQb3MgPSBwYXJzZUludChtWzNdLCAxMCkgKiA3ICsgRElBVE9OSUNbbVsxXS50b0xvd2VyQ2FzZSgpXTtcbiAgcmV0dXJuIGRpYXRQb3MgLSBFNF9ESUFUT05JQztcbn1cblxuZnVuY3Rpb24gbm90ZVRvTWlkaShub3RlU3RyKSB7XG4gIGNvbnN0IG0gPSBTdHJpbmcobm90ZVN0ciB8fCAnJykubWF0Y2goL14oW2EtZ0EtR10pKFsjYl0/KShcXGQrKSQvKTtcbiAgaWYgKCFtKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgU0VNSVRPTkVTID0geyBjOiAwLCBkOiAyLCBlOiA0LCBmOiA1LCBnOiA3LCBhOiA5LCBiOiAxMSB9O1xuICBjb25zdCBiYXNlID0gU0VNSVRPTkVTW21bMV0udG9Mb3dlckNhc2UoKV07XG4gIGNvbnN0IGFsdCA9IG1bMl0gPT09ICcjJyA/IDEgOiBtWzJdID09PSAnYicgPyAtMSA6IDA7XG4gIGNvbnN0IG9jdCA9IHBhcnNlSW50KG1bM10sIDEwKTtcbiAgaWYgKE51bWJlci5pc05hTihvY3QpKSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuICgob2N0ICsgMSkgKiAxMikgKyBiYXNlICsgYWx0O1xufVxuXG5mdW5jdGlvbiBwb3NUb1kocG9zKSB7XG4gIHJldHVybiA2MCAtIHBvcyAqIDU7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkU3RhZmZTVkcobm90ZXMsIG1vZGUgPSAnY2hvcmQnKSB7XG4gIGlmICghbm90ZXMgfHwgbm90ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7XG4gIGNvbnN0IHNvcnRlZCA9IG5vdGVzXG4gICAgLm1hcChuID0+ICh7IG5vdGU6IG4sIHBvczogbm90ZVRvUG9zKG4pIH0pKVxuICAgIC5maWx0ZXIobiA9PiBuLnBvcyAhPT0gbnVsbClcbiAgICAuc29ydCgoYSwgYikgPT4gYS5wb3MgLSBiLnBvcyk7XG4gIGlmIChzb3J0ZWQubGVuZ3RoID09PSAwKSByZXR1cm4gJyc7XG5cbiAgY29uc3QgVyA9IDIwMDtcbiAgY29uc3QgSCA9IDEzMDtcbiAgY29uc3QgQ0VOVEVSX1kgPSA2NjtcbiAgY29uc3QgY2xlZkJ5UmFuZ2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGF2ZyA9IHNvcnRlZC5yZWR1Y2UoKHN1bSwgbikgPT4gc3VtICsgbi5wb3MsIDApIC8gc29ydGVkLmxlbmd0aDtcbiAgICBpZiAoYXZnIDw9IC02KSByZXR1cm4geyBzeW1ib2w6ICdcdUQ4MzRcdUREMjInLCBiYXNlUG9zOiAtOCwgc2l6ZTogNDgsIHk6IENFTlRFUl9ZICsgMTYgfTsgLy8gRi1jbGVmXG4gICAgaWYgKGF2ZyA+PSAyKSByZXR1cm4geyBzeW1ib2w6ICdcdUQ4MzRcdUREMUUnLCBiYXNlUG9zOiA0LCBzaXplOiA1MiwgeTogQ0VOVEVSX1kgKyAxMCB9OyAvLyBHLWNsZWZcbiAgICByZXR1cm4geyBzeW1ib2w6ICdcdUQ4MzRcdUREMjEnLCBiYXNlUG9zOiAtMiwgc2l6ZTogNDYsIHk6IENFTlRFUl9ZICsgMTQgfTsgLy8gQy1jbGVmXG4gIH0pKCk7XG4gIGNvbnN0IHRvWSA9IGFic1BvcyA9PiBDRU5URVJfWSAtIChhYnNQb3MgLSBjbGVmQnlSYW5nZS5iYXNlUG9zKSAqIDU7XG4gIGxldCBzdmcgPSBgPHN2ZyB3aWR0aD1cIiR7V31cIiBoZWlnaHQ9XCIke0h9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPmA7XG5cbiAgc3ZnICs9ICc8c3R5bGU+LnN0YWZmLWxpbmUsLmxlZGdlcntzdHJva2U6I2ZmZjtzdHJva2Utd2lkdGg6MX08L3N0eWxlPic7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgY29uc3QgeSA9IENFTlRFUl9ZIC0gMjAgKyBpICogMTA7XG4gICAgc3ZnICs9IGA8bGluZSBjbGFzcz1cInN0YWZmLWxpbmVcIiB4MT1cIjBcIiB5MT1cIiR7eX1cIiB4Mj1cIiR7V31cIiB5Mj1cIiR7eX1cIi8+YDtcbiAgfVxuICBzdmcgKz0gYDx0ZXh0IHg9XCI4XCIgeT1cIiR7Y2xlZkJ5UmFuZ2UueX1cIiBmaWxsPVwiI2ZmZlwiIGZvbnQtc2l6ZT1cIiR7Y2xlZkJ5UmFuZ2Uuc2l6ZX1cIiBmb250LWZhbWlseT1cInNlcmlmXCI+JHtjbGVmQnlSYW5nZS5zeW1ib2x9PC90ZXh0PmA7XG5cbiAgY29uc3QgaXNTY2FsZSA9IG1vZGUgPT09ICdzY2FsZSc7XG4gIGNvbnN0IGlzU2luZ2xlID0gbW9kZSA9PT0gJ3NpbmdsZSc7XG4gIGNvbnN0IG5vdGVDb3VudCA9IHNvcnRlZC5sZW5ndGg7XG4gIGxldCBub3RlWDtcbiAgaWYgKGlzU2NhbGUpIHtcbiAgICBjb25zdCBzdGVwID0gbm90ZUNvdW50ID4gMSA/IDE0OCAvIChub3RlQ291bnQgLSAxKSA6IDA7XG4gICAgc29ydGVkLmZvckVhY2goKG4sIGkpID0+IHtcbiAgICAgIG4ueCA9IDQyICsgaSAqIHN0ZXA7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNTaW5nbGUpIHtcbiAgICBzb3J0ZWRbMF0ueCA9IDEwMDtcbiAgfSBlbHNlIHtcbiAgICBub3RlWCA9IDk1O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjdXJyID0gc29ydGVkW2ldO1xuICAgICAgY29uc3QgcHJldiA9IGkgPiAwID8gc29ydGVkW2kgLSAxXSA6IG51bGw7XG4gICAgICBjdXJyLnggPSBub3RlWDtcbiAgICAgIGlmIChwcmV2ICYmIE1hdGguYWJzKGN1cnIucG9zIC0gcHJldi5wb3MpID09PSAxKSB7XG4gICAgICAgIGN1cnIueCA9IHByZXYueCArIDExO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNvcnRlZC5mb3JFYWNoKG4gPT4ge1xuICAgIGNvbnN0IHkgPSB0b1kobi5wb3MpO1xuICAgIGNvbnN0IGxvY2FsUG9zID0gbi5wb3MgLSBjbGVmQnlSYW5nZS5iYXNlUG9zO1xuICAgIGNvbnN0IG0gPSBuLm5vdGUubWF0Y2goL14oW2EtZ0EtR10pKFsjYl0/KShcXGQrKSQvKTtcbiAgICBjb25zdCBhY2NpZGVudGFsID0gbSA/IG1bMl0gOiAnJztcbiAgICBmb3IgKGxldCBwID0gNjsgcCA8PSBsb2NhbFBvczsgcCArPSAyKSB7XG4gICAgICBjb25zdCBseSA9IENFTlRFUl9ZIC0gcCAqIDU7XG4gICAgICBzdmcgKz0gYDxsaW5lIGNsYXNzPVwibGVkZ2VyXCIgeDE9XCIke24ueCAtIDl9XCIgeTE9XCIke2x5fVwiIHgyPVwiJHtuLnggKyA5fVwiIHkyPVwiJHtseX1cIi8+YDtcbiAgICB9XG4gICAgZm9yIChsZXQgcCA9IC02OyBwID49IGxvY2FsUG9zOyBwIC09IDIpIHtcbiAgICAgIGNvbnN0IGx5ID0gQ0VOVEVSX1kgLSBwICogNTtcbiAgICAgIHN2ZyArPSBgPGxpbmUgY2xhc3M9XCJsZWRnZXJcIiB4MT1cIiR7bi54IC0gOX1cIiB5MT1cIiR7bHl9XCIgeDI9XCIke24ueCArIDl9XCIgeTI9XCIke2x5fVwiLz5gO1xuICAgIH1cbiAgICBpZiAoaXNTY2FsZSkge1xuICAgICAgc3ZnICs9IGA8ZWxsaXBzZSBjeD1cIiR7bi54fVwiIGN5PVwiJHt5fVwiIHJ4PVwiNVwiIHJ5PVwiNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI2ZmZlwiIHN0cm9rZS13aWR0aD1cIjEuMlwiIHRyYW5zZm9ybT1cInJvdGF0ZSgtMTUgJHtuLnh9ICR7eX0pXCIvPmA7XG4gICAgfSBlbHNlIGlmIChpc1NpbmdsZSkge1xuICAgICAgc3ZnICs9IGA8ZWxsaXBzZSBjeD1cIiR7bi54fVwiIGN5PVwiJHt5fVwiIHJ4PVwiNVwiIHJ5PVwiNFwiIGZpbGw9XCIjZmZmXCIgdHJhbnNmb3JtPVwicm90YXRlKC0xNSAke24ueH0gJHt5fSlcIi8+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnICs9IGA8ZWxsaXBzZSBjeD1cIiR7bi54fVwiIGN5PVwiJHt5fVwiIHJ4PVwiNVwiIHJ5PVwiNFwiIGZpbGw9XCIjZmZmXCIgdHJhbnNmb3JtPVwicm90YXRlKC0xNSAke24ueH0gJHt5fSlcIi8+YDtcbiAgICB9XG4gICAgaWYgKGFjY2lkZW50YWwgPT09ICcjJykge1xuICAgICAgc3ZnICs9IGA8dGV4dCB4PVwiJHtuLnggLSAxNH1cIiB5PVwiJHt5ICsgNH1cIiBmaWxsPVwiI2ZmZlwiIGZvbnQtc2l6ZT1cIjEwXCI+XHUyNjZGPC90ZXh0PmA7XG4gICAgfSBlbHNlIGlmIChhY2NpZGVudGFsID09PSAnYicpIHtcbiAgICAgIHN2ZyArPSBgPHRleHQgeD1cIiR7bi54IC0gMTJ9XCIgeT1cIiR7eSArIDR9XCIgZmlsbD1cIiNmZmZcIiBmb250LXNpemU9XCIxMVwiPlx1MjY2RDwvdGV4dD5gO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCFpc1NjYWxlICYmICFpc1NpbmdsZSAmJiBzb3J0ZWQubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IGxvd2VzdFBvcyA9IHNvcnRlZFswXS5wb3MgLSBjbGVmQnlSYW5nZS5iYXNlUG9zO1xuICAgIGNvbnN0IGhpZ2hlc3RQb3MgPSBzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdLnBvcyAtIGNsZWZCeVJhbmdlLmJhc2VQb3M7XG4gICAgbGV0IHN0ZW1EaXIgPSBsb3dlc3RQb3MgPD0gMCA/ICd1cCcgOiAnZG93bic7XG4gICAgaWYgKHN0ZW1EaXIgPT09ICd1cCcpIHtcbiAgICAgIGNvbnN0IGhpZ2hZID0gQ0VOVEVSX1kgLSBoaWdoZXN0UG9zICogNTtcbiAgICAgIGNvbnN0IGhpZ2hYID0gc29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXS54O1xuICAgICAgc3ZnICs9IGA8bGluZSB4MT1cIiR7aGlnaFggKyA1fVwiIHkxPVwiJHtoaWdoWX1cIiB4Mj1cIiR7aGlnaFggKyA1fVwiIHkyPVwiJHtoaWdoWSAtIDI4fVwiIHN0cm9rZT1cIiNmZmZcIiBzdHJva2Utd2lkdGg9XCIxLjJcIi8+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbG93WSA9IENFTlRFUl9ZIC0gbG93ZXN0UG9zICogNTtcbiAgICAgIGNvbnN0IGxvd1ggPSBzb3J0ZWRbMF0ueDtcbiAgICAgIHN2ZyArPSBgPGxpbmUgeDE9XCIke2xvd1ggLSA1fVwiIHkxPVwiJHtsb3dZfVwiIHgyPVwiJHtsb3dYIC0gNX1cIiB5Mj1cIiR7bG93WSArIDI4fVwiIHN0cm9rZT1cIiNmZmZcIiBzdHJva2Utd2lkdGg9XCIxLjJcIi8+YDtcbiAgICB9XG4gIH1cblxuICBzdmcgKz0gJzwvc3ZnPic7XG4gIHJldHVybiBzdmc7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkUGF0dGVyblByZXZpZXdNYXJrdXAocGF0dGVybikge1xuICBjb25zdCBzeW1ib2xzID0gU3RyaW5nKHBhdHRlcm4gfHwgJycpLnNwbGl0KCcnKTtcbiAgaWYgKCFzeW1ib2xzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGNlbGxzID0gc3ltYm9scy5tYXAoKGNoLCBpKSA9PiB7XG4gICAgY29uc3QgY2xzID0gY2ggPT09ICd4JyB8fCBjaCA9PT0gJ1gnXG4gICAgICA/ICdpcy1wdWxzZSdcbiAgICAgIDogY2ggPT09ICctJ1xuICAgICAgICA/ICdpcy1yZXN0J1xuICAgICAgICA6IGNoID09PSAnXydcbiAgICAgICAgICA/ICdpcy1ob2xkJ1xuICAgICAgICAgIDogJ2lzLXN1Yic7XG4gICAgY29uc3QgZ3JvdXAgPSBpICUgNCA9PT0gMCA/ICdpcy1ncm91cCcgOiAnJztcbiAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwicHAtY2VsbCAke2Nsc30gJHtncm91cH1cIiBhcmlhLWxhYmVsPVwic3RlcCAke2kgKyAxfVwiPjwvc3Bhbj5gO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicGF0dGVybi1wcmV2aWV3XCIgYXJpYS1sYWJlbD1cIlBhdHRlcm4gcHJldmlld1wiPjxkaXYgY2xhc3M9XCJwcC1ncmlkXCI+JHtjZWxsc308L2Rpdj48L2Rpdj5gO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVBhdHRlcm4ocGF0dGVybikge1xuICBjb25zdCBzeW1ib2xzID0gU3RyaW5nKHBhdHRlcm4gfHwgJycpLnNwbGl0KCcnKTtcbiAgaWYgKCFzeW1ib2xzLmxlbmd0aCkgcmV0dXJuICdFbXB0eSBwYXR0ZXJuJztcbiAgY29uc3QgcHVsc2VJZHggPSBbXTtcbiAgbGV0IGhvbGRzID0gMDtcbiAgbGV0IHJlc3RzID0gMDtcbiAgc3ltYm9scy5mb3JFYWNoKChjaCwgaSkgPT4ge1xuICAgIGNvbnN0IGxvdyA9IGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKGxvdyA9PT0gJ3gnKSBwdWxzZUlkeC5wdXNoKGkpO1xuICAgIGVsc2UgaWYgKGNoID09PSAnXycpIGhvbGRzICs9IDE7XG4gICAgZWxzZSBpZiAoY2ggPT09ICctJykgcmVzdHMgKz0gMTtcbiAgfSk7XG5cbiAgaWYgKHB1bHNlSWR4Lmxlbmd0aCA9PT0gMCkge1xuICAgIGlmIChyZXN0cyA9PT0gc3ltYm9scy5sZW5ndGggfHwgaG9sZHMgPT09IDApIHJldHVybiBgQWxsIHNpbGVuY2UgKCR7c3ltYm9scy5sZW5ndGh9IHN0ZXBzKWA7XG4gICAgcmV0dXJuIGBObyBwdWxzZXMgKCR7aG9sZHN9IGhvbGRzLCAke3Jlc3RzfSByZXN0cylgO1xuICB9XG5cbiAgY29uc3QgcGFydHMgPSBbYCR7cHVsc2VJZHgubGVuZ3RofSBwdWxzZSR7cHVsc2VJZHgubGVuZ3RoICE9PSAxID8gJ3MnIDogJyd9IGluICR7c3ltYm9scy5sZW5ndGh9IHN0ZXBzYF07XG4gIGlmIChwdWxzZUlkeC5sZW5ndGggPiAxKSB7XG4gICAgY29uc3QgZ2FwcyA9IHB1bHNlSWR4LnNsaWNlKDEpLm1hcCgoaWR4LCBpKSA9PiBpZHggLSBwdWxzZUlkeFtpXSk7XG4gICAgY29uc3QgZXZlbiA9IGdhcHMuZXZlcnkoZyA9PiBnID09PSBnYXBzWzBdKTtcbiAgICBpZiAoZXZlbikge1xuICAgICAgY29uc3QgbiA9IGdhcHNbMF07XG4gICAgICBpZiAobiA9PT0gMikgcGFydHMucHVzaCgnaW4gMm5kcycpO1xuICAgICAgZWxzZSBpZiAobiA9PT0gMykgcGFydHMucHVzaCgnaW4gM3JkcycpO1xuICAgICAgZWxzZSBpZiAobiA9PT0gNCkgcGFydHMucHVzaCgnaW4gNHRocycpO1xuICAgICAgZWxzZSBwYXJ0cy5wdXNoKGBldmVyeSAke259IHN0ZXBzYCk7XG4gICAgfVxuICB9XG4gIGlmIChyZXN0cyA+IDApIHBhcnRzLnB1c2goYCR7cmVzdHN9IHJlc3RzYCk7XG4gIHJldHVybiBwYXJ0cy5qb2luKCcgXHUwMEI3ICcpO1xufVxuXG5mdW5jdGlvbiBwbGFjZVRvb2x0aXAodGlwRWwsIHgsIHkpIHtcbiAgY29uc3QgbWFyZ2luID0gODtcbiAgY29uc3Qgb2Zmc2V0ID0gMTI7XG4gIHRpcEVsLmhpZGRlbiA9IGZhbHNlO1xuICB0aXBFbC5zdHlsZS5sZWZ0ID0gJy05OTk5cHgnO1xuICB0aXBFbC5zdHlsZS50b3AgPSAnLTk5OTlweCc7XG4gIGNvbnN0IHJlY3QgPSB0aXBFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgY29uc3Qgd2lkdGggPSBNYXRoLm1pbihyZWN0LndpZHRoIHx8IDMyMCwgTWF0aC5tYXgoMCwgd2luZG93LmlubmVyV2lkdGggLSBtYXJnaW4gKiAyKSk7XG4gIGNvbnN0IGhlaWdodCA9IE1hdGgubWluKHJlY3QuaGVpZ2h0IHx8IDE4MCwgTWF0aC5tYXgoMCwgd2luZG93LmlubmVySGVpZ2h0IC0gbWFyZ2luICogMikpO1xuICBsZXQgbGVmdCA9IHggKyBvZmZzZXQ7XG4gIGxldCB0b3AgPSB5ICsgb2Zmc2V0O1xuICBpZiAobGVmdCArIHdpZHRoID4gd2luZG93LmlubmVyV2lkdGggLSBtYXJnaW4pIGxlZnQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIG1hcmdpbiAtIHdpZHRoO1xuICBpZiAodG9wICsgaGVpZ2h0ID4gd2luZG93LmlubmVySGVpZ2h0IC0gbWFyZ2luKSB0b3AgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBtYXJnaW4gLSBoZWlnaHQ7XG4gIGxlZnQgPSBNYXRoLm1heChtYXJnaW4sIGxlZnQpO1xuICB0b3AgPSBNYXRoLm1heChtYXJnaW4sIHRvcCk7XG4gIHRpcEVsLnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDtcbiAgdGlwRWwuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcbn1cblxuZnVuY3Rpb24gY2hhck9mZnNldE9mRWxlbWVudChyb290LCB0YXJnZXQsIHNvdXJjZVRleHQgPSAnJykge1xuICBpZiAoIXJvb3QgfHwgIXRhcmdldCB8fCAhcm9vdC5jb250YWlucyh0YXJnZXQpKSByZXR1cm4gLTE7XG4gIGNvbnN0IGxpbmVFbCA9IHRhcmdldC5jbG9zZXN0KCdbZGF0YS1saW5lXScpO1xuICBjb25zdCBsaW5lTnVtYmVyID0gbGluZUVsID8gcGFyc2VJbnQobGluZUVsLmRhdGFzZXQubGluZSwgMTApIDogMDtcbiAgaWYgKCFsaW5lRWwgfHwgTnVtYmVyLmlzTmFOKGxpbmVOdW1iZXIpKSByZXR1cm4gLTE7XG5cbiAgLy8gTWVhc3VyZSBvZmZzZXQgd2l0aGluIHRoaXMgbGluZSBvbmx5IChhdm9pZHMgY3Jvc3MtYmxvY2sgcmFuZ2UudG9TdHJpbmcoKSBxdWlya3NcbiAgLy8gd2hlcmUgZW1wdHkgZGlzcGxheTpibG9jayBzcGFucyBjb250cmlidXRlIFxcbiBjaGFyYWN0ZXJzIHRvIHRoZSByZXN1bHQpXG4gIGNvbnN0IGxpbmVSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gIGxpbmVSYW5nZS5zZWxlY3ROb2RlQ29udGVudHMobGluZUVsKTtcbiAgbGluZVJhbmdlLnNldEVuZEJlZm9yZSh0YXJnZXQpO1xuICBjb25zdCBvZmZzZXRJbkxpbmUgPSBsaW5lUmFuZ2UudG9TdHJpbmcoKS5sZW5ndGg7XG5cbiAgLy8gU3VtIHByZWNlZGluZyBsaW5lIGxlbmd0aHMgZnJvbSBzb3VyY2UgdGV4dCwgbm90IHJlbmRlcmVkIG92ZXJsYXkgdGV4dC5cbiAgLy8gVGhlIG92ZXJsYXkgbWF5IGluamVjdCBzcGFjaW5nIGFyb3VuZCB0b2tlbnMgbGlrZSBcIjxcIiwgd2hpY2ggd291bGQgc2tldyBvZmZzZXRzLlxuICBjb25zdCBzb3VyY2VMaW5lcyA9IFN0cmluZyhzb3VyY2VUZXh0KS5zcGxpdCgvXFxyP1xcbi8pO1xuICBsZXQgdG90YWwgPSBvZmZzZXRJbkxpbmU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZU51bWJlcjsgaSsrKSB7XG4gICAgdG90YWwgKz0gKHNvdXJjZUxpbmVzW2ldID8gc291cmNlTGluZXNbaV0ubGVuZ3RoIDogMCkgKyAxO1xuICB9XG4gIHJldHVybiB0b3RhbDtcbn1cblxuZnVuY3Rpb24gdG9rZW5BdEN1cnNvcih0ZXh0LCBjdXJzb3JQb3MpIHtcbiAgY29uc3Qgc3JjID0gU3RyaW5nKHRleHQgfHwgJycpO1xuICBjb25zdCBwb3MgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzcmMubGVuZ3RoLCBjdXJzb3JQb3MgfHwgMCkpO1xuICBjb25zdCBsaW5lU3RhcnQgPSBzcmMubGFzdEluZGV4T2YoJ1xcbicsIE1hdGgubWF4KDAsIHBvcyAtIDEpKSArIDE7XG4gIGxldCBsaW5lRW5kID0gc3JjLmluZGV4T2YoJ1xcbicsIHBvcyk7XG4gIGlmIChsaW5lRW5kIDwgMCkgbGluZUVuZCA9IHNyYy5sZW5ndGg7XG4gIGNvbnN0IGxpbmVUZXh0ID0gc3JjLnNsaWNlKGxpbmVTdGFydCwgbGluZUVuZCk7XG4gIGNvbnN0IFtiYXNlLCBjb21tZW50XSA9IHNwbGl0Q29tbWVudChsaW5lVGV4dCk7XG4gIGNvbnN0IGNvbW1lbnRQb3MgPSBjb21tZW50ID8gbGluZVN0YXJ0ICsgYmFzZS5sZW5ndGggOiAtMTtcbiAgaWYgKGNvbW1lbnRQb3MgPj0gMCAmJiBwb3MgPj0gY29tbWVudFBvcykge1xuICAgIGNvbnN0IHZhbHVlID0gc3JjLnNsaWNlKGNvbW1lbnRQb3MsIGxpbmVFbmQpO1xuICAgIHJldHVybiB7IHR5cGU6ICd0b2stY29tbWVudCcsIHZhbHVlLCBzdGFydDogY29tbWVudFBvcywgZW5kOiBsaW5lRW5kIH07XG4gIH1cbiAgY29uc3QgaGVhZGVyTWF0Y2ggPSBsaW5lVGV4dC5tYXRjaCgvXihcXHMqKSgjezEsMn0pXFxzKyguKykkLyk7XG4gIGlmIChoZWFkZXJNYXRjaCkge1xuICAgIGNvbnN0IGhhc2ggPSBoZWFkZXJNYXRjaFsyXTtcbiAgICBjb25zdCBib2R5ID0gaGVhZGVyTWF0Y2hbM107XG4gICAgY29uc3QgaGFzaFN0YXJ0ID0gbGluZVN0YXJ0ICsgaGVhZGVyTWF0Y2hbMV0ubGVuZ3RoO1xuICAgIGNvbnN0IGJvZHlTdGFydCA9IGxpbmVTdGFydCArIGhlYWRlck1hdGNoWzFdLmxlbmd0aCArIGhhc2gubGVuZ3RoICsgMTtcbiAgICBjb25zdCBib2R5RW5kID0gYm9keVN0YXJ0ICsgYm9keS5sZW5ndGg7XG4gICAgaWYgKHBvcyA+PSBoYXNoU3RhcnQgJiYgcG9zIDw9IGJvZHlFbmQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IGhhc2ggPT09ICcjIycgPyAndG9rLXN1YnRyYWNrJyA6ICd0b2stdHJhY2snLFxuICAgICAgICB2YWx1ZTogYm9keSxcbiAgICAgICAgc3RhcnQ6IGhhc2hTdGFydCxcbiAgICAgICAgZW5kOiBib2R5RW5kLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgY29uc3QgdmFyRGVmTWF0Y2ggPSBsaW5lVGV4dC5tYXRjaCgvXihcXHMqKShbJSZdW15cXHNdKylcXGIvKTtcbiAgaWYgKHZhckRlZk1hdGNoKSB7XG4gICAgY29uc3QgdG9rZW5TdGFydCA9IGxpbmVTdGFydCArIHZhckRlZk1hdGNoWzFdLmxlbmd0aDtcbiAgICBjb25zdCB0b2tlblZhbHVlID0gdmFyRGVmTWF0Y2hbMl07XG4gICAgY29uc3QgdG9rZW5FbmQgPSB0b2tlblN0YXJ0ICsgdG9rZW5WYWx1ZS5sZW5ndGg7XG4gICAgaWYgKHBvcyA+PSB0b2tlblN0YXJ0ICYmIHBvcyA8PSB0b2tlbkVuZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3Rvay12YXItZGVmJyxcbiAgICAgICAgdmFsdWU6IHRva2VuVmFsdWUsXG4gICAgICAgIHN0YXJ0OiB0b2tlblN0YXJ0LFxuICAgICAgICBlbmQ6IHRva2VuRW5kLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgbGV0IHN0YXJ0ID0gcG9zO1xuICBsZXQgZW5kID0gcG9zO1xuICB3aGlsZSAoc3RhcnQgPiAwICYmICEvXFxzLy50ZXN0KHNyY1tzdGFydCAtIDFdKSkgc3RhcnQgLT0gMTtcbiAgd2hpbGUgKGVuZCA8IHNyYy5sZW5ndGggJiYgIS9cXHMvLnRlc3Qoc3JjW2VuZF0pKSBlbmQgKz0gMTtcbiAgY29uc3QgdmFsdWUgPSBzcmMuc2xpY2Uoc3RhcnQsIGVuZCk7XG4gIGlmICghdmFsdWUpIHJldHVybiBudWxsO1xuXG4gIGxldCB0eXBlID0gY2xhc3NpZnkodmFsdWUpO1xuICBpZiAoIXR5cGUgJiYgL15AW15cXHNdKyQvLnRlc3QodmFsdWUpKSB0eXBlID0gJ3Rvay1zZWN0aW9uJztcbiAgaWYgKCF0eXBlKSB0eXBlID0gJ3Rvay11bmtub3duJztcbiAgcmV0dXJuIHsgdHlwZSwgdmFsdWUsIHN0YXJ0LCBlbmQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVkaXRvcihpbml0aWFsVGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd3JhcC5pZCA9ICdlZGl0b3Itd3JhcCc7XG5cbiAgY29uc3QgZ3V0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGd1dHRlci5pZCA9ICdlZGl0b3ItZ3V0dGVyJztcbiAgZ3V0dGVyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gIGNvbnN0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICBwcmUuaWQgPSAnZWRpdG9yLWhsJztcbiAgcHJlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gIGNvbnN0IHRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGEuaWQgPSAnZWRpdG9yJztcbiAgdGEuc3BlbGxjaGVjayA9IGZhbHNlO1xuICB0YS5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgdGEudmFsdWUgPSBpbml0aWFsVGV4dDtcblxuICBjb25zdCB0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGlwLmlkID0gJ3Zhci10b29sdGlwJztcbiAgdGlwLmhpZGRlbiA9IHRydWU7XG4gIHRpcC5pbm5lckhUTUwgPSAnPHN0cm9uZz48L3N0cm9uZz48c3BhbiBjbGFzcz1cInRvb2x0aXAtcmVzb2x2ZWRcIj48L3NwYW4+PGRpdiBjbGFzcz1cInRvb2x0aXAtc3RhZmZcIj48L2Rpdj4nO1xuICBjb25zdCBzdWdnZXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzdWdnZXN0SW5wdXQuaWQgPSAnc3VnZ2VzdC1pbnB1dCc7XG4gIHN1Z2dlc3RJbnB1dC5oaWRkZW4gPSB0cnVlO1xuICBzdWdnZXN0SW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgc3VnZ2VzdElucHV0LmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICBzdWdnZXN0SW5wdXQuc3BlbGxjaGVjayA9IGZhbHNlO1xuICBzdWdnZXN0SW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0NvbXBsZXRpb25zJyk7XG4gIGNvbnN0IHN1Z2dlc3RNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgc3VnZ2VzdE1lbnUuaWQgPSAnc3VnZ2VzdC1tZW51JztcbiAgc3VnZ2VzdE1lbnUuaGlkZGVuID0gdHJ1ZTtcbiAgc3VnZ2VzdE1lbnUuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2xpc3Rib3gnKTtcbiAgc3VnZ2VzdE1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ0NvbXBsZXRpb25zJyk7XG4gIGNvbnN0IHRpcFRpdGxlID0gdGlwLnF1ZXJ5U2VsZWN0b3IoJ3N0cm9uZycpO1xuICBjb25zdCB0aXBCb2R5ID0gdGlwLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLXJlc29sdmVkJyk7XG4gIGNvbnN0IHRpcFN0YWZmID0gdGlwLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLXN0YWZmJyk7XG4gIGNvbnN0IGZsYXNoVGltZXJzID0gbmV3IFNldCgpO1xuICBsZXQgc2NydWJTdGF0ZSA9IG51bGw7XG4gIGxldCBhY3RpdmVUb2tlbnMgPSBbXTtcbiAgbGV0IHF1ZXVlZEFycmFuZ2VtZW50T3JkZXIgPSBudWxsO1xuICBsZXQgc3VnZ2VzdFN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIGFsbEl0ZW1zOiBbXSxcbiAgICBpdGVtczogW10sXG4gICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgdG9rZW46IG51bGwsXG4gICAgZGlzbWlzc2VkVG9rZW46IG51bGwsXG4gIH07XG4gIGxldCBsaW50UmVwb3J0ID0gbnVsbDtcbiAgY29uc3QgSElTVE9SWV9MSU1JVCA9IDIwMDtcbiAgY29uc3QgaGlzdG9yeSA9IHtcbiAgICBlbnRyaWVzOiBbXSxcbiAgICBpbmRleDogLTEsXG4gICAgYXBwbHlpbmc6IGZhbHNlLFxuICB9O1xuICBjb25zdCBTVUdHRVNUSU9OU19FTkFCTEVEID0gb3B0aW9ucy5zdWdnZXN0aW9ucyAhPT0gZmFsc2U7XG4gIGNvbnN0IE1PREVfQ0FORElEQVRFUyA9IFsnbWFqb3InLCAnbWlub3InLCAnZG9yaWFuJywgJ3BocnlnaWFuJywgJ2x5ZGlhbicsICdtaXhvbHlkaWFuJywgJ2xvY3JpYW4nXTtcbiAgY29uc3QgTk9URV9DQU5ESURBVEVTID0gJ0FCQ0RFRkcnLnNwbGl0KCcnKS5mbGF0TWFwKG5vdGUgPT4gKFxuICAgIFsnJywgJyMnLCAnYiddLmZsYXRNYXAoYWNjaWRlbnRhbCA9PiAoXG4gICAgICBbMywgNCwgNV0ubWFwKG9jdGF2ZSA9PiBgJHtub3RlfSR7YWNjaWRlbnRhbH0ke29jdGF2ZX1gKVxuICAgICkpXG4gICkpO1xuICBjb25zdCBJTlNUUlVNRU5UX09QVElPTlMgPSBBcnJheS5pc0FycmF5KG9wdGlvbnMuaW5zdHJ1bWVudE9wdGlvbnMpICYmIG9wdGlvbnMuaW5zdHJ1bWVudE9wdGlvbnMubGVuZ3RoXG4gICAgPyBvcHRpb25zLmluc3RydW1lbnRPcHRpb25zXG4gICAgOiBbXG4gICAgICAuLi5BcnJheS5mcm9tKHsgbGVuZ3RoOiAxMjggfSwgKF8sIGkpID0+IGAjJHtpfWApLFxuICAgICAgLi4uQXJyYXkuZnJvbSh7IGxlbmd0aDogMTI4IH0sIChfLCBpKSA9PiBgIyR7MjAwMCArIGl9YCksXG4gICAgXS5tYXAodmFsdWUgPT4ge1xuICAgICAgY29uc3QgcmF3ID0gdmFsdWUuc2xpY2UoMSk7XG4gICAgICBjb25zdCB0aXRsZSA9IG9wdGlvbnMucmVzb2x2ZUluc3RydW1lbnQgPyBvcHRpb25zLnJlc29sdmVJbnN0cnVtZW50KHJhdykgOiBudWxsO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdmFsdWUsXG4gICAgICAgIGxhYmVsOiB0aXRsZSA/IGAke3RpdGxlfSAoJHt2YWx1ZX0pYCA6IHZhbHVlLFxuICAgICAgfTtcbiAgICB9KTtcbiAgY29uc3QgQUxMX0NBTkRJREFURVMgPSBbLi4uTk9URV9DQU5ESURBVEVTLCAuLi5NT0RFX0NBTkRJREFURVNdO1xuXG4gIGNvbnN0IHRvb2x0aXBIYW5kbGVycyA9IFtcbiAgICBvcHRpb25zLnJlc29sdmVOb3RlICYmIHtcbiAgICAgIGF0dHI6ICdub3RlJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZU5vdGUsXG4gICAgICBub3RlczogdmFsdWUgPT4gW3ZhbHVlXSxcbiAgICAgIHN0YWZmTW9kZTogJ3NpbmdsZScsXG4gICAgICB0aXRsZTogdmFsdWUgPT4gbm9ybWFsaXplTm90ZSh2YWx1ZSksXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVDaG9yZCAmJiB7XG4gICAgICBhdHRyOiAnY2hvcmQnLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlQ2hvcmQsXG4gICAgICBub3RlczogdmFsdWUgPT4gdmFsdWUuc3BsaXQoJ3wnKS5tYXAobm9ybWFsaXplTm90ZSksXG4gICAgICBzdGFmZk1vZGU6ICdjaG9yZCcsXG4gICAgICB0aXRsZTogKCkgPT4gJ0Nob3JkJyxcbiAgICB9LFxuICAgIG9wdGlvbnMucmVzb2x2ZU1vZGUgJiYge1xuICAgICAgYXR0cjogJ21vZGUnLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlTW9kZSxcbiAgICAgIG5vdGVzOiBvcHRpb25zLnJlc29sdmVNb2RlTm90ZXMsXG4gICAgICBzdGFmZk1vZGU6ICdzY2FsZScsXG4gICAgICB0aXRsZTogdmFsdWUgPT4gdmFsdWUsXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVJbnN0cnVtZW50ICYmIHtcbiAgICAgIGF0dHI6ICdpbnN0cnVtZW50JyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZUluc3RydW1lbnQsXG4gICAgICB0aXRsZTogdmFsdWUgPT4gYCMke3ZhbHVlfWAsXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVTZWN0aW9uICYmIHtcbiAgICAgIGF0dHI6ICdzZWN0aW9uJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZVNlY3Rpb24sXG4gICAgICB0aXRsZTogdmFsdWUgPT4gYEAke3ZhbHVlfWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBhdHRyOiAnaW5oZXJpdCcsXG4gICAgICByZXNvbHZlOiAoX3ZhbHVlLCBlbCkgPT4ge1xuICAgICAgICBjb25zdCBmcm9tID0gZWwgJiYgZWwuZGF0YXNldCA/IGVsLmRhdGFzZXQuaW5oZXJpdFNvdXJjZSA6IG51bGw7XG4gICAgICAgIGNvbnN0IHRvID0gZWwgJiYgZWwuZGF0YXNldCA/IGVsLmRhdGFzZXQuaW5oZXJpdFRhcmdldCA6IG51bGw7XG4gICAgICAgIGlmIChmcm9tICYmIHRvKSB7XG4gICAgICAgICAgcmV0dXJuIGBTZWN0aW9uIEAke2Zyb219IGluaGVyaXRzIGZyb20gQCR7dG99YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ0luaGVyaXQvY29weSBmcm9tIGFub3RoZXIgc2VjdGlvbic7XG4gICAgICB9LFxuICAgICAgdGl0bGU6IChfdmFsdWUsIGVsKSA9PiB7XG4gICAgICAgIGNvbnN0IGZyb20gPSBlbCAmJiBlbC5kYXRhc2V0ID8gZWwuZGF0YXNldC5pbmhlcml0U291cmNlIDogbnVsbDtcbiAgICAgICAgY29uc3QgdG8gPSBlbCAmJiBlbC5kYXRhc2V0ID8gZWwuZGF0YXNldC5pbmhlcml0VGFyZ2V0IDogbnVsbDtcbiAgICAgICAgcmV0dXJuIGZyb20gJiYgdG8gPyBgQCR7ZnJvbX0gPCBAJHt0b31gIDogJzwnO1xuICAgICAgfSxcbiAgICB9LFxuICAgIG9wdGlvbnMucmVzb2x2ZVZhciAmJiB7XG4gICAgICBhdHRyOiAndmFyJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZVZhcixcbiAgICAgIHRpdGxlOiB2YWx1ZSA9PiB2YWx1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGF0dHI6ICdyZXBlYXRMYXN0JyxcbiAgICAgIHJlc29sdmU6ICgpID0+ICdSZXBlYXRzIHRoZSBwcmVjZWRpbmcgZXhwcmVzc2lvbiBvbmNlIG1vcmUnLFxuICAgICAgdGl0bGU6ICgpID0+ICclJyxcbiAgICB9LFxuICAgIG9wdGlvbnMucmVzb2x2ZVZlbG9jaXR5ICYmIHtcbiAgICAgIGF0dHI6ICd2ZWxvY2l0eScsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVWZWxvY2l0eSxcbiAgICAgIHRpdGxlOiB2ID0+IGBWZWxvY2l0eSAke3Z9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGF0dHI6ICdyZXBlYXQnLFxuICAgICAgcmVzb2x2ZTogdiA9PiB7XG4gICAgICAgIGNvbnN0IG4gPSBwYXJzZUludCh2LCAxMCk7XG4gICAgICAgIHJldHVybiBgUGxheXMgdGhlIHByZWNlZGluZyBzZXF1ZW5jZSAke259IHRpbWUke24gIT09IDEgPyAncycgOiAnJ30gaW4gYSByb3dgO1xuICAgICAgfSxcbiAgICAgIHRpdGxlOiB2ID0+IGBcdTAwRDcke3Z9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGF0dHI6ICdudW1iZXInLFxuICAgICAgcmVzb2x2ZTogKCkgPT4gJ051bWVyaWMgdmFsdWUgXHUyMDE0IHVzZWQgYXMgdmVsb2NpdHksIG9jdGF2ZSwgb3IgcGFyYW1ldGVyJyxcbiAgICAgIHRpdGxlOiB2ID0+IHYsXG4gICAgfSxcbiAgICB7XG4gICAgICBhdHRyOiAnZGVncmVlJyxcbiAgICAgIHJlc29sdmU6IHZhbHVlID0+IHtcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBTdHJpbmcodmFsdWUgfHwgJycpLm1hdGNoKC9eKFxcZCspXFwuXFwuKFxcZCspJC8pO1xuICAgICAgICBpZiAocmFuZ2UpIHtcbiAgICAgICAgICBjb25zdCBhID0gcGFyc2VJbnQocmFuZ2VbMV0sIDEwKTtcbiAgICAgICAgICBjb25zdCBiID0gcGFyc2VJbnQocmFuZ2VbMl0sIDEwKTtcbiAgICAgICAgICByZXR1cm4gYFNlbGVjdHMgc2NhbGUgZGVncmVlcyAke2F9IHRocm91Z2ggJHtifSBmcm9tIHRoZSBjdXJyZW50IHJvb3QrbW9kZSBjb250ZXh0ICgqKilgO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgICAgIGlmICghTnVtYmVyLmlzTmFOKG4pKSB7XG4gICAgICAgICAgcmV0dXJuIGBTZWxlY3RzIHNjYWxlIGRlZ3JlZSAke259IGZyb20gdGhlIGN1cnJlbnQgcm9vdCttb2RlIGNvbnRleHQgKCoqKWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdTZWxlY3RzIGRlZ3JlZXMgZnJvbSB0aGUgY3VycmVudCByb290K21vZGUgY29udGV4dCAoKiopJztcbiAgICAgIH0sXG4gICAgICB0aXRsZTogdmFsdWUgPT4gYERlZ3JlZSAke3ZhbHVlfWAsXG4gICAgfSxcbiAgICB7XG4gICAgICBhdHRyOiAncGF0dGVybicsXG4gICAgICByZXNvbHZlOiB2YWx1ZSA9PiBgJHtkZXNjcmliZVBhdHRlcm4odmFsdWUpfVxcbnggPSBoaXQgIHwgIC0gPSByZXN0ICB8ICBfID0gc3VzdGFpbiAgfCAgWyBdID0gc3ViZGl2aWRlYCxcbiAgICAgIHRpdGxlOiAoKSA9PiAnUmh5dGhtIHBhdHRlcm4nLFxuICAgICAgdmlzdWFsOiB2YWx1ZSA9PiBidWlsZFBhdHRlcm5QcmV2aWV3TWFya3VwKHZhbHVlKSxcbiAgICB9LFxuICBdLmZpbHRlcihCb29sZWFuKTtcblxuICBmdW5jdGlvbiBzeW5jKCkge1xuICAgIHByZS5pbm5lckhUTUwgPSBoaWdobGlnaHQodGEudmFsdWUpO1xuICAgIGNvbnN0IGxpbmVDb3VudCA9IFN0cmluZyh0YS52YWx1ZSkuc3BsaXQoL1xccj9cXG4vKS5sZW5ndGg7XG4gICAgZ3V0dGVyLmlubmVySFRNTCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IGxpbmVDb3VudCB9LCAoXywgaW5kZXgpID0+IChcbiAgICAgIGA8c3BhbiBjbGFzcz1cImVkaXRvci1sblwiIGRhdGEtbGluZT1cIiR7aW5kZXggKyAxfVwiPiR7aW5kZXggKyAxfTwvc3Bhbj5gXG4gICAgKSkuam9pbignJyk7XG4gICAgc3luY0d1dHRlckhlaWdodHMoKTtcbiAgICBhcHBseUxpbnRNYXJrZXJzKCk7XG4gICAgYXBwbHlMaW50TGluZU1hcmtlcnMoKTtcbiAgICBhcHBseVF1ZXVlZEFycmFuZ2VtZW50VG9rZW4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN5bmNHdXR0ZXJIZWlnaHRzKCkge1xuICAgIGNvbnN0IGd1dHRlckxpbmVzID0gWy4uLmd1dHRlci5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdG9yLWxuW2RhdGEtbGluZV0nKV07XG4gICAgY29uc3QgZWRpdG9yTGluZXMgPSBbLi4ucHJlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5obC1saW5lW2RhdGEtbGluZV0nKV07XG4gICAgaWYgKCFwcmUuaXNDb25uZWN0ZWQpIHtcbiAgICAgIGd1dHRlckxpbmVzLmZvckVhY2goKGxpbmVFbCkgPT4ge1xuICAgICAgICBsaW5lRWwuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY291bnQgPSBNYXRoLm1pbihndXR0ZXJMaW5lcy5sZW5ndGgsIGVkaXRvckxpbmVzLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBoID0gTWF0aC5tYXgoMSwgZWRpdG9yTGluZXNbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KTtcbiAgICAgIGd1dHRlckxpbmVzW2ldLnN0eWxlLmhlaWdodCA9IGAke2h9cHhgO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkTGludExpbmVNYXAoKSB7XG4gICAgY29uc3QgbWFwID0gbmV3IE1hcCgpO1xuICAgIGlmICghbGludFJlcG9ydCkgcmV0dXJuIG1hcDtcblxuICAgIGNvbnN0IHB1c2ggPSAobGV2ZWwsIGl0ZW0pID0+IHtcbiAgICAgIGlmICghaXRlbSB8fCAhTnVtYmVyLmlzSW50ZWdlcihpdGVtLmxpbmUpIHx8IGl0ZW0ubGluZSA8IDEpIHJldHVybjtcbiAgICAgIGNvbnN0IGxpbmUgPSBpdGVtLmxpbmU7XG4gICAgICBjb25zdCBleGlzdGluZyA9IG1hcC5nZXQobGluZSkgfHwgeyBsZXZlbDogJ3dhcm5pbmcnLCBtZXNzYWdlczogW10gfTtcbiAgICAgIGlmIChsZXZlbCA9PT0gJ2Vycm9yJykgZXhpc3RpbmcubGV2ZWwgPSAnZXJyb3InO1xuICAgICAgY29uc3QgcHJlZml4ID0gaXRlbS5ydWxlID8gYFske2l0ZW0ucnVsZX1dIGAgOiAnJztcbiAgICAgIGNvbnN0IHRleHQgPSBgJHtsZXZlbC50b1VwcGVyQ2FzZSgpfTogJHtwcmVmaXh9JHtpdGVtLm1lc3NhZ2V9YDtcbiAgICAgIGlmICghZXhpc3RpbmcubWVzc2FnZXMuaW5jbHVkZXModGV4dCkpIGV4aXN0aW5nLm1lc3NhZ2VzLnB1c2godGV4dCk7XG4gICAgICBtYXAuc2V0KGxpbmUsIGV4aXN0aW5nKTtcbiAgICB9O1xuXG4gICAgKGxpbnRSZXBvcnQuZXJyb3JzIHx8IFtdKS5mb3JFYWNoKGl0ZW0gPT4gcHVzaCgnZXJyb3InLCBpdGVtKSk7XG4gICAgKGxpbnRSZXBvcnQud2FybmluZ3MgfHwgW10pLmZvckVhY2goaXRlbSA9PiBwdXNoKCd3YXJuaW5nJywgaXRlbSkpO1xuICAgIHJldHVybiBtYXA7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseUxpbnRMaW5lTWFya2VycygpIHtcbiAgICBjb25zdCBsaW5lTWFwID0gYnVpbGRMaW50TGluZU1hcCgpO1xuICAgIGNvbnN0IGxpbmVOdW1zID0gZ3V0dGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0b3ItbG5bZGF0YS1saW5lXScpO1xuICAgIGxpbmVOdW1zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtbGludC1lcnJvcicsICdoYXMtbGludC13YXJuaW5nJyk7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbGludC1sZXZlbCcpO1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxpbnQnKTtcbiAgICAgIGNvbnN0IGxpbmUgPSBwYXJzZUludChlbC5kYXRhc2V0LmxpbmUsIDEwKTtcbiAgICAgIGNvbnN0IGluZm8gPSBsaW5lTWFwLmdldChsaW5lKTtcbiAgICAgIGlmICghaW5mbykgcmV0dXJuO1xuICAgICAgaWYgKGluZm8ubGV2ZWwgPT09ICdlcnJvcicpIGVsLmNsYXNzTGlzdC5hZGQoJ2hhcy1saW50LWVycm9yJyk7XG4gICAgICBlbHNlIGVsLmNsYXNzTGlzdC5hZGQoJ2hhcy1saW50LXdhcm5pbmcnKTtcbiAgICAgIGVsLmRhdGFzZXQubGludExldmVsID0gaW5mby5sZXZlbDtcbiAgICAgIGVsLmRhdGFzZXQubGludCA9IGluZm8ubWVzc2FnZXMuam9pbignXFxuJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBsaW5lcyA9IHByZS5xdWVyeVNlbGVjdG9yQWxsKCcuaGwtbGluZVtkYXRhLWxpbmVdJyk7XG4gICAgbGluZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1saW50LWVycm9yJywgJ2hhcy1saW50LXdhcm5pbmcnKTtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1saW50LWxldmVsJyk7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbGludCcpO1xuICAgICAgY29uc3QgbGluZSA9IHBhcnNlSW50KGVsLmRhdGFzZXQubGluZSwgMTApICsgMTtcbiAgICAgIGNvbnN0IGluZm8gPSBsaW5lTWFwLmdldChsaW5lKTtcbiAgICAgIGlmICghaW5mbykgcmV0dXJuO1xuICAgICAgaWYgKGluZm8ubGV2ZWwgPT09ICdlcnJvcicpIGVsLmNsYXNzTGlzdC5hZGQoJ2hhcy1saW50LWVycm9yJyk7XG4gICAgICBlbHNlIGVsLmNsYXNzTGlzdC5hZGQoJ2hhcy1saW50LXdhcm5pbmcnKTtcbiAgICAgIGVsLmRhdGFzZXQubGludExldmVsID0gaW5mby5sZXZlbDtcbiAgICAgIGVsLmRhdGFzZXQubGludCA9IGluZm8ubWVzc2FnZXMuam9pbignXFxuJyk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEhpc3RvcnlFbnRyeSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHRhLnZhbHVlLFxuICAgICAgc3RhcnQ6IHRhLnNlbGVjdGlvblN0YXJ0LFxuICAgICAgZW5kOiB0YS5zZWxlY3Rpb25FbmQsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2hIaXN0b3J5RW50cnkoKSB7XG4gICAgaWYgKGhpc3RvcnkuYXBwbHlpbmcpIHJldHVybjtcbiAgICBjb25zdCBuZXh0ID0gYnVpbGRIaXN0b3J5RW50cnkoKTtcbiAgICBjb25zdCBjdXJyZW50ID0gaGlzdG9yeS5lbnRyaWVzW2hpc3RvcnkuaW5kZXhdO1xuXG4gICAgaWYgKFxuICAgICAgY3VycmVudFxuICAgICAgJiYgY3VycmVudC52YWx1ZSA9PT0gbmV4dC52YWx1ZVxuICAgICAgJiYgY3VycmVudC5zdGFydCA9PT0gbmV4dC5zdGFydFxuICAgICAgJiYgY3VycmVudC5lbmQgPT09IG5leHQuZW5kXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGhpc3RvcnkuaW5kZXggPCBoaXN0b3J5LmVudHJpZXMubGVuZ3RoIC0gMSkge1xuICAgICAgaGlzdG9yeS5lbnRyaWVzLnNwbGljZShoaXN0b3J5LmluZGV4ICsgMSk7XG4gICAgfVxuXG4gICAgaGlzdG9yeS5lbnRyaWVzLnB1c2gobmV4dCk7XG4gICAgaWYgKGhpc3RvcnkuZW50cmllcy5sZW5ndGggPiBISVNUT1JZX0xJTUlUKSB7XG4gICAgICBoaXN0b3J5LmVudHJpZXMuc2hpZnQoKTtcbiAgICB9XG4gICAgaGlzdG9yeS5pbmRleCA9IGhpc3RvcnkuZW50cmllcy5sZW5ndGggLSAxO1xuICB9XG5cbiAgZnVuY3Rpb24gcnVuSW5wdXRFZmZlY3RzKCkge1xuICAgIHN5bmMoKTtcbiAgICBoaWRlVG9vbHRpcCgpO1xuICAgIHVwZGF0ZVN1Z2dlc3Rpb25zKCk7XG4gICAgaWYgKCFzY3J1YlN0YXRlKSBlbWl0Q3Vyc29yVG9rZW4oKTtcbiAgICBpZiAob3B0aW9ucy5vbklucHV0KSBvcHRpb25zLm9uSW5wdXQodGEudmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlIaXN0b3J5RW50cnkoZW50cnkpIHtcbiAgICBpZiAoIWVudHJ5KSByZXR1cm47XG4gICAgaGlzdG9yeS5hcHBseWluZyA9IHRydWU7XG4gICAgdGEudmFsdWUgPSBlbnRyeS52YWx1ZTtcbiAgICB0YS5zZWxlY3Rpb25TdGFydCA9IGVudHJ5LnN0YXJ0O1xuICAgIHRhLnNlbGVjdGlvbkVuZCA9IGVudHJ5LmVuZDtcbiAgICBoaXN0b3J5LmFwcGx5aW5nID0gZmFsc2U7XG4gICAgcnVuSW5wdXRFZmZlY3RzKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bmRvSGlzdG9yeSgpIHtcbiAgICBpZiAoaGlzdG9yeS5pbmRleCA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgaGlzdG9yeS5pbmRleCAtPSAxO1xuICAgIGFwcGx5SGlzdG9yeUVudHJ5KGhpc3RvcnkuZW50cmllc1toaXN0b3J5LmluZGV4XSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiByZWRvSGlzdG9yeSgpIHtcbiAgICBpZiAoaGlzdG9yeS5pbmRleCA+PSBoaXN0b3J5LmVudHJpZXMubGVuZ3RoIC0gMSkgcmV0dXJuIGZhbHNlO1xuICAgIGhpc3RvcnkuaW5kZXggKz0gMTtcbiAgICBhcHBseUhpc3RvcnlFbnRyeShoaXN0b3J5LmVudHJpZXNbaGlzdG9yeS5pbmRleF0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlMaW50TWFya2VycygpIHtcbiAgICBwcmUucXVlcnlTZWxlY3RvckFsbCgnLnRvay1lcnJvcicpLmZvckVhY2goZWwgPT4ge1xuICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgndG9rLWVycm9yJyk7XG4gICAgICBpZiAoZWwuZGF0YXNldCkgZGVsZXRlIGVsLmRhdGFzZXQubGludDtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1hcmsgPSAoZWwsIHJlYXNvbikgPT4ge1xuICAgICAgaWYgKCFlbCkgcmV0dXJuO1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZCgndG9rLWVycm9yJyk7XG4gICAgICBpZiAoZWwuZGF0YXNldCkgZWwuZGF0YXNldC5saW50ID0gcmVhc29uIHx8ICdJbnZhbGlkIHRva2VuIHZhbHVlJztcbiAgICB9O1xuXG4gICAgY29uc3Qgc291cmNlID0gU3RyaW5nKHRhLnZhbHVlIHx8ICcnKTtcbiAgICBjb25zdCB2YXJEZWZzID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IHNlY3Rpb25EZWZzID0gbmV3IFNldCgpO1xuICAgIHNvdXJjZS5zcGxpdCgvXFxyP1xcbi8pLmZvckVhY2gocmF3TGluZSA9PiB7XG4gICAgICBjb25zdCBub0NvbW1lbnQgPSByYXdMaW5lLnJlcGxhY2UoLzsuKiQvLCAnJyk7XG4gICAgICBjb25zdCB2YXJNYXRjaCA9IG5vQ29tbWVudC5tYXRjaCgvXlxccyooJVteXFxzXSspXFxzKy8pO1xuICAgICAgaWYgKHZhck1hdGNoKSB2YXJEZWZzLmFkZCh2YXJNYXRjaFsxXSk7XG4gICAgICBjb25zdCBzZWN0aW9uTWF0Y2ggPSBub0NvbW1lbnQubWF0Y2goL15cXHMqQChbXlxcczxdKykvKTtcbiAgICAgIGlmIChzZWN0aW9uTWF0Y2gpIHNlY3Rpb25EZWZzLmFkZChzZWN0aW9uTWF0Y2hbMV0pO1xuICAgIH0pO1xuXG4gICAgcHJlLnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2stY2hhbm5lbFtkYXRhLWluc3RydW1lbnRdJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICBjb25zdCByYXcgPSBlbC5kYXRhc2V0Lmluc3RydW1lbnQ7XG4gICAgICBjb25zdCBuID0gcGFyc2VJbnQocmF3LCAxMCk7XG4gICAgICBpZiAoTnVtYmVyLmlzTmFOKG4pKSB7XG4gICAgICAgIG1hcmsoZWwsICdJbnZhbGlkIGluc3RydW1lbnQgbnVtYmVyJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnJlc29sdmVJbnN0cnVtZW50ICYmICFvcHRpb25zLnJlc29sdmVJbnN0cnVtZW50KHJhdykpIHtcbiAgICAgICAgbWFyayhlbCwgYFVua25vd24gaW5zdHJ1bWVudCAjJHtyYXd9YCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcmUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmVsb2NpdHldJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICBjb25zdCBuID0gcGFyc2VJbnQoZWwuZGF0YXNldC52ZWxvY2l0eSwgMTApO1xuICAgICAgaWYgKE51bWJlci5pc05hTihuKSB8fCBuIDwgMCB8fCBuID4gMTI3KSB7XG4gICAgICAgIG1hcmsoZWwsICdWZWxvY2l0eSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMTI3Jyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcmUucXVlcnlTZWxlY3RvckFsbCgnLnRvay1yZXBlYXRbZGF0YS1yZXBlYXRdJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICBjb25zdCBuID0gcGFyc2VJbnQoZWwuZGF0YXNldC5yZXBlYXQsIDEwKTtcbiAgICAgIGlmIChOdW1iZXIuaXNOYU4obikgfHwgbiA8IDEpIHtcbiAgICAgICAgbWFyayhlbCwgJ1JlcGVhdCBtdXN0IGJlID49IDEnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHByZS5xdWVyeVNlbGVjdG9yQWxsKCcudG9rLWRlZ3JlZVtkYXRhLWRlZ3JlZV0nKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGNvbnN0IHJhdyA9IFN0cmluZyhlbC5kYXRhc2V0LmRlZ3JlZSB8fCAnJyk7XG4gICAgICBjb25zdCByYW5nZSA9IHJhdy5tYXRjaCgvXihcXGQrKVxcLlxcLihcXGQrKSQvKTtcbiAgICAgIGlmIChyYW5nZSkge1xuICAgICAgICBjb25zdCBhID0gcGFyc2VJbnQocmFuZ2VbMV0sIDEwKTtcbiAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KHJhbmdlWzJdLCAxMCk7XG4gICAgICAgIGlmIChhIDwgMSB8fCBiIDwgMSkge1xuICAgICAgICAgIG1hcmsoZWwsICdEZWdyZWUgcmFuZ2UgbXVzdCBiZSA+PSAxJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhID4gYikge1xuICAgICAgICAgIG1hcmsoZWwsICdEZWdyZWUgcmFuZ2UgbXVzdCBiZSBhc2NlbmRpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG4gPSBwYXJzZUludChyYXcsIDEwKTtcbiAgICAgIGlmIChOdW1iZXIuaXNOYU4obikgfHwgbiA8IDEpIHtcbiAgICAgICAgbWFyayhlbCwgJ0RlZ3JlZSBtdXN0IGJlID49IDEnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHByZS5xdWVyeVNlbGVjdG9yQWxsKCcudG9rLW5vdGVbZGF0YS1ub3RlXScpLmZvckVhY2goZWwgPT4ge1xuICAgICAgY29uc3QgbWlkaSA9IG5vdGVUb01pZGkoZWwuZGF0YXNldC5ub3RlKTtcbiAgICAgIGlmIChtaWRpID09IG51bGwgfHwgbWlkaSA8IDAgfHwgbWlkaSA+IDEyNykge1xuICAgICAgICBtYXJrKGVsLCAnTm90ZSBvdXQgb2YgTUlESSByYW5nZSAoMC4uMTI3KScpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHJlLnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2stdmFyLXJlZltkYXRhLXZhcl0nKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBlbC5kYXRhc2V0LnZhcjtcbiAgICAgIGlmICghbmFtZSB8fCBuYW1lID09PSAnJScpIHJldHVybjtcbiAgICAgIGlmICghdmFyRGVmcy5oYXMobmFtZSkpIHtcbiAgICAgICAgbWFyayhlbCwgYFVua25vd24gdmFyaWFibGUgJHtuYW1lfWApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHJlLnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2stYXJyLXRva2VuLnRvay1zZWN0aW9uW2RhdGEtc2VjdGlvbl0nKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBlbC5kYXRhc2V0LnNlY3Rpb247XG4gICAgICBpZiAoIXNlY3Rpb25EZWZzLmhhcyhuYW1lKSkge1xuICAgICAgICBtYXJrKGVsLCBgVW5rbm93biBzZWN0aW9uIEAke25hbWV9YCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcmUucXVlcnlTZWxlY3RvckFsbCgnLnRvay1pbmhlcml0W2RhdGEtaW5oZXJpdC10YXJnZXRdJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBTdHJpbmcoZWwuZGF0YXNldC5pbmhlcml0VGFyZ2V0IHx8ICcnKS50cmltKCk7XG4gICAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuICAgICAgaWYgKCFzZWN0aW9uRGVmcy5oYXModGFyZ2V0KSkge1xuICAgICAgICBtYXJrKGVsLCBgVW5rbm93biBpbmhlcml0ZWQgc2VjdGlvbiBAJHt0YXJnZXR9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlVG9vbHRpcCgpIHtcbiAgICB0aXAuaGlkZGVuID0gdHJ1ZTtcbiAgICB0aXBTdGFmZi5pbm5lckhUTUwgPSAnJztcbiAgICB0aXBTdGFmZi5oaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJTY3J1YkN1cnNvcigpIHtcbiAgICB3cmFwLmNsYXNzTGlzdC5yZW1vdmUoJ3NjcnViLWhvdmVyJyk7XG4gICAgd3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdzY3J1Yi1hY3RpdmUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyQWN0aXZlVG9rZW5IaWdobGlnaHQoKSB7XG4gICAgYWN0aXZlVG9rZW5zLmZvckVhY2godG9rZW4gPT4gdG9rZW4uY2xhc3NMaXN0LnJlbW92ZSgndG9rLWFjdGl2ZScpKTtcbiAgICBhY3RpdmVUb2tlbnMgPSBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVtaXRDdXJzb3JUb2tlbigpIHtcbiAgICBpZiAoIW9wdGlvbnMub25DdXJzb3JUb2tlbikgcmV0dXJuO1xuICAgIGNvbnN0IHRva2VuID0gdG9rZW5BdEN1cnNvcih0YS52YWx1ZSwgdGEuc2VsZWN0aW9uU3RhcnQpO1xuICAgIG9wdGlvbnMub25DdXJzb3JUb2tlbih0b2tlbik7XG4gIH1cblxuICBmdW5jdGlvbiBlbWl0U2NydWJUb2tlbih2YWx1ZSkge1xuICAgIGlmICghb3B0aW9ucy5vbkN1cnNvclRva2VuKSByZXR1cm47XG4gICAgb3B0aW9ucy5vbkN1cnNvclRva2VuKHsgdHlwZTogJ3Rvay1sZXZlbCcsIHZhbHVlOiBTdHJpbmcodmFsdWUpIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNDb21tZW50VG9nZ2xlU2hvcnRjdXQoZSkge1xuICAgIGlmICghKGUubWV0YUtleSB8fCBlLmN0cmxLZXkpIHx8IGUuYWx0S2V5KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGUuY29kZSA9PT0gJ1NsYXNoJykgcmV0dXJuIHRydWU7XG4gICAgaWYgKGUuY29kZSA9PT0gJ0RpZ2l0NycgJiYgZS5zaGlmdEtleSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKGUua2V5ID09PSAnLycpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpbmVDb2xBdCh0ZXh0LCBwb3MpIHtcbiAgICBjb25zdCBzcmMgPSBTdHJpbmcodGV4dCB8fCAnJyk7XG4gICAgY29uc3QgY2xhbXBlZCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHNyYy5sZW5ndGgsIHBvcyB8fCAwKSk7XG4gICAgY29uc3QgbGluZXMgPSBzcmMuc3BsaXQoJ1xcbicpO1xuICAgIGxldCB0b3RhbCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBsaW5lTGVuID0gbGluZXNbaV0ubGVuZ3RoO1xuICAgICAgY29uc3QgbGluZUVuZCA9IHRvdGFsICsgbGluZUxlbjtcbiAgICAgIGlmIChjbGFtcGVkIDw9IGxpbmVFbmQpIHtcbiAgICAgICAgcmV0dXJuIHsgbGluZTogaSwgY29sOiBjbGFtcGVkIC0gdG90YWwgfTtcbiAgICAgIH1cbiAgICAgIHRvdGFsID0gbGluZUVuZCArIDE7XG4gICAgfVxuXG4gICAgY29uc3QgbGFzdExpbmUgPSBNYXRoLm1heCgwLCBsaW5lcy5sZW5ndGggLSAxKTtcbiAgICByZXR1cm4geyBsaW5lOiBsYXN0TGluZSwgY29sOiBsaW5lc1tsYXN0TGluZV0ubGVuZ3RoIH07XG4gIH1cblxuICBmdW5jdGlvbiBvZmZzZXRBdChsaW5lcywgbGluZSwgY29sKSB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBjb25zdCBpZHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihsaW5lcy5sZW5ndGggLSAxLCBsaW5lKSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHg7IGkgKz0gMSkgdG90YWwgKz0gbGluZXNbaV0ubGVuZ3RoICsgMTtcbiAgICBjb25zdCBjbGFtcGVkQ29sID0gTWF0aC5tYXgoMCwgTWF0aC5taW4obGluZXNbaWR4XS5sZW5ndGgsIGNvbCkpO1xuICAgIHJldHVybiB0b3RhbCArIGNsYW1wZWRDb2w7XG4gIH1cblxuICBmdW5jdGlvbiBqdW1wVG9MaW5lKGxpbmVOdW1iZXIpIHtcbiAgICBjb25zdCBsaW5lcyA9IHRhLnZhbHVlLnNwbGl0KCdcXG4nKTtcbiAgICBpZiAoIWxpbmVzLmxlbmd0aCkgcmV0dXJuO1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlSW50KGxpbmVOdW1iZXIsIDEwKTtcbiAgICBpZiAoIU51bWJlci5pc0ludGVnZXIocGFyc2VkKSB8fCBwYXJzZWQgPCAxKSByZXR1cm47XG5cbiAgICBjb25zdCBpZHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihsaW5lcy5sZW5ndGggLSAxLCBwYXJzZWQgLSAxKSk7XG4gICAgY29uc3QgcG9zID0gb2Zmc2V0QXQobGluZXMsIGlkeCwgMCk7XG4gICAgdGEuc2VsZWN0aW9uU3RhcnQgPSBwb3M7XG4gICAgdGEuc2VsZWN0aW9uRW5kID0gcG9zO1xuICAgIHRhLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcblxuICAgIGNvbnN0IGxpbmVFbCA9IHByZS5xdWVyeVNlbGVjdG9yKGAuaGwtbGluZVtkYXRhLWxpbmU9XCIke2lkeH1cIl1gKTtcbiAgICBpZiAobGluZUVsKSB7XG4gICAgICBjb25zdCB0YXJnZXRUb3AgPSBNYXRoLm1heCgwLCBsaW5lRWwub2Zmc2V0VG9wIC0gTWF0aC5mbG9vcih0YS5jbGllbnRIZWlnaHQgKiAwLjM1KSk7XG4gICAgICB0YS5zY3JvbGxUb3AgPSB0YXJnZXRUb3A7XG4gICAgICBwcmUuc2Nyb2xsVG9wID0gdGEuc2Nyb2xsVG9wO1xuICAgICAgZ3V0dGVyLnNjcm9sbFRvcCA9IHRhLnNjcm9sbFRvcDtcbiAgICB9XG5cbiAgICBlbWl0Q3Vyc29yVG9rZW4oKTtcbiAgICB1cGRhdGVTdWdnZXN0aW9ucygpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlU2VsZWN0aW9uQ29tbWVudHMoKSB7XG4gICAgY29uc3Qgc3JjID0gdGEudmFsdWU7XG4gICAgY29uc3Qgc2VsU3RhcnQgPSB0YS5zZWxlY3Rpb25TdGFydDtcbiAgICBjb25zdCBzZWxFbmQgPSB0YS5zZWxlY3Rpb25FbmQ7XG4gICAgY29uc3Qgc3RhcnRMQyA9IGxpbmVDb2xBdChzcmMsIHNlbFN0YXJ0KTtcbiAgICBjb25zdCBlbmRQcm9iZSA9IHNlbEVuZCA+IHNlbFN0YXJ0ID8gc2VsRW5kIC0gMSA6IHNlbEVuZDtcbiAgICBjb25zdCBlbmRMQyA9IGxpbmVDb2xBdChzcmMsIGVuZFByb2JlKTtcbiAgICBjb25zdCBsaW5lcyA9IHNyYy5zcGxpdCgnXFxuJyk7XG4gICAgY29uc3Qgc3RhcnRMaW5lID0gTWF0aC5tYXgoMCwgc3RhcnRMQy5saW5lKTtcbiAgICBjb25zdCBlbmRMaW5lID0gTWF0aC5tYXgoc3RhcnRMaW5lLCBlbmRMQy5saW5lKTtcbiAgICBjb25zdCBzbGljZSA9IGxpbmVzLnNsaWNlKHN0YXJ0TGluZSwgZW5kTGluZSArIDEpO1xuICAgIGNvbnN0IG5vbkVtcHR5ID0gc2xpY2UuZmlsdGVyKGxpbmUgPT4gbGluZS50cmltKCkubGVuZ3RoID4gMCk7XG4gICAgY29uc3QgdW5jb21tZW50ID0gbm9uRW1wdHkubGVuZ3RoID4gMCAmJiBub25FbXB0eS5ldmVyeShsaW5lID0+IC9eXFxzKjtcXHM/Ly50ZXN0KGxpbmUpKTtcblxuICAgIGZvciAobGV0IGkgPSBzdGFydExpbmU7IGkgPD0gZW5kTGluZTsgaSArPSAxKSB7XG4gICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICBpZiAoIWxpbmUgfHwgIWxpbmUudHJpbSgpKSBjb250aW51ZTtcbiAgICAgIGlmICh1bmNvbW1lbnQpIHtcbiAgICAgICAgbGluZXNbaV0gPSBsaW5lLnJlcGxhY2UoL14oXFxzKik7XFxzPy8sICckMScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGluZXNbaV0gPSBsaW5lLnJlcGxhY2UoL14oXFxzKikvLCAnJDE7ICcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG5leHRWYWx1ZSA9IGxpbmVzLmpvaW4oJ1xcbicpO1xuICAgIHRhLnZhbHVlID0gbmV4dFZhbHVlO1xuXG4gICAgY29uc3QgbmV4dExpbmVzID0gbmV4dFZhbHVlLnNwbGl0KCdcXG4nKTtcbiAgICBjb25zdCBuZXdTdGFydCA9IG9mZnNldEF0KG5leHRMaW5lcywgc3RhcnRMQy5saW5lLCBzdGFydExDLmNvbCk7XG4gICAgY29uc3QgbmV3RW5kTGluZSA9IHNlbEVuZCA+IHNlbFN0YXJ0ID8gZW5kTEMubGluZSA6IHN0YXJ0TEMubGluZTtcbiAgICBjb25zdCBuZXdFbmRDb2wgPSBzZWxFbmQgPiBzZWxTdGFydCA/IGVuZExDLmNvbCArIDEgOiBzdGFydExDLmNvbDtcbiAgICBjb25zdCBuZXdFbmQgPSBvZmZzZXRBdChuZXh0TGluZXMsIG5ld0VuZExpbmUsIG5ld0VuZENvbCk7XG5cbiAgICB0YS5zZWxlY3Rpb25TdGFydCA9IG5ld1N0YXJ0O1xuICAgIHRhLnNlbGVjdGlvbkVuZCA9IE1hdGgubWF4KG5ld1N0YXJ0LCBuZXdFbmQpO1xuICAgIHRhLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRBY3RpdmVTZWN0aW9uKHNlY3Rpb25OYW1lLCBvY2N1cnJlbmNlID0gbnVsbCkge1xuICAgIHByZS5xdWVyeVNlbGVjdG9yQWxsKCcudG9rLXNlY3Rpb24uaXMtYWN0aXZlLXNlY3Rpb24nKVxuICAgICAgLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlLXNlY3Rpb24nKSk7XG4gICAgaWYgKCFzZWN0aW9uTmFtZSkgcmV0dXJuO1xuICAgIGNvbnN0IG1hdGNoZXMgPSBbLi4ucHJlLnF1ZXJ5U2VsZWN0b3JBbGwoYC50b2stc2VjdGlvbltkYXRhLXNlY3Rpb249XCIke3NlY3Rpb25OYW1lfVwiXWApXTtcbiAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSByZXR1cm47XG4gICAgaWYgKHR5cGVvZiBvY2N1cnJlbmNlID09PSAnbnVtYmVyJyAmJiBvY2N1cnJlbmNlID49IDApIHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IG1hdGNoZXNbb2NjdXJyZW5jZV07XG4gICAgICBpZiAodGFyZ2V0KSB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlLXNlY3Rpb24nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbWF0Y2hlcy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZS1zZWN0aW9uJykpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0QWN0aXZlU2VjdGlvbkJ5T3JkZXIob3JkZXIpIHtcbiAgICBwcmUucXVlcnlTZWxlY3RvckFsbCgnLnRvay1hcnItdG9rZW4uaXMtYWN0aXZlLXNlY3Rpb24nKVxuICAgICAgLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlLXNlY3Rpb24nKSk7XG4gICAgaWYgKHR5cGVvZiBvcmRlciAhPT0gJ251bWJlcicgfHwgb3JkZXIgPCAwKSByZXR1cm47XG4gICAgY29uc3QgdGFyZ2V0ID0gcHJlLnF1ZXJ5U2VsZWN0b3IoYC50b2stYXJyLXRva2VuW2RhdGEtYXJyLW9yZGVyPVwiJHtvcmRlcn1cIl1gKTtcbiAgICBpZiAodGFyZ2V0KSB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlLXNlY3Rpb24nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEFjdGl2ZUFycmFuZ2VtZW50TG9vcEJsb2NrKGJsb2NrSWQpIHtcbiAgICBwcmUucXVlcnlTZWxlY3RvckFsbCgnLnRvay1hcnItdG9rZW4uaXMtYWN0aXZlLWxvb3AtYmxvY2snKVxuICAgICAgLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlLWxvb3AtYmxvY2snKSk7XG4gICAgaWYgKCFibG9ja0lkKSByZXR1cm47XG4gICAgcHJlLnF1ZXJ5U2VsZWN0b3JBbGwoYC50b2stYXJyLXRva2VuW2RhdGEtYXJyLWJsb2NrLWlkPVwiJHtibG9ja0lkfVwiXWApXG4gICAgICAuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUtbG9vcC1ibG9jaycpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5UXVldWVkQXJyYW5nZW1lbnRUb2tlbigpIHtcbiAgICBwcmUucXVlcnlTZWxlY3RvckFsbCgnLnRvay1hcnItdG9rZW4uaXMtcXVldWVkLXNlY3Rpb24nKVxuICAgICAgLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtcXVldWVkLXNlY3Rpb24nKSk7XG4gICAgaWYgKHR5cGVvZiBxdWV1ZWRBcnJhbmdlbWVudE9yZGVyICE9PSAnbnVtYmVyJyB8fCBxdWV1ZWRBcnJhbmdlbWVudE9yZGVyIDwgMCkgcmV0dXJuO1xuICAgIGNvbnN0IHRhcmdldCA9IHByZS5xdWVyeVNlbGVjdG9yKGAudG9rLWFyci10b2tlbltkYXRhLWFyci1vcmRlcj1cIiR7cXVldWVkQXJyYW5nZW1lbnRPcmRlcn1cIl1gKTtcbiAgICBpZiAodGFyZ2V0KSB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnaXMtcXVldWVkLXNlY3Rpb24nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFF1ZXVlZEFycmFuZ2VtZW50VG9rZW4ob3JkZXIpIHtcbiAgICBxdWV1ZWRBcnJhbmdlbWVudE9yZGVyID0gKHR5cGVvZiBvcmRlciA9PT0gJ251bWJlcicgJiYgb3JkZXIgPj0gMCkgPyBvcmRlciA6IG51bGw7XG4gICAgYXBwbHlRdWV1ZWRBcnJhbmdlbWVudFRva2VuKCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQYXJ0aWFsVG9rZW4oKSB7XG4gICAgY29uc3QgcG9zID0gdGEuc2VsZWN0aW9uU3RhcnQ7XG4gICAgY29uc3Qgc3JjID0gdGEudmFsdWU7XG4gICAgY29uc3QgbGluZVN0YXJ0ID0gc3JjLmxhc3RJbmRleE9mKCdcXG4nLCBNYXRoLm1heCgwLCBwb3MgLSAxKSkgKyAxO1xuICAgIGNvbnN0IGxpbmVFbmRSYXcgPSBzcmMuaW5kZXhPZignXFxuJywgcG9zKTtcbiAgICBjb25zdCBsaW5lRW5kID0gbGluZUVuZFJhdyA8IDAgPyBzcmMubGVuZ3RoIDogbGluZUVuZFJhdztcbiAgICBjb25zdCBsaW5lVGV4dCA9IHNyYy5zbGljZShsaW5lU3RhcnQsIGxpbmVFbmQpO1xuICAgIGNvbnN0IFtiYXNlLCBjb21tZW50XSA9IHNwbGl0Q29tbWVudChsaW5lVGV4dCk7XG4gICAgY29uc3QgY29tbWVudFBvcyA9IGNvbW1lbnQgPyBsaW5lU3RhcnQgKyBiYXNlLmxlbmd0aCA6IC0xO1xuICAgIGlmIChjb21tZW50UG9zID49IDAgJiYgcG9zID49IGNvbW1lbnRQb3MpIHJldHVybiBudWxsO1xuICAgIGxldCB0b2tlblN0YXJ0ID0gcG9zO1xuICAgIGxldCB0b2tlbkVuZCA9IHBvcztcblxuICAgIHdoaWxlICh0b2tlblN0YXJ0ID4gMCAmJiAhL1xccy8udGVzdChzcmNbdG9rZW5TdGFydCAtIDFdKSkgdG9rZW5TdGFydCAtPSAxO1xuICAgIHdoaWxlICh0b2tlbkVuZCA8IHNyYy5sZW5ndGggJiYgIS9cXHMvLnRlc3Qoc3JjW3Rva2VuRW5kXSkpIHRva2VuRW5kICs9IDE7XG4gICAgaWYgKHRva2VuU3RhcnQgPT09IHRva2VuRW5kKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHRva2VuVGV4dCA9IHNyYy5zbGljZSh0b2tlblN0YXJ0LCB0b2tlbkVuZCk7XG4gICAgY29uc3QgcmVsUG9zID0gTWF0aC5tYXgoMCwgcG9zIC0gdG9rZW5TdGFydCk7XG4gICAgY29uc3QgcmVsTGVmdCA9IHRva2VuVGV4dC5sYXN0SW5kZXhPZignfCcsIE1hdGgubWF4KDAsIHJlbFBvcyAtIDEpKTtcbiAgICBjb25zdCByZWxSaWdodFJhdyA9IHRva2VuVGV4dC5pbmRleE9mKCd8JywgcmVsUG9zKTtcbiAgICBjb25zdCByZWxSaWdodCA9IHJlbFJpZ2h0UmF3IDwgMCA/IHRva2VuVGV4dC5sZW5ndGggOiByZWxSaWdodFJhdztcbiAgICBjb25zdCBwYXJ0U3RhcnQgPSByZWxMZWZ0ICsgMTtcbiAgICBjb25zdCBwYXJ0RW5kID0gcmVsUmlnaHQ7XG5cbiAgICBpZiAocGFydFN0YXJ0ID49IHBhcnRFbmQpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IHBhcnRUZXh0ID0gdG9rZW5UZXh0LnNsaWNlKHBhcnRTdGFydCwgcGFydEVuZCk7XG4gICAgaWYgKCFwYXJ0VGV4dCkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogcGFydFRleHQsXG4gICAgICBzdGFydDogdG9rZW5TdGFydCArIHBhcnRTdGFydCxcbiAgICAgIGVuZDogdG9rZW5TdGFydCArIHBhcnRFbmQsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFN1Z2dlc3Rpb25zKHBhcnRpYWwpIHtcbiAgICBpZiAoIXBhcnRpYWwgfHwgIXBhcnRpYWwudGV4dCB8fCBwYXJ0aWFsLnRleHQubGVuZ3RoIDwgMSkgcmV0dXJuIFtdO1xuICAgIGNvbnN0IGxpbmVTdGFydCA9IHRhLnZhbHVlLmxhc3RJbmRleE9mKCdcXG4nLCBNYXRoLm1heCgwLCBwYXJ0aWFsLnN0YXJ0IC0gMSkpICsgMTtcbiAgICBjb25zdCBsaW5lRW5kUmF3ID0gdGEudmFsdWUuaW5kZXhPZignXFxuJywgcGFydGlhbC5zdGFydCk7XG4gICAgY29uc3QgbGluZUVuZCA9IGxpbmVFbmRSYXcgPCAwID8gdGEudmFsdWUubGVuZ3RoIDogbGluZUVuZFJhdztcbiAgICBjb25zdCBsaW5lID0gdGEudmFsdWUuc2xpY2UobGluZVN0YXJ0LCBsaW5lRW5kKS50cmltU3RhcnQoKTtcbiAgICBpZiAoL14jezEsMn1cXHMrLy50ZXN0KGxpbmUpKSByZXR1cm4gW107XG4gICAgaWYgKHBhcnRpYWwudGV4dC5zdGFydHNXaXRoKCdAJykpIHJldHVybiBbXTtcbiAgICBjb25zdCBiZWZvcmUgPSB0YS52YWx1ZS5zbGljZSgwLCBwYXJ0aWFsLnN0YXJ0KS50cmltRW5kKCk7XG4gICAgaWYgKGJlZm9yZS5lbmRzV2l0aCgnPCcpKSByZXR1cm4gW107XG4gICAgY29uc3QgZGVmcyA9IFN0cmluZyh0YS52YWx1ZSB8fCAnJylcbiAgICAgIC5zcGxpdCgvXFxyP1xcbi8pXG4gICAgICAubWFwKHJhdyA9PiByYXcucmVwbGFjZSgvOy4qJC8sICcnKSlcbiAgICAgIC5tYXAocmF3ID0+IHJhdy5tYXRjaCgvXlxccyooWyUmXVteXFxzXSspXFxzKy8pKVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICAgICAgLm1hcChtYXRjaCA9PiBtYXRjaFsxXSk7XG4gICAgY29uc3QgdW5pcXVlRGVmcyA9IFsuLi5uZXcgU2V0KGRlZnMpXTtcbiAgICBjb25zdCBidWlsZFZhck9wdGlvbnMgPSAoc2lnaWwpID0+IHtcbiAgICAgIGNvbnN0IHRva2VuID0gU3RyaW5nKHBhcnRpYWwudGV4dCB8fCAnJyk7XG4gICAgICBjb25zdCBwcmVmaXggPSB0b2tlbi5jaGFyQXQoMCkgPT09IHNpZ2lsID8gdG9rZW4gOiBzaWdpbDtcbiAgICAgIHJldHVybiB1bmlxdWVEZWZzXG4gICAgICAgIC5maWx0ZXIobmFtZSA9PiBuYW1lLmNoYXJBdCgwKSA9PT0gc2lnaWwpXG4gICAgICAgIC5maWx0ZXIobmFtZSA9PiBuYW1lLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChwcmVmaXgudG9Mb3dlckNhc2UoKSkpXG4gICAgICAgIC5tYXAobmFtZSA9PiAoeyB2YWx1ZTogbmFtZSwgbGFiZWw6IGAke25hbWV9IHZhcmlhYmxlYCB9KSk7XG4gICAgfTtcbiAgICBjb25zdCBsaW5lQmVmb3JlVG9rZW4gPSB0YS52YWx1ZS5zbGljZShsaW5lU3RhcnQsIHBhcnRpYWwuc3RhcnQpLnRyaW0oKTtcbiAgICBpZiAocGFydGlhbC50ZXh0LnN0YXJ0c1dpdGgoJyUnKSB8fCBwYXJ0aWFsLnRleHQgPT09ICclJykge1xuICAgICAgaWYgKCFsaW5lQmVmb3JlVG9rZW4pIHJldHVybiBbXTtcbiAgICAgIHJldHVybiBidWlsZFZhck9wdGlvbnMoJyUnKTtcbiAgICB9XG4gICAgaWYgKHBhcnRpYWwudGV4dC5zdGFydHNXaXRoKCcmJykgfHwgcGFydGlhbC50ZXh0ID09PSAnJicpIHtcbiAgICAgIGlmICghbGluZUJlZm9yZVRva2VuKSByZXR1cm4gW107XG4gICAgICByZXR1cm4gYnVpbGRWYXJPcHRpb25zKCcmJyk7XG4gICAgfVxuICAgIGNvbnN0IGNscyA9IGNsYXNzaWZ5KHBhcnRpYWwudGV4dCk7XG4gICAgaWYgKGNscyA9PT0gJ3Rvay1jaGFubmVsJyB8fCBwYXJ0aWFsLnRleHQuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgICByZXR1cm4gSU5TVFJVTUVOVF9PUFRJT05TO1xuICAgIH1cbiAgICBpZiAoY2xzICYmIGNscyAhPT0gJ3Rvay1ub3RlJyAmJiBjbHMgIT09ICd0b2stbW9kZScpIHJldHVybiBbXTtcbiAgICByZXR1cm4gQUxMX0NBTkRJREFURVMubWFwKHZhbHVlID0+ICh7IHZhbHVlLCBsYWJlbDogdmFsdWUgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Q2FyZXRDb29yZHMoKSB7XG4gICAgY29uc3QgbWlycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YSk7XG4gICAgY29uc3QgcHJvcHMgPSBbXG4gICAgICAnZm9udCcsICdmb250U2l6ZScsICdmb250RmFtaWx5JywgJ2ZvbnRXZWlnaHQnLCAnbGluZUhlaWdodCcsXG4gICAgICAnbGV0dGVyU3BhY2luZycsICd0ZXh0VHJhbnNmb3JtJywgJ3RleHRJbmRlbnQnLCAnd2hpdGVTcGFjZScsICd3b3JkU3BhY2luZycsXG4gICAgICAncGFkZGluZ1RvcCcsICdwYWRkaW5nUmlnaHQnLCAncGFkZGluZ0JvdHRvbScsICdwYWRkaW5nTGVmdCcsXG4gICAgICAnYm9yZGVyVG9wV2lkdGgnLCAnYm9yZGVyUmlnaHRXaWR0aCcsICdib3JkZXJCb3R0b21XaWR0aCcsICdib3JkZXJMZWZ0V2lkdGgnLFxuICAgICAgJ2JveFNpemluZycsXG4gICAgXTtcbiAgICBwcm9wcy5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgbWlycm9yLnN0eWxlW3Byb3BdID0gc3R5bGVbcHJvcF07XG4gICAgfSk7XG4gICAgbWlycm9yLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBtaXJyb3Iuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgIG1pcnJvci5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIG1pcnJvci5zdHlsZS50b3AgPSAnMCc7XG4gICAgbWlycm9yLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgbWlycm9yLnN0eWxlLndpZHRoID0gYCR7dGEuY2xpZW50V2lkdGh9cHhgO1xuICAgIG1pcnJvci5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIG1pcnJvci5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZS13cmFwJztcbiAgICBtaXJyb3Iuc3R5bGUud29yZFdyYXAgPSAnYnJlYWstd29yZCc7XG5cbiAgICBjb25zdCBiZWZvcmUgPSB0YS52YWx1ZS5zbGljZSgwLCB0YS5zZWxlY3Rpb25TdGFydCk7XG4gICAgY29uc3QgbWFya2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1hcmtlci50ZXh0Q29udGVudCA9ICdcXHUyMDBiJztcbiAgICBtaXJyb3IudGV4dENvbnRlbnQgPSBiZWZvcmU7XG4gICAgbWlycm9yLmFwcGVuZENoaWxkKG1hcmtlcik7XG4gICAgd3JhcC5hcHBlbmRDaGlsZChtaXJyb3IpO1xuICAgIGNvbnN0IHRvcCA9IG1hcmtlci5vZmZzZXRUb3AgLSB0YS5zY3JvbGxUb3A7XG4gICAgY29uc3QgbGVmdCA9IG1hcmtlci5vZmZzZXRMZWZ0IC0gdGEuc2Nyb2xsTGVmdDtcbiAgICB3cmFwLnJlbW92ZUNoaWxkKG1pcnJvcik7XG4gICAgcmV0dXJuIHsgdG9wLCBsZWZ0IH07XG4gIH1cblxuICBmdW5jdGlvbiByZXNpemVTdWdnZXN0SW5wdXQoKSB7XG4gICAgY29uc3QgdGV4dCA9IChzdWdnZXN0SW5wdXQudmFsdWUgfHwgc3VnZ2VzdElucHV0LnBsYWNlaG9sZGVyIHx8ICcnKS50cmltKCk7XG4gICAgY29uc3Qgd2lkdGhDaCA9IE1hdGgubWF4KDYsIE1hdGgubWluKDI4LCB0ZXh0Lmxlbmd0aCArIDIpKTtcbiAgICBzdWdnZXN0SW5wdXQuc3R5bGUud2lkdGggPSBgJHt3aWR0aENofWNoYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERvY2tFbCgpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5nZXRTdWdnZXN0RG9ja0VsID8gb3B0aW9ucy5nZXRTdWdnZXN0RG9ja0VsKCkgOiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q29udGV4dE9wZW4ob3Blbikge1xuICAgIGlmIChvcHRpb25zLm9uU3VnZ2VzdFZpc2liaWxpdHlDaGFuZ2UpIG9wdGlvbnMub25TdWdnZXN0VmlzaWJpbGl0eUNoYW5nZShvcGVuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVTdWdnZXN0KCkge1xuICAgIHN1Z2dlc3RTdGF0ZS5vcGVuID0gZmFsc2U7XG4gICAgc3VnZ2VzdFN0YXRlLmFsbEl0ZW1zID0gW107XG4gICAgc3VnZ2VzdFN0YXRlLml0ZW1zID0gW107XG4gICAgc3VnZ2VzdFN0YXRlLmFjdGl2ZUluZGV4ID0gMDtcbiAgICBzdWdnZXN0U3RhdGUudG9rZW4gPSBudWxsO1xuICAgIHN1Z2dlc3RJbnB1dC5oaWRkZW4gPSB0cnVlO1xuICAgIHN1Z2dlc3RJbnB1dC52YWx1ZSA9ICcnO1xuICAgIHN1Z2dlc3RJbnB1dC5wbGFjZWhvbGRlciA9ICcnO1xuICAgIHN1Z2dlc3RJbnB1dC5zdHlsZS53aWR0aCA9ICcnO1xuICAgIHN1Z2dlc3RNZW51LmhpZGRlbiA9IHRydWU7XG4gICAgc3VnZ2VzdE1lbnUuaW5uZXJIVE1MID0gJyc7XG4gICAgc2V0Q29udGV4dE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0U3VnZ2VzdE1lbnVPcGVuKG9wZW4pIHtcbiAgICBzdWdnZXN0TWVudS5oaWRkZW4gPSAhb3BlbjtcbiAgICBpZiAob3Blbikge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aXZlID0gc3VnZ2VzdE1lbnUucXVlcnlTZWxlY3RvcignbGlbZGF0YS1hY3RpdmU9XCIxXCJdJyk7XG4gICAgICAgIGlmIChhY3RpdmUpIGFjdGl2ZS5zY3JvbGxJbnRvVmlldyh7IGJsb2NrOiAnbmVhcmVzdCcgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1NhbWVTdWdnZXN0VG9rZW4oYSwgYikge1xuICAgIHJldHVybiBCb29sZWFuKFxuICAgICAgYSAmJiBiXG4gICAgICAmJiBhLnN0YXJ0ID09PSBiLnN0YXJ0XG4gICAgICAmJiBhLmVuZCA9PT0gYi5lbmRcbiAgICAgICYmIGEudGV4dCA9PT0gYi50ZXh0XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbmRlclN1Z2dlc3RJdGVtcygpIHtcbiAgICBpZiAoIXN1Z2dlc3RTdGF0ZS5pdGVtcy5sZW5ndGgpIHtcbiAgICAgIHN1Z2dlc3RNZW51LmlubmVySFRNTCA9ICc8bGkgY2xhc3M9XCJzdWdnZXN0LWVtcHR5XCIgYXJpYS1kaXNhYmxlZD1cInRydWVcIj5ObyBtYXRjaGVzLiBLZWVwIHR5cGluZyBvciBwcmVzcyBFc2MuPC9saT4nO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdWdnZXN0TWVudS5pbm5lckhUTUwgPSBzdWdnZXN0U3RhdGUuaXRlbXNcbiAgICAgIC5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICBgPGxpIHJvbGU9XCJvcHRpb25cIiBkYXRhLXZhbHVlPVwiJHtpdGVtLnZhbHVlfVwiIGRhdGEtYWN0aXZlPVwiJHtpZHggPT09IHN1Z2dlc3RTdGF0ZS5hY3RpdmVJbmRleCA/ICcxJyA6ICcwJ31cIj4ke2l0ZW0ubGFiZWwgfHwgaXRlbS52YWx1ZX08L2xpPmBcbiAgICAgICkpXG4gICAgICAuam9pbignJyk7XG4gICAgaWYgKCFzdWdnZXN0TWVudS5oaWRkZW4pIHtcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IHN1Z2dlc3RNZW51LnF1ZXJ5U2VsZWN0b3IoJ2xpW2RhdGEtYWN0aXZlPVwiMVwiXScpO1xuICAgICAgaWYgKGFjdGl2ZSkgYWN0aXZlLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICduZWFyZXN0JyB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVN1Z2dlc3RGaWx0ZXIocmF3UXVlcnkpIHtcbiAgICBjb25zdCBxdWVyeSA9IFN0cmluZyhyYXdRdWVyeSB8fCAnJykudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKCFxdWVyeSkge1xuICAgICAgc3VnZ2VzdFN0YXRlLml0ZW1zID0gc3VnZ2VzdFN0YXRlLmFsbEl0ZW1zLnNsaWNlKCk7XG4gICAgICBzdWdnZXN0U3RhdGUuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgcmVuZGVyU3VnZ2VzdEl0ZW1zKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN1Z2dlc3RTdGF0ZS5pdGVtcyA9IHN1Z2dlc3RTdGF0ZS5hbGxJdGVtcy5maWx0ZXIoaXRlbSA9PiAoXG4gICAgICBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMocXVlcnkpXG4gICAgICB8fCBTdHJpbmcoaXRlbS5sYWJlbCB8fCAnJykudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhxdWVyeSlcbiAgICApKTtcbiAgICBzdWdnZXN0U3RhdGUuYWN0aXZlSW5kZXggPSAwO1xuICAgIHJlbmRlclN1Z2dlc3RJdGVtcygpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1N1Z2dlc3QoaXRlbXMsIHRva2VuKSB7XG4gICAgaWYgKCFpdGVtcy5sZW5ndGgpIHtcbiAgICAgIGhpZGVTdWdnZXN0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRvY2tFbCA9IG9wdGlvbnMuZ2V0U3VnZ2VzdERvY2tFbCA/IG9wdGlvbnMuZ2V0U3VnZ2VzdERvY2tFbCgpIDogbnVsbDtcbiAgICBpZiAoIWRvY2tFbCkge1xuICAgICAgaGlkZVN1Z2dlc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHN1Z2dlc3RJbnB1dC5wYXJlbnRFbGVtZW50ICE9PSBkb2NrRWwpIGRvY2tFbC5hcHBlbmRDaGlsZChzdWdnZXN0SW5wdXQpO1xuICAgIGlmIChzdWdnZXN0TWVudS5wYXJlbnRFbGVtZW50ICE9PSBkb2NrRWwpIGRvY2tFbC5hcHBlbmRDaGlsZChzdWdnZXN0TWVudSk7XG4gICAgc3VnZ2VzdFN0YXRlLm9wZW4gPSB0cnVlO1xuICAgIHN1Z2dlc3RTdGF0ZS5hbGxJdGVtcyA9IGl0ZW1zO1xuICAgIHN1Z2dlc3RTdGF0ZS5pdGVtcyA9IGl0ZW1zLnNsaWNlKCk7XG4gICAgc3VnZ2VzdFN0YXRlLmFjdGl2ZUluZGV4ID0gMDtcbiAgICBzdWdnZXN0U3RhdGUudG9rZW4gPSB0b2tlbjtcbiAgICBjb25zdCBpbml0aWFsUXVlcnkgPSAnJztcbiAgICBzdWdnZXN0SW5wdXQudmFsdWUgPSBpbml0aWFsUXVlcnk7XG4gICAgc3VnZ2VzdElucHV0LnBsYWNlaG9sZGVyID0gdG9rZW4udGV4dCB8fCAnJztcbiAgICBhcHBseVN1Z2dlc3RGaWx0ZXIoaW5pdGlhbFF1ZXJ5KTtcbiAgICByZXNpemVTdWdnZXN0SW5wdXQoKTtcbiAgICBzdWdnZXN0SW5wdXQuaGlkZGVuID0gZmFsc2U7XG4gICAgaWYgKHRva2VuICYmIHRva2VuLnRleHQpIHtcbiAgICAgIGNvbnN0IHJhdyA9IHRva2VuLnRleHQudHJpbSgpO1xuICAgICAgY29uc3QgZXhhY3QgPSBzdWdnZXN0U3RhdGUuaXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gcmF3KTtcbiAgICAgIGNvbnN0IGV4YWN0Q0kgPSBleGFjdCA+PSAwXG4gICAgICAgID8gZXhhY3RcbiAgICAgICAgOiBzdWdnZXN0U3RhdGUuaXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSByYXcudG9Mb3dlckNhc2UoKSk7XG4gICAgICBpZiAoZXhhY3RDSSA+PSAwKSB7XG4gICAgICAgIHN1Z2dlc3RTdGF0ZS5hY3RpdmVJbmRleCA9IGV4YWN0Q0k7XG4gICAgICAgIHJlbmRlclN1Z2dlc3RJdGVtcygpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZXRTdWdnZXN0TWVudU9wZW4oZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gc3VnZ2VzdElucHV0KTtcbiAgICBzZXRDb250ZXh0T3Blbih0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVN1Z2dlc3Rpb25zKCkge1xuICAgIGlmICghU1VHR0VTVElPTlNfRU5BQkxFRCkgcmV0dXJuO1xuICAgIGlmIChzY3J1YlN0YXRlKSB7XG4gICAgICBoaWRlU3VnZ2VzdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwYXJ0aWFsID0gZ2V0UGFydGlhbFRva2VuKCk7XG4gICAgaWYgKCFwYXJ0aWFsKSB7XG4gICAgICBzdWdnZXN0U3RhdGUuZGlzbWlzc2VkVG9rZW4gPSBudWxsO1xuICAgICAgaGlkZVN1Z2dlc3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzU2FtZVN1Z2dlc3RUb2tlbihwYXJ0aWFsLCBzdWdnZXN0U3RhdGUuZGlzbWlzc2VkVG9rZW4pKSB7XG4gICAgICBoaWRlU3VnZ2VzdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpdGVtcyA9IGdldFN1Z2dlc3Rpb25zKHBhcnRpYWwpO1xuICAgIGlmICghaXRlbXMubGVuZ3RoKSB7XG4gICAgICBoaWRlU3VnZ2VzdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzaG93U3VnZ2VzdChpdGVtcywgcGFydGlhbCk7XG4gIH1cblxuICBmdW5jdGlvbiBhY2NlcHRTdWdnZXN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCFzdWdnZXN0U3RhdGUudG9rZW4pIHJldHVybjtcbiAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IHN1Z2dlc3RTdGF0ZS50b2tlbjtcbiAgICB0YS52YWx1ZSA9IGAke3RhLnZhbHVlLnNsaWNlKDAsIHN0YXJ0KX0ke3ZhbHVlfSR7dGEudmFsdWUuc2xpY2UoZW5kKX1gO1xuICAgIGNvbnN0IG5leHRQb3MgPSBzdGFydCArIHZhbHVlLmxlbmd0aDtcbiAgICB0YS5zZWxlY3Rpb25TdGFydCA9IG5leHRQb3M7XG4gICAgdGEuc2VsZWN0aW9uRW5kID0gbmV4dFBvcztcbiAgICBzdWdnZXN0U3RhdGUuZGlzbWlzc2VkVG9rZW4gPSBudWxsO1xuICAgIHRhLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gICAgaGlkZVN1Z2dlc3QoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdmVTdWdnZXN0KGRlbHRhKSB7XG4gICAgaWYgKCFzdWdnZXN0U3RhdGUub3BlbiB8fCAhc3VnZ2VzdFN0YXRlLml0ZW1zLmxlbmd0aCkgcmV0dXJuO1xuICAgIGNvbnN0IHNpemUgPSBzdWdnZXN0U3RhdGUuaXRlbXMubGVuZ3RoO1xuICAgIHN1Z2dlc3RTdGF0ZS5hY3RpdmVJbmRleCA9IChzdWdnZXN0U3RhdGUuYWN0aXZlSW5kZXggKyBkZWx0YSArIHNpemUpICUgc2l6ZTtcbiAgICByZW5kZXJTdWdnZXN0SXRlbXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGN1cnJlbnRTdWdnZXN0VmFsdWUoKSB7XG4gICAgaWYgKCFzdWdnZXN0U3RhdGUuaXRlbXMubGVuZ3RoKSByZXR1cm4gJyc7XG4gICAgY29uc3QgYWN0aXZlID0gc3VnZ2VzdFN0YXRlLml0ZW1zW3N1Z2dlc3RTdGF0ZS5hY3RpdmVJbmRleF07XG4gICAgcmV0dXJuIGFjdGl2ZSA/IGFjdGl2ZS52YWx1ZSA6ICcnO1xuICB9XG5cbiAgZnVuY3Rpb24gZm9jdXNFZGl0b3IoKSB7XG4gICAgdGEuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGEuZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pLCAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc29sdmVWYWxpZFN1Z2dlc3Rpb24ocmF3KSB7XG4gICAgY29uc3QgdGV4dCA9IFN0cmluZyhyYXcgfHwgJycpLnRyaW0oKTtcbiAgICBpZiAoIXRleHQgfHwgIXN1Z2dlc3RTdGF0ZS5hbGxJdGVtcy5sZW5ndGgpIHJldHVybiAnJztcbiAgICBjb25zdCBleGFjdCA9IHN1Z2dlc3RTdGF0ZS5hbGxJdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZSA9PT0gdGV4dCk7XG4gICAgaWYgKGV4YWN0KSByZXR1cm4gZXhhY3QudmFsdWU7XG4gICAgY29uc3QgZXhhY3RDSSA9IHN1Z2dlc3RTdGF0ZS5hbGxJdGVtcy5maW5kKGl0ZW0gPT4gaXRlbS52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSB0ZXh0LnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmIChleGFjdENJKSByZXR1cm4gZXhhY3RDSS52YWx1ZTtcbiAgICBjb25zdCBsYWJlbEV4YWN0ID0gc3VnZ2VzdFN0YXRlLmFsbEl0ZW1zLmZpbmQoaXRlbSA9PiBTdHJpbmcoaXRlbS5sYWJlbCB8fCAnJykgPT09IHRleHQpO1xuICAgIGlmIChsYWJlbEV4YWN0KSByZXR1cm4gbGFiZWxFeGFjdC52YWx1ZTtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY3J1YlRhcmdldChlbGVtZW50cykge1xuICAgIHJldHVybiBlbGVtZW50cy5maW5kKGVsID0+IChcbiAgICAgIGVsLmRhdGFzZXRcbiAgICAgICYmICh0eXBlb2YgZWwuZGF0YXNldC5udW1iZXIgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBlbC5kYXRhc2V0LnZlbG9jaXR5ICE9PSAndW5kZWZpbmVkJylcbiAgICApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlU2NydWJSYXcocmF3KSB7XG4gICAgY29uc3QgaXNGbG9hdCA9IFN0cmluZyhyYXcpLmluY2x1ZGVzKCcuJyk7XG4gICAgY29uc3QgZGVjaW1hbFBsYWNlcyA9IGlzRmxvYXQgPyBTdHJpbmcocmF3KS5zcGxpdCgnLicpWzFdLmxlbmd0aCA6IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHJhdyksXG4gICAgICBpc0Zsb2F0LFxuICAgICAgZGVjaW1hbFBsYWNlcyxcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYmVnaW5TY3J1YihlLCBzcGFuKSB7XG4gICAgY29uc3QgcmF3ID0gdHlwZW9mIHNwYW4uZGF0YXNldC5udW1iZXIgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IHNwYW4uZGF0YXNldC5udW1iZXJcbiAgICAgIDogc3Bhbi5kYXRhc2V0LnZlbG9jaXR5O1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlU2NydWJSYXcocmF3KTtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC52YWx1ZSkpIHJldHVybjtcblxuICAgIGNvbnN0IHN0YXJ0T2Zmc2V0ID0gY2hhck9mZnNldE9mRWxlbWVudChwcmUsIHNwYW4sIHRhLnZhbHVlKTtcbiAgICBpZiAoc3RhcnRPZmZzZXQgPCAwKSByZXR1cm47XG5cbiAgICBzY3J1YlN0YXRlID0ge1xuICAgICAgc3RhcnRYOiBlLmNsaWVudFgsXG4gICAgICBzdGFydFZhbHVlOiBwYXJzZWQudmFsdWUsXG4gICAgICBpc0Zsb2F0OiBwYXJzZWQuaXNGbG9hdCxcbiAgICAgIGRlY2ltYWxQbGFjZXM6IHBhcnNlZC5kZWNpbWFsUGxhY2VzLFxuICAgICAgYXR0cjogdHlwZW9mIHNwYW4uZGF0YXNldC52ZWxvY2l0eSAhPT0gJ3VuZGVmaW5lZCcgPyAndmVsb2NpdHknIDogJ251bWJlcicsXG4gICAgICBzdGFydE9mZnNldCxcbiAgICAgIGN1cnJlbnRMZW5ndGg6IHNwYW4udGV4dENvbnRlbnQubGVuZ3RoLFxuICAgICAgY3VycmVudFRleHQ6IHJhdyxcbiAgICAgIG1vdmVkOiBmYWxzZSxcbiAgICB9O1xuICAgIHdyYXAuY2xhc3NMaXN0LmFkZCgnc2NydWItYWN0aXZlJyk7XG4gICAgaGlkZVRvb2x0aXAoKTtcbiAgICBoaWRlU3VnZ2VzdCgpO1xuICAgIGVtaXRTY3J1YlRva2VuKHJhdyk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlTY3J1YihlKSB7XG4gICAgaWYgKCFzY3J1YlN0YXRlKSByZXR1cm47XG4gICAgY29uc3QgU1RFUF9QWCA9IDQ7XG4gICAgY29uc3QgZGVsdGFVbml0cyA9IE1hdGgucm91bmQoKGUuY2xpZW50WCAtIHNjcnViU3RhdGUuc3RhcnRYKSAvIFNURVBfUFgpO1xuICAgIGNvbnN0IGJhc2VTdGVwID0gc2NydWJTdGF0ZS5pc0Zsb2F0ID8gTWF0aC5wb3coMTAsIC1zY3J1YlN0YXRlLmRlY2ltYWxQbGFjZXMpIDogMTtcbiAgICBjb25zdCBtb2RpZmllciA9IGUuc2hpZnRLZXkgPyAxMCA6IGUuYWx0S2V5ID8gMC4xIDogMTtcblxuICAgIGxldCBuZXh0VmFsdWUgPSBzY3J1YlN0YXRlLnN0YXJ0VmFsdWUgKyBkZWx0YVVuaXRzICogYmFzZVN0ZXAgKiBtb2RpZmllcjtcbiAgICBpZiAoc2NydWJTdGF0ZS5hdHRyID09PSAndmVsb2NpdHknKSB7XG4gICAgICBuZXh0VmFsdWUgPSBNYXRoLm1heCgxLCBNYXRoLm1pbigxMjcsIE1hdGgucm91bmQobmV4dFZhbHVlKSkpO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHRUZXh0ID0gc2NydWJTdGF0ZS5pc0Zsb2F0ICYmIHNjcnViU3RhdGUuYXR0ciAhPT0gJ3ZlbG9jaXR5J1xuICAgICAgPyBuZXh0VmFsdWUudG9GaXhlZChzY3J1YlN0YXRlLmRlY2ltYWxQbGFjZXMpXG4gICAgICA6IFN0cmluZyhNYXRoLnJvdW5kKG5leHRWYWx1ZSkpO1xuICAgIGlmIChuZXh0VGV4dCA9PT0gc2NydWJTdGF0ZS5jdXJyZW50VGV4dCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc3RhcnQgPSBzY3J1YlN0YXRlLnN0YXJ0T2Zmc2V0O1xuICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgc2NydWJTdGF0ZS5jdXJyZW50TGVuZ3RoO1xuICAgIHRhLnZhbHVlID0gdGEudmFsdWUuc2xpY2UoMCwgc3RhcnQpICsgbmV4dFRleHQgKyB0YS52YWx1ZS5zbGljZShlbmQpO1xuICAgIHNjcnViU3RhdGUuY3VycmVudExlbmd0aCA9IG5leHRUZXh0Lmxlbmd0aDtcbiAgICBzY3J1YlN0YXRlLmN1cnJlbnRUZXh0ID0gbmV4dFRleHQ7XG4gICAgc2NydWJTdGF0ZS5tb3ZlZCA9IHRydWU7XG4gICAgZW1pdFNjcnViVG9rZW4obmV4dFRleHQpO1xuICAgIHRhLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmRTY3J1YigpIHtcbiAgICBpZiAoIXNjcnViU3RhdGUpIHJldHVybjtcbiAgICBzY3J1YlN0YXRlID0gbnVsbDtcbiAgICB3cmFwLmNsYXNzTGlzdC5yZW1vdmUoJ3NjcnViLWFjdGl2ZScpO1xuICAgIGNsZWFyU2NydWJDdXJzb3IoKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBhcHBseVNjcnViKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kU2NydWIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmxhc2hMaW5lcyhzdGFydExpbmUsIGVuZExpbmUpIHtcbiAgICBjb25zdCBzdGFydCA9IE1hdGgubWF4KDAsIHN0YXJ0TGluZSk7XG4gICAgY29uc3QgZW5kID0gTWF0aC5tYXgoc3RhcnQsIGVuZExpbmUpO1xuICAgIGZvciAobGV0IGxpbmUgPSBzdGFydDsgbGluZSA8PSBlbmQ7IGxpbmUgKz0gMSkge1xuICAgICAgY29uc3QgbGluZUVsID0gcHJlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWxpbmU9XCIke2xpbmV9XCJdYCk7XG4gICAgICBpZiAoIWxpbmVFbCkgY29udGludWU7XG4gICAgICBsaW5lRWwuY2xhc3NMaXN0LmFkZCgnYmxvY2stZmxhc2gnKTtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxpbmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdibG9jay1mbGFzaCcpO1xuICAgICAgICBmbGFzaFRpbWVycy5kZWxldGUodGltZXIpO1xuICAgICAgfSwgODAwKTtcbiAgICAgIGZsYXNoVGltZXJzLmFkZCh0aW1lcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0Tm90ZUxpa2VUb2tlblNwYW5zKGxpbmVFbCkge1xuICAgIHJldHVybiBbLi4ubGluZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKV1cbiAgICAgIC5maWx0ZXIodG9rZW4gPT4ge1xuICAgICAgICBjb25zdCBkcyA9IHRva2VuLmRhdGFzZXQgfHwge307XG4gICAgICAgIHJldHVybiB0b2tlbi5jbGFzc0xpc3QuY29udGFpbnMoJ3Rvay1ub3RlJylcbiAgICAgICAgICB8fCB0b2tlbi5jbGFzc0xpc3QuY29udGFpbnMoJ3Rvay1jaG9yZCcpXG4gICAgICAgICAgfHwgdG9rZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2stdmFyLXJlZicpXG4gICAgICAgICAgfHwgdG9rZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2stbW9kZScpXG4gICAgICAgICAgfHwgdG9rZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2stcHJvZ3Jlc3Npb24nKVxuICAgICAgICAgIHx8IHR5cGVvZiBkcy5yZXBlYXRMYXN0ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgIHx8IHR5cGVvZiBkcy52YXIgIT09ICd1bmRlZmluZWQnO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmbGFzaEFjdGl2ZVRva2VucyhsaW5lTnVtYmVycywgYmVhdEluZGV4LCBiZWF0RHVyYXRpb25NcyA9IDApIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkobGluZU51bWJlcnMpIHx8ICFsaW5lTnVtYmVycy5sZW5ndGgpIHJldHVybjtcbiAgICBjb25zdCB0b2tlbkluZGV4ID0gTnVtYmVyLmlzSW50ZWdlcihiZWF0SW5kZXgpID8gTWF0aC5tYXgoMCwgYmVhdEluZGV4KSA6IDA7XG4gICAgY29uc3QgZ2V0UGF0dGVyblRpbWluZyA9IGxpbmVFbCA9PiB7XG4gICAgICBjb25zdCByYXdTdGVwcyA9IFsuLi5saW5lRWwucXVlcnlTZWxlY3RvckFsbCgnLnRvay1wYXR0ZXJuLXN0ZXAnKV07XG4gICAgICBjb25zdCBzbG90cyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYXdTdGVwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBzdGVwID0gcmF3U3RlcHNbaV07XG4gICAgICAgIGNvbnN0IGNoID0gU3RyaW5nKHN0ZXAuZGF0YXNldC5wYXR0ZXJuQ2hhciB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGNoID09PSAnWycpIHtcbiAgICAgICAgICBjb25zdCBpbm5lciA9IFtdO1xuICAgICAgICAgIGxldCBqID0gaSArIDE7XG4gICAgICAgICAgd2hpbGUgKGogPCByYXdTdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGlubmVyU3RlcCA9IHJhd1N0ZXBzW2pdO1xuICAgICAgICAgICAgY29uc3QgaW5uZXJDaGFyID0gU3RyaW5nKGlubmVyU3RlcC5kYXRhc2V0LnBhdHRlcm5DaGFyIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGlubmVyQ2hhciA9PT0gJ10nKSBicmVhaztcbiAgICAgICAgICAgIGlmIChpbm5lckNoYXIgPT09ICd4JyB8fCBpbm5lckNoYXIgPT09ICctJyB8fCBpbm5lckNoYXIgPT09ICdfJykge1xuICAgICAgICAgICAgICBpbm5lci5wdXNoKGlubmVyU3RlcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBqICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpbm5lci5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNsb3RzLnB1c2goe1xuICAgICAgICAgICAgICBzdGVwczogaW5uZXIsXG4gICAgICAgICAgICAgIHB1bHNlczogaW5uZXIuZmlsdGVyKHMgPT4gU3RyaW5nKHMuZGF0YXNldC5wYXR0ZXJuQ2hhciB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ3gnKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpID0gajtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ggPT09ICd4JyB8fCBjaCA9PT0gJy0nIHx8IGNoID09PSAnXycpIHtcbiAgICAgICAgICBzbG90cy5wdXNoKHtcbiAgICAgICAgICAgIHN0ZXBzOiBbc3RlcF0sXG4gICAgICAgICAgICBwdWxzZXM6IGNoID09PSAneCcgPyBbc3RlcF0gOiBbXSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHNsb3RzO1xuICAgIH07XG4gICAgY29uc3QgZmxhc2hQYXR0ZXJuUHVsc2VzID0gKHNsb3QsIGR1cmF0aW9uTXMpID0+IHtcbiAgICAgIGlmICghc2xvdCB8fCAhc2xvdC5wdWxzZXMgfHwgIXNsb3QucHVsc2VzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgY29uc3QgcHVsc2VzID0gc2xvdC5wdWxzZXM7XG4gICAgICBpZiAocHVsc2VzLmxlbmd0aCA9PT0gMSB8fCAhZHVyYXRpb25NcyB8fCBkdXJhdGlvbk1zIDw9IDApIHtcbiAgICAgICAgcHVsc2VzLmZvckVhY2gocHVsc2VFbCA9PiB7XG4gICAgICAgICAgcHVsc2VFbC5jbGFzc0xpc3QuYWRkKCd0b2stYWN0aXZlJyk7XG4gICAgICAgICAgYWN0aXZlVG9rZW5zLnB1c2gocHVsc2VFbCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzdGVwTXMgPSBkdXJhdGlvbk1zIC8gc2xvdC5zdGVwcy5sZW5ndGg7XG4gICAgICBwdWxzZXMuZm9yRWFjaChwdWxzZUVsID0+IHtcbiAgICAgICAgY29uc3Qgc2xvdEluZGV4ID0gc2xvdC5zdGVwcy5pbmRleE9mKHB1bHNlRWwpO1xuICAgICAgICBjb25zdCBkZWxheSA9IE1hdGgubWF4KDAsIE1hdGguZmxvb3Ioc2xvdEluZGV4ICogc3RlcE1zKSk7XG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcHVsc2VFbC5jbGFzc0xpc3QuYWRkKCd0b2stYWN0aXZlJyk7XG4gICAgICAgICAgYWN0aXZlVG9rZW5zLnB1c2gocHVsc2VFbCk7XG4gICAgICAgICAgZmxhc2hUaW1lcnMuZGVsZXRlKHRpbWVyKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICBmbGFzaFRpbWVycy5hZGQodGltZXIpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBwYXR0ZXJuQnlMaW5lID0gbmV3IE1hcCgpO1xuICAgIGxpbmVOdW1iZXJzLmZvckVhY2gobGluZU51bWJlciA9PiB7XG4gICAgICBjb25zdCBsaW5lRWwgPSBwcmUucXVlcnlTZWxlY3RvcihgW2RhdGEtbGluZT1cIiR7bGluZU51bWJlcn1cIl1gKTtcbiAgICAgIGlmICghbGluZUVsKSByZXR1cm47XG4gICAgICBwYXR0ZXJuQnlMaW5lLnNldChsaW5lTnVtYmVyLCBnZXRQYXR0ZXJuVGltaW5nKGxpbmVFbCkpO1xuICAgIH0pO1xuICAgIGNvbnN0IHJlZmVyZW5jZVBhdHRlcm5TdGVwcyA9IFsuLi5wYXR0ZXJuQnlMaW5lLnZhbHVlcygpXVxuICAgICAgLmZpbHRlcihzbG90cyA9PiBzbG90cy5sZW5ndGggPiAwKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgY29uc3QgcHVsc2VzID0gc2xvdHMgPT4gc2xvdHMucmVkdWNlKChzdW0sIHNsb3QpID0+IChcbiAgICAgICAgICBzdW0gKyBzbG90LnB1bHNlcy5sZW5ndGhcbiAgICAgICAgKSwgMCk7XG4gICAgICAgIHJldHVybiBwdWxzZXMoYikgLSBwdWxzZXMoYSk7XG4gICAgICB9KVswXSB8fCBbXTtcblxuICAgIGZ1bmN0aW9uIHB1bHNlSW5mbyhzbG90cykge1xuICAgICAgaWYgKCFzbG90cy5sZW5ndGgpIHJldHVybiBudWxsO1xuICAgICAgY29uc3Qgc3RlcEluZGV4ID0gdG9rZW5JbmRleCAlIHNsb3RzLmxlbmd0aDtcbiAgICAgIGNvbnN0IHNsb3QgPSBzbG90c1tzdGVwSW5kZXhdO1xuICAgICAgbGV0IHB1bHNlQ291bnQgPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3RlcEluZGV4OyBpICs9IDEpIHtcbiAgICAgICAgcHVsc2VDb3VudCArPSBzbG90c1tpXS5wdWxzZXMubGVuZ3RoO1xuICAgICAgfVxuICAgICAgY29uc3QgcHVsc2VzUGVyUGF0dGVybiA9IHNsb3RzLnJlZHVjZSgoc3VtLCBzKSA9PiBzdW0gKyBzLnB1bHNlcy5sZW5ndGgsIDApO1xuICAgICAgY29uc3QgY3ljbGVJbmRleCA9IE1hdGguZmxvb3IodG9rZW5JbmRleCAvIHNsb3RzLmxlbmd0aCk7XG4gICAgICBjb25zdCBhYnNvbHV0ZVB1bHNlSW5kZXggPSBwdWxzZXNQZXJQYXR0ZXJuID4gMFxuICAgICAgICA/IGN5Y2xlSW5kZXggKiBwdWxzZXNQZXJQYXR0ZXJuICsgTWF0aC5tYXgoMCwgcHVsc2VDb3VudCAtIHNsb3QucHVsc2VzLmxlbmd0aClcbiAgICAgICAgOiAwO1xuICAgICAgcmV0dXJuIHsgc2xvdCwgaXNQdWxzZTogc2xvdC5wdWxzZXMubGVuZ3RoID4gMCwgYWJzb2x1dGVQdWxzZUluZGV4IH07XG4gICAgfVxuXG4gICAgbGluZU51bWJlcnMuZm9yRWFjaChsaW5lTnVtYmVyID0+IHtcbiAgICAgIGNvbnN0IGxpbmVFbCA9IHByZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1saW5lPVwiJHtsaW5lTnVtYmVyfVwiXWApO1xuICAgICAgaWYgKCFsaW5lRWwpIHJldHVybjtcbiAgICAgIGNvbnN0IG93blBhdHRlcm5TdGVwcyA9IHBhdHRlcm5CeUxpbmUuZ2V0KGxpbmVOdW1iZXIpIHx8IFtdO1xuICAgICAgY29uc3QgaW5mbyA9IHB1bHNlSW5mbyhvd25QYXR0ZXJuU3RlcHMubGVuZ3RoID8gb3duUGF0dGVyblN0ZXBzIDogcmVmZXJlbmNlUGF0dGVyblN0ZXBzKTtcbiAgICAgIGlmIChvd25QYXR0ZXJuU3RlcHMubGVuZ3RoICYmIGluZm8gJiYgaW5mby5zbG90ICYmIGluZm8uaXNQdWxzZSkge1xuICAgICAgICBmbGFzaFBhdHRlcm5QdWxzZXMoaW5mby5zbG90LCBiZWF0RHVyYXRpb25Ncyk7XG4gICAgICB9XG4gICAgICBjb25zdCBub3RlVG9rZW5zID0gZ2V0Tm90ZUxpa2VUb2tlblNwYW5zKGxpbmVFbCk7XG4gICAgICBpZiAoIW5vdGVUb2tlbnMubGVuZ3RoKSByZXR1cm47XG4gICAgICBpZiAoaW5mbyAmJiAhaW5mby5pc1B1bHNlKSByZXR1cm47XG4gICAgICBjb25zdCBpZHggPSBpbmZvID8gaW5mby5hYnNvbHV0ZVB1bHNlSW5kZXggOiB0b2tlbkluZGV4O1xuICAgICAgY29uc3QgdG9rZW4gPSBub3RlVG9rZW5zWygoaWR4ICUgbm90ZVRva2Vucy5sZW5ndGgpICsgbm90ZVRva2Vucy5sZW5ndGgpICUgbm90ZVRva2Vucy5sZW5ndGhdO1xuICAgICAgaWYgKCF0b2tlbikgcmV0dXJuO1xuICAgICAgdG9rZW4uY2xhc3NMaXN0LmFkZCgndG9rLWFjdGl2ZScpO1xuICAgICAgYWN0aXZlVG9rZW5zLnB1c2godG9rZW4pO1xuICAgIH0pO1xuICB9XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgIHByZS5zY3JvbGxUb3AgPSB0YS5zY3JvbGxUb3A7XG4gICAgcHJlLnNjcm9sbExlZnQgPSB0YS5zY3JvbGxMZWZ0O1xuICAgIGd1dHRlci5zY3JvbGxUb3AgPSB0YS5zY3JvbGxUb3A7XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc3luY0d1dHRlckhlaWdodHMpO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHB1c2hIaXN0b3J5RW50cnkoKTtcbiAgICBydW5JbnB1dEVmZmVjdHMoKTtcbiAgfSk7XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgIGlmICgoZS5tZXRhS2V5IHx8IGUuY3RybEtleSkgJiYgIWUuYWx0S2V5KSB7XG4gICAgICBjb25zdCBrZXkgPSBTdHJpbmcoZS5rZXkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCB3YW50c1VuZG8gPSBrZXkgPT09ICd6JyAmJiAhZS5zaGlmdEtleTtcbiAgICAgIGNvbnN0IHdhbnRzUmVkbyA9IChrZXkgPT09ICd6JyAmJiBlLnNoaWZ0S2V5KSB8fCBrZXkgPT09ICd5JztcbiAgICAgIGlmICh3YW50c1VuZG8gfHwgd2FudHNSZWRvKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaGFuZGxlZCA9IHdhbnRzVW5kbyA/IHVuZG9IaXN0b3J5KCkgOiByZWRvSGlzdG9yeSgpO1xuICAgICAgICBpZiAoIWhhbmRsZWQpIGVtaXRDdXJzb3JUb2tlbigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzQ29tbWVudFRvZ2dsZVNob3J0Y3V0KGUpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVTZWxlY3Rpb25Db21tZW50cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gJ1snICYmICFlLm1ldGFLZXkgJiYgIWUuY3RybEtleSAmJiAhZS5hbHRLZXkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gdGEuc2VsZWN0aW9uU3RhcnQ7XG4gICAgICBjb25zdCBlbmQgPSB0YS5zZWxlY3Rpb25FbmQ7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHRhLnZhbHVlLnNsaWNlKHN0YXJ0LCBlbmQpO1xuICAgICAgY29uc3Qgd3JhcHBlZCA9IGBbJHtzZWxlY3RlZH1dYDtcbiAgICAgIHRhLnZhbHVlID0gYCR7dGEudmFsdWUuc2xpY2UoMCwgc3RhcnQpfSR7d3JhcHBlZH0ke3RhLnZhbHVlLnNsaWNlKGVuZCl9YDtcbiAgICAgIGlmIChzdGFydCA9PT0gZW5kKSB7XG4gICAgICAgIGNvbnN0IG5leHRQb3MgPSBzdGFydCArIDE7XG4gICAgICAgIHRhLnNlbGVjdGlvblN0YXJ0ID0gbmV4dFBvcztcbiAgICAgICAgdGEuc2VsZWN0aW9uRW5kID0gbmV4dFBvcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhLnNlbGVjdGlvblN0YXJ0ID0gc3RhcnQgKyAxO1xuICAgICAgICB0YS5zZWxlY3Rpb25FbmQgPSBlbmQgKyAxO1xuICAgICAgfVxuICAgICAgdGEuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JywgeyBidWJibGVzOiB0cnVlIH0pKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXN1Z2dlc3RTdGF0ZS5vcGVuKSByZXR1cm47XG4gICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IHN1Z2dlc3RJbnB1dCkgcmV0dXJuO1xuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vdmVTdWdnZXN0KDEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZVN1Z2dlc3QoLTEpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdUYWInIHx8IGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB0eXBlZCA9IHN1Z2dlc3RJbnB1dC52YWx1ZSAmJiBzdWdnZXN0SW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgY29uc3QgbmV4dCA9IGN1cnJlbnRTdWdnZXN0VmFsdWUoKSB8fCByZXNvbHZlVmFsaWRTdWdnZXN0aW9uKHR5cGVkKTtcbiAgICAgIGlmIChuZXh0KSBhY2NlcHRTdWdnZXN0aW9uKG5leHQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICBzdWdnZXN0U3RhdGUuZGlzbWlzc2VkVG9rZW4gPSBzdWdnZXN0U3RhdGUudG9rZW4gfHwgZ2V0UGFydGlhbFRva2VuKCk7XG4gICAgICBoaWRlU3VnZ2VzdCgpO1xuICAgICAgZm9jdXNFZGl0b3IoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIGNvbnN0IHNjcnViVGFyZ2V0ID0gZ2V0U2NydWJUYXJnZXQoZWxlbWVudHMpO1xuICAgIHdyYXAuY2xhc3NMaXN0LnRvZ2dsZSgnc2NydWItaG92ZXInLCBCb29sZWFuKHNjcnViVGFyZ2V0KSAmJiAhc2NydWJTdGF0ZSk7XG4gICAgaWYgKHNjcnViU3RhdGUpIHtcbiAgICAgIGhpZGVUb29sdGlwKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGZvdW5kID0gdG9vbHRpcEhhbmRsZXJzXG4gICAgICAubWFwKGhhbmRsZXIgPT4ge1xuICAgICAgICBjb25zdCBoaXQgPSBlbGVtZW50cy5maW5kKGVsID0+IGVsLmRhdGFzZXQgJiYgZWwuZGF0YXNldFtoYW5kbGVyLmF0dHJdKTtcbiAgICAgICAgcmV0dXJuIGhpdCA/IHsgaGFuZGxlciwgdmFsdWU6IGhpdC5kYXRhc2V0W2hhbmRsZXIuYXR0cl0sIGVsZW1lbnQ6IGhpdCB9IDogbnVsbDtcbiAgICAgIH0pXG4gICAgICAuZmluZChCb29sZWFuKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0ZXh0ID0gZm91bmQuaGFuZGxlci5yZXNvbHZlKGZvdW5kLnZhbHVlLCBmb3VuZC5lbGVtZW50KTtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIGhpZGVUb29sdGlwKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRpcFRpdGxlLnRleHRDb250ZW50ID0gZm91bmQuaGFuZGxlci50aXRsZShmb3VuZC52YWx1ZSwgZm91bmQuZWxlbWVudCk7XG4gICAgdGlwQm9keS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgaWYgKGZvdW5kLmhhbmRsZXIudmlzdWFsKSB7XG4gICAgICBjb25zdCB2aXN1YWwgPSBmb3VuZC5oYW5kbGVyLnZpc3VhbChmb3VuZC52YWx1ZSwgZm91bmQuZWxlbWVudCk7XG4gICAgICBpZiAodmlzdWFsKSB7XG4gICAgICAgIHRpcFN0YWZmLmlubmVySFRNTCA9IHZpc3VhbDtcbiAgICAgICAgdGlwU3RhZmYuaGlkZGVuID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXBTdGFmZi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGlwU3RhZmYuaGlkZGVuID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGZvdW5kLmhhbmRsZXIubm90ZXMpIHtcbiAgICAgIGNvbnN0IG5vdGVBcnIgPSBmb3VuZC5oYW5kbGVyLm5vdGVzKGZvdW5kLnZhbHVlKTtcbiAgICAgIGlmIChub3RlQXJyICYmIG5vdGVBcnIubGVuZ3RoKSB7XG4gICAgICAgIHRpcFN0YWZmLmlubmVySFRNTCA9IGJ1aWxkU3RhZmZTVkcobm90ZUFyciwgZm91bmQuaGFuZGxlci5zdGFmZk1vZGUpO1xuICAgICAgICB0aXBTdGFmZi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpcFN0YWZmLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aXBTdGFmZi5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXBTdGFmZi5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRpcFN0YWZmLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICAgIHBsYWNlVG9vbHRpcCh0aXAsIGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgfSk7XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgaWYgKGUuYnV0dG9uICE9PSAwIHx8IHNjcnViU3RhdGUpIHJldHVybjtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICBjb25zdCBhcnJUb2tlbiA9IGVsZW1lbnRzLmZpbmQoZWwgPT4gKFxuICAgICAgZWwuY2xhc3NMaXN0XG4gICAgICAmJiBlbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Rvay1hcnItdG9rZW4nKVxuICAgICkpO1xuICAgIGlmIChhcnJUb2tlbiAmJiBvcHRpb25zLm9uQXJyYW5nZW1lbnRTZWN0aW9uQ2xpY2spIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IG9yZGVyID0gcGFyc2VJbnQoYXJyVG9rZW4uZGF0YXNldC5hcnJPcmRlciwgMTApO1xuICAgICAgb3B0aW9ucy5vbkFycmFuZ2VtZW50U2VjdGlvbkNsaWNrKFxuICAgICAgICBhcnJUb2tlbi5kYXRhc2V0LnNlY3Rpb24gfHwgbnVsbCxcbiAgICAgICAgTnVtYmVyLmlzRmluaXRlKG9yZGVyKSA/IG9yZGVyIDogbnVsbCxcbiAgICAgICAge1xuICAgICAgICAgIGJsb2NrSWQ6IGFyclRva2VuLmRhdGFzZXQuYXJyQmxvY2tJZCB8fCBudWxsLFxuICAgICAgICAgIGJsb2NrTGl2ZTogYXJyVG9rZW4uZGF0YXNldC5hcnJCbG9ja0xpdmUgPT09ICcxJyxcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgICB0YS5mb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXQgPSBnZXRTY3J1YlRhcmdldChlbGVtZW50cyk7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICBiZWdpblNjcnViKGUsIHRhcmdldCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgYXBwbHlTY3J1Yik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZFNjcnViKTtcbiAgfSk7XG5cbiAgc3VnZ2VzdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGlmICghc3VnZ2VzdFN0YXRlLm9wZW4pIHJldHVybjtcbiAgICBjb25zdCB2YWx1ZSA9IHN1Z2dlc3RJbnB1dC52YWx1ZTtcbiAgICBjb25zdCB0b2tlbiA9IHN1Z2dlc3RTdGF0ZS50b2tlbjtcbiAgICBpZiAoIXRva2VuKSByZXR1cm47XG4gICAgc3VnZ2VzdFN0YXRlLnRva2VuID0geyAuLi50b2tlbiwgdGV4dDogdmFsdWUgfHwgdG9rZW4udGV4dCB9O1xuICAgIGFwcGx5U3VnZ2VzdEZpbHRlcih2YWx1ZSk7XG4gICAgcmVzaXplU3VnZ2VzdElucHV0KCk7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgIGNvbnN0IGlkeCA9IHN1Z2dlc3RTdGF0ZS5pdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IHZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgc3VnZ2VzdFN0YXRlLmFjdGl2ZUluZGV4ID0gaWR4O1xuICAgICAgcmVuZGVyU3VnZ2VzdEl0ZW1zKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHByZWZpeCA9IHN1Z2dlc3RTdGF0ZS5pdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnZhbHVlLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aCh2YWx1ZS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgaWYgKHByZWZpeCA+PSAwKSB7XG4gICAgICBzdWdnZXN0U3RhdGUuYWN0aXZlSW5kZXggPSBwcmVmaXg7XG4gICAgICByZW5kZXJTdWdnZXN0SXRlbXMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHN1Z2dlc3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSByZXNvbHZlVmFsaWRTdWdnZXN0aW9uKHN1Z2dlc3RJbnB1dC52YWx1ZSk7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xuICAgIGFjY2VwdFN1Z2dlc3Rpb24odmFsdWUpO1xuICAgIHRhLmZvY3VzKCk7XG4gIH0pO1xuXG4gIHN1Z2dlc3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZVN1Z2dlc3QoMSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb3ZlU3VnZ2VzdCgtMSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJ1RhYicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHR5cGVkID0gc3VnZ2VzdElucHV0LnZhbHVlICYmIHN1Z2dlc3RJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICBjb25zdCB2YWx1ZSA9IGN1cnJlbnRTdWdnZXN0VmFsdWUoKSB8fCByZXNvbHZlVmFsaWRTdWdnZXN0aW9uKHR5cGVkKTtcbiAgICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICAgIGFjY2VwdFN1Z2dlc3Rpb24odmFsdWUpO1xuICAgICAgdGEuZm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgaGFzUXVlcnkgPSBCb29sZWFuKChzdWdnZXN0SW5wdXQudmFsdWUgfHwgJycpLnRyaW0oKSk7XG4gICAgICBpZiAoIWhhc1F1ZXJ5KSB7XG4gICAgICAgIHN1Z2dlc3RTdGF0ZS5kaXNtaXNzZWRUb2tlbiA9IHN1Z2dlc3RTdGF0ZS50b2tlbiB8fCBnZXRQYXJ0aWFsVG9rZW4oKTtcbiAgICAgICAgaGlkZVN1Z2dlc3QoKTtcbiAgICAgICAgZm9jdXNFZGl0b3IoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3VnZ2VzdFN0YXRlLmRpc21pc3NlZFRva2VuID0gbnVsbDtcbiAgICAgIHN1Z2dlc3RJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgYXBwbHlTdWdnZXN0RmlsdGVyKCcnKTtcbiAgICAgIHJlc2l6ZVN1Z2dlc3RJbnB1dCgpO1xuICAgICAgc2V0U3VnZ2VzdE1lbnVPcGVuKHRydWUpO1xuICAgICAgc3VnZ2VzdElucHV0LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHN1Z2dlc3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICBpZiAoIXN1Z2dlc3RTdGF0ZS5vcGVuIHx8ICFzdWdnZXN0U3RhdGUuaXRlbXMubGVuZ3RoKSByZXR1cm47XG4gICAgc2V0U3VnZ2VzdE1lbnVPcGVuKHRydWUpO1xuICB9KTtcblxuICBzdWdnZXN0SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICBzZXRTdWdnZXN0TWVudU9wZW4oZmFsc2UpO1xuICAgICAgaWYgKGFjdGl2ZSA9PT0gdGEpIHJldHVybjtcbiAgICAgIGlmIChhY3RpdmUgPT09IHN1Z2dlc3RJbnB1dCkgcmV0dXJuO1xuICAgICAgaWYgKHN1Z2dlc3RNZW51LmNvbnRhaW5zKGFjdGl2ZSkpIHJldHVybjtcbiAgICAgIGhpZGVTdWdnZXN0KCk7XG4gICAgfSwgODApO1xuICB9KTtcblxuICB0YS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgIGhpZGVUb29sdGlwKCk7XG4gICAgY2xlYXJTY3J1YkN1cnNvcigpO1xuICB9KTtcbiAgZ3V0dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGUgPT4ge1xuICAgIGNvbnN0IGxpbmVFbCA9IGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsb3Nlc3RcbiAgICAgID8gZS50YXJnZXQuY2xvc2VzdCgnLmVkaXRvci1sbltkYXRhLWxpbnQtbGV2ZWxdW2RhdGEtbGludF0nKVxuICAgICAgOiBudWxsO1xuICAgIGlmICghbGluZUVsKSB7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBsaW5lID0gcGFyc2VJbnQobGluZUVsLmRhdGFzZXQubGluZSwgMTApO1xuICAgIGNvbnN0IGxldmVsID0gbGluZUVsLmRhdGFzZXQubGludExldmVsID09PSAnZXJyb3InID8gJ0VSUk9SJyA6ICdXQVJOJztcbiAgICB0aXBUaXRsZS50ZXh0Q29udGVudCA9IE51bWJlci5pc0ludGVnZXIobGluZSkgPyBgTGluZSAke2xpbmV9IFx1MDBCNyAke2xldmVsfWAgOiBsZXZlbDtcbiAgICB0aXBCb2R5LnRleHRDb250ZW50ID0gU3RyaW5nKGxpbmVFbC5kYXRhc2V0LmxpbnQgfHwgJycpLnJlcGxhY2UoL1xcbisvZywgJyAgfCAgJyk7XG4gICAgdGlwU3RhZmYuaW5uZXJIVE1MID0gJyc7XG4gICAgdGlwU3RhZmYuaGlkZGVuID0gdHJ1ZTtcbiAgICBwbGFjZVRvb2x0aXAodGlwLCBlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gIH0pO1xuICBndXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICBoaWRlVG9vbHRpcCgpO1xuICB9KTtcblxuICB0YS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIGlmIChhY3RpdmUgPT09IHN1Z2dlc3RJbnB1dCkgcmV0dXJuO1xuICAgICAgaWYgKHN1Z2dlc3RNZW51LmNvbnRhaW5zKGFjdGl2ZSkpIHJldHVybjtcbiAgICAgIGhpZGVTdWdnZXN0KCk7XG4gICAgfSwgODApO1xuICB9KTtcblxuICBzdWdnZXN0TWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcbiAgICBjb25zdCBpdGVtID0gZS50YXJnZXQuY2xvc2VzdCgnbGlbZGF0YS12YWx1ZV0nKTtcbiAgICBpZiAoIWl0ZW0pIHJldHVybjtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWNjZXB0U3VnZ2VzdGlvbihpdGVtLmRhdGFzZXQudmFsdWUpO1xuICAgIHRhLmZvY3VzKCk7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGVtaXRDdXJzb3JUb2tlbigpO1xuICAgIHVwZGF0ZVN1Z2dlc3Rpb25zKCk7XG4gIH0pO1xuICB0YS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICBlbWl0Q3Vyc29yVG9rZW4oKTtcbiAgICB1cGRhdGVTdWdnZXN0aW9ucygpO1xuICB9KTtcbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB7XG4gICAgZW1pdEN1cnNvclRva2VuKCk7XG4gICAgdXBkYXRlU3VnZ2VzdGlvbnMoKTtcbiAgfSk7XG5cbiAgd3JhcC5hcHBlbmRDaGlsZChndXR0ZXIpO1xuICB3cmFwLmFwcGVuZENoaWxkKHByZSk7XG4gIHdyYXAuYXBwZW5kQ2hpbGQodGEpO1xuICB3cmFwLmFwcGVuZENoaWxkKHRpcCk7XG4gIGhpc3RvcnkuZW50cmllcyA9IFtidWlsZEhpc3RvcnlFbnRyeSgpXTtcbiAgaGlzdG9yeS5pbmRleCA9IDA7XG4gIHN5bmMoKTtcbiAgZW1pdEN1cnNvclRva2VuKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShzeW5jR3V0dGVySGVpZ2h0cyk7XG5cbiAgcmV0dXJuIHtcbiAgICBlbDogd3JhcCxcbiAgICB0ZXh0YXJlYTogdGEsXG4gICAgb246IChldmVudCwgZm4pID0+IHRhLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuKSxcbiAgICBnZXRWYWx1ZTogKCkgPT4gdGEudmFsdWUsXG4gICAgZ2V0Q3Vyc29yUG9zaXRpb246ICgpID0+IHRhLnNlbGVjdGlvblN0YXJ0LFxuICAgIGZsYXNoTGluZXMsXG4gICAgZmxhc2hBY3RpdmVUb2tlbnMsXG4gICAgY2xlYXJBY3RpdmVUb2tlbkhpZ2hsaWdodCxcbiAgICBzZXRBY3RpdmVTZWN0aW9uLFxuICAgIHNldEFjdGl2ZVNlY3Rpb25CeU9yZGVyLFxuICAgIHNldEFjdGl2ZUFycmFuZ2VtZW50TG9vcEJsb2NrLFxuICAgIHNldFF1ZXVlZEFycmFuZ2VtZW50VG9rZW4sXG4gICAganVtcFRvTGluZSxcbiAgICBzZXRMaW50UmVwb3J0OiAocmVwb3J0KSA9PiB7XG4gICAgICBsaW50UmVwb3J0ID0gcmVwb3J0IHx8IG51bGw7XG4gICAgICBhcHBseUxpbnRMaW5lTWFya2VycygpO1xuICAgIH0sXG4gICAgc2V0VmFsdWU6IHZhbHVlID0+IHtcbiAgICAgIHRhLnZhbHVlID0gdmFsdWU7XG4gICAgICB0YS5zZWxlY3Rpb25TdGFydCA9IDA7XG4gICAgICB0YS5zZWxlY3Rpb25FbmQgPSAwO1xuICAgICAgaGlzdG9yeS5lbnRyaWVzID0gW2J1aWxkSGlzdG9yeUVudHJ5KCldO1xuICAgICAgaGlzdG9yeS5pbmRleCA9IDA7XG4gICAgICBzeW5jKCk7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgaGlkZVN1Z2dlc3QoKTtcbiAgICAgIGNsZWFyQWN0aXZlVG9rZW5IaWdobGlnaHQoKTtcbiAgICB9LFxuICAgIGZvY3VzOiAoKSA9PiB0YS5mb2N1cygpLFxuICB9O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FBUyw0QkFBNEI7QUFFckMsU0FBUyxJQUFJLE9BQU87QUFDbEIsU0FBTyxPQUFPLEtBQUssRUFDaEIsUUFBUSxNQUFNLE9BQU8sRUFDckIsUUFBUSxNQUFNLE1BQU0sRUFDcEIsUUFBUSxNQUFNLE1BQU07QUFDekI7QUFFQSxTQUFTLEtBQUssS0FBSyxPQUFPLFFBQVEsQ0FBQyxHQUFHO0FBQ3BDLFFBQU0sWUFBWSxPQUFPLFFBQVEsS0FBSyxFQUNuQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsTUFBTTtBQUN6QixVQUFNLFdBQVcsT0FBTyxHQUFHLEVBQUUsUUFBUSxVQUFVLFlBQVUsSUFBSSxPQUFPLFlBQVksQ0FBQyxFQUFFO0FBQ25GLFdBQU8sU0FBUyxRQUFRLEtBQUssSUFBSSxTQUFTLENBQUM7QUFBQSxFQUM3QyxDQUFDLEVBQ0EsS0FBSyxFQUFFO0FBQ1YsU0FBTyxnQkFBZ0IsR0FBRyxJQUFJLFNBQVMsSUFBSSxJQUFJLEtBQUssQ0FBQztBQUN2RDtBQUVBLFNBQVMsU0FBUyxPQUFPO0FBQ3ZCLE1BQUksQ0FBQyxNQUFPLFFBQU87QUFDbkIsTUFBSSxVQUFVLElBQUssUUFBTztBQUMxQixNQUFJLFVBQVUsSUFBSyxRQUFPO0FBQzFCLE1BQUksTUFBTSxPQUFPLENBQUMsTUFBTSxJQUFLLFFBQU87QUFDcEMsTUFBSSxNQUFNLE9BQU8sQ0FBQyxNQUFNLElBQUssUUFBTztBQUNwQyxNQUFJLFNBQVMsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUNqQyxN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
