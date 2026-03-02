function esc(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function span(cls, value, dataVar) {
  const attrs = dataVar ? ` class="${cls}" data-var="${esc(dataVar)}"` : ` class="${cls}"`;
  return `<span${attrs}>${esc(value)}</span>`;
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
  if (cls === "tok-var-ref" && token !== "%") return span(cls, token, token);
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
    return span("tok-arrangement", base.trimStart().charAt(0)) + renderTokens(base.trimStart().slice(1).replace(/^\s*/, " ")).replace(/^/, esc(base.match(/^\s*/)[0]));
  }
  if (/^\s*%[^\s]+\s+/.test(base)) {
    return base.replace(/^(\s*)(%[^\s]+)(\s*)(.*)$/, (_, i, v, s, rest) => `${esc(i)}${span("tok-var-def", v, v)}${esc(s)}${renderTokens(rest)}`);
  }
  if (/^\s*#\d+/.test(base)) {
    return renderTokens(base);
  }
  return renderTokens(base);
}
function highlight(input) {
  return String(input || "").split(/\r?\n/).map((line) => {
    const [base, comment] = splitComment(line);
    const rendered = renderBase(base);
    if (!comment) return rendered;
    return `${rendered}${span("tok-comment", comment)}`;
  }).join("\n");
}
Object.assign(module.exports,{highlight});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3NyYy9oaWdobGlnaHQuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImZ1bmN0aW9uIGVzYyh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5cbmZ1bmN0aW9uIHNwYW4oY2xzLCB2YWx1ZSwgZGF0YVZhcikge1xuICBjb25zdCBhdHRycyA9IGRhdGFWYXIgPyBgIGNsYXNzPVwiJHtjbHN9XCIgZGF0YS12YXI9XCIke2VzYyhkYXRhVmFyKX1cImAgOiBgIGNsYXNzPVwiJHtjbHN9XCJgO1xuICByZXR1cm4gYDxzcGFuJHthdHRyc30+JHtlc2ModmFsdWUpfTwvc3Bhbj5gO1xufVxuXG5mdW5jdGlvbiBjbGFzc2lmeSh0b2tlbikge1xuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcbiAgaWYgKHRva2VuID09PSAnPCcpIHJldHVybiAndG9rLWluaGVyaXQnO1xuICBpZiAodG9rZW4gPT09ICclJykgcmV0dXJuICd0b2stdmFyLXJlZic7XG4gIGlmICh0b2tlbi5jaGFyQXQoMCkgPT09ICclJykgcmV0dXJuICd0b2stdmFyLXJlZic7XG4gIGlmICgvXlxcKlxcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcmVwZWF0JztcbiAgaWYgKC9eW3hfXFwtXFxbXFxdXSskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcGF0dGVybic7XG4gIGlmICgvXlthLWdBLUddWyNiXT9cXGQrJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW5vdGUnO1xuICBpZiAodG9rZW4uaW5jbHVkZXMoJ3wnKSkgcmV0dXJuICd0b2stY2hvcmQnO1xuICBpZiAoL14obWFqb3J8bWlub3J8cGhyeWdpYW58ZG9yaWFufG1peG9seWRpYW58bG9jcmlhbnxseWRpYW4pJC9pLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1tb2RlJztcbiAgaWYgKC9eKD86SXxJSXxJSUl8SVZ8VnxWSXxWSUl8aXxpaXxpaWl8aXZ8dnx2aXx2aWkpXHUwMEIwPyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1wcm9ncmVzc2lvbic7XG4gIGlmICgvXig/OlxcK1xcK3xcXC5cXC58Pj58XFwqXFwqKSQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1vcGVyYXRvcic7XG4gIGlmICgvXiNcXGQrJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLWNoYW5uZWwnO1xuICBpZiAoL14tP1xcZCsoXFwuXFxkKyk/JC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW51bWJlcic7XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2tlbih0b2tlbikge1xuICBjb25zdCBjbHMgPSBjbGFzc2lmeSh0b2tlbik7XG4gIGlmICghY2xzKSByZXR1cm4gZXNjKHRva2VuKTtcbiAgaWYgKGNscyA9PT0gJ3Rvay12YXItcmVmJyAmJiB0b2tlbiAhPT0gJyUnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB0b2tlbik7XG4gIHJldHVybiBzcGFuKGNscywgdG9rZW4pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2tlbnModGV4dCkge1xuICByZXR1cm4gdGV4dFxuICAgIC5zcGxpdCgvKFxccyspLylcbiAgICAubWFwKHBhcnQgPT4gKC9cXHMrLy50ZXN0KHBhcnQpID8gcGFydCA6IHJlbmRlclRva2VuKHBhcnQpKSlcbiAgICAuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIHNwbGl0Q29tbWVudChsaW5lKSB7XG4gIGNvbnN0IGlkeCA9IGxpbmUuaW5kZXhPZignOycpO1xuICBpZiAoaWR4IDwgMCkgcmV0dXJuIFtsaW5lLCAnJ107XG4gIHJldHVybiBbbGluZS5zbGljZSgwLCBpZHgpLCBsaW5lLnNsaWNlKGlkeCldO1xufVxuXG5mdW5jdGlvbiByZW5kZXJCYXNlKGJhc2UpIHtcbiAgaWYgKCFiYXNlLnRyaW0oKSkgcmV0dXJuIGVzYyhiYXNlKTtcblxuICBpZiAoL15cXHMqIyNcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqIyNcXHMrKSguKikkLywgKF8sIHAxLCBwMikgPT4gYCR7ZXNjKHAxKX0ke3NwYW4oJ3Rvay1zdWJ0cmFjaycsIHAyKX1gKTtcbiAgfVxuICBpZiAoL15cXHMqI1xccysvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC9eKFxccyojXFxzKykoLiopJC8sIChfLCBwMSwgcDIpID0+IGAke2VzYyhwMSl9JHtzcGFuKCd0b2stdHJhY2snLCBwMil9YCk7XG4gIH1cbiAgaWYgKC9eXFxzKkAvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gcmVuZGVyVG9rZW5zKGJhc2UucmVwbGFjZSgvPC9nLCAnIDwgJykpO1xuICB9XG4gIGlmICgvXlxccyo+Ly50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIHNwYW4oJ3Rvay1hcnJhbmdlbWVudCcsIGJhc2UudHJpbVN0YXJ0KCkuY2hhckF0KDApKVxuICAgICAgKyByZW5kZXJUb2tlbnMoYmFzZS50cmltU3RhcnQoKS5zbGljZSgxKS5yZXBsYWNlKC9eXFxzKi8sICcgJykpXG4gICAgICAucmVwbGFjZSgvXi8sIGVzYyhiYXNlLm1hdGNoKC9eXFxzKi8pWzBdKSk7XG4gIH1cbiAgaWYgKC9eXFxzKiVbXlxcc10rXFxzKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoL14oXFxzKikoJVteXFxzXSspKFxccyopKC4qKSQvLCAoXywgaSwgdiwgcywgcmVzdCkgPT4gKFxuICAgICAgYCR7ZXNjKGkpfSR7c3BhbigndG9rLXZhci1kZWYnLCB2LCB2KX0ke2VzYyhzKX0ke3JlbmRlclRva2VucyhyZXN0KX1gXG4gICAgKSk7XG4gIH1cbiAgaWYgKC9eXFxzKiNcXGQrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIHJlbmRlclRva2VucyhiYXNlKTtcbiAgfVxuICByZXR1cm4gcmVuZGVyVG9rZW5zKGJhc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlnaGxpZ2h0KGlucHV0KSB7XG4gIHJldHVybiBTdHJpbmcoaW5wdXQgfHwgJycpXG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKGxpbmUgPT4ge1xuICAgICAgY29uc3QgW2Jhc2UsIGNvbW1lbnRdID0gc3BsaXRDb21tZW50KGxpbmUpO1xuICAgICAgY29uc3QgcmVuZGVyZWQgPSByZW5kZXJCYXNlKGJhc2UpO1xuICAgICAgaWYgKCFjb21tZW50KSByZXR1cm4gcmVuZGVyZWQ7XG4gICAgICByZXR1cm4gYCR7cmVuZGVyZWR9JHtzcGFuKCd0b2stY29tbWVudCcsIGNvbW1lbnQpfWA7XG4gICAgfSlcbiAgICAuam9pbignXFxuJyk7XG59XG5cbiJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsSUFBSSxPQUFPO0FBQ2xCLFNBQU8sT0FBTyxLQUFLLEVBQ2hCLFFBQVEsTUFBTSxPQUFPLEVBQ3JCLFFBQVEsTUFBTSxNQUFNLEVBQ3BCLFFBQVEsTUFBTSxNQUFNO0FBQ3pCO0FBRUEsU0FBUyxLQUFLLEtBQUssT0FBTyxTQUFTO0FBQ2pDLFFBQU0sUUFBUSxVQUFVLFdBQVcsR0FBRyxlQUFlLElBQUksT0FBTyxDQUFDLE1BQU0sV0FBVyxHQUFHO0FBQ3JGLFNBQU8sUUFBUSxLQUFLLElBQUksSUFBSSxLQUFLLENBQUM7QUFDcEM7QUFFQSxTQUFTLFNBQVMsT0FBTztBQUN2QixNQUFJLENBQUMsTUFBTyxRQUFPO0FBQ25CLE1BQUksVUFBVSxJQUFLLFFBQU87QUFDMUIsTUFBSSxVQUFVLElBQUssUUFBTztBQUMxQixNQUFJLE1BQU0sT0FBTyxDQUFDLE1BQU0sSUFBSyxRQUFPO0FBQ3BDLE1BQUksVUFBVSxLQUFLLEtBQUssRUFBRyxRQUFPO0FBQ2xDLE1BQUksZ0JBQWdCLEtBQUssS0FBSyxFQUFHLFFBQU87QUFDeEMsTUFBSSxxQkFBcUIsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUM3QyxN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
