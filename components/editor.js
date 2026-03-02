const { highlight } = require("../highlight");
function clampTooltip(x, y, width = 320) {
  const maxX = Math.max(8, window.innerWidth - width - 8);
  const left = Math.min(x + 12, maxX);
  const top = Math.min(y + 12, window.innerHeight - 72);
  return { left, top };
}
function createEditor(initialText, options = {}) {
  const wrap = document.createElement("div");
  wrap.id = "editor-wrap";
  const pre = document.createElement("pre");
  pre.id = "editor-hl";
  pre.setAttribute("aria-hidden", "true");
  const ta = document.createElement("textarea");
  ta.id = "editor";
  ta.spellcheck = false;
  ta.autocomplete = "off";
  ta.value = initialText;
  const tip = document.createElement("div");
  tip.id = "var-tooltip";
  tip.hidden = true;
  tip.innerHTML = '<strong></strong><span class="tooltip-resolved"></span>';
  const tipTitle = tip.querySelector("strong");
  const tipBody = tip.querySelector(".tooltip-resolved");
  const tooltipHandlers = [
    options.resolveInstrument && {
      attr: "instrument",
      resolve: options.resolveInstrument,
      title: (value) => `#${value}`
    },
    options.resolveMode && {
      attr: "mode",
      resolve: options.resolveMode,
      title: (value) => value
    },
    options.resolveSection && {
      attr: "section",
      resolve: options.resolveSection,
      title: (value) => `@${value}`
    },
    options.resolveVar && {
      attr: "var",
      resolve: options.resolveVar,
      title: (value) => value
    },
    {
      attr: "pattern",
      resolve: () => "x = hit  |  - = hold  |  _ = rest  |  [ ] = subdivide",
      title: () => "Rhythm pattern"
    }
  ].filter(Boolean);
  function sync() {
    pre.innerHTML = `${highlight(ta.value)}
`;
  }
  function hideTooltip() {
    tip.hidden = true;
  }
  ta.addEventListener("scroll", () => {
    pre.scrollTop = ta.scrollTop;
    pre.scrollLeft = ta.scrollLeft;
  });
  ta.addEventListener("input", () => {
    sync();
    hideTooltip();
    if (options.onInput) options.onInput(ta.value);
  });
  ta.addEventListener("mousemove", (e) => {
    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    const found = tooltipHandlers.map((handler) => {
      const hit = elements.find((el) => el.dataset && el.dataset[handler.attr]);
      return hit ? { handler, value: hit.dataset[handler.attr] } : null;
    }).find(Boolean);
    if (!found) {
      hideTooltip();
      return;
    }
    const text = found.handler.resolve(found.value);
    if (!text) {
      hideTooltip();
      return;
    }
    const pos = clampTooltip(e.clientX, e.clientY);
    tipTitle.textContent = found.handler.title(found.value);
    tipBody.textContent = text;
    tip.style.left = `${pos.left}px`;
    tip.style.top = `${pos.top}px`;
    tip.hidden = false;
  });
  ta.addEventListener("mouseleave", hideTooltip);
  sync();
  wrap.appendChild(pre);
  wrap.appendChild(ta);
  wrap.appendChild(tip);
  return {
    el: wrap,
    textarea: ta,
    on: (event, fn) => ta.addEventListener(event, fn),
    getValue: () => ta.value,
    setValue: (value) => {
      ta.value = value;
      sync();
      hideTooltip();
    },
    focus: () => ta.focus()
  };
}
Object.assign(module.exports,{createEditor});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvZWRpdG9yLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBoaWdobGlnaHQgfSBmcm9tICcuLi9oaWdobGlnaHQnO1xuXG5mdW5jdGlvbiBjbGFtcFRvb2x0aXAoeCwgeSwgd2lkdGggPSAzMjApIHtcbiAgY29uc3QgbWF4WCA9IE1hdGgubWF4KDgsIHdpbmRvdy5pbm5lcldpZHRoIC0gd2lkdGggLSA4KTtcbiAgY29uc3QgbGVmdCA9IE1hdGgubWluKHggKyAxMiwgbWF4WCk7XG4gIGNvbnN0IHRvcCA9IE1hdGgubWluKHkgKyAxMiwgd2luZG93LmlubmVySGVpZ2h0IC0gNzIpO1xuICByZXR1cm4geyBsZWZ0LCB0b3AgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVkaXRvcihpbml0aWFsVGV4dCwgb3B0aW9ucyA9IHt9KSB7XG4gIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd3JhcC5pZCA9ICdlZGl0b3Itd3JhcCc7XG5cbiAgY29uc3QgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XG4gIHByZS5pZCA9ICdlZGl0b3ItaGwnO1xuICBwcmUuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG5cbiAgY29uc3QgdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICB0YS5pZCA9ICdlZGl0b3InO1xuICB0YS5zcGVsbGNoZWNrID0gZmFsc2U7XG4gIHRhLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICB0YS52YWx1ZSA9IGluaXRpYWxUZXh0O1xuXG4gIGNvbnN0IHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aXAuaWQgPSAndmFyLXRvb2x0aXAnO1xuICB0aXAuaGlkZGVuID0gdHJ1ZTtcbiAgdGlwLmlubmVySFRNTCA9ICc8c3Ryb25nPjwvc3Ryb25nPjxzcGFuIGNsYXNzPVwidG9vbHRpcC1yZXNvbHZlZFwiPjwvc3Bhbj4nO1xuICBjb25zdCB0aXBUaXRsZSA9IHRpcC5xdWVyeVNlbGVjdG9yKCdzdHJvbmcnKTtcbiAgY29uc3QgdGlwQm9keSA9IHRpcC5xdWVyeVNlbGVjdG9yKCcudG9vbHRpcC1yZXNvbHZlZCcpO1xuICBjb25zdCB0b29sdGlwSGFuZGxlcnMgPSBbXG4gICAgb3B0aW9ucy5yZXNvbHZlSW5zdHJ1bWVudCAmJiB7XG4gICAgICBhdHRyOiAnaW5zdHJ1bWVudCcsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVJbnN0cnVtZW50LFxuICAgICAgdGl0bGU6IHZhbHVlID0+IGAjJHt2YWx1ZX1gLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlTW9kZSAmJiB7XG4gICAgICBhdHRyOiAnbW9kZScsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVNb2RlLFxuICAgICAgdGl0bGU6IHZhbHVlID0+IHZhbHVlLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlU2VjdGlvbiAmJiB7XG4gICAgICBhdHRyOiAnc2VjdGlvbicsXG4gICAgICByZXNvbHZlOiBvcHRpb25zLnJlc29sdmVTZWN0aW9uLFxuICAgICAgdGl0bGU6IHZhbHVlID0+IGBAJHt2YWx1ZX1gLFxuICAgIH0sXG4gICAgb3B0aW9ucy5yZXNvbHZlVmFyICYmIHtcbiAgICAgIGF0dHI6ICd2YXInLFxuICAgICAgcmVzb2x2ZTogb3B0aW9ucy5yZXNvbHZlVmFyLFxuICAgICAgdGl0bGU6IHZhbHVlID0+IHZhbHVlLFxuICAgIH0sXG4gICAge1xuICAgICAgYXR0cjogJ3BhdHRlcm4nLFxuICAgICAgcmVzb2x2ZTogKCkgPT4gJ3ggPSBoaXQgIHwgIC0gPSBob2xkICB8ICBfID0gcmVzdCAgfCAgWyBdID0gc3ViZGl2aWRlJyxcbiAgICAgIHRpdGxlOiAoKSA9PiAnUmh5dGhtIHBhdHRlcm4nLFxuICAgIH0sXG4gIF0uZmlsdGVyKEJvb2xlYW4pO1xuXG4gIGZ1bmN0aW9uIHN5bmMoKSB7XG4gICAgcHJlLmlubmVySFRNTCA9IGAke2hpZ2hsaWdodCh0YS52YWx1ZSl9XFxuYDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVUb29sdGlwKCkge1xuICAgIHRpcC5oaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgdGEuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgIHByZS5zY3JvbGxUb3AgPSB0YS5zY3JvbGxUb3A7XG4gICAgcHJlLnNjcm9sbExlZnQgPSB0YS5zY3JvbGxMZWZ0O1xuICB9KTtcblxuICB0YS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBzeW5jKCk7XG4gICAgaGlkZVRvb2x0aXAoKTtcbiAgICBpZiAob3B0aW9ucy5vbklucHV0KSBvcHRpb25zLm9uSW5wdXQodGEudmFsdWUpO1xuICB9KTtcblxuICB0YS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICBjb25zdCBmb3VuZCA9IHRvb2x0aXBIYW5kbGVyc1xuICAgICAgLm1hcChoYW5kbGVyID0+IHtcbiAgICAgICAgY29uc3QgaGl0ID0gZWxlbWVudHMuZmluZChlbCA9PiBlbC5kYXRhc2V0ICYmIGVsLmRhdGFzZXRbaGFuZGxlci5hdHRyXSk7XG4gICAgICAgIHJldHVybiBoaXQgPyB7IGhhbmRsZXIsIHZhbHVlOiBoaXQuZGF0YXNldFtoYW5kbGVyLmF0dHJdIH0gOiBudWxsO1xuICAgICAgfSlcbiAgICAgIC5maW5kKEJvb2xlYW4pO1xuICAgIGlmICghZm91bmQpIHtcbiAgICAgIGhpZGVUb29sdGlwKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHRleHQgPSBmb3VuZC5oYW5kbGVyLnJlc29sdmUoZm91bmQudmFsdWUpO1xuICAgIGlmICghdGV4dCkge1xuICAgICAgaGlkZVRvb2x0aXAoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcG9zID0gY2xhbXBUb29sdGlwKGUuY2xpZW50WCwgZS5jbGllbnRZKTtcbiAgICB0aXBUaXRsZS50ZXh0Q29udGVudCA9IGZvdW5kLmhhbmRsZXIudGl0bGUoZm91bmQudmFsdWUpO1xuICAgIHRpcEJvZHkudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHRpcC5zdHlsZS5sZWZ0ID0gYCR7cG9zLmxlZnR9cHhgO1xuICAgIHRpcC5zdHlsZS50b3AgPSBgJHtwb3MudG9wfXB4YDtcbiAgICB0aXAuaGlkZGVuID0gZmFsc2U7XG4gIH0pO1xuXG4gIHRhLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoaWRlVG9vbHRpcCk7XG5cbiAgc3luYygpO1xuICB3cmFwLmFwcGVuZENoaWxkKHByZSk7XG4gIHdyYXAuYXBwZW5kQ2hpbGQodGEpO1xuICB3cmFwLmFwcGVuZENoaWxkKHRpcCk7XG5cbiAgcmV0dXJuIHtcbiAgICBlbDogd3JhcCxcbiAgICB0ZXh0YXJlYTogdGEsXG4gICAgb246IChldmVudCwgZm4pID0+IHRhLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuKSxcbiAgICBnZXRWYWx1ZTogKCkgPT4gdGEudmFsdWUsXG4gICAgc2V0VmFsdWU6IHZhbHVlID0+IHtcbiAgICAgIHRhLnZhbHVlID0gdmFsdWU7XG4gICAgICBzeW5jKCk7XG4gICAgICBoaWRlVG9vbHRpcCgpO1xuICAgIH0sXG4gICAgZm9jdXM6ICgpID0+IHRhLmZvY3VzKCksXG4gIH07XG59XG4iXSwKICAibWFwcGluZ3MiOiAiQUFBQSxTQUFTLGlCQUFpQjtBQUUxQixTQUFTLGFBQWEsR0FBRyxHQUFHLFFBQVEsS0FBSztBQUN2QyxRQUFNLE9BQU8sS0FBSyxJQUFJLEdBQUcsT0FBTyxhQUFhLFFBQVEsQ0FBQztBQUN0RCxRQUFNLE9BQU8sS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ2xDLFFBQU0sTUFB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
