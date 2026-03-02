function esc(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function span(cls, value, attrs = {}) {
  const dataAttrs = Object.entries(attrs).map(([key, attrValue]) => ` data-${key}="${esc(attrValue)}"`).join("");
  return `<span class="${cls}"${dataAttrs}>${esc(value)}</span>`;
}
function classify(token) {
  if (!token) return null;
  if (token === "<") return "tok-inherit";
  if (token === "%") return "tok-var-ref";
  if (token.charAt(0) === "%") return "tok-var-ref";
  if (/^\*\d+$/.test(token)) return "tok-repeat";
  if (/^[x_\-\[\]]+$/.test(token)) return "tok-pattern";
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
  if (cls === "tok-var-ref" && token !== "%") return span(cls, token, { var: token });
  if (cls === "tok-var-ref" && token === "%") return span(cls, token, { repeatLast: "1" });
  if (cls === "tok-channel") return span(cls, token, { instrument: token.slice(1) });
  if (cls === "tok-mode") return span(cls, token, { mode: token.toLowerCase() });
  if (cls === "tok-pattern") return span(cls, token, { pattern: "1" });
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
    return renderTokens(base.replace(/</g, " < "));
  }
  if (/^\s*>/.test(base)) {
    const indent = esc(base.match(/^\s*/)[0]);
    const body = base.trimStart().slice(1).replace(/^\s*/, " ");
    const rendered = body.split(/(\s+)/).map((part) => {
      if (!part || /\s+/.test(part)) return part;
      if (/^[A-Z][A-Z0-9]*$/.test(part)) return span("tok-section", part, { section: part });
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
Object.assign(module.exports,{highlight});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3NyYy9oaWdobGlnaHQuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImZ1bmN0aW9uIGVzYyh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5cbmZ1bmN0aW9uIHNwYW4oY2xzLCB2YWx1ZSwgYXR0cnMgPSB7fSkge1xuICBjb25zdCBkYXRhQXR0cnMgPSBPYmplY3QuZW50cmllcyhhdHRycylcbiAgICAubWFwKChba2V5LCBhdHRyVmFsdWVdKSA9PiBgIGRhdGEtJHtrZXl9PVwiJHtlc2MoYXR0clZhbHVlKX1cImApXG4gICAgLmpvaW4oJycpO1xuICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtjbHN9XCIke2RhdGFBdHRyc30+JHtlc2ModmFsdWUpfTwvc3Bhbj5gO1xufVxuXG5mdW5jdGlvbiBjbGFzc2lmeSh0b2tlbikge1xuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcbiAgaWYgKHRva2VuID09PSAnPCcpIHJldHVybiAndG9rLWluaGVyaXQnO1xuICBpZiAodG9rZW4gPT09ICclJykgcmV0dXJuICd0b2stdmFyLXJlZic7XG4gIGlmICh0b2tlbi5jaGFyQXQoMCkgPT09ICclJykgcmV0dXJuICd0b2stdmFyLXJlZic7XG4gIGlmICgvXlxcKlxcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcmVwZWF0JztcbiAgaWYgKC9eW3hfXFwtXFxbXFxdXSskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcGF0dGVybic7XG4gIGlmICgvXlthLWdBLUddWyNiXT9cXGQrJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW5vdGUnO1xuICBpZiAodG9rZW4uaW5jbHVkZXMoJ3wnKSkgcmV0dXJuICd0b2stY2hvcmQnO1xuICBpZiAoL14obWFqb3J8bWlub3J8cGhyeWdpYW58ZG9yaWFufG1peG9seWRpYW58bG9jcmlhbnxseWRpYW4pJC9pLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1tb2RlJztcbiAgaWYgKC9eKD86SXxJSXxJSUl8SVZ8VnxWSXxWSUl8aXxpaXxpaWl8aXZ8dnx2aXx2aWkpXHUwMEIwPyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1wcm9ncmVzc2lvbic7XG4gIGlmICgvXig/OlxcK1xcK3xcXC5cXC58Pj58XFwqXFwqKSQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1vcGVyYXRvcic7XG4gIGlmICgvXiNcXGQrJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLWNoYW5uZWwnO1xuICBpZiAoL14tP1xcZCsoXFwuXFxkKyk/JC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW51bWJlcic7XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2tlbih0b2tlbikge1xuICBjb25zdCBjbHMgPSBjbGFzc2lmeSh0b2tlbik7XG4gIGlmICghY2xzKSByZXR1cm4gZXNjKHRva2VuKTtcbiAgaWYgKGNscyA9PT0gJ3Rvay12YXItcmVmJyAmJiB0b2tlbiAhPT0gJyUnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IHZhcjogdG9rZW4gfSk7XG4gIGlmIChjbHMgPT09ICd0b2stdmFyLXJlZicgJiYgdG9rZW4gPT09ICclJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyByZXBlYXRMYXN0OiAnMScgfSk7XG4gIGlmIChjbHMgPT09ICd0b2stY2hhbm5lbCcpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgaW5zdHJ1bWVudDogdG9rZW4uc2xpY2UoMSkgfSk7XG4gIGlmIChjbHMgPT09ICd0b2stbW9kZScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgbW9kZTogdG9rZW4udG9Mb3dlckNhc2UoKSB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1wYXR0ZXJuJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBwYXR0ZXJuOiAnMScgfSk7XG4gIGlmIChjbHMgPT09ICd0b2stbm90ZScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgbm90ZTogdG9rZW4gfSk7XG4gIGlmIChjbHMgPT09ICd0b2stY2hvcmQnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IGNob3JkOiB0b2tlbiB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1udW1iZXInKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IG51bWJlcjogdG9rZW4gfSk7XG4gIGlmIChjbHMgPT09ICd0b2stcmVwZWF0JykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyByZXBlYXQ6IHRva2VuLnNsaWNlKDEpIH0pO1xuICByZXR1cm4gc3BhbihjbHMsIHRva2VuKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9rZW5zKHRleHQpIHtcbiAgcmV0dXJuIHRleHRcbiAgICAuc3BsaXQoLyhcXHMrKS8pXG4gICAgLm1hcChwYXJ0ID0+ICgvXFxzKy8udGVzdChwYXJ0KSA/IHBhcnQgOiByZW5kZXJUb2tlbihwYXJ0KSkpXG4gICAgLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBzcGxpdENvbW1lbnQobGluZSkge1xuICBjb25zdCBpZHggPSBsaW5lLmluZGV4T2YoJzsnKTtcbiAgaWYgKGlkeCA8IDApIHJldHVybiBbbGluZSwgJyddO1xuICByZXR1cm4gW2xpbmUuc2xpY2UoMCwgaWR4KSwgbGluZS5zbGljZShpZHgpXTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQmFzZShiYXNlKSB7XG4gIGlmICghYmFzZS50cmltKCkpIHJldHVybiBlc2MoYmFzZSk7XG5cbiAgaWYgKC9eXFxzKiMjXFxzKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoL14oXFxzKiMjXFxzKykoLiopJC8sIChfLCBwMSwgcDIpID0+IGAke2VzYyhwMSl9JHtzcGFuKCd0b2stc3VidHJhY2snLCBwMil9YCk7XG4gIH1cbiAgaWYgKC9eXFxzKiNcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqI1xccyspKC4qKSQvLCAoXywgcDEsIHAyKSA9PiBgJHtlc2MocDEpfSR7c3BhbigndG9rLXRyYWNrJywgcDIpfWApO1xuICB9XG4gIGlmICgvXlxccypALy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIHJlbmRlclRva2VucyhiYXNlLnJlcGxhY2UoLzwvZywgJyA8ICcpKTtcbiAgfVxuICBpZiAoL15cXHMqPi8udGVzdChiYXNlKSkge1xuICAgIGNvbnN0IGluZGVudCA9IGVzYyhiYXNlLm1hdGNoKC9eXFxzKi8pWzBdKTtcbiAgICBjb25zdCBib2R5ID0gYmFzZS50cmltU3RhcnQoKS5zbGljZSgxKS5yZXBsYWNlKC9eXFxzKi8sICcgJyk7XG4gICAgY29uc3QgcmVuZGVyZWQgPSBib2R5XG4gICAgICAuc3BsaXQoLyhcXHMrKS8pXG4gICAgICAubWFwKHBhcnQgPT4ge1xuICAgICAgICBpZiAoIXBhcnQgfHwgL1xccysvLnRlc3QocGFydCkpIHJldHVybiBwYXJ0O1xuICAgICAgICBpZiAoL15bQS1aXVtBLVowLTldKiQvLnRlc3QocGFydCkpIHJldHVybiBzcGFuKCd0b2stc2VjdGlvbicsIHBhcnQsIHsgc2VjdGlvbjogcGFydCB9KTtcbiAgICAgICAgcmV0dXJuIHJlbmRlclRva2VuKHBhcnQpO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKTtcbiAgICByZXR1cm4gYCR7aW5kZW50fSR7c3BhbigndG9rLWFycmFuZ2VtZW50JywgJz4nKX0ke3JlbmRlcmVkfWA7XG4gIH1cbiAgaWYgKC9eXFxzKiVbXlxcc10rXFxzKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoL14oXFxzKikoJVteXFxzXSspKFxccyopKC4qKSQvLCAoXywgaSwgdiwgcywgcmVzdCkgPT4gKFxuICAgICAgYCR7ZXNjKGkpfSR7c3BhbigndG9rLXZhci1kZWYnLCB2LCB7IHZhcjogdiB9KX0ke2VzYyhzKX0ke3JlbmRlclRva2VucyhyZXN0KX1gXG4gICAgKSk7XG4gIH1cbiAgaWYgKC9eXFxzKiNcXGQrLy50ZXN0KGJhc2UpKSB7XG4gICAgbGV0IHZlbG9jaXR5VGFnZ2VkID0gZmFsc2U7XG4gICAgcmV0dXJuIGJhc2Uuc3BsaXQoLyhcXHMrKS8pLm1hcChwYXJ0ID0+IHtcbiAgICAgIGlmICgvXlxccyokLy50ZXN0KHBhcnQpKSByZXR1cm4gcGFydDtcbiAgICAgIGNvbnN0IGNscyA9IGNsYXNzaWZ5KHBhcnQpO1xuICAgICAgaWYgKGNscyA9PT0gJ3Rvay1udW1iZXInICYmICF2ZWxvY2l0eVRhZ2dlZCkge1xuICAgICAgICB2ZWxvY2l0eVRhZ2dlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBzcGFuKGNscywgcGFydCwgeyB2ZWxvY2l0eTogcGFydCB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZW5kZXJUb2tlbihwYXJ0KTtcbiAgICB9KS5qb2luKCcnKTtcbiAgfVxuICByZXR1cm4gcmVuZGVyVG9rZW5zKGJhc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlnaGxpZ2h0KGlucHV0KSB7XG4gIHJldHVybiBTdHJpbmcoaW5wdXQgfHwgJycpXG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKChsaW5lLCBsaW5lTnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBbYmFzZSwgY29tbWVudF0gPSBzcGxpdENvbW1lbnQobGluZSk7XG4gICAgICBjb25zdCByZW5kZXJlZCA9IHJlbmRlckJhc2UoYmFzZSk7XG4gICAgICBjb25zdCBjb250ZW50ID0gIWNvbW1lbnQgPyByZW5kZXJlZCA6IGAke3JlbmRlcmVkfSR7c3BhbigndG9rLWNvbW1lbnQnLCBjb21tZW50KX1gO1xuICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cImhsLWxpbmVcIiBkYXRhLWxpbmU9XCIke2xpbmVOdW1iZXJ9XCI+JHtjb250ZW50fTwvc3Bhbj5gO1xuICAgIH0pXG4gICAgLmpvaW4oJycpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FB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
