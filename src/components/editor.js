import { highlight } from '../highlight';

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

function clampTooltip(x, y, width = 320) {
  const maxX = Math.max(8, window.innerWidth - width - 8);
  const left = Math.min(x + 12, maxX);
  const top = Math.min(y + 12, window.innerHeight - 170);
  return { left, top };
}

export function createEditor(initialText, options = {}) {
  const wrap = document.createElement('div');
  wrap.id = 'editor-wrap';

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
  const tipTitle = tip.querySelector('strong');
  const tipBody = tip.querySelector('.tooltip-resolved');
  const tipStaff = tip.querySelector('.tooltip-staff');

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
    options.resolveVar && {
      attr: 'var',
      resolve: options.resolveVar,
      title: value => value,
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
    },
  ].filter(Boolean);

  function sync() {
    pre.innerHTML = `${highlight(ta.value)}\n`;
  }

  function hideTooltip() {
    tip.hidden = true;
    tipStaff.innerHTML = '';
    tipStaff.hidden = true;
  }

  ta.addEventListener('scroll', () => {
    pre.scrollTop = ta.scrollTop;
    pre.scrollLeft = ta.scrollLeft;
  });

  ta.addEventListener('input', () => {
    sync();
    hideTooltip();
    if (options.onInput) options.onInput(ta.value);
  });

  ta.addEventListener('mousemove', e => {
    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    const found = tooltipHandlers
      .map(handler => {
        const hit = elements.find(el => el.dataset && el.dataset[handler.attr]);
        return hit ? { handler, value: hit.dataset[handler.attr] } : null;
      })
      .find(Boolean);
    if (!found) {
      hideTooltip();
      return;
    }
    const text = found.handler.resolve(found.value);
    if (!text) {
      hideTooltip();
      return;
    }
    const pos = clampTooltip(e.clientX, e.clientY);
    tipTitle.textContent = found.handler.title(found.value);
    tipBody.textContent = text;
    if (found.handler.notes) {
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

  ta.addEventListener('mouseleave', hideTooltip);

  sync();
  wrap.appendChild(pre);
  wrap.appendChild(ta);
  wrap.appendChild(tip);

  return {
    el: wrap,
    textarea: ta,
    on: (event, fn) => ta.addEventListener(event, fn),
    getValue: () => ta.value,
    setValue: value => {
      ta.value = value;
      sync();
      hideTooltip();
    },
    focus: () => ta.focus(),
  };
}
