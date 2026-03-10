import { parseArrangementBody } from './lib/arrangement.js';

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

export function classify(token) {
  if (!token) return null;
  if (token === '<') return 'tok-inherit';
  if (token === '%') return 'tok-var-ref';
  if (token.charAt(0) === '%') return 'tok-var-ref';
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
  const idx = line.indexOf(';');
  if (idx < 0) return [line, ''];
  return [line.slice(0, idx), line.slice(idx)];
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
      const sourceName = sourceToken.slice(1);
      return `${esc(indent)}${span('tok-section-head', sourceToken, { sectionHead: sourceName })}${renderTokens(rest)}`;
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
  if (/^\s*%[^\s]+\s+/.test(base)) {
    return base.replace(/^(\s*)(%[^\s]+)(\s*)(.*)$/, (_, i, v, s, rest) => (
      `${esc(i)}${span('tok-var-def', v, { var: v })}${esc(s)}${renderTokens(rest)}`
    ));
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

export function highlight(input) {
  const arrangementState = {
    orderOffset: 0,
    blockOffset: 0,
  };
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
