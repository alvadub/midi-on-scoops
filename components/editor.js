const { highlight } = require("../highlight");
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
function buildStaffSVG(notes, mode = "chord") {
  if (!notes || notes.length === 0) return "";
  const sorted = notes.map((n) => ({ note: n, pos: noteToPos(n) })).filter((n) => n.pos !== null).sort((a, b) => a.pos - b.pos);
  if (sorted.length === 0) return "";
  const W = 200;
  const H = 90;
  let svg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`;
  svg += "<style>.staff-line,.ledger{stroke:#fff;stroke-width:1}</style>";
  for (let i = 0; i < 5; i += 1) {
    const y = 20 + i * 10;
    svg += `<line class="staff-line" x1="0" y1="${y}" x2="${W}" y2="${y}"/>`;
  }
  svg += '<text x="8" y="50" fill="#fff" font-size="52" font-family="serif">\u{1D11E}</text>';
  const isScale = mode === "scale";
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
  sorted.forEach((n) => {
    const y = posToY(n.pos);
    const m = n.note.match(/^([a-gA-G])([#b]?)(\d+)$/);
    const accidental = m ? m[2] : "";
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
    if (accidental === "#") {
      svg += `<text x="${n.x - 14}" y="${y + 4}" fill="#fff" font-size="10">\u266F</text>`;
    } else if (accidental === "b") {
      svg += `<text x="${n.x - 12}" y="${y + 4}" fill="#fff" font-size="11">\u266D</text>`;
    }
  });
  if (!isScale && sorted.length > 0) {
    const lowestPos = sorted[0].pos;
    const highestPos = sorted[sorted.length - 1].pos;
    let stemDir = lowestPos <= 3 ? "up" : "down";
    if (stemDir === "up") {
      const highY = posToY(highestPos);
      const highX = sorted[sorted.length - 1].x;
      svg += `<line x1="${highX + 5}" y1="${highY}" x2="${highX + 5}" y2="${highY - 28}" stroke="#fff" stroke-width="1.2"/>`;
    } else {
      const lowY = posToY(lowestPos);
      const lowX = sorted[0].x;
      svg += `<line x1="${lowX - 5}" y1="${lowY}" x2="${lowX - 5}" y2="${lowY + 28}" stroke="#fff" stroke-width="1.2"/>`;
    }
  }
  svg += "</svg>";
  return svg;
}
function clampTooltip(x, y, width = 320) {
  const maxX = Math.max(8, window.innerWidth - width - 8);
  const left = Math.min(x + 12, maxX);
  const top = Math.min(y + 12, window.innerHeight - 170);
  return { left, top };
}
function charOffsetOfElement(root, target) {
  if (!root || !target || !root.contains(target)) return -1;
  const lineEl = target.closest("[data-line]");
  const lineNumber = lineEl ? parseInt(lineEl.dataset.line, 10) : 0;
  if (!lineEl || Number.isNaN(lineNumber)) return -1;
  const lineRange = document.createRange();
  lineRange.selectNodeContents(lineEl);
  lineRange.setEndBefore(target);
  const offsetInLine = lineRange.toString().length;
  const allLines = root.querySelectorAll("[data-line]");
  let total = offsetInLine;
  for (let i = 0; i < lineNumber; i++) {
    total += (allLines[i] ? allLines[i].textContent.length : 0) + 1;
  }
  return total;
}
function createEditor(initialText, options = {}) {
  const wrap = document.createElement("div");
  wrap.id = "editor-wrap";
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
  const tipTitle = tip.querySelector("strong");
  const tipBody = tip.querySelector(".tooltip-resolved");
  const tipStaff = tip.querySelector(".tooltip-staff");
  const flashTimers = /* @__PURE__ */ new Set();
  let scrubState = null;
  let activeTokens = [];
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
      attr: "pattern",
      resolve: () => "x = hit  |  - = hold  |  _ = rest  |  [ ] = subdivide",
      title: () => "Rhythm pattern"
    }
  ].filter(Boolean);
  function sync() {
    pre.innerHTML = `${highlight(ta.value)}
`;
  }
  function hideTooltip() {
    tip.hidden = true;
    tipStaff.innerHTML = "";
    tipStaff.hidden = true;
  }
  function clearScrubCursor() {
    wrap.classList.remove("scrub-hover");
  }
  function clearActiveTokenHighlight() {
    activeTokens.forEach((token) => token.classList.remove("tok-active"));
    activeTokens = [];
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
  function beginScrub(e, span) {
    const raw = typeof span.dataset.number !== "undefined" ? span.dataset.number : span.dataset.velocity;
    const parsed = parseScrubRaw(raw);
    if (Number.isNaN(parsed.value)) return;
    const startOffset = charOffsetOfElement(pre, span);
    if (startOffset < 0) return;
    scrubState = {
      startX: e.clientX,
      startValue: parsed.value,
      isFloat: parsed.isFloat,
      decimalPlaces: parsed.decimalPlaces,
      attr: typeof span.dataset.velocity !== "undefined" ? "velocity" : "number",
      startOffset,
      currentLength: span.textContent.length,
      currentText: raw
    };
    wrap.classList.add("scrub-active");
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
    ta.dispatchEvent(new Event("input", { bubbles: true }));
  }
  function endScrub() {
    if (!scrubState) return;
    scrubState = null;
    wrap.classList.remove("scrub-active");
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
  function getPlayableTokenSpans(lineEl) {
    return [...lineEl.querySelectorAll("span")].filter((token) => token.classList.contains("tok-pattern") || token.classList.contains("tok-note") || token.classList.contains("tok-chord") || token.classList.contains("tok-var-ref") || token.classList.contains("tok-mode") || token.classList.contains("tok-progression"));
  }
  function flashActiveTokens(lineNumbers, beatIndex) {
    clearActiveTokenHighlight();
    lineNumbers.forEach((lineNumber) => {
      const lineEl = pre.querySelector(`[data-line="${lineNumber}"]`);
      if (!lineEl) return;
      const tokenSpans = getPlayableTokenSpans(lineEl);
      if (!tokenSpans.length) return;
      const target = tokenSpans[Math.abs(beatIndex) % tokenSpans.length];
      target.classList.add("tok-active");
      activeTokens.push(target);
    });
  }
  ta.addEventListener("scroll", () => {
    pre.scrollTop = ta.scrollTop;
    pre.scrollLeft = ta.scrollLeft;
  });
  ta.addEventListener("input", () => {
    sync();
    hideTooltip();
    if (options.onInput) options.onInput(ta.value);
  });
  ta.addEventListener("mousemove", (e) => {
    if (scrubState) return;
    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    const scrubTarget = getScrubTarget(elements);
    wrap.classList.toggle("scrub-hover", Boolean(scrubTarget));
    const found = tooltipHandlers.map((handler) => {
      const hit = elements.find((el) => el.dataset && el.dataset[handler.attr]);
      return hit ? { handler, value: hit.dataset[handler.attr] } : null;
    }).find(Boolean);
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
        tipStaff.innerHTML = "";
        tipStaff.hidden = true;
      }
    } else {
      tipStaff.innerHTML = "";
      tipStaff.hidden = true;
    }
    tip.style.left = `${pos.left}px`;
    tip.style.top = `${pos.top}px`;
    tip.hidden = false;
  });
  ta.addEventListener("mousedown", (e) => {
    if (e.button !== 0 || scrubState) return;
    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    const target = getScrubTarget(elements);
    if (!target) return;
    beginScrub(e, target);
    document.addEventListener("mousemove", applyScrub);
    document.addEventListener("mouseup", endScrub);
  });
  ta.addEventListener("mouseleave", () => {
    hideTooltip();
    clearScrubCursor();
  });
  sync();
  wrap.appendChild(pre);
  wrap.appendChild(ta);
  wrap.appendChild(tip);
  return {
    el: wrap,
    textarea: ta,
    on: (event, fn) => ta.addEventListener(event, fn),
    getValue: () => ta.value,
    getCursorPosition: () => ta.selectionStart,
    flashLines,
    flashActiveTokens,
    clearActiveTokenHighlight,
    setValue: (value) => {
      ta.value = value;
      sync();
      hideTooltip();
      clearActiveTokenHighlight();
    },
    focus: () => ta.focus()
  };
}
Object.assign(module.exports,{createEditor});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvZWRpdG9yLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBoaWdobGlnaHQgfSBmcm9tICcuLi9oaWdobGlnaHQnO1xuXG5jb25zdCBESUFUT05JQyA9IHsgYzogMCwgZDogMSwgZTogMiwgZjogMywgZzogNCwgYTogNSwgYjogNiB9O1xuY29uc3QgRTRfRElBVE9OSUMgPSA0ICogNyArIDI7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5vdGUocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIG5vdGVUb1Bvcyhub3RlU3RyKSB7XG4gIGNvbnN0IG0gPSBub3RlU3RyLm1hdGNoKC9eKFthLWdBLUddKShbI2JdPykoXFxkKykkLyk7XG4gIGlmICghbSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGRpYXRQb3MgPSBwYXJzZUludChtWzNdLCAxMCkgKiA3ICsgRElBVE9OSUNbbVsxXS50b0xvd2VyQ2FzZSgpXTtcbiAgcmV0dXJuIGRpYXRQb3MgLSBFNF9ESUFUT05JQztcbn1cblxuZnVuY3Rpb24gcG9zVG9ZKHBvcykge1xuICByZXR1cm4gNjAgLSBwb3MgKiA1O1xufVxuXG5mdW5jdGlvbiBidWlsZFN0YWZmU1ZHKG5vdGVzLCBtb2RlID0gJ2Nob3JkJykge1xuICBpZiAoIW5vdGVzIHx8IG5vdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuICBjb25zdCBzb3J0ZWQgPSBub3Rlc1xuICAgIC5tYXAobiA9PiAoeyBub3RlOiBuLCBwb3M6IG5vdGVUb1BvcyhuKSB9KSlcbiAgICAuZmlsdGVyKG4gPT4gbi5wb3MgIT09IG51bGwpXG4gICAgLnNvcnQoKGEsIGIpID0+IGEucG9zIC0gYi5wb3MpO1xuICBpZiAoc29ydGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuXG4gIGNvbnN0IFcgPSAyMDA7XG4gIGNvbnN0IEggPSA5MDtcbiAgbGV0IHN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHtXfVwiIGhlaWdodD1cIiR7SH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+YDtcblxuICBzdmcgKz0gJzxzdHlsZT4uc3RhZmYtbGluZSwubGVkZ2Vye3N0cm9rZTojZmZmO3N0cm9rZS13aWR0aDoxfTwvc3R5bGU+JztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCB5ID0gMjAgKyBpICogMTA7XG4gICAgc3ZnICs9IGA8bGluZSBjbGFzcz1cInN0YWZmLWxpbmVcIiB4MT1cIjBcIiB5MT1cIiR7eX1cIiB4Mj1cIiR7V31cIiB5Mj1cIiR7eX1cIi8+YDtcbiAgfVxuICBzdmcgKz0gJzx0ZXh0IHg9XCI4XCIgeT1cIjUwXCIgZmlsbD1cIiNmZmZcIiBmb250LXNpemU9XCI1MlwiIGZvbnQtZmFtaWx5PVwic2VyaWZcIj5cdUQ4MzRcdUREMUU8L3RleHQ+JztcblxuICBjb25zdCBpc1NjYWxlID0gbW9kZSA9PT0gJ3NjYWxlJztcbiAgY29uc3Qgbm90ZUNvdW50ID0gc29ydGVkLmxlbmd0aDtcbiAgbGV0IG5vdGVYO1xuICBpZiAoaXNTY2FsZSkge1xuICAgIGNvbnN0IHN0ZXAgPSBub3RlQ291bnQgPiAxID8gMTU0IC8gKG5vdGVDb3VudCAtIDEpIDogMDtcbiAgICBzb3J0ZWQuZm9yRWFjaCgobiwgaSkgPT4ge1xuICAgICAgbi54ID0gMzYgKyBpICogc3RlcDtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBub3RlWCA9IDkwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjdXJyID0gc29ydGVkW2ldO1xuICAgICAgY29uc3QgcHJldiA9IGkgPiAwID8gc29ydGVkW2kgLSAxXSA6IG51bGw7XG4gICAgICBjdXJyLnggPSBub3RlWDtcbiAgICAgIGlmIChwcmV2ICYmIE1hdGguYWJzKGN1cnIucG9zIC0gcHJldi5wb3MpID09PSAxKSB7XG4gICAgICAgIGN1cnIueCA9IHByZXYueCArIDExO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNvcnRlZC5mb3JFYWNoKG4gPT4ge1xuICAgIGNvbnN0IHkgPSBwb3NUb1kobi5wb3MpO1xuICAgIGNvbnN0IG0gPSBuLm5vdGUubWF0Y2goL14oW2EtZ0EtR10pKFsjYl0/KShcXGQrKSQvKTtcbiAgICBjb25zdCBhY2NpZGVudGFsID0gbSA/IG1bMl0gOiAnJztcbiAgICBmb3IgKGxldCBwID0gLTI7IHAgPj0gbi5wb3M7IHAgLT0gMikge1xuICAgICAgY29uc3QgbHkgPSBwb3NUb1kocCk7XG4gICAgICBzdmcgKz0gYDxsaW5lIGNsYXNzPVwibGVkZ2VyXCIgeDE9XCIke24ueCAtIDl9XCIgeTE9XCIke2x5fVwiIHgyPVwiJHtuLnggKyA5fVwiIHkyPVwiJHtseX1cIi8+YDtcbiAgICB9XG4gICAgZm9yIChsZXQgcCA9IDEwOyBwIDw9IG4ucG9zOyBwICs9IDIpIHtcbiAgICAgIGNvbnN0IGx5ID0gcG9zVG9ZKHApO1xuICAgICAgc3ZnICs9IGA8bGluZSBjbGFzcz1cImxlZGdlclwiIHgxPVwiJHtuLnggLSA5fVwiIHkxPVwiJHtseX1cIiB4Mj1cIiR7bi54ICsgOX1cIiB5Mj1cIiR7bHl9XCIvPmA7XG4gICAgfVxuICAgIGlmIChpc1NjYWxlKSB7XG4gICAgICBzdmcgKz0gYDxlbGxpcHNlIGN4PVwiJHtuLnh9XCIgY3k9XCIke3l9XCIgcng9XCI1XCIgcnk9XCI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMS4yXCIgdHJhbnNmb3JtPVwicm90YXRlKC0xNSAke24ueH0gJHt5fSlcIi8+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnICs9IGA8ZWxsaXBzZSBjeD1cIiR7bi54fVwiIGN5PVwiJHt5fVwiIHJ4PVwiNVwiIHJ5PVwiNFwiIGZpbGw9XCIjZmZmXCIgdHJhbnNmb3JtPVwicm90YXRlKC0xNSAke24ueH0gJHt5fSlcIi8+YDtcbiAgICB9XG4gICAgaWYgKGFjY2lkZW50YWwgPT09ICcjJykge1xuICAgICAgc3ZnICs9IGA8dGV4dCB4PVwiJHtuLnggLSAxNH1cIiB5PVwiJHt5ICsgNH1cIiBmaWxsPVwiI2ZmZlwiIGZvbnQtc2l6ZT1cIjEwXCI+XHUyNjZGPC90ZXh0PmA7XG4gICAgfSBlbHNlIGlmIChhY2NpZGVudGFsID09PSAnYicpIHtcbiAgICAgIHN2ZyArPSBgPHRleHQgeD1cIiR7bi54IC0gMTJ9XCIgeT1cIiR7eSArIDR9XCIgZmlsbD1cIiNmZmZcIiBmb250LXNpemU9XCIxMVwiPlx1MjY2RDwvdGV4dD5gO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCFpc1NjYWxlICYmIHNvcnRlZC5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgbG93ZXN0UG9zID0gc29ydGVkWzBdLnBvcztcbiAgICBjb25zdCBoaWdoZXN0UG9zID0gc29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXS5wb3M7XG4gICAgbGV0IHN0ZW1EaXIgPSBsb3dlc3RQb3MgPD0gMyA/ICd1cCcgOiAnZG93bic7XG4gICAgaWYgKHN0ZW1EaXIgPT09ICd1cCcpIHtcbiAgICAgIGNvbnN0IGhpZ2hZID0gcG9zVG9ZKGhpZ2hlc3RQb3MpO1xuICAgICAgY29uc3QgaGlnaFggPSBzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdLng7XG4gICAgICBzdmcgKz0gYDxsaW5lIHgxPVwiJHtoaWdoWCArIDV9XCIgeTE9XCIke2hpZ2hZfVwiIHgyPVwiJHtoaWdoWCArIDV9XCIgeTI9XCIke2hpZ2hZIC0gMjh9XCIgc3Ryb2tlPVwiI2ZmZlwiIHN0cm9rZS13aWR0aD1cIjEuMlwiLz5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsb3dZID0gcG9zVG9ZKGxvd2VzdFBvcyk7XG4gICAgICBjb25zdCBsb3dYID0gc29ydGVkWzBdLng7XG4gICAgICBzdmcgKz0gYDxsaW5lIHgxPVwiJHtsb3dYIC0gNX1cIiB5MT1cIiR7bG93WX1cIiB4Mj1cIiR7bG93WCAtIDV9XCIgeTI9XCIke2xvd1kgKyAyOH1cIiBzdHJva2U9XCIjZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMS4yXCIvPmA7XG4gICAgfVxuICB9XG5cbiAgc3ZnICs9ICc8L3N2Zz4nO1xuICByZXR1cm4gc3ZnO1xufVxuXG5mdW5jdGlvbiBjbGFtcFRvb2x0aXAoeCwgeSwgd2lkdGggPSAzMjApIHtcbiAgY29uc3QgbWF4WCA9IE1hdGgubWF4KDgsIHdpbmRvdy5pbm5lcldpZHRoIC0gd2lkdGggLSA4KTtcbiAgY29uc3QgbGVmdCA9IE1hdGgubWluKHggKyAxMiwgbWF4WCk7XG4gIGNvbnN0IHRvcCA9IE1hdGgubWluKHkgKyAxMiwgd2luZG93LmlubmVySGVpZ2h0IC0gMTcwKTtcbiAgcmV0dXJuIHsgbGVmdCwgdG9wIH07XG59XG5cbmZ1bmN0aW9uIGNoYXJPZmZzZXRPZkVsZW1lbnQocm9vdCwgdGFyZ2V0KSB7XG4gIGlmICghcm9vdCB8fCAhdGFyZ2V0IHx8ICFyb290LmNvbnRhaW5zKHRhcmdldCkpIHJldHVybiAtMTtcbiAgY29uc3QgbGluZUVsID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWxpbmVdJyk7XG4gIGNvbnN0IGxpbmVOdW1iZXIgPSBsaW5lRWwgPyBwYXJzZUludChsaW5lRWwuZGF0YXNldC5saW5lLCAxMCkgOiAwO1xuICBpZiAoIWxpbmVFbCB8fCBOdW1iZXIuaXNOYU4obGluZU51bWJlcikpIHJldHVybiAtMTtcblxuICAvLyBNZWFzdXJlIG9mZnNldCB3aXRoaW4gdGhpcyBsaW5lIG9ubHkgKGF2b2lkcyBjcm9zcy1ibG9jayByYW5nZS50b1N0cmluZygpIHF1aXJrc1xuICAvLyB3aGVyZSBlbXB0eSBkaXNwbGF5OmJsb2NrIHNwYW5zIGNvbnRyaWJ1dGUgXFxuIGNoYXJhY3RlcnMgdG8gdGhlIHJlc3VsdClcbiAgY29uc3QgbGluZVJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgbGluZVJhbmdlLnNlbGVjdE5vZGVDb250ZW50cyhsaW5lRWwpO1xuICBsaW5lUmFuZ2Uuc2V0RW5kQmVmb3JlKHRhcmdldCk7XG4gIGNvbnN0IG9mZnNldEluTGluZSA9IGxpbmVSYW5nZS50b1N0cmluZygpLmxlbmd0aDtcblxuICAvLyBTdW0gY2hhcmFjdGVyIGxlbmd0aHMgb2YgYWxsIHByZWNlZGluZyBsaW5lcyArIDEgbmV3bGluZSBlYWNoXG4gIGNvbnN0IGFsbExpbmVzID0gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1saW5lXScpO1xuICBsZXQgdG90YWwgPSBvZmZzZXRJbkxpbmU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZU51bWJlcjsgaSsrKSB7XG4gICAgdG90YWwgKz0gKGFsbExpbmVzW2ldID8gYWxsTGluZXNbaV0udGV4dENvbnRlbnQubGVuZ3RoIDogMCkgKyAxO1xuICB9XG4gIHJldHVybiB0b3RhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVkaXRvcihpbml0aWFsVGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd3JhcC5pZCA9ICdlZGl0b3Itd3JhcCc7XG5cbiAgY29uc3QgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gIHByZS5pZCA9ICdlZGl0b3ItaGwnO1xuICBwcmUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgY29uc3QgdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0YS5pZCA9ICdlZGl0b3InO1xuICB0YS5zcGVsbGNoZWNrID0gZmFsc2U7XG4gIHRhLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICB0YS52YWx1ZSA9IGluaXRpYWxUZXh0O1xuXG4gIGNvbnN0IHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXAuaWQgPSAndmFyLXRvb2x0aXAnO1xuICB0aXAuaGlkZGVuID0gdHJ1ZTtcbiAgdGlwLmlubmVySFRNTCA9ICc8c3Ryb25nPjwvc3Ryb25nPjxzcGFuIGNsYXNzPVwidG9vbHRpcC1yZXNvbHZlZFwiPjwvc3Bhbj48ZGl2IGNsYXNzPVwidG9vbHRpcC1zdGFmZlwiPjwvZGl2Pic7XG4gIGNvbnN0IHRpcFRpdGxlID0gdGlwLnF1ZXJ5U2VsZWN0b3IoJ3N0cm9uZycpO1xuICBjb25zdCB0aXBCb2R5ID0gdGlwLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLXJlc29sdmVkJyk7XG4gIGNvbnN0IHRpcFN0YWZmID0gdGlwLnF1ZXJ5U2VsZWN0b3IoJy50b29sdGlwLXN0YWZmJyk7XG4gIGNvbnN0IGZsYXNoVGltZXJzID0gbmV3IFNldCgpO1xuICBsZXQgc2NydWJTdGF0ZSA9IG51bGw7XG4gIGxldCBhY3RpdmVUb2tlbnMgPSBbXTtcblxuICBjb25zdCB0b29sdGlwSGFuZGxlcnMgPSBbXG4gICAgb3B0aW9ucy5yZXNvbHZlTm90ZSAmJiB7XG4gICAgICBhdHRyOiAnbm90ZScsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVOb3RlLFxuICAgICAgbm90ZXM6IHZhbHVlID0+IFt2YWx1ZV0sXG4gICAgICBzdGFmZk1vZGU6ICdzaW5nbGUnLFxuICAgICAgdGl0bGU6IHZhbHVlID0+IG5vcm1hbGl6ZU5vdGUodmFsdWUpLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlQ2hvcmQgJiYge1xuICAgICAgYXR0cjogJ2Nob3JkJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZUNob3JkLFxuICAgICAgbm90ZXM6IHZhbHVlID0+IHZhbHVlLnNwbGl0KCd8JykubWFwKG5vcm1hbGl6ZU5vdGUpLFxuICAgICAgc3RhZmZNb2RlOiAnY2hvcmQnLFxuICAgICAgdGl0bGU6ICgpID0+ICdDaG9yZCcsXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVNb2RlICYmIHtcbiAgICAgIGF0dHI6ICdtb2RlJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZU1vZGUsXG4gICAgICBub3Rlczogb3B0aW9ucy5yZXNvbHZlTW9kZU5vdGVzLFxuICAgICAgc3RhZmZNb2RlOiAnc2NhbGUnLFxuICAgICAgdGl0bGU6IHZhbHVlID0+IHZhbHVlLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlSW5zdHJ1bWVudCAmJiB7XG4gICAgICBhdHRyOiAnaW5zdHJ1bWVudCcsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVJbnN0cnVtZW50LFxuICAgICAgdGl0bGU6IHZhbHVlID0+IGAjJHt2YWx1ZX1gLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlU2VjdGlvbiAmJiB7XG4gICAgICBhdHRyOiAnc2VjdGlvbicsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVTZWN0aW9uLFxuICAgICAgdGl0bGU6IHZhbHVlID0+IGBAJHt2YWx1ZX1gLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlVmFyICYmIHtcbiAgICAgIGF0dHI6ICd2YXInLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlVmFyLFxuICAgICAgdGl0bGU6IHZhbHVlID0+IHZhbHVlLFxuICAgIH0sXG4gICAge1xuICAgICAgYXR0cjogJ3JlcGVhdExhc3QnLFxuICAgICAgcmVzb2x2ZTogKCkgPT4gJ1JlcGVhdHMgdGhlIHByZWNlZGluZyBleHByZXNzaW9uIG9uY2UgbW9yZScsXG4gICAgICB0aXRsZTogKCkgPT4gJyUnLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlVmVsb2NpdHkgJiYge1xuICAgICAgYXR0cjogJ3ZlbG9jaXR5JyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZVZlbG9jaXR5LFxuICAgICAgdGl0bGU6IHYgPT4gYFZlbG9jaXR5ICR7dn1gLFxuICAgIH0sXG4gICAge1xuICAgICAgYXR0cjogJ3JlcGVhdCcsXG4gICAgICByZXNvbHZlOiB2ID0+IHtcbiAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYsIDEwKTtcbiAgICAgICAgcmV0dXJuIGBQbGF5cyB0aGUgcHJlY2VkaW5nIHNlcXVlbmNlICR7bn0gdGltZSR7biAhPT0gMSA/ICdzJyA6ICcnfSBpbiBhIHJvd2A7XG4gICAgICB9LFxuICAgICAgdGl0bGU6IHYgPT4gYFx1MDBENyR7dn1gLFxuICAgIH0sXG4gICAge1xuICAgICAgYXR0cjogJ251bWJlcicsXG4gICAgICByZXNvbHZlOiAoKSA9PiAnTnVtZXJpYyB2YWx1ZSBcdTIwMTQgdXNlZCBhcyB2ZWxvY2l0eSwgb2N0YXZlLCBvciBwYXJhbWV0ZXInLFxuICAgICAgdGl0bGU6IHYgPT4gdixcbiAgICB9LFxuICAgIHtcbiAgICAgIGF0dHI6ICdwYXR0ZXJuJyxcbiAgICAgIHJlc29sdmU6ICgpID0+ICd4ID0gaGl0ICB8ICAtID0gaG9sZCAgfCAgXyA9IHJlc3QgIHwgIFsgXSA9IHN1YmRpdmlkZScsXG4gICAgICB0aXRsZTogKCkgPT4gJ1JoeXRobSBwYXR0ZXJuJyxcbiAgICB9LFxuICBdLmZpbHRlcihCb29sZWFuKTtcblxuICBmdW5jdGlvbiBzeW5jKCkge1xuICAgIHByZS5pbm5lckhUTUwgPSBgJHtoaWdobGlnaHQodGEudmFsdWUpfVxcbmA7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlVG9vbHRpcCgpIHtcbiAgICB0aXAuaGlkZGVuID0gdHJ1ZTtcbiAgICB0aXBTdGFmZi5pbm5lckhUTUwgPSAnJztcbiAgICB0aXBTdGFmZi5oaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJTY3J1YkN1cnNvcigpIHtcbiAgICB3cmFwLmNsYXNzTGlzdC5yZW1vdmUoJ3NjcnViLWhvdmVyJyk7XG4gIH1cblxuICBmdW5jdGlvbiBjbGVhckFjdGl2ZVRva2VuSGlnaGxpZ2h0KCkge1xuICAgIGFjdGl2ZVRva2Vucy5mb3JFYWNoKHRva2VuID0+IHRva2VuLmNsYXNzTGlzdC5yZW1vdmUoJ3Rvay1hY3RpdmUnKSk7XG4gICAgYWN0aXZlVG9rZW5zID0gW107XG4gIH1cblxuICBmdW5jdGlvbiBnZXRTY3J1YlRhcmdldChlbGVtZW50cykge1xuICAgIHJldHVybiBlbGVtZW50cy5maW5kKGVsID0+IChcbiAgICAgIGVsLmRhdGFzZXRcbiAgICAgICYmICh0eXBlb2YgZWwuZGF0YXNldC5udW1iZXIgIT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBlbC5kYXRhc2V0LnZlbG9jaXR5ICE9PSAndW5kZWZpbmVkJylcbiAgICApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlU2NydWJSYXcocmF3KSB7XG4gICAgY29uc3QgaXNGbG9hdCA9IFN0cmluZyhyYXcpLmluY2x1ZGVzKCcuJyk7XG4gICAgY29uc3QgZGVjaW1hbFBsYWNlcyA9IGlzRmxvYXQgPyBTdHJpbmcocmF3KS5zcGxpdCgnLicpWzFdLmxlbmd0aCA6IDA7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBwYXJzZUZsb2F0KHJhdyksXG4gICAgICBpc0Zsb2F0LFxuICAgICAgZGVjaW1hbFBsYWNlcyxcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYmVnaW5TY3J1YihlLCBzcGFuKSB7XG4gICAgY29uc3QgcmF3ID0gdHlwZW9mIHNwYW4uZGF0YXNldC5udW1iZXIgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IHNwYW4uZGF0YXNldC5udW1iZXJcbiAgICAgIDogc3Bhbi5kYXRhc2V0LnZlbG9jaXR5O1xuICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlU2NydWJSYXcocmF3KTtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKHBhcnNlZC52YWx1ZSkpIHJldHVybjtcblxuICAgIGNvbnN0IHN0YXJ0T2Zmc2V0ID0gY2hhck9mZnNldE9mRWxlbWVudChwcmUsIHNwYW4pO1xuICAgIGlmIChzdGFydE9mZnNldCA8IDApIHJldHVybjtcblxuICAgIHNjcnViU3RhdGUgPSB7XG4gICAgICBzdGFydFg6IGUuY2xpZW50WCxcbiAgICAgIHN0YXJ0VmFsdWU6IHBhcnNlZC52YWx1ZSxcbiAgICAgIGlzRmxvYXQ6IHBhcnNlZC5pc0Zsb2F0LFxuICAgICAgZGVjaW1hbFBsYWNlczogcGFyc2VkLmRlY2ltYWxQbGFjZXMsXG4gICAgICBhdHRyOiB0eXBlb2Ygc3Bhbi5kYXRhc2V0LnZlbG9jaXR5ICE9PSAndW5kZWZpbmVkJyA/ICd2ZWxvY2l0eScgOiAnbnVtYmVyJyxcbiAgICAgIHN0YXJ0T2Zmc2V0LFxuICAgICAgY3VycmVudExlbmd0aDogc3Bhbi50ZXh0Q29udGVudC5sZW5ndGgsXG4gICAgICBjdXJyZW50VGV4dDogcmF3LFxuICAgIH07XG4gICAgd3JhcC5jbGFzc0xpc3QuYWRkKCdzY3J1Yi1hY3RpdmUnKTtcbiAgICBoaWRlVG9vbHRpcCgpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5U2NydWIoZSkge1xuICAgIGlmICghc2NydWJTdGF0ZSkgcmV0dXJuO1xuICAgIGNvbnN0IFNURVBfUFggPSA0O1xuICAgIGNvbnN0IGRlbHRhVW5pdHMgPSBNYXRoLnJvdW5kKChlLmNsaWVudFggLSBzY3J1YlN0YXRlLnN0YXJ0WCkgLyBTVEVQX1BYKTtcbiAgICBjb25zdCBiYXNlU3RlcCA9IHNjcnViU3RhdGUuaXNGbG9hdCA/IE1hdGgucG93KDEwLCAtc2NydWJTdGF0ZS5kZWNpbWFsUGxhY2VzKSA6IDE7XG4gICAgY29uc3QgbW9kaWZpZXIgPSBlLnNoaWZ0S2V5ID8gMTAgOiBlLmFsdEtleSA/IDAuMSA6IDE7XG5cbiAgICBsZXQgbmV4dFZhbHVlID0gc2NydWJTdGF0ZS5zdGFydFZhbHVlICsgZGVsdGFVbml0cyAqIGJhc2VTdGVwICogbW9kaWZpZXI7XG4gICAgaWYgKHNjcnViU3RhdGUuYXR0ciA9PT0gJ3ZlbG9jaXR5Jykge1xuICAgICAgbmV4dFZhbHVlID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oMTI3LCBNYXRoLnJvdW5kKG5leHRWYWx1ZSkpKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0VGV4dCA9IHNjcnViU3RhdGUuaXNGbG9hdCAmJiBzY3J1YlN0YXRlLmF0dHIgIT09ICd2ZWxvY2l0eSdcbiAgICAgID8gbmV4dFZhbHVlLnRvRml4ZWQoc2NydWJTdGF0ZS5kZWNpbWFsUGxhY2VzKVxuICAgICAgOiBTdHJpbmcoTWF0aC5yb3VuZChuZXh0VmFsdWUpKTtcbiAgICBpZiAobmV4dFRleHQgPT09IHNjcnViU3RhdGUuY3VycmVudFRleHQpIHJldHVybjtcblxuICAgIGNvbnN0IHN0YXJ0ID0gc2NydWJTdGF0ZS5zdGFydE9mZnNldDtcbiAgICBjb25zdCBlbmQgPSBzdGFydCArIHNjcnViU3RhdGUuY3VycmVudExlbmd0aDtcbiAgICB0YS52YWx1ZSA9IHRhLnZhbHVlLnNsaWNlKDAsIHN0YXJ0KSArIG5leHRUZXh0ICsgdGEudmFsdWUuc2xpY2UoZW5kKTtcbiAgICBzY3J1YlN0YXRlLmN1cnJlbnRMZW5ndGggPSBuZXh0VGV4dC5sZW5ndGg7XG4gICAgc2NydWJTdGF0ZS5jdXJyZW50VGV4dCA9IG5leHRUZXh0O1xuICAgIHRhLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcsIHsgYnViYmxlczogdHJ1ZSB9KSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmRTY3J1YigpIHtcbiAgICBpZiAoIXNjcnViU3RhdGUpIHJldHVybjtcbiAgICBzY3J1YlN0YXRlID0gbnVsbDtcbiAgICB3cmFwLmNsYXNzTGlzdC5yZW1vdmUoJ3NjcnViLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGFwcGx5U2NydWIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmRTY3J1Yik7XG4gIH1cblxuICBmdW5jdGlvbiBmbGFzaExpbmVzKHN0YXJ0TGluZSwgZW5kTGluZSkge1xuICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5tYXgoMCwgc3RhcnRMaW5lKTtcbiAgICBjb25zdCBlbmQgPSBNYXRoLm1heChzdGFydCwgZW5kTGluZSk7XG4gICAgZm9yIChsZXQgbGluZSA9IHN0YXJ0OyBsaW5lIDw9IGVuZDsgbGluZSArPSAxKSB7XG4gICAgICBjb25zdCBsaW5lRWwgPSBwcmUucXVlcnlTZWxlY3RvcihgW2RhdGEtbGluZT1cIiR7bGluZX1cIl1gKTtcbiAgICAgIGlmICghbGluZUVsKSBjb250aW51ZTtcbiAgICAgIGxpbmVFbC5jbGFzc0xpc3QuYWRkKCdibG9jay1mbGFzaCcpO1xuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGluZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Jsb2NrLWZsYXNoJyk7XG4gICAgICAgIGZsYXNoVGltZXJzLmRlbGV0ZSh0aW1lcik7XG4gICAgICB9LCA4MDApO1xuICAgICAgZmxhc2hUaW1lcnMuYWRkKHRpbWVyKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQbGF5YWJsZVRva2VuU3BhbnMobGluZUVsKSB7XG4gICAgcmV0dXJuIFsuLi5saW5lRWwucXVlcnlTZWxlY3RvckFsbCgnc3BhbicpXVxuICAgICAgLmZpbHRlcih0b2tlbiA9PiB0b2tlbi5jbGFzc0xpc3QuY29udGFpbnMoJ3Rvay1wYXR0ZXJuJylcbiAgICAgICAgfHwgdG9rZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2stbm90ZScpXG4gICAgICAgIHx8IHRva2VuLmNsYXNzTGlzdC5jb250YWlucygndG9rLWNob3JkJylcbiAgICAgICAgfHwgdG9rZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2stdmFyLXJlZicpXG4gICAgICAgIHx8IHRva2VuLmNsYXNzTGlzdC5jb250YWlucygndG9rLW1vZGUnKVxuICAgICAgICB8fCB0b2tlbi5jbGFzc0xpc3QuY29udGFpbnMoJ3Rvay1wcm9ncmVzc2lvbicpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsYXNoQWN0aXZlVG9rZW5zKGxpbmVOdW1iZXJzLCBiZWF0SW5kZXgpIHtcbiAgICBjbGVhckFjdGl2ZVRva2VuSGlnaGxpZ2h0KCk7XG4gICAgbGluZU51bWJlcnMuZm9yRWFjaChsaW5lTnVtYmVyID0+IHtcbiAgICAgIGNvbnN0IGxpbmVFbCA9IHByZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1saW5lPVwiJHtsaW5lTnVtYmVyfVwiXWApO1xuICAgICAgaWYgKCFsaW5lRWwpIHJldHVybjtcbiAgICAgIGNvbnN0IHRva2VuU3BhbnMgPSBnZXRQbGF5YWJsZVRva2VuU3BhbnMobGluZUVsKTtcbiAgICAgIGlmICghdG9rZW5TcGFucy5sZW5ndGgpIHJldHVybjtcbiAgICAgIGNvbnN0IHRhcmdldCA9IHRva2VuU3BhbnNbTWF0aC5hYnMoYmVhdEluZGV4KSAlIHRva2VuU3BhbnMubGVuZ3RoXTtcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCd0b2stYWN0aXZlJyk7XG4gICAgICBhY3RpdmVUb2tlbnMucHVzaCh0YXJnZXQpO1xuICAgIH0pO1xuICB9XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgIHByZS5zY3JvbGxUb3AgPSB0YS5zY3JvbGxUb3A7XG4gICAgcHJlLnNjcm9sbExlZnQgPSB0YS5zY3JvbGxMZWZ0O1xuICB9KTtcblxuICB0YS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBzeW5jKCk7XG4gICAgaGlkZVRvb2x0aXAoKTtcbiAgICBpZiAob3B0aW9ucy5vbklucHV0KSBvcHRpb25zLm9uSW5wdXQodGEudmFsdWUpO1xuICB9KTtcblxuICB0YS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHtcbiAgICBpZiAoc2NydWJTdGF0ZSkgcmV0dXJuO1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZG9jdW1lbnQuZWxlbWVudHNGcm9tUG9pbnQoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIGNvbnN0IHNjcnViVGFyZ2V0ID0gZ2V0U2NydWJUYXJnZXQoZWxlbWVudHMpO1xuICAgIHdyYXAuY2xhc3NMaXN0LnRvZ2dsZSgnc2NydWItaG92ZXInLCBCb29sZWFuKHNjcnViVGFyZ2V0KSk7XG4gICAgY29uc3QgZm91bmQgPSB0b29sdGlwSGFuZGxlcnNcbiAgICAgIC5tYXAoaGFuZGxlciA9PiB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGVsZW1lbnRzLmZpbmQoZWwgPT4gZWwuZGF0YXNldCAmJiBlbC5kYXRhc2V0W2hhbmRsZXIuYXR0cl0pO1xuICAgICAgICByZXR1cm4gaGl0ID8geyBoYW5kbGVyLCB2YWx1ZTogaGl0LmRhdGFzZXRbaGFuZGxlci5hdHRyXSB9IDogbnVsbDtcbiAgICAgIH0pXG4gICAgICAuZmluZChCb29sZWFuKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0ZXh0ID0gZm91bmQuaGFuZGxlci5yZXNvbHZlKGZvdW5kLnZhbHVlKTtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIGhpZGVUb29sdGlwKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBvcyA9IGNsYW1wVG9vbHRpcChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgdGlwVGl0bGUudGV4dENvbnRlbnQgPSBmb3VuZC5oYW5kbGVyLnRpdGxlKGZvdW5kLnZhbHVlKTtcbiAgICB0aXBCb2R5LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBpZiAoZm91bmQuaGFuZGxlci5ub3Rlcykge1xuICAgICAgY29uc3Qgbm90ZUFyciA9IGZvdW5kLmhhbmRsZXIubm90ZXMoZm91bmQudmFsdWUpO1xuICAgICAgaWYgKG5vdGVBcnIgJiYgbm90ZUFyci5sZW5ndGgpIHtcbiAgICAgICAgdGlwU3RhZmYuaW5uZXJIVE1MID0gYnVpbGRTdGFmZlNWRyhub3RlQXJyLCBmb3VuZC5oYW5kbGVyLnN0YWZmTW9kZSk7XG4gICAgICAgIHRpcFN0YWZmLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlwU3RhZmYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRpcFN0YWZmLmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcFN0YWZmLmlubmVySFRNTCA9ICcnO1xuICAgICAgdGlwU3RhZmYuaGlkZGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgdGlwLnN0eWxlLmxlZnQgPSBgJHtwb3MubGVmdH1weGA7XG4gICAgdGlwLnN0eWxlLnRvcCA9IGAke3Bvcy50b3B9cHhgO1xuICAgIHRpcC5oaWRkZW4gPSBmYWxzZTtcbiAgfSk7XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgaWYgKGUuYnV0dG9uICE9PSAwIHx8IHNjcnViU3RhdGUpIHJldHVybjtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICBjb25zdCB0YXJnZXQgPSBnZXRTY3J1YlRhcmdldChlbGVtZW50cyk7XG4gICAgaWYgKCF0YXJnZXQpIHJldHVybjtcbiAgICBiZWdpblNjcnViKGUsIHRhcmdldCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgYXBwbHlTY3J1Yik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGVuZFNjcnViKTtcbiAgfSk7XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICBoaWRlVG9vbHRpcCgpO1xuICAgIGNsZWFyU2NydWJDdXJzb3IoKTtcbiAgfSk7XG5cbiAgc3luYygpO1xuICB3cmFwLmFwcGVuZENoaWxkKHByZSk7XG4gIHdyYXAuYXBwZW5kQ2hpbGQodGEpO1xuICB3cmFwLmFwcGVuZENoaWxkKHRpcCk7XG5cbiAgcmV0dXJuIHtcbiAgICBlbDogd3JhcCxcbiAgICB0ZXh0YXJlYTogdGEsXG4gICAgb246IChldmVudCwgZm4pID0+IHRhLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuKSxcbiAgICBnZXRWYWx1ZTogKCkgPT4gdGEudmFsdWUsXG4gICAgZ2V0Q3Vyc29yUG9zaXRpb246ICgpID0+IHRhLnNlbGVjdGlvblN0YXJ0LFxuICAgIGZsYXNoTGluZXMsXG4gICAgZmxhc2hBY3RpdmVUb2tlbnMsXG4gICAgY2xlYXJBY3RpdmVUb2tlbkhpZ2hsaWdodCxcbiAgICBzZXRWYWx1ZTogdmFsdWUgPT4ge1xuICAgICAgdGEudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHN5bmMoKTtcbiAgICAgIGhpZGVUb29sdGlwKCk7XG4gICAgICBjbGVhckFjdGl2ZVRva2VuSGlnaGxpZ2h0KCk7XG4gICAgfSxcbiAgICBmb2N1czogKCkgPT4gdGEuZm9jdXMoKSxcbiAgfTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsaUJBQWlCO0FBRTFCLE1BQU0sV0FBVyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRTtBQUM1RCxNQUFNLGNBQWMsSUFBSSxJQUFJO0FBRTVCLFNBQVMsY0FBYyxHQUFHO0FBQ3hCLFNBQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxZQUFZLElBQUksRUFBRSxNQUFNLENBQUM7QUFDOUM7QUFFQSxTQUFTLFVBQVUsU0FBUztBQUMxQixRQUFNLElBQUksUUFBUSxNQUFNLDBCQUEwQjtBQUNsRCxNQUFJLENBQUMsRUFBRyxRQUFPO0FBQ2YsUUFBTSxVQUFVLFNBQVMsRUFBRSxDQUFDLEdBQUcsRUFBRSxJQUFJLElBQUksU0FBUyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUM7QUFDcEUsU0FBTyxVQUFVO0FBQ25CO0FBRUEsU0FBUyxPQUFPLEtBQUs7QUFDbkIsU0FBTyxLQUFLLE1BQU07QUFDcEI7QUFFQSxTQUFTLGNBQWMsT0FBTyxPQUFPLFNBQVM7QUFDNUMsTUFBSSxDQUFDLFNBQVMsTUFBTSxXQUFXLEVBQUcsUUFBTztBQUN6QyxRQUFNLFNBQVMsTUFDWixJQUFJLFFBQU0sRUFBRSxNQUFNLEdBQUcsS0FBSyxVQUFVLENBQUMsRUFBRSxFQUFFLEVBQ3pDLE9BQU8sT0FBSyxFQUFFLFFBQVEsSUFBSSxFQUMxQixL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
