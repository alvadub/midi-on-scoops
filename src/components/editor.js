import { parseArrangementBody } from '../lib/arrangement.js';

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function span(cls, value, attrs = {}) {
  const dataAttrs = Object.entries(attrs)
    .map(([key, attrValue]) => {
      const kebabKey = String(key).replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
      return ` data-${kebabKey}="${esc(attrValue)}"`;
    })
    .join('');
  return `<span class="${cls}"${dataAttrs}>${esc(value)}</span>`;
}

function classify(token) {
  if (!token) return null;
  if (token === '<') return 'tok-inherit';
  if (token === '%') return 'tok-var-ref';
  if (token.charAt(0) === '%') return 'tok-var-ref';
  if (token.charAt(0) === '&') return 'tok-var-ref';
  if (/^x\d+$/.test(token)) return 'tok-repeat';
  if (/^[x_\-[\]]+$/.test(token)) return 'tok-pattern';
  if (/^(?:[a-zA-Z_]\w*)?\(\d+\s*,\s*\d+(?:\s*,\s*-?\d+)?\)$/.test(token)) return 'tok-pattern';
  if (/^[a-gA-G][#b]?\d+$/.test(token)) return 'tok-note';
  if (token.includes('|')) return 'tok-chord';
  if (/^(major|minor|phrygian|dorian|mixolydian|locrian|lydian)$/i.test(token)) return 'tok-mode';
  if (/^(?:I|II|III|IV|V|VI|VII|i|ii|iii|iv|v|vi|vii)°?$/.test(token)) return 'tok-progression';
  if (/^(?:\+\+|\.\.|>>|\*\*)$/.test(token)) return 'tok-operator';
  if (/^#\d+$/.test(token)) return 'tok-channel';
  if (/^-?\d+(\.\d+)?$/.test(token)) return 'tok-number';
  return null;
}

function renderToken(token) {
  const cls = classify(token);
  if (!cls) return esc(token);
  if (cls === 'tok-inherit') return span(cls, token, { inherit: '1' });
  if (cls === 'tok-var-ref' && token !== '%') return span(cls, token, { var: token });
  if (cls === 'tok-var-ref' && token === '%') return span(cls, token, { repeatLast: '1' });
  if (cls === 'tok-channel') return span(cls, token, { instrument: token.slice(1) });
  if (cls === 'tok-mode') return span(cls, token, { mode: token.toLowerCase() });
  if (cls === 'tok-pattern') {
    const chars = token
      .split('')
      .map((ch, idx) => `<span class="tok-pattern-step" data-pattern-step="${idx}" data-pattern-char="${esc(ch)}">${esc(ch)}</span>`)
      .join('');
    return `<span class="${cls}" data-pattern="${esc(token)}">${chars}</span>`;
  }
  if (cls === 'tok-note') return span(cls, token, { note: token });
  if (cls === 'tok-chord') return span(cls, token, { chord: token });
  if (cls === 'tok-number') return span(cls, token, { number: token });
  if (cls === 'tok-repeat') return span(cls, token, { repeat: token.slice(1) });
  return span(cls, token);
}

function renderArrangementToken(part, tokenMeta) {
  const attrs = {};
  if (tokenMeta && Number.isFinite(tokenMeta.order)) attrs.arrOrder = tokenMeta.order;
  if (tokenMeta && tokenMeta.blockId) attrs.arrBlockId = tokenMeta.blockId;
  if (tokenMeta && tokenMeta.blockLive) attrs.arrBlockLive = '1';
  if (tokenMeta && Number.isFinite(tokenMeta.blockStartOrder)) attrs.arrBlockStartOrder = tokenMeta.blockStartOrder;
  if (tokenMeta && Number.isFinite(tokenMeta.blockEndOrder)) attrs.arrBlockEndOrder = tokenMeta.blockEndOrder;

  if (tokenMeta && tokenMeta.kind === 'section') {
    return span('tok-section tok-arr-token', part, { ...attrs, section: part });
  }
  if (tokenMeta && tokenMeta.kind === 'repeat-last') {
    return span('tok-var-ref tok-arr-token tok-arr-repeat', part, { ...attrs, repeatLast: '1' });
  }
  if (tokenMeta && tokenMeta.kind === 'repeat') {
    const n = /^x(\d+)$/.test(part) ? part.slice(1) : '';
    return span('tok-repeat tok-arr-token tok-arr-repeat', part, { ...attrs, repeat: n });
  }
  if (tokenMeta && (tokenMeta.kind === 'block-open' || tokenMeta.kind === 'block-close')) {
    return span('tok-operator tok-arr-token tok-arr-bracket', part, attrs);
  }
  return renderToken(part);
}

function isDegreeToken(token) {
  return /^\d+(?:\.\.\d+)?$/.test(token);
}

function renderTokens(text) {
  const parts = text.split(/(\s+)/);
  let degreeContext = false;
  return parts.map(part => {
    if (/\s+/.test(part) || !part) return part;
    if (degreeContext && isDegreeToken(part)) {
      return span('tok-number tok-degree', part, { degree: part });
    }
    degreeContext = part === '**';
    return renderToken(part);
  }).join('');
}

function splitComment(line) {
  const value = String(line || '');
  const semicolonIndex = value.indexOf(';');
  const dashMatch = value.match(/\s--\s/);
  const dashIndex = dashMatch && typeof dashMatch.index === 'number' && /\S/.test(value.slice(0, dashMatch.index))
    ? dashMatch.index
    : -1;

  if (semicolonIndex < 0 && dashIndex < 0) return [value, ''];
  if (semicolonIndex < 0) return [value.slice(0, dashIndex), value.slice(dashIndex)];
  if (dashIndex < 0) return [value.slice(0, semicolonIndex), value.slice(semicolonIndex)];
  const idx = Math.min(semicolonIndex, dashIndex);
  return [value.slice(0, idx), value.slice(idx)];
}

function renderBase(base, arrangementState = null) {
  if (!base.trim()) return esc(base);

  if (/^\s*##\s+/.test(base)) {
    return base.replace(/^(\s*##\s+)(.*)$/, (_, p1, p2) => `${esc(p1)}${span('tok-subtrack', p2)}`);
  }
  if (/^\s*#\s+/.test(base)) {
    return base.replace(/^(\s*#\s+)(.*)$/, (_, p1, p2) => `${esc(p1)}${span('tok-track', p2)}`);
  }
  if (/^\s*@/.test(base)) {
    const inheritMatch = base.match(/^(\s*)(@[^\s]+)(\s*)<(\s*)([^\s]+)(.*)$/);
    if (inheritMatch) {
      const [, indent, sourceToken, leftGap, rightGap, targetToken, rest] = inheritMatch;
      const sourceName = sourceToken.slice(1);
      return `${esc(indent)}${span('tok-section-head', sourceToken, { sectionHead: sourceName })}${esc(leftGap)}${span('tok-inherit', '<', {
        inherit: '1',
        inheritSource: sourceName,
        inheritTarget: targetToken,
      })}${esc(rightGap)}${esc(targetToken)}${renderTokens(rest)}`;
    }
    const headerMatch = base.match(/^(\s*)(@[^\s]+)(.*)$/);
    if (headerMatch) {
      const [, indent, sourceToken, rest] = headerMatch;
      return `${esc(indent)}${span('tok-section-head', sourceToken, { sectionHead: sourceToken.slice(1) })}${renderTokens(rest)}`;
    }
    return renderTokens(base);
  }
  if (/^\s*>/.test(base)) {
    const indent = esc(base.match(/^\s*/)[0]);
    const tail = base.trimStart().slice(1);
    const lead = tail.match(/^\s*/)[0] || '';
    const body = tail.slice(lead.length);
    const parsed = parseArrangementBody(body, arrangementState ? {
      orderOffset: arrangementState.orderOffset,
      blockOffset: arrangementState.blockOffset,
    } : undefined);
    if (arrangementState) {
      arrangementState.orderOffset = parsed.nextOrder;
      arrangementState.blockOffset = parsed.nextBlock;
    }
    let tokenIndex = 0;
    const rendered = (body.match(/\s+|\[|\]|[^\s\[\]]+/g) || [])
      .map(part => {
        if (!part || /^\s+$/.test(part)) return part;
        const tokenMeta = parsed.tokens[tokenIndex] || null;
        tokenIndex += 1;
        return renderArrangementToken(part, tokenMeta);
      })
      .join('');
    return `${indent}${span('tok-arrangement', '>')}${esc(lead)}${rendered}`;
  }
  if (/^\s*[%&][^\s]+\s+/.test(base)) {
    return base.replace(/^(\s*)([%&][^\s]+)(\s*)(.*)$/, (_, i, v, s, rest) => `${esc(i)}${span('tok-var-def', v, { var: v })}${esc(s)}${renderTokens(rest)}`);
  }
  if (/^\s*#\d+/.test(base)) {
    let velocityTagged = false;
    return base.split(/(\s+)/).map(part => {
      if (/^\s*$/.test(part)) return part;
      const cls = classify(part);
      if (cls === 'tok-number' && !velocityTagged) {
        velocityTagged = true;
        return span(cls, part, { velocity: part });
      }
      return renderToken(part);
    }).join('');
  }
  return renderTokens(base);
}

function highlight(input) {
  const arrangementState = { orderOffset: 0, blockOffset: 0 };
  return String(input || '')
    .split(/\r?\n/)
    .map((line, lineNumber) => {
      const [base, comment] = splitComment(line);
      const rendered = renderBase(base, arrangementState);
      const content = !comment ? rendered : `${rendered}${span('tok-comment', comment)}`;
      return `<span class="hl-line" data-line="${lineNumber}">${content}</span>`;
    })
    .join('');
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
  const m = String(noteStr || '').match(/^([a-gA-G])([#b]?)(\d+)$/);
  if (!m) return null;
  const SEMITONES = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 };
  const base = SEMITONES[m[1].toLowerCase()];
  const alt = m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0;
  const oct = parseInt(m[3], 10);
  if (Number.isNaN(oct)) return null;
  return ((oct + 1) * 12) + base + alt;
}

function posToY(pos) {
  return 60 - pos * 5;
}

function buildStaffSVG(notes, mode = 'chord') {
  if (!notes || notes.length === 0) return '';
  const sorted = notes
    .map(n => ({ note: n, pos: noteToPos(n) }))
    .filter(n => n.pos !== null)
    .sort((a, b) => a.pos - b.pos);
  if (sorted.length === 0) return '';

  const W = 200;
  const H = 130;
  const CENTER_Y = 66;
  const clefByRange = (() => {
    const avg = sorted.reduce((sum, n) => sum + n.pos, 0) / sorted.length;
    if (avg <= -6) return { symbol: '𝄢', basePos: -8, size: 48, y: CENTER_Y + 16 }; // F-clef
    if (avg >= 2) return { symbol: '𝄞', basePos: 4, size: 52, y: CENTER_Y + 10 }; // G-clef
    return { symbol: '𝄡', basePos: -2, size: 46, y: CENTER_Y + 14 }; // C-clef
  })();
  const toY = absPos => CENTER_Y - (absPos - clefByRange.basePos) * 5;
  let svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`;

  svg += '<style>.staff-line,.ledger{stroke:#fff;stroke-width:1}</style>';
  for (let i = 0; i < 5; i += 1) {
    const y = CENTER_Y - 20 + i * 10;
    svg += `<line class="staff-line" x1="0" y1="${y}" x2="${W}" y2="${y}"/>`;
  }
  svg += `<text x="8" y="${clefByRange.y}" fill="#fff" font-size="${clefByRange.size}" font-family="serif">${clefByRange.symbol}</text>`;

  const isScale = mode === 'scale';
  const isSingle = mode === 'single';
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

  sorted.forEach(n => {
    const y = toY(n.pos);
    const localPos = n.pos - clefByRange.basePos;
    const m = n.note.match(/^([a-gA-G])([#b]?)(\d+)$/);
    const accidental = m ? m[2] : '';
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
    if (accidental === '#') {
      svg += `<text x="${n.x - 14}" y="${y + 4}" fill="#fff" font-size="10">♯</text>`;
    } else if (accidental === 'b') {
      svg += `<text x="${n.x - 12}" y="${y + 4}" fill="#fff" font-size="11">♭</text>`;
    }
  });

  if (!isScale && !isSingle && sorted.length > 0) {
    const lowestPos = sorted[0].pos - clefByRange.basePos;
    const highestPos = sorted[sorted.length - 1].pos - clefByRange.basePos;
    let stemDir = lowestPos <= 0 ? 'up' : 'down';
    if (stemDir === 'up') {
      const highY = CENTER_Y - highestPos * 5;
      const highX = sorted[sorted.length - 1].x;
      svg += `<line x1="${highX + 5}" y1="${highY}" x2="${highX + 5}" y2="${highY - 28}" stroke="#fff" stroke-width="1.2"/>`;
    } else {
      const lowY = CENTER_Y - lowestPos * 5;
      const lowX = sorted[0].x;
      svg += `<line x1="${lowX - 5}" y1="${lowY}" x2="${lowX - 5}" y2="${lowY + 28}" stroke="#fff" stroke-width="1.2"/>`;
    }
  }

  svg += '</svg>';
  return svg;
}

function buildPatternPreviewMarkup(pattern) {
  const symbols = String(pattern || '').split('');
  if (!symbols.length) return null;
  const cells = symbols.map((ch, i) => {
    const cls = ch === 'x' || ch === 'X'
      ? 'is-pulse'
      : ch === '-'
        ? 'is-rest'
        : ch === '_'
          ? 'is-hold'
          : 'is-sub';
    const group = i % 4 === 0 ? 'is-group' : '';
    return `<span class="pp-cell ${cls} ${group}" aria-label="step ${i + 1}"></span>`;
  }).join('');
  return `<div class="pattern-preview" aria-label="Pattern preview"><div class="pp-grid">${cells}</div></div>`;
}

function describePattern(pattern) {
  const symbols = String(pattern || '').split('');
  if (!symbols.length) return 'Empty pattern';
  const pulseIdx = [];
  let holds = 0;
  let rests = 0;
  symbols.forEach((ch, i) => {
    const low = ch.toLowerCase();
    if (low === 'x') pulseIdx.push(i);
    else if (ch === '_') holds += 1;
    else if (ch === '-') rests += 1;
  });

  if (pulseIdx.length === 0) {
    if (rests === symbols.length || holds === 0) return `All silence (${symbols.length} steps)`;
    return `No pulses (${holds} holds, ${rests} rests)`;
  }

  const parts = [`${pulseIdx.length} pulse${pulseIdx.length !== 1 ? 's' : ''} in ${symbols.length} steps`];
  if (pulseIdx.length > 1) {
    const gaps = pulseIdx.slice(1).map((idx, i) => idx - pulseIdx[i]);
    const even = gaps.every(g => g === gaps[0]);
    if (even) {
      const n = gaps[0];
      if (n === 2) parts.push('in 2nds');
      else if (n === 3) parts.push('in 3rds');
      else if (n === 4) parts.push('in 4ths');
      else parts.push(`every ${n} steps`);
    }
  }
  if (rests > 0) parts.push(`${rests} rests`);
  return parts.join(' · ');
}

function placeTooltip(tipEl, x, y) {
  const margin = 8;
  const offset = 12;
  tipEl.hidden = false;
  tipEl.style.left = '-9999px';
  tipEl.style.top = '-9999px';
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

function charOffsetOfElement(root, target, sourceText = '') {
  if (!root || !target || !root.contains(target)) return -1;
  const lineEl = target.closest('[data-line]');
  const lineNumber = lineEl ? parseInt(lineEl.dataset.line, 10) : 0;
  if (!lineEl || Number.isNaN(lineNumber)) return -1;

  // Measure offset within this line only (avoids cross-block range.toString() quirks
  // where empty display:block spans contribute \n characters to the result)
  const lineRange = document.createRange();
  lineRange.selectNodeContents(lineEl);
  lineRange.setEndBefore(target);
  const offsetInLine = lineRange.toString().length;

  // Sum preceding line lengths from source text, not rendered overlay text.
  // The overlay may inject spacing around tokens like "<", which would skew offsets.
  const sourceLines = String(sourceText).split(/\r?\n/);
  let total = offsetInLine;
  for (let i = 0; i < lineNumber; i++) {
    total += (sourceLines[i] ? sourceLines[i].length : 0) + 1;
  }
  return total;
}

function tokenAtCursor(text, cursorPos) {
  const src = String(text || '');
  const pos = Math.max(0, Math.min(src.length, cursorPos || 0));
  const lineStart = src.lastIndexOf('\n', Math.max(0, pos - 1)) + 1;
  let lineEnd = src.indexOf('\n', pos);
  if (lineEnd < 0) lineEnd = src.length;
  const lineText = src.slice(lineStart, lineEnd);
  const [base, comment] = splitComment(lineText);
  const commentPos = comment ? lineStart + base.length : -1;
  if (commentPos >= 0 && pos >= commentPos) {
    const value = src.slice(commentPos, lineEnd);
    return { type: 'tok-comment', value, start: commentPos, end: lineEnd };
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
        type: hash === '##' ? 'tok-subtrack' : 'tok-track',
        value: body,
        start: hashStart,
        end: bodyEnd,
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
        type: 'tok-var-def',
        value: tokenValue,
        start: tokenStart,
        end: tokenEnd,
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
  if (!type && /^@[^\s]+$/.test(value)) type = 'tok-section';
  if (!type) type = 'tok-unknown';
  return { type, value, start, end };
}

export function createEditor(initialText, options = {}) {
  const wrap = document.createElement('div');
  wrap.id = 'editor-wrap';

  const gutter = document.createElement('div');
  gutter.id = 'editor-gutter';
  gutter.setAttribute('aria-hidden', 'true');

  const pre = document.createElement('pre');
  pre.id = 'editor-hl';
  pre.setAttribute('aria-hidden', 'true');

  const ta = document.createElement('textarea');
  ta.id = 'editor';
  ta.spellcheck = false;
  ta.autocomplete = 'off';
  ta.value = initialText;

  const tip = document.createElement('div');
  tip.id = 'var-tooltip';
  tip.hidden = true;
  tip.innerHTML = '<strong></strong><span class="tooltip-resolved"></span><div class="tooltip-staff"></div>';
  const suggestInput = document.createElement('input');
  suggestInput.id = 'suggest-input';
  suggestInput.hidden = true;
  suggestInput.type = 'text';
  suggestInput.autocomplete = 'off';
  suggestInput.spellcheck = false;
  suggestInput.setAttribute('aria-label', 'Completions');
  const suggestMenu = document.createElement('ul');
  suggestMenu.id = 'suggest-menu';
  suggestMenu.hidden = true;
  suggestMenu.setAttribute('role', 'listbox');
  suggestMenu.setAttribute('aria-label', 'Completions');
  const tipTitle = tip.querySelector('strong');
  const tipBody = tip.querySelector('.tooltip-resolved');
  const tipStaff = tip.querySelector('.tooltip-staff');
  const flashTimers = new Set();
  let scrubState = null;
  let activeTokens = [];
  let queuedArrangementOrder = null;
  let suggestState = {
    open: false,
    allItems: [],
    items: [],
    activeIndex: 0,
    token: null,
    dismissedToken: null,
  };
  let lintReport = null;
  const HISTORY_LIMIT = 200;
  const history = {
    entries: [],
    index: -1,
    applying: false,
  };
  const SUGGESTIONS_ENABLED = options.suggestions !== false;
  const MODE_CANDIDATES = ['major', 'minor', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'locrian'];
  const NOTE_CANDIDATES = 'ABCDEFG'.split('').flatMap(note => (
    ['', '#', 'b'].flatMap(accidental => (
      [3, 4, 5].map(octave => `${note}${accidental}${octave}`)
    ))
  ));
  const INSTRUMENT_OPTIONS = Array.isArray(options.instrumentOptions) && options.instrumentOptions.length
    ? options.instrumentOptions
    : [
      ...Array.from({ length: 128 }, (_, i) => `#${i}`),
      ...Array.from({ length: 128 }, (_, i) => `#${2000 + i}`),
    ].map(value => {
      const raw = value.slice(1);
      const title = options.resolveInstrument ? options.resolveInstrument(raw) : null;
      return {
        value,
        label: title ? `${title} (${value})` : value,
      };
    });
  const ALL_CANDIDATES = [...NOTE_CANDIDATES, ...MODE_CANDIDATES];

  const tooltipHandlers = [
    options.resolveNote && {
      attr: 'note',
      resolve: options.resolveNote,
      notes: value => [value],
      staffMode: 'single',
      title: value => normalizeNote(value),
    },
    options.resolveChord && {
      attr: 'chord',
      resolve: options.resolveChord,
      notes: value => value.split('|').map(normalizeNote),
      staffMode: 'chord',
      title: () => 'Chord',
    },
    options.resolveMode && {
      attr: 'mode',
      resolve: options.resolveMode,
      notes: options.resolveModeNotes,
      staffMode: 'scale',
      title: value => value,
    },
    options.resolveInstrument && {
      attr: 'instrument',
      resolve: options.resolveInstrument,
      title: value => `#${value}`,
    },
    options.resolveSection && {
      attr: 'section',
      resolve: options.resolveSection,
      title: value => `@${value}`,
    },
    {
      attr: 'inherit',
      resolve: (_value, el) => {
        const from = el && el.dataset ? el.dataset.inheritSource : null;
        const to = el && el.dataset ? el.dataset.inheritTarget : null;
        if (from && to) {
          return `Section @${from} inherits from @${to}`;
        }
        return 'Inherit/copy from another section';
      },
      title: (_value, el) => {
        const from = el && el.dataset ? el.dataset.inheritSource : null;
        const to = el && el.dataset ? el.dataset.inheritTarget : null;
        return from && to ? `@${from} < @${to}` : '<';
      },
    },
    options.resolveVar && {
      attr: 'var',
      resolve: options.resolveVar,
      title: value => value,
    },
    {
      attr: 'repeatLast',
      resolve: () => 'Repeats the preceding expression once more',
      title: () => '%',
    },
    options.resolveVelocity && {
      attr: 'velocity',
      resolve: options.resolveVelocity,
      title: v => `Velocity ${v}`,
    },
    {
      attr: 'repeat',
      resolve: v => {
        const n = parseInt(v, 10);
        return `Plays the preceding sequence ${n} time${n !== 1 ? 's' : ''} in a row`;
      },
      title: v => `×${v}`,
    },
    {
      attr: 'number',
      resolve: () => 'Numeric value — used as velocity, octave, or parameter',
      title: v => v,
    },
    {
      attr: 'degree',
      resolve: value => {
        const range = String(value || '').match(/^(\d+)\.\.(\d+)$/);
        if (range) {
          const a = parseInt(range[1], 10);
          const b = parseInt(range[2], 10);
          return `Selects scale degrees ${a} through ${b} from the current root+mode context (**)`;
        }

        const n = parseInt(value, 10);
        if (!Number.isNaN(n)) {
          return `Selects scale degree ${n} from the current root+mode context (**)`;
        }
        return 'Selects degrees from the current root+mode context (**)';
      },
      title: value => `Degree ${value}`,
    },
    {
      attr: 'pattern',
      resolve: value => `${describePattern(value)}\nx = hit  |  - = rest  |  _ = sustain  |  [ ] = subdivide`,
      title: () => 'Rhythm pattern',
      visual: value => buildPatternPreviewMarkup(value),
    },
  ].filter(Boolean);

  function sync() {
    pre.innerHTML = highlight(ta.value);
    const lineCount = String(ta.value).split(/\r?\n/).length;
    gutter.innerHTML = Array.from({ length: lineCount }, (_, index) => (
      `<span class="editor-ln" data-line="${index + 1}">${index + 1}</span>`
    )).join('');
    syncGutterHeights();
    applyLintMarkers();
    applyLintLineMarkers();
    applyQueuedArrangementToken();
  }

  function syncGutterHeights() {
    const gutterLines = [...gutter.querySelectorAll('.editor-ln[data-line]')];
    const editorLines = [...pre.querySelectorAll('.hl-line[data-line]')];
    if (!pre.isConnected) {
      gutterLines.forEach((lineEl) => {
        lineEl.style.height = '';
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
    const map = new Map();
    if (!lintReport) return map;

    const push = (level, item) => {
      if (!item || !Number.isInteger(item.line) || item.line < 1) return;
      const line = item.line;
      const existing = map.get(line) || { level: 'warning', messages: [] };
      if (level === 'error') existing.level = 'error';
      const prefix = item.rule ? `[${item.rule}] ` : '';
      const text = `${level.toUpperCase()}: ${prefix}${item.message}`;
      if (!existing.messages.includes(text)) existing.messages.push(text);
      map.set(line, existing);
    };

    (lintReport.errors || []).forEach(item => push('error', item));
    (lintReport.warnings || []).forEach(item => push('warning', item));
    return map;
  }

  function applyLintLineMarkers() {
    const lineMap = buildLintLineMap();
    const lineNums = gutter.querySelectorAll('.editor-ln[data-line]');
    lineNums.forEach((el) => {
      el.classList.remove('has-lint-error', 'has-lint-warning');
      el.removeAttribute('data-lint-level');
      el.removeAttribute('data-lint');
      const line = parseInt(el.dataset.line, 10);
      const info = lineMap.get(line);
      if (!info) return;
      if (info.level === 'error') el.classList.add('has-lint-error');
      else el.classList.add('has-lint-warning');
      el.dataset.lintLevel = info.level;
      el.dataset.lint = info.messages.join('\n');
    });

    const lines = pre.querySelectorAll('.hl-line[data-line]');
    lines.forEach((el) => {
      el.classList.remove('has-lint-error', 'has-lint-warning');
      el.removeAttribute('data-lint-level');
      el.removeAttribute('data-lint');
      const line = parseInt(el.dataset.line, 10) + 1;
      const info = lineMap.get(line);
      if (!info) return;
      if (info.level === 'error') el.classList.add('has-lint-error');
      else el.classList.add('has-lint-warning');
      el.dataset.lintLevel = info.level;
      el.dataset.lint = info.messages.join('\n');
    });
  }

  function buildHistoryEntry() {
    return {
      value: ta.value,
      start: ta.selectionStart,
      end: ta.selectionEnd,
    };
  }

  function pushHistoryEntry() {
    if (history.applying) return;
    const next = buildHistoryEntry();
    const current = history.entries[history.index];

    if (
      current
      && current.value === next.value
      && current.start === next.start
      && current.end === next.end
    ) {
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
    pre.querySelectorAll('.tok-error').forEach(el => {
      el.classList.remove('tok-error');
      if (el.dataset) delete el.dataset.lint;
    });

    const mark = (el, reason) => {
      if (!el) return;
      el.classList.add('tok-error');
      if (el.dataset) el.dataset.lint = reason || 'Invalid token value';
    };

    const source = String(ta.value || '');
    const varDefs = new Set();
    const sectionDefs = new Set();
    source.split(/\r?\n/).forEach(rawLine => {
      const noComment = rawLine.replace(/;.*$/, '');
      const varMatch = noComment.match(/^\s*(%[^\s]+)\s+/);
      if (varMatch) varDefs.add(varMatch[1]);
      const sectionMatch = noComment.match(/^\s*@([^\s<]+)/);
      if (sectionMatch) sectionDefs.add(sectionMatch[1]);
    });

    pre.querySelectorAll('.tok-channel[data-instrument]').forEach(el => {
      const raw = el.dataset.instrument;
      const n = parseInt(raw, 10);
      if (Number.isNaN(n)) {
        mark(el, 'Invalid instrument number');
        return;
      }
      if (options.resolveInstrument && !options.resolveInstrument(raw)) {
        mark(el, `Unknown instrument #${raw}`);
      }
    });

    pre.querySelectorAll('[data-velocity]').forEach(el => {
      const n = parseInt(el.dataset.velocity, 10);
      if (Number.isNaN(n) || n < 0 || n > 127) {
        mark(el, 'Velocity must be between 0 and 127');
      }
    });

    pre.querySelectorAll('.tok-repeat[data-repeat]').forEach(el => {
      const n = parseInt(el.dataset.repeat, 10);
      if (Number.isNaN(n) || n < 1) {
        mark(el, 'Repeat must be >= 1');
      }
    });

    pre.querySelectorAll('.tok-degree[data-degree]').forEach(el => {
      const raw = String(el.dataset.degree || '');
      const range = raw.match(/^(\d+)\.\.(\d+)$/);
      if (range) {
        const a = parseInt(range[1], 10);
        const b = parseInt(range[2], 10);
        if (a < 1 || b < 1) {
          mark(el, 'Degree range must be >= 1');
          return;
        }
        if (a > b) {
          mark(el, 'Degree range must be ascending');
        }
        return;
      }

      const n = parseInt(raw, 10);
      if (Number.isNaN(n) || n < 1) {
        mark(el, 'Degree must be >= 1');
      }
    });

    pre.querySelectorAll('.tok-note[data-note]').forEach(el => {
      const midi = noteToMidi(el.dataset.note);
      if (midi == null || midi < 0 || midi > 127) {
        mark(el, 'Note out of MIDI range (0..127)');
      }
    });

    pre.querySelectorAll('.tok-var-ref[data-var]').forEach(el => {
      const name = el.dataset.var;
      if (!name || name === '%') return;
      if (!varDefs.has(name)) {
        mark(el, `Unknown variable ${name}`);
      }
    });

    pre.querySelectorAll('.tok-arr-token.tok-section[data-section]').forEach(el => {
      const name = el.dataset.section;
      if (!sectionDefs.has(name)) {
        mark(el, `Unknown section @${name}`);
      }
    });

    pre.querySelectorAll('.tok-inherit[data-inherit-target]').forEach(el => {
      const target = String(el.dataset.inheritTarget || '').trim();
      if (!target) return;
      if (!sectionDefs.has(target)) {
        mark(el, `Unknown inherited section @${target}`);
      }
    });
  }

  function hideTooltip() {
    tip.hidden = true;
    tipStaff.innerHTML = '';
    tipStaff.hidden = true;
  }

  function clearScrubCursor() {
    wrap.classList.remove('scrub-hover');
    wrap.classList.remove('scrub-active');
  }

  function clearActiveTokenHighlight() {
    activeTokens.forEach(token => token.classList.remove('tok-active'));
    activeTokens = [];
  }

  function emitCursorToken() {
    if (!options.onCursorToken) return;
    const token = tokenAtCursor(ta.value, ta.selectionStart);
    options.onCursorToken(token);
  }

  function emitScrubToken(value) {
    if (!options.onCursorToken) return;
    options.onCursorToken({ type: 'tok-level', value: String(value) });
  }

  function isCommentToggleShortcut(e) {
    if (!(e.metaKey || e.ctrlKey) || e.altKey) return false;
    if (e.code === 'Slash') return true;
    if (e.code === 'Digit7' && e.shiftKey) return true;
    if (e.key === '/') return true;
    return false;
  }

  function lineColAt(text, pos) {
    const src = String(text || '');
    const clamped = Math.max(0, Math.min(src.length, pos || 0));
    const lines = src.split('\n');
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
    const lines = ta.value.split('\n');
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
    const lines = src.split('\n');
    const startLine = Math.max(0, startLC.line);
    const endLine = Math.max(startLine, endLC.line);
    const slice = lines.slice(startLine, endLine + 1);
    const nonEmpty = slice.filter(line => line.trim().length > 0);
    const uncomment = nonEmpty.length > 0 && nonEmpty.every(line => /^\s*;\s?/.test(line));

    for (let i = startLine; i <= endLine; i += 1) {
      const line = lines[i];
      if (!line || !line.trim()) continue;
      if (uncomment) {
        lines[i] = line.replace(/^(\s*);\s?/, '$1');
      } else {
        lines[i] = line.replace(/^(\s*)/, '$1; ');
      }
    }

    const nextValue = lines.join('\n');
    ta.value = nextValue;

    const nextLines = nextValue.split('\n');
    const newStart = offsetAt(nextLines, startLC.line, startLC.col);
    const newEndLine = selEnd > selStart ? endLC.line : startLC.line;
    const newEndCol = selEnd > selStart ? endLC.col + 1 : startLC.col;
    const newEnd = offsetAt(nextLines, newEndLine, newEndCol);

    ta.selectionStart = newStart;
    ta.selectionEnd = Math.max(newStart, newEnd);
    ta.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function setActiveSection(sectionName, occurrence = null) {
    pre.querySelectorAll('.tok-section.is-active-section')
      .forEach(el => el.classList.remove('is-active-section'));
    if (!sectionName) return;
    const matches = [...pre.querySelectorAll(`.tok-section[data-section="${sectionName}"]`)];
    if (!matches.length) return;
    if (typeof occurrence === 'number' && occurrence >= 0) {
      const target = matches[occurrence];
      if (target) target.classList.add('is-active-section');
      return;
    }
    matches.forEach(el => el.classList.add('is-active-section'));
  }

  function setActiveSectionByOrder(order) {
    pre.querySelectorAll('.tok-arr-token.is-active-section')
      .forEach(el => el.classList.remove('is-active-section'));
    if (typeof order !== 'number' || order < 0) return;
    const target = pre.querySelector(`.tok-arr-token[data-arr-order="${order}"]`);
    if (target) target.classList.add('is-active-section');
  }

  function setActiveArrangementLoopBlock(blockId) {
    pre.querySelectorAll('.tok-arr-token.is-active-loop-block')
      .forEach(el => el.classList.remove('is-active-loop-block'));
    if (!blockId) return;
    pre.querySelectorAll(`.tok-arr-token[data-arr-block-id="${blockId}"]`)
      .forEach(el => el.classList.add('is-active-loop-block'));
  }

  function applyQueuedArrangementToken() {
    pre.querySelectorAll('.tok-arr-token.is-queued-section')
      .forEach(el => el.classList.remove('is-queued-section'));
    if (typeof queuedArrangementOrder !== 'number' || queuedArrangementOrder < 0) return;
    const target = pre.querySelector(`.tok-arr-token[data-arr-order="${queuedArrangementOrder}"]`);
    if (target) target.classList.add('is-queued-section');
  }

  function setQueuedArrangementToken(order) {
    queuedArrangementOrder = (typeof order === 'number' && order >= 0) ? order : null;
    applyQueuedArrangementToken();
  }

  function getPartialToken() {
    const pos = ta.selectionStart;
    const src = ta.value;
    const lineStart = src.lastIndexOf('\n', Math.max(0, pos - 1)) + 1;
    const lineEndRaw = src.indexOf('\n', pos);
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
    const relLeft = tokenText.lastIndexOf('|', Math.max(0, relPos - 1));
    const relRightRaw = tokenText.indexOf('|', relPos);
    const relRight = relRightRaw < 0 ? tokenText.length : relRightRaw;
    const partStart = relLeft + 1;
    const partEnd = relRight;

    if (partStart >= partEnd) return null;
    const partText = tokenText.slice(partStart, partEnd);
    if (!partText) return null;

    return {
      text: partText,
      start: tokenStart + partStart,
      end: tokenStart + partEnd,
    };
  }

  function getSuggestions(partial) {
    if (!partial || !partial.text || partial.text.length < 1) return [];
    const lineStart = ta.value.lastIndexOf('\n', Math.max(0, partial.start - 1)) + 1;
    const lineEndRaw = ta.value.indexOf('\n', partial.start);
    const lineEnd = lineEndRaw < 0 ? ta.value.length : lineEndRaw;
    const line = ta.value.slice(lineStart, lineEnd).trimStart();
    if (/^#{1,2}\s+/.test(line)) return [];
    if (partial.text.startsWith('@')) return [];
    const before = ta.value.slice(0, partial.start).trimEnd();
    if (before.endsWith('<')) return [];
    const defs = String(ta.value || '')
      .split(/\r?\n/)
      .map(raw => raw.replace(/;.*$/, ''))
      .map(raw => raw.match(/^\s*([%&][^\s]+)\s+/))
      .filter(Boolean)
      .map(match => match[1]);
    const uniqueDefs = [...new Set(defs)];
    const buildVarOptions = (sigil) => {
      const token = String(partial.text || '');
      const prefix = token.charAt(0) === sigil ? token : sigil;
      return uniqueDefs
        .filter(name => name.charAt(0) === sigil)
        .filter(name => name.toLowerCase().startsWith(prefix.toLowerCase()))
        .map(name => ({ value: name, label: `${name} variable` }));
    };
    const lineBeforeToken = ta.value.slice(lineStart, partial.start).trim();
    if (partial.text.startsWith('%') || partial.text === '%') {
      if (!lineBeforeToken) return [];
      return buildVarOptions('%');
    }
    if (partial.text.startsWith('&') || partial.text === '&') {
      if (!lineBeforeToken) return [];
      return buildVarOptions('&');
    }
    const cls = classify(partial.text);
    if (cls === 'tok-channel' || partial.text.startsWith('#')) {
      return INSTRUMENT_OPTIONS;
    }
    if (cls && cls !== 'tok-note' && cls !== 'tok-mode') return [];
    return ALL_CANDIDATES.map(value => ({ value, label: value }));
  }

  function getCaretCoords() {
    const mirror = document.createElement('div');
    const style = window.getComputedStyle(ta);
    const props = [
      'font', 'fontSize', 'fontFamily', 'fontWeight', 'lineHeight',
      'letterSpacing', 'textTransform', 'textIndent', 'whiteSpace', 'wordSpacing',
      'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',
      'borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth',
      'boxSizing',
    ];
    props.forEach(prop => {
      mirror.style[prop] = style[prop];
    });
    mirror.style.position = 'absolute';
    mirror.style.visibility = 'hidden';
    mirror.style.pointerEvents = 'none';
    mirror.style.top = '0';
    mirror.style.left = '0';
    mirror.style.width = `${ta.clientWidth}px`;
    mirror.style.overflow = 'hidden';
    mirror.style.whiteSpace = 'pre-wrap';
    mirror.style.wordWrap = 'break-word';

    const before = ta.value.slice(0, ta.selectionStart);
    const marker = document.createElement('span');
    marker.textContent = '\u200b';
    mirror.textContent = before;
    mirror.appendChild(marker);
    wrap.appendChild(mirror);
    const top = marker.offsetTop - ta.scrollTop;
    const left = marker.offsetLeft - ta.scrollLeft;
    wrap.removeChild(mirror);
    return { top, left };
  }

  function resizeSuggestInput() {
    const text = (suggestInput.value || suggestInput.placeholder || '').trim();
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
    suggestInput.value = '';
    suggestInput.placeholder = '';
    suggestInput.style.width = '';
    suggestMenu.hidden = true;
    suggestMenu.innerHTML = '';
    setContextOpen(false);
  }

  function setSuggestMenuOpen(open) {
    suggestMenu.hidden = !open;
    if (open) {
      requestAnimationFrame(() => {
        const active = suggestMenu.querySelector('li[data-active="1"]');
        if (active) active.scrollIntoView({ block: 'nearest' });
      });
    }
  }

  function isSameSuggestToken(a, b) {
    return Boolean(
      a && b
      && a.start === b.start
      && a.end === b.end
      && a.text === b.text
    );
  }

  function renderSuggestItems() {
    if (!suggestState.items.length) {
      suggestMenu.innerHTML = '<li class="suggest-empty" aria-disabled="true">No matches. Keep typing or press Esc.</li>';
      return;
    }
    suggestMenu.innerHTML = suggestState.items
      .map((item, idx) => (
        `<li role="option" data-value="${item.value}" data-active="${idx === suggestState.activeIndex ? '1' : '0'}">${item.label || item.value}</li>`
      ))
      .join('');
    if (!suggestMenu.hidden) {
      const active = suggestMenu.querySelector('li[data-active="1"]');
      if (active) active.scrollIntoView({ block: 'nearest' });
    }
  }

  function applySuggestFilter(rawQuery) {
    const query = String(rawQuery || '').trim().toLowerCase();
    if (!query) {
      suggestState.items = suggestState.allItems.slice();
      suggestState.activeIndex = 0;
      renderSuggestItems();
      return;
    }
    suggestState.items = suggestState.allItems.filter(item => (
      item.value.toLowerCase().includes(query)
      || String(item.label || '').toLowerCase().includes(query)
    ));
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
    const initialQuery = '';
    suggestInput.value = initialQuery;
    suggestInput.placeholder = token.text || '';
    applySuggestFilter(initialQuery);
    resizeSuggestInput();
    suggestInput.hidden = false;
    if (token && token.text) {
      const raw = token.text.trim();
      const exact = suggestState.items.findIndex(item => item.value === raw);
      const exactCI = exact >= 0
        ? exact
        : suggestState.items.findIndex(item => item.value.toLowerCase() === raw.toLowerCase());
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
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    hideSuggest();
  }

  function moveSuggest(delta) {
    if (!suggestState.open || !suggestState.items.length) return;
    const size = suggestState.items.length;
    suggestState.activeIndex = (suggestState.activeIndex + delta + size) % size;
    renderSuggestItems();
  }

  function currentSuggestValue() {
    if (!suggestState.items.length) return '';
    const active = suggestState.items[suggestState.activeIndex];
    return active ? active.value : '';
  }

  function focusEditor() {
    ta.focus({ preventScroll: true });
    setTimeout(() => ta.focus({ preventScroll: true }), 0);
  }

  function resolveValidSuggestion(raw) {
    const text = String(raw || '').trim();
    if (!text || !suggestState.allItems.length) return '';
    const exact = suggestState.allItems.find(item => item.value === text);
    if (exact) return exact.value;
    const exactCI = suggestState.allItems.find(item => item.value.toLowerCase() === text.toLowerCase());
    if (exactCI) return exactCI.value;
    const labelExact = suggestState.allItems.find(item => String(item.label || '') === text);
    if (labelExact) return labelExact.value;
    return '';
  }

  function getScrubTarget(elements) {
    return elements.find(el => (
      el.dataset
      && (typeof el.dataset.number !== 'undefined' || typeof el.dataset.velocity !== 'undefined')
    ));
  }

  function parseScrubRaw(raw) {
    const isFloat = String(raw).includes('.');
    const decimalPlaces = isFloat ? String(raw).split('.')[1].length : 0;
    return {
      value: parseFloat(raw),
      isFloat,
      decimalPlaces,
    };
  }

  function beginScrub(e, span) {
    const raw = typeof span.dataset.number !== 'undefined'
      ? span.dataset.number
      : span.dataset.velocity;
    const parsed = parseScrubRaw(raw);
    if (Number.isNaN(parsed.value)) return;

    const startOffset = charOffsetOfElement(pre, span, ta.value);
    if (startOffset < 0) return;

    scrubState = {
      startX: e.clientX,
      startValue: parsed.value,
      isFloat: parsed.isFloat,
      decimalPlaces: parsed.decimalPlaces,
      attr: typeof span.dataset.velocity !== 'undefined' ? 'velocity' : 'number',
      startOffset,
      currentLength: span.textContent.length,
      currentText: raw,
      moved: false,
    };
    wrap.classList.add('scrub-active');
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
    if (scrubState.attr === 'velocity') {
      nextValue = Math.max(1, Math.min(127, Math.round(nextValue)));
    }

    const nextText = scrubState.isFloat && scrubState.attr !== 'velocity'
      ? nextValue.toFixed(scrubState.decimalPlaces)
      : String(Math.round(nextValue));
    if (nextText === scrubState.currentText) return;

    const start = scrubState.startOffset;
    const end = start + scrubState.currentLength;
    ta.value = ta.value.slice(0, start) + nextText + ta.value.slice(end);
    scrubState.currentLength = nextText.length;
    scrubState.currentText = nextText;
    scrubState.moved = true;
    emitScrubToken(nextText);
    ta.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function endScrub() {
    if (!scrubState) return;
    scrubState = null;
    wrap.classList.remove('scrub-active');
    clearScrubCursor();
    document.removeEventListener('mousemove', applyScrub);
    document.removeEventListener('mouseup', endScrub);
  }

  function flashLines(startLine, endLine) {
    const start = Math.max(0, startLine);
    const end = Math.max(start, endLine);
    for (let line = start; line <= end; line += 1) {
      const lineEl = pre.querySelector(`[data-line="${line}"]`);
      if (!lineEl) continue;
      lineEl.classList.add('block-flash');
      const timer = setTimeout(() => {
        lineEl.classList.remove('block-flash');
        flashTimers.delete(timer);
      }, 800);
      flashTimers.add(timer);
    }
  }

  function getNoteLikeTokenSpans(lineEl) {
    return [...lineEl.querySelectorAll('span')]
      .filter(token => {
        const ds = token.dataset || {};
        return token.classList.contains('tok-note')
          || token.classList.contains('tok-chord')
          || token.classList.contains('tok-var-ref')
          || token.classList.contains('tok-mode')
          || token.classList.contains('tok-progression')
          || typeof ds.repeatLast !== 'undefined'
          || typeof ds.var !== 'undefined';
      });
  }

  function flashActiveTokens(lineNumbers, beatIndex, beatDurationMs = 0) {
    if (!Array.isArray(lineNumbers) || !lineNumbers.length) return;
    const tokenIndex = Number.isInteger(beatIndex) ? Math.max(0, beatIndex) : 0;
    const getPatternTiming = lineEl => {
      const rawSteps = [...lineEl.querySelectorAll('.tok-pattern-step')];
      const slots = [];
      for (let i = 0; i < rawSteps.length; i += 1) {
        const step = rawSteps[i];
        const ch = String(step.dataset.patternChar || '').toLowerCase();
        if (ch === '[') {
          const inner = [];
          let j = i + 1;
          while (j < rawSteps.length) {
            const innerStep = rawSteps[j];
            const innerChar = String(innerStep.dataset.patternChar || '').toLowerCase();
            if (innerChar === ']') break;
            if (innerChar === 'x' || innerChar === '-' || innerChar === '_') {
              inner.push(innerStep);
            }
            j += 1;
          }
          if (inner.length) {
            slots.push({
              steps: inner,
              pulses: inner.filter(s => String(s.dataset.patternChar || '').toLowerCase() === 'x'),
            });
          }
          i = j;
          continue;
        }
        if (ch === 'x' || ch === '-' || ch === '_') {
          slots.push({
            steps: [step],
            pulses: ch === 'x' ? [step] : [],
          });
        }
      }
      return slots;
    };
    const flashPatternPulses = (slot, durationMs) => {
      if (!slot || !slot.pulses || !slot.pulses.length) return;
      const pulses = slot.pulses;
      if (pulses.length === 1 || !durationMs || durationMs <= 0) {
        pulses.forEach(pulseEl => {
          pulseEl.classList.add('tok-active');
          activeTokens.push(pulseEl);
        });
        return;
      }
      const stepMs = durationMs / slot.steps.length;
      pulses.forEach(pulseEl => {
        const slotIndex = slot.steps.indexOf(pulseEl);
        const delay = Math.max(0, Math.floor(slotIndex * stepMs));
        const timer = setTimeout(() => {
          pulseEl.classList.add('tok-active');
          activeTokens.push(pulseEl);
          flashTimers.delete(timer);
        }, delay);
        flashTimers.add(timer);
      });
    };
    const patternByLine = new Map();
    lineNumbers.forEach(lineNumber => {
      const lineEl = pre.querySelector(`[data-line="${lineNumber}"]`);
      if (!lineEl) return;
      patternByLine.set(lineNumber, getPatternTiming(lineEl));
    });
    const referencePatternSteps = [...patternByLine.values()]
      .filter(slots => slots.length > 0)
      .sort((a, b) => {
        const pulses = slots => slots.reduce((sum, slot) => (
          sum + slot.pulses.length
        ), 0);
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
      const absolutePulseIndex = pulsesPerPattern > 0
        ? cycleIndex * pulsesPerPattern + Math.max(0, pulseCount - slot.pulses.length)
        : 0;
      return { slot, isPulse: slot.pulses.length > 0, absolutePulseIndex };
    }

    lineNumbers.forEach(lineNumber => {
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
      const token = noteTokens[((idx % noteTokens.length) + noteTokens.length) % noteTokens.length];
      if (!token) return;
      token.classList.add('tok-active');
      activeTokens.push(token);
    });
  }

  ta.addEventListener('scroll', () => {
    pre.scrollTop = ta.scrollTop;
    pre.scrollLeft = ta.scrollLeft;
    gutter.scrollTop = ta.scrollTop;
  });
  window.addEventListener('resize', syncGutterHeights);

  ta.addEventListener('input', () => {
    pushHistoryEntry();
    runInputEffects();
  });

  ta.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && !e.altKey) {
      const key = String(e.key || '').toLowerCase();
      const wantsUndo = key === 'z' && !e.shiftKey;
      const wantsRedo = (key === 'z' && e.shiftKey) || key === 'y';
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

    if (e.key === '[' && !e.metaKey && !e.ctrlKey && !e.altKey) {
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
      ta.dispatchEvent(new Event('input', { bubbles: true }));
      return;
    }

    if (!suggestState.open) return;
    if (document.activeElement !== suggestInput) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      moveSuggest(1);
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      moveSuggest(-1);
      return;
    }
    if (e.key === 'Tab' || e.key === 'Enter') {
      e.preventDefault();
      const typed = suggestInput.value && suggestInput.value.trim();
      const next = currentSuggestValue() || resolveValidSuggestion(typed);
      if (next) acceptSuggestion(next);
      return;
    }
    if (e.key === 'Escape') {
      suggestState.dismissedToken = suggestState.token || getPartialToken();
      hideSuggest();
      focusEditor();
    }
  });

  ta.addEventListener('mousemove', e => {
    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    const scrubTarget = getScrubTarget(elements);
    wrap.classList.toggle('scrub-hover', Boolean(scrubTarget) && !scrubState);
    if (scrubState) {
      hideTooltip();
      return;
    }
    const found = tooltipHandlers
      .map(handler => {
        const hit = elements.find(el => el.dataset && el.dataset[handler.attr]);
        return hit ? { handler, value: hit.dataset[handler.attr], element: hit } : null;
      })
      .find(Boolean);
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
        tipStaff.innerHTML = '';
        tipStaff.hidden = true;
      }
    } else if (found.handler.notes) {
      const noteArr = found.handler.notes(found.value);
      if (noteArr && noteArr.length) {
        tipStaff.innerHTML = buildStaffSVG(noteArr, found.handler.staffMode);
        tipStaff.hidden = false;
      } else {
        tipStaff.innerHTML = '';
        tipStaff.hidden = true;
      }
    } else {
      tipStaff.innerHTML = '';
      tipStaff.hidden = true;
    }
    placeTooltip(tip, e.clientX, e.clientY);
  });

  ta.addEventListener('mousedown', e => {
    if (e.button !== 0 || scrubState) return;
    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    const arrToken = elements.find(el => (
      el.classList
      && el.classList.contains('tok-arr-token')
    ));
    if (arrToken && options.onArrangementSectionClick) {
      e.preventDefault();
      const order = parseInt(arrToken.dataset.arrOrder, 10);
      options.onArrangementSectionClick(
        arrToken.dataset.section || null,
        Number.isFinite(order) ? order : null,
        {
          blockId: arrToken.dataset.arrBlockId || null,
          blockLive: arrToken.dataset.arrBlockLive === '1',
        },
      );
      ta.focus();
      return;
    }
    const target = getScrubTarget(elements);
    if (!target) return;
    beginScrub(e, target);
    document.addEventListener('mousemove', applyScrub);
    document.addEventListener('mouseup', endScrub);
  });

  suggestInput.addEventListener('input', () => {
    if (!suggestState.open) return;
    const value = suggestInput.value;
    const token = suggestState.token;
    if (!token) return;
    suggestState.token = { ...token, text: value || token.text };
    applySuggestFilter(value);
    resizeSuggestInput();
    if (!value) return;
    const idx = suggestState.items.findIndex(item => item.value.toLowerCase() === value.toLowerCase());
    if (idx >= 0) {
      suggestState.activeIndex = idx;
      renderSuggestItems();
      return;
    }
    const prefix = suggestState.items.findIndex(item => item.value.toLowerCase().startsWith(value.toLowerCase()));
    if (prefix >= 0) {
      suggestState.activeIndex = prefix;
      renderSuggestItems();
    }
  });

  suggestInput.addEventListener('change', () => {
    const value = resolveValidSuggestion(suggestInput.value);
    if (!value) return;
    acceptSuggestion(value);
    ta.focus();
  });

  suggestInput.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      moveSuggest(1);
      return;
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      moveSuggest(-1);
      return;
    }
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      const typed = suggestInput.value && suggestInput.value.trim();
      const value = currentSuggestValue() || resolveValidSuggestion(typed);
      if (!value) return;
      acceptSuggestion(value);
      ta.focus();
      return;
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      const hasQuery = Boolean((suggestInput.value || '').trim());
      if (!hasQuery) {
        suggestState.dismissedToken = suggestState.token || getPartialToken();
        hideSuggest();
        focusEditor();
        return;
      }
      suggestState.dismissedToken = null;
      suggestInput.value = '';
      applySuggestFilter('');
      resizeSuggestInput();
      setSuggestMenuOpen(true);
      suggestInput.focus({ preventScroll: true });
    }
  });

  suggestInput.addEventListener('focus', () => {
    if (!suggestState.open || !suggestState.items.length) return;
    setSuggestMenuOpen(true);
  });

  suggestInput.addEventListener('blur', () => {
    setTimeout(() => {
      const active = document.activeElement;
      setSuggestMenuOpen(false);
      if (active === ta) return;
      if (active === suggestInput) return;
      if (suggestMenu.contains(active)) return;
      hideSuggest();
    }, 80);
  });

  ta.addEventListener('mouseleave', () => {
    hideTooltip();
    clearScrubCursor();
  });
  gutter.addEventListener('mousemove', e => {
    const lineEl = e.target && e.target.closest
      ? e.target.closest('.editor-ln[data-lint-level][data-lint]')
      : null;
    if (!lineEl) {
      hideTooltip();
      return;
    }
    const line = parseInt(lineEl.dataset.line, 10);
    const level = lineEl.dataset.lintLevel === 'error' ? 'ERROR' : 'WARN';
    tipTitle.textContent = Number.isInteger(line) ? `Line ${line} · ${level}` : level;
    tipBody.textContent = String(lineEl.dataset.lint || '').replace(/\n+/g, '  |  ');
    tipStaff.innerHTML = '';
    tipStaff.hidden = true;
    placeTooltip(tip, e.clientX, e.clientY);
  });
  gutter.addEventListener('mouseleave', () => {
    hideTooltip();
  });

  ta.addEventListener('blur', () => {
    setTimeout(() => {
      const active = document.activeElement;
      if (active === suggestInput) return;
      if (suggestMenu.contains(active)) return;
      hideSuggest();
    }, 80);
  });

  suggestMenu.addEventListener('mousedown', e => {
    const item = e.target.closest('li[data-value]');
    if (!item) return;
    e.preventDefault();
    acceptSuggestion(item.dataset.value);
    ta.focus();
  });

  ta.addEventListener('click', () => {
    emitCursorToken();
    updateSuggestions();
  });
  ta.addEventListener('keyup', () => {
    emitCursorToken();
    updateSuggestions();
  });
  ta.addEventListener('focus', () => {
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
    setValue: value => {
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
    focus: () => ta.focus(),
  };
}
