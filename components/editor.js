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
  const range = document.createRange();
  range.selectNodeContents(root);
  range.setEndBefore(target);
  return range.toString().length;
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvZWRpdG9yLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBoaWdobGlnaHQgfSBmcm9tICcuLi9oaWdobGlnaHQnO1xuXG5jb25zdCBESUFUT05JQyA9IHsgYzogMCwgZDogMSwgZTogMiwgZjogMywgZzogNCwgYTogNSwgYjogNiB9O1xuY29uc3QgRTRfRElBVE9OSUMgPSA0ICogNyArIDI7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5vdGUocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIG5vdGVUb1Bvcyhub3RlU3RyKSB7XG4gIGNvbnN0IG0gPSBub3RlU3RyLm1hdGNoKC9eKFthLWdBLUddKShbI2JdPykoXFxkKykkLyk7XG4gIGlmICghbSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGRpYXRQb3MgPSBwYXJzZUludChtWzNdLCAxMCkgKiA3ICsgRElBVE9OSUNbbVsxXS50b0xvd2VyQ2FzZSgpXTtcbiAgcmV0dXJuIGRpYXRQb3MgLSBFNF9ESUFUT05JQztcbn1cblxuZnVuY3Rpb24gcG9zVG9ZKHBvcykge1xuICByZXR1cm4gNjAgLSBwb3MgKiA1O1xufVxuXG5mdW5jdGlvbiBidWlsZFN0YWZmU1ZHKG5vdGVzLCBtb2RlID0gJ2Nob3JkJykge1xuICBpZiAoIW5vdGVzIHx8IG5vdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuICBjb25zdCBzb3J0ZWQgPSBub3Rlc1xuICAgIC5tYXAobiA9PiAoeyBub3RlOiBuLCBwb3M6IG5vdGVUb1BvcyhuKSB9KSlcbiAgICAuZmlsdGVyKG4gPT4gbi5wb3MgIT09IG51bGwpXG4gICAgLnNvcnQoKGEsIGIpID0+IGEucG9zIC0gYi5wb3MpO1xuICBpZiAoc29ydGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuXG4gIGNvbnN0IFcgPSAyMDA7XG4gIGNvbnN0IEggPSA5MDtcbiAgbGV0IHN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHtXfVwiIGhlaWdodD1cIiR7SH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+YDtcblxuICBzdmcgKz0gJzxzdHlsZT4uc3RhZmYtbGluZSwubGVkZ2Vye3N0cm9rZTojZmZmO3N0cm9rZS13aWR0aDoxfTwvc3R5bGU+JztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCB5ID0gMjAgKyBpICogMTA7XG4gICAgc3ZnICs9IGA8bGluZSBjbGFzcz1cInN0YWZmLWxpbmVcIiB4MT1cIjBcIiB5MT1cIiR7eX1cIiB4Mj1cIiR7V31cIiB5Mj1cIiR7eX1cIi8+YDtcbiAgfVxuICBzdmcgKz0gJzx0ZXh0IHg9XCI4XCIgeT1cIjUwXCIgZmlsbD1cIiNmZmZcIiBmb250LXNpemU9XCI1MlwiIGZvbnQtZmFtaWx5PVwic2VyaWZcIj5cdUQ4MzRcdUREMUU8L3RleHQ+JztcblxuICBjb25zdCBpc1NjYWxlID0gbW9kZSA9PT0gJ3NjYWxlJztcbiAgY29uc3Qgbm90ZUNvdW50ID0gc29ydGVkLmxlbmd0aDtcbiAgbGV0IG5vdGVYO1xuICBpZiAoaXNTY2FsZSkge1xuICAgIGNvbnN0IHN0ZXAgPSBub3RlQ291bnQgPiAxID8gMTU0IC8gKG5vdGVDb3VudCAtIDEpIDogMDtcbiAgICBzb3J0ZWQuZm9yRWFjaCgobiwgaSkgPT4ge1xuICAgICAgbi54ID0gMzYgKyBpICogc3RlcDtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBub3RlWCA9IDkwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjdXJyID0gc29ydGVkW2ldO1xuICAgICAgY29uc3QgcHJldiA9IGkgPiAwID8gc29ydGVkW2kgLSAxXSA6IG51bGw7XG4gICAgICBjdXJyLnggPSBub3RlWDtcbiAgICAgIGlmIChwcmV2ICYmIE1hdGguYWJzKGN1cnIucG9zIC0gcHJldi5wb3MpID09PSAxKSB7XG4gICAgICAgIGN1cnIueCA9IHByZXYueCArIDExO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNvcnRlZC5mb3JFYWNoKG4gPT4ge1xuICAgIGNvbnN0IHkgPSBwb3NUb1kobi5wb3MpO1xuICAgIGNvbnN0IG0gPSBuLm5vdGUubWF0Y2goL14oW2EtZ0EtR10pKFsjYl0/KShcXGQrKSQvKTtcbiAgICBjb25zdCBhY2NpZGVudGFsID0gbSA/IG1bMl0gOiAnJztcbiAgICBmb3IgKGxldCBwID0gLTI7IHAgPj0gbi5wb3M7IHAgLT0gMikge1xuICAgICAgY29uc3QgbHkgPSBwb3NUb1kocCk7XG4gICAgICBzdmcgKz0gYDxsaW5lIGNsYXNzPVwibGVkZ2VyXCIgeDE9XCIke24ueCAtIDl9XCIgeTE9XCIke2x5fVwiIHgyPVwiJHtuLnggKyA5fVwiIHkyPVwiJHtseX1cIi8+YDtcbiAgICB9XG4gICAgZm9yIChsZXQgcCA9IDEwOyBwIDw9IG4ucG9zOyBwICs9IDIpIHtcbiAgICAgIGNvbnN0IGx5ID0gcG9zVG9ZKHApO1xuICAgICAgc3ZnICs9IGA8bGluZSBjbGFzcz1cImxlZGdlclwiIHgxPVwiJHtuLnggLSA5fVwiIHkxPVwiJHtseX1cIiB4Mj1cIiR7bi54ICsgOX1cIiB5Mj1cIiR7bHl9XCIvPmA7XG4gICAgfVxuICAgIGlmIChpc1NjYWxlKSB7XG4gICAgICBzdmcgKz0gYDxlbGxpcHNlIGN4PVwiJHtuLnh9XCIgY3k9XCIke3l9XCIgcng9XCI1XCIgcnk9XCI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMS4yXCIgdHJhbnNmb3JtPVwicm90YXRlKC0xNSAke24ueH0gJHt5fSlcIi8+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnICs9IGA8ZWxsaXBzZSBjeD1cIiR7bi54fVwiIGN5PVwiJHt5fVwiIHJ4PVwiNVwiIHJ5PVwiNFwiIGZpbGw9XCIjZmZmXCIgdHJhbnNmb3JtPVwicm90YXRlKC0xNSAke24ueH0gJHt5fSlcIi8+YDtcbiAgICB9XG4gICAgaWYgKGFjY2lkZW50YWwgPT09ICcjJykge1xuICAgICAgc3ZnICs9IGA8dGV4dCB4PVwiJHtuLnggLSAxNH1cIiB5PVwiJHt5ICsgNH1cIiBmaWxsPVwiI2ZmZlwiIGZvbnQtc2l6ZT1cIjEwXCI+XHUyNjZGPC90ZXh0PmA7XG4gICAgfSBlbHNlIGlmIChhY2NpZGVudGFsID09PSAnYicpIHtcbiAgICAgIHN2ZyArPSBgPHRleHQgeD1cIiR7bi54IC0gMTJ9XCIgeT1cIiR7eSArIDR9XCIgZmlsbD1cIiNmZmZcIiBmb250LXNpemU9XCIxMVwiPlx1MjY2RDwvdGV4dD5gO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCFpc1NjYWxlICYmIHNvcnRlZC5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgbG93ZXN0UG9zID0gc29ydGVkWzBdLnBvcztcbiAgICBjb25zdCBoaWdoZXN0UG9zID0gc29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXS5wb3M7XG4gICAgbGV0IHN0ZW1EaXIgPSBsb3dlc3RQb3MgPD0gMyA/ICd1cCcgOiAnZG93bic7XG4gICAgaWYgKHN0ZW1EaXIgPT09ICd1cCcpIHtcbiAgICAgIGNvbnN0IGhpZ2hZID0gcG9zVG9ZKGhpZ2hlc3RQb3MpO1xuICAgICAgY29uc3QgaGlnaFggPSBzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdLng7XG4gICAgICBzdmcgKz0gYDxsaW5lIHgxPVwiJHtoaWdoWCArIDV9XCIgeTE9XCIke2hpZ2hZfVwiIHgyPVwiJHtoaWdoWCArIDV9XCIgeTI9XCIke2hpZ2hZIC0gMjh9XCIgc3Ryb2tlPVwiI2ZmZlwiIHN0cm9rZS13aWR0aD1cIjEuMlwiLz5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsb3dZID0gcG9zVG9ZKGxvd2VzdFBvcyk7XG4gICAgICBjb25zdCBsb3dYID0gc29ydGVkWzBdLng7XG4gICAgICBzdmcgKz0gYDxsaW5lIHgxPVwiJHtsb3dYIC0gNX1cIiB5MT1cIiR7bG93WX1cIiB4Mj1cIiR7bG93WCAtIDV9XCIgeTI9XCIke2xvd1kgKyAyOH1cIiBzdHJva2U9XCIjZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMS4yXCIvPmA7XG4gICAgfVxuICB9XG5cbiAgc3ZnICs9ICc8L3N2Zz4nO1xuICByZXR1cm4gc3ZnO1xufVxuXG5mdW5jdGlvbiBjbGFtcFRvb2x0aXAoeCwgeSwgd2lkdGggPSAzMjApIHtcbiAgY29uc3QgbWF4WCA9IE1hdGgubWF4KDgsIHdpbmRvdy5pbm5lcldpZHRoIC0gd2lkdGggLSA4KTtcbiAgY29uc3QgbGVmdCA9IE1hdGgubWluKHggKyAxMiwgbWF4WCk7XG4gIGNvbnN0IHRvcCA9IE1hdGgubWluKHkgKyAxMiwgd2luZG93LmlubmVySGVpZ2h0IC0gMTcwKTtcbiAgcmV0dXJuIHsgbGVmdCwgdG9wIH07XG59XG5cbmZ1bmN0aW9uIGNoYXJPZmZzZXRPZkVsZW1lbnQocm9vdCwgdGFyZ2V0KSB7XG4gIGlmICghcm9vdCB8fCAhdGFyZ2V0IHx8ICFyb290LmNvbnRhaW5zKHRhcmdldCkpIHJldHVybiAtMTtcbiAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xuICByYW5nZS5zZWxlY3ROb2RlQ29udGVudHMocm9vdCk7XG4gIHJhbmdlLnNldEVuZEJlZm9yZSh0YXJnZXQpO1xuICByZXR1cm4gcmFuZ2UudG9TdHJpbmcoKS5sZW5ndGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZGl0b3IoaW5pdGlhbFRleHQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdyYXAuaWQgPSAnZWRpdG9yLXdyYXAnO1xuXG4gIGNvbnN0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICBwcmUuaWQgPSAnZWRpdG9yLWhsJztcbiAgcHJlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gIGNvbnN0IHRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGEuaWQgPSAnZWRpdG9yJztcbiAgdGEuc3BlbGxjaGVjayA9IGZhbHNlO1xuICB0YS5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgdGEudmFsdWUgPSBpbml0aWFsVGV4dDtcblxuICBjb25zdCB0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGlwLmlkID0gJ3Zhci10b29sdGlwJztcbiAgdGlwLmhpZGRlbiA9IHRydWU7XG4gIHRpcC5pbm5lckhUTUwgPSAnPHN0cm9uZz48L3N0cm9uZz48c3BhbiBjbGFzcz1cInRvb2x0aXAtcmVzb2x2ZWRcIj48L3NwYW4+PGRpdiBjbGFzcz1cInRvb2x0aXAtc3RhZmZcIj48L2Rpdj4nO1xuICBjb25zdCB0aXBUaXRsZSA9IHRpcC5xdWVyeVNlbGVjdG9yKCdzdHJvbmcnKTtcbiAgY29uc3QgdGlwQm9keSA9IHRpcC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1yZXNvbHZlZCcpO1xuICBjb25zdCB0aXBTdGFmZiA9IHRpcC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1zdGFmZicpO1xuICBjb25zdCBmbGFzaFRpbWVycyA9IG5ldyBTZXQoKTtcbiAgbGV0IHNjcnViU3RhdGUgPSBudWxsO1xuICBsZXQgYWN0aXZlVG9rZW5zID0gW107XG5cbiAgY29uc3QgdG9vbHRpcEhhbmRsZXJzID0gW1xuICAgIG9wdGlvbnMucmVzb2x2ZU5vdGUgJiYge1xuICAgICAgYXR0cjogJ25vdGUnLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlTm90ZSxcbiAgICAgIG5vdGVzOiB2YWx1ZSA9PiBbdmFsdWVdLFxuICAgICAgc3RhZmZNb2RlOiAnc2luZ2xlJyxcbiAgICAgIHRpdGxlOiB2YWx1ZSA9PiBub3JtYWxpemVOb3RlKHZhbHVlKSxcbiAgICB9LFxuICAgIG9wdGlvbnMucmVzb2x2ZUNob3JkICYmIHtcbiAgICAgIGF0dHI6ICdjaG9yZCcsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVDaG9yZCxcbiAgICAgIG5vdGVzOiB2YWx1ZSA9PiB2YWx1ZS5zcGxpdCgnfCcpLm1hcChub3JtYWxpemVOb3RlKSxcbiAgICAgIHN0YWZmTW9kZTogJ2Nob3JkJyxcbiAgICAgIHRpdGxlOiAoKSA9PiAnQ2hvcmQnLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlTW9kZSAmJiB7XG4gICAgICBhdHRyOiAnbW9kZScsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVNb2RlLFxuICAgICAgbm90ZXM6IG9wdGlvbnMucmVzb2x2ZU1vZGVOb3RlcyxcbiAgICAgIHN0YWZmTW9kZTogJ3NjYWxlJyxcbiAgICAgIHRpdGxlOiB2YWx1ZSA9PiB2YWx1ZSxcbiAgICB9LFxuICAgIG9wdGlvbnMucmVzb2x2ZUluc3RydW1lbnQgJiYge1xuICAgICAgYXR0cjogJ2luc3RydW1lbnQnLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlSW5zdHJ1bWVudCxcbiAgICAgIHRpdGxlOiB2YWx1ZSA9PiBgIyR7dmFsdWV9YCxcbiAgICB9LFxuICAgIG9wdGlvbnMucmVzb2x2ZVNlY3Rpb24gJiYge1xuICAgICAgYXR0cjogJ3NlY3Rpb24nLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlU2VjdGlvbixcbiAgICAgIHRpdGxlOiB2YWx1ZSA9PiBgQCR7dmFsdWV9YCxcbiAgICB9LFxuICAgIG9wdGlvbnMucmVzb2x2ZVZhciAmJiB7XG4gICAgICBhdHRyOiAndmFyJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZVZhcixcbiAgICAgIHRpdGxlOiB2YWx1ZSA9PiB2YWx1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGF0dHI6ICdyZXBlYXRMYXN0JyxcbiAgICAgIHJlc29sdmU6ICgpID0+ICdSZXBlYXRzIHRoZSBwcmVjZWRpbmcgZXhwcmVzc2lvbiBvbmNlIG1vcmUnLFxuICAgICAgdGl0bGU6ICgpID0+ICclJyxcbiAgICB9LFxuICAgIG9wdGlvbnMucmVzb2x2ZVZlbG9jaXR5ICYmIHtcbiAgICAgIGF0dHI6ICd2ZWxvY2l0eScsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVWZWxvY2l0eSxcbiAgICAgIHRpdGxlOiB2ID0+IGBWZWxvY2l0eSAke3Z9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGF0dHI6ICdyZXBlYXQnLFxuICAgICAgcmVzb2x2ZTogdiA9PiB7XG4gICAgICAgIGNvbnN0IG4gPSBwYXJzZUludCh2LCAxMCk7XG4gICAgICAgIHJldHVybiBgUGxheXMgdGhlIHByZWNlZGluZyBzZXF1ZW5jZSAke259IHRpbWUke24gIT09IDEgPyAncycgOiAnJ30gaW4gYSByb3dgO1xuICAgICAgfSxcbiAgICAgIHRpdGxlOiB2ID0+IGBcdTAwRDcke3Z9YCxcbiAgICB9LFxuICAgIHtcbiAgICAgIGF0dHI6ICdudW1iZXInLFxuICAgICAgcmVzb2x2ZTogKCkgPT4gJ051bWVyaWMgdmFsdWUgXHUyMDE0IHVzZWQgYXMgdmVsb2NpdHksIG9jdGF2ZSwgb3IgcGFyYW1ldGVyJyxcbiAgICAgIHRpdGxlOiB2ID0+IHYsXG4gICAgfSxcbiAgICB7XG4gICAgICBhdHRyOiAncGF0dGVybicsXG4gICAgICByZXNvbHZlOiAoKSA9PiAneCA9IGhpdCAgfCAgLSA9IGhvbGQgIHwgIF8gPSByZXN0ICB8ICBbIF0gPSBzdWJkaXZpZGUnLFxuICAgICAgdGl0bGU6ICgpID0+ICdSaHl0aG0gcGF0dGVybicsXG4gICAgfSxcbiAgXS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgZnVuY3Rpb24gc3luYygpIHtcbiAgICBwcmUuaW5uZXJIVE1MID0gYCR7aGlnaGxpZ2h0KHRhLnZhbHVlKX1cXG5gO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVRvb2x0aXAoKSB7XG4gICAgdGlwLmhpZGRlbiA9IHRydWU7XG4gICAgdGlwU3RhZmYuaW5uZXJIVE1MID0gJyc7XG4gICAgdGlwU3RhZmYuaGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFyU2NydWJDdXJzb3IoKSB7XG4gICAgd3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdzY3J1Yi1ob3ZlcicpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYXJBY3RpdmVUb2tlbkhpZ2hsaWdodCgpIHtcbiAgICBhY3RpdmVUb2tlbnMuZm9yRWFjaCh0b2tlbiA9PiB0b2tlbi5jbGFzc0xpc3QucmVtb3ZlKCd0b2stYWN0aXZlJykpO1xuICAgIGFjdGl2ZVRva2VucyA9IFtdO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U2NydWJUYXJnZXQoZWxlbWVudHMpIHtcbiAgICByZXR1cm4gZWxlbWVudHMuZmluZChlbCA9PiAoXG4gICAgICBlbC5kYXRhc2V0XG4gICAgICAmJiAodHlwZW9mIGVsLmRhdGFzZXQubnVtYmVyICE9PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZWwuZGF0YXNldC52ZWxvY2l0eSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgKSk7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVNjcnViUmF3KHJhdykge1xuICAgIGNvbnN0IGlzRmxvYXQgPSBTdHJpbmcocmF3KS5pbmNsdWRlcygnLicpO1xuICAgIGNvbnN0IGRlY2ltYWxQbGFjZXMgPSBpc0Zsb2F0ID8gU3RyaW5nKHJhdykuc3BsaXQoJy4nKVsxXS5sZW5ndGggOiAwO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcGFyc2VGbG9hdChyYXcpLFxuICAgICAgaXNGbG9hdCxcbiAgICAgIGRlY2ltYWxQbGFjZXMsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJlZ2luU2NydWIoZSwgc3Bhbikge1xuICAgIGNvbnN0IHJhdyA9IHR5cGVvZiBzcGFuLmRhdGFzZXQubnVtYmVyICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBzcGFuLmRhdGFzZXQubnVtYmVyXG4gICAgICA6IHNwYW4uZGF0YXNldC52ZWxvY2l0eTtcbiAgICBjb25zdCBwYXJzZWQgPSBwYXJzZVNjcnViUmF3KHJhdyk7XG4gICAgaWYgKE51bWJlci5pc05hTihwYXJzZWQudmFsdWUpKSByZXR1cm47XG5cbiAgICBjb25zdCBzdGFydE9mZnNldCA9IGNoYXJPZmZzZXRPZkVsZW1lbnQocHJlLCBzcGFuKTtcbiAgICBpZiAoc3RhcnRPZmZzZXQgPCAwKSByZXR1cm47XG5cbiAgICBzY3J1YlN0YXRlID0ge1xuICAgICAgc3RhcnRYOiBlLmNsaWVudFgsXG4gICAgICBzdGFydFZhbHVlOiBwYXJzZWQudmFsdWUsXG4gICAgICBpc0Zsb2F0OiBwYXJzZWQuaXNGbG9hdCxcbiAgICAgIGRlY2ltYWxQbGFjZXM6IHBhcnNlZC5kZWNpbWFsUGxhY2VzLFxuICAgICAgYXR0cjogdHlwZW9mIHNwYW4uZGF0YXNldC52ZWxvY2l0eSAhPT0gJ3VuZGVmaW5lZCcgPyAndmVsb2NpdHknIDogJ251bWJlcicsXG4gICAgICBzdGFydE9mZnNldCxcbiAgICAgIGN1cnJlbnRMZW5ndGg6IHNwYW4udGV4dENvbnRlbnQubGVuZ3RoLFxuICAgICAgY3VycmVudFRleHQ6IHJhdyxcbiAgICB9O1xuICAgIHdyYXAuY2xhc3NMaXN0LmFkZCgnc2NydWItYWN0aXZlJyk7XG4gICAgaGlkZVRvb2x0aXAoKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVNjcnViKGUpIHtcbiAgICBpZiAoIXNjcnViU3RhdGUpIHJldHVybjtcbiAgICBjb25zdCBTVEVQX1BYID0gNDtcbiAgICBjb25zdCBkZWx0YVVuaXRzID0gTWF0aC5yb3VuZCgoZS5jbGllbnRYIC0gc2NydWJTdGF0ZS5zdGFydFgpIC8gU1RFUF9QWCk7XG4gICAgY29uc3QgYmFzZVN0ZXAgPSBzY3J1YlN0YXRlLmlzRmxvYXQgPyBNYXRoLnBvdygxMCwgLXNjcnViU3RhdGUuZGVjaW1hbFBsYWNlcykgOiAxO1xuICAgIGNvbnN0IG1vZGlmaWVyID0gZS5zaGlmdEtleSA/IDEwIDogZS5hbHRLZXkgPyAwLjEgOiAxO1xuXG4gICAgbGV0IG5leHRWYWx1ZSA9IHNjcnViU3RhdGUuc3RhcnRWYWx1ZSArIGRlbHRhVW5pdHMgKiBiYXNlU3RlcCAqIG1vZGlmaWVyO1xuICAgIGlmIChzY3J1YlN0YXRlLmF0dHIgPT09ICd2ZWxvY2l0eScpIHtcbiAgICAgIG5leHRWYWx1ZSA9IE1hdGgubWF4KDEsIE1hdGgubWluKDEyNywgTWF0aC5yb3VuZChuZXh0VmFsdWUpKSk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dFRleHQgPSBzY3J1YlN0YXRlLmlzRmxvYXQgJiYgc2NydWJTdGF0ZS5hdHRyICE9PSAndmVsb2NpdHknXG4gICAgICA/IG5leHRWYWx1ZS50b0ZpeGVkKHNjcnViU3RhdGUuZGVjaW1hbFBsYWNlcylcbiAgICAgIDogU3RyaW5nKE1hdGgucm91bmQobmV4dFZhbHVlKSk7XG4gICAgaWYgKG5leHRUZXh0ID09PSBzY3J1YlN0YXRlLmN1cnJlbnRUZXh0KSByZXR1cm47XG5cbiAgICBjb25zdCBzdGFydCA9IHNjcnViU3RhdGUuc3RhcnRPZmZzZXQ7XG4gICAgY29uc3QgZW5kID0gc3RhcnQgKyBzY3J1YlN0YXRlLmN1cnJlbnRMZW5ndGg7XG4gICAgdGEudmFsdWUgPSB0YS52YWx1ZS5zbGljZSgwLCBzdGFydCkgKyBuZXh0VGV4dCArIHRhLnZhbHVlLnNsaWNlKGVuZCk7XG4gICAgc2NydWJTdGF0ZS5jdXJyZW50TGVuZ3RoID0gbmV4dFRleHQubGVuZ3RoO1xuICAgIHNjcnViU3RhdGUuY3VycmVudFRleHQgPSBuZXh0VGV4dDtcbiAgICB0YS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5kU2NydWIoKSB7XG4gICAgaWYgKCFzY3J1YlN0YXRlKSByZXR1cm47XG4gICAgc2NydWJTdGF0ZSA9IG51bGw7XG4gICAgd3JhcC5jbGFzc0xpc3QucmVtb3ZlKCdzY3J1Yi1hY3RpdmUnKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBhcHBseVNjcnViKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZW5kU2NydWIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZmxhc2hMaW5lcyhzdGFydExpbmUsIGVuZExpbmUpIHtcbiAgICBjb25zdCBzdGFydCA9IE1hdGgubWF4KDAsIHN0YXJ0TGluZSk7XG4gICAgY29uc3QgZW5kID0gTWF0aC5tYXgoc3RhcnQsIGVuZExpbmUpO1xuICAgIGZvciAobGV0IGxpbmUgPSBzdGFydDsgbGluZSA8PSBlbmQ7IGxpbmUgKz0gMSkge1xuICAgICAgY29uc3QgbGluZUVsID0gcHJlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWxpbmU9XCIke2xpbmV9XCJdYCk7XG4gICAgICBpZiAoIWxpbmVFbCkgY29udGludWU7XG4gICAgICBsaW5lRWwuY2xhc3NMaXN0LmFkZCgnYmxvY2stZmxhc2gnKTtcbiAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGxpbmVFbC5jbGFzc0xpc3QucmVtb3ZlKCdibG9jay1mbGFzaCcpO1xuICAgICAgICBmbGFzaFRpbWVycy5kZWxldGUodGltZXIpO1xuICAgICAgfSwgODAwKTtcbiAgICAgIGZsYXNoVGltZXJzLmFkZCh0aW1lcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UGxheWFibGVUb2tlblNwYW5zKGxpbmVFbCkge1xuICAgIHJldHVybiBbLi4ubGluZUVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NwYW4nKV1cbiAgICAgIC5maWx0ZXIodG9rZW4gPT4gdG9rZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2stcGF0dGVybicpXG4gICAgICAgIHx8IHRva2VuLmNsYXNzTGlzdC5jb250YWlucygndG9rLW5vdGUnKVxuICAgICAgICB8fCB0b2tlbi5jbGFzc0xpc3QuY29udGFpbnMoJ3Rvay1jaG9yZCcpXG4gICAgICAgIHx8IHRva2VuLmNsYXNzTGlzdC5jb250YWlucygndG9rLXZhci1yZWYnKVxuICAgICAgICB8fCB0b2tlbi5jbGFzc0xpc3QuY29udGFpbnMoJ3Rvay1tb2RlJylcbiAgICAgICAgfHwgdG9rZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2stcHJvZ3Jlc3Npb24nKSk7XG4gIH1cblxuICBmdW5jdGlvbiBmbGFzaEFjdGl2ZVRva2VucyhsaW5lTnVtYmVycywgYmVhdEluZGV4KSB7XG4gICAgY2xlYXJBY3RpdmVUb2tlbkhpZ2hsaWdodCgpO1xuICAgIGxpbmVOdW1iZXJzLmZvckVhY2gobGluZU51bWJlciA9PiB7XG4gICAgICBjb25zdCBsaW5lRWwgPSBwcmUucXVlcnlTZWxlY3RvcihgW2RhdGEtbGluZT1cIiR7bGluZU51bWJlcn1cIl1gKTtcbiAgICAgIGlmICghbGluZUVsKSByZXR1cm47XG4gICAgICBjb25zdCB0b2tlblNwYW5zID0gZ2V0UGxheWFibGVUb2tlblNwYW5zKGxpbmVFbCk7XG4gICAgICBpZiAoIXRva2VuU3BhbnMubGVuZ3RoKSByZXR1cm47XG4gICAgICBjb25zdCB0YXJnZXQgPSB0b2tlblNwYW5zW01hdGguYWJzKGJlYXRJbmRleCkgJSB0b2tlblNwYW5zLmxlbmd0aF07XG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgndG9rLWFjdGl2ZScpO1xuICAgICAgYWN0aXZlVG9rZW5zLnB1c2godGFyZ2V0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBwcmUuc2Nyb2xsVG9wID0gdGEuc2Nyb2xsVG9wO1xuICAgIHByZS5zY3JvbGxMZWZ0ID0gdGEuc2Nyb2xsTGVmdDtcbiAgfSk7XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc3luYygpO1xuICAgIGhpZGVUb29sdGlwKCk7XG4gICAgaWYgKG9wdGlvbnMub25JbnB1dCkgb3B0aW9ucy5vbklucHV0KHRhLnZhbHVlKTtcbiAgfSk7XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XG4gICAgaWYgKHNjcnViU3RhdGUpIHJldHVybjtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICBjb25zdCBzY3J1YlRhcmdldCA9IGdldFNjcnViVGFyZ2V0KGVsZW1lbnRzKTtcbiAgICB3cmFwLmNsYXNzTGlzdC50b2dnbGUoJ3NjcnViLWhvdmVyJywgQm9vbGVhbihzY3J1YlRhcmdldCkpO1xuICAgIGNvbnN0IGZvdW5kID0gdG9vbHRpcEhhbmRsZXJzXG4gICAgICAubWFwKGhhbmRsZXIgPT4ge1xuICAgICAgICBjb25zdCBoaXQgPSBlbGVtZW50cy5maW5kKGVsID0+IGVsLmRhdGFzZXQgJiYgZWwuZGF0YXNldFtoYW5kbGVyLmF0dHJdKTtcbiAgICAgICAgcmV0dXJuIGhpdCA/IHsgaGFuZGxlciwgdmFsdWU6IGhpdC5kYXRhc2V0W2hhbmRsZXIuYXR0cl0gfSA6IG51bGw7XG4gICAgICB9KVxuICAgICAgLmZpbmQoQm9vbGVhbik7XG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgaGlkZVRvb2x0aXAoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGV4dCA9IGZvdW5kLmhhbmRsZXIucmVzb2x2ZShmb3VuZC52YWx1ZSk7XG4gICAgaWYgKCF0ZXh0KSB7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwb3MgPSBjbGFtcFRvb2x0aXAoZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIHRpcFRpdGxlLnRleHRDb250ZW50ID0gZm91bmQuaGFuZGxlci50aXRsZShmb3VuZC52YWx1ZSk7XG4gICAgdGlwQm9keS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgaWYgKGZvdW5kLmhhbmRsZXIubm90ZXMpIHtcbiAgICAgIGNvbnN0IG5vdGVBcnIgPSBmb3VuZC5oYW5kbGVyLm5vdGVzKGZvdW5kLnZhbHVlKTtcbiAgICAgIGlmIChub3RlQXJyICYmIG5vdGVBcnIubGVuZ3RoKSB7XG4gICAgICAgIHRpcFN0YWZmLmlubmVySFRNTCA9IGJ1aWxkU3RhZmZTVkcobm90ZUFyciwgZm91bmQuaGFuZGxlci5zdGFmZk1vZGUpO1xuICAgICAgICB0aXBTdGFmZi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRpcFN0YWZmLmlubmVySFRNTCA9ICcnO1xuICAgICAgICB0aXBTdGFmZi5oaWRkZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aXBTdGFmZi5pbm5lckhUTUwgPSAnJztcbiAgICAgIHRpcFN0YWZmLmhpZGRlbiA9IHRydWU7XG4gICAgfVxuICAgIHRpcC5zdHlsZS5sZWZ0ID0gYCR7cG9zLmxlZnR9cHhgO1xuICAgIHRpcC5zdHlsZS50b3AgPSBgJHtwb3MudG9wfXB4YDtcbiAgICB0aXAuaGlkZGVuID0gZmFsc2U7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xuICAgIGlmIChlLmJ1dHRvbiAhPT0gMCB8fCBzY3J1YlN0YXRlKSByZXR1cm47XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgY29uc3QgdGFyZ2V0ID0gZ2V0U2NydWJUYXJnZXQoZWxlbWVudHMpO1xuICAgIGlmICghdGFyZ2V0KSByZXR1cm47XG4gICAgYmVnaW5TY3J1YihlLCB0YXJnZXQpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGFwcGx5U2NydWIpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlbmRTY3J1Yik7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgaGlkZVRvb2x0aXAoKTtcbiAgICBjbGVhclNjcnViQ3Vyc29yKCk7XG4gIH0pO1xuXG4gIHN5bmMoKTtcbiAgd3JhcC5hcHBlbmRDaGlsZChwcmUpO1xuICB3cmFwLmFwcGVuZENoaWxkKHRhKTtcbiAgd3JhcC5hcHBlbmRDaGlsZCh0aXApO1xuXG4gIHJldHVybiB7XG4gICAgZWw6IHdyYXAsXG4gICAgdGV4dGFyZWE6IHRhLFxuICAgIG9uOiAoZXZlbnQsIGZuKSA9PiB0YS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmbiksXG4gICAgZ2V0VmFsdWU6ICgpID0+IHRhLnZhbHVlLFxuICAgIGdldEN1cnNvclBvc2l0aW9uOiAoKSA9PiB0YS5zZWxlY3Rpb25TdGFydCxcbiAgICBmbGFzaExpbmVzLFxuICAgIGZsYXNoQWN0aXZlVG9rZW5zLFxuICAgIGNsZWFyQWN0aXZlVG9rZW5IaWdobGlnaHQsXG4gICAgc2V0VmFsdWU6IHZhbHVlID0+IHtcbiAgICAgIHRhLnZhbHVlID0gdmFsdWU7XG4gICAgICBzeW5jKCk7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgY2xlYXJBY3RpdmVUb2tlbkhpZ2hsaWdodCgpO1xuICAgIH0sXG4gICAgZm9jdXM6ICgpID0+IHRhLmZvY3VzKCksXG4gIH07XG59XG4iXSwKICAibWFwcGluZ3MiOiAiQUFBQSxTQUFTLGlCQUFpQjtBQUUxQixNQUFNLFdBQVcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUU7QUFDNUQsTUFBTSxjQUFjLElBQUksSUFBSTtBQUU1QixTQUFTLGNBQWMsR0FBRztBQUN4QixTQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsWUFBWSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQzlDO0FBRUEsU0FBUyxVQUFVLFNBQVM7QUFDMUIsUUFBTSxJQUFJLFFBQVEsTUFBTSwwQkFBMEI7QUFDbEQsTUFBSSxDQUFDLEVBQUcsUUFBTztBQUNmLFFBQU0sVUFBVSxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxJQUFJLFNBQVMsRUFBRSxDQUFDLEVBQUUsWUFBWSxDQUFDO0FBQ3BFLFNBQU8sVUFB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
