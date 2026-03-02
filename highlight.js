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
  return String(input || "").split(/\r?\n/).map((line) => {
    const [base, comment] = splitComment(line);
    const rendered = renderBase(base);
    if (!comment) return rendered;
    return `${rendered}${span("tok-comment", comment)}`;
  }).join("\n");
}
Object.assign(module.exports,{highlight});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3NyYy9oaWdobGlnaHQuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImZ1bmN0aW9uIGVzYyh2YWx1ZSkge1xuICByZXR1cm4gU3RyaW5nKHZhbHVlKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5cbmZ1bmN0aW9uIHNwYW4oY2xzLCB2YWx1ZSwgYXR0cnMgPSB7fSkge1xuICBjb25zdCBkYXRhQXR0cnMgPSBPYmplY3QuZW50cmllcyhhdHRycylcbiAgICAubWFwKChba2V5LCBhdHRyVmFsdWVdKSA9PiBgIGRhdGEtJHtrZXl9PVwiJHtlc2MoYXR0clZhbHVlKX1cImApXG4gICAgLmpvaW4oJycpO1xuICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiJHtjbHN9XCIke2RhdGFBdHRyc30+JHtlc2ModmFsdWUpfTwvc3Bhbj5gO1xufVxuXG5mdW5jdGlvbiBjbGFzc2lmeSh0b2tlbikge1xuICBpZiAoIXRva2VuKSByZXR1cm4gbnVsbDtcbiAgaWYgKHRva2VuID09PSAnPCcpIHJldHVybiAndG9rLWluaGVyaXQnO1xuICBpZiAodG9rZW4gPT09ICclJykgcmV0dXJuICd0b2stdmFyLXJlZic7XG4gIGlmICh0b2tlbi5jaGFyQXQoMCkgPT09ICclJykgcmV0dXJuICd0b2stdmFyLXJlZic7XG4gIGlmICgvXlxcKlxcZCskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcmVwZWF0JztcbiAgaWYgKC9eW3hfXFwtXFxbXFxdXSskLy50ZXN0KHRva2VuKSkgcmV0dXJuICd0b2stcGF0dGVybic7XG4gIGlmICgvXlthLWdBLUddWyNiXT9cXGQrJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW5vdGUnO1xuICBpZiAodG9rZW4uaW5jbHVkZXMoJ3wnKSkgcmV0dXJuICd0b2stY2hvcmQnO1xuICBpZiAoL14obWFqb3J8bWlub3J8cGhyeWdpYW58ZG9yaWFufG1peG9seWRpYW58bG9jcmlhbnxseWRpYW4pJC9pLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1tb2RlJztcbiAgaWYgKC9eKD86SXxJSXxJSUl8SVZ8VnxWSXxWSUl8aXxpaXxpaWl8aXZ8dnx2aXx2aWkpXHUwMEIwPyQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1wcm9ncmVzc2lvbic7XG4gIGlmICgvXig/OlxcK1xcK3xcXC5cXC58Pj58XFwqXFwqKSQvLnRlc3QodG9rZW4pKSByZXR1cm4gJ3Rvay1vcGVyYXRvcic7XG4gIGlmICgvXiNcXGQrJC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLWNoYW5uZWwnO1xuICBpZiAoL14tP1xcZCsoXFwuXFxkKyk/JC8udGVzdCh0b2tlbikpIHJldHVybiAndG9rLW51bWJlcic7XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUb2tlbih0b2tlbikge1xuICBjb25zdCBjbHMgPSBjbGFzc2lmeSh0b2tlbik7XG4gIGlmICghY2xzKSByZXR1cm4gZXNjKHRva2VuKTtcbiAgaWYgKGNscyA9PT0gJ3Rvay12YXItcmVmJyAmJiB0b2tlbiAhPT0gJyUnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IHZhcjogdG9rZW4gfSk7XG4gIGlmIChjbHMgPT09ICd0b2stY2hhbm5lbCcpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgaW5zdHJ1bWVudDogdG9rZW4uc2xpY2UoMSkgfSk7XG4gIGlmIChjbHMgPT09ICd0b2stbW9kZScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgbW9kZTogdG9rZW4udG9Mb3dlckNhc2UoKSB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1wYXR0ZXJuJykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyBwYXR0ZXJuOiAnMScgfSk7XG4gIGlmIChjbHMgPT09ICd0b2stbm90ZScpIHJldHVybiBzcGFuKGNscywgdG9rZW4sIHsgbm90ZTogdG9rZW4gfSk7XG4gIGlmIChjbHMgPT09ICd0b2stY2hvcmQnKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IGNob3JkOiB0b2tlbiB9KTtcbiAgaWYgKGNscyA9PT0gJ3Rvay1udW1iZXInKSByZXR1cm4gc3BhbihjbHMsIHRva2VuLCB7IG51bWJlcjogdG9rZW4gfSk7XG4gIGlmIChjbHMgPT09ICd0b2stcmVwZWF0JykgcmV0dXJuIHNwYW4oY2xzLCB0b2tlbiwgeyByZXBlYXQ6IHRva2VuLnNsaWNlKDEpIH0pO1xuICByZXR1cm4gc3BhbihjbHMsIHRva2VuKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVG9rZW5zKHRleHQpIHtcbiAgcmV0dXJuIHRleHRcbiAgICAuc3BsaXQoLyhcXHMrKS8pXG4gICAgLm1hcChwYXJ0ID0+ICgvXFxzKy8udGVzdChwYXJ0KSA/IHBhcnQgOiByZW5kZXJUb2tlbihwYXJ0KSkpXG4gICAgLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBzcGxpdENvbW1lbnQobGluZSkge1xuICBjb25zdCBpZHggPSBsaW5lLmluZGV4T2YoJzsnKTtcbiAgaWYgKGlkeCA8IDApIHJldHVybiBbbGluZSwgJyddO1xuICByZXR1cm4gW2xpbmUuc2xpY2UoMCwgaWR4KSwgbGluZS5zbGljZShpZHgpXTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQmFzZShiYXNlKSB7XG4gIGlmICghYmFzZS50cmltKCkpIHJldHVybiBlc2MoYmFzZSk7XG5cbiAgaWYgKC9eXFxzKiMjXFxzKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoL14oXFxzKiMjXFxzKykoLiopJC8sIChfLCBwMSwgcDIpID0+IGAke2VzYyhwMSl9JHtzcGFuKCd0b2stc3VidHJhY2snLCBwMil9YCk7XG4gIH1cbiAgaWYgKC9eXFxzKiNcXHMrLy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvXihcXHMqI1xccyspKC4qKSQvLCAoXywgcDEsIHAyKSA9PiBgJHtlc2MocDEpfSR7c3BhbigndG9rLXRyYWNrJywgcDIpfWApO1xuICB9XG4gIGlmICgvXlxccypALy50ZXN0KGJhc2UpKSB7XG4gICAgcmV0dXJuIHJlbmRlclRva2VucyhiYXNlLnJlcGxhY2UoLzwvZywgJyA8ICcpKTtcbiAgfVxuICBpZiAoL15cXHMqPi8udGVzdChiYXNlKSkge1xuICAgIGNvbnN0IGluZGVudCA9IGVzYyhiYXNlLm1hdGNoKC9eXFxzKi8pWzBdKTtcbiAgICBjb25zdCBib2R5ID0gYmFzZS50cmltU3RhcnQoKS5zbGljZSgxKS5yZXBsYWNlKC9eXFxzKi8sICcgJyk7XG4gICAgY29uc3QgcmVuZGVyZWQgPSBib2R5XG4gICAgICAuc3BsaXQoLyhcXHMrKS8pXG4gICAgICAubWFwKHBhcnQgPT4ge1xuICAgICAgICBpZiAoIXBhcnQgfHwgL1xccysvLnRlc3QocGFydCkpIHJldHVybiBwYXJ0O1xuICAgICAgICBpZiAoL15bQS1aXVtBLVowLTldKiQvLnRlc3QocGFydCkpIHJldHVybiBzcGFuKCd0b2stc2VjdGlvbicsIHBhcnQsIHsgc2VjdGlvbjogcGFydCB9KTtcbiAgICAgICAgcmV0dXJuIHJlbmRlclRva2VuKHBhcnQpO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKTtcbiAgICByZXR1cm4gYCR7aW5kZW50fSR7c3BhbigndG9rLWFycmFuZ2VtZW50JywgJz4nKX0ke3JlbmRlcmVkfWA7XG4gIH1cbiAgaWYgKC9eXFxzKiVbXlxcc10rXFxzKy8udGVzdChiYXNlKSkge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoL14oXFxzKikoJVteXFxzXSspKFxccyopKC4qKSQvLCAoXywgaSwgdiwgcywgcmVzdCkgPT4gKFxuICAgICAgYCR7ZXNjKGkpfSR7c3BhbigndG9rLXZhci1kZWYnLCB2LCB7IHZhcjogdiB9KX0ke2VzYyhzKX0ke3JlbmRlclRva2VucyhyZXN0KX1gXG4gICAgKSk7XG4gIH1cbiAgaWYgKC9eXFxzKiNcXGQrLy50ZXN0KGJhc2UpKSB7XG4gICAgbGV0IHZlbG9jaXR5VGFnZ2VkID0gZmFsc2U7XG4gICAgcmV0dXJuIGJhc2Uuc3BsaXQoLyhcXHMrKS8pLm1hcChwYXJ0ID0+IHtcbiAgICAgIGlmICgvXlxccyokLy50ZXN0KHBhcnQpKSByZXR1cm4gcGFydDtcbiAgICAgIGNvbnN0IGNscyA9IGNsYXNzaWZ5KHBhcnQpO1xuICAgICAgaWYgKGNscyA9PT0gJ3Rvay1udW1iZXInICYmICF2ZWxvY2l0eVRhZ2dlZCkge1xuICAgICAgICB2ZWxvY2l0eVRhZ2dlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBzcGFuKGNscywgcGFydCwgeyB2ZWxvY2l0eTogcGFydCB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZW5kZXJUb2tlbihwYXJ0KTtcbiAgICB9KS5qb2luKCcnKTtcbiAgfVxuICByZXR1cm4gcmVuZGVyVG9rZW5zKGJhc2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlnaGxpZ2h0KGlucHV0KSB7XG4gIHJldHVybiBTdHJpbmcoaW5wdXQgfHwgJycpXG4gICAgLnNwbGl0KC9cXHI/XFxuLylcbiAgICAubWFwKGxpbmUgPT4ge1xuICAgICAgY29uc3QgW2Jhc2UsIGNvbW1lbnRdID0gc3BsaXRDb21tZW50KGxpbmUpO1xuICAgICAgY29uc3QgcmVuZGVyZWQgPSByZW5kZXJCYXNlKGJhc2UpO1xuICAgICAgaWYgKCFjb21tZW50KSByZXR1cm4gcmVuZGVyZWQ7XG4gICAgICByZXR1cm4gYCR7cmVuZGVyZWR9JHtzcGFuKCd0b2stY29tbWVudCcsIGNvbW1lbnQpfWA7XG4gICAgfSlcbiAgICAuam9pbignXFxuJyk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiQUFBQSxTQUFTLElBQUksT0FBTztBQUNsQixTQUFPLE9BQU8sS0FBSyxFQUNoQixRQUFRLE1BQU0sT0FBTyxFQUNyQixRQUFRLE1BQU0sTUFBTSxFQUNwQixRQUFRLE1BQU0sTUFBTTtBQUN6QjtBQUVBLFNBQVMsS0FBSyxLQUFLLE9BQU8sUUFBUSxDQUFDLEdBQUc7QUFDcEMsUUFBTSxZQUFZLE9BQU8sUUFBUSxLQUFLLEVBQ25DLElBQUksQ0FBQyxDQUFDLEtBQUssU0FBUyxNQUFNLFNBQVMsR0FBRyxLQUFLLElBQUksU0FBUyxDQUFDLEdBQUcsRUFDNUQsS0FBSyxFQUFFO0FBQ1YsU0FBTyxnQkFBZ0IsR0FBRyxJQUFJLFNBQVMsSUFBSSxJQUFJLEtBQUssQ0FBQztBQUN2RDtBQUVBLFNBQVMsU0FBUyxPQUFPO0FBQ3ZCLE1BQUksQ0FBQyxNQUFPLFFBQU87QUFDbkIsTUFBSSxVQUFVLElBQUssUUFBTztBQUMxQixNQUFJLFVBQVUsSUFBSyxRQUFPO0FBQzFCLE1BQUksTUFBTSxPQUFPLENBQUMsTUFBTSxJQUFLLFFBQU87QUFDcEMsTUFBSSxVQUFVLEtBQUssS0FBSyxFQUFHLFFBQU87QUFDbEMsTUFBSSxnQkFBZ0IsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUN4QyxNQUFJLHFCQUFxQixLQUFLLEtBQUssRUFBRyxRQUFPO0FBQzdDLE1BQUksTUFBTSxTQUFTLEdBQUcsRUFBRyxRQUFPO0FBQ2hDLE1BQUksNkRBQTZELEtBQUssS0FBSyxFQUFHLFFBQU87QUFDckYsTUFBSSxvREFBb0QsS0FBSyxLQUFLLEVBQUcsUUFBTztBQUM1RSxNQUFJLDBCQUEwQixLQUFLLEtBQUssRUFBRyxRQUFPO0FBQ2xELE1BQUksU0FBUyxLQUFLLEtBQUssRUFBRyxRQUFPO0FBQ2pDLE1BQUksa0JBQWtCLEtBQUssS0FBSyxFQUFHLFFBQU87QUFDMUMsU0FBTztBQUNUO0FBRUEsU0FBUyxZQUFZLE9BQU87QUFDMUIsUUFBTSxNQUFNLFNBQVMsS0FBSztBQUMxQixNQUFJLENBQUMsSUFBSyxRQUFPLElBQUksS0FBSztBQUMxQixNQUFJLFFBQVEsaUJBQWlCLFVBQVUsSUFBSyxRQUFPLEtBQUssS0FBSyxPQUFPLEVBQUUsS0FBSyxNQUFNLENBQUM7QUFDbEYsTUFBSSxRQUFRLGNBQWUsUUFBTyxLQUFLLEtBQUssT0FBTyxFQUFFLFlBQVksTUFBTSxNQUFNLENBQUMsRUFBRSxDQUFDO0FBQ2pGLE1BQUksUUFBUSxXQUFZLFFBQU8sS0FBSyxLQUFLLE9BQU8sRUFBRSxNQUFNLE1BQU0sWUFBWSxFQUFFLENBQUM7QUFDN0UsTUFBSSxRQUFRLGNBQWUsUUFBTyxLQUFLLEtBQUssT0FBTyxFQUFFLFNBQVMsSUFBSSxDQUFDO0FBQ25FLE1BQUksUUFBUSxXQUFZLFFBQU8sS0FBSyxLQUFLLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvRCxNQUFJLFFBQVEsWUFBYSxRQUFPLEtBQUssS0FBSyxPQUFPLEVBQUUsT0FBTyxNQUFNLENBQUM7QUFDakUsTUFBSSxRQUFRLGFBQWMsUUFBTyxLQUFLLEtBQUssT0FBTyxFQUFFLFFBQVEsTUFBTSxDQUFDO0FBQ25FLE1BQUksUUFBUSxhQUFjLFFBQU8sS0FBSyxLQUFLLE9BQU8sRUFBRSxRQUFRLE1BQU0sTUFBTSxDQUFDLEVBQUUsQ0FBQztBQUM1RSxTQUFPLEtBQUssS0FBSyxLQUFLO0FBQ3hCO0FBRUEsU0FBUyxhQUFhLE1BQU07QUFDMUIsU0FBTyxLQUNKLE1BQU0sT0FBTyxFQUNiLElBQUksVUFBUyxNQUFNLEtBQUssSUFBSSxJQUFJLE9BQU8sWUFBWSxJQUFJLENBQUUsRUFDekQsS0FBSyxFQUFFO0FBQ1o7QUFFQSxTQUFTLGFBQWEsTUFBTTtBQUMxQixRQUFNLE1BQU0sS0FBSyxRQUFRLEdBQUc7QUFDNUIsTUFBSSxNQUFNLEVBQUcsUUFBTyxDQUFDLE1BQU0sRUFBRTtBQUM3QixTQUFPLENBQUMsS0FBSyxNQUFNLEdBQUcsR0FBRyxHQUFHLEtBQUssTUFBTSxHQUFHLENBQUM7QUFDN0M7QUFFQSxTQUFTLFdBQVcsTUFBTTtBQUN4QixNQUFJLENBQUMsS0FBSyxLQUFLLEVBQUcsUUFBTyxJQUFJLElBQUk7QUFFakMsTUFBSSxZQUFZLEtBQUssSUFBSSxHQUFHO0FBQzFCLFdBQU8sS0FBSyxRQUFRLG9CQUFvQixDQUFDLEdBQUcsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLGdCQUFnQixFQUFFLENBQUMsRUFBRTtBQUFBLEVBQ2hHO0FBQ0EsTUFBSSxXQUFXLEtBQUssSUFBSSxHQUFHO0FBQ3pCLFdBQU8sS0FBSyxRQUFRLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxLQUFLLGFBQWEsRUFBRSxDQUFDLEVBQUU7QUFBQSxFQUM1RjtBQUNBLE1BQUksUUFBUSxLQUFLLElBQUksR0FBRztBQUN0QixXQUFPLGFBQWEsS0FBSyxRQUFRLE1BQU0sS0FBSyxDQUFDO0FBQUEsRUFDL0M7QUFDQSxNQUFJLFFBQVEsS0FBSyxJQUFJLEdBQUc7QUFDdEIsVUFBTSxTQUFTLElBQUksS0FBSyxNQUFNLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDeEMsVUFBTSxPQUFPLEtBQUssVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFLFFBQVEsUUFBUSxHQUFHO0FBQzFELFVBQU0sV0FBVyxLQUNkLE1BQU0sT0FBTyxFQUNiLElBQUksVUFBUTtBQUNYLFVBQUksQ0FBQyxRQUFRLE1BQU0sS0FBSyxJQUFJLEVBQUcsUUFBTztBQUN0QyxVQUFJLG1CQUFtQixLQUFLLElBQUksRUFBRyxRQUFPLEtBQUssZUFBZSxNQUFNLEVBQUUsU0FBUyxLQUFLLENBQUM7QUFDckYsYUFBTyxZQUFZLElBQUk7QUFBQSxJQUN6QixDQUFDLEVBQ0EsS0FBSyxFQUFFO0FBQ1YsV0FBTyxHQUFHLE1BQU0sR0FBRyxLQUFLLG1CQUFtQixHQUFHLENBQUMsR0FBRyxRQUFRO0FBQUEsRUFDNUQ7QUFDQSxNQUFJLGlCQUFpQixLQUFLLElBQUksR0FBRztBQUMvQixXQUFPLEtBQUssUUFBUSw2QkFBNkIsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLFNBQzVELEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLGVBQWUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLGFBQWEsSUFBSSxDQUFDLEVBQzdFO0FBQUEsRUFDSDtBQUNBLE1BQUksV0FBVyxLQUFLLElBQUksR0FBRztBQUN6QixRQUFJLGlCQUFpQjtBQUNyQixXQUFPLEtBQUssTUFBTSxPQUFPLEVBQUUsSUFBSSxVQUFRO0FBQ3JDLFVBQUksUUFBUSxLQUFLLElBQUksRUFBRyxRQUFPO0FBQy9CLFlBQU0sTUFBTSxTQUFTLElBQUk7QUFDekIsVUFBSSxRQUFRLGdCQUFnQixDQUFDLGdCQUFnQjtBQUMzQyx5QkFBaUI7QUFDakIsZUFBTyxLQUFLLEtBQUssTUFBTSxFQUFFLFVBQVUsS0FBSyxDQUFDO0FBQUEsTUFDM0M7QUFDQSxhQUFPLFlBQVksSUFBSTtBQUFBLElBQ3pCLENBQUMsRUFBRSxLQUFLLEVBQUU7QUFBQSxFQUNaO0FBQ0EsU0FBTyxhQUFhLElBQUk7QUFDMUI7QUFFTyxTQUFTLFVBQVUsT0FBTztBQUMvQixTQUFPLE9BQU8sU0FBUyxFQUFFLEVBQ3RCLE1BQU0sT0FBTyxFQUNiLElBQUksVUFBUTtBQUNYLFVBQU0sQ0FBQyxNQUFNLE9BQU8sSUFBSSxhQUFhLElBQUk7QUFDekMsVUFBTSxXQUFXLFdBQVcsSUFBSTtBQUNoQyxRQUFJLENBQUMsUUFBUyxRQUFPO0FBQ3JCLFdBQU8sR0FBRyxRQUFRLEdBQUcsS0FBSyxlQUFlLE9BQU8sQ0FBQztBQUFBLEVBQ25ELENBQUMsRUFDQSxLQUFLLElBQUk7QUFDZDsiLAogICJuYW1lcyI6IFtdCn0K
