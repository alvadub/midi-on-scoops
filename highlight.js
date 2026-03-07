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
function renderTokens(text) {
  return text.split(/(\s+)/).map((part) => /\s+/.test(part) ? part : renderToken(part)).join("");
}
function splitComment(line) {
  const idx = line.indexOf(";");
  if (idx < 0) return [line, ""];
  return [line.slice(0, idx), line.slice(idx)];
}
function renderBase(base) {
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
    const body = base.trimStart().slice(1).replace(/^\s*/, " ");
    const rendered = body.split(/(\s+)/).map((part) => {
      if (!part || /\s+/.test(part)) return part;
      if (/^[A-Z][A-Z0-9]*$/.test(part)) return span("tok-section tok-arr-token", part, { section: part });
      if (part === "%") return span("tok-var-ref tok-arr-token tok-arr-repeat", part, { repeatLast: "1" });
      if (/^x\d+$/.test(part)) return span("tok-repeat tok-arr-token tok-arr-repeat", part, { repeat: part.slice(1) });
      return renderToken(part);
    }).join("");
    return `${indent}${span("tok-arrangement", ">")}${rendered}`;
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
  return String(input || "").split(/\r?\n/).map((line, lineNumber) => {
    const [base, comment] = splitComment(line);
    const rendered = renderBase(base);
    const content = !comment ? rendered : `${rendered}${span("tok-comment", comment)}`;
    return `<span class="hl-line" data-line="${lineNumber}">${content}</span>`;
  }).join("");
}
Object.assign(module.exports,{classify,highlight});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3NyYy9oaWdobGlnaHQuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImZ1bmN0aW9uIGVzYyh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5cbmZ1bmN0aW9uIHNwYW4oY2xzLCB2YWx1ZSwgYXR0cnMgPSB7fSkge1xuICBjb25zdCBkYXRhQXR0cnMgPSBPYmplY3QuZW50cmllcyhhdHRycylcbiAgICAubWFwKChba2V5LCBhdHRyVmFsdWVdKSA9PiB7XG4gICAgICBjb25zdCBrZWJhYktleSA9IFN0cmluZyhrZXkpLnJlcGxhY2UoL1tBLVpdL2csIGxldHRlciA9PiBgLSR7bGV0dGVyLnRvTG93ZXJDYXNlKCl9YCk7XG4gICAgICByZXR1cm4gYCBkYXRhLSR7a2ViYWJLZXl9PVwiJHtlc2MoYXR0clZhbHVlKX1cImA7XG4gICAgfSlcbiAgICAuam9pbignJyk7XG4gIHJldHVybiBgPHNwYW4gY2xhc3M9XCIke2Nsc31cIiR7ZGF0YUF0dHJzfT4ke2VzYyh2YWx1ZSl9PC9zcGFuPmA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeSh0b2tlbikge1xuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcbiAgaWYgKHRva2VuID09PSAnPCcpIHJldHVybiAndG9rLWluaGVyaXQnO1xuICBpZiAodG9rZW4gPT09ICclJykgcmV0dXJuICd0b2stdmFyLXJlZic7XG4gIGlmICh0b2tlbi5jaGFyQXQoMCkgPT09ICclJykgcmV0dXJuICd0b2stdmFyLXJlZic7XG4gIGlmICgvXnhcXGQrJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLXJlcGVhdCc7XG4gIGlmICgvXlt4X1xcLVtcXF1dKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1wYXR0ZXJuJztcbiAgaWYgKC9eKD86W2EtekEtWl9dXFx3Kik/XFwoXFxkK1xccyosXFxzKlxcZCsoPzpcXHMqLFxccyotP1xcZCspP1xcKSQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1wYXR0ZXJuJztcbiAgaWYgKC9eW2EtZ0EtR11bI2JdP1xcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stbm90ZSc7XG4gIGlmICh0b2tlbi5pbmNsdWRlcygnfCcpKSByZXR1cm4gJ3Rvay1jaG9yZCc7XG4gIGlmICgvXihtYWpvcnxtaW5vcnxwaHJ5Z2lhbnxkb3JpYW58bWl4b2x5ZGlhbnxsb2NyaWFufGx5ZGlhbikkL2kudGVzdCh0b2tlbikpIHJldHVybiAndG9rLW1vZGUnO1xuICBpZiAoL14oPzpJfElJfElJSXxJVnxWfFZJfFZJSXxpfGlpfGlpaXxpdnx2fHZpfHZpaSlcdTAwQjA/JC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLXByb2dyZXNzaW9uJztcbiAgaWYgKC9eKD86XFwrXFwrfFxcLlxcLnw+PnxcXCpcXCopJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW9wZXJhdG9yJztcbiAgaWYgKC9eI1xcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stY2hhbm5lbCc7XG4gIGlmICgvXi0/XFxkKyhcXC5cXGQrKT8kLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stbnVtYmVyJztcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRva2VuKHRva2VuKSB7XG4gIGNvbnN0IGNscyA9IGNsYXNzaWZ5KHRva2VuKTtcbiAgaWYgKCFjbHMpIHJldHVybiBlc2ModG9rZW4pO1xuICBpZiAoY2xzID09PSAndG9rLWluaGVyaXQnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IGluaGVyaXQ6ICcxJyB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay12YXItcmVmJyAmJiB0b2tlbiAhPT0gJyUnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IHZhcjogdG9rZW4gfSk7XG4gIGlmIChjbHMgPT09ICd0b2stdmFyLXJlZicgJiYgdG9rZW4gPT09ICclJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyByZXBlYXRMYXN0OiAnMScgfSk7XG4gIGlmIChjbHMgPT09ICd0b2stY2hhbm5lbCcpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgaW5zdHJ1bWVudDogdG9rZW4uc2xpY2UoMSkgfSk7XG4gIGlmIChjbHMgPT09ICd0b2stbW9kZScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgbW9kZTogdG9rZW4udG9Mb3dlckNhc2UoKSB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1wYXR0ZXJuJykge1xuICAgIGNvbnN0IGNoYXJzID0gdG9rZW5cbiAgICAgIC5zcGxpdCgnJylcbiAgICAgIC5tYXAoKGNoLCBpZHgpID0+IGA8c3BhbiBjbGFzcz1cInRvay1wYXR0ZXJuLXN0ZXBcIiBkYXRhLXBhdHRlcm4tc3RlcD1cIiR7aWR4fVwiIGRhdGEtcGF0dGVybi1jaGFyPVwiJHtlc2MoY2gpfVwiPiR7ZXNjKGNoKX08L3NwYW4+YClcbiAgICAgIC5qb2luKCcnKTtcbiAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtjbHN9XCIgZGF0YS1wYXR0ZXJuPVwiJHtlc2ModG9rZW4pfVwiPiR7Y2hhcnN9PC9zcGFuPmA7XG4gIH1cbiAgaWYgKGNscyA9PT0gJ3Rvay1ub3RlJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBub3RlOiB0b2tlbiB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1jaG9yZCcpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgY2hvcmQ6IHRva2VuIH0pO1xuICBpZiAoY2xzID09PSAndG9rLW51bWJlcicpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgbnVtYmVyOiB0b2tlbiB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1yZXBlYXQnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IHJlcGVhdDogdG9rZW4uc2xpY2UoMSkgfSk7XG4gIHJldHVybiBzcGFuKGNscywgdG9rZW4pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2tlbnModGV4dCkge1xuICByZXR1cm4gdGV4dFxuICAgIC5zcGxpdCgvKFxccyspLylcbiAgICAubWFwKHBhcnQgPT4gKC9cXHMrLy50ZXN0KHBhcnQpID8gcGFydCA6IHJlbmRlclRva2VuKHBhcnQpKSlcbiAgICAuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIHNwbGl0Q29tbWVudChsaW5lKSB7XG4gIGNvbnN0IGlkeCA9IGxpbmUuaW5kZXhPZignOycpO1xuICBpZiAoaWR4IDwgMCkgcmV0dXJuIFtsaW5lLCAnJ107XG4gIHJldHVybiBbbGluZS5zbGljZSgwLCBpZHgpLCBsaW5lLnNsaWNlKGlkeCldO1xufVxuXG5mdW5jdGlvbiByZW5kZXJCYXNlKGJhc2UpIHtcbiAgaWYgKCFiYXNlLnRyaW0oKSkgcmV0dXJuIGVzYyhiYXNlKTtcblxuICBpZiAoL15cXHMqIyNcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqIyNcXHMrKSguKikkLywgKF8sIHAxLCBwMikgPT4gYCR7ZXNjKHAxKX0ke3NwYW4oJ3Rvay1zdWJ0cmFjaycsIHAyKX1gKTtcbiAgfVxuICBpZiAoL15cXHMqI1xccysvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC9eKFxccyojXFxzKykoLiopJC8sIChfLCBwMSwgcDIpID0+IGAke2VzYyhwMSl9JHtzcGFuKCd0b2stdHJhY2snLCBwMil9YCk7XG4gIH1cbiAgaWYgKC9eXFxzKkAvLnRlc3QoYmFzZSkpIHtcbiAgICBjb25zdCBpbmhlcml0TWF0Y2ggPSBiYXNlLm1hdGNoKC9eKFxccyopKEBbXlxcc10rKShcXHMqKTwoXFxzKikoW15cXHNdKykoLiopJC8pO1xuICAgIGlmIChpbmhlcml0TWF0Y2gpIHtcbiAgICAgIGNvbnN0IFssIGluZGVudCwgc291cmNlVG9rZW4sIGxlZnRHYXAsIHJpZ2h0R2FwLCB0YXJnZXRUb2tlbiwgcmVzdF0gPSBpbmhlcml0TWF0Y2g7XG4gICAgICBjb25zdCBzb3VyY2VOYW1lID0gc291cmNlVG9rZW4uc2xpY2UoMSk7XG4gICAgICByZXR1cm4gYCR7ZXNjKGluZGVudCl9JHtzcGFuKCd0b2stc2VjdGlvbi1oZWFkJywgc291cmNlVG9rZW4sIHsgc2VjdGlvbkhlYWQ6IHNvdXJjZU5hbWUgfSl9JHtlc2MobGVmdEdhcCl9JHtzcGFuKCd0b2staW5oZXJpdCcsICc8Jywge1xuICAgICAgICBpbmhlcml0OiAnMScsXG4gICAgICAgIGluaGVyaXRTb3VyY2U6IHNvdXJjZU5hbWUsXG4gICAgICAgIGluaGVyaXRUYXJnZXQ6IHRhcmdldFRva2VuLFxuICAgICAgfSl9JHtlc2MocmlnaHRHYXApfSR7ZXNjKHRhcmdldFRva2VuKX0ke3JlbmRlclRva2VucyhyZXN0KX1gO1xuICAgIH1cbiAgICBjb25zdCBoZWFkZXJNYXRjaCA9IGJhc2UubWF0Y2goL14oXFxzKikoQFteXFxzXSspKC4qKSQvKTtcbiAgICBpZiAoaGVhZGVyTWF0Y2gpIHtcbiAgICAgIGNvbnN0IFssIGluZGVudCwgc291cmNlVG9rZW4sIHJlc3RdID0gaGVhZGVyTWF0Y2g7XG4gICAgICBjb25zdCBzb3VyY2VOYW1lID0gc291cmNlVG9rZW4uc2xpY2UoMSk7XG4gICAgICByZXR1cm4gYCR7ZXNjKGluZGVudCl9JHtzcGFuKCd0b2stc2VjdGlvbi1oZWFkJywgc291cmNlVG9rZW4sIHsgc2VjdGlvbkhlYWQ6IHNvdXJjZU5hbWUgfSl9JHtyZW5kZXJUb2tlbnMocmVzdCl9YDtcbiAgICB9XG4gICAgcmV0dXJuIHJlbmRlclRva2VucyhiYXNlKTtcbiAgfVxuICBpZiAoL15cXHMqPi8udGVzdChiYXNlKSkge1xuICAgIGNvbnN0IGluZGVudCA9IGVzYyhiYXNlLm1hdGNoKC9eXFxzKi8pWzBdKTtcbiAgICBjb25zdCBib2R5ID0gYmFzZS50cmltU3RhcnQoKS5zbGljZSgxKS5yZXBsYWNlKC9eXFxzKi8sICcgJyk7XG4gICAgY29uc3QgcmVuZGVyZWQgPSBib2R5XG4gICAgICAuc3BsaXQoLyhcXHMrKS8pXG4gICAgICAubWFwKHBhcnQgPT4ge1xuICAgICAgICBpZiAoIXBhcnQgfHwgL1xccysvLnRlc3QocGFydCkpIHJldHVybiBwYXJ0O1xuICAgICAgICBpZiAoL15bQS1aXVtBLVowLTldKiQvLnRlc3QocGFydCkpIHJldHVybiBzcGFuKCd0b2stc2VjdGlvbiB0b2stYXJyLXRva2VuJywgcGFydCwgeyBzZWN0aW9uOiBwYXJ0IH0pO1xuICAgICAgICBpZiAocGFydCA9PT0gJyUnKSByZXR1cm4gc3BhbigndG9rLXZhci1yZWYgdG9rLWFyci10b2tlbiB0b2stYXJyLXJlcGVhdCcsIHBhcnQsIHsgcmVwZWF0TGFzdDogJzEnIH0pO1xuICAgICAgICBpZiAoL154XFxkKyQvLnRlc3QocGFydCkpIHJldHVybiBzcGFuKCd0b2stcmVwZWF0IHRvay1hcnItdG9rZW4gdG9rLWFyci1yZXBlYXQnLCBwYXJ0LCB7IHJlcGVhdDogcGFydC5zbGljZSgxKSB9KTtcbiAgICAgICAgcmV0dXJuIHJlbmRlclRva2VuKHBhcnQpO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKTtcbiAgICByZXR1cm4gYCR7aW5kZW50fSR7c3BhbigndG9rLWFycmFuZ2VtZW50JywgJz4nKX0ke3JlbmRlcmVkfWA7XG4gIH1cbiAgaWYgKC9eXFxzKiVbXlxcc10rXFxzKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoL14oXFxzKikoJVteXFxzXSspKFxccyopKC4qKSQvLCAoXywgaSwgdiwgcywgcmVzdCkgPT4gKFxuICAgICAgYCR7ZXNjKGkpfSR7c3BhbigndG9rLXZhci1kZWYnLCB2LCB7IHZhcjogdiB9KX0ke2VzYyhzKX0ke3JlbmRlclRva2VucyhyZXN0KX1gXG4gICAgKSk7XG4gIH1cbiAgaWYgKC9eXFxzKiNcXGQrLy50ZXN0KGJhc2UpKSB7XG4gICAgbGV0IHZlbG9jaXR5VGFnZ2VkID0gZmFsc2U7XG4gICAgcmV0dXJuIGJhc2Uuc3BsaXQoLyhcXHMrKS8pLm1hcChwYXJ0ID0+IHtcbiAgICAgIGlmICgvXlxccyokLy50ZXN0KHBhcnQpKSByZXR1cm4gcGFydDtcbiAgICAgIGNvbnN0IGNscyA9IGNsYXNzaWZ5KHBhcnQpO1xuICAgICAgaWYgKGNscyA9PT0gJ3Rvay1udW1iZXInICYmICF2ZWxvY2l0eVRhZ2dlZCkge1xuICAgICAgICB2ZWxvY2l0eVRhZ2dlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBzcGFuKGNscywgcGFydCwgeyB2ZWxvY2l0eTogcGFydCB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZW5kZXJUb2tlbihwYXJ0KTtcbiAgICB9KS5qb2luKCcnKTtcbiAgfVxuICByZXR1cm4gcmVuZGVyVG9rZW5zKGJhc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlnaGxpZ2h0KGlucHV0KSB7XG4gIHJldHVybiBTdHJpbmcoaW5wdXQgfHwgJycpXG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKChsaW5lLCBsaW5lTnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBbYmFzZSwgY29tbWVudF0gPSBzcGxpdENvbW1lbnQobGluZSk7XG4gICAgICBjb25zdCByZW5kZXJlZCA9IHJlbmRlckJhc2UoYmFzZSk7XG4gICAgICBjb25zdCBjb250ZW50ID0gIWNvbW1lbnQgPyByZW5kZXJlZCA6IGAke3JlbmRlcmVkfSR7c3BhbigndG9rLWNvbW1lbnQnLCBjb21tZW50KX1gO1xuICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cImhsLWxpbmVcIiBkYXRhLWxpbmU9XCIke2xpbmVOdW1iZXJ9XCI+JHtjb250ZW50fTwvc3Bhbj5gO1xuICAgIH0pXG4gICAgLmpvaW4oJycpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FBUyxJQUFJLE9BQU87QUFDbEIsU0FBTyxPQUFPLEtBQUssRUFDaEIsUUFBUSxNQUFNLE9BQU8sRUFDckIsUUFBUSxNQUFNLE1BQU0sRUFDcEIsUUFBUSxNQUFNLE1BQU07QUFDekI7QUFFQSxTQUFTLEtBQUssS0FBSyxPQUFPLFFB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
