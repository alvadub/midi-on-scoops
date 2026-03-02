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
    const elements = document.elementsFromPoint(e.clientX, e.clientY);
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
  ta.addEventListener("mouseleave", hideTooltip);
  sync();
  wrap.appendChild(pre);
  wrap.appendChild(ta);
  wrap.appendChild(tip);
  return {
    el: wrap,
    textarea: ta,
    on: (event, fn) => ta.addEventListener(event, fn),
    getValue: () => ta.value,
    setValue: (value) => {
      ta.value = value;
      sync();
      hideTooltip();
    },
    focus: () => ta.focus()
  };
}
Object.assign(module.exports,{createEditor});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvZWRpdG9yLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBoaWdobGlnaHQgfSBmcm9tICcuLi9oaWdobGlnaHQnO1xuXG5jb25zdCBESUFUT05JQyA9IHsgYzogMCwgZDogMSwgZTogMiwgZjogMywgZzogNCwgYTogNSwgYjogNiB9O1xuY29uc3QgRTRfRElBVE9OSUMgPSA0ICogNyArIDI7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZU5vdGUocykge1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIG5vdGVUb1Bvcyhub3RlU3RyKSB7XG4gIGNvbnN0IG0gPSBub3RlU3RyLm1hdGNoKC9eKFthLWdBLUddKShbI2JdPykoXFxkKykkLyk7XG4gIGlmICghbSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGRpYXRQb3MgPSBwYXJzZUludChtWzNdLCAxMCkgKiA3ICsgRElBVE9OSUNbbVsxXS50b0xvd2VyQ2FzZSgpXTtcbiAgcmV0dXJuIGRpYXRQb3MgLSBFNF9ESUFUT05JQztcbn1cblxuZnVuY3Rpb24gcG9zVG9ZKHBvcykge1xuICByZXR1cm4gNjAgLSBwb3MgKiA1O1xufVxuXG5mdW5jdGlvbiBidWlsZFN0YWZmU1ZHKG5vdGVzLCBtb2RlID0gJ2Nob3JkJykge1xuICBpZiAoIW5vdGVzIHx8IG5vdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuICBjb25zdCBzb3J0ZWQgPSBub3Rlc1xuICAgIC5tYXAobiA9PiAoeyBub3RlOiBuLCBwb3M6IG5vdGVUb1BvcyhuKSB9KSlcbiAgICAuZmlsdGVyKG4gPT4gbi5wb3MgIT09IG51bGwpXG4gICAgLnNvcnQoKGEsIGIpID0+IGEucG9zIC0gYi5wb3MpO1xuICBpZiAoc29ydGVkLmxlbmd0aCA9PT0gMCkgcmV0dXJuICcnO1xuXG4gIGNvbnN0IFcgPSAyMDA7XG4gIGNvbnN0IEggPSA5MDtcbiAgbGV0IHN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHtXfVwiIGhlaWdodD1cIiR7SH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+YDtcblxuICBzdmcgKz0gJzxzdHlsZT4uc3RhZmYtbGluZSwubGVkZ2Vye3N0cm9rZTojZmZmO3N0cm9rZS13aWR0aDoxfTwvc3R5bGU+JztcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCB5ID0gMjAgKyBpICogMTA7XG4gICAgc3ZnICs9IGA8bGluZSBjbGFzcz1cInN0YWZmLWxpbmVcIiB4MT1cIjBcIiB5MT1cIiR7eX1cIiB4Mj1cIiR7V31cIiB5Mj1cIiR7eX1cIi8+YDtcbiAgfVxuICBzdmcgKz0gJzx0ZXh0IHg9XCI4XCIgeT1cIjUwXCIgZmlsbD1cIiNmZmZcIiBmb250LXNpemU9XCI1MlwiIGZvbnQtZmFtaWx5PVwic2VyaWZcIj5cdUQ4MzRcdUREMUU8L3RleHQ+JztcblxuICBjb25zdCBpc1NjYWxlID0gbW9kZSA9PT0gJ3NjYWxlJztcbiAgY29uc3Qgbm90ZUNvdW50ID0gc29ydGVkLmxlbmd0aDtcbiAgbGV0IG5vdGVYO1xuICBpZiAoaXNTY2FsZSkge1xuICAgIGNvbnN0IHN0ZXAgPSBub3RlQ291bnQgPiAxID8gMTU0IC8gKG5vdGVDb3VudCAtIDEpIDogMDtcbiAgICBzb3J0ZWQuZm9yRWFjaCgobiwgaSkgPT4ge1xuICAgICAgbi54ID0gMzYgKyBpICogc3RlcDtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBub3RlWCA9IDkwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBjdXJyID0gc29ydGVkW2ldO1xuICAgICAgY29uc3QgcHJldiA9IGkgPiAwID8gc29ydGVkW2kgLSAxXSA6IG51bGw7XG4gICAgICBjdXJyLnggPSBub3RlWDtcbiAgICAgIGlmIChwcmV2ICYmIE1hdGguYWJzKGN1cnIucG9zIC0gcHJldi5wb3MpID09PSAxKSB7XG4gICAgICAgIGN1cnIueCA9IHByZXYueCArIDExO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNvcnRlZC5mb3JFYWNoKG4gPT4ge1xuICAgIGNvbnN0IHkgPSBwb3NUb1kobi5wb3MpO1xuICAgIGNvbnN0IG0gPSBuLm5vdGUubWF0Y2goL14oW2EtZ0EtR10pKFsjYl0/KShcXGQrKSQvKTtcbiAgICBjb25zdCBhY2NpZGVudGFsID0gbSA/IG1bMl0gOiAnJztcbiAgICBmb3IgKGxldCBwID0gLTI7IHAgPj0gbi5wb3M7IHAgLT0gMikge1xuICAgICAgY29uc3QgbHkgPSBwb3NUb1kocCk7XG4gICAgICBzdmcgKz0gYDxsaW5lIGNsYXNzPVwibGVkZ2VyXCIgeDE9XCIke24ueCAtIDl9XCIgeTE9XCIke2x5fVwiIHgyPVwiJHtuLnggKyA5fVwiIHkyPVwiJHtseX1cIi8+YDtcbiAgICB9XG4gICAgZm9yIChsZXQgcCA9IDEwOyBwIDw9IG4ucG9zOyBwICs9IDIpIHtcbiAgICAgIGNvbnN0IGx5ID0gcG9zVG9ZKHApO1xuICAgICAgc3ZnICs9IGA8bGluZSBjbGFzcz1cImxlZGdlclwiIHgxPVwiJHtuLnggLSA5fVwiIHkxPVwiJHtseX1cIiB4Mj1cIiR7bi54ICsgOX1cIiB5Mj1cIiR7bHl9XCIvPmA7XG4gICAgfVxuICAgIGlmIChpc1NjYWxlKSB7XG4gICAgICBzdmcgKz0gYDxlbGxpcHNlIGN4PVwiJHtuLnh9XCIgY3k9XCIke3l9XCIgcng9XCI1XCIgcnk9XCI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMS4yXCIgdHJhbnNmb3JtPVwicm90YXRlKC0xNSAke24ueH0gJHt5fSlcIi8+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnICs9IGA8ZWxsaXBzZSBjeD1cIiR7bi54fVwiIGN5PVwiJHt5fVwiIHJ4PVwiNVwiIHJ5PVwiNFwiIGZpbGw9XCIjZmZmXCIgdHJhbnNmb3JtPVwicm90YXRlKC0xNSAke24ueH0gJHt5fSlcIi8+YDtcbiAgICB9XG4gICAgaWYgKGFjY2lkZW50YWwgPT09ICcjJykge1xuICAgICAgc3ZnICs9IGA8dGV4dCB4PVwiJHtuLnggLSAxNH1cIiB5PVwiJHt5ICsgNH1cIiBmaWxsPVwiI2ZmZlwiIGZvbnQtc2l6ZT1cIjEwXCI+XHUyNjZGPC90ZXh0PmA7XG4gICAgfSBlbHNlIGlmIChhY2NpZGVudGFsID09PSAnYicpIHtcbiAgICAgIHN2ZyArPSBgPHRleHQgeD1cIiR7bi54IC0gMTJ9XCIgeT1cIiR7eSArIDR9XCIgZmlsbD1cIiNmZmZcIiBmb250LXNpemU9XCIxMVwiPlx1MjY2RDwvdGV4dD5gO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKCFpc1NjYWxlICYmIHNvcnRlZC5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgbG93ZXN0UG9zID0gc29ydGVkWzBdLnBvcztcbiAgICBjb25zdCBoaWdoZXN0UG9zID0gc29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXS5wb3M7XG4gICAgbGV0IHN0ZW1EaXIgPSBsb3dlc3RQb3MgPD0gMyA/ICd1cCcgOiAnZG93bic7XG4gICAgaWYgKHN0ZW1EaXIgPT09ICd1cCcpIHtcbiAgICAgIGNvbnN0IGhpZ2hZID0gcG9zVG9ZKGhpZ2hlc3RQb3MpO1xuICAgICAgY29uc3QgaGlnaFggPSBzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdLng7XG4gICAgICBzdmcgKz0gYDxsaW5lIHgxPVwiJHtoaWdoWCArIDV9XCIgeTE9XCIke2hpZ2hZfVwiIHgyPVwiJHtoaWdoWCArIDV9XCIgeTI9XCIke2hpZ2hZIC0gMjh9XCIgc3Ryb2tlPVwiI2ZmZlwiIHN0cm9rZS13aWR0aD1cIjEuMlwiLz5gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsb3dZID0gcG9zVG9ZKGxvd2VzdFBvcyk7XG4gICAgICBjb25zdCBsb3dYID0gc29ydGVkWzBdLng7XG4gICAgICBzdmcgKz0gYDxsaW5lIHgxPVwiJHtsb3dYIC0gNX1cIiB5MT1cIiR7bG93WX1cIiB4Mj1cIiR7bG93WCAtIDV9XCIgeTI9XCIke2xvd1kgKyAyOH1cIiBzdHJva2U9XCIjZmZmXCIgc3Ryb2tlLXdpZHRoPVwiMS4yXCIvPmA7XG4gICAgfVxuICB9XG5cbiAgc3ZnICs9ICc8L3N2Zz4nO1xuICByZXR1cm4gc3ZnO1xufVxuXG5mdW5jdGlvbiBjbGFtcFRvb2x0aXAoeCwgeSwgd2lkdGggPSAzMjApIHtcbiAgY29uc3QgbWF4WCA9IE1hdGgubWF4KDgsIHdpbmRvdy5pbm5lcldpZHRoIC0gd2lkdGggLSA4KTtcbiAgY29uc3QgbGVmdCA9IE1hdGgubWluKHggKyAxMiwgbWF4WCk7XG4gIGNvbnN0IHRvcCA9IE1hdGgubWluKHkgKyAxMiwgd2luZG93LmlubmVySGVpZ2h0IC0gMTcwKTtcbiAgcmV0dXJuIHsgbGVmdCwgdG9wIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFZGl0b3IoaW5pdGlhbFRleHQsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdyYXAuaWQgPSAnZWRpdG9yLXdyYXAnO1xuXG4gIGNvbnN0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICBwcmUuaWQgPSAnZWRpdG9yLWhsJztcbiAgcHJlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gIGNvbnN0IHRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGEuaWQgPSAnZWRpdG9yJztcbiAgdGEuc3BlbGxjaGVjayA9IGZhbHNlO1xuICB0YS5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgdGEudmFsdWUgPSBpbml0aWFsVGV4dDtcblxuICBjb25zdCB0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGlwLmlkID0gJ3Zhci10b29sdGlwJztcbiAgdGlwLmhpZGRlbiA9IHRydWU7XG4gIHRpcC5pbm5lckhUTUwgPSAnPHN0cm9uZz48L3N0cm9uZz48c3BhbiBjbGFzcz1cInRvb2x0aXAtcmVzb2x2ZWRcIj48L3NwYW4+PGRpdiBjbGFzcz1cInRvb2x0aXAtc3RhZmZcIj48L2Rpdj4nO1xuICBjb25zdCB0aXBUaXRsZSA9IHRpcC5xdWVyeVNlbGVjdG9yKCdzdHJvbmcnKTtcbiAgY29uc3QgdGlwQm9keSA9IHRpcC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1yZXNvbHZlZCcpO1xuICBjb25zdCB0aXBTdGFmZiA9IHRpcC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1zdGFmZicpO1xuXG4gIGNvbnN0IHRvb2x0aXBIYW5kbGVycyA9IFtcbiAgICBvcHRpb25zLnJlc29sdmVOb3RlICYmIHtcbiAgICAgIGF0dHI6ICdub3RlJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZU5vdGUsXG4gICAgICBub3RlczogdmFsdWUgPT4gW3ZhbHVlXSxcbiAgICAgIHN0YWZmTW9kZTogJ3NpbmdsZScsXG4gICAgICB0aXRsZTogdmFsdWUgPT4gbm9ybWFsaXplTm90ZSh2YWx1ZSksXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVDaG9yZCAmJiB7XG4gICAgICBhdHRyOiAnY2hvcmQnLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlQ2hvcmQsXG4gICAgICBub3RlczogdmFsdWUgPT4gdmFsdWUuc3BsaXQoJ3wnKS5tYXAobm9ybWFsaXplTm90ZSksXG4gICAgICBzdGFmZk1vZGU6ICdjaG9yZCcsXG4gICAgICB0aXRsZTogKCkgPT4gJ0Nob3JkJyxcbiAgICB9LFxuICAgIG9wdGlvbnMucmVzb2x2ZU1vZGUgJiYge1xuICAgICAgYXR0cjogJ21vZGUnLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlTW9kZSxcbiAgICAgIG5vdGVzOiBvcHRpb25zLnJlc29sdmVNb2RlTm90ZXMsXG4gICAgICBzdGFmZk1vZGU6ICdzY2FsZScsXG4gICAgICB0aXRsZTogdmFsdWUgPT4gdmFsdWUsXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVJbnN0cnVtZW50ICYmIHtcbiAgICAgIGF0dHI6ICdpbnN0cnVtZW50JyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZUluc3RydW1lbnQsXG4gICAgICB0aXRsZTogdmFsdWUgPT4gYCMke3ZhbHVlfWAsXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVTZWN0aW9uICYmIHtcbiAgICAgIGF0dHI6ICdzZWN0aW9uJyxcbiAgICAgIHJlc29sdmU6IG9wdGlvbnMucmVzb2x2ZVNlY3Rpb24sXG4gICAgICB0aXRsZTogdmFsdWUgPT4gYEAke3ZhbHVlfWAsXG4gICAgfSxcbiAgICBvcHRpb25zLnJlc29sdmVWYXIgJiYge1xuICAgICAgYXR0cjogJ3ZhcicsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVWYXIsXG4gICAgICB0aXRsZTogdmFsdWUgPT4gdmFsdWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBhdHRyOiAncGF0dGVybicsXG4gICAgICByZXNvbHZlOiAoKSA9PiAneCA9IGhpdCAgfCAgLSA9IGhvbGQgIHwgIF8gPSByZXN0ICB8ICBbIF0gPSBzdWJkaXZpZGUnLFxuICAgICAgdGl0bGU6ICgpID0+ICdSaHl0aG0gcGF0dGVybicsXG4gICAgfSxcbiAgXS5maWx0ZXIoQm9vbGVhbik7XG5cbiAgZnVuY3Rpb24gc3luYygpIHtcbiAgICBwcmUuaW5uZXJIVE1MID0gYCR7aGlnaGxpZ2h0KHRhLnZhbHVlKX1cXG5gO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVRvb2x0aXAoKSB7XG4gICAgdGlwLmhpZGRlbiA9IHRydWU7XG4gICAgdGlwU3RhZmYuaW5uZXJIVE1MID0gJyc7XG4gICAgdGlwU3RhZmYuaGlkZGVuID0gdHJ1ZTtcbiAgfVxuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICBwcmUuc2Nyb2xsVG9wID0gdGEuc2Nyb2xsVG9wO1xuICAgIHByZS5zY3JvbGxMZWZ0ID0gdGEuc2Nyb2xsTGVmdDtcbiAgfSk7XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgc3luYygpO1xuICAgIGhpZGVUb29sdGlwKCk7XG4gICAgaWYgKG9wdGlvbnMub25JbnB1dCkgb3B0aW9ucy5vbklucHV0KHRhLnZhbHVlKTtcbiAgfSk7XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5lbGVtZW50c0Zyb21Qb2ludChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgY29uc3QgZm91bmQgPSB0b29sdGlwSGFuZGxlcnNcbiAgICAgIC5tYXAoaGFuZGxlciA9PiB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGVsZW1lbnRzLmZpbmQoZWwgPT4gZWwuZGF0YXNldCAmJiBlbC5kYXRhc2V0W2hhbmRsZXIuYXR0cl0pO1xuICAgICAgICByZXR1cm4gaGl0ID8geyBoYW5kbGVyLCB2YWx1ZTogaGl0LmRhdGFzZXRbaGFuZGxlci5hdHRyXSB9IDogbnVsbDtcbiAgICAgIH0pXG4gICAgICAuZmluZChCb29sZWFuKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0ZXh0ID0gZm91bmQuaGFuZGxlci5yZXNvbHZlKGZvdW5kLnZhbHVlKTtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIGhpZGVUb29sdGlwKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBvcyA9IGNsYW1wVG9vbHRpcChlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgdGlwVGl0bGUudGV4dENvbnRlbnQgPSBmb3VuZC5oYW5kbGVyLnRpdGxlKGZvdW5kLnZhbHVlKTtcbiAgICB0aXBCb2R5LnRleHRDb250ZW50ID0gdGV4dDtcbiAgICBpZiAoZm91bmQuaGFuZGxlci5ub3Rlcykge1xuICAgICAgY29uc3Qgbm90ZUFyciA9IGZvdW5kLmhhbmRsZXIubm90ZXMoZm91bmQudmFsdWUpO1xuICAgICAgaWYgKG5vdGVBcnIgJiYgbm90ZUFyci5sZW5ndGgpIHtcbiAgICAgICAgdGlwU3RhZmYuaW5uZXJIVE1MID0gYnVpbGRTdGFmZlNWRyhub3RlQXJyLCBmb3VuZC5oYW5kbGVyLnN0YWZmTW9kZSk7XG4gICAgICAgIHRpcFN0YWZmLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGlwU3RhZmYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRpcFN0YWZmLmhpZGRlbiA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpcFN0YWZmLmlubmVySFRNTCA9ICcnO1xuICAgICAgdGlwU3RhZmYuaGlkZGVuID0gdHJ1ZTtcbiAgICB9XG4gICAgdGlwLnN0eWxlLmxlZnQgPSBgJHtwb3MubGVmdH1weGA7XG4gICAgdGlwLnN0eWxlLnRvcCA9IGAke3Bvcy50b3B9cHhgO1xuICAgIHRpcC5oaWRkZW4gPSBmYWxzZTtcbiAgfSk7XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZGVUb29sdGlwKTtcblxuICBzeW5jKCk7XG4gIHdyYXAuYXBwZW5kQ2hpbGQocHJlKTtcbiAgd3JhcC5hcHBlbmRDaGlsZCh0YSk7XG4gIHdyYXAuYXBwZW5kQ2hpbGQodGlwKTtcblxuICByZXR1cm4ge1xuICAgIGVsOiB3cmFwLFxuICAgIHRleHRhcmVhOiB0YSxcbiAgICBvbjogKGV2ZW50LCBmbikgPT4gdGEuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZm4pLFxuICAgIGdldFZhbHVlOiAoKSA9PiB0YS52YWx1ZSxcbiAgICBzZXRWYWx1ZTogdmFsdWUgPT4ge1xuICAgICAgdGEudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHN5bmMoKTtcbiAgICAgIGhpZGVUb29sdGlwKCk7XG4gICAgfSxcbiAgICBmb2N1czogKCkgPT4gdGEuZm9jdXMoKSxcbiAgfTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMs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QUFNLFNBQVMsS0FBSyxRQUFNLEdBQUcsV0FBVyxHQUFHLFFBQVEsUUFBUSxJQUFJLENBQUM7QUFDdEUsYUFBTyxNQUFNLEVBQUUsU0FBUyxPQUFPLElBQUksUUFBUSxRQUFRLElBQUksRUFBRSxJQUFJO0FBQUEsSUFDL0QsQ0FBQyxFQUNBLEtBQUssT0FBTztBQUNmLFFBQUksQ0FBQyxPQUFPO0FBQ1Ysa0JBQVk7QUFDWjtBQUFBLElBQ0Y7QUFDQSxVQUFNLE9BQU8sTUFBTSxRQUFRLFFBQVEsTUFBTSxLQUFLO0FBQzlDLFFBQUksQ0FBQyxNQUFNO0FBQ1Qsa0JBQVk7QUFDWjtBQUFBLElBQ0Y7QUFDQSxVQUFNLE1BQU0sYUFBYSxFQUFFLFNBQVMsRUFBRSxPQUFPO0FBQzdDLGFBQVMsY0FBYyxNQUFNLFFBQVEsTUFBTSxNQUFNLEtBQUs7QUFDdEQsWUFBUSxjQUFjO0FBQ3RCLFFBQUksTUFBTSxRQUFRLE9BQU87QUFDdkIsWUFBTSxVQUFVLE1BQU0sUUFBUSxNQUFNLE1BQU0sS0FBSztBQUMvQyxVQUFJLFdBQVcsUUFBUSxRQUFRO0FBQzdCLGlCQUFTLFlBQVksY0FBYyxTQUFTLE1BQU0sUUFBUSxTQUFTO0FBQ25FLGlCQUFTLFNBQVM7QUFBQSxNQUNwQixPQUFPO0FBQ0wsaUJBQVMsWUFBWTtBQUNyQixpQkFBUyxTQUFTO0FBQUEsTUFDcEI7QUFBQSxJQUNGLE9BQU87QUFDTCxlQUFTLFlBQVk7QUFDckIsZUFBUyxTQUFTO0FBQUEsSUFDcEI7QUFDQSxRQUFJLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSTtBQUM1QixRQUFJLE1BQU0sTUFBTSxHQUFHLElBQUksR0FBRztBQUMxQixRQUFJLFNBQVM7QUFBQSxFQUNmLENBQUM7QUFFRCxLQUFHLGlCQUFpQixjQUFjLFdBQVc7QUFFN0MsT0FBSztBQUNMLE9BQUssWUFBWSxHQUFHO0FBQ3BCLE9BQUssWUFBWSxFQUFFO0FBQ25CLE9BQUssWUFBWSxHQUFHO0FBRXBCLFNBQU87QUFBQSxJQUNMLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLElBQUksQ0FBQyxPQUFPLE9BQU8sR0FBRyxpQkFBaUIsT0FBTyxFQUFFO0FBQUEsSUFDaEQsVUFBVSxNQUFNLEdBQUc7QUFBQSxJQUNuQixVQUFVLFdBQVM7QUFDakIsU0FBRyxRQUFRO0FBQ1gsV0FBSztBQUNMLGtCQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsT0FBTyxNQUFNLEdBQUcsTUFBTTtBQUFBLEVBQ3hCO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
