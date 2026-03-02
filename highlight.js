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
  if (cls === "tok-channel") return span(cls, token, { instrument: token.slice(1) });
  if (cls === "tok-mode") return span(cls, token, { mode: token.toLowerCase() });
  if (cls === "tok-pattern") return span(cls, token, { pattern: "1" });
  if (cls === "tok-note") return span(cls, token, { note: token });
  if (cls === "tok-chord") return span(cls, token, { chord: token });
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3NyYy9oaWdobGlnaHQuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImZ1bmN0aW9uIGVzYyh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5cbmZ1bmN0aW9uIHNwYW4oY2xzLCB2YWx1ZSwgYXR0cnMgPSB7fSkge1xuICBjb25zdCBkYXRhQXR0cnMgPSBPYmplY3QuZW50cmllcyhhdHRycylcbiAgICAubWFwKChba2V5LCBhdHRyVmFsdWVdKSA9PiBgIGRhdGEtJHtrZXl9PVwiJHtlc2MoYXR0clZhbHVlKX1cImApXG4gICAgLmpvaW4oJycpO1xuICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtjbHN9XCIke2RhdGFBdHRyc30+JHtlc2ModmFsdWUpfTwvc3Bhbj5gO1xufVxuXG5mdW5jdGlvbiBjbGFzc2lmeSh0b2tlbikge1xuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcbiAgaWYgKHRva2VuID09PSAnPCcpIHJldHVybiAndG9rLWluaGVyaXQnO1xuICBpZiAodG9rZW4gPT09ICclJykgcmV0dXJuICd0b2stdmFyLXJlZic7XG4gIGlmICh0b2tlbi5jaGFyQXQoMCkgPT09ICclJykgcmV0dXJuICd0b2stdmFyLXJlZic7XG4gIGlmICgvXlxcKlxcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcmVwZWF0JztcbiAgaWYgKC9eW3hfXFwtXFxbXFxdXSskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcGF0dGVybic7XG4gIGlmICgvXlthLWdBLUddWyNiXT9cXGQrJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW5vdGUnO1xuICBpZiAodG9rZW4uaW5jbHVkZXMoJ3wnKSkgcmV0dXJuICd0b2stY2hvcmQnO1xuICBpZiAoL14obWFqb3J8bWlub3J8cGhyeWdpYW58ZG9yaWFufG1peG9seWRpYW58bG9jcmlhbnxseWRpYW4pJC9pLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1tb2RlJztcbiAgaWYgKC9eKD86SXxJSXxJSUl8SVZ8VnxWSXxWSUl8aXxpaXxpaWl8aXZ8dnx2aXx2aWkpXHUwMEIwPyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1wcm9ncmVzc2lvbic7XG4gIGlmICgvXig/OlxcK1xcK3xcXC5cXC58Pj58XFwqXFwqKSQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1vcGVyYXRvcic7XG4gIGlmICgvXiNcXGQrJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLWNoYW5uZWwnO1xuICBpZiAoL14tP1xcZCsoXFwuXFxkKyk/JC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW51bWJlcic7XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2tlbih0b2tlbikge1xuICBjb25zdCBjbHMgPSBjbGFzc2lmeSh0b2tlbik7XG4gIGlmICghY2xzKSByZXR1cm4gZXNjKHRva2VuKTtcbiAgaWYgKGNscyA9PT0gJ3Rvay12YXItcmVmJyAmJiB0b2tlbiAhPT0gJyUnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IHZhcjogdG9rZW4gfSk7XG4gIGlmIChjbHMgPT09ICd0b2stY2hhbm5lbCcpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgaW5zdHJ1bWVudDogdG9rZW4uc2xpY2UoMSkgfSk7XG4gIGlmIChjbHMgPT09ICd0b2stbW9kZScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgbW9kZTogdG9rZW4udG9Mb3dlckNhc2UoKSB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1wYXR0ZXJuJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBwYXR0ZXJuOiAnMScgfSk7XG4gIGlmIChjbHMgPT09ICd0b2stbm90ZScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgbm90ZTogdG9rZW4gfSk7XG4gIGlmIChjbHMgPT09ICd0b2stY2hvcmQnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IGNob3JkOiB0b2tlbiB9KTtcbiAgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRva2Vucyh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0XG4gICAgLnNwbGl0KC8oXFxzKykvKVxuICAgIC5tYXAocGFydCA9PiAoL1xccysvLnRlc3QocGFydCkgPyBwYXJ0IDogcmVuZGVyVG9rZW4ocGFydCkpKVxuICAgIC5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gc3BsaXRDb21tZW50KGxpbmUpIHtcbiAgY29uc3QgaWR4ID0gbGluZS5pbmRleE9mKCc7Jyk7XG4gIGlmIChpZHggPCAwKSByZXR1cm4gW2xpbmUsICcnXTtcbiAgcmV0dXJuIFtsaW5lLnNsaWNlKDAsIGlkeCksIGxpbmUuc2xpY2UoaWR4KV07XG59XG5cbmZ1bmN0aW9uIHJlbmRlckJhc2UoYmFzZSkge1xuICBpZiAoIWJhc2UudHJpbSgpKSByZXR1cm4gZXNjKGJhc2UpO1xuXG4gIGlmICgvXlxccyojI1xccysvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC9eKFxccyojI1xccyspKC4qKSQvLCAoXywgcDEsIHAyKSA9PiBgJHtlc2MocDEpfSR7c3BhbigndG9rLXN1YnRyYWNrJywgcDIpfWApO1xuICB9XG4gIGlmICgvXlxccyojXFxzKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoL14oXFxzKiNcXHMrKSguKikkLywgKF8sIHAxLCBwMikgPT4gYCR7ZXNjKHAxKX0ke3NwYW4oJ3Rvay10cmFjaycsIHAyKX1gKTtcbiAgfVxuICBpZiAoL15cXHMqQC8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiByZW5kZXJUb2tlbnMoYmFzZS5yZXBsYWNlKC88L2csICcgPCAnKSk7XG4gIH1cbiAgaWYgKC9eXFxzKj4vLnRlc3QoYmFzZSkpIHtcbiAgICBjb25zdCBpbmRlbnQgPSBlc2MoYmFzZS5tYXRjaCgvXlxccyovKVswXSk7XG4gICAgY29uc3QgYm9keSA9IGJhc2UudHJpbVN0YXJ0KCkuc2xpY2UoMSkucmVwbGFjZSgvXlxccyovLCAnICcpO1xuICAgIGNvbnN0IHJlbmRlcmVkID0gYm9keVxuICAgICAgLnNwbGl0KC8oXFxzKykvKVxuICAgICAgLm1hcChwYXJ0ID0+IHtcbiAgICAgICAgaWYgKCFwYXJ0IHx8IC9cXHMrLy50ZXN0KHBhcnQpKSByZXR1cm4gcGFydDtcbiAgICAgICAgaWYgKC9eW0EtWl1bQS1aMC05XSokLy50ZXN0KHBhcnQpKSByZXR1cm4gc3BhbigndG9rLXNlY3Rpb24nLCBwYXJ0LCB7IHNlY3Rpb246IHBhcnQgfSk7XG4gICAgICAgIHJldHVybiByZW5kZXJUb2tlbihwYXJ0KTtcbiAgICAgIH0pXG4gICAgICAuam9pbignJyk7XG4gICAgcmV0dXJuIGAke2luZGVudH0ke3NwYW4oJ3Rvay1hcnJhbmdlbWVudCcsICc+Jyl9JHtyZW5kZXJlZH1gO1xuICB9XG4gIGlmICgvXlxccyolW15cXHNdK1xccysvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC9eKFxccyopKCVbXlxcc10rKShcXHMqKSguKikkLywgKF8sIGksIHYsIHMsIHJlc3QpID0+IChcbiAgICAgIGAke2VzYyhpKX0ke3NwYW4oJ3Rvay12YXItZGVmJywgdiwgeyB2YXI6IHYgfSl9JHtlc2Mocyl9JHtyZW5kZXJUb2tlbnMocmVzdCl9YFxuICAgICkpO1xuICB9XG4gIGlmICgvXlxccyojXFxkKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiByZW5kZXJUb2tlbnMoYmFzZSk7XG4gIH1cbiAgcmV0dXJuIHJlbmRlclRva2VucyhiYXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZ2hsaWdodChpbnB1dCkge1xuICByZXR1cm4gU3RyaW5nKGlucHV0IHx8ICcnKVxuICAgIC5zcGxpdCgvXFxyP1xcbi8pXG4gICAgLm1hcChsaW5lID0+IHtcbiAgICAgIGNvbnN0IFtiYXNlLCBjb21tZW50XSA9IHNwbGl0Q29tbWVudChsaW5lKTtcbiAgICAgIGNvbnN0IHJlbmRlcmVkID0gcmVuZGVyQmFzZShiYXNlKTtcbiAgICAgIGlmICghY29tbWVudCkgcmV0dXJuIHJlbmRlcmVkO1xuICAgICAgcmV0dXJuIGAke3JlbmRlcmVkfSR7c3BhbigndG9rLWNvbW1lbnQnLCBjb21tZW50KX1gO1xuICAgIH0pXG4gICAgLmpvaW4oJ1xcbicpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FBUyxJQUFJLE9BQU87QUFDbEIsU0FBTyxPQUFPLEtBQUssRUFDaEIsUUFBUSxNQUFNLE9BQU8sRUFDckIsUUFBUSxNQUFNLE1BQU0sRUFDcEIsUUFBUSxNQUFNLE1BQU07QUFDekI7QUFFQSxTQUFTLEtBQUssS0FBSyxPQUFPLFFBQVEsQ0FBQyxHQUFHO0FBQ3BDLFFBQU0sWUFBWSxPQUFPLFFBQVEsS0FBSyxFQUNuQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFNBQVMsTUFBTSxTQUFTLEdBQUcsS0FBSyxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQzVELEtBQUssRUFBRTtBQUNWLFNBQU8sZ0JBQWdCLEdBQUcsSUFBSSxTQUFTLElBQUksSUFBSSxLQUFLLENBQUM7QUFDdkQ7QUFFQSxTQUFTLFNBQVMsT0FBTztBQUN2QixNQUFJLENBQUMsTUFBTyxRQUFPO0FBQ25CLE1BQUksVUFBVSxJQUFLLFFBQU87QUFDMUIsTUFBSSxVQUFVLElBQUssUUFBTztBQUMxQixNQUFJLE1BQU0sT0FBTyxDQUFDLE1BQU0sSUFBSyxRQUFPO0FBQ3BDLE1BQUksVUFBVSxLQUFLLEtBQUssRUFBRyxRQUFPO0FBQ2xDLE1BQUksZ0JBQWdCLEtBQUssS0FBSyxFQUFHLFFBQU87QUFDeEMsTUFBSSxxQkFBcUIsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUM3QyxNQUFJLE1BQU0sU0FBUyxHQUFHLEVBQUcsUUFBTztBQUNoQyxNQUFJLDZEQUE2RCxLQUFLLEtBQUssRUFBRyxRQUFPO0FBQ3JGLE1BQUksb0RBQW9ELEtBQUss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
