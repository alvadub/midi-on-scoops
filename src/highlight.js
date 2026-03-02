function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function span(cls, value, dataVar) {
  const attrs = dataVar ? ` class="${cls}" data-var="${esc(dataVar)}"` : ` class="${cls}"`;
  return `<span${attrs}>${esc(value)}</span>`;
}

function classify(token) {
  if (!token) return null;
  if (token === '<') return 'tok-inherit';
  if (token === '%') return 'tok-var-ref';
  if (token.charAt(0) === '%') return 'tok-var-ref';
  if (/^\*\d+$/.test(token)) return 'tok-repeat';
  if (/^[x_\-\[\]]+$/.test(token)) return 'tok-pattern';
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
  if (cls === 'tok-var-ref' && token !== '%') return span(cls, token, token);
  return span(cls, token);
}

function renderTokens(text) {
  return text
    .split(/(\s+)/)
    .map(part => (/\s+/.test(part) ? part : renderToken(part)))
    .join('');
}

function splitComment(line) {
  const idx = line.indexOf(';');
  if (idx < 0) return [line, ''];
  return [line.slice(0, idx), line.slice(idx)];
}

function renderBase(base) {
  if (!base.trim()) return esc(base);

  if (/^\s*##\s+/.test(base)) {
    return base.replace(/^(\s*##\s+)(.*)$/, (_, p1, p2) => `${esc(p1)}${span('tok-subtrack', p2)}`);
  }
  if (/^\s*#\s+/.test(base)) {
    return base.replace(/^(\s*#\s+)(.*)$/, (_, p1, p2) => `${esc(p1)}${span('tok-track', p2)}`);
  }
  if (/^\s*@/.test(base)) {
    return renderTokens(base.replace(/</g, ' < '));
  }
  if (/^\s*>/.test(base)) {
    return span('tok-arrangement', base.trimStart().charAt(0))
      + renderTokens(base.trimStart().slice(1).replace(/^\s*/, ' '))
      .replace(/^/, esc(base.match(/^\s*/)[0]));
  }
  if (/^\s*%[^\s]+\s+/.test(base)) {
    return base.replace(/^(\s*)(%[^\s]+)(\s*)(.*)$/, (_, i, v, s, rest) => (
      `${esc(i)}${span('tok-var-def', v, v)}${esc(s)}${renderTokens(rest)}`
    ));
  }
  if (/^\s*#\d+/.test(base)) {
    return renderTokens(base);
  }
  return renderTokens(base);
}

export function highlight(input) {
  return String(input || '')
    .split(/\r?\n/)
    .map(line => {
      const [base, comment] = splitComment(line);
      const rendered = renderBase(base);
      if (!comment) return rendered;
      return `${rendered}${span('tok-comment', comment)}`;
    })
    .join('\n');
}

