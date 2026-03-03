function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

function shortName(name) {
  const parts = String(name || '').split(/\s+/).filter(Boolean);
  if (!parts.length) return 'track';
  return parts.slice(0, 2).join(' ');
}

function instrumentNameForKey(player, keyId, fallback) {
  const raw = String(keyId || '').split('/')[0];
  const n = parseInt(raw, 10);
  if (Number.isNaN(n) || !player || !player.player || !player.player.loader) return fallback;
  try {
    const info = n >= 2000
      ? player.player.loader.drumInfo(n - 2000)
      : player.player.loader.instrumentInfo(n);
    if (info && info.title) return info.title;
  } catch (e) {
    // ignore and fallback
  }
  return fallback;
}

function freqToSlider(freq) {
  return Math.max(0, Math.min(1, Math.log(freq / 20) / Math.log(1000)));
}

function sliderToFreq(v) {
  return 20 * Math.pow(1000, Math.max(0, Math.min(1, v)));
}

function attachMidiLearn(control, midiId, options) {
  if (!control || !midiId) return null;
  control.dataset.midiId = midiId;
  const baseTitle = control.title ? `${control.title} · ` : '';
  control.title = `${baseTitle}MIDI: hold L and click to learn (${midiId})`;
  return control;
}

function makeRange(label, min, max, value, onInput, step = '1') {
  const wrap = document.createElement('label');
  wrap.className = 'm-mini-row';
  const txt = document.createElement('span');
  txt.textContent = label;
  const input = document.createElement('input');
  input.type = 'range';
  input.min = String(min);
  input.max = String(max);
  input.step = String(step);
  input.value = String(value);
  input.addEventListener('input', () => onInput(input.value));
  wrap.appendChild(txt);
  wrap.appendChild(input);
  return { wrap, input };
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

  const live = document.createElement('div');
  live.id = 'mixer-live';

  const snapshots = document.createElement('div');
  snapshots.id = 'snapshot-panel';

  const initialTempo = options.tempo || 146;
  const initialBars = options.bars || 8;
  const initialTranspose = options.transpose || 0;
  const stripMap = new Map();

  const bpmRow = document.createElement('label');
  bpmRow.className = 'transport-row';
  bpmRow.textContent = 'BPM';
  const bpm = document.createElement('input');
  bpm.type = 'range';
  bpm.min = '60';
  bpm.max = '200';
  bpm.value = String(initialTempo);
  bpm.dataset.midiId = 'transport:bpm';
  const bpmVal = document.createElement('span');
  bpmVal.className = 'transport-val';
  bpmVal.textContent = String(initialTempo);
  bpm.addEventListener('input', () => {
    bpmVal.textContent = bpm.value;
    if (options.onChange) options.onChange({ tempo: parseInt(bpm.value, 10) });
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
    if (options.onChange) options.onChange({ bars: parseInt(bars.value, 10) });
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
  key.dataset.midiId = 'transport:transpose';
  const keyVal = document.createElement('span');
  keyVal.className = 'transport-val';
  keyVal.textContent = String(initialTranspose > 0 ? `+${initialTranspose}` : initialTranspose);
  key.addEventListener('input', () => {
    const value = parseInt(key.value, 10);
    keyVal.textContent = value > 0 ? `+${value}` : String(value);
    if (options.onChange) options.onChange({ transpose: value });
  });
  keyRow.appendChild(key);
  keyRow.appendChild(keyVal);
  transport.appendChild(bpmRow);
  transport.appendChild(barsRow);
  transport.appendChild(keyRow);

  const delayDivision = document.createElement('select');
  [['1/4', 1 / 4], ['3/8', 3 / 8], ['1/2', 1 / 2], ['3/4', 3 / 4]].forEach(([label, value]) => {
    const option = document.createElement('option');
    option.value = String(value);
    option.textContent = label;
    if (Math.abs(value - player.delayDivision) < 0.0001) option.selected = true;
    delayDivision.appendChild(option);
  });
  delayDivision.addEventListener('change', () => player.setDelayTime(parseFloat(delayDivision.value)));

  const delayLabel = document.createElement('label');
  delayLabel.textContent = 'Delay Division';
  delayLabel.appendChild(delayDivision);
  const feedback = makeRange('Feedback', 0, 110, 35, value => player.setDelayFeedback(parseInt(value, 10) / 100));
  fx.appendChild(delayLabel);
  fx.appendChild(feedback.wrap);

  const globalLpf = makeRange('Master LPF', 0, 100, 100, value => {
    const freq = sliderToFreq(parseInt(value, 10) / 100);
    player.setMasterLPF(freq);
  });
  fx.appendChild(globalLpf.wrap);

  const masterPreampToggle = document.createElement('button');
  masterPreampToggle.className = 'm-mini-btn';
  masterPreampToggle.textContent = 'Master Preamp';
  masterPreampToggle.dataset.midiId = 'master:preamp:toggle';
  masterPreampToggle.addEventListener('click', () => {
    const next = !masterPreampToggle.classList.contains('active');
    masterPreampToggle.classList.toggle('active', next);
    player.setMasterPreampEnabled(next);
  });
  const masterPreampCount = document.createElement('select');
  [3, 4, 5].forEach(v => {
    const opt = document.createElement('option');
    opt.value = String(v);
    opt.textContent = `${v} bands`;
    if (v === 3) opt.selected = true;
    masterPreampCount.appendChild(opt);
  });
  masterPreampCount.addEventListener('change', () => {
    player.setMasterPreampCount(parseInt(masterPreampCount.value, 10));
  });
  const preampCut1 = makeRange('Band Cut 1', 0, 100, 33, () => {
    player.setMasterPreampCutoffs([
      sliderToFreq(parseInt(preampCut1.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut2.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut3.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut4.input.value, 10) / 100),
    ]);
  });
  const preampCut2 = makeRange('Band Cut 2', 0, 100, 67, () => {
    player.setMasterPreampCutoffs([
      sliderToFreq(parseInt(preampCut1.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut2.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut3.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut4.input.value, 10) / 100),
    ]);
  });
  const preampCut3 = makeRange('Band Cut 3', 0, 100, 78, () => {
    player.setMasterPreampCutoffs([
      sliderToFreq(parseInt(preampCut1.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut2.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut3.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut4.input.value, 10) / 100),
    ]);
  });
  const preampCut4 = makeRange('Band Cut 4', 0, 100, 90, () => {
    player.setMasterPreampCutoffs([
      sliderToFreq(parseInt(preampCut1.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut2.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut3.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut4.input.value, 10) / 100),
    ]);
  });
  const preampHPF = makeRange('Preamp HPF', 0, 100, 0, value => {
    player.setMasterPreampHPF(sliderToFreq(parseInt(value, 10) / 100));
  });
  const preampLPF = makeRange('Preamp LPF', 0, 100, 100, value => {
    player.setMasterPreampLPF(sliderToFreq(parseInt(value, 10) / 100));
  });
  const preampQ = makeRange('Preamp Q', 1, 180, 7, value => {
    player.setMasterPreampQ(parseInt(value, 10) / 10);
  });
  const preampRev = makeRange('Preamp Rev', 0, 100, 35, value => {
    player.setMasterPreampReverbSend(parseInt(value, 10) / 100);
  });
  const preampDly = makeRange('Preamp Dly', 0, 100, 25, value => {
    player.setMasterPreampDelaySend(parseInt(value, 10) / 100);
  });
  fx.appendChild(masterPreampToggle);
  fx.appendChild(masterPreampCount);
  fx.appendChild(preampCut1.wrap);
  fx.appendChild(preampCut2.wrap);
  fx.appendChild(preampCut3.wrap);
  fx.appendChild(preampCut4.wrap);
  fx.appendChild(preampHPF.wrap);
  fx.appendChild(preampLPF.wrap);
  fx.appendChild(preampQ.wrap);
  fx.appendChild(preampRev.wrap);
  fx.appendChild(preampDly.wrap);
  [[masterPreampToggle, 'master:preamp:toggle'], [preampCut1.input, 'master:preamp:cut1'], [preampCut2.input, 'master:preamp:cut2'], [preampCut3.input, 'master:preamp:cut3'], [preampCut4.input, 'master:preamp:cut4'], [preampHPF.input, 'master:preamp:hpf'], [preampLPF.input, 'master:preamp:lpf'], [preampQ.input, 'master:preamp:q'], [preampRev.input, 'master:preamp:rev'], [preampDly.input, 'master:preamp:dly']]
    .forEach(([control, id]) => attachMidiLearn(control, id, options));

  const padsWrap = document.createElement('div');
  padsWrap.className = 'm-live-block m-live-block--pads';
  const padsTitle = document.createElement('h4');
  padsTitle.textContent = 'Pads';
  const padGrid = document.createElement('div');
  padGrid.className = 'm-pad-grid';
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = 'audio/*';
  fileInput.hidden = true;
  let pendingPadLoad = 0;
  fileInput.addEventListener('change', async () => {
    const [file] = fileInput.files || [];
    if (!file) return;
    await player.loadPadFromFile(pendingPadLoad, file);
    padButtons[pendingPadLoad].querySelector('.m-pad-label').textContent = player.pads[pendingPadLoad].label;
    fileInput.value = '';
  });
  const padButtons = [];
  for (let i = 0; i < player.pads.length; i += 1) {
    const pad = document.createElement('button');
    pad.className = 'm-pad';
    pad.dataset.midiId = `pad:${i}:trig`;
    pad.innerHTML = `<span class="m-pad-label">${player.pads[i].label}</span><span class="m-pad-sub">▶</span>`;
    pad.addEventListener('click', () => {
      const ok = player.triggerPad(i, player.pads[i].looping);
      if (!ok) {
        pendingPadLoad = i;
        fileInput.click();
        return;
      }
      pad.classList.add('playing');
      setTimeout(() => pad.classList.remove('playing'), 120);
    });
    pad.addEventListener('contextmenu', e => {
      e.preventDefault();
      const looping = !player.pads[i].looping;
      player.pads[i].looping = looping;
      if (looping) player.triggerPad(i, true);
      else player.stopPad(i);
      pad.classList.toggle('looping', looping);
    });
    const drop = async file => {
      await player.loadPadFromFile(i, file);
      pad.querySelector('.m-pad-label').textContent = player.pads[i].label;
    };
    pad.addEventListener('dragover', e => {
      e.preventDefault();
      pad.classList.add('drag');
    });
    pad.addEventListener('dragleave', () => pad.classList.remove('drag'));
    pad.addEventListener('drop', async e => {
      e.preventDefault();
      pad.classList.remove('drag');
      const file = e.dataTransfer && e.dataTransfer.files ? e.dataTransfer.files[0] : null;
      if (file) await drop(file);
    });
    padButtons.push(pad);
    padGrid.appendChild(pad);
  }
  const padsRev = makeRange('Pads Rev', 0, 100, 35, value => player.setPadsReverb(parseInt(value, 10) / 100));
  const padsDly = makeRange('Pads Dly', 0, 100, 25, value => player.setPadsDelay(parseInt(value, 10) / 100));
  padsWrap.appendChild(padsTitle);
  padsWrap.appendChild(padGrid);
  padsWrap.appendChild(fileInput);
  padsWrap.appendChild(padsRev.wrap);
  padsWrap.appendChild(padsDly.wrap);

  live.appendChild(padsWrap);

  const snapTitle = document.createElement('h4');
  snapTitle.textContent = 'Snapshots';
  const snapRow = document.createElement('div');
  snapRow.className = 'snapshot-row';
  const snapSave = document.createElement('button');
  snapSave.className = 'm-mini-btn';
  snapSave.textContent = '+ Save';
  snapSave.addEventListener('click', () => {
    if (options.onSnapshotSave) options.onSnapshotSave();
  });
  const snapExport = document.createElement('button');
  snapExport.className = 'm-mini-btn';
  snapExport.textContent = 'Export';
  snapExport.addEventListener('click', () => {
    if (options.onSnapshotExport) options.onSnapshotExport();
  });
  const snapImport = document.createElement('button');
  snapImport.className = 'm-mini-btn';
  snapImport.textContent = 'Import';
  snapImport.addEventListener('click', () => {
    if (options.onSnapshotImport) options.onSnapshotImport();
  });
  const snapList = document.createElement('ul');
  snapList.className = 'snapshot-list';
  snapRow.appendChild(snapSave);
  snapRow.appendChild(snapExport);
  snapRow.appendChild(snapImport);
  snapshots.appendChild(snapTitle);
  snapshots.appendChild(snapRow);
  snapshots.appendChild(snapList);

  root.appendChild(title);
  root.appendChild(transport);
  root.appendChild(strips);
  root.appendChild(fx);
  root.appendChild(live);
  root.appendChild(snapshots);

  function createStrip(keyId, label) {
    const state = player.getTrackState(keyId);
    const displayName = instrumentNameForKey(player, keyId, label);
    const strip = document.createElement('div');
    strip.className = 'm-strip';
    strip.dataset.key = keyId;
    const name = document.createElement('div');
    name.className = 'm-name';
    name.textContent = shortName(displayName);
    name.title = `${displayName}${label && label !== displayName ? ` · ${label}` : ''}`;
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
    const epi = document.createElement('button');
    epi.className = 'm-btn';
    epi.textContent = 'EPI';
    epi.classList.toggle('active', state.epicenterOn);
    epi.addEventListener('click', () => {
      const on = !player.getTrackState(keyId).epicenterOn;
      player.setEpicenterEnabled(keyId, on);
      epi.classList.toggle('active', on);
    });

    function syncButtons() {
      const cur = player.getTrackState(keyId);
      solo.classList.toggle('active', cur.solo);
      mute.classList.toggle('active', cur.muted);
      epi.classList.toggle('active', cur.epicenterOn);
    }

    solo.addEventListener('click', () => {
      const cur = player.getTrackState(keyId);
      player.setSolo(keyId, !cur.solo);
      syncButtons();
    });
    mute.addEventListener('click', () => {
      const cur = player.getTrackState(keyId);
      player.setMute(keyId, !cur.muted);
      syncButtons();
    });
    volume.addEventListener('input', () => player.setVolume(keyId, clamp01(parseInt(volume.value, 10) / 100)));
    row.appendChild(solo);
    row.appendChild(mute);
    row.appendChild(volume);

    const extras = document.createElement('div');
    extras.className = 'm-extras';
    extras.appendChild(epi);

    strip.appendChild(name);
    strip.appendChild(vu);
    strip.appendChild(row);
    strip.appendChild(extras);
    strips.appendChild(strip);

    [
      [volume, `track:${keyId}:vol`],
      [mute, `track:${keyId}:mute`],
      [solo, `track:${keyId}:solo`],
      [epi, `track:${keyId}:epi`],
    ].forEach(([control, id]) => attachMidiLearn(control, id, options));

    syncButtons();
    return {
      el: strip,
      vu,
      name,
      syncButtons,
      volume,
      mute,
      solo,
      epi,
    };
  }

  function update(data) {
    const entries = Array.isArray(data)
      ? data.map(track => ({ key: `${track[0]}/${track[1]}`, name: track[1] }))
      : [];
    const nextKeys = new Set(entries.map(item => item.key));
    stripMap.forEach((value, keyId) => {
      if (!nextKeys.has(keyId)) {
        value.el.remove();
        stripMap.delete(keyId);
      }
    });
    entries.forEach(item => {
      if (!stripMap.has(item.key)) {
        stripMap.set(item.key, createStrip(item.key, item.name));
      } else {
        const strip = stripMap.get(item.key);
        const displayName = instrumentNameForKey(player, item.key, item.name);
        strip.name.textContent = shortName(displayName);
        strip.name.title = `${displayName}${item.name && item.name !== displayName ? ` · ${item.name}` : ''}`;
        strip.syncButtons();
      }
    });
  }

  function flashVU(keyId) {
    const strip = stripMap.get(keyId);
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
    if (typeof next.bars === 'number') bars.value = String(next.bars);
    if (typeof next.transpose === 'number') {
      key.value = String(next.transpose);
      keyVal.textContent = next.transpose > 0 ? `+${next.transpose}` : String(next.transpose);
    }
  }

  function captureState() {
    const tracks = {};
    stripMap.forEach((_strip, keyId) => {
      const state = player.getTrackState(keyId);
      tracks[keyId] = {
        volume: state.volume,
        muted: state.muted,
        solo: state.solo,
        epicenterOn: state.epicenterOn,
      };
    });
    return {
      transport: {
        tempo: parseInt(bpm.value, 10),
        bars: parseInt(bars.value, 10),
        transpose: parseInt(key.value, 10),
      },
      tracks,
      fx: {
        delayFeedback: parseInt(feedback.input.value, 10) / 100,
        delayDivision: parseFloat(delayDivision.value),
        masterLPF: sliderToFreq(parseInt(globalLpf.input.value, 10) / 100),
        masterPreampEnabled: masterPreampToggle.classList.contains('active'),
        masterPreampBands: parseInt(masterPreampCount.value, 10),
        masterPreampCutoffs: [
          sliderToFreq(parseInt(preampCut1.input.value, 10) / 100),
          sliderToFreq(parseInt(preampCut2.input.value, 10) / 100),
          sliderToFreq(parseInt(preampCut3.input.value, 10) / 100),
          sliderToFreq(parseInt(preampCut4.input.value, 10) / 100),
        ],
        masterPreampHPF: sliderToFreq(parseInt(preampHPF.input.value, 10) / 100),
        masterPreampLPF: sliderToFreq(parseInt(preampLPF.input.value, 10) / 100),
        masterPreampQ: parseInt(preampQ.input.value, 10) / 10,
        masterPreampRev: parseInt(preampRev.input.value, 10) / 100,
        masterPreampDly: parseInt(preampDly.input.value, 10) / 100,
      },
    };
  }

  function applyState(snapshotState) {
    if (!snapshotState) return;
    const transportState = snapshotState.transport || {};
    const trackState = snapshotState.tracks || {};
    const fxState = snapshotState.fx || {};

    if (typeof transportState.tempo === 'number') {
      bpm.value = String(transportState.tempo);
      bpm.dispatchEvent(new Event('input', { bubbles: true }));
    }
    if (typeof transportState.bars === 'number') {
      bars.value = String(transportState.bars);
      bars.dispatchEvent(new Event('change', { bubbles: true }));
    }
    if (typeof transportState.transpose === 'number') {
      key.value = String(transportState.transpose);
      key.dispatchEvent(new Event('input', { bubbles: true }));
    }

    Object.keys(trackState).forEach(keyId => {
      const s = trackState[keyId];
      if (typeof s.volume === 'number') player.setVolume(keyId, s.volume);
      if (typeof s.muted === 'boolean') player.setMute(keyId, s.muted);
      if (typeof s.solo === 'boolean') player.setSolo(keyId, s.solo);
      if (typeof s.epicenterOn === 'boolean') player.setEpicenterEnabled(keyId, s.epicenterOn);
      const strip = stripMap.get(keyId);
      if (strip) strip.syncButtons();
    });

    if (typeof fxState.delayFeedback === 'number') player.setDelayFeedback(fxState.delayFeedback);
    if (typeof fxState.delayDivision === 'number') player.setDelayTime(fxState.delayDivision);
    if (typeof fxState.masterLPF === 'number') player.setMasterLPF(fxState.masterLPF);
    if (typeof fxState.masterPreampEnabled === 'boolean') {
      masterPreampToggle.classList.toggle('active', fxState.masterPreampEnabled);
      player.setMasterPreampEnabled(fxState.masterPreampEnabled);
    }
    if (typeof fxState.masterPreampBands === 'number') {
      masterPreampCount.value = String(fxState.masterPreampBands);
      player.setMasterPreampCount(fxState.masterPreampBands);
    }
    if (Array.isArray(fxState.masterPreampCutoffs)) {
      const [c1 = 200, c2 = 2000, c3 = 6000, c4 = 12000] = fxState.masterPreampCutoffs;
      preampCut1.input.value = String(Math.round(freqToSlider(c1) * 100));
      preampCut2.input.value = String(Math.round(freqToSlider(c2) * 100));
      preampCut3.input.value = String(Math.round(freqToSlider(c3) * 100));
      preampCut4.input.value = String(Math.round(freqToSlider(c4) * 100));
      player.setMasterPreampCutoffs([c1, c2, c3, c4]);
    }
    if (typeof fxState.masterPreampHPF === 'number') {
      preampHPF.input.value = String(Math.round(freqToSlider(fxState.masterPreampHPF) * 100));
      player.setMasterPreampHPF(fxState.masterPreampHPF);
    }
    if (typeof fxState.masterPreampLPF === 'number') {
      preampLPF.input.value = String(Math.round(freqToSlider(fxState.masterPreampLPF) * 100));
      player.setMasterPreampLPF(fxState.masterPreampLPF);
    }
    if (typeof fxState.masterPreampQ === 'number') {
      preampQ.input.value = String(Math.round(fxState.masterPreampQ * 10));
      player.setMasterPreampQ(fxState.masterPreampQ);
    }
    if (typeof fxState.masterPreampRev === 'number') {
      preampRev.input.value = String(Math.round(fxState.masterPreampRev * 100));
      player.setMasterPreampReverbSend(fxState.masterPreampRev);
    }
    if (typeof fxState.masterPreampDly === 'number') {
      preampDly.input.value = String(Math.round(fxState.masterPreampDly * 100));
      player.setMasterPreampDelaySend(fxState.masterPreampDly);
    }
  }

  function setSnapshots(items, selectedId) {
    snapList.innerHTML = '';
    (items || []).forEach(item => {
      const li = document.createElement('li');
      li.className = 'snapshot-item';
      if (item.id === selectedId) li.classList.add('active');
      const btn = document.createElement('button');
      btn.className = 'm-mini-btn';
      btn.textContent = item.name;
      btn.addEventListener('click', () => {
        if (options.onSnapshotRecall) options.onSnapshotRecall(item.id);
      });
      const del = document.createElement('button');
      del.className = 'm-mini-btn';
      del.textContent = '×';
      del.addEventListener('click', () => {
        if (options.onSnapshotDelete) options.onSnapshotDelete(item.id);
      });
      li.appendChild(btn);
      li.appendChild(del);
      snapList.appendChild(li);
    });
  }

  return {
    el: root,
    update,
    flashVU,
    toggle,
    syncTransport,
    captureState,
    applyState,
    setSnapshots,
    dom: {
      padButtons,
    },
  };
}
