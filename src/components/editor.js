import { classify, highlight } from '../highlight';

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
  const H = 90;
  let svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`;

  svg += '<style>.staff-line,.ledger{stroke:#fff;stroke-width:1}</style>';
  for (let i = 0; i < 5; i += 1) {
    const y = 20 + i * 10;
    svg += `<line class="staff-line" x1="0" y1="${y}" x2="${W}" y2="${y}"/>`;
  }
  svg += '<text x="8" y="50" fill="#fff" font-size="52" font-family="serif">𝄞</text>';

  const isScale = mode === 'scale';
  const noteCount = sorted.length;
  let noteX;
  if (isScale) {
    const step = noteCount > 1 ? 154 / (noteCount - 1) : 0;
    sorted.forEach((n, i) => {
      n.x = 36 + i * step;
    });
  } else {
    noteX = 90;
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
    const y = posToY(n.pos);
    const m = n.note.match(/^([a-gA-G])([#b]?)(\d+)$/);
    const accidental = m ? m[2] : '';
    for (let p = -2; p >= n.pos; p -= 2) {
      const ly = posToY(p);
      svg += `<line class="ledger" x1="${n.x - 9}" y1="${ly}" x2="${n.x + 9}" y2="${ly}"/>`;
    }
    for (let p = 10; p <= n.pos; p += 2) {
      const ly = posToY(p);
      svg += `<line class="ledger" x1="${n.x - 9}" y1="${ly}" x2="${n.x + 9}" y2="${ly}"/>`;
    }
    if (isScale) {
      svg += `<ellipse cx="${n.x}" cy="${y}" rx="5" ry="4" fill="none" stroke="#fff" stroke-width="1.2" transform="rotate(-15 ${n.x} ${y})"/>`;
    } else {
      svg += `<ellipse cx="${n.x}" cy="${y}" rx="5" ry="4" fill="#fff" transform="rotate(-15 ${n.x} ${y})"/>`;
    }
    if (accidental === '#') {
      svg += `<text x="${n.x - 14}" y="${y + 4}" fill="#fff" font-size="10">♯</text>`;
    } else if (accidental === 'b') {
      svg += `<text x="${n.x - 12}" y="${y + 4}" fill="#fff" font-size="11">♭</text>`;
    }
  });

  if (!isScale && sorted.length > 0) {
    const lowestPos = sorted[0].pos;
    const highestPos = sorted[sorted.length - 1].pos;
    let stemDir = lowestPos <= 3 ? 'up' : 'down';
    if (stemDir === 'up') {
      const highY = posToY(highestPos);
      const highX = sorted[sorted.length - 1].x;
      svg += `<line x1="${highX + 5}" y1="${highY}" x2="${highX + 5}" y2="${highY - 28}" stroke="#fff" stroke-width="1.2"/>`;
    } else {
      const lowY = posToY(lowestPos);
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
        ? 'is-hold'
        : ch === '_'
          ? 'is-rest'
          : 'is-sub';
    const group = i % 4 === 0 ? 'is-group' : '';
    return `<span class="pp-cell ${cls} ${group}" aria-label="step ${i + 1}"></span>`;
  }).join('');
  return `<div class="pattern-preview" aria-label="Pattern preview"><div class="pp-grid">${cells}</div></div>`;
}

function clampTooltip(x, y, width = 320) {
  const maxX = Math.max(8, window.innerWidth - width - 8);
  const left = Math.min(x + 12, maxX);
  const top = Math.min(y + 12, window.innerHeight - 170);
  return { left, top };
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
  const suggestList = document.createElement('ul');
  suggestList.id = 'suggest-list';
  suggestList.hidden = true;
  suggestList.setAttribute('role', 'listbox');
  suggestList.setAttribute('aria-label', 'Completions');
  const tipTitle = tip.querySelector('strong');
  const tipBody = tip.querySelector('.tooltip-resolved');
  const tipStaff = tip.querySelector('.tooltip-staff');
  const flashTimers = new Set();
  let scrubState = null;
  let activeTokens = [];
  let suggestState = {
    open: false,
    items: [],
    activeIndex: 0,
    token: null,
  };
  const SUGGESTIONS_ENABLED = options.suggestions !== false;
  const MODE_CANDIDATES = ['major', 'minor', 'dorian', 'phrygian', 'lydian', 'mixolydian', 'locrian'];
  const NOTE_CANDIDATES = 'ABCDEFG'.split('').flatMap(note => (
    ['', '#', 'b'].flatMap(accidental => (
      [3, 4, 5].map(octave => `${note}${accidental}${octave}`)
    ))
  ));
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
      attr: 'pattern',
      resolve: () => 'x = hit  |  - = hold  |  _ = rest  |  [ ] = subdivide',
      title: () => 'Rhythm pattern',
      visual: value => buildPatternPreviewMarkup(value),
    },
  ].filter(Boolean);

  function sync() {
    pre.innerHTML = highlight(ta.value);
    const lineCount = String(ta.value).split(/\r?\n/).length;
    gutter.innerHTML = Array.from({ length: lineCount }, (_, index) => (
      `<span class="editor-ln">${index + 1}</span>`
    )).join('');
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
    pre.querySelectorAll('.tok-section.is-active-section')
      .forEach(el => el.classList.remove('is-active-section'));
    if (typeof order !== 'number' || order < 0) return;
    const tokens = pre.querySelectorAll('.tok-section');
    const target = tokens[order];
    if (target) target.classList.add('is-active-section');
  }

  function getPartialToken() {
    const pos = ta.selectionStart;
    const before = ta.value.slice(0, pos);
    const match = before.match(/(\S+)$/);
    if (!match) return null;
    return {
      text: match[1],
      start: pos - match[1].length,
      end: pos,
    };
  }

  function getSuggestions(partial) {
    if (!partial || !partial.text || partial.text.length < 1) return [];
    if (classify(partial.text)) return [];
    const low = partial.text.toLowerCase();
    return ALL_CANDIDATES
      .filter(candidate => candidate.toLowerCase().startsWith(low))
      .slice(0, 8);
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

  function hideSuggest() {
    suggestState.open = false;
    suggestState.items = [];
    suggestState.activeIndex = 0;
    suggestState.token = null;
    suggestList.hidden = true;
    suggestList.innerHTML = '';
  }

  function renderSuggestItems() {
    suggestList.innerHTML = suggestState.items
      .map((item, index) => (
        `<li role="option" data-value="${item}" data-active="${index === suggestState.activeIndex ? '1' : '0'}">${item}</li>`
      ))
      .join('');
  }

  function showSuggest(items, token) {
    if (!items.length) {
      hideSuggest();
      return;
    }
    const coords = getCaretCoords();
    const lineHeight = parseFloat(window.getComputedStyle(ta).lineHeight) || 20;
    suggestState.open = true;
    suggestState.items = items;
    suggestState.activeIndex = 0;
    suggestState.token = token;
    renderSuggestItems();
    suggestList.style.left = `${Math.max(0, coords.left)}px`;
    suggestList.style.top = `${Math.max(0, coords.top + lineHeight)}px`;
    suggestList.hidden = false;
  }

  function updateSuggestions() {
    if (!SUGGESTIONS_ENABLED) return;
    const partial = getPartialToken();
    if (!partial) {
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

  function moveSuggest(delta) {
    if (!suggestState.open || !suggestState.items.length) return;
    const size = suggestState.items.length;
    suggestState.activeIndex = (suggestState.activeIndex + delta + size) % size;
    renderSuggestItems();
  }

  function acceptSuggestion(value) {
    if (!suggestState.token) return;
    const { start, end } = suggestState.token;
    ta.value = `${ta.value.slice(0, start)}${value}${ta.value.slice(end)}`;
    const nextPos = start + value.length;
    ta.selectionStart = nextPos;
    ta.selectionEnd = nextPos;
    ta.dispatchEvent(new Event('input', { bubbles: true }));
    hideSuggest();
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
    };
    wrap.classList.add('scrub-active');
    hideTooltip();
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
    ta.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function endScrub() {
    if (!scrubState) return;
    scrubState = null;
    wrap.classList.remove('scrub-active');
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

  function flashActiveTokens(lineNumbers, beatIndex) {
    if (!Array.isArray(lineNumbers) || !lineNumbers.length) return;
    const tokenIndex = Number.isInteger(beatIndex) ? Math.max(0, beatIndex) : 0;
    const patternByLine = new Map();
    lineNumbers.forEach(lineNumber => {
      const lineEl = pre.querySelector(`[data-line="${lineNumber}"]`);
      if (!lineEl) return;
      patternByLine.set(lineNumber, [...lineEl.querySelectorAll('.tok-pattern-step')]);
    });
    const referencePatternSteps = [...patternByLine.values()]
      .filter(steps => steps.length > 0)
      .sort((a, b) => {
        const pulses = steps => steps.reduce((sum, s) => (
          (s.dataset.patternChar || '').toLowerCase() === 'x' ? sum + 1 : sum
        ), 0);
        return pulses(b) - pulses(a);
      })[0] || [];

    function pulseInfo(steps) {
      if (!steps.length) return null;
      const stepIndex = tokenIndex % steps.length;
      const step = steps[stepIndex];
      const ch = (step && step.dataset ? step.dataset.patternChar : '').toLowerCase();
      let pulseCount = 0;
      for (let i = 0; i <= stepIndex; i += 1) {
        const ci = (steps[i].dataset.patternChar || '').toLowerCase();
        if (ci === 'x') pulseCount += 1;
      }
      const pulsesPerPattern = steps.reduce((sum, s) => (
        (s.dataset.patternChar || '').toLowerCase() === 'x' ? sum + 1 : sum
      ), 0);
      const cycleIndex = Math.floor(tokenIndex / steps.length);
      const absolutePulseIndex = pulsesPerPattern > 0
        ? cycleIndex * pulsesPerPattern + pulseCount - 1
        : pulseCount - 1;
      return { step, isPulse: ch === 'x', absolutePulseIndex };
    }

    lineNumbers.forEach(lineNumber => {
      const lineEl = pre.querySelector(`[data-line="${lineNumber}"]`);
      if (!lineEl) return;
      const ownPatternSteps = patternByLine.get(lineNumber) || [];
      const info = pulseInfo(ownPatternSteps.length ? ownPatternSteps : referencePatternSteps);
      if (ownPatternSteps.length && info && info.step && info.isPulse) {
        info.step.classList.add('tok-active');
        activeTokens.push(info.step);
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

  ta.addEventListener('input', () => {
    sync();
    hideTooltip();
    updateSuggestions();
    if (options.onInput) options.onInput(ta.value);
  });

  ta.addEventListener('keydown', e => {
    if (!suggestState.open) return;
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
      const next = suggestState.items[suggestState.activeIndex];
      if (next) acceptSuggestion(next);
      return;
    }
    if (e.key === 'Escape') {
      hideSuggest();
    }
  });

  ta.addEventListener('mousemove', e => {
    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    const scrubTarget = getScrubTarget(elements);
    wrap.classList.toggle('scrub-hover', Boolean(scrubTarget) && !scrubState);
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
    const pos = clampTooltip(e.clientX, e.clientY);
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
    tip.style.left = `${pos.left}px`;
    tip.style.top = `${pos.top}px`;
    tip.hidden = false;
  });

  ta.addEventListener('mousedown', e => {
    if (e.button !== 0 || scrubState) return;
    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    const target = getScrubTarget(elements);
    if (!target) return;
    beginScrub(e, target);
    document.addEventListener('mousemove', applyScrub);
    document.addEventListener('mouseup', endScrub);
  });

  suggestList.addEventListener('mousedown', e => {
    const item = e.target.closest('li[data-value]');
    if (!item) return;
    e.preventDefault();
    acceptSuggestion(item.dataset.value);
    ta.focus();
  });

  ta.addEventListener('mouseleave', () => {
    hideTooltip();
    clearScrubCursor();
  });

  ta.addEventListener('blur', () => {
    setTimeout(() => hideSuggest(), 80);
  });

  sync();
  wrap.appendChild(gutter);
  wrap.appendChild(pre);
  wrap.appendChild(ta);
  wrap.appendChild(tip);
  wrap.appendChild(suggestList);

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
    setValue: value => {
      ta.value = value;
      sync();
      hideTooltip();
      hideSuggest();
      clearActiveTokenHighlight();
    },
    focus: () => ta.focus(),
  };
}
