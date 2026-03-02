function esc(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function span(cls, value, dataVar) {
  const attrs = dataVar ? ` class="${cls}" data-var="${esc(dataVar)}"` : ` class="${cls}"`;
  return `<span${attrs}>${esc(value)}</span>`;
}
function classify(token) {
  if (!token) return null;
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
    return renderTokens(base.replace(/</g, ` ${span("tok-inherit", "<")} `));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3NyYy9oaWdobGlnaHQuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImZ1bmN0aW9uIGVzYyh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5cbmZ1bmN0aW9uIHNwYW4oY2xzLCB2YWx1ZSwgZGF0YVZhcikge1xuICBjb25zdCBhdHRycyA9IGRhdGFWYXIgPyBgIGNsYXNzPVwiJHtjbHN9XCIgZGF0YS12YXI9XCIke2VzYyhkYXRhVmFyKX1cImAgOiBgIGNsYXNzPVwiJHtjbHN9XCJgO1xuICByZXR1cm4gYDxzcGFuJHthdHRyc30+JHtlc2ModmFsdWUpfTwvc3Bhbj5gO1xufVxuXG5mdW5jdGlvbiBjbGFzc2lmeSh0b2tlbikge1xuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcbiAgaWYgKHRva2VuID09PSAnJScpIHJldHVybiAndG9rLXZhci1yZWYnO1xuICBpZiAodG9rZW4uY2hhckF0KDApID09PSAnJScpIHJldHVybiAndG9rLXZhci1yZWYnO1xuICBpZiAoL15cXCpcXGQrJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLXJlcGVhdCc7XG4gIGlmICgvXlt4X1xcLVxcW1xcXV0rJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLXBhdHRlcm4nO1xuICBpZiAoL15bYS1nQS1HXVsjYl0/XFxkKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1ub3RlJztcbiAgaWYgKHRva2VuLmluY2x1ZGVzKCd8JykpIHJldHVybiAndG9rLWNob3JkJztcbiAgaWYgKC9eKG1ham9yfG1pbm9yfHBocnlnaWFufGRvcmlhbnxtaXhvbHlkaWFufGxvY3JpYW58bHlkaWFuKSQvaS50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stbW9kZSc7XG4gIGlmICgvXig/Okl8SUl8SUlJfElWfFZ8Vkl8VklJfGl8aWl8aWlpfGl2fHZ8dml8dmlpKVx1MDBCMD8kLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcHJvZ3Jlc3Npb24nO1xuICBpZiAoL14oPzpcXCtcXCt8XFwuXFwufD4+fFxcKlxcKikkLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stb3BlcmF0b3InO1xuICBpZiAoL14jXFxkKyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1jaGFubmVsJztcbiAgaWYgKC9eLT9cXGQrKFxcLlxcZCspPyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1udW1iZXInO1xuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9rZW4odG9rZW4pIHtcbiAgY29uc3QgY2xzID0gY2xhc3NpZnkodG9rZW4pO1xuICBpZiAoIWNscykgcmV0dXJuIGVzYyh0b2tlbik7XG4gIGlmIChjbHMgPT09ICd0b2stdmFyLXJlZicgJiYgdG9rZW4gIT09ICclJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgdG9rZW4pO1xuICByZXR1cm4gc3BhbihjbHMsIHRva2VuKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9rZW5zKHRleHQpIHtcbiAgcmV0dXJuIHRleHRcbiAgICAuc3BsaXQoLyhcXHMrKS8pXG4gICAgLm1hcChwYXJ0ID0+ICgvXFxzKy8udGVzdChwYXJ0KSA/IHBhcnQgOiByZW5kZXJUb2tlbihwYXJ0KSkpXG4gICAgLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBzcGxpdENvbW1lbnQobGluZSkge1xuICBjb25zdCBpZHggPSBsaW5lLmluZGV4T2YoJzsnKTtcbiAgaWYgKGlkeCA8IDApIHJldHVybiBbbGluZSwgJyddO1xuICByZXR1cm4gW2xpbmUuc2xpY2UoMCwgaWR4KSwgbGluZS5zbGljZShpZHgpXTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQmFzZShiYXNlKSB7XG4gIGlmICghYmFzZS50cmltKCkpIHJldHVybiBlc2MoYmFzZSk7XG5cbiAgaWYgKC9eXFxzKiMjXFxzKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoL14oXFxzKiMjXFxzKykoLiopJC8sIChfLCBwMSwgcDIpID0+IGAke2VzYyhwMSl9JHtzcGFuKCd0b2stc3VidHJhY2snLCBwMil9YCk7XG4gIH1cbiAgaWYgKC9eXFxzKiNcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqI1xccyspKC4qKSQvLCAoXywgcDEsIHAyKSA9PiBgJHtlc2MocDEpfSR7c3BhbigndG9rLXRyYWNrJywgcDIpfWApO1xuICB9XG4gIGlmICgvXlxccypALy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIHJlbmRlclRva2VucyhiYXNlLnJlcGxhY2UoLzwvZywgYCAke3NwYW4oJ3Rvay1pbmhlcml0JywgJzwnKX0gYCkpO1xuICB9XG4gIGlmICgvXlxccyo+Ly50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIHNwYW4oJ3Rvay1hcnJhbmdlbWVudCcsIGJhc2UudHJpbVN0YXJ0KCkuY2hhckF0KDApKVxuICAgICAgKyByZW5kZXJUb2tlbnMoYmFzZS50cmltU3RhcnQoKS5zbGljZSgxKS5yZXBsYWNlKC9eXFxzKi8sICcgJykpXG4gICAgICAucmVwbGFjZSgvXi8sIGVzYyhiYXNlLm1hdGNoKC9eXFxzKi8pWzBdKSk7XG4gIH1cbiAgaWYgKC9eXFxzKiVbXlxcc10rXFxzKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoL14oXFxzKikoJVteXFxzXSspKFxccyopKC4qKSQvLCAoXywgaSwgdiwgcywgcmVzdCkgPT4gKFxuICAgICAgYCR7ZXNjKGkpfSR7c3BhbigndG9rLXZhci1kZWYnLCB2LCB2KX0ke2VzYyhzKX0ke3JlbmRlclRva2VucyhyZXN0KX1gXG4gICAgKSk7XG4gIH1cbiAgaWYgKC9eXFxzKiNcXGQrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIHJlbmRlclRva2VucyhiYXNlKTtcbiAgfVxuICByZXR1cm4gcmVuZGVyVG9rZW5zKGJhc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlnaGxpZ2h0KGlucHV0KSB7XG4gIHJldHVybiBTdHJpbmcoaW5wdXQgfHwgJycpXG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKGxpbmUgPT4ge1xuICAgICAgY29uc3QgW2Jhc2UsIGNvbW1lbnRdID0gc3BsaXRDb21tZW50KGxpbmUpO1xuICAgICAgY29uc3QgcmVuZGVyZWQgPSByZW5kZXJCYXNlKGJhc2UpO1xuICAgICAgaWYgKCFjb21tZW50KSByZXR1cm4gcmVuZGVyZWQ7XG4gICAgICByZXR1cm4gYCR7cmVuZGVyZWR9JHtzcGFuKCd0b2stY29tbWVudCcsIGNvbW1lbnQpfWA7XG4gICAgfSlcbiAgICAuam9pbignXFxuJyk7XG59XG5cbiJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsSUFBSSxPQUFPO0FBQ2xCLFNBQU8sT0FBTyxLQUFLLEVBQ2hCLFFBQVEsTUFBTSxPQUFPLEVBQ3JCLFFBQVEsTUFBTSxNQUFNLEVBQ3BCLFFBQVEsTUFBTSxNQUFNO0FBQ3pCO0FBRUEsU0FBUyxLQUFLLEtBQUssT0FBTyxTQUFTO0FBQ2pDLFFBQU0sUUFBUSxVQUFVLFdBQVcsR0FBRyxlQUFlLElBQUksT0FBTyxDQUFDLE1BQU0sV0FBVyxHQUFHO0FBQ3JGLFNBQU8sUUFBUSxLQUFLLElBQUksSUFBSSxLQUFLLENBQUM7QUFDcEM7QUFFQSxTQUFTLFNBQVMsT0FBTztBQUN2QixNQUFJLENBQUMsTUFBTyxRQUFPO0FBQ25CLE1BQUksVUFBVSxJQUFLLFFBQU87QUFDMUIsTUFBSSxNQUFNLE9BQU8sQ0FBQyxNQUFNLElBQUssUUFBTztBQUNwQyxNQUFJLFVBQVUsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUNsQyxNQUFJLGdCQUFnQixLQUFLLEtBQUssRUFBRyxRQUFPO0FBQ3hDLE1BQUkscUJBQXFCLEtBQUssS0FBSyxFQUFHLFFBQU87QUFDN0MsTUFBSSxNQUFNLFNBQVMsR0FBRyxFQUFHLFFBQU87QUFDaEMsTUFBSSw2REFB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
