const RE_SECTION = /^[A-Z][A-Z0-9]*$/;
const RE_REPEAT = /^x(\d+)$/;
function isSection(value) {
  return RE_SECTION.test(String(value || ""));
}
function parseRepeat(value) {
  const m = String(value || "").match(RE_REPEAT);
  if (!m) return null;
  const n = parseInt(m[1], 10);
  if (!Number.isFinite(n)) return null;
  return Math.max(1, n);
}
function lex(body) {
  return (String(body || "").match(/\[|\]|[^\s\[\]]+/g) || []).map((text, idx) => ({
    text,
    index: idx,
    order: -1,
    kind: "unknown",
    blockId: null,
    blockLive: false,
    blockStartOrder: null,
    blockEndOrder: null
  }));
}
function applyBlockMeta(token, blockMeta) {
  if (!token || !blockMeta) return;
  token.blockId = blockMeta.id;
  token.blockLive = Boolean(blockMeta.live);
  token.blockStartOrder = blockMeta.startOrder;
  token.blockEndOrder = blockMeta.endOrder;
}
function parseSimpleRange(tokens, start, end, state, blockMeta, expanded) {
  let i = start;
  while (i < end) {
    const token = tokens[i];
    if (!token) break;
    applyBlockMeta(token, blockMeta);
    if (token.text === "[" || token.text === "]") {
      token.kind = token.text === "[" ? "block-open" : "block-close";
      i += 1;
      continue;
    }
    if (isSection(token.text)) {
      token.kind = "section";
      state.lastName = token.text;
      expanded.push({
        name: token.text,
        displayOrder: token.order,
        blockId: blockMeta ? blockMeta.id : null,
        blockLive: blockMeta ? Boolean(blockMeta.live) : false,
        blockStartOrder: blockMeta ? blockMeta.startOrder : null,
        blockEndOrder: blockMeta ? blockMeta.endOrder : null
      });
      i += 1;
      continue;
    }
    if (token.text === "%" && state.lastName) {
      token.kind = "repeat-last";
      expanded.push({
        name: state.lastName,
        displayOrder: token.order,
        blockId: blockMeta ? blockMeta.id : null,
        blockLive: blockMeta ? Boolean(blockMeta.live) : false,
        blockStartOrder: blockMeta ? blockMeta.startOrder : null,
        blockEndOrder: blockMeta ? blockMeta.endOrder : null
      });
      i += 1;
      continue;
    }
    const repeat = parseRepeat(token.text);
    if (repeat && state.lastName) {
      token.kind = "repeat";
      for (let k = 1; k < repeat; k += 1) {
        expanded.push({
          name: state.lastName,
          displayOrder: token.order,
          blockId: blockMeta ? blockMeta.id : null,
          blockLive: blockMeta ? Boolean(blockMeta.live) : false,
          blockStartOrder: blockMeta ? blockMeta.startOrder : null,
          blockEndOrder: blockMeta ? blockMeta.endOrder : null
        });
      }
      i += 1;
      continue;
    }
    token.kind = "unknown";
    i += 1;
  }
}
function parseArrangementBody(body, options = {}) {
  const orderOffset = Number.isFinite(options.orderOffset) ? options.orderOffset : 0;
  const blockOffset = Number.isFinite(options.blockOffset) ? options.blockOffset : 0;
  const tokens = lex(body);
  tokens.forEach((token, i2) => {
    token.order = orderOffset + i2;
  });
  const expanded = [];
  const state = { lastName: null };
  let nextBlock = blockOffset;
  let i = 0;
  while (i < tokens.length) {
    const token = tokens[i];
    if (!token) break;
    if (token.text !== "[") {
      parseSimpleRange(tokens, i, i + 1, state, null, expanded);
      i += 1;
      continue;
    }
    let close = -1;
    for (let j = i + 1; j < tokens.length; j += 1) {
      if (tokens[j].text === "]") {
        close = j;
        break;
      }
    }
    if (close < 0) {
      token.kind = "unknown";
      i += 1;
      continue;
    }
    const repeatToken = tokens[close + 1];
    const repeatCount = repeatToken ? parseRepeat(repeatToken.text) : null;
    const blockMeta = {
      id: `block-${nextBlock}`,
      live: !repeatCount,
      startOrder: token.order,
      endOrder: tokens[close].order
    };
    nextBlock += 1;
    const innerExpanded = [];
    parseSimpleRange(tokens, i, close + 1, state, blockMeta, innerExpanded);
    if (!innerExpanded.length) {
      i = close + (repeatCount ? 2 : 1);
      if (repeatToken && repeatCount) {
        repeatToken.kind = "repeat";
      }
      continue;
    }
    if (repeatToken && repeatCount) {
      repeatToken.kind = "repeat";
      for (let n = 0; n < repeatCount; n += 1) {
        innerExpanded.forEach((item) => {
          expanded.push({
            ...item,
            displayOrder: n === 0 ? item.displayOrder : repeatToken.order,
            blockLive: false
          });
        });
      }
      i = close + 2;
      continue;
    }
    expanded.push(...innerExpanded);
    i = close + 1;
  }
  return {
    tokens,
    expanded,
    nextOrder: orderOffset + tokens.length,
    nextBlock
  };
}
function buildArrangementMain(body) {
  const parsed = parseArrangementBody(body);
  if (parsed.tokens.some((token) => token.kind === "unknown")) return null;
  if (!parsed.expanded.length) return null;
  return parsed.expanded.map((item) => ({ type: "value", value: item.name }));
}
export {
  buildArrangementMain,
  parseArrangementBody
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2xpYi9zcmMvbGliL2FycmFuZ2VtZW50LmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBSRV9TRUNUSU9OID0gL15bQS1aXVtBLVowLTldKiQvO1xuY29uc3QgUkVfUkVQRUFUID0gL154KFxcZCspJC87XG5cbmZ1bmN0aW9uIGlzU2VjdGlvbih2YWx1ZSkge1xuICByZXR1cm4gUkVfU0VDVElPTi50ZXN0KFN0cmluZyh2YWx1ZSB8fCAnJykpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVJlcGVhdCh2YWx1ZSkge1xuICBjb25zdCBtID0gU3RyaW5nKHZhbHVlIHx8ICcnKS5tYXRjaChSRV9SRVBFQVQpO1xuICBpZiAoIW0pIHJldHVybiBudWxsO1xuICBjb25zdCBuID0gcGFyc2VJbnQobVsxXSwgMTApO1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBNYXRoLm1heCgxLCBuKTtcbn1cblxuZnVuY3Rpb24gbGV4KGJvZHkpIHtcbiAgcmV0dXJuIChTdHJpbmcoYm9keSB8fCAnJykubWF0Y2goL1xcW3xcXF18W15cXHNcXFtcXF1dKy9nKSB8fCBbXSlcbiAgICAubWFwKCh0ZXh0LCBpZHgpID0+ICh7XG4gICAgICB0ZXh0LFxuICAgICAgaW5kZXg6IGlkeCxcbiAgICAgIG9yZGVyOiAtMSxcbiAgICAgIGtpbmQ6ICd1bmtub3duJyxcbiAgICAgIGJsb2NrSWQ6IG51bGwsXG4gICAgICBibG9ja0xpdmU6IGZhbHNlLFxuICAgICAgYmxvY2tTdGFydE9yZGVyOiBudWxsLFxuICAgICAgYmxvY2tFbmRPcmRlcjogbnVsbCxcbiAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5QmxvY2tNZXRhKHRva2VuLCBibG9ja01ldGEpIHtcbiAgaWYgKCF0b2tlbiB8fCAhYmxvY2tNZXRhKSByZXR1cm47XG4gIHRva2VuLmJsb2NrSWQgPSBibG9ja01ldGEuaWQ7XG4gIHRva2VuLmJsb2NrTGl2ZSA9IEJvb2xlYW4oYmxvY2tNZXRhLmxpdmUpO1xuICB0b2tlbi5ibG9ja1N0YXJ0T3JkZXIgPSBibG9ja01ldGEuc3RhcnRPcmRlcjtcbiAgdG9rZW4uYmxvY2tFbmRPcmRlciA9IGJsb2NrTWV0YS5lbmRPcmRlcjtcbn1cblxuZnVuY3Rpb24gcGFyc2VTaW1wbGVSYW5nZSh0b2tlbnMsIHN0YXJ0LCBlbmQsIHN0YXRlLCBibG9ja01ldGEsIGV4cGFuZGVkKSB7XG4gIGxldCBpID0gc3RhcnQ7XG4gIHdoaWxlIChpIDwgZW5kKSB7XG4gICAgY29uc3QgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgaWYgKCF0b2tlbikgYnJlYWs7XG4gICAgYXBwbHlCbG9ja01ldGEodG9rZW4sIGJsb2NrTWV0YSk7XG5cbiAgICBpZiAodG9rZW4udGV4dCA9PT0gJ1snIHx8IHRva2VuLnRleHQgPT09ICddJykge1xuICAgICAgdG9rZW4ua2luZCA9IHRva2VuLnRleHQgPT09ICdbJyA/ICdibG9jay1vcGVuJyA6ICdibG9jay1jbG9zZSc7XG4gICAgICBpICs9IDE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNTZWN0aW9uKHRva2VuLnRleHQpKSB7XG4gICAgICB0b2tlbi5raW5kID0gJ3NlY3Rpb24nO1xuICAgICAgc3RhdGUubGFzdE5hbWUgPSB0b2tlbi50ZXh0O1xuICAgICAgZXhwYW5kZWQucHVzaCh7XG4gICAgICAgIG5hbWU6IHRva2VuLnRleHQsXG4gICAgICAgIGRpc3BsYXlPcmRlcjogdG9rZW4ub3JkZXIsXG4gICAgICAgIGJsb2NrSWQ6IGJsb2NrTWV0YSA/IGJsb2NrTWV0YS5pZCA6IG51bGwsXG4gICAgICAgIGJsb2NrTGl2ZTogYmxvY2tNZXRhID8gQm9vbGVhbihibG9ja01ldGEubGl2ZSkgOiBmYWxzZSxcbiAgICAgICAgYmxvY2tTdGFydE9yZGVyOiBibG9ja01ldGEgPyBibG9ja01ldGEuc3RhcnRPcmRlciA6IG51bGwsXG4gICAgICAgIGJsb2NrRW5kT3JkZXI6IGJsb2NrTWV0YSA/IGJsb2NrTWV0YS5lbmRPcmRlciA6IG51bGwsXG4gICAgICB9KTtcbiAgICAgIGkgKz0gMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh0b2tlbi50ZXh0ID09PSAnJScgJiYgc3RhdGUubGFzdE5hbWUpIHtcbiAgICAgIHRva2VuLmtpbmQgPSAncmVwZWF0LWxhc3QnO1xuICAgICAgZXhwYW5kZWQucHVzaCh7XG4gICAgICAgIG5hbWU6IHN0YXRlLmxhc3ROYW1lLFxuICAgICAgICBkaXNwbGF5T3JkZXI6IHRva2VuLm9yZGVyLFxuICAgICAgICBibG9ja0lkOiBibG9ja01ldGEgPyBibG9ja01ldGEuaWQgOiBudWxsLFxuICAgICAgICBibG9ja0xpdmU6IGJsb2NrTWV0YSA/IEJvb2xlYW4oYmxvY2tNZXRhLmxpdmUpIDogZmFsc2UsXG4gICAgICAgIGJsb2NrU3RhcnRPcmRlcjogYmxvY2tNZXRhID8gYmxvY2tNZXRhLnN0YXJ0T3JkZXIgOiBudWxsLFxuICAgICAgICBibG9ja0VuZE9yZGVyOiBibG9ja01ldGEgPyBibG9ja01ldGEuZW5kT3JkZXIgOiBudWxsLFxuICAgICAgfSk7XG4gICAgICBpICs9IDE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBjb25zdCByZXBlYXQgPSBwYXJzZVJlcGVhdCh0b2tlbi50ZXh0KTtcbiAgICBpZiAocmVwZWF0ICYmIHN0YXRlLmxhc3ROYW1lKSB7XG4gICAgICB0b2tlbi5raW5kID0gJ3JlcGVhdCc7XG4gICAgICBmb3IgKGxldCBrID0gMTsgayA8IHJlcGVhdDsgayArPSAxKSB7XG4gICAgICAgIGV4cGFuZGVkLnB1c2goe1xuICAgICAgICAgIG5hbWU6IHN0YXRlLmxhc3ROYW1lLFxuICAgICAgICAgIGRpc3BsYXlPcmRlcjogdG9rZW4ub3JkZXIsXG4gICAgICAgICAgYmxvY2tJZDogYmxvY2tNZXRhID8gYmxvY2tNZXRhLmlkIDogbnVsbCxcbiAgICAgICAgICBibG9ja0xpdmU6IGJsb2NrTWV0YSA/IEJvb2xlYW4oYmxvY2tNZXRhLmxpdmUpIDogZmFsc2UsXG4gICAgICAgICAgYmxvY2tTdGFydE9yZGVyOiBibG9ja01ldGEgPyBibG9ja01ldGEuc3RhcnRPcmRlciA6IG51bGwsXG4gICAgICAgICAgYmxvY2tFbmRPcmRlcjogYmxvY2tNZXRhID8gYmxvY2tNZXRhLmVuZE9yZGVyIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpICs9IDE7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0b2tlbi5raW5kID0gJ3Vua25vd24nO1xuICAgIGkgKz0gMTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBcnJhbmdlbWVudEJvZHkoYm9keSwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IG9yZGVyT2Zmc2V0ID0gTnVtYmVyLmlzRmluaXRlKG9wdGlvbnMub3JkZXJPZmZzZXQpID8gb3B0aW9ucy5vcmRlck9mZnNldCA6IDA7XG4gIGNvbnN0IGJsb2NrT2Zmc2V0ID0gTnVtYmVyLmlzRmluaXRlKG9wdGlvbnMuYmxvY2tPZmZzZXQpID8gb3B0aW9ucy5ibG9ja09mZnNldCA6IDA7XG4gIGNvbnN0IHRva2VucyA9IGxleChib2R5KTtcbiAgdG9rZW5zLmZvckVhY2goKHRva2VuLCBpKSA9PiB7XG4gICAgdG9rZW4ub3JkZXIgPSBvcmRlck9mZnNldCArIGk7XG4gIH0pO1xuXG4gIGNvbnN0IGV4cGFuZGVkID0gW107XG4gIGNvbnN0IHN0YXRlID0geyBsYXN0TmFtZTogbnVsbCB9O1xuICBsZXQgbmV4dEJsb2NrID0gYmxvY2tPZmZzZXQ7XG5cbiAgbGV0IGkgPSAwO1xuICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICBjb25zdCB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICBpZiAoIXRva2VuKSBicmVhaztcblxuICAgIGlmICh0b2tlbi50ZXh0ICE9PSAnWycpIHtcbiAgICAgIHBhcnNlU2ltcGxlUmFuZ2UodG9rZW5zLCBpLCBpICsgMSwgc3RhdGUsIG51bGwsIGV4cGFuZGVkKTtcbiAgICAgIGkgKz0gMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGxldCBjbG9zZSA9IC0xO1xuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHRva2Vucy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgaWYgKHRva2Vuc1tqXS50ZXh0ID09PSAnXScpIHtcbiAgICAgICAgY2xvc2UgPSBqO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2xvc2UgPCAwKSB7XG4gICAgICB0b2tlbi5raW5kID0gJ3Vua25vd24nO1xuICAgICAgaSArPSAxO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY29uc3QgcmVwZWF0VG9rZW4gPSB0b2tlbnNbY2xvc2UgKyAxXTtcbiAgICBjb25zdCByZXBlYXRDb3VudCA9IHJlcGVhdFRva2VuID8gcGFyc2VSZXBlYXQocmVwZWF0VG9rZW4udGV4dCkgOiBudWxsO1xuICAgIGNvbnN0IGJsb2NrTWV0YSA9IHtcbiAgICAgIGlkOiBgYmxvY2stJHtuZXh0QmxvY2t9YCxcbiAgICAgIGxpdmU6ICFyZXBlYXRDb3VudCxcbiAgICAgIHN0YXJ0T3JkZXI6IHRva2VuLm9yZGVyLFxuICAgICAgZW5kT3JkZXI6IHRva2Vuc1tjbG9zZV0ub3JkZXIsXG4gICAgfTtcbiAgICBuZXh0QmxvY2sgKz0gMTtcblxuICAgIGNvbnN0IGlubmVyRXhwYW5kZWQgPSBbXTtcbiAgICBwYXJzZVNpbXBsZVJhbmdlKHRva2VucywgaSwgY2xvc2UgKyAxLCBzdGF0ZSwgYmxvY2tNZXRhLCBpbm5lckV4cGFuZGVkKTtcblxuICAgIGlmICghaW5uZXJFeHBhbmRlZC5sZW5ndGgpIHtcbiAgICAgIGkgPSBjbG9zZSArIChyZXBlYXRDb3VudCA/IDIgOiAxKTtcbiAgICAgIGlmIChyZXBlYXRUb2tlbiAmJiByZXBlYXRDb3VudCkge1xuICAgICAgICByZXBlYXRUb2tlbi5raW5kID0gJ3JlcGVhdCc7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAocmVwZWF0VG9rZW4gJiYgcmVwZWF0Q291bnQpIHtcbiAgICAgIHJlcGVhdFRva2VuLmtpbmQgPSAncmVwZWF0JztcbiAgICAgIGZvciAobGV0IG4gPSAwOyBuIDwgcmVwZWF0Q291bnQ7IG4gKz0gMSkge1xuICAgICAgICBpbm5lckV4cGFuZGVkLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgZXhwYW5kZWQucHVzaCh7XG4gICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgZGlzcGxheU9yZGVyOiBuID09PSAwID8gaXRlbS5kaXNwbGF5T3JkZXIgOiByZXBlYXRUb2tlbi5vcmRlcixcbiAgICAgICAgICAgIGJsb2NrTGl2ZTogZmFsc2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaSA9IGNsb3NlICsgMjtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGV4cGFuZGVkLnB1c2goLi4uaW5uZXJFeHBhbmRlZCk7XG4gICAgaSA9IGNsb3NlICsgMTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdG9rZW5zLFxuICAgIGV4cGFuZGVkLFxuICAgIG5leHRPcmRlcjogb3JkZXJPZmZzZXQgKyB0b2tlbnMubGVuZ3RoLFxuICAgIG5leHRCbG9jayxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQXJyYW5nZW1lbnRNYWluKGJvZHkpIHtcbiAgY29uc3QgcGFyc2VkID0gcGFyc2VBcnJhbmdlbWVudEJvZHkoYm9keSk7XG4gIGlmIChwYXJzZWQudG9rZW5zLnNvbWUodG9rZW4gPT4gdG9rZW4ua2luZCA9PT0gJ3Vua25vd24nKSkgcmV0dXJuIG51bGw7XG4gIGlmICghcGFyc2VkLmV4cGFuZGVkLmxlbmd0aCkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBwYXJzZWQuZXhwYW5kZWQubWFwKGl0ZW0gPT4gKHsgdHlwZTogJ3ZhbHVlJywgdmFsdWU6IGl0ZW0ubmFtZSB9KSk7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
