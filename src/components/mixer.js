function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

function shortName(name) {
  const parts = String(name || '').split(/\s+/).filter(Boolean);
  if (!parts.length) return 'track';
  return parts.slice(0, 2).join(' ');
}

function freqToSlider(freq) {
  return Math.max(0, Math.min(1, Math.log(freq / 20) / Math.log(1000)));
}

function sliderToFreq(v) {
  return 20 * Math.pow(1000, Math.max(0, Math.min(1, v)));
}

function attachMidiLearn(control, midiId, options) {
  if (!control || !midiId || !options || !options.onMidiLearnRequest) return null;
  control.dataset.midiId = midiId;
  const learn = document.createElement('button');
  learn.className = 'm-learn';
  learn.textContent = 'L';
  learn.title = `MIDI Learn: ${midiId}`;
  learn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    options.onMidiLearnRequest(midiId, learn, control);
  });
  return learn;
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

  const delayMode = document.createElement('select');
  for (let i = 1; i <= 7; i += 1) {
    const option = document.createElement('option');
    option.value = String(i);
    option.textContent = `Head Mode ${i}`;
    if (i === 4) option.selected = true;
    delayMode.appendChild(option);
  }
  delayMode.addEventListener('change', () => player.setDelayMode(parseInt(delayMode.value, 10)));

  const delayDivision = document.createElement('select');
  [['1/4', 1 / 4], ['3/8', 3 / 8], ['1/2', 1 / 2], ['3/4', 3 / 4]].forEach(([label, value]) => {
    const option = document.createElement('option');
    option.value = String(value);
    option.textContent = label;
    if (Math.abs(value - player.delayDivision) < 0.0001) option.selected = true;
    delayDivision.appendChild(option);
  });
  delayDivision.addEventListener('change', () => player.setDelayTime(parseFloat(delayDivision.value)));

  const tapBtn = document.createElement('button');
  tapBtn.className = 'm-mini-btn';
  tapBtn.textContent = 'Tap (T)';
  tapBtn.dataset.midiId = 'delay:tap';
  const tapReadout = document.createElement('span');
  tapReadout.className = 'm-readout';
  tapReadout.textContent = '--- ms';
  tapBtn.addEventListener('click', () => {
    const seconds = player.tapTapeTempo();
    if (!seconds) return;
    tapReadout.textContent = `${Math.round(seconds * 1000)} ms`;
  });

  const delayLabel = document.createElement('label');
  delayLabel.textContent = 'Delay Division';
  delayLabel.appendChild(delayDivision);
  const modeLabel = document.createElement('label');
  modeLabel.textContent = 'Tape Heads';
  modeLabel.appendChild(delayMode);
  const feedback = makeRange('Feedback', 0, 110, 35, value => player.setDelayFeedback(parseInt(value, 10) / 100));
  const warp = makeRange('Warp', 1, 200, 40, value => player.setTapeWarp(parseInt(value, 10) / 1000));
  const wow = makeRange('Wow', 0, 100, 25, value => player.setTapeWowFlutter(parseInt(value, 10) / 100));
  fx.appendChild(delayLabel);
  fx.appendChild(modeLabel);
  fx.appendChild(feedback.wrap);
  fx.appendChild(warp.wrap);
  fx.appendChild(wow.wrap);
  fx.appendChild(tapBtn);
  fx.appendChild(tapReadout);

  const globalLpf = makeRange('Master LPF', 0, 100, 100, value => {
    const freq = sliderToFreq(parseInt(value, 10) / 100);
    player.setMasterLPF(freq);
  });
  fx.appendChild(globalLpf.wrap);

  const sirenWrap = document.createElement('div');
  sirenWrap.className = 'm-live-block';
  const sirenTitle = document.createElement('h4');
  sirenTitle.textContent = 'Siren';
  const holdBtn = document.createElement('button');
  holdBtn.className = 'm-mini-btn';
  holdBtn.dataset.midiId = 'siren:hold';
  holdBtn.textContent = 'Hold';
  const holdOn = () => {
    holdBtn.classList.add('active');
    player.sirenHold(true);
  };
  const holdOff = () => {
    holdBtn.classList.remove('active');
    player.sirenHold(false);
  };
  ['mousedown', 'touchstart'].forEach(evt => holdBtn.addEventListener(evt, holdOn));
  ['mouseup', 'mouseleave', 'touchend', 'touchcancel'].forEach(evt => holdBtn.addEventListener(evt, holdOff));
  const wave = document.createElement('select');
  ['sine', 'square', 'sawtooth', 'triangle'].forEach(name => {
    const opt = document.createElement('option');
    opt.value = name;
    opt.textContent = name;
    wave.appendChild(opt);
  });
  wave.addEventListener('change', () => player.setSirenWave(wave.value));
  const lo = makeRange('Lo', 40, 1200, 220, v => player.setSirenFreqRange(parseInt(v, 10), parseInt(hi.input.value, 10)));
  const hi = makeRange('Hi', 80, 2400, 900, v => player.setSirenFreqRange(parseInt(lo.input.value, 10), parseInt(v, 10)));
  const sirenRate = makeRange('Rate', 1, 400, 50, v => player.setSirenRate(parseInt(v, 10) / 100));
  const sirenVol = makeRange('Vol', 0, 100, 50, v => player.setSirenVolume(parseInt(v, 10) / 100));
  const sirenRev = makeRange('Rev', 0, 100, 35, v => player.setSirenReverb(parseInt(v, 10) / 100));
  const sirenDly = makeRange('Dly', 0, 100, 25, v => player.setSirenDelay(parseInt(v, 10) / 100));
  sirenWrap.appendChild(sirenTitle);
  sirenWrap.appendChild(holdBtn);
  sirenWrap.appendChild(wave);
  sirenWrap.appendChild(lo.wrap);
  sirenWrap.appendChild(hi.wrap);
  sirenWrap.appendChild(sirenRate.wrap);
  sirenWrap.appendChild(sirenVol.wrap);
  sirenWrap.appendChild(sirenRev.wrap);
  sirenWrap.appendChild(sirenDly.wrap);

  const padsWrap = document.createElement('div');
  padsWrap.className = 'm-live-block';
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
  for (let i = 0; i < 4; i += 1) {
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

  const thunderWrap = document.createElement('div');
  thunderWrap.className = 'm-live-block';
  const thunderBtn = document.createElement('button');
  thunderBtn.className = 'm-mini-btn danger';
  thunderBtn.textContent = 'Thunder';
  thunderBtn.dataset.midiId = 'thunder:hit';
  const thunderPower = makeRange('Power', 5, 120, 100, () => {});
  thunderBtn.addEventListener('click', () => {
    const intensity = parseInt(thunderPower.input.value, 10) / 100;
    player.thunder(intensity);
    thunderBtn.classList.add('active');
    setTimeout(() => thunderBtn.classList.remove('active'), 120);
  });
  thunderWrap.appendChild(thunderBtn);
  thunderWrap.appendChild(thunderPower.wrap);

  live.appendChild(sirenWrap);
  live.appendChild(padsWrap);
  live.appendChild(thunderWrap);

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
    const strip = document.createElement('div');
    strip.className = 'm-strip';
    strip.dataset.key = keyId;
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
    const lpf = document.createElement('input');
    lpf.type = 'range';
    lpf.className = 'm-send';
    lpf.min = '0';
    lpf.max = '100';
    lpf.value = String(Math.round(freqToSlider(state.lpf) * 100));
    const hpf = document.createElement('input');
    hpf.type = 'range';
    hpf.className = 'm-send';
    hpf.min = '0';
    hpf.max = '100';
    hpf.value = String(Math.round(freqToSlider(state.hpf) * 100));
    const q = document.createElement('input');
    q.type = 'range';
    q.className = 'm-send';
    q.min = '1';
    q.max = '180';
    q.value = String(Math.round(state.lpfQ * 10));

    const epi = document.createElement('button');
    epi.className = 'm-btn';
    epi.textContent = 'EPI';
    epi.classList.toggle('active', state.epicenterOn);
    epi.addEventListener('click', () => {
      const on = !player.getTrackState(keyId).epicenterOn;
      player.setEpicenterEnabled(keyId, on);
      epi.classList.toggle('active', on);
    });

    const bands = document.createElement('button');
    bands.className = 'm-btn';
    bands.textContent = 'BND';
    bands.classList.toggle('active', state.multibandOn);
    bands.addEventListener('click', () => {
      const on = !player.getTrackState(keyId).multibandOn;
      player.setMultibandEnabled(keyId, on);
      bands.classList.toggle('active', on);
    });

    const bandCount = document.createElement('select');
    [3, 4, 5].forEach(v => {
      const opt = document.createElement('option');
      opt.value = String(v);
      opt.textContent = `${v}B`;
      if (state.multibandCount === v) opt.selected = true;
      bandCount.appendChild(opt);
    });
    bandCount.addEventListener('change', () => {
      player.setMultibandCount(keyId, parseInt(bandCount.value, 10));
    });

    const sends = document.createElement('div');
    sends.className = 'm-sends';
    [
      ['Rev', reverb],
      ['Dly', delay],
      ['LPF', lpf],
      ['HPF', hpf],
      ['Q', q],
    ].forEach(([labelText, input]) => {
      const labelEl = document.createElement('label');
      labelEl.textContent = labelText;
      labelEl.appendChild(input);
      sends.appendChild(labelEl);
    });

    function syncButtons() {
      const cur = player.getTrackState(keyId);
      solo.classList.toggle('active', cur.solo);
      mute.classList.toggle('active', cur.muted);
      epi.classList.toggle('active', cur.epicenterOn);
      bands.classList.toggle('active', cur.multibandOn);
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
    reverb.addEventListener('input', () => player.setReverbSend(keyId, clamp01(parseInt(reverb.value, 10) / 100)));
    delay.addEventListener('input', () => player.setDelaySend(keyId, clamp01(parseInt(delay.value, 10) / 100)));
    lpf.addEventListener('input', () => player.setLPF(keyId, sliderToFreq(parseInt(lpf.value, 10) / 100)));
    hpf.addEventListener('input', () => player.setHPF(keyId, sliderToFreq(parseInt(hpf.value, 10) / 100)));
    q.addEventListener('input', () => player.setLPFQ(keyId, parseInt(q.value, 10) / 10));

    row.appendChild(solo);
    row.appendChild(mute);
    row.appendChild(volume);

    const extras = document.createElement('div');
    extras.className = 'm-extras';
    extras.appendChild(epi);
    extras.appendChild(bands);
    extras.appendChild(bandCount);

    strip.appendChild(name);
    strip.appendChild(vu);
    strip.appendChild(row);
    strip.appendChild(sends);
    strip.appendChild(extras);
    strips.appendChild(strip);

    [
      [volume, `track:${keyId}:vol`],
      [reverb, `track:${keyId}:rev`],
      [delay, `track:${keyId}:dly`],
      [mute, `track:${keyId}:mute`],
      [solo, `track:${keyId}:solo`],
      [lpf, `track:${keyId}:lpf`],
      [hpf, `track:${keyId}:hpf`],
      [q, `track:${keyId}:lpf-q`],
      [epi, `track:${keyId}:epi`],
      [bands, `track:${keyId}:bands`],
    ].forEach(([control, id]) => {
      const learn = attachMidiLearn(control, id, options);
      if (learn) {
        const host = control.parentElement && control.parentElement.tagName === 'LABEL'
          ? control.parentElement
          : control.parentElement;
        if (host) host.appendChild(learn);
      }
    });

    syncButtons();
    return {
      el: strip,
      vu,
      name,
      syncButtons,
      volume,
      reverb,
      delay,
      mute,
      solo,
      lpf,
      hpf,
      q,
      epi,
      bands,
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
        strip.name.textContent = shortName(item.name);
        strip.name.title = item.name;
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
        reverbSend: state.reverbSend,
        delaySend: state.delaySend,
        lpf: state.lpf,
        hpf: state.hpf,
        lpfQ: state.lpfQ,
        epicenterOn: state.epicenterOn,
        multibandOn: state.multibandOn,
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
        tapeMode: parseInt(delayMode.value, 10),
        masterLPF: sliderToFreq(parseInt(globalLpf.input.value, 10) / 100),
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
      if (typeof s.reverbSend === 'number') player.setReverbSend(keyId, s.reverbSend);
      if (typeof s.delaySend === 'number') player.setDelaySend(keyId, s.delaySend);
      if (typeof s.lpf === 'number') player.setLPF(keyId, s.lpf);
      if (typeof s.hpf === 'number') player.setHPF(keyId, s.hpf);
      if (typeof s.lpfQ === 'number') player.setLPFQ(keyId, s.lpfQ);
      if (typeof s.epicenterOn === 'boolean') player.setEpicenterEnabled(keyId, s.epicenterOn);
      if (typeof s.multibandOn === 'boolean') player.setMultibandEnabled(keyId, s.multibandOn);
      const strip = stripMap.get(keyId);
      if (strip) strip.syncButtons();
    });

    if (typeof fxState.delayFeedback === 'number') player.setDelayFeedback(fxState.delayFeedback);
    if (typeof fxState.delayDivision === 'number') player.setDelayTime(fxState.delayDivision);
    if (typeof fxState.tapeMode === 'number') player.setDelayMode(fxState.tapeMode);
    if (typeof fxState.masterLPF === 'number') player.setMasterLPF(fxState.masterLPF);
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
      tapBtn,
      thunderBtn,
      holdBtn,
      padButtons,
    },
  };
}
