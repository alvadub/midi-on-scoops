function clamp(value) {
  return Math.max(0, Math.min(1, value));
}

function shortName(name) {
  const parts = String(name || '').split(/\s+/).filter(Boolean);
  if (!parts.length) return 'track';
  return parts.slice(0, 2).join(' ');
}

export function createMixer(player, options = {}) {
  const root = document.createElement('aside');
  root.id = 'mixer-panel';
  root.className = 'collapsed';

  const title = document.createElement('h3');
  title.textContent = 'Mixer';

  const strips = document.createElement('div');
  strips.id = 'mixer-strips';
  const transport = document.createElement('div');
  transport.id = 'mixer-transport';

  const fx = document.createElement('div');
  fx.id = 'mixer-fx';

  const initialTempo = options.tempo || 146;
  const initialBars = options.bars || 8;
  const initialTranspose = options.transpose || 0;

  const bpmRow = document.createElement('label');
  bpmRow.className = 'transport-row';
  bpmRow.textContent = 'BPM';
  const bpm = document.createElement('input');
  bpm.type = 'range';
  bpm.min = '60';
  bpm.max = '200';
  bpm.value = String(initialTempo);
  const bpmVal = document.createElement('span');
  bpmVal.className = 'transport-val';
  bpmVal.textContent = String(initialTempo);
  bpm.addEventListener('input', () => {
    bpmVal.textContent = bpm.value;
    if (options.onChange) {
      options.onChange({ tempo: parseInt(bpm.value, 10) });
    }
  });
  bpmRow.appendChild(bpm);
  bpmRow.appendChild(bpmVal);

  const barsRow = document.createElement('label');
  barsRow.className = 'transport-row';
  barsRow.textContent = 'BARS';
  const bars = document.createElement('select');
  [4, 8, 16, 32].forEach(value => {
    const option = document.createElement('option');
    option.value = String(value);
    option.textContent = String(value);
    if (value === initialBars) option.selected = true;
    bars.appendChild(option);
  });
  bars.addEventListener('change', () => {
    if (options.onChange) {
      options.onChange({ bars: parseInt(bars.value, 10) });
    }
  });
  barsRow.appendChild(bars);

  const keyRow = document.createElement('label');
  keyRow.className = 'transport-row';
  keyRow.textContent = 'KEY';
  const key = document.createElement('input');
  key.type = 'range';
  key.min = '-12';
  key.max = '12';
  key.value = String(initialTranspose);
  const keyVal = document.createElement('span');
  keyVal.className = 'transport-val';
  keyVal.textContent = String(initialTranspose > 0 ? `+${initialTranspose}` : initialTranspose);
  key.addEventListener('input', () => {
    const value = parseInt(key.value, 10);
    keyVal.textContent = value > 0 ? `+${value}` : String(value);
    if (options.onChange) {
      options.onChange({ transpose: value });
    }
  });
  keyRow.appendChild(key);
  keyRow.appendChild(keyVal);

  transport.appendChild(bpmRow);
  transport.appendChild(barsRow);
  transport.appendChild(keyRow);

  const delayLabel = document.createElement('label');
  delayLabel.textContent = 'Delay Time';
  const delaySelect = document.createElement('select');
  [
    ['1/4', 1 / 4],
    ['3/8', 3 / 8],
    ['1/2', 1 / 2],
    ['3/4', 3 / 4],
  ].forEach(([label, value]) => {
    const option = document.createElement('option');
    option.textContent = label;
    option.value = String(value);
    if (value === player.delayDivision) option.selected = true;
    delaySelect.appendChild(option);
  });
  delaySelect.addEventListener('change', () => {
    player.setDelayTime(parseFloat(delaySelect.value));
  });
  delayLabel.appendChild(delaySelect);

  const feedbackLabel = document.createElement('label');
  feedbackLabel.textContent = 'Feedback';
  const feedback = document.createElement('input');
  feedback.type = 'range';
  feedback.min = '0';
  feedback.max = '75';
  feedback.value = '35';
  feedback.addEventListener('input', () => {
    player.setDelayFeedback(parseInt(feedback.value, 10) / 100);
  });
  feedbackLabel.appendChild(feedback);

  fx.appendChild(delayLabel);
  fx.appendChild(feedbackLabel);

  root.appendChild(title);
  root.appendChild(transport);
  root.appendChild(strips);
  root.appendChild(fx);

  const stripMap = new Map();

  function createStrip(key, label) {
    const state = player.getTrackState(key);
    const strip = document.createElement('div');
    strip.className = 'm-strip';
    strip.dataset.key = key;

    const name = document.createElement('div');
    name.className = 'm-name';
    name.textContent = shortName(label);
    name.title = label;

    const vu = document.createElement('div');
    vu.className = 'm-vu';

    const row = document.createElement('div');
    row.className = 'm-row';

    const solo = document.createElement('button');
    solo.className = 'm-btn';
    solo.textContent = 'S';
    const mute = document.createElement('button');
    mute.className = 'm-btn';
    mute.textContent = 'M';

    const volume = document.createElement('input');
    volume.type = 'range';
    volume.className = 'm-slider';
    volume.min = '0';
    volume.max = '100';
    volume.value = String(Math.round(state.volume * 100));

    const reverb = document.createElement('input');
    reverb.type = 'range';
    reverb.className = 'm-send';
    reverb.min = '0';
    reverb.max = '100';
    reverb.value = String(Math.round(state.reverbSend * 100));

    const delay = document.createElement('input');
    delay.type = 'range';
    delay.className = 'm-send';
    delay.min = '0';
    delay.max = '100';
    delay.value = String(Math.round(state.delaySend * 100));

    const sends = document.createElement('div');
    sends.className = 'm-sends';
    const rWrap = document.createElement('label');
    rWrap.textContent = 'Rev';
    rWrap.appendChild(reverb);
    const dWrap = document.createElement('label');
    dWrap.textContent = 'Dly';
    dWrap.appendChild(delay);
    sends.appendChild(rWrap);
    sends.appendChild(dWrap);

    function syncButtons() {
      const cur = player.getTrackState(key);
      solo.classList.toggle('active', cur.solo);
      mute.classList.toggle('active', cur.muted);
    }

    solo.addEventListener('click', () => {
      const cur = player.getTrackState(key);
      player.setSolo(key, !cur.solo);
      syncButtons();
    });
    mute.addEventListener('click', () => {
      const cur = player.getTrackState(key);
      player.setMute(key, !cur.muted);
      syncButtons();
    });
    volume.addEventListener('input', () => {
      player.setVolume(key, clamp(parseInt(volume.value, 10) / 100));
    });
    reverb.addEventListener('input', () => {
      player.setReverbSend(key, clamp(parseInt(reverb.value, 10) / 100));
    });
    delay.addEventListener('input', () => {
      player.setDelaySend(key, clamp(parseInt(delay.value, 10) / 100));
    });

    row.appendChild(solo);
    row.appendChild(mute);
    row.appendChild(volume);

    strip.appendChild(name);
    strip.appendChild(vu);
    strip.appendChild(row);
    strip.appendChild(sends);
    strips.appendChild(strip);

    syncButtons();
    return { el: strip, vu, name, syncButtons };
  }

  function update(data) {
    const entries = Array.isArray(data)
      ? data.map(track => ({ key: `${track[0]}/${track[1]}`, name: track[1] }))
      : [];
    const nextKeys = new Set(entries.map(item => item.key));

    stripMap.forEach((value, key) => {
      if (!nextKeys.has(key)) {
        value.el.remove();
        stripMap.delete(key);
      }
    });

    entries.forEach(item => {
      if (!stripMap.has(item.key)) {
        stripMap.set(item.key, createStrip(item.key, item.name));
      } else {
        const strip = stripMap.get(item.key);
        strip.name.textContent = shortName(item.name);
        strip.name.title = item.name;
        strip.syncButtons();
      }
    });
  }

  function flashVU(key) {
    const strip = stripMap.get(key);
    if (!strip) return;
    strip.vu.classList.add('active');
    setTimeout(() => strip.vu.classList.remove('active'), 80);
  }

  function toggle(forceOpen) {
    const open = typeof forceOpen === 'boolean' ? forceOpen : root.classList.contains('collapsed');
    root.classList.toggle('collapsed', !open);
    return open;
  }

  function syncTransport(next = {}) {
    if (typeof next.tempo === 'number') {
      bpm.value = String(next.tempo);
      bpmVal.textContent = String(next.tempo);
    }
    if (typeof next.bars === 'number') {
      bars.value = String(next.bars);
    }
    if (typeof next.transpose === 'number') {
      key.value = String(next.transpose);
      keyVal.textContent = next.transpose > 0 ? `+${next.transpose}` : String(next.transpose);
    }
  }

  return { el: root, update, flashVU, toggle, syncTransport };
}
