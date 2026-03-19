import { parseArrangementBody } from "./lib/arrangement.js";
function esc(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function span(cls, value, attrs = {}) {
  const dataAttrs = Object.entries(attrs).map(([key, attrValue]) => {
    const kebabKey = String(key).replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    return ` data-${kebabKey}="${esc(attrValue)}"`;
  }).join("");
  return `<span class="${cls}"${dataAttrs}>${esc(value)}</span>`;
}
function classify(token) {
  if (!token) return null;
  if (token === "<") return "tok-inherit";
  if (token === "%") return "tok-var-ref";
  if (token.charAt(0) === "%") return "tok-var-ref";
  if (/^x\d+$/.test(token)) return "tok-repeat";
  if (/^[x_\-[\]]+$/.test(token)) return "tok-pattern";
  if (/^(?:[a-zA-Z_]\w*)?\(\d+\s*,\s*\d+(?:\s*,\s*-?\d+)?\)$/.test(token)) return "tok-pattern";
  if (/^[a-gA-G][#b]?\d+$/.test(token)) return "tok-note";
  if (token.includes("|")) return "tok-chord";
  if (/^(major|minor|phrygian|dorian|mixolydian|locrian|lydian)$/i.test(token)) return "tok-mode";
  if (/^(?:I|II|III|IV|V|VI|VII|i|ii|iii|iv|v|vi|vii)°?$/.test(token)) return "tok-progression";
  if (/^(?:\+\+|\.\.|>>|\*\*)$/.test(token)) return "tok-operator";
  if (/^#\d+$/.test(token)) return "tok-channel";
  if (/^-?\d+(\.\d+)?$/.test(token)) return "tok-number";
  return null;
}
function renderToken(token) {
  const cls = classify(token);
  if (!cls) return esc(token);
  if (cls === "tok-inherit") return span(cls, token, { inherit: "1" });
  if (cls === "tok-var-ref" && token !== "%") return span(cls, token, { var: token });
  if (cls === "tok-var-ref" && token === "%") return span(cls, token, { repeatLast: "1" });
  if (cls === "tok-channel") return span(cls, token, { instrument: token.slice(1) });
  if (cls === "tok-mode") return span(cls, token, { mode: token.toLowerCase() });
  if (cls === "tok-pattern") {
    const chars = token.split("").map((ch, idx) => `<span class="tok-pattern-step" data-pattern-step="${idx}" data-pattern-char="${esc(ch)}">${esc(ch)}</span>`).join("");
    return `<span class="${cls}" data-pattern="${esc(token)}">${chars}</span>`;
  }
  if (cls === "tok-note") return span(cls, token, { note: token });
  if (cls === "tok-chord") return span(cls, token, { chord: token });
  if (cls === "tok-number") return span(cls, token, { number: token });
  if (cls === "tok-repeat") return span(cls, token, { repeat: token.slice(1) });
  return span(cls, token);
}
function renderArrangementToken(part, tokenMeta) {
  const attrs = {};
  if (tokenMeta && Number.isFinite(tokenMeta.order)) attrs.arrOrder = tokenMeta.order;
  if (tokenMeta && tokenMeta.blockId) attrs.arrBlockId = tokenMeta.blockId;
  if (tokenMeta && tokenMeta.blockLive) attrs.arrBlockLive = "1";
  if (tokenMeta && Number.isFinite(tokenMeta.blockStartOrder)) attrs.arrBlockStartOrder = tokenMeta.blockStartOrder;
  if (tokenMeta && Number.isFinite(tokenMeta.blockEndOrder)) attrs.arrBlockEndOrder = tokenMeta.blockEndOrder;
  if (tokenMeta && tokenMeta.kind === "section") {
    return span("tok-section tok-arr-token", part, { ...attrs, section: part });
  }
  if (tokenMeta && tokenMeta.kind === "repeat-last") {
    return span("tok-var-ref tok-arr-token tok-arr-repeat", part, { ...attrs, repeatLast: "1" });
  }
  if (tokenMeta && tokenMeta.kind === "repeat") {
    const n = /^x(\d+)$/.test(part) ? part.slice(1) : "";
    return span("tok-repeat tok-arr-token tok-arr-repeat", part, { ...attrs, repeat: n });
  }
  if (tokenMeta && (tokenMeta.kind === "block-open" || tokenMeta.kind === "block-close")) {
    return span("tok-operator tok-arr-token tok-arr-bracket", part, attrs);
  }
  return renderToken(part);
}
function isDegreeToken(token) {
  return /^\d+(?:\.\.\d+)?$/.test(token);
}
function renderTokens(text) {
  const parts = text.split(/(\s+)/);
  let degreeContext = false;
  return parts.map((part) => {
    if (/\s+/.test(part) || !part) return part;
    if (degreeContext && isDegreeToken(part)) {
      return span("tok-number tok-degree", part, { degree: part });
    }
    degreeContext = part === "**";
    return renderToken(part);
  }).join("");
}
function splitComment(line) {
  const value = String(line || "");
  const semicolonIndex = value.indexOf(";");
  const dashMatch = value.match(/\s--\s/);
  const dashIndex = dashMatch && typeof dashMatch.index === "number" && /\S/.test(value.slice(0, dashMatch.index)) ? dashMatch.index : -1;
  if (semicolonIndex < 0 && dashIndex < 0) return [value, ""];
  if (semicolonIndex < 0) return [value.slice(0, dashIndex), value.slice(dashIndex)];
  if (dashIndex < 0) return [value.slice(0, semicolonIndex), value.slice(semicolonIndex)];
  const idx = Math.min(semicolonIndex, dashIndex);
  return [value.slice(0, idx), value.slice(idx)];
}
function renderBase(base, arrangementState = null) {
  if (!base.trim()) return esc(base);
  if (/^\s*##\s+/.test(base)) {
    return base.replace(/^(\s*##\s+)(.*)$/, (_, p1, p2) => `${esc(p1)}${span("tok-subtrack", p2)}`);
  }
  if (/^\s*#\s+/.test(base)) {
    return base.replace(/^(\s*#\s+)(.*)$/, (_, p1, p2) => `${esc(p1)}${span("tok-track", p2)}`);
  }
  if (/^\s*@/.test(base)) {
    const inheritMatch = base.match(/^(\s*)(@[^\s]+)(\s*)<(\s*)([^\s]+)(.*)$/);
    if (inheritMatch) {
      const [, indent, sourceToken, leftGap, rightGap, targetToken, rest] = inheritMatch;
      const sourceName = sourceToken.slice(1);
      return `${esc(indent)}${span("tok-section-head", sourceToken, { sectionHead: sourceName })}${esc(leftGap)}${span("tok-inherit", "<", {
        inherit: "1",
        inheritSource: sourceName,
        inheritTarget: targetToken
      })}${esc(rightGap)}${esc(targetToken)}${renderTokens(rest)}`;
    }
    const headerMatch = base.match(/^(\s*)(@[^\s]+)(.*)$/);
    if (headerMatch) {
      const [, indent, sourceToken, rest] = headerMatch;
      const sourceName = sourceToken.slice(1);
      return `${esc(indent)}${span("tok-section-head", sourceToken, { sectionHead: sourceName })}${renderTokens(rest)}`;
    }
    return renderTokens(base);
  }
  if (/^\s*>/.test(base)) {
    const indent = esc(base.match(/^\s*/)[0]);
    const tail = base.trimStart().slice(1);
    const lead = tail.match(/^\s*/)[0] || "";
    const body = tail.slice(lead.length);
    const parsed = parseArrangementBody(body, arrangementState ? {
      orderOffset: arrangementState.orderOffset,
      blockOffset: arrangementState.blockOffset
    } : void 0);
    if (arrangementState) {
      arrangementState.orderOffset = parsed.nextOrder;
      arrangementState.blockOffset = parsed.nextBlock;
    }
    let tokenIndex = 0;
    const rendered = (body.match(/\s+|\[|\]|[^\s\[\]]+/g) || []).map((part) => {
      if (!part || /^\s+$/.test(part)) return part;
      const tokenMeta = parsed.tokens[tokenIndex] || null;
      tokenIndex += 1;
      return renderArrangementToken(part, tokenMeta);
    }).join("");
    return `${indent}${span("tok-arrangement", ">")}${esc(lead)}${rendered}`;
  }
  if (/^\s*%[^\s]+\s+/.test(base)) {
    return base.replace(/^(\s*)(%[^\s]+)(\s*)(.*)$/, (_, i, v, s, rest) => `${esc(i)}${span("tok-var-def", v, { var: v })}${esc(s)}${renderTokens(rest)}`);
  }
  if (/^\s*#\d+/.test(base)) {
    let velocityTagged = false;
    return base.split(/(\s+)/).map((part) => {
      if (/^\s*$/.test(part)) return part;
      const cls = classify(part);
      if (cls === "tok-number" && !velocityTagged) {
        velocityTagged = true;
        return span(cls, part, { velocity: part });
      }
      return renderToken(part);
    }).join("");
  }
  return renderTokens(base);
}
function highlight(input) {
  const arrangementState = {
    orderOffset: 0,
    blockOffset: 0
  };
  return String(input || "").split(/\r?\n/).map((line, lineNumber) => {
    const [base, comment] = splitComment(line);
    const rendered = renderBase(base, arrangementState);
    const content = !comment ? rendered : `${rendered}${span("tok-comment", comment)}`;
    return `<span class="hl-line" data-line="${lineNumber}">${content}</span>`;
  }).join("");
}
export {
  classify,
  highlight
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3NyYy9oaWdobGlnaHQuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IHBhcnNlQXJyYW5nZW1lbnRCb2R5IH0gZnJvbSAnLi9saWIvYXJyYW5nZW1lbnQuanMnO1xuXG5mdW5jdGlvbiBlc2ModmFsdWUpIHtcbiAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcbiAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xufVxuXG5mdW5jdGlvbiBzcGFuKGNscywgdmFsdWUsIGF0dHJzID0ge30pIHtcbiAgY29uc3QgZGF0YUF0dHJzID0gT2JqZWN0LmVudHJpZXMoYXR0cnMpXG4gICAgLm1hcCgoW2tleSwgYXR0clZhbHVlXSkgPT4ge1xuICAgICAgY29uc3Qga2ViYWJLZXkgPSBTdHJpbmcoa2V5KS5yZXBsYWNlKC9bQS1aXS9nLCBsZXR0ZXIgPT4gYC0ke2xldHRlci50b0xvd2VyQ2FzZSgpfWApO1xuICAgICAgcmV0dXJuIGAgZGF0YS0ke2tlYmFiS2V5fT1cIiR7ZXNjKGF0dHJWYWx1ZSl9XCJgO1xuICAgIH0pXG4gICAgLmpvaW4oJycpO1xuICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtjbHN9XCIke2RhdGFBdHRyc30+JHtlc2ModmFsdWUpfTwvc3Bhbj5gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnkodG9rZW4pIHtcbiAgaWYgKCF0b2tlbikgcmV0dXJuIG51bGw7XG4gIGlmICh0b2tlbiA9PT0gJzwnKSByZXR1cm4gJ3Rvay1pbmhlcml0JztcbiAgaWYgKHRva2VuID09PSAnJScpIHJldHVybiAndG9rLXZhci1yZWYnO1xuICBpZiAodG9rZW4uY2hhckF0KDApID09PSAnJScpIHJldHVybiAndG9rLXZhci1yZWYnO1xuICBpZiAoL154XFxkKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1yZXBlYXQnO1xuICBpZiAoL15beF9cXC1bXFxdXSskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcGF0dGVybic7XG4gIGlmICgvXig/OlthLXpBLVpfXVxcdyopP1xcKFxcZCtcXHMqLFxccypcXGQrKD86XFxzKixcXHMqLT9cXGQrKT9cXCkkLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcGF0dGVybic7XG4gIGlmICgvXlthLWdBLUddWyNiXT9cXGQrJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW5vdGUnO1xuICBpZiAodG9rZW4uaW5jbHVkZXMoJ3wnKSkgcmV0dXJuICd0b2stY2hvcmQnO1xuICBpZiAoL14obWFqb3J8bWlub3J8cGhyeWdpYW58ZG9yaWFufG1peG9seWRpYW58bG9jcmlhbnxseWRpYW4pJC9pLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1tb2RlJztcbiAgaWYgKC9eKD86SXxJSXxJSUl8SVZ8VnxWSXxWSUl8aXxpaXxpaWl8aXZ8dnx2aXx2aWkpXHUwMEIwPyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1wcm9ncmVzc2lvbic7XG4gIGlmICgvXig/OlxcK1xcK3xcXC5cXC58Pj58XFwqXFwqKSQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1vcGVyYXRvcic7XG4gIGlmICgvXiNcXGQrJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLWNoYW5uZWwnO1xuICBpZiAoL14tP1xcZCsoXFwuXFxkKyk/JC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW51bWJlcic7XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2tlbih0b2tlbikge1xuICBjb25zdCBjbHMgPSBjbGFzc2lmeSh0b2tlbik7XG4gIGlmICghY2xzKSByZXR1cm4gZXNjKHRva2VuKTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1pbmhlcml0JykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBpbmhlcml0OiAnMScgfSk7XG4gIGlmIChjbHMgPT09ICd0b2stdmFyLXJlZicgJiYgdG9rZW4gIT09ICclJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyB2YXI6IHRva2VuIH0pO1xuICBpZiAoY2xzID09PSAndG9rLXZhci1yZWYnICYmIHRva2VuID09PSAnJScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgcmVwZWF0TGFzdDogJzEnIH0pO1xuICBpZiAoY2xzID09PSAndG9rLWNoYW5uZWwnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IGluc3RydW1lbnQ6IHRva2VuLnNsaWNlKDEpIH0pO1xuICBpZiAoY2xzID09PSAndG9rLW1vZGUnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IG1vZGU6IHRva2VuLnRvTG93ZXJDYXNlKCkgfSk7XG4gIGlmIChjbHMgPT09ICd0b2stcGF0dGVybicpIHtcbiAgICBjb25zdCBjaGFycyA9IHRva2VuXG4gICAgICAuc3BsaXQoJycpXG4gICAgICAubWFwKChjaCwgaWR4KSA9PiBgPHNwYW4gY2xhc3M9XCJ0b2stcGF0dGVybi1zdGVwXCIgZGF0YS1wYXR0ZXJuLXN0ZXA9XCIke2lkeH1cIiBkYXRhLXBhdHRlcm4tY2hhcj1cIiR7ZXNjKGNoKX1cIj4ke2VzYyhjaCl9PC9zcGFuPmApXG4gICAgICAuam9pbignJyk7XG4gICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cIiR7Y2xzfVwiIGRhdGEtcGF0dGVybj1cIiR7ZXNjKHRva2VuKX1cIj4ke2NoYXJzfTwvc3Bhbj5gO1xuICB9XG4gIGlmIChjbHMgPT09ICd0b2stbm90ZScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgbm90ZTogdG9rZW4gfSk7XG4gIGlmIChjbHMgPT09ICd0b2stY2hvcmQnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IGNob3JkOiB0b2tlbiB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1udW1iZXInKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IG51bWJlcjogdG9rZW4gfSk7XG4gIGlmIChjbHMgPT09ICd0b2stcmVwZWF0JykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyByZXBlYXQ6IHRva2VuLnNsaWNlKDEpIH0pO1xuICByZXR1cm4gc3BhbihjbHMsIHRva2VuKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQXJyYW5nZW1lbnRUb2tlbihwYXJ0LCB0b2tlbk1ldGEpIHtcbiAgY29uc3QgYXR0cnMgPSB7fTtcbiAgaWYgKHRva2VuTWV0YSAmJiBOdW1iZXIuaXNGaW5pdGUodG9rZW5NZXRhLm9yZGVyKSkgYXR0cnMuYXJyT3JkZXIgPSB0b2tlbk1ldGEub3JkZXI7XG4gIGlmICh0b2tlbk1ldGEgJiYgdG9rZW5NZXRhLmJsb2NrSWQpIGF0dHJzLmFyckJsb2NrSWQgPSB0b2tlbk1ldGEuYmxvY2tJZDtcbiAgaWYgKHRva2VuTWV0YSAmJiB0b2tlbk1ldGEuYmxvY2tMaXZlKSBhdHRycy5hcnJCbG9ja0xpdmUgPSAnMSc7XG4gIGlmICh0b2tlbk1ldGEgJiYgTnVtYmVyLmlzRmluaXRlKHRva2VuTWV0YS5ibG9ja1N0YXJ0T3JkZXIpKSBhdHRycy5hcnJCbG9ja1N0YXJ0T3JkZXIgPSB0b2tlbk1ldGEuYmxvY2tTdGFydE9yZGVyO1xuICBpZiAodG9rZW5NZXRhICYmIE51bWJlci5pc0Zpbml0ZSh0b2tlbk1ldGEuYmxvY2tFbmRPcmRlcikpIGF0dHJzLmFyckJsb2NrRW5kT3JkZXIgPSB0b2tlbk1ldGEuYmxvY2tFbmRPcmRlcjtcblxuICBpZiAodG9rZW5NZXRhICYmIHRva2VuTWV0YS5raW5kID09PSAnc2VjdGlvbicpIHtcbiAgICByZXR1cm4gc3BhbigndG9rLXNlY3Rpb24gdG9rLWFyci10b2tlbicsIHBhcnQsIHsgLi4uYXR0cnMsIHNlY3Rpb246IHBhcnQgfSk7XG4gIH1cbiAgaWYgKHRva2VuTWV0YSAmJiB0b2tlbk1ldGEua2luZCA9PT0gJ3JlcGVhdC1sYXN0Jykge1xuICAgIHJldHVybiBzcGFuKCd0b2stdmFyLXJlZiB0b2stYXJyLXRva2VuIHRvay1hcnItcmVwZWF0JywgcGFydCwgeyAuLi5hdHRycywgcmVwZWF0TGFzdDogJzEnIH0pO1xuICB9XG4gIGlmICh0b2tlbk1ldGEgJiYgdG9rZW5NZXRhLmtpbmQgPT09ICdyZXBlYXQnKSB7XG4gICAgY29uc3QgbiA9IC9eeChcXGQrKSQvLnRlc3QocGFydCkgPyBwYXJ0LnNsaWNlKDEpIDogJyc7XG4gICAgcmV0dXJuIHNwYW4oJ3Rvay1yZXBlYXQgdG9rLWFyci10b2tlbiB0b2stYXJyLXJlcGVhdCcsIHBhcnQsIHsgLi4uYXR0cnMsIHJlcGVhdDogbiB9KTtcbiAgfVxuICBpZiAodG9rZW5NZXRhICYmICh0b2tlbk1ldGEua2luZCA9PT0gJ2Jsb2NrLW9wZW4nIHx8IHRva2VuTWV0YS5raW5kID09PSAnYmxvY2stY2xvc2UnKSkge1xuICAgIHJldHVybiBzcGFuKCd0b2stb3BlcmF0b3IgdG9rLWFyci10b2tlbiB0b2stYXJyLWJyYWNrZXQnLCBwYXJ0LCBhdHRycyk7XG4gIH1cbiAgcmV0dXJuIHJlbmRlclRva2VuKHBhcnQpO1xufVxuXG5mdW5jdGlvbiBpc0RlZ3JlZVRva2VuKHRva2VuKSB7XG4gIHJldHVybiAvXlxcZCsoPzpcXC5cXC5cXGQrKT8kLy50ZXN0KHRva2VuKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9rZW5zKHRleHQpIHtcbiAgY29uc3QgcGFydHMgPSB0ZXh0LnNwbGl0KC8oXFxzKykvKTtcbiAgbGV0IGRlZ3JlZUNvbnRleHQgPSBmYWxzZTtcblxuICByZXR1cm4gcGFydHMubWFwKHBhcnQgPT4ge1xuICAgIGlmICgvXFxzKy8udGVzdChwYXJ0KSB8fCAhcGFydCkgcmV0dXJuIHBhcnQ7XG5cbiAgICBpZiAoZGVncmVlQ29udGV4dCAmJiBpc0RlZ3JlZVRva2VuKHBhcnQpKSB7XG4gICAgICByZXR1cm4gc3BhbigndG9rLW51bWJlciB0b2stZGVncmVlJywgcGFydCwgeyBkZWdyZWU6IHBhcnQgfSk7XG4gICAgfVxuXG4gICAgZGVncmVlQ29udGV4dCA9IHBhcnQgPT09ICcqKic7XG4gICAgcmV0dXJuIHJlbmRlclRva2VuKHBhcnQpO1xuICB9KS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gc3BsaXRDb21tZW50KGxpbmUpIHtcbiAgY29uc3QgdmFsdWUgPSBTdHJpbmcobGluZSB8fCAnJyk7XG4gIGNvbnN0IHNlbWljb2xvbkluZGV4ID0gdmFsdWUuaW5kZXhPZignOycpO1xuICBjb25zdCBkYXNoTWF0Y2ggPSB2YWx1ZS5tYXRjaCgvXFxzLS1cXHMvKTtcbiAgY29uc3QgZGFzaEluZGV4ID0gZGFzaE1hdGNoICYmIHR5cGVvZiBkYXNoTWF0Y2guaW5kZXggPT09ICdudW1iZXInICYmIC9cXFMvLnRlc3QodmFsdWUuc2xpY2UoMCwgZGFzaE1hdGNoLmluZGV4KSlcbiAgICA/IGRhc2hNYXRjaC5pbmRleFxuICAgIDogLTE7XG5cbiAgaWYgKHNlbWljb2xvbkluZGV4IDwgMCAmJiBkYXNoSW5kZXggPCAwKSByZXR1cm4gW3ZhbHVlLCAnJ107XG4gIGlmIChzZW1pY29sb25JbmRleCA8IDApIHJldHVybiBbdmFsdWUuc2xpY2UoMCwgZGFzaEluZGV4KSwgdmFsdWUuc2xpY2UoZGFzaEluZGV4KV07XG4gIGlmIChkYXNoSW5kZXggPCAwKSByZXR1cm4gW3ZhbHVlLnNsaWNlKDAsIHNlbWljb2xvbkluZGV4KSwgdmFsdWUuc2xpY2Uoc2VtaWNvbG9uSW5kZXgpXTtcbiAgY29uc3QgaWR4ID0gTWF0aC5taW4oc2VtaWNvbG9uSW5kZXgsIGRhc2hJbmRleCk7XG4gIHJldHVybiBbdmFsdWUuc2xpY2UoMCwgaWR4KSwgdmFsdWUuc2xpY2UoaWR4KV07XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJhc2UoYmFzZSwgYXJyYW5nZW1lbnRTdGF0ZSA9IG51bGwpIHtcbiAgaWYgKCFiYXNlLnRyaW0oKSkgcmV0dXJuIGVzYyhiYXNlKTtcblxuICBpZiAoL15cXHMqIyNcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqIyNcXHMrKSguKikkLywgKF8sIHAxLCBwMikgPT4gYCR7ZXNjKHAxKX0ke3NwYW4oJ3Rvay1zdWJ0cmFjaycsIHAyKX1gKTtcbiAgfVxuICBpZiAoL15cXHMqI1xccysvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC9eKFxccyojXFxzKykoLiopJC8sIChfLCBwMSwgcDIpID0+IGAke2VzYyhwMSl9JHtzcGFuKCd0b2stdHJhY2snLCBwMil9YCk7XG4gIH1cbiAgaWYgKC9eXFxzKkAvLnRlc3QoYmFzZSkpIHtcbiAgICBjb25zdCBpbmhlcml0TWF0Y2ggPSBiYXNlLm1hdGNoKC9eKFxccyopKEBbXlxcc10rKShcXHMqKTwoXFxzKikoW15cXHNdKykoLiopJC8pO1xuICAgIGlmIChpbmhlcml0TWF0Y2gpIHtcbiAgICAgIGNvbnN0IFssIGluZGVudCwgc291cmNlVG9rZW4sIGxlZnRHYXAsIHJpZ2h0R2FwLCB0YXJnZXRUb2tlbiwgcmVzdF0gPSBpbmhlcml0TWF0Y2g7XG4gICAgICBjb25zdCBzb3VyY2VOYW1lID0gc291cmNlVG9rZW4uc2xpY2UoMSk7XG4gICAgICByZXR1cm4gYCR7ZXNjKGluZGVudCl9JHtzcGFuKCd0b2stc2VjdGlvbi1oZWFkJywgc291cmNlVG9rZW4sIHsgc2VjdGlvbkhlYWQ6IHNvdXJjZU5hbWUgfSl9JHtlc2MobGVmdEdhcCl9JHtzcGFuKCd0b2staW5oZXJpdCcsICc8Jywge1xuICAgICAgICBpbmhlcml0OiAnMScsXG4gICAgICAgIGluaGVyaXRTb3VyY2U6IHNvdXJjZU5hbWUsXG4gICAgICAgIGluaGVyaXRUYXJnZXQ6IHRhcmdldFRva2VuLFxuICAgICAgfSl9JHtlc2MocmlnaHRHYXApfSR7ZXNjKHRhcmdldFRva2VuKX0ke3JlbmRlclRva2VucyhyZXN0KX1gO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXJNYXRjaCA9IGJhc2UubWF0Y2goL14oXFxzKikoQFteXFxzXSspKC4qKSQvKTtcbiAgICBpZiAoaGVhZGVyTWF0Y2gpIHtcbiAgICAgIGNvbnN0IFssIGluZGVudCwgc291cmNlVG9rZW4sIHJlc3RdID0gaGVhZGVyTWF0Y2g7XG4gICAgICBjb25zdCBzb3VyY2VOYW1lID0gc291cmNlVG9rZW4uc2xpY2UoMSk7XG4gICAgICByZXR1cm4gYCR7ZXNjKGluZGVudCl9JHtzcGFuKCd0b2stc2VjdGlvbi1oZWFkJywgc291cmNlVG9rZW4sIHsgc2VjdGlvbkhlYWQ6IHNvdXJjZU5hbWUgfSl9JHtyZW5kZXJUb2tlbnMocmVzdCl9YDtcbiAgICB9XG4gICAgcmV0dXJuIHJlbmRlclRva2VucyhiYXNlKTtcbiAgfVxuICBpZiAoL15cXHMqPi8udGVzdChiYXNlKSkge1xuICAgIGNvbnN0IGluZGVudCA9IGVzYyhiYXNlLm1hdGNoKC9eXFxzKi8pWzBdKTtcbiAgICBjb25zdCB0YWlsID0gYmFzZS50cmltU3RhcnQoKS5zbGljZSgxKTtcbiAgICBjb25zdCBsZWFkID0gdGFpbC5tYXRjaCgvXlxccyovKVswXSB8fCAnJztcbiAgICBjb25zdCBib2R5ID0gdGFpbC5zbGljZShsZWFkLmxlbmd0aCk7XG4gICAgY29uc3QgcGFyc2VkID0gcGFyc2VBcnJhbmdlbWVudEJvZHkoYm9keSwgYXJyYW5nZW1lbnRTdGF0ZSA/IHtcbiAgICAgIG9yZGVyT2Zmc2V0OiBhcnJhbmdlbWVudFN0YXRlLm9yZGVyT2Zmc2V0LFxuICAgICAgYmxvY2tPZmZzZXQ6IGFycmFuZ2VtZW50U3RhdGUuYmxvY2tPZmZzZXQsXG4gICAgfSA6IHVuZGVmaW5lZCk7XG4gICAgaWYgKGFycmFuZ2VtZW50U3RhdGUpIHtcbiAgICAgIGFycmFuZ2VtZW50U3RhdGUub3JkZXJPZmZzZXQgPSBwYXJzZWQubmV4dE9yZGVyO1xuICAgICAgYXJyYW5nZW1lbnRTdGF0ZS5ibG9ja09mZnNldCA9IHBhcnNlZC5uZXh0QmxvY2s7XG4gICAgfVxuICAgIGxldCB0b2tlbkluZGV4ID0gMDtcbiAgICBjb25zdCByZW5kZXJlZCA9IChib2R5Lm1hdGNoKC9cXHMrfFxcW3xcXF18W15cXHNcXFtcXF1dKy9nKSB8fCBbXSlcbiAgICAgIC5tYXAocGFydCA9PiB7XG4gICAgICAgIGlmICghcGFydCB8fCAvXlxccyskLy50ZXN0KHBhcnQpKSByZXR1cm4gcGFydDtcbiAgICAgICAgY29uc3QgdG9rZW5NZXRhID0gcGFyc2VkLnRva2Vuc1t0b2tlbkluZGV4XSB8fCBudWxsO1xuICAgICAgICB0b2tlbkluZGV4ICs9IDE7XG4gICAgICAgIHJldHVybiByZW5kZXJBcnJhbmdlbWVudFRva2VuKHBhcnQsIHRva2VuTWV0YSk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpO1xuICAgIHJldHVybiBgJHtpbmRlbnR9JHtzcGFuKCd0b2stYXJyYW5nZW1lbnQnLCAnPicpfSR7ZXNjKGxlYWQpfSR7cmVuZGVyZWR9YDtcbiAgfVxuICBpZiAoL15cXHMqJVteXFxzXStcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqKSglW15cXHNdKykoXFxzKikoLiopJC8sIChfLCBpLCB2LCBzLCByZXN0KSA9PiAoXG4gICAgICBgJHtlc2MoaSl9JHtzcGFuKCd0b2stdmFyLWRlZicsIHYsIHsgdmFyOiB2IH0pfSR7ZXNjKHMpfSR7cmVuZGVyVG9rZW5zKHJlc3QpfWBcbiAgICApKTtcbiAgfVxuICBpZiAoL15cXHMqI1xcZCsvLnRlc3QoYmFzZSkpIHtcbiAgICBsZXQgdmVsb2NpdHlUYWdnZWQgPSBmYWxzZTtcbiAgICByZXR1cm4gYmFzZS5zcGxpdCgvKFxccyspLykubWFwKHBhcnQgPT4ge1xuICAgICAgaWYgKC9eXFxzKiQvLnRlc3QocGFydCkpIHJldHVybiBwYXJ0O1xuICAgICAgY29uc3QgY2xzID0gY2xhc3NpZnkocGFydCk7XG4gICAgICBpZiAoY2xzID09PSAndG9rLW51bWJlcicgJiYgIXZlbG9jaXR5VGFnZ2VkKSB7XG4gICAgICAgIHZlbG9jaXR5VGFnZ2VkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHNwYW4oY2xzLCBwYXJ0LCB7IHZlbG9jaXR5OiBwYXJ0IH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlbmRlclRva2VuKHBhcnQpO1xuICAgIH0pLmpvaW4oJycpO1xuICB9XG4gIHJldHVybiByZW5kZXJUb2tlbnMoYmFzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWdobGlnaHQoaW5wdXQpIHtcbiAgY29uc3QgYXJyYW5nZW1lbnRTdGF0ZSA9IHtcbiAgICBvcmRlck9mZnNldDogMCxcbiAgICBibG9ja09mZnNldDogMCxcbiAgfTtcbiAgcmV0dXJuIFN0cmluZyhpbnB1dCB8fCAnJylcbiAgICAuc3BsaXQoL1xccj9cXG4vKVxuICAgIC5tYXAoKGxpbmUsIGxpbmVOdW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IFtiYXNlLCBjb21tZW50XSA9IHNwbGl0Q29tbWVudChsaW5lKTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkID0gcmVuZGVyQmFzZShiYXNlLCBhcnJhbmdlbWVudFN0YXRlKTtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSAhY29tbWVudCA/IHJlbmRlcmVkIDogYCR7cmVuZGVyZWR9JHtzcGFuKCd0b2stY29tbWVudCcsIGNvbW1lbnQpfWA7XG4gICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiaGwtbGluZVwiIGRhdGEtbGluZT1cIiR7bGluZU51bWJlcn1cIj4ke2NvbnRlbnR9PC9zcGFuPmA7XG4gICAgfSlcbiAgICAuam9pbignJyk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiQUFBQSxTQUFTLDRCQUE0QjtBQUVyQyxTQUFTLElBQUksT0FBTztBQUNsQixTQUFPLE9BQU8sS0FBSyxFQUNoQixRQUFRLE1BQU0sT0FBTyxFQUNyQixRQUFRLE1BQU0sTUFBTSxFQUNwQixRQUFRLE1BQU0sTUFBTTtBQUN6QjtBQUVBLFNBQVMsS0FBSyxLQUFLLE9BQU8sUUFBUSxDQUFDLEdBQUc7QUFDcEMsUUFBTSxZQUFZLE9BQU8sUUFBUSxLQUFLLEVBQ25DLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxNQUFNO0FBQ3pCLFVBQU0sV0FBVyxPQUFPLEdBQUcsRUFBRSxRQUFRLFVBQVUsWUFBVSxJQUFJLE9BQU8sWUFBWSxDQUFDLEVBQUU7QUFDbkYsV0FBTyxTQUFTLFFBQVEsS0FB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
