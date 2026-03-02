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
    if (!options.resolveVar) return;
    const hit = document
      .elementsFromPoint(e.clientX, e.clientY)
      .find(el => el.dataset && el.dataset.var);
    if (!hit) {
      hideTooltip();
      return;
    }
    const name = hit.dataset.var;
    const text = options.resolveVar(name);
    if (!text) {
      hideTooltip();
      return;
    }
    const pos = clampTooltip(e.clientX, e.clientY);
    tipTitle.textContent = name;
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

