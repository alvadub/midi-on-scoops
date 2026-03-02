import { highlight } from '../highlight';

function clampTooltip(x, y, width = 320) {
  const maxX = Math.max(8, window.innerWidth - width - 8);
  const left = Math.min(x + 12, maxX);
  const top = Math.min(y + 12, window.innerHeight - 72);
  return { left, top };
}

export function createEditor(initialText, options = {}) {
  const wrap = document.createElement('div');
  wrap.id = 'editor-wrap';

  const pre = document.createElement('pre');
  pre.id = 'editor-hl';
  pre.setAttribute('aria-hidden', 'true');

  const ta = document.createElement('textarea');
  ta.id = 'editor';
  ta.spellcheck = false;
  ta.autocomplete = 'off';
  ta.value = initialText;

  const tip = document.createElement('div');
  tip.id = 'var-tooltip';
  tip.hidden = true;
  tip.innerHTML = '<strong></strong><span class="tooltip-resolved"></span>';
  const tipTitle = tip.querySelector('strong');
  const tipBody = tip.querySelector('.tooltip-resolved');
  const tooltipHandlers = [
    options.resolveInstrument && {
      attr: 'instrument',
      resolve: options.resolveInstrument,
      title: value => `#${value}`,
    },
    options.resolveMode && {
      attr: 'mode',
      resolve: options.resolveMode,
      title: value => value,
    },
    options.resolveSection && {
      attr: 'section',
      resolve: options.resolveSection,
      title: value => `@${value}`,
    },
    options.resolveVar && {
      attr: 'var',
      resolve: options.resolveVar,
      title: value => value,
    },
    {
      attr: 'pattern',
      resolve: () => 'x = hit  |  - = hold  |  _ = rest  |  [ ] = subdivide',
      title: () => 'Rhythm pattern',
    },
  ].filter(Boolean);

  function sync() {
    pre.innerHTML = `${highlight(ta.value)}\n`;
  }

  function hideTooltip() {
    tip.hidden = true;
  }

  ta.addEventListener('scroll', () => {
    pre.scrollTop = ta.scrollTop;
    pre.scrollLeft = ta.scrollLeft;
  });

  ta.addEventListener('input', () => {
    sync();
    hideTooltip();
    if (options.onInput) options.onInput(ta.value);
  });

  ta.addEventListener('mousemove', e => {
    const elements = document.elementsFromPoint(e.clientX, e.clientY);
    const found = tooltipHandlers
      .map(handler => {
        const hit = elements.find(el => el.dataset && el.dataset[handler.attr]);
        return hit ? { handler, value: hit.dataset[handler.attr] } : null;
      })
      .find(Boolean);
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

  ta.addEventListener('mouseleave', hideTooltip);

  sync();
  wrap.appendChild(pre);
  wrap.appendChild(ta);
  wrap.appendChild(tip);

  return {
    el: wrap,
    textarea: ta,
    on: (event, fn) => ta.addEventListener(event, fn),
    getValue: () => ta.value,
    setValue: value => {
      ta.value = value;
      sync();
      hideTooltip();
    },
    focus: () => ta.focus(),
  };
}
