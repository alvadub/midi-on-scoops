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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3NyYy9oaWdobGlnaHQuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImZ1bmN0aW9uIGVzYyh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5cbmZ1bmN0aW9uIHNwYW4oY2xzLCB2YWx1ZSwgYXR0cnMgPSB7fSkge1xuICBjb25zdCBkYXRhQXR0cnMgPSBPYmplY3QuZW50cmllcyhhdHRycylcbiAgICAubWFwKChba2V5LCBhdHRyVmFsdWVdKSA9PiBgIGRhdGEtJHtrZXl9PVwiJHtlc2MoYXR0clZhbHVlKX1cImApXG4gICAgLmpvaW4oJycpO1xuICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtjbHN9XCIke2RhdGFBdHRyc30+JHtlc2ModmFsdWUpfTwvc3Bhbj5gO1xufVxuXG5mdW5jdGlvbiBjbGFzc2lmeSh0b2tlbikge1xuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcbiAgaWYgKHRva2VuID09PSAnPCcpIHJldHVybiAndG9rLWluaGVyaXQnO1xuICBpZiAodG9rZW4gPT09ICclJykgcmV0dXJuICd0b2stdmFyLXJlZic7XG4gIGlmICh0b2tlbi5jaGFyQXQoMCkgPT09ICclJykgcmV0dXJuICd0b2stdmFyLXJlZic7XG4gIGlmICgvXlxcKlxcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcmVwZWF0JztcbiAgaWYgKC9eW3hfXFwtXFxbXFxdXSskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcGF0dGVybic7XG4gIGlmICgvXlthLWdBLUddWyNiXT9cXGQrJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW5vdGUnO1xuICBpZiAodG9rZW4uaW5jbHVkZXMoJ3wnKSkgcmV0dXJuICd0b2stY2hvcmQnO1xuICBpZiAoL14obWFqb3J8bWlub3J8cGhyeWdpYW58ZG9yaWFufG1peG9seWRpYW58bG9jcmlhbnxseWRpYW4pJC9pLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1tb2RlJztcbiAgaWYgKC9eKD86SXxJSXxJSUl8SVZ8VnxWSXxWSUl8aXxpaXxpaWl8aXZ8dnx2aXx2aWkpXHUwMEIwPyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1wcm9ncmVzc2lvbic7XG4gIGlmICgvXig/OlxcK1xcK3xcXC5cXC58Pj58XFwqXFwqKSQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1vcGVyYXRvcic7XG4gIGlmICgvXiNcXGQrJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLWNoYW5uZWwnO1xuICBpZiAoL14tP1xcZCsoXFwuXFxkKyk/JC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW51bWJlcic7XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2tlbih0b2tlbikge1xuICBjb25zdCBjbHMgPSBjbGFzc2lmeSh0b2tlbik7XG4gIGlmICghY2xzKSByZXR1cm4gZXNjKHRva2VuKTtcbiAgaWYgKGNscyA9PT0gJ3Rvay12YXItcmVmJyAmJiB0b2tlbiAhPT0gJyUnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IHZhcjogdG9rZW4gfSk7XG4gIGlmIChjbHMgPT09ICd0b2stY2hhbm5lbCcpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgaW5zdHJ1bWVudDogdG9rZW4uc2xpY2UoMSkgfSk7XG4gIGlmIChjbHMgPT09ICd0b2stbW9kZScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgbW9kZTogdG9rZW4udG9Mb3dlckNhc2UoKSB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1wYXR0ZXJuJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBwYXR0ZXJuOiAnMScgfSk7XG4gIHJldHVybiBzcGFuKGNscywgdG9rZW4pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2tlbnModGV4dCkge1xuICByZXR1cm4gdGV4dFxuICAgIC5zcGxpdCgvKFxccyspLylcbiAgICAubWFwKHBhcnQgPT4gKC9cXHMrLy50ZXN0KHBhcnQpID8gcGFydCA6IHJlbmRlclRva2VuKHBhcnQpKSlcbiAgICAuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIHNwbGl0Q29tbWVudChsaW5lKSB7XG4gIGNvbnN0IGlkeCA9IGxpbmUuaW5kZXhPZignOycpO1xuICBpZiAoaWR4IDwgMCkgcmV0dXJuIFtsaW5lLCAnJ107XG4gIHJldHVybiBbbGluZS5zbGljZSgwLCBpZHgpLCBsaW5lLnNsaWNlKGlkeCldO1xufVxuXG5mdW5jdGlvbiByZW5kZXJCYXNlKGJhc2UpIHtcbiAgaWYgKCFiYXNlLnRyaW0oKSkgcmV0dXJuIGVzYyhiYXNlKTtcblxuICBpZiAoL15cXHMqIyNcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqIyNcXHMrKSguKikkLywgKF8sIHAxLCBwMikgPT4gYCR7ZXNjKHAxKX0ke3NwYW4oJ3Rvay1zdWJ0cmFjaycsIHAyKX1gKTtcbiAgfVxuICBpZiAoL15cXHMqI1xccysvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC9eKFxccyojXFxzKykoLiopJC8sIChfLCBwMSwgcDIpID0+IGAke2VzYyhwMSl9JHtzcGFuKCd0b2stdHJhY2snLCBwMil9YCk7XG4gIH1cbiAgaWYgKC9eXFxzKkAvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gcmVuZGVyVG9rZW5zKGJhc2UucmVwbGFjZSgvPC9nLCAnIDwgJykpO1xuICB9XG4gIGlmICgvXlxccyo+Ly50ZXN0KGJhc2UpKSB7XG4gICAgY29uc3QgaW5kZW50ID0gZXNjKGJhc2UubWF0Y2goL15cXHMqLylbMF0pO1xuICAgIGNvbnN0IGJvZHkgPSBiYXNlLnRyaW1TdGFydCgpLnNsaWNlKDEpLnJlcGxhY2UoL15cXHMqLywgJyAnKTtcbiAgICBjb25zdCByZW5kZXJlZCA9IGJvZHlcbiAgICAgIC5zcGxpdCgvKFxccyspLylcbiAgICAgIC5tYXAocGFydCA9PiB7XG4gICAgICAgIGlmICghcGFydCB8fCAvXFxzKy8udGVzdChwYXJ0KSkgcmV0dXJuIHBhcnQ7XG4gICAgICAgIGlmICgvXltBLVpdW0EtWjAtOV0qJC8udGVzdChwYXJ0KSkgcmV0dXJuIHNwYW4oJ3Rvay1zZWN0aW9uJywgcGFydCwgeyBzZWN0aW9uOiBwYXJ0IH0pO1xuICAgICAgICByZXR1cm4gcmVuZGVyVG9rZW4ocGFydCk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpO1xuICAgIHJldHVybiBgJHtpbmRlbnR9JHtzcGFuKCd0b2stYXJyYW5nZW1lbnQnLCAnPicpfSR7cmVuZGVyZWR9YDtcbiAgfVxuICBpZiAoL15cXHMqJVteXFxzXStcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqKSglW15cXHNdKykoXFxzKikoLiopJC8sIChfLCBpLCB2LCBzLCByZXN0KSA9PiAoXG4gICAgICBgJHtlc2MoaSl9JHtzcGFuKCd0b2stdmFyLWRlZicsIHYsIHsgdmFyOiB2IH0pfSR7ZXNjKHMpfSR7cmVuZGVyVG9rZW5zKHJlc3QpfWBcbiAgICApKTtcbiAgfVxuICBpZiAoL15cXHMqI1xcZCsvLnRlc3QoYmFzZSkpIHtcbiAgICByZXR1cm4gcmVuZGVyVG9rZW5zKGJhc2UpO1xuICB9XG4gIHJldHVybiByZW5kZXJUb2tlbnMoYmFzZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWdobGlnaHQoaW5wdXQpIHtcbiAgcmV0dXJuIFN0cmluZyhpbnB1dCB8fCAnJylcbiAgICAuc3BsaXQoL1xccj9cXG4vKVxuICAgIC5tYXAobGluZSA9PiB7XG4gICAgICBjb25zdCBbYmFzZSwgY29tbWVudF0gPSBzcGxpdENvbW1lbnQobGluZSk7XG4gICAgICBjb25zdCByZW5kZXJlZCA9IHJlbmRlckJhc2UoYmFzZSk7XG4gICAgICBpZiAoIWNvbW1lbnQpIHJldHVybiByZW5kZXJlZDtcbiAgICAgIHJldHVybiBgJHtyZW5kZXJlZH0ke3NwYW4oJ3Rvay1jb21tZW50JywgY29tbWVudCl9YDtcbiAgICB9KVxuICAgIC5qb2luKCdcXG4nKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsSUFBSSxPQUFPO0FBQ2xCLFNBQU8sT0FBTyxLQUFLLEVBQ2hCLFFBQVEsTUFBTSxPQUFPLEVBQ3JCLFFBQVEsTUFBTSxNQUFNLEVBQ3BCLFFBQVEsTUFBTSxNQUFNO0FBQ3pCO0FBRUEsU0FBUyxLQUFLLEtBQUssT0FBTyxRQUFRLENBQUMsR0FBRztBQUNwQyxRQUFNLFlBQVksT0FBTyxRQUFRLEtBQUssRUFDbkMsSUFBSSxDQUFDLENBQUMsS0FBSyxTQUFTLE1BQU0sU0FBUyxHQUFHLEtBQUssSUFBSSxTQUFTLENBQUMsR0FBRyxFQUM1RCxLQUFLLEVBQUU7QUFDVixTQUFPLGdCQUFnQixHQUFHLElBQUksU0FBUyxJQUFJLElBQUksS0FBSyxDQUFDO0FBQ3ZEO0FBRUEsU0FBUyxTQUFTLE9BQU87QUFDdkIsTUFBSSxDQUFDLE1BQU8sUUFBTztBQUNuQixNQUFJLFVBQVUsSUFBSyxRQUFPO0FBQzFCLE1BQUksVUFBVSxJQUFLLFFBQU87QUFDMUIsTUFBSSxNQUFNLE9BQU8sQ0FBQyxNQUFNLElBQUssUUFBTztBQUNwQyxNQUFJLFVBQVUsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUNsQyxNQUFJLGdCQUFnQixLQUFLLEtBQUssRUFBRyxRQUFPO0FBQ3hDLE1BQUkscUJBQXFCLEtBQUssS0FBSyxFQUFHLFFBQU87QUFDN0MsTUFBSSxNQUFNLFNBQVMsR0FBRyxFQUFHLFFBQU87QUFDaEMsTUFBSSw2REFBNkQsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUNyRixNQUFJLG9EQUFvRCxLQUFLLEtBQUssRUFBRyxRQUFPO0FBQzVFLE1BQUksMEJBQTBCLEtBQUssS0FBSyxFQUFHLFFBQU87QUFDbEQsTUFBSSxTQUFTLEtBQUssS0FBSyxFQUFHLFFBQU87QUFDakMsTUFBSSxrQkFBa0IsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUMxQyxTQUFPO0FB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
