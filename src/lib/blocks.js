function classifyLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return 'blank';
  if (/^%/.test(trimmed)) return 'var';
  if (/^@/.test(trimmed)) return 'section';
  if (/^#\d+/.test(trimmed)) return 'instrument';
  if (/^#{1,2}\s+/.test(trimmed)) return 'track';
  return 'body';
}

function lineIndexAtCursor(text, cursorPos) {
  let line = 0;
  for (let i = 0; i < Math.min(cursorPos, text.length); i += 1) {
    if (text.charAt(i) === '\n') line += 1;
  }
  return line;
}

export function blockAtCursor(text, cursorPos) {
  const lines = String(text || '').split('\n');
  if (!lines.length) {
    return { startLine: 0, endLine: 0, type: 'track', name: 'block', blockText: '' };
  }

  let cursorLine = lineIndexAtCursor(text, cursorPos);
  if (cursorLine >= lines.length) cursorLine = lines.length - 1;

  while (cursorLine > 0 && classifyLine(lines[cursorLine]) === 'blank') {
    cursorLine -= 1;
  }

  const currentType = classifyLine(lines[cursorLine]);
  if (currentType === 'var') {
    const name = lines[cursorLine].trim().split(/\s+/)[0] || '%var';
    return {
      startLine: cursorLine,
      endLine: cursorLine,
      type: 'var',
      name,
      blockText: lines[cursorLine],
    };
  }

  const trackHeaderPattern = /^#{1,2}\s+/;
  const sectionPattern = /^@/;

  let sectionStart = -1;
  for (let i = cursorLine; i >= 0; i -= 1) {
    const type = classifyLine(lines[i]);
    if (type === 'blank' || type === 'track' || type === 'var') break;
    if (sectionPattern.test(lines[i].trim())) {
      sectionStart = i;
      break;
    }
  }

  if (sectionStart >= 0 && currentType !== 'track') {
    let end = sectionStart;
    for (let i = sectionStart + 1; i < lines.length; i += 1) {
      const type = classifyLine(lines[i]);
      if (type === 'blank' || type === 'track' || type === 'var' || type === 'section') break;
      end = i;
    }
    const name = lines[sectionStart].trim().split(/\s+/)[0].slice(1) || 'section';
    return {
      startLine: sectionStart,
      endLine: end,
      type: 'section',
      name,
      blockText: lines.slice(sectionStart, end + 1).join('\n'),
    };
  }

  let start = 0;
  for (let i = cursorLine; i >= 0; i -= 1) {
    if (trackHeaderPattern.test(lines[i].trim())) {
      start = i;
      break;
    }
    if (classifyLine(lines[i]) === 'blank') {
      start = i + 1;
      break;
    }
  }

  let end = start;
  for (let i = start + 1; i < lines.length; i += 1) {
    const type = classifyLine(lines[i]);
    if (type === 'blank' || type === 'track' || type === 'var') break;
    end = i;
  }

  const header = lines[start].trim();
  const name = header.replace(/^#{1,2}\s+/, '').trim() || 'track';
  return {
    startLine: start,
    endLine: end,
    type: 'track',
    name,
    blockText: lines.slice(start, end + 1).join('\n'),
  };
}
