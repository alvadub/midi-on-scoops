function classifyLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return "blank";
  if (/^%/.test(trimmed)) return "var";
  if (/^@/.test(trimmed)) return "section";
  if (/^#\d+/.test(trimmed)) return "instrument";
  if (/^#{1,2}\s+/.test(trimmed)) return "track";
  return "body";
}
function lineIndexAtCursor(text, cursorPos) {
  let line = 0;
  for (let i = 0; i < Math.min(cursorPos, text.length); i += 1) {
    if (text.charAt(i) === "\n") line += 1;
  }
  return line;
}
function blockAtCursor(text, cursorPos) {
  const lines = String(text || "").split("\n");
  if (!lines.length) {
    return { startLine: 0, endLine: 0, type: "track", name: "block", blockText: "" };
  }
  let cursorLine = lineIndexAtCursor(text, cursorPos);
  if (cursorLine >= lines.length) cursorLine = lines.length - 1;
  while (cursorLine > 0 && classifyLine(lines[cursorLine]) === "blank") {
    cursorLine -= 1;
  }
  const currentType = classifyLine(lines[cursorLine]);
  if (currentType === "var") {
    const name2 = lines[cursorLine].trim().split(/\s+/)[0] || "%var";
    return {
      startLine: cursorLine,
      endLine: cursorLine,
      type: "var",
      name: name2,
      blockText: lines[cursorLine]
    };
  }
  const trackHeaderPattern = /^#{1,2}\s+/;
  const sectionPattern = /^@/;
  let sectionStart = -1;
  for (let i = cursorLine; i >= 0; i -= 1) {
    const type = classifyLine(lines[i]);
    if (type === "blank" || type === "track" || type === "var") break;
    if (sectionPattern.test(lines[i].trim())) {
      sectionStart = i;
      break;
    }
  }
  if (sectionStart >= 0 && currentType !== "track") {
    let end2 = sectionStart;
    for (let i = sectionStart + 1; i < lines.length; i += 1) {
      const type = classifyLine(lines[i]);
      if (type === "blank" || type === "track" || type === "var" || type === "section") break;
      end2 = i;
    }
    const name2 = lines[sectionStart].trim().split(/\s+/)[0].slice(1) || "section";
    return {
      startLine: sectionStart,
      endLine: end2,
      type: "section",
      name: name2,
      blockText: lines.slice(sectionStart, end2 + 1).join("\n")
    };
  }
  let start = 0;
  for (let i = cursorLine; i >= 0; i -= 1) {
    if (trackHeaderPattern.test(lines[i].trim())) {
      start = i;
      break;
    }
    if (classifyLine(lines[i]) === "blank") {
      start = i + 1;
      break;
    }
  }
  let end = start;
  for (let i = start + 1; i < lines.length; i += 1) {
    const type = classifyLine(lines[i]);
    if (type === "blank" || type === "track" || type === "var") break;
    end = i;
  }
  const header = lines[start].trim();
  const name = header.replace(/^#{1,2}\s+/, "").trim() || "track";
  return {
    startLine: start,
    endLine: end,
    type: "track",
    name,
    blockText: lines.slice(start, end + 1).join("\n")
  };
}
Object.assign(module.exports,{blockAtCursor});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2xpYi9zcmMvbGliL2Jsb2Nrcy5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiZnVuY3Rpb24gY2xhc3NpZnlMaW5lKGxpbmUpIHtcbiAgY29uc3QgdHJpbW1lZCA9IGxpbmUudHJpbSgpO1xuICBpZiAoIXRyaW1tZWQpIHJldHVybiAnYmxhbmsnO1xuICBpZiAoL14lLy50ZXN0KHRyaW1tZWQpKSByZXR1cm4gJ3Zhcic7XG4gIGlmICgvXkAvLnRlc3QodHJpbW1lZCkpIHJldHVybiAnc2VjdGlvbic7XG4gIGlmICgvXiNcXGQrLy50ZXN0KHRyaW1tZWQpKSByZXR1cm4gJ2luc3RydW1lbnQnO1xuICBpZiAoL14jezEsMn1cXHMrLy50ZXN0KHRyaW1tZWQpKSByZXR1cm4gJ3RyYWNrJztcbiAgcmV0dXJuICdib2R5Jztcbn1cblxuZnVuY3Rpb24gbGluZUluZGV4QXRDdXJzb3IodGV4dCwgY3Vyc29yUG9zKSB7XG4gIGxldCBsaW5lID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLm1pbihjdXJzb3JQb3MsIHRleHQubGVuZ3RoKTsgaSArPSAxKSB7XG4gICAgaWYgKHRleHQuY2hhckF0KGkpID09PSAnXFxuJykgbGluZSArPSAxO1xuICB9XG4gIHJldHVybiBsaW5lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmxvY2tBdEN1cnNvcih0ZXh0LCBjdXJzb3JQb3MpIHtcbiAgY29uc3QgbGluZXMgPSBTdHJpbmcodGV4dCB8fCAnJykuc3BsaXQoJ1xcbicpO1xuICBpZiAoIWxpbmVzLmxlbmd0aCkge1xuICAgIHJldHVybiB7IHN0YXJ0TGluZTogMCwgZW5kTGluZTogMCwgdHlwZTogJ3RyYWNrJywgbmFtZTogJ2Jsb2NrJywgYmxvY2tUZXh0OiAnJyB9O1xuICB9XG5cbiAgbGV0IGN1cnNvckxpbmUgPSBsaW5lSW5kZXhBdEN1cnNvcih0ZXh0LCBjdXJzb3JQb3MpO1xuICBpZiAoY3Vyc29yTGluZSA+PSBsaW5lcy5sZW5ndGgpIGN1cnNvckxpbmUgPSBsaW5lcy5sZW5ndGggLSAxO1xuXG4gIHdoaWxlIChjdXJzb3JMaW5lID4gMCAmJiBjbGFzc2lmeUxpbmUobGluZXNbY3Vyc29yTGluZV0pID09PSAnYmxhbmsnKSB7XG4gICAgY3Vyc29yTGluZSAtPSAxO1xuICB9XG5cbiAgY29uc3QgY3VycmVudFR5cGUgPSBjbGFzc2lmeUxpbmUobGluZXNbY3Vyc29yTGluZV0pO1xuICBpZiAoY3VycmVudFR5cGUgPT09ICd2YXInKSB7XG4gICAgY29uc3QgbmFtZSA9IGxpbmVzW2N1cnNvckxpbmVdLnRyaW0oKS5zcGxpdCgvXFxzKy8pWzBdIHx8ICcldmFyJztcbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnRMaW5lOiBjdXJzb3JMaW5lLFxuICAgICAgZW5kTGluZTogY3Vyc29yTGluZSxcbiAgICAgIHR5cGU6ICd2YXInLFxuICAgICAgbmFtZSxcbiAgICAgIGJsb2NrVGV4dDogbGluZXNbY3Vyc29yTGluZV0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IHRyYWNrSGVhZGVyUGF0dGVybiA9IC9eI3sxLDJ9XFxzKy87XG4gIGNvbnN0IHNlY3Rpb25QYXR0ZXJuID0gL15ALztcblxuICBsZXQgc2VjdGlvblN0YXJ0ID0gLTE7XG4gIGZvciAobGV0IGkgPSBjdXJzb3JMaW5lOyBpID49IDA7IGkgLT0gMSkge1xuICAgIGNvbnN0IHR5cGUgPSBjbGFzc2lmeUxpbmUobGluZXNbaV0pO1xuICAgIGlmICh0eXBlID09PSAnYmxhbmsnIHx8IHR5cGUgPT09ICd0cmFjaycgfHwgdHlwZSA9PT0gJ3ZhcicpIGJyZWFrO1xuICAgIGlmIChzZWN0aW9uUGF0dGVybi50ZXN0KGxpbmVzW2ldLnRyaW0oKSkpIHtcbiAgICAgIHNlY3Rpb25TdGFydCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoc2VjdGlvblN0YXJ0ID49IDAgJiYgY3VycmVudFR5cGUgIT09ICd0cmFjaycpIHtcbiAgICBsZXQgZW5kID0gc2VjdGlvblN0YXJ0O1xuICAgIGZvciAobGV0IGkgPSBzZWN0aW9uU3RhcnQgKyAxOyBpIDwgbGluZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBjbGFzc2lmeUxpbmUobGluZXNbaV0pO1xuICAgICAgaWYgKHR5cGUgPT09ICdibGFuaycgfHwgdHlwZSA9PT0gJ3RyYWNrJyB8fCB0eXBlID09PSAndmFyJyB8fCB0eXBlID09PSAnc2VjdGlvbicpIGJyZWFrO1xuICAgICAgZW5kID0gaTtcbiAgICB9XG4gICAgY29uc3QgbmFtZSA9IGxpbmVzW3NlY3Rpb25TdGFydF0udHJpbSgpLnNwbGl0KC9cXHMrLylbMF0uc2xpY2UoMSkgfHwgJ3NlY3Rpb24nO1xuICAgIHJldHVybiB7XG4gICAgICBzdGFydExpbmU6IHNlY3Rpb25TdGFydCxcbiAgICAgIGVuZExpbmU6IGVuZCxcbiAgICAgIHR5cGU6ICdzZWN0aW9uJyxcbiAgICAgIG5hbWUsXG4gICAgICBibG9ja1RleHQ6IGxpbmVzLnNsaWNlKHNlY3Rpb25TdGFydCwgZW5kICsgMSkuam9pbignXFxuJyksXG4gICAgfTtcbiAgfVxuXG4gIGxldCBzdGFydCA9IDA7XG4gIGZvciAobGV0IGkgPSBjdXJzb3JMaW5lOyBpID49IDA7IGkgLT0gMSkge1xuICAgIGlmICh0cmFja0hlYWRlclBhdHRlcm4udGVzdChsaW5lc1tpXS50cmltKCkpKSB7XG4gICAgICBzdGFydCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGNsYXNzaWZ5TGluZShsaW5lc1tpXSkgPT09ICdibGFuaycpIHtcbiAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBsZXQgZW5kID0gc3RhcnQ7XG4gIGZvciAobGV0IGkgPSBzdGFydCArIDE7IGkgPCBsaW5lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHR5cGUgPSBjbGFzc2lmeUxpbmUobGluZXNbaV0pO1xuICAgIGlmICh0eXBlID09PSAnYmxhbmsnIHx8IHR5cGUgPT09ICd0cmFjaycgfHwgdHlwZSA9PT0gJ3ZhcicpIGJyZWFrO1xuICAgIGVuZCA9IGk7XG4gIH1cblxuICBjb25zdCBoZWFkZXIgPSBsaW5lc1tzdGFydF0udHJpbSgpO1xuICBjb25zdCBuYW1lID0gaGVhZGVyLnJlcGxhY2UoL14jezEsMn1cXHMrLywgJycpLnRyaW0oKSB8fCAndHJhY2snO1xuICByZXR1cm4ge1xuICAgIHN0YXJ0TGluZTogc3RhcnQsXG4gICAgZW5kTGluZTogZW5kLFxuICAgIHR5cGU6ICd0cmFjaycsXG4gICAgbmFtZSxcbiAgICBibG9ja1RleHQ6IGxpbmVzLnNsaWNlKHN0YXJ0LCBlbmQgKyAxKS5qb2luKCdcXG4nKSxcbiAgfTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsYUFBYSxNQUFNO0FBQzFCLFFBQU0sVUFBVSxLQUFLLEtBQUs7QUFDMUIsTUFBSSxDQUFDLFFBQVMsUUFBTztBQUNyQixNQUFJLEtBQUssS0FBSyxPQUFPLEVBQUcsUUFBTztBQUMvQixNQUFJLEtBQUssS0FBSyxPQUFPLEVBQUcsUUFBTztBQUMvQixNQUFJLFFBQVEsS0FBSyxPQUFPLEVBQUcsUUFBTztBQUNsQyxNQUFJLGFBQWEsS0FBSyxPQUFPLEVBQUcsUUFBTztBQUN2QyxTQUFPO0FBQ1Q7QUFFQSxTQUFTLGtCQUFrQixNQUFNLFdBQVc7QUFDMUMsTUFBSSxPQUFPO0FBQ1gsV0FBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksV0FBVyxLQUFLLE1BQU0sR0FBRyxLQUFLLEdBQUc7QUFDNUQsUUFBSSxLQUFLLE9BQU8sQ0FBQyxNQUFNLEtBQU0sU0FBUTtBQUFBLEVBQ3ZDO0FBQ0EsU0FBTztBQUNUO0FBRU8sU0FBUyxjQUFjLE1BQU0sV0FBVztBQUM3QyxRQUFNLFFBQVEsT0FBTyxRQUFRLEVBQUUsRUFBRSxNQUFNLElBQUk7QUFDM0MsTUFBSSxDQUFDLE1BQU0sUUFBUTtBQUNqQixXQUFPLEVBQUUsV0FBVyxHQUFHLFNBQVMsR0FBRyxNQUFNLFNBQVMsTUFB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
