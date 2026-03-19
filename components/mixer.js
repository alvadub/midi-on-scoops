function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}
function shortName(name) {
  const parts = String(name || "").split(/\s+/).filter(Boolean);
  if (!parts.length) return "track";
  return parts.slice(0, 2).join(" ");
}
function instrumentNameForKey(player, keyId, fallback) {
  const raw = String(keyId || "").split("/")[0];
  const n = parseInt(raw, 10);
  if (Number.isNaN(n) || !player || !player.player || !player.player.loader) return fallback;
  try {
    const info = n >= 2e3 ? player.player.loader.drumInfo(n - 2e3) : player.player.loader.instrumentInfo(n);
    if (info && info.title) return info.title;
  } catch (e) {
  }
  return fallback;
}
function freqToSlider(freq) {
  return Math.max(0, Math.min(1, Math.log(freq / 20) / Math.log(1e3)));
}
function sliderToFreq(v) {
  return 20 * Math.pow(1e3, Math.max(0, Math.min(1, v)));
}
const FALLBACK_WAVE_OPTIONS = [
  ["Auto", "auto"],
  ["Tri", "triangle"],
  ["Square", "square"],
  ["Saw", "sawtooth"]
];
function padIconTypeForLabel(label) {
  const name = String(label || "").toLowerCase();
  if (name.includes("coin")) return "coin";
  if (name.includes("explosion") || name.includes("boom")) return "explosion";
  if (name.includes("jump")) return "jump";
  if (name.includes("powerup") || name.includes("riser")) return "powerup";
  if (name.includes("bass") || name.includes("sub")) return "bass";
  if (name.includes("gong")) return "gong";
  if (name.includes("stab")) return "stab";
  if (name.includes("snare") || name.includes("clap")) return "snare";
  if (name.includes("wood") || name.includes("click")) return "click";
  if (name.includes("noise")) return "noise";
  return "default";
}
function svgForPadType(type) {
  const paths = {
    coin: '<circle cx="10" cy="10" r="6.5"/><circle cx="10" cy="10" r="3.5"/>',
    explosion: '<path d="M10 2 12.4 7.2 18 7.6 13.8 11.3 15.1 16.8 10 13.8 4.9 16.8 6.2 11.3 2 7.6 7.6 7.2Z"/>',
    jump: '<path d="M4 13 10 6l6 7"/><path d="M4 16h12"/>',
    powerup: '<path d="M10 3v14"/><path d="M3 10h14"/><circle cx="10" cy="10" r="6.5"/>',
    bass: '<path d="M3 12h8"/><path d="M3 8h12"/><path d="M3 16h5"/>',
    gong: '<circle cx="10" cy="10" r="6.5"/><path d="M10 16.5v2.5"/><path d="M8 19h4"/>',
    stab: '<path d="M4 16 16 4"/><path d="M6 4h10v10"/>',
    snare: '<circle cx="10" cy="10" r="6.5"/><path d="M5 7.5h10"/><path d="M5 12.5h10"/>',
    click: '<circle cx="7.5" cy="10" r="2.2"/><path d="M10 10h6"/><path d="M13 8v4"/>',
    noise: '<path d="M3 12c1.4-4 2.6 4 4 0s2.6-4 4 0 2.6 4 4 0"/>',
    default: '<circle cx="10" cy="10" r="6.5"/><path d="M10 6.5v5"/><circle cx="10" cy="13.5" r="0.9"/>'
  };
  return `<svg class="m-pad-icon" viewBox="0 0 20 20" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${paths[type] || paths.default}</g></svg>`;
}
function setPadButtonIcon(button, label) {
  if (!button) return;
  const iconType = padIconTypeForLabel(label);
  const node = button.querySelector(".m-pad-label");
  if (node) node.innerHTML = svgForPadType(iconType);
  button.title = String(label || "");
  button.setAttribute("aria-label", String(label || iconType));
}
function attachMidiLearn(control, midiId, options) {
  if (!control || !midiId) return null;
  control.dataset.midiId = midiId;
  const baseTitle = control.title ? `${control.title} \xB7 ` : "";
  control.title = `${baseTitle}MIDI: hold L and click to learn (${midiId})`;
  return control;
}
function makeRange(label, min, max, value, onInput, step = "1") {
  const wrap = document.createElement("label");
  wrap.className = "m-mini-row";
  const txt = document.createElement("span");
  txt.textContent = label;
  const input = document.createElement("input");
  input.type = "range";
  input.min = String(min);
  input.max = String(max);
  input.step = String(step);
  input.value = String(value);
  input.addEventListener("input", () => onInput(input.value));
  wrap.appendChild(txt);
  wrap.appendChild(input);
  return { wrap, input };
}
function createMixer(player, options = {}) {
  const root = document.createElement("aside");
  root.id = "mixer-panel";
  const title = document.createElement("h3");
  title.textContent = "Mixer";
  const strips = document.createElement("div");
  strips.id = "mixer-strips";
  const transport = document.createElement("div");
  transport.id = "mixer-transport";
  const fx = document.createElement("div");
  fx.id = "mixer-fx";
  const live = document.createElement("div");
  live.id = "mixer-live";
  const snapshots = document.createElement("div");
  snapshots.id = "snapshot-panel";
  const initialTempo = options.tempo || 146;
  const initialBars = options.bars || 8;
  const initialTranspose = options.transpose || 0;
  const stripMap = /* @__PURE__ */ new Map();
  const bpmRow = document.createElement("label");
  bpmRow.className = "transport-row";
  bpmRow.textContent = "BPM";
  const bpm = document.createElement("input");
  bpm.type = "range";
  bpm.min = "60";
  bpm.max = "200";
  bpm.value = String(initialTempo);
  bpm.dataset.midiId = "transport:bpm";
  const bpmVal = document.createElement("span");
  bpmVal.className = "transport-val";
  bpmVal.textContent = String(initialTempo);
  bpm.addEventListener("input", () => {
    bpmVal.textContent = bpm.value;
    if (options.onChange) options.onChange({ tempo: parseInt(bpm.value, 10) });
  });
  bpmRow.appendChild(bpm);
  bpmRow.appendChild(bpmVal);
  const barsRow = document.createElement("label");
  barsRow.className = "transport-row";
  barsRow.textContent = "BARS";
  const bars = document.createElement("select");
  [4, 8, 16, 32].forEach((value) => {
    const option = document.createElement("option");
    option.value = String(value);
    option.textContent = String(value);
    if (value === initialBars) option.selected = true;
    bars.appendChild(option);
  });
  bars.addEventListener("change", () => {
    if (options.onChange) options.onChange({ bars: parseInt(bars.value, 10) });
  });
  barsRow.appendChild(bars);
  const keyRow = document.createElement("label");
  keyRow.className = "transport-row";
  keyRow.textContent = "KEY";
  const key = document.createElement("input");
  key.type = "range";
  key.min = "-12";
  key.max = "12";
  key.value = String(initialTranspose);
  key.dataset.midiId = "transport:transpose";
  const keyVal = document.createElement("span");
  keyVal.className = "transport-val";
  keyVal.textContent = String(initialTranspose > 0 ? `+${initialTranspose}` : initialTranspose);
  key.addEventListener("input", () => {
    const value = parseInt(key.value, 10);
    keyVal.textContent = value > 0 ? `+${value}` : String(value);
    if (options.onChange) options.onChange({ transpose: value });
  });
  keyRow.appendChild(key);
  keyRow.appendChild(keyVal);
  transport.appendChild(bpmRow);
  transport.appendChild(barsRow);
  transport.appendChild(keyRow);
  const delayDivision = document.createElement("select");
  [["1/4", 1 / 4], ["3/8", 3 / 8], ["1/2", 1 / 2], ["3/4", 3 / 4]].forEach(([label, value]) => {
    const option = document.createElement("option");
    option.value = String(value);
    option.textContent = label;
    if (Math.abs(value - player.delayDivision) < 1e-4) option.selected = true;
    delayDivision.appendChild(option);
  });
  delayDivision.addEventListener("change", () => player.setDelayTime(parseFloat(delayDivision.value)));
  const delayLabel = document.createElement("label");
  delayLabel.textContent = "Delay Division";
  delayLabel.appendChild(delayDivision);
  const feedback = makeRange("Feedback", 0, 110, 35, (value) => player.setDelayFeedback(parseInt(value, 10) / 100));
  fx.appendChild(delayLabel);
  fx.appendChild(feedback.wrap);
  const globalLpf = makeRange("Master LPF", 0, 100, 100, (value) => {
    const freq = sliderToFreq(parseInt(value, 10) / 100);
    player.setMasterLPF(freq);
  });
  fx.appendChild(globalLpf.wrap);
  const masterPreampToggle = document.createElement("button");
  masterPreampToggle.className = "m-mini-btn";
  masterPreampToggle.textContent = "Master Preamp";
  masterPreampToggle.dataset.midiId = "master:preamp:toggle";
  masterPreampToggle.addEventListener("click", () => {
    const next = !masterPreampToggle.classList.contains("active");
    masterPreampToggle.classList.toggle("active", next);
    player.setMasterPreampEnabled(next);
  });
  const preampCut1 = makeRange("Band Cut 1", 0, 100, 33, () => {
    player.setMasterPreampCutoffs([
      sliderToFreq(parseInt(preampCut1.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut2.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut3.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut4.input.value, 10) / 100)
    ]);
  });
  const preampCut2 = makeRange("Band Cut 2", 0, 100, 67, () => {
    player.setMasterPreampCutoffs([
      sliderToFreq(parseInt(preampCut1.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut2.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut3.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut4.input.value, 10) / 100)
    ]);
  });
  const preampCut3 = makeRange("Band Cut 3", 0, 100, 78, () => {
    player.setMasterPreampCutoffs([
      sliderToFreq(parseInt(preampCut1.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut2.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut3.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut4.input.value, 10) / 100)
    ]);
  });
  const preampCut4 = makeRange("Band Cut 4", 0, 100, 90, () => {
    player.setMasterPreampCutoffs([
      sliderToFreq(parseInt(preampCut1.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut2.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut3.input.value, 10) / 100),
      sliderToFreq(parseInt(preampCut4.input.value, 10) / 100)
    ]);
  });
  const preampHPF = makeRange("Preamp HPF", 0, 100, 0, (value) => {
    player.setMasterPreampHPF(sliderToFreq(parseInt(value, 10) / 100));
  });
  const preampLPF = makeRange("Preamp LPF", 0, 100, 100, (value) => {
    player.setMasterPreampLPF(sliderToFreq(parseInt(value, 10) / 100));
  });
  const preampQ = makeRange("Preamp Q", 1, 180, 7, (value) => {
    player.setMasterPreampQ(parseInt(value, 10) / 10);
  });
  const preampBandRev = [];
  const preampBandDly = [];
  const preampBandVuWraps = [];
  const preampBandVus = [];
  for (let i = 0; i < 5; i += 1) {
    const rev = makeRange(`Band ${i + 1} Rev`, 0, 100, 35, (value) => {
      player.setMasterPreampBandReverbSend(i, parseInt(value, 10) / 100);
    });
    const dly = makeRange(`Band ${i + 1} Dly`, 0, 100, 25, (value) => {
      player.setMasterPreampBandDelaySend(i, parseInt(value, 10) / 100);
    });
    const vuWrap = document.createElement("div");
    vuWrap.className = "m-band-vu-wrap";
    const vuLabel = document.createElement("span");
    vuLabel.className = "m-band-vu-label";
    vuLabel.textContent = `Band ${i + 1} VU`;
    const vu = document.createElement("span");
    vu.className = "m-band-vu";
    const fill = document.createElement("span");
    fill.className = "m-band-vu-fill";
    vu.appendChild(fill);
    vuWrap.appendChild(vuLabel);
    vuWrap.appendChild(vu);
    preampBandRev.push(rev);
    preampBandDly.push(dly);
    preampBandVuWraps.push(vuWrap);
    preampBandVus.push(fill);
  }
  fx.appendChild(masterPreampToggle);
  fx.appendChild(preampCut1.wrap);
  fx.appendChild(preampCut2.wrap);
  fx.appendChild(preampCut3.wrap);
  fx.appendChild(preampCut4.wrap);
  fx.appendChild(preampHPF.wrap);
  fx.appendChild(preampLPF.wrap);
  fx.appendChild(preampQ.wrap);
  for (let i = 0; i < 5; i += 1) {
    fx.appendChild(preampBandRev[i].wrap);
    fx.appendChild(preampBandDly[i].wrap);
    fx.appendChild(preampBandVuWraps[i]);
  }
  [[masterPreampToggle, "master:preamp:toggle"], [preampCut1.input, "master:preamp:cut1"], [preampCut2.input, "master:preamp:cut2"], [preampCut3.input, "master:preamp:cut3"], [preampCut4.input, "master:preamp:cut4"], [preampHPF.input, "master:preamp:hpf"], [preampLPF.input, "master:preamp:lpf"], [preampQ.input, "master:preamp:q"]].forEach(([control, id]) => attachMidiLearn(control, id, options));
  for (let i = 0; i < 5; i += 1) {
    attachMidiLearn(preampBandRev[i].input, `master:preamp:b${i + 1}:rev`, options);
    attachMidiLearn(preampBandDly[i].input, `master:preamp:b${i + 1}:dly`, options);
  }
  const padsWrap = document.createElement("div");
  padsWrap.className = "m-live-block m-live-block--pads";
  const padsTitle = document.createElement("h4");
  padsTitle.textContent = "Pads";
  const padGrid = document.createElement("div");
  padGrid.className = "m-pad-grid";
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = "audio/*";
  fileInput.hidden = true;
  let pendingPadLoad = 0;
  fileInput.addEventListener("change", async () => {
    const [file] = fileInput.files || [];
    if (!file) return;
    await player.loadPadFromFile(pendingPadLoad, file);
    setPadButtonIcon(padButtons[pendingPadLoad], player.pads[pendingPadLoad].label);
    fileInput.value = "";
  });
  const padButtons = [];
  for (let i = 0; i < player.pads.length; i += 1) {
    const pad = document.createElement("button");
    pad.className = "m-pad";
    pad.dataset.midiId = `pad:${i}:trig`;
    pad.innerHTML = '<span class="m-pad-label"></span>';
    setPadButtonIcon(pad, player.pads[i].label);
    pad.addEventListener("click", () => {
      const ok = player.triggerPad(i, player.pads[i].looping);
      if (!ok) {
        pendingPadLoad = i;
        fileInput.click();
        return;
      }
      pad.classList.add("playing");
      setTimeout(() => pad.classList.remove("playing"), 120);
    });
    pad.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const looping = !player.pads[i].looping;
      player.pads[i].looping = looping;
      if (looping) player.triggerPad(i, true);
      else player.stopPad(i);
      pad.classList.toggle("looping", looping);
    });
    const drop = async (file) => {
      await player.loadPadFromFile(i, file);
      setPadButtonIcon(pad, player.pads[i].label);
    };
    pad.addEventListener("dragover", (e) => {
      e.preventDefault();
      pad.classList.add("drag");
    });
    pad.addEventListener("dragleave", () => pad.classList.remove("drag"));
    pad.addEventListener("drop", async (e) => {
      e.preventDefault();
      pad.classList.remove("drag");
      const file = e.dataTransfer && e.dataTransfer.files ? e.dataTransfer.files[0] : null;
      if (file) await drop(file);
    });
    padButtons.push(pad);
    padGrid.appendChild(pad);
  }
  const padsRev = makeRange("Pads Rev", 0, 100, 35, (value) => player.setPadsReverb(parseInt(value, 10) / 100));
  const padsDly = makeRange("Pads Dly", 0, 100, 25, (value) => player.setPadsDelay(parseInt(value, 10) / 100));
  padsWrap.appendChild(padsTitle);
  padsWrap.appendChild(padGrid);
  padsWrap.appendChild(fileInput);
  padsWrap.appendChild(padsRev.wrap);
  padsWrap.appendChild(padsDly.wrap);
  live.appendChild(padsWrap);
  const snapTitle = document.createElement("h4");
  snapTitle.textContent = "Snapshots";
  const snapRow = document.createElement("div");
  snapRow.className = "snapshot-row";
  const snapSave = document.createElement("button");
  snapSave.className = "m-mini-btn";
  snapSave.textContent = "+ Save";
  snapSave.addEventListener("click", () => {
    if (options.onSnapshotSave) options.onSnapshotSave();
  });
  const snapExport = document.createElement("button");
  snapExport.className = "m-mini-btn";
  snapExport.textContent = "Export";
  snapExport.addEventListener("click", () => {
    if (options.onSnapshotExport) options.onSnapshotExport();
  });
  const snapImport = document.createElement("button");
  snapImport.className = "m-mini-btn";
  snapImport.textContent = "Import";
  snapImport.addEventListener("click", () => {
    if (options.onSnapshotImport) options.onSnapshotImport();
  });
  const snapList = document.createElement("ul");
  snapList.className = "snapshot-list";
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
    const strip = document.createElement("div");
    strip.className = "m-strip";
    strip.dataset.key = keyId;
    const name = document.createElement("div");
    name.className = "m-name";
    name.textContent = shortName(displayName);
    name.title = `${displayName}${label && label !== displayName ? ` \xB7 ${label}` : ""}`;
    const vu = document.createElement("div");
    vu.className = "m-vu";
    const row = document.createElement("div");
    row.className = "m-row";
    const solo = document.createElement("button");
    solo.className = "m-btn";
    solo.textContent = "S";
    const mute = document.createElement("button");
    mute.className = "m-btn";
    mute.textContent = "M";
    const volume = document.createElement("input");
    volume.type = "range";
    volume.className = "m-slider";
    volume.min = "0";
    volume.max = "100";
    volume.value = String(Math.round(state.volume * 100));
    const epi = document.createElement("button");
    epi.className = "m-btn";
    epi.textContent = "EPI";
    epi.classList.toggle("active", state.epicenterOn);
    epi.addEventListener("click", () => {
      const on = !player.getTrackState(keyId).epicenterOn;
      player.setEpicenterEnabled(keyId, on);
      epi.classList.toggle("active", on);
    });
    const wave = document.createElement("select");
    wave.className = "m-wave";
    FALLBACK_WAVE_OPTIONS.forEach(([labelText, value]) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = labelText;
      wave.appendChild(option);
    });
    wave.value = state.fallbackWave || "auto";
    wave.addEventListener("change", () => player.setFallbackWave(keyId, wave.value));
    function syncButtons() {
      const cur = player.getTrackState(keyId);
      solo.classList.toggle("active", cur.solo);
      mute.classList.toggle("active", cur.muted);
      epi.classList.toggle("active", cur.epicenterOn);
      wave.value = cur.fallbackWave || "auto";
    }
    solo.addEventListener("click", () => {
      const cur = player.getTrackState(keyId);
      player.setSolo(keyId, !cur.solo);
      syncButtons();
    });
    mute.addEventListener("click", () => {
      const cur = player.getTrackState(keyId);
      player.setMute(keyId, !cur.muted);
      syncButtons();
    });
    volume.addEventListener("input", () => player.setVolume(keyId, clamp01(parseInt(volume.value, 10) / 100)));
    row.appendChild(solo);
    row.appendChild(mute);
    row.appendChild(epi);
    row.appendChild(wave);
    row.appendChild(volume);
    strip.appendChild(name);
    strip.appendChild(vu);
    strip.appendChild(row);
    strips.appendChild(strip);
    [
      [volume, `track:${keyId}:vol`],
      [mute, `track:${keyId}:mute`],
      [solo, `track:${keyId}:solo`],
      [epi, `track:${keyId}:epi`],
      [wave, `track:${keyId}:wave`]
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
      wave
    };
  }
  function update(data) {
    const entries = Array.isArray(data) ? data.map((track) => ({ key: `${track[0]}/${track[1]}`, name: track[1] })) : [];
    const nextKeys = new Set(entries.map((item) => item.key));
    stripMap.forEach((value, keyId) => {
      if (!nextKeys.has(keyId)) {
        value.el.remove();
        stripMap.delete(keyId);
      }
    });
    entries.forEach((item) => {
      if (!stripMap.has(item.key)) {
        stripMap.set(item.key, createStrip(item.key, item.name));
      } else {
        const strip = stripMap.get(item.key);
        const displayName = instrumentNameForKey(player, item.key, item.name);
        strip.name.textContent = shortName(displayName);
        strip.name.title = `${displayName}${item.name && item.name !== displayName ? ` \xB7 ${item.name}` : ""}`;
        strip.syncButtons();
      }
    });
  }
  function flashVU(keyId) {
    const strip = stripMap.get(keyId);
    if (!strip) return;
    strip.vu.classList.add("active");
    setTimeout(() => strip.vu.classList.remove("active"), 80);
  }
  function toggle(forceOpen) {
    const open = typeof forceOpen === "boolean" ? forceOpen : root.classList.contains("collapsed");
    root.classList.toggle("collapsed", !open);
    return open;
  }
  function syncTransport(next = {}) {
    if (typeof next.tempo === "number") {
      bpm.value = String(next.tempo);
      bpmVal.textContent = String(next.tempo);
    }
    if (typeof next.bars === "number") bars.value = String(next.bars);
    if (typeof next.transpose === "number") {
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
        fallbackWave: state.fallbackWave || "auto"
      };
    });
    return {
      transport: {
        tempo: parseInt(bpm.value, 10),
        bars: parseInt(bars.value, 10),
        transpose: parseInt(key.value, 10)
      },
      tracks,
      fx: {
        delayFeedback: parseInt(feedback.input.value, 10) / 100,
        delayDivision: parseFloat(delayDivision.value),
        masterLPF: sliderToFreq(parseInt(globalLpf.input.value, 10) / 100),
        masterPreampEnabled: masterPreampToggle.classList.contains("active"),
        masterPreampCutoffs: [
          sliderToFreq(parseInt(preampCut1.input.value, 10) / 100),
          sliderToFreq(parseInt(preampCut2.input.value, 10) / 100),
          sliderToFreq(parseInt(preampCut3.input.value, 10) / 100),
          sliderToFreq(parseInt(preampCut4.input.value, 10) / 100)
        ],
        masterPreampHPF: sliderToFreq(parseInt(preampHPF.input.value, 10) / 100),
        masterPreampLPF: sliderToFreq(parseInt(preampLPF.input.value, 10) / 100),
        masterPreampQ: parseInt(preampQ.input.value, 10) / 10,
        masterPreampBandSends: preampBandRev.map((rev, i) => ({
          reverb: parseInt(rev.input.value, 10) / 100,
          delay: parseInt(preampBandDly[i].input.value, 10) / 100
        }))
      }
    };
  }
  function applyState(snapshotState) {
    if (!snapshotState) return;
    const transportState = snapshotState.transport || {};
    const trackState = snapshotState.tracks || {};
    const fxState = snapshotState.fx || {};
    if (typeof transportState.tempo === "number") {
      bpm.value = String(transportState.tempo);
      bpm.dispatchEvent(new Event("input", { bubbles: true }));
    }
    if (typeof transportState.bars === "number") {
      bars.value = String(transportState.bars);
      bars.dispatchEvent(new Event("change", { bubbles: true }));
    }
    if (typeof transportState.transpose === "number") {
      key.value = String(transportState.transpose);
      key.dispatchEvent(new Event("input", { bubbles: true }));
    }
    Object.keys(trackState).forEach((keyId) => {
      const s = trackState[keyId];
      if (typeof s.volume === "number") player.setVolume(keyId, s.volume);
      if (typeof s.muted === "boolean") player.setMute(keyId, s.muted);
      if (typeof s.solo === "boolean") player.setSolo(keyId, s.solo);
      if (typeof s.epicenterOn === "boolean") player.setEpicenterEnabled(keyId, s.epicenterOn);
      if (typeof s.fallbackWave === "string") player.setFallbackWave(keyId, s.fallbackWave);
      const strip = stripMap.get(keyId);
      if (strip) strip.syncButtons();
    });
    if (typeof fxState.delayFeedback === "number") player.setDelayFeedback(fxState.delayFeedback);
    if (typeof fxState.delayDivision === "number") player.setDelayTime(fxState.delayDivision);
    if (typeof fxState.masterLPF === "number") player.setMasterLPF(fxState.masterLPF);
    if (typeof fxState.masterPreampEnabled === "boolean") {
      masterPreampToggle.classList.toggle("active", fxState.masterPreampEnabled);
      player.setMasterPreampEnabled(fxState.masterPreampEnabled);
    }
    if (Array.isArray(fxState.masterPreampCutoffs)) {
      const [c1 = 200, c2 = 2e3, c3 = 6e3, c4 = 12e3] = fxState.masterPreampCutoffs;
      preampCut1.input.value = String(Math.round(freqToSlider(c1) * 100));
      preampCut2.input.value = String(Math.round(freqToSlider(c2) * 100));
      preampCut3.input.value = String(Math.round(freqToSlider(c3) * 100));
      preampCut4.input.value = String(Math.round(freqToSlider(c4) * 100));
      player.setMasterPreampCutoffs([c1, c2, c3, c4]);
    }
    if (typeof fxState.masterPreampHPF === "number") {
      preampHPF.input.value = String(Math.round(freqToSlider(fxState.masterPreampHPF) * 100));
      player.setMasterPreampHPF(fxState.masterPreampHPF);
    }
    if (typeof fxState.masterPreampLPF === "number") {
      preampLPF.input.value = String(Math.round(freqToSlider(fxState.masterPreampLPF) * 100));
      player.setMasterPreampLPF(fxState.masterPreampLPF);
    }
    if (typeof fxState.masterPreampQ === "number") {
      preampQ.input.value = String(Math.round(fxState.masterPreampQ * 10));
      player.setMasterPreampQ(fxState.masterPreampQ);
    }
    if (Array.isArray(fxState.masterPreampBandSends)) {
      for (let i = 0; i < 5; i += 1) {
        const send = fxState.masterPreampBandSends[i] || {};
        const reverb = typeof send.reverb === "number" ? send.reverb : 0.35;
        const delay = typeof send.delay === "number" ? send.delay : 0.25;
        preampBandRev[i].input.value = String(Math.round(reverb * 100));
        preampBandDly[i].input.value = String(Math.round(delay * 100));
        player.setMasterPreampBandReverbSend(i, reverb);
        player.setMasterPreampBandDelaySend(i, delay);
      }
    } else {
      const oldRev = typeof fxState.masterPreampRev === "number" ? fxState.masterPreampRev : 0.35;
      const oldDly = typeof fxState.masterPreampDly === "number" ? fxState.masterPreampDly : 0.25;
      for (let i = 0; i < 5; i += 1) {
        preampBandRev[i].input.value = String(Math.round(oldRev * 100));
        preampBandDly[i].input.value = String(Math.round(oldDly * 100));
        player.setMasterPreampBandReverbSend(i, oldRev);
        player.setMasterPreampBandDelaySend(i, oldDly);
      }
    }
  }
  function setSnapshots(items, selectedId) {
    snapList.innerHTML = "";
    (items || []).forEach((item) => {
      const li = document.createElement("li");
      li.className = "snapshot-item";
      if (item.id === selectedId) li.classList.add("active");
      const btn = document.createElement("button");
      btn.className = "m-mini-btn";
      btn.textContent = item.name;
      btn.addEventListener("click", () => {
        if (options.onSnapshotRecall) options.onSnapshotRecall(item.id);
      });
      const del = document.createElement("button");
      del.className = "m-mini-btn";
      del.textContent = "\xD7";
      del.addEventListener("click", () => {
        if (options.onSnapshotDelete) options.onSnapshotDelete(item.id);
      });
      li.appendChild(btn);
      li.appendChild(del);
      snapList.appendChild(li);
    });
  }
  function animatePreampVus() {
    const levels = typeof player.getMasterPreampBandLevels === "function" ? player.getMasterPreampBandLevels() : [0, 0, 0, 0, 0];
    for (let i = 0; i < preampBandVus.length; i += 1) {
      const level = Math.max(0, Math.min(1, levels[i] || 0));
      preampBandVus[i].style.transform = `scaleX(${level})`;
    }
    requestAnimationFrame(animatePreampVus);
  }
  requestAnimationFrame(animatePreampVus);
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
      padButtons
    }
  };
}
export {
  createMixer
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvbWl4ZXIuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImZ1bmN0aW9uIGNsYW1wMDEodmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIHNob3J0TmFtZShuYW1lKSB7XG4gIGNvbnN0IHBhcnRzID0gU3RyaW5nKG5hbWUgfHwgJycpLnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICBpZiAoIXBhcnRzLmxlbmd0aCkgcmV0dXJuICd0cmFjayc7XG4gIHJldHVybiBwYXJ0cy5zbGljZSgwLCAyKS5qb2luKCcgJyk7XG59XG5cbmZ1bmN0aW9uIGluc3RydW1lbnROYW1lRm9yS2V5KHBsYXllciwga2V5SWQsIGZhbGxiYWNrKSB7XG4gIGNvbnN0IHJhdyA9IFN0cmluZyhrZXlJZCB8fCAnJykuc3BsaXQoJy8nKVswXTtcbiAgY29uc3QgbiA9IHBhcnNlSW50KHJhdywgMTApO1xuICBpZiAoTnVtYmVyLmlzTmFOKG4pIHx8ICFwbGF5ZXIgfHwgIXBsYXllci5wbGF5ZXIgfHwgIXBsYXllci5wbGF5ZXIubG9hZGVyKSByZXR1cm4gZmFsbGJhY2s7XG4gIHRyeSB7XG4gICAgY29uc3QgaW5mbyA9IG4gPj0gMjAwMFxuICAgICAgPyBwbGF5ZXIucGxheWVyLmxvYWRlci5kcnVtSW5mbyhuIC0gMjAwMClcbiAgICAgIDogcGxheWVyLnBsYXllci5sb2FkZXIuaW5zdHJ1bWVudEluZm8obik7XG4gICAgaWYgKGluZm8gJiYgaW5mby50aXRsZSkgcmV0dXJuIGluZm8udGl0bGU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBpZ25vcmUgYW5kIGZhbGxiYWNrXG4gIH1cbiAgcmV0dXJuIGZhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBmcmVxVG9TbGlkZXIoZnJlcSkge1xuICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgTWF0aC5sb2coZnJlcSAvIDIwKSAvIE1hdGgubG9nKDEwMDApKSk7XG59XG5cbmZ1bmN0aW9uIHNsaWRlclRvRnJlcSh2KSB7XG4gIHJldHVybiAyMCAqIE1hdGgucG93KDEwMDAsIE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHYpKSk7XG59XG5cbmNvbnN0IEZBTExCQUNLX1dBVkVfT1BUSU9OUyA9IFtcbiAgWydBdXRvJywgJ2F1dG8nXSxcbiAgWydUcmknLCAndHJpYW5nbGUnXSxcbiAgWydTcXVhcmUnLCAnc3F1YXJlJ10sXG4gIFsnU2F3JywgJ3Nhd3Rvb3RoJ10sXG5dO1xuXG5mdW5jdGlvbiBwYWRJY29uVHlwZUZvckxhYmVsKGxhYmVsKSB7XG4gIGNvbnN0IG5hbWUgPSBTdHJpbmcobGFiZWwgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gIGlmIChuYW1lLmluY2x1ZGVzKCdjb2luJykpIHJldHVybiAnY29pbic7XG4gIGlmIChuYW1lLmluY2x1ZGVzKCdleHBsb3Npb24nKSB8fCBuYW1lLmluY2x1ZGVzKCdib29tJykpIHJldHVybiAnZXhwbG9zaW9uJztcbiAgaWYgKG5hbWUuaW5jbHVkZXMoJ2p1bXAnKSkgcmV0dXJuICdqdW1wJztcbiAgaWYgKG5hbWUuaW5jbHVkZXMoJ3Bvd2VydXAnKSB8fCBuYW1lLmluY2x1ZGVzKCdyaXNlcicpKSByZXR1cm4gJ3Bvd2VydXAnO1xuICBpZiAobmFtZS5pbmNsdWRlcygnYmFzcycpIHx8IG5hbWUuaW5jbHVkZXMoJ3N1YicpKSByZXR1cm4gJ2Jhc3MnO1xuICBpZiAobmFtZS5pbmNsdWRlcygnZ29uZycpKSByZXR1cm4gJ2dvbmcnO1xuICBpZiAobmFtZS5pbmNsdWRlcygnc3RhYicpKSByZXR1cm4gJ3N0YWInO1xuICBpZiAobmFtZS5pbmNsdWRlcygnc25hcmUnKSB8fCBuYW1lLmluY2x1ZGVzKCdjbGFwJykpIHJldHVybiAnc25hcmUnO1xuICBpZiAobmFtZS5pbmNsdWRlcygnd29vZCcpIHx8IG5hbWUuaW5jbHVkZXMoJ2NsaWNrJykpIHJldHVybiAnY2xpY2snO1xuICBpZiAobmFtZS5pbmNsdWRlcygnbm9pc2UnKSkgcmV0dXJuICdub2lzZSc7XG4gIHJldHVybiAnZGVmYXVsdCc7XG59XG5cbmZ1bmN0aW9uIHN2Z0ZvclBhZFR5cGUodHlwZSkge1xuICBjb25zdCBwYXRocyA9IHtcbiAgICBjb2luOiAnPGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCI2LjVcIi8+PGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCIzLjVcIi8+JyxcbiAgICBleHBsb3Npb246ICc8cGF0aCBkPVwiTTEwIDIgMTIuNCA3LjIgMTggNy42IDEzLjggMTEuMyAxNS4xIDE2LjggMTAgMTMuOCA0LjkgMTYuOCA2LjIgMTEuMyAyIDcuNiA3LjYgNy4yWlwiLz4nLFxuICAgIGp1bXA6ICc8cGF0aCBkPVwiTTQgMTMgMTAgNmw2IDdcIi8+PHBhdGggZD1cIk00IDE2aDEyXCIvPicsXG4gICAgcG93ZXJ1cDogJzxwYXRoIGQ9XCJNMTAgM3YxNFwiLz48cGF0aCBkPVwiTTMgMTBoMTRcIi8+PGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCI2LjVcIi8+JyxcbiAgICBiYXNzOiAnPHBhdGggZD1cIk0zIDEyaDhcIi8+PHBhdGggZD1cIk0zIDhoMTJcIi8+PHBhdGggZD1cIk0zIDE2aDVcIi8+JyxcbiAgICBnb25nOiAnPGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCI2LjVcIi8+PHBhdGggZD1cIk0xMCAxNi41djIuNVwiLz48cGF0aCBkPVwiTTggMTloNFwiLz4nLFxuICAgIHN0YWI6ICc8cGF0aCBkPVwiTTQgMTYgMTYgNFwiLz48cGF0aCBkPVwiTTYgNGgxMHYxMFwiLz4nLFxuICAgIHNuYXJlOiAnPGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMFwiIHI9XCI2LjVcIi8+PHBhdGggZD1cIk01IDcuNWgxMFwiLz48cGF0aCBkPVwiTTUgMTIuNWgxMFwiLz4nLFxuICAgIGNsaWNrOiAnPGNpcmNsZSBjeD1cIjcuNVwiIGN5PVwiMTBcIiByPVwiMi4yXCIvPjxwYXRoIGQ9XCJNMTAgMTBoNlwiLz48cGF0aCBkPVwiTTEzIDh2NFwiLz4nLFxuICAgIG5vaXNlOiAnPHBhdGggZD1cIk0zIDEyYzEuNC00IDIuNiA0IDQgMHMyLjYtNCA0IDAgMi42IDQgNCAwXCIvPicsXG4gICAgZGVmYXVsdDogJzxjaXJjbGUgY3g9XCIxMFwiIGN5PVwiMTBcIiByPVwiNi41XCIvPjxwYXRoIGQ9XCJNMTAgNi41djVcIi8+PGNpcmNsZSBjeD1cIjEwXCIgY3k9XCIxMy41XCIgcj1cIjAuOVwiLz4nLFxuICB9O1xuICByZXR1cm4gYDxzdmcgY2xhc3M9XCJtLXBhZC1pY29uXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjxnIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMS42XCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+JHtwYXRoc1t0eXBlXSB8fCBwYXRocy5kZWZhdWx0fTwvZz48L3N2Zz5gO1xufVxuXG5mdW5jdGlvbiBzZXRQYWRCdXR0b25JY29uKGJ1dHRvbiwgbGFiZWwpIHtcbiAgaWYgKCFidXR0b24pIHJldHVybjtcbiAgY29uc3QgaWNvblR5cGUgPSBwYWRJY29uVHlwZUZvckxhYmVsKGxhYmVsKTtcbiAgY29uc3Qgbm9kZSA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcubS1wYWQtbGFiZWwnKTtcbiAgaWYgKG5vZGUpIG5vZGUuaW5uZXJIVE1MID0gc3ZnRm9yUGFkVHlwZShpY29uVHlwZSk7XG4gIGJ1dHRvbi50aXRsZSA9IFN0cmluZyhsYWJlbCB8fCAnJyk7XG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBTdHJpbmcobGFiZWwgfHwgaWNvblR5cGUpKTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoTWlkaUxlYXJuKGNvbnRyb2wsIG1pZGlJZCwgb3B0aW9ucykge1xuICBpZiAoIWNvbnRyb2wgfHwgIW1pZGlJZCkgcmV0dXJuIG51bGw7XG4gIGNvbnRyb2wuZGF0YXNldC5taWRpSWQgPSBtaWRpSWQ7XG4gIGNvbnN0IGJhc2VUaXRsZSA9IGNvbnRyb2wudGl0bGUgPyBgJHtjb250cm9sLnRpdGxlfSBcdTAwQjcgYCA6ICcnO1xuICBjb250cm9sLnRpdGxlID0gYCR7YmFzZVRpdGxlfU1JREk6IGhvbGQgTCBhbmQgY2xpY2sgdG8gbGVhcm4gKCR7bWlkaUlkfSlgO1xuICByZXR1cm4gY29udHJvbDtcbn1cblxuZnVuY3Rpb24gbWFrZVJhbmdlKGxhYmVsLCBtaW4sIG1heCwgdmFsdWUsIG9uSW5wdXQsIHN0ZXAgPSAnMScpIHtcbiAgY29uc3Qgd3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIHdyYXAuY2xhc3NOYW1lID0gJ20tbWluaS1yb3cnO1xuICBjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHR4dC50ZXh0Q29udGVudCA9IGxhYmVsO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSAncmFuZ2UnO1xuICBpbnB1dC5taW4gPSBTdHJpbmcobWluKTtcbiAgaW5wdXQubWF4ID0gU3RyaW5nKG1heCk7XG4gIGlucHV0LnN0ZXAgPSBTdHJpbmcoc3RlcCk7XG4gIGlucHV0LnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBvbklucHV0KGlucHV0LnZhbHVlKSk7XG4gIHdyYXAuYXBwZW5kQ2hpbGQodHh0KTtcbiAgd3JhcC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIHJldHVybiB7IHdyYXAsIGlucHV0IH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNaXhlcihwbGF5ZXIsIG9wdGlvbnMgPSB7fSkge1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcbiAgcm9vdC5pZCA9ICdtaXhlci1wYW5lbCc7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9ICdNaXhlcic7XG5cbiAgY29uc3Qgc3RyaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN0cmlwcy5pZCA9ICdtaXhlci1zdHJpcHMnO1xuXG4gIGNvbnN0IHRyYW5zcG9ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0cmFuc3BvcnQuaWQgPSAnbWl4ZXItdHJhbnNwb3J0JztcblxuICBjb25zdCBmeCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmeC5pZCA9ICdtaXhlci1meCc7XG5cbiAgY29uc3QgbGl2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsaXZlLmlkID0gJ21peGVyLWxpdmUnO1xuXG4gIGNvbnN0IHNuYXBzaG90cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzbmFwc2hvdHMuaWQgPSAnc25hcHNob3QtcGFuZWwnO1xuXG4gIGNvbnN0IGluaXRpYWxUZW1wbyA9IG9wdGlvbnMudGVtcG8gfHwgMTQ2O1xuICBjb25zdCBpbml0aWFsQmFycyA9IG9wdGlvbnMuYmFycyB8fCA4O1xuICBjb25zdCBpbml0aWFsVHJhbnNwb3NlID0gb3B0aW9ucy50cmFuc3Bvc2UgfHwgMDtcbiAgY29uc3Qgc3RyaXBNYXAgPSBuZXcgTWFwKCk7XG5cbiAgY29uc3QgYnBtUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgYnBtUm93LmNsYXNzTmFtZSA9ICd0cmFuc3BvcnQtcm93JztcbiAgYnBtUm93LnRleHRDb250ZW50ID0gJ0JQTSc7XG4gIGNvbnN0IGJwbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGJwbS50eXBlID0gJ3JhbmdlJztcbiAgYnBtLm1pbiA9ICc2MCc7XG4gIGJwbS5tYXggPSAnMjAwJztcbiAgYnBtLnZhbHVlID0gU3RyaW5nKGluaXRpYWxUZW1wbyk7XG4gIGJwbS5kYXRhc2V0Lm1pZGlJZCA9ICd0cmFuc3BvcnQ6YnBtJztcbiAgY29uc3QgYnBtVmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBicG1WYWwuY2xhc3NOYW1lID0gJ3RyYW5zcG9ydC12YWwnO1xuICBicG1WYWwudGV4dENvbnRlbnQgPSBTdHJpbmcoaW5pdGlhbFRlbXBvKTtcbiAgYnBtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGJwbVZhbC50ZXh0Q29udGVudCA9IGJwbS52YWx1ZTtcbiAgICBpZiAob3B0aW9ucy5vbkNoYW5nZSkgb3B0aW9ucy5vbkNoYW5nZSh7IHRlbXBvOiBwYXJzZUludChicG0udmFsdWUsIDEwKSB9KTtcbiAgfSk7XG4gIGJwbVJvdy5hcHBlbmRDaGlsZChicG0pO1xuICBicG1Sb3cuYXBwZW5kQ2hpbGQoYnBtVmFsKTtcblxuICBjb25zdCBiYXJzUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgYmFyc1Jvdy5jbGFzc05hbWUgPSAndHJhbnNwb3J0LXJvdyc7XG4gIGJhcnNSb3cudGV4dENvbnRlbnQgPSAnQkFSUyc7XG4gIGNvbnN0IGJhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgWzQsIDgsIDE2LCAzMl0uZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBTdHJpbmcodmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PT0gaW5pdGlhbEJhcnMpIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgYmFycy5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgYmFycy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKG9wdGlvbnMub25DaGFuZ2UpIG9wdGlvbnMub25DaGFuZ2UoeyBiYXJzOiBwYXJzZUludChiYXJzLnZhbHVlLCAxMCkgfSk7XG4gIH0pO1xuICBiYXJzUm93LmFwcGVuZENoaWxkKGJhcnMpO1xuXG4gIGNvbnN0IGtleVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGtleVJvdy5jbGFzc05hbWUgPSAndHJhbnNwb3J0LXJvdyc7XG4gIGtleVJvdy50ZXh0Q29udGVudCA9ICdLRVknO1xuICBjb25zdCBrZXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBrZXkudHlwZSA9ICdyYW5nZSc7XG4gIGtleS5taW4gPSAnLTEyJztcbiAga2V5Lm1heCA9ICcxMic7XG4gIGtleS52YWx1ZSA9IFN0cmluZyhpbml0aWFsVHJhbnNwb3NlKTtcbiAga2V5LmRhdGFzZXQubWlkaUlkID0gJ3RyYW5zcG9ydDp0cmFuc3Bvc2UnO1xuICBjb25zdCBrZXlWYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGtleVZhbC5jbGFzc05hbWUgPSAndHJhbnNwb3J0LXZhbCc7XG4gIGtleVZhbC50ZXh0Q29udGVudCA9IFN0cmluZyhpbml0aWFsVHJhbnNwb3NlID4gMCA/IGArJHtpbml0aWFsVHJhbnNwb3NlfWAgOiBpbml0aWFsVHJhbnNwb3NlKTtcbiAga2V5LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcGFyc2VJbnQoa2V5LnZhbHVlLCAxMCk7XG4gICAga2V5VmFsLnRleHRDb250ZW50ID0gdmFsdWUgPiAwID8gYCske3ZhbHVlfWAgOiBTdHJpbmcodmFsdWUpO1xuICAgIGlmIChvcHRpb25zLm9uQ2hhbmdlKSBvcHRpb25zLm9uQ2hhbmdlKHsgdHJhbnNwb3NlOiB2YWx1ZSB9KTtcbiAgfSk7XG4gIGtleVJvdy5hcHBlbmRDaGlsZChrZXkpO1xuICBrZXlSb3cuYXBwZW5kQ2hpbGQoa2V5VmFsKTtcbiAgdHJhbnNwb3J0LmFwcGVuZENoaWxkKGJwbVJvdyk7XG4gIHRyYW5zcG9ydC5hcHBlbmRDaGlsZChiYXJzUm93KTtcbiAgdHJhbnNwb3J0LmFwcGVuZENoaWxkKGtleVJvdyk7XG5cbiAgY29uc3QgZGVsYXlEaXZpc2lvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBbWycxLzQnLCAxIC8gNF0sIFsnMy84JywgMyAvIDhdLCBbJzEvMicsIDEgLyAyXSwgWyczLzQnLCAzIC8gNF1dLmZvckVhY2goKFtsYWJlbCwgdmFsdWVdKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBsYWJlbDtcbiAgICBpZiAoTWF0aC5hYnModmFsdWUgLSBwbGF5ZXIuZGVsYXlEaXZpc2lvbikgPCAwLjAwMDEpIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgZGVsYXlEaXZpc2lvbi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgZGVsYXlEaXZpc2lvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBwbGF5ZXIuc2V0RGVsYXlUaW1lKHBhcnNlRmxvYXQoZGVsYXlEaXZpc2lvbi52YWx1ZSkpKTtcblxuICBjb25zdCBkZWxheUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZGVsYXlMYWJlbC50ZXh0Q29udGVudCA9ICdEZWxheSBEaXZpc2lvbic7XG4gIGRlbGF5TGFiZWwuYXBwZW5kQ2hpbGQoZGVsYXlEaXZpc2lvbik7XG4gIGNvbnN0IGZlZWRiYWNrID0gbWFrZVJhbmdlKCdGZWVkYmFjaycsIDAsIDExMCwgMzUsIHZhbHVlID0+IHBsYXllci5zZXREZWxheUZlZWRiYWNrKHBhcnNlSW50KHZhbHVlLCAxMCkgLyAxMDApKTtcbiAgZnguYXBwZW5kQ2hpbGQoZGVsYXlMYWJlbCk7XG4gIGZ4LmFwcGVuZENoaWxkKGZlZWRiYWNrLndyYXApO1xuXG4gIGNvbnN0IGdsb2JhbExwZiA9IG1ha2VSYW5nZSgnTWFzdGVyIExQRicsIDAsIDEwMCwgMTAwLCB2YWx1ZSA9PiB7XG4gICAgY29uc3QgZnJlcSA9IHNsaWRlclRvRnJlcShwYXJzZUludCh2YWx1ZSwgMTApIC8gMTAwKTtcbiAgICBwbGF5ZXIuc2V0TWFzdGVyTFBGKGZyZXEpO1xuICB9KTtcbiAgZnguYXBwZW5kQ2hpbGQoZ2xvYmFsTHBmLndyYXApO1xuXG4gIGNvbnN0IG1hc3RlclByZWFtcFRvZ2dsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtYXN0ZXJQcmVhbXBUb2dnbGUuY2xhc3NOYW1lID0gJ20tbWluaS1idG4nO1xuICBtYXN0ZXJQcmVhbXBUb2dnbGUudGV4dENvbnRlbnQgPSAnTWFzdGVyIFByZWFtcCc7XG4gIG1hc3RlclByZWFtcFRvZ2dsZS5kYXRhc2V0Lm1pZGlJZCA9ICdtYXN0ZXI6cHJlYW1wOnRvZ2dsZSc7XG4gIG1hc3RlclByZWFtcFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBuZXh0ID0gIW1hc3RlclByZWFtcFRvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpO1xuICAgIG1hc3RlclByZWFtcFRvZ2dsZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBuZXh0KTtcbiAgICBwbGF5ZXIuc2V0TWFzdGVyUHJlYW1wRW5hYmxlZChuZXh0KTtcbiAgfSk7XG4gIGNvbnN0IHByZWFtcEN1dDEgPSBtYWtlUmFuZ2UoJ0JhbmQgQ3V0IDEnLCAwLCAxMDAsIDMzLCAoKSA9PiB7XG4gICAgcGxheWVyLnNldE1hc3RlclByZWFtcEN1dG9mZnMoW1xuICAgICAgc2xpZGVyVG9GcmVxKHBhcnNlSW50KHByZWFtcEN1dDEuaW5wdXQudmFsdWUsIDEwKSAvIDEwMCksXG4gICAgICBzbGlkZXJUb0ZyZXEocGFyc2VJbnQocHJlYW1wQ3V0Mi5pbnB1dC52YWx1ZSwgMTApIC8gMTAwKSxcbiAgICAgIHNsaWRlclRvRnJlcShwYXJzZUludChwcmVhbXBDdXQzLmlucHV0LnZhbHVlLCAxMCkgLyAxMDApLFxuICAgICAgc2xpZGVyVG9GcmVxKHBhcnNlSW50KHByZWFtcEN1dDQuaW5wdXQudmFsdWUsIDEwKSAvIDEwMCksXG4gICAgXSk7XG4gIH0pO1xuICBjb25zdCBwcmVhbXBDdXQyID0gbWFrZVJhbmdlKCdCYW5kIEN1dCAyJywgMCwgMTAwLCA2NywgKCkgPT4ge1xuICAgIHBsYXllci5zZXRNYXN0ZXJQcmVhbXBDdXRvZmZzKFtcbiAgICAgIHNsaWRlclRvRnJlcShwYXJzZUludChwcmVhbXBDdXQxLmlucHV0LnZhbHVlLCAxMCkgLyAxMDApLFxuICAgICAgc2xpZGVyVG9GcmVxKHBhcnNlSW50KHByZWFtcEN1dDIuaW5wdXQudmFsdWUsIDEwKSAvIDEwMCksXG4gICAgICBzbGlkZXJUb0ZyZXEocGFyc2VJbnQocHJlYW1wQ3V0My5pbnB1dC52YWx1ZSwgMTApIC8gMTAwKSxcbiAgICAgIHNsaWRlclRvRnJlcShwYXJzZUludChwcmVhbXBDdXQ0LmlucHV0LnZhbHVlLCAxMCkgLyAxMDApLFxuICAgIF0pO1xuICB9KTtcbiAgY29uc3QgcHJlYW1wQ3V0MyA9IG1ha2VSYW5nZSgnQmFuZCBDdXQgMycsIDAsIDEwMCwgNzgsICgpID0+IHtcbiAgICBwbGF5ZXIuc2V0TWFzdGVyUHJlYW1wQ3V0b2ZmcyhbXG4gICAgICBzbGlkZXJUb0ZyZXEocGFyc2VJbnQocHJlYW1wQ3V0MS5pbnB1dC52YWx1ZSwgMTApIC8gMTAwKSxcbiAgICAgIHNsaWRlclRvRnJlcShwYXJzZUludChwcmVhbXBDdXQyLmlucHV0LnZhbHVlLCAxMCkgLyAxMDApLFxuICAgICAgc2xpZGVyVG9GcmVxKHBhcnNlSW50KHByZWFtcEN1dDMuaW5wdXQudmFsdWUsIDEwKSAvIDEwMCksXG4gICAgICBzbGlkZXJUb0ZyZXEocGFyc2VJbnQocHJlYW1wQ3V0NC5pbnB1dC52YWx1ZSwgMTApIC8gMTAwKSxcbiAgICBdKTtcbiAgfSk7XG4gIGNvbnN0IHByZWFtcEN1dDQgPSBtYWtlUmFuZ2UoJ0JhbmQgQ3V0IDQnLCAwLCAxMDAsIDkwLCAoKSA9PiB7XG4gICAgcGxheWVyLnNldE1hc3RlclByZWFtcEN1dG9mZnMoW1xuICAgICAgc2xpZGVyVG9GcmVxKHBhcnNlSW50KHByZWFtcEN1dDEuaW5wdXQudmFsdWUsIDEwKSAvIDEwMCksXG4gICAgICBzbGlkZXJUb0ZyZXEocGFyc2VJbnQocHJlYW1wQ3V0Mi5pbnB1dC52YWx1ZSwgMTApIC8gMTAwKSxcbiAgICAgIHNsaWRlclRvRnJlcShwYXJzZUludChwcmVhbXBDdXQzLmlucHV0LnZhbHVlLCAxMCkgLyAxMDApLFxuICAgICAgc2xpZGVyVG9GcmVxKHBhcnNlSW50KHByZWFtcEN1dDQuaW5wdXQudmFsdWUsIDEwKSAvIDEwMCksXG4gICAgXSk7XG4gIH0pO1xuICBjb25zdCBwcmVhbXBIUEYgPSBtYWtlUmFuZ2UoJ1ByZWFtcCBIUEYnLCAwLCAxMDAsIDAsIHZhbHVlID0+IHtcbiAgICBwbGF5ZXIuc2V0TWFzdGVyUHJlYW1wSFBGKHNsaWRlclRvRnJlcShwYXJzZUludCh2YWx1ZSwgMTApIC8gMTAwKSk7XG4gIH0pO1xuICBjb25zdCBwcmVhbXBMUEYgPSBtYWtlUmFuZ2UoJ1ByZWFtcCBMUEYnLCAwLCAxMDAsIDEwMCwgdmFsdWUgPT4ge1xuICAgIHBsYXllci5zZXRNYXN0ZXJQcmVhbXBMUEYoc2xpZGVyVG9GcmVxKHBhcnNlSW50KHZhbHVlLCAxMCkgLyAxMDApKTtcbiAgfSk7XG4gIGNvbnN0IHByZWFtcFEgPSBtYWtlUmFuZ2UoJ1ByZWFtcCBRJywgMSwgMTgwLCA3LCB2YWx1ZSA9PiB7XG4gICAgcGxheWVyLnNldE1hc3RlclByZWFtcFEocGFyc2VJbnQodmFsdWUsIDEwKSAvIDEwKTtcbiAgfSk7XG5cbiAgY29uc3QgcHJlYW1wQmFuZFJldiA9IFtdO1xuICBjb25zdCBwcmVhbXBCYW5kRGx5ID0gW107XG4gIGNvbnN0IHByZWFtcEJhbmRWdVdyYXBzID0gW107XG4gIGNvbnN0IHByZWFtcEJhbmRWdXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCByZXYgPSBtYWtlUmFuZ2UoYEJhbmQgJHtpICsgMX0gUmV2YCwgMCwgMTAwLCAzNSwgdmFsdWUgPT4ge1xuICAgICAgcGxheWVyLnNldE1hc3RlclByZWFtcEJhbmRSZXZlcmJTZW5kKGksIHBhcnNlSW50KHZhbHVlLCAxMCkgLyAxMDApO1xuICAgIH0pO1xuICAgIGNvbnN0IGRseSA9IG1ha2VSYW5nZShgQmFuZCAke2kgKyAxfSBEbHlgLCAwLCAxMDAsIDI1LCB2YWx1ZSA9PiB7XG4gICAgICBwbGF5ZXIuc2V0TWFzdGVyUHJlYW1wQmFuZERlbGF5U2VuZChpLCBwYXJzZUludCh2YWx1ZSwgMTApIC8gMTAwKTtcbiAgICB9KTtcbiAgICBjb25zdCB2dVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2dVdyYXAuY2xhc3NOYW1lID0gJ20tYmFuZC12dS13cmFwJztcbiAgICBjb25zdCB2dUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHZ1TGFiZWwuY2xhc3NOYW1lID0gJ20tYmFuZC12dS1sYWJlbCc7XG4gICAgdnVMYWJlbC50ZXh0Q29udGVudCA9IGBCYW5kICR7aSArIDF9IFZVYDtcbiAgICBjb25zdCB2dSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB2dS5jbGFzc05hbWUgPSAnbS1iYW5kLXZ1JztcbiAgICBjb25zdCBmaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGZpbGwuY2xhc3NOYW1lID0gJ20tYmFuZC12dS1maWxsJztcbiAgICB2dS5hcHBlbmRDaGlsZChmaWxsKTtcbiAgICB2dVdyYXAuYXBwZW5kQ2hpbGQodnVMYWJlbCk7XG4gICAgdnVXcmFwLmFwcGVuZENoaWxkKHZ1KTtcbiAgICBwcmVhbXBCYW5kUmV2LnB1c2gocmV2KTtcbiAgICBwcmVhbXBCYW5kRGx5LnB1c2goZGx5KTtcbiAgICBwcmVhbXBCYW5kVnVXcmFwcy5wdXNoKHZ1V3JhcCk7XG4gICAgcHJlYW1wQmFuZFZ1cy5wdXNoKGZpbGwpO1xuICB9XG5cbiAgZnguYXBwZW5kQ2hpbGQobWFzdGVyUHJlYW1wVG9nZ2xlKTtcbiAgZnguYXBwZW5kQ2hpbGQocHJlYW1wQ3V0MS53cmFwKTtcbiAgZnguYXBwZW5kQ2hpbGQocHJlYW1wQ3V0Mi53cmFwKTtcbiAgZnguYXBwZW5kQ2hpbGQocHJlYW1wQ3V0My53cmFwKTtcbiAgZnguYXBwZW5kQ2hpbGQocHJlYW1wQ3V0NC53cmFwKTtcbiAgZnguYXBwZW5kQ2hpbGQocHJlYW1wSFBGLndyYXApO1xuICBmeC5hcHBlbmRDaGlsZChwcmVhbXBMUEYud3JhcCk7XG4gIGZ4LmFwcGVuZENoaWxkKHByZWFtcFEud3JhcCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgZnguYXBwZW5kQ2hpbGQocHJlYW1wQmFuZFJldltpXS53cmFwKTtcbiAgICBmeC5hcHBlbmRDaGlsZChwcmVhbXBCYW5kRGx5W2ldLndyYXApO1xuICAgIGZ4LmFwcGVuZENoaWxkKHByZWFtcEJhbmRWdVdyYXBzW2ldKTtcbiAgfVxuICBbW21hc3RlclByZWFtcFRvZ2dsZSwgJ21hc3RlcjpwcmVhbXA6dG9nZ2xlJ10sIFtwcmVhbXBDdXQxLmlucHV0LCAnbWFzdGVyOnByZWFtcDpjdXQxJ10sIFtwcmVhbXBDdXQyLmlucHV0LCAnbWFzdGVyOnByZWFtcDpjdXQyJ10sIFtwcmVhbXBDdXQzLmlucHV0LCAnbWFzdGVyOnByZWFtcDpjdXQzJ10sIFtwcmVhbXBDdXQ0LmlucHV0LCAnbWFzdGVyOnByZWFtcDpjdXQ0J10sIFtwcmVhbXBIUEYuaW5wdXQsICdtYXN0ZXI6cHJlYW1wOmhwZiddLCBbcHJlYW1wTFBGLmlucHV0LCAnbWFzdGVyOnByZWFtcDpscGYnXSwgW3ByZWFtcFEuaW5wdXQsICdtYXN0ZXI6cHJlYW1wOnEnXV1cbiAgICAuZm9yRWFjaCgoW2NvbnRyb2wsIGlkXSkgPT4gYXR0YWNoTWlkaUxlYXJuKGNvbnRyb2wsIGlkLCBvcHRpb25zKSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgYXR0YWNoTWlkaUxlYXJuKHByZWFtcEJhbmRSZXZbaV0uaW5wdXQsIGBtYXN0ZXI6cHJlYW1wOmIke2kgKyAxfTpyZXZgLCBvcHRpb25zKTtcbiAgICBhdHRhY2hNaWRpTGVhcm4ocHJlYW1wQmFuZERseVtpXS5pbnB1dCwgYG1hc3RlcjpwcmVhbXA6YiR7aSArIDF9OmRseWAsIG9wdGlvbnMpO1xuICB9XG5cbiAgY29uc3QgcGFkc1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGFkc1dyYXAuY2xhc3NOYW1lID0gJ20tbGl2ZS1ibG9jayBtLWxpdmUtYmxvY2stLXBhZHMnO1xuICBjb25zdCBwYWRzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICBwYWRzVGl0bGUudGV4dENvbnRlbnQgPSAnUGFkcyc7XG4gIGNvbnN0IHBhZEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGFkR3JpZC5jbGFzc05hbWUgPSAnbS1wYWQtZ3JpZCc7XG4gIGNvbnN0IGZpbGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGZpbGVJbnB1dC50eXBlID0gJ2ZpbGUnO1xuICBmaWxlSW5wdXQuYWNjZXB0ID0gJ2F1ZGlvLyonO1xuICBmaWxlSW5wdXQuaGlkZGVuID0gdHJ1ZTtcbiAgbGV0IHBlbmRpbmdQYWRMb2FkID0gMDtcbiAgZmlsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBbZmlsZV0gPSBmaWxlSW5wdXQuZmlsZXMgfHwgW107XG4gICAgaWYgKCFmaWxlKSByZXR1cm47XG4gICAgYXdhaXQgcGxheWVyLmxvYWRQYWRGcm9tRmlsZShwZW5kaW5nUGFkTG9hZCwgZmlsZSk7XG4gICAgc2V0UGFkQnV0dG9uSWNvbihwYWRCdXR0b25zW3BlbmRpbmdQYWRMb2FkXSwgcGxheWVyLnBhZHNbcGVuZGluZ1BhZExvYWRdLmxhYmVsKTtcbiAgICBmaWxlSW5wdXQudmFsdWUgPSAnJztcbiAgfSk7XG4gIGNvbnN0IHBhZEJ1dHRvbnMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIucGFkcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHBhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHBhZC5jbGFzc05hbWUgPSAnbS1wYWQnO1xuICAgIHBhZC5kYXRhc2V0Lm1pZGlJZCA9IGBwYWQ6JHtpfTp0cmlnYDtcbiAgICBwYWQuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwibS1wYWQtbGFiZWxcIj48L3NwYW4+JztcbiAgICBzZXRQYWRCdXR0b25JY29uKHBhZCwgcGxheWVyLnBhZHNbaV0ubGFiZWwpO1xuICAgIHBhZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IG9rID0gcGxheWVyLnRyaWdnZXJQYWQoaSwgcGxheWVyLnBhZHNbaV0ubG9vcGluZyk7XG4gICAgICBpZiAoIW9rKSB7XG4gICAgICAgIHBlbmRpbmdQYWRMb2FkID0gaTtcbiAgICAgICAgZmlsZUlucHV0LmNsaWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBhZC5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHBhZC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nJyksIDEyMCk7XG4gICAgfSk7XG4gICAgcGFkLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBsb29waW5nID0gIXBsYXllci5wYWRzW2ldLmxvb3Bpbmc7XG4gICAgICBwbGF5ZXIucGFkc1tpXS5sb29waW5nID0gbG9vcGluZztcbiAgICAgIGlmIChsb29waW5nKSBwbGF5ZXIudHJpZ2dlclBhZChpLCB0cnVlKTtcbiAgICAgIGVsc2UgcGxheWVyLnN0b3BQYWQoaSk7XG4gICAgICBwYWQuY2xhc3NMaXN0LnRvZ2dsZSgnbG9vcGluZycsIGxvb3BpbmcpO1xuICAgIH0pO1xuICAgIGNvbnN0IGRyb3AgPSBhc3luYyBmaWxlID0+IHtcbiAgICAgIGF3YWl0IHBsYXllci5sb2FkUGFkRnJvbUZpbGUoaSwgZmlsZSk7XG4gICAgICBzZXRQYWRCdXR0b25JY29uKHBhZCwgcGxheWVyLnBhZHNbaV0ubGFiZWwpO1xuICAgIH07XG4gICAgcGFkLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwYWQuY2xhc3NMaXN0LmFkZCgnZHJhZycpO1xuICAgIH0pO1xuICAgIHBhZC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCAoKSA9PiBwYWQuY2xhc3NMaXN0LnJlbW92ZSgnZHJhZycpKTtcbiAgICBwYWQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGFzeW5jIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcGFkLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWcnKTtcbiAgICAgIGNvbnN0IGZpbGUgPSBlLmRhdGFUcmFuc2ZlciAmJiBlLmRhdGFUcmFuc2Zlci5maWxlcyA/IGUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdIDogbnVsbDtcbiAgICAgIGlmIChmaWxlKSBhd2FpdCBkcm9wKGZpbGUpO1xuICAgIH0pO1xuICAgIHBhZEJ1dHRvbnMucHVzaChwYWQpO1xuICAgIHBhZEdyaWQuYXBwZW5kQ2hpbGQocGFkKTtcbiAgfVxuICBjb25zdCBwYWRzUmV2ID0gbWFrZVJhbmdlKCdQYWRzIFJldicsIDAsIDEwMCwgMzUsIHZhbHVlID0+IHBsYXllci5zZXRQYWRzUmV2ZXJiKHBhcnNlSW50KHZhbHVlLCAxMCkgLyAxMDApKTtcbiAgY29uc3QgcGFkc0RseSA9IG1ha2VSYW5nZSgnUGFkcyBEbHknLCAwLCAxMDAsIDI1LCB2YWx1ZSA9PiBwbGF5ZXIuc2V0UGFkc0RlbGF5KHBhcnNlSW50KHZhbHVlLCAxMCkgLyAxMDApKTtcbiAgcGFkc1dyYXAuYXBwZW5kQ2hpbGQocGFkc1RpdGxlKTtcbiAgcGFkc1dyYXAuYXBwZW5kQ2hpbGQocGFkR3JpZCk7XG4gIHBhZHNXcmFwLmFwcGVuZENoaWxkKGZpbGVJbnB1dCk7XG4gIHBhZHNXcmFwLmFwcGVuZENoaWxkKHBhZHNSZXYud3JhcCk7XG4gIHBhZHNXcmFwLmFwcGVuZENoaWxkKHBhZHNEbHkud3JhcCk7XG5cbiAgbGl2ZS5hcHBlbmRDaGlsZChwYWRzV3JhcCk7XG5cbiAgY29uc3Qgc25hcFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgc25hcFRpdGxlLnRleHRDb250ZW50ID0gJ1NuYXBzaG90cyc7XG4gIGNvbnN0IHNuYXBSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc25hcFJvdy5jbGFzc05hbWUgPSAnc25hcHNob3Qtcm93JztcbiAgY29uc3Qgc25hcFNhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc25hcFNhdmUuY2xhc3NOYW1lID0gJ20tbWluaS1idG4nO1xuICBzbmFwU2F2ZS50ZXh0Q29udGVudCA9ICcrIFNhdmUnO1xuICBzbmFwU2F2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAob3B0aW9ucy5vblNuYXBzaG90U2F2ZSkgb3B0aW9ucy5vblNuYXBzaG90U2F2ZSgpO1xuICB9KTtcbiAgY29uc3Qgc25hcEV4cG9ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzbmFwRXhwb3J0LmNsYXNzTmFtZSA9ICdtLW1pbmktYnRuJztcbiAgc25hcEV4cG9ydC50ZXh0Q29udGVudCA9ICdFeHBvcnQnO1xuICBzbmFwRXhwb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChvcHRpb25zLm9uU25hcHNob3RFeHBvcnQpIG9wdGlvbnMub25TbmFwc2hvdEV4cG9ydCgpO1xuICB9KTtcbiAgY29uc3Qgc25hcEltcG9ydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzbmFwSW1wb3J0LmNsYXNzTmFtZSA9ICdtLW1pbmktYnRuJztcbiAgc25hcEltcG9ydC50ZXh0Q29udGVudCA9ICdJbXBvcnQnO1xuICBzbmFwSW1wb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChvcHRpb25zLm9uU25hcHNob3RJbXBvcnQpIG9wdGlvbnMub25TbmFwc2hvdEltcG9ydCgpO1xuICB9KTtcbiAgY29uc3Qgc25hcExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBzbmFwTGlzdC5jbGFzc05hbWUgPSAnc25hcHNob3QtbGlzdCc7XG4gIHNuYXBSb3cuYXBwZW5kQ2hpbGQoc25hcFNhdmUpO1xuICBzbmFwUm93LmFwcGVuZENoaWxkKHNuYXBFeHBvcnQpO1xuICBzbmFwUm93LmFwcGVuZENoaWxkKHNuYXBJbXBvcnQpO1xuICBzbmFwc2hvdHMuYXBwZW5kQ2hpbGQoc25hcFRpdGxlKTtcbiAgc25hcHNob3RzLmFwcGVuZENoaWxkKHNuYXBSb3cpO1xuICBzbmFwc2hvdHMuYXBwZW5kQ2hpbGQoc25hcExpc3QpO1xuXG4gIHJvb3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICByb290LmFwcGVuZENoaWxkKHRyYW5zcG9ydCk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoc3RyaXBzKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChmeCk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQobGl2ZSk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoc25hcHNob3RzKTtcblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpcChrZXlJZCwgbGFiZWwpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHBsYXllci5nZXRUcmFja1N0YXRlKGtleUlkKTtcbiAgICBjb25zdCBkaXNwbGF5TmFtZSA9IGluc3RydW1lbnROYW1lRm9yS2V5KHBsYXllciwga2V5SWQsIGxhYmVsKTtcbiAgICBjb25zdCBzdHJpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0cmlwLmNsYXNzTmFtZSA9ICdtLXN0cmlwJztcbiAgICBzdHJpcC5kYXRhc2V0LmtleSA9IGtleUlkO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYW1lLmNsYXNzTmFtZSA9ICdtLW5hbWUnO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBzaG9ydE5hbWUoZGlzcGxheU5hbWUpO1xuICAgIG5hbWUudGl0bGUgPSBgJHtkaXNwbGF5TmFtZX0ke2xhYmVsICYmIGxhYmVsICE9PSBkaXNwbGF5TmFtZSA/IGAgXHUwMEI3ICR7bGFiZWx9YCA6ICcnfWA7XG4gICAgY29uc3QgdnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2dS5jbGFzc05hbWUgPSAnbS12dSc7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcm93LmNsYXNzTmFtZSA9ICdtLXJvdyc7XG4gICAgY29uc3Qgc29sbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNvbG8uY2xhc3NOYW1lID0gJ20tYnRuJztcbiAgICBzb2xvLnRleHRDb250ZW50ID0gJ1MnO1xuICAgIGNvbnN0IG11dGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtdXRlLmNsYXNzTmFtZSA9ICdtLWJ0bic7XG4gICAgbXV0ZS50ZXh0Q29udGVudCA9ICdNJztcbiAgICBjb25zdCB2b2x1bWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHZvbHVtZS50eXBlID0gJ3JhbmdlJztcbiAgICB2b2x1bWUuY2xhc3NOYW1lID0gJ20tc2xpZGVyJztcbiAgICB2b2x1bWUubWluID0gJzAnO1xuICAgIHZvbHVtZS5tYXggPSAnMTAwJztcbiAgICB2b2x1bWUudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChzdGF0ZS52b2x1bWUgKiAxMDApKTtcbiAgICBjb25zdCBlcGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBlcGkuY2xhc3NOYW1lID0gJ20tYnRuJztcbiAgICBlcGkudGV4dENvbnRlbnQgPSAnRVBJJztcbiAgICBlcGkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgc3RhdGUuZXBpY2VudGVyT24pO1xuICAgIGVwaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IG9uID0gIXBsYXllci5nZXRUcmFja1N0YXRlKGtleUlkKS5lcGljZW50ZXJPbjtcbiAgICAgIHBsYXllci5zZXRFcGljZW50ZXJFbmFibGVkKGtleUlkLCBvbik7XG4gICAgICBlcGkuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgb24pO1xuICAgIH0pO1xuICAgIGNvbnN0IHdhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB3YXZlLmNsYXNzTmFtZSA9ICdtLXdhdmUnO1xuICAgIEZBTExCQUNLX1dBVkVfT1BUSU9OUy5mb3JFYWNoKChbbGFiZWxUZXh0LCB2YWx1ZV0pID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gdmFsdWU7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gICAgICB3YXZlLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gICAgd2F2ZS52YWx1ZSA9IHN0YXRlLmZhbGxiYWNrV2F2ZSB8fCAnYXV0byc7XG4gICAgd2F2ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiBwbGF5ZXIuc2V0RmFsbGJhY2tXYXZlKGtleUlkLCB3YXZlLnZhbHVlKSk7XG5cbiAgICBmdW5jdGlvbiBzeW5jQnV0dG9ucygpIHtcbiAgICAgIGNvbnN0IGN1ciA9IHBsYXllci5nZXRUcmFja1N0YXRlKGtleUlkKTtcbiAgICAgIHNvbG8uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgY3VyLnNvbG8pO1xuICAgICAgbXV0ZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBjdXIubXV0ZWQpO1xuICAgICAgZXBpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGN1ci5lcGljZW50ZXJPbik7XG4gICAgICB3YXZlLnZhbHVlID0gY3VyLmZhbGxiYWNrV2F2ZSB8fCAnYXV0byc7XG4gICAgfVxuXG4gICAgc29sby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGN1ciA9IHBsYXllci5nZXRUcmFja1N0YXRlKGtleUlkKTtcbiAgICAgIHBsYXllci5zZXRTb2xvKGtleUlkLCAhY3VyLnNvbG8pO1xuICAgICAgc3luY0J1dHRvbnMoKTtcbiAgICB9KTtcbiAgICBtdXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgY3VyID0gcGxheWVyLmdldFRyYWNrU3RhdGUoa2V5SWQpO1xuICAgICAgcGxheWVyLnNldE11dGUoa2V5SWQsICFjdXIubXV0ZWQpO1xuICAgICAgc3luY0J1dHRvbnMoKTtcbiAgICB9KTtcbiAgICB2b2x1bWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBwbGF5ZXIuc2V0Vm9sdW1lKGtleUlkLCBjbGFtcDAxKHBhcnNlSW50KHZvbHVtZS52YWx1ZSwgMTApIC8gMTAwKSkpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChzb2xvKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQobXV0ZSk7XG4gICAgcm93LmFwcGVuZENoaWxkKGVwaSk7XG4gICAgcm93LmFwcGVuZENoaWxkKHdhdmUpO1xuICAgIHJvdy5hcHBlbmRDaGlsZCh2b2x1bWUpO1xuXG4gICAgc3RyaXAuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgc3RyaXAuYXBwZW5kQ2hpbGQodnUpO1xuICAgIHN0cmlwLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgc3RyaXBzLmFwcGVuZENoaWxkKHN0cmlwKTtcblxuICAgIFtcbiAgICAgIFt2b2x1bWUsIGB0cmFjazoke2tleUlkfTp2b2xgXSxcbiAgICAgIFttdXRlLCBgdHJhY2s6JHtrZXlJZH06bXV0ZWBdLFxuICAgICAgW3NvbG8sIGB0cmFjazoke2tleUlkfTpzb2xvYF0sXG4gICAgICBbZXBpLCBgdHJhY2s6JHtrZXlJZH06ZXBpYF0sXG4gICAgICBbd2F2ZSwgYHRyYWNrOiR7a2V5SWR9OndhdmVgXSxcbiAgICBdLmZvckVhY2goKFtjb250cm9sLCBpZF0pID0+IGF0dGFjaE1pZGlMZWFybihjb250cm9sLCBpZCwgb3B0aW9ucykpO1xuXG4gICAgc3luY0J1dHRvbnMoKTtcbiAgICByZXR1cm4ge1xuICAgICAgZWw6IHN0cmlwLFxuICAgICAgdnUsXG4gICAgICBuYW1lLFxuICAgICAgc3luY0J1dHRvbnMsXG4gICAgICB2b2x1bWUsXG4gICAgICBtdXRlLFxuICAgICAgc29sbyxcbiAgICAgIGVwaSxcbiAgICAgIHdhdmUsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZShkYXRhKSB7XG4gICAgY29uc3QgZW50cmllcyA9IEFycmF5LmlzQXJyYXkoZGF0YSlcbiAgICAgID8gZGF0YS5tYXAodHJhY2sgPT4gKHsga2V5OiBgJHt0cmFja1swXX0vJHt0cmFja1sxXX1gLCBuYW1lOiB0cmFja1sxXSB9KSlcbiAgICAgIDogW107XG4gICAgY29uc3QgbmV4dEtleXMgPSBuZXcgU2V0KGVudHJpZXMubWFwKGl0ZW0gPT4gaXRlbS5rZXkpKTtcbiAgICBzdHJpcE1hcC5mb3JFYWNoKCh2YWx1ZSwga2V5SWQpID0+IHtcbiAgICAgIGlmICghbmV4dEtleXMuaGFzKGtleUlkKSkge1xuICAgICAgICB2YWx1ZS5lbC5yZW1vdmUoKTtcbiAgICAgICAgc3RyaXBNYXAuZGVsZXRlKGtleUlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBlbnRyaWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoIXN0cmlwTWFwLmhhcyhpdGVtLmtleSkpIHtcbiAgICAgICAgc3RyaXBNYXAuc2V0KGl0ZW0ua2V5LCBjcmVhdGVTdHJpcChpdGVtLmtleSwgaXRlbS5uYW1lKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBzdHJpcCA9IHN0cmlwTWFwLmdldChpdGVtLmtleSk7XG4gICAgICAgIGNvbnN0IGRpc3BsYXlOYW1lID0gaW5zdHJ1bWVudE5hbWVGb3JLZXkocGxheWVyLCBpdGVtLmtleSwgaXRlbS5uYW1lKTtcbiAgICAgICAgc3RyaXAubmFtZS50ZXh0Q29udGVudCA9IHNob3J0TmFtZShkaXNwbGF5TmFtZSk7XG4gICAgICAgIHN0cmlwLm5hbWUudGl0bGUgPSBgJHtkaXNwbGF5TmFtZX0ke2l0ZW0ubmFtZSAmJiBpdGVtLm5hbWUgIT09IGRpc3BsYXlOYW1lID8gYCBcdTAwQjcgJHtpdGVtLm5hbWV9YCA6ICcnfWA7XG4gICAgICAgIHN0cmlwLnN5bmNCdXR0b25zKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmbGFzaFZVKGtleUlkKSB7XG4gICAgY29uc3Qgc3RyaXAgPSBzdHJpcE1hcC5nZXQoa2V5SWQpO1xuICAgIGlmICghc3RyaXApIHJldHVybjtcbiAgICBzdHJpcC52dS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHN0cmlwLnZ1LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLCA4MCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGUoZm9yY2VPcGVuKSB7XG4gICAgY29uc3Qgb3BlbiA9IHR5cGVvZiBmb3JjZU9wZW4gPT09ICdib29sZWFuJyA/IGZvcmNlT3BlbiA6IHJvb3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2xsYXBzZWQnKTtcbiAgICByb290LmNsYXNzTGlzdC50b2dnbGUoJ2NvbGxhcHNlZCcsICFvcGVuKTtcbiAgICByZXR1cm4gb3BlbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN5bmNUcmFuc3BvcnQobmV4dCA9IHt9KSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0LnRlbXBvID09PSAnbnVtYmVyJykge1xuICAgICAgYnBtLnZhbHVlID0gU3RyaW5nKG5leHQudGVtcG8pO1xuICAgICAgYnBtVmFsLnRleHRDb250ZW50ID0gU3RyaW5nKG5leHQudGVtcG8pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5leHQuYmFycyA9PT0gJ251bWJlcicpIGJhcnMudmFsdWUgPSBTdHJpbmcobmV4dC5iYXJzKTtcbiAgICBpZiAodHlwZW9mIG5leHQudHJhbnNwb3NlID09PSAnbnVtYmVyJykge1xuICAgICAga2V5LnZhbHVlID0gU3RyaW5nKG5leHQudHJhbnNwb3NlKTtcbiAgICAgIGtleVZhbC50ZXh0Q29udGVudCA9IG5leHQudHJhbnNwb3NlID4gMCA/IGArJHtuZXh0LnRyYW5zcG9zZX1gIDogU3RyaW5nKG5leHQudHJhbnNwb3NlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYXB0dXJlU3RhdGUoKSB7XG4gICAgY29uc3QgdHJhY2tzID0ge307XG4gICAgc3RyaXBNYXAuZm9yRWFjaCgoX3N0cmlwLCBrZXlJZCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGUgPSBwbGF5ZXIuZ2V0VHJhY2tTdGF0ZShrZXlJZCk7XG4gICAgICB0cmFja3Nba2V5SWRdID0ge1xuICAgICAgICB2b2x1bWU6IHN0YXRlLnZvbHVtZSxcbiAgICAgICAgbXV0ZWQ6IHN0YXRlLm11dGVkLFxuICAgICAgICBzb2xvOiBzdGF0ZS5zb2xvLFxuICAgICAgICBlcGljZW50ZXJPbjogc3RhdGUuZXBpY2VudGVyT24sXG4gICAgICAgIGZhbGxiYWNrV2F2ZTogc3RhdGUuZmFsbGJhY2tXYXZlIHx8ICdhdXRvJyxcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zcG9ydDoge1xuICAgICAgICB0ZW1wbzogcGFyc2VJbnQoYnBtLnZhbHVlLCAxMCksXG4gICAgICAgIGJhcnM6IHBhcnNlSW50KGJhcnMudmFsdWUsIDEwKSxcbiAgICAgICAgdHJhbnNwb3NlOiBwYXJzZUludChrZXkudmFsdWUsIDEwKSxcbiAgICAgIH0sXG4gICAgICB0cmFja3MsXG4gICAgICBmeDoge1xuICAgICAgICBkZWxheUZlZWRiYWNrOiBwYXJzZUludChmZWVkYmFjay5pbnB1dC52YWx1ZSwgMTApIC8gMTAwLFxuICAgICAgICBkZWxheURpdmlzaW9uOiBwYXJzZUZsb2F0KGRlbGF5RGl2aXNpb24udmFsdWUpLFxuICAgICAgICBtYXN0ZXJMUEY6IHNsaWRlclRvRnJlcShwYXJzZUludChnbG9iYWxMcGYuaW5wdXQudmFsdWUsIDEwKSAvIDEwMCksXG4gICAgICAgIG1hc3RlclByZWFtcEVuYWJsZWQ6IG1hc3RlclByZWFtcFRvZ2dsZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpLFxuICAgICAgICBtYXN0ZXJQcmVhbXBDdXRvZmZzOiBbXG4gICAgICAgICAgc2xpZGVyVG9GcmVxKHBhcnNlSW50KHByZWFtcEN1dDEuaW5wdXQudmFsdWUsIDEwKSAvIDEwMCksXG4gICAgICAgICAgc2xpZGVyVG9GcmVxKHBhcnNlSW50KHByZWFtcEN1dDIuaW5wdXQudmFsdWUsIDEwKSAvIDEwMCksXG4gICAgICAgICAgc2xpZGVyVG9GcmVxKHBhcnNlSW50KHByZWFtcEN1dDMuaW5wdXQudmFsdWUsIDEwKSAvIDEwMCksXG4gICAgICAgICAgc2xpZGVyVG9GcmVxKHBhcnNlSW50KHByZWFtcEN1dDQuaW5wdXQudmFsdWUsIDEwKSAvIDEwMCksXG4gICAgICAgIF0sXG4gICAgICAgIG1hc3RlclByZWFtcEhQRjogc2xpZGVyVG9GcmVxKHBhcnNlSW50KHByZWFtcEhQRi5pbnB1dC52YWx1ZSwgMTApIC8gMTAwKSxcbiAgICAgICAgbWFzdGVyUHJlYW1wTFBGOiBzbGlkZXJUb0ZyZXEocGFyc2VJbnQocHJlYW1wTFBGLmlucHV0LnZhbHVlLCAxMCkgLyAxMDApLFxuICAgICAgICBtYXN0ZXJQcmVhbXBROiBwYXJzZUludChwcmVhbXBRLmlucHV0LnZhbHVlLCAxMCkgLyAxMCxcbiAgICAgICAgbWFzdGVyUHJlYW1wQmFuZFNlbmRzOiBwcmVhbXBCYW5kUmV2Lm1hcCgocmV2LCBpKSA9PiAoe1xuICAgICAgICAgIHJldmVyYjogcGFyc2VJbnQocmV2LmlucHV0LnZhbHVlLCAxMCkgLyAxMDAsXG4gICAgICAgICAgZGVsYXk6IHBhcnNlSW50KHByZWFtcEJhbmREbHlbaV0uaW5wdXQudmFsdWUsIDEwKSAvIDEwMCxcbiAgICAgICAgfSkpLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYXBwbHlTdGF0ZShzbmFwc2hvdFN0YXRlKSB7XG4gICAgaWYgKCFzbmFwc2hvdFN0YXRlKSByZXR1cm47XG4gICAgY29uc3QgdHJhbnNwb3J0U3RhdGUgPSBzbmFwc2hvdFN0YXRlLnRyYW5zcG9ydCB8fCB7fTtcbiAgICBjb25zdCB0cmFja1N0YXRlID0gc25hcHNob3RTdGF0ZS50cmFja3MgfHwge307XG4gICAgY29uc3QgZnhTdGF0ZSA9IHNuYXBzaG90U3RhdGUuZnggfHwge307XG5cbiAgICBpZiAodHlwZW9mIHRyYW5zcG9ydFN0YXRlLnRlbXBvID09PSAnbnVtYmVyJykge1xuICAgICAgYnBtLnZhbHVlID0gU3RyaW5nKHRyYW5zcG9ydFN0YXRlLnRlbXBvKTtcbiAgICAgIGJwbS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRyYW5zcG9ydFN0YXRlLmJhcnMgPT09ICdudW1iZXInKSB7XG4gICAgICBiYXJzLnZhbHVlID0gU3RyaW5nKHRyYW5zcG9ydFN0YXRlLmJhcnMpO1xuICAgICAgYmFycy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJywgeyBidWJibGVzOiB0cnVlIH0pKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0cmFuc3BvcnRTdGF0ZS50cmFuc3Bvc2UgPT09ICdudW1iZXInKSB7XG4gICAgICBrZXkudmFsdWUgPSBTdHJpbmcodHJhbnNwb3J0U3RhdGUudHJhbnNwb3NlKTtcbiAgICAgIGtleS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnLCB7IGJ1YmJsZXM6IHRydWUgfSkpO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHRyYWNrU3RhdGUpLmZvckVhY2goa2V5SWQgPT4ge1xuICAgICAgY29uc3QgcyA9IHRyYWNrU3RhdGVba2V5SWRdO1xuICAgICAgaWYgKHR5cGVvZiBzLnZvbHVtZSA9PT0gJ251bWJlcicpIHBsYXllci5zZXRWb2x1bWUoa2V5SWQsIHMudm9sdW1lKTtcbiAgICAgIGlmICh0eXBlb2Ygcy5tdXRlZCA9PT0gJ2Jvb2xlYW4nKSBwbGF5ZXIuc2V0TXV0ZShrZXlJZCwgcy5tdXRlZCk7XG4gICAgICBpZiAodHlwZW9mIHMuc29sbyA9PT0gJ2Jvb2xlYW4nKSBwbGF5ZXIuc2V0U29sbyhrZXlJZCwgcy5zb2xvKTtcbiAgICAgIGlmICh0eXBlb2Ygcy5lcGljZW50ZXJPbiA9PT0gJ2Jvb2xlYW4nKSBwbGF5ZXIuc2V0RXBpY2VudGVyRW5hYmxlZChrZXlJZCwgcy5lcGljZW50ZXJPbik7XG4gICAgICBpZiAodHlwZW9mIHMuZmFsbGJhY2tXYXZlID09PSAnc3RyaW5nJykgcGxheWVyLnNldEZhbGxiYWNrV2F2ZShrZXlJZCwgcy5mYWxsYmFja1dhdmUpO1xuICAgICAgY29uc3Qgc3RyaXAgPSBzdHJpcE1hcC5nZXQoa2V5SWQpO1xuICAgICAgaWYgKHN0cmlwKSBzdHJpcC5zeW5jQnV0dG9ucygpO1xuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBmeFN0YXRlLmRlbGF5RmVlZGJhY2sgPT09ICdudW1iZXInKSBwbGF5ZXIuc2V0RGVsYXlGZWVkYmFjayhmeFN0YXRlLmRlbGF5RmVlZGJhY2spO1xuICAgIGlmICh0eXBlb2YgZnhTdGF0ZS5kZWxheURpdmlzaW9uID09PSAnbnVtYmVyJykgcGxheWVyLnNldERlbGF5VGltZShmeFN0YXRlLmRlbGF5RGl2aXNpb24pO1xuICAgIGlmICh0eXBlb2YgZnhTdGF0ZS5tYXN0ZXJMUEYgPT09ICdudW1iZXInKSBwbGF5ZXIuc2V0TWFzdGVyTFBGKGZ4U3RhdGUubWFzdGVyTFBGKTtcbiAgICBpZiAodHlwZW9mIGZ4U3RhdGUubWFzdGVyUHJlYW1wRW5hYmxlZCA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICBtYXN0ZXJQcmVhbXBUb2dnbGUuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgZnhTdGF0ZS5tYXN0ZXJQcmVhbXBFbmFibGVkKTtcbiAgICAgIHBsYXllci5zZXRNYXN0ZXJQcmVhbXBFbmFibGVkKGZ4U3RhdGUubWFzdGVyUHJlYW1wRW5hYmxlZCk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGZ4U3RhdGUubWFzdGVyUHJlYW1wQ3V0b2ZmcykpIHtcbiAgICAgIGNvbnN0IFtjMSA9IDIwMCwgYzIgPSAyMDAwLCBjMyA9IDYwMDAsIGM0ID0gMTIwMDBdID0gZnhTdGF0ZS5tYXN0ZXJQcmVhbXBDdXRvZmZzO1xuICAgICAgcHJlYW1wQ3V0MS5pbnB1dC52YWx1ZSA9IFN0cmluZyhNYXRoLnJvdW5kKGZyZXFUb1NsaWRlcihjMSkgKiAxMDApKTtcbiAgICAgIHByZWFtcEN1dDIuaW5wdXQudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChmcmVxVG9TbGlkZXIoYzIpICogMTAwKSk7XG4gICAgICBwcmVhbXBDdXQzLmlucHV0LnZhbHVlID0gU3RyaW5nKE1hdGgucm91bmQoZnJlcVRvU2xpZGVyKGMzKSAqIDEwMCkpO1xuICAgICAgcHJlYW1wQ3V0NC5pbnB1dC52YWx1ZSA9IFN0cmluZyhNYXRoLnJvdW5kKGZyZXFUb1NsaWRlcihjNCkgKiAxMDApKTtcbiAgICAgIHBsYXllci5zZXRNYXN0ZXJQcmVhbXBDdXRvZmZzKFtjMSwgYzIsIGMzLCBjNF0pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGZ4U3RhdGUubWFzdGVyUHJlYW1wSFBGID09PSAnbnVtYmVyJykge1xuICAgICAgcHJlYW1wSFBGLmlucHV0LnZhbHVlID0gU3RyaW5nKE1hdGgucm91bmQoZnJlcVRvU2xpZGVyKGZ4U3RhdGUubWFzdGVyUHJlYW1wSFBGKSAqIDEwMCkpO1xuICAgICAgcGxheWVyLnNldE1hc3RlclByZWFtcEhQRihmeFN0YXRlLm1hc3RlclByZWFtcEhQRik7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZnhTdGF0ZS5tYXN0ZXJQcmVhbXBMUEYgPT09ICdudW1iZXInKSB7XG4gICAgICBwcmVhbXBMUEYuaW5wdXQudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChmcmVxVG9TbGlkZXIoZnhTdGF0ZS5tYXN0ZXJQcmVhbXBMUEYpICogMTAwKSk7XG4gICAgICBwbGF5ZXIuc2V0TWFzdGVyUHJlYW1wTFBGKGZ4U3RhdGUubWFzdGVyUHJlYW1wTFBGKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBmeFN0YXRlLm1hc3RlclByZWFtcFEgPT09ICdudW1iZXInKSB7XG4gICAgICBwcmVhbXBRLmlucHV0LnZhbHVlID0gU3RyaW5nKE1hdGgucm91bmQoZnhTdGF0ZS5tYXN0ZXJQcmVhbXBRICogMTApKTtcbiAgICAgIHBsYXllci5zZXRNYXN0ZXJQcmVhbXBRKGZ4U3RhdGUubWFzdGVyUHJlYW1wUSk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGZ4U3RhdGUubWFzdGVyUHJlYW1wQmFuZFNlbmRzKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgc2VuZCA9IGZ4U3RhdGUubWFzdGVyUHJlYW1wQmFuZFNlbmRzW2ldIHx8IHt9O1xuICAgICAgICBjb25zdCByZXZlcmIgPSB0eXBlb2Ygc2VuZC5yZXZlcmIgPT09ICdudW1iZXInID8gc2VuZC5yZXZlcmIgOiAwLjM1O1xuICAgICAgICBjb25zdCBkZWxheSA9IHR5cGVvZiBzZW5kLmRlbGF5ID09PSAnbnVtYmVyJyA/IHNlbmQuZGVsYXkgOiAwLjI1O1xuICAgICAgICBwcmVhbXBCYW5kUmV2W2ldLmlucHV0LnZhbHVlID0gU3RyaW5nKE1hdGgucm91bmQocmV2ZXJiICogMTAwKSk7XG4gICAgICAgIHByZWFtcEJhbmREbHlbaV0uaW5wdXQudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChkZWxheSAqIDEwMCkpO1xuICAgICAgICBwbGF5ZXIuc2V0TWFzdGVyUHJlYW1wQmFuZFJldmVyYlNlbmQoaSwgcmV2ZXJiKTtcbiAgICAgICAgcGxheWVyLnNldE1hc3RlclByZWFtcEJhbmREZWxheVNlbmQoaSwgZGVsYXkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBvbGRSZXYgPSB0eXBlb2YgZnhTdGF0ZS5tYXN0ZXJQcmVhbXBSZXYgPT09ICdudW1iZXInID8gZnhTdGF0ZS5tYXN0ZXJQcmVhbXBSZXYgOiAwLjM1O1xuICAgICAgY29uc3Qgb2xkRGx5ID0gdHlwZW9mIGZ4U3RhdGUubWFzdGVyUHJlYW1wRGx5ID09PSAnbnVtYmVyJyA/IGZ4U3RhdGUubWFzdGVyUHJlYW1wRGx5IDogMC4yNTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSArPSAxKSB7XG4gICAgICAgIHByZWFtcEJhbmRSZXZbaV0uaW5wdXQudmFsdWUgPSBTdHJpbmcoTWF0aC5yb3VuZChvbGRSZXYgKiAxMDApKTtcbiAgICAgICAgcHJlYW1wQmFuZERseVtpXS5pbnB1dC52YWx1ZSA9IFN0cmluZyhNYXRoLnJvdW5kKG9sZERseSAqIDEwMCkpO1xuICAgICAgICBwbGF5ZXIuc2V0TWFzdGVyUHJlYW1wQmFuZFJldmVyYlNlbmQoaSwgb2xkUmV2KTtcbiAgICAgICAgcGxheWVyLnNldE1hc3RlclByZWFtcEJhbmREZWxheVNlbmQoaSwgb2xkRGx5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRTbmFwc2hvdHMoaXRlbXMsIHNlbGVjdGVkSWQpIHtcbiAgICBzbmFwTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICAoaXRlbXMgfHwgW10pLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaS5jbGFzc05hbWUgPSAnc25hcHNob3QtaXRlbSc7XG4gICAgICBpZiAoaXRlbS5pZCA9PT0gc2VsZWN0ZWRJZCkgbGkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIGJ0bi5jbGFzc05hbWUgPSAnbS1taW5pLWJ0bic7XG4gICAgICBidG4udGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLm9uU25hcHNob3RSZWNhbGwpIG9wdGlvbnMub25TbmFwc2hvdFJlY2FsbChpdGVtLmlkKTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICBkZWwuY2xhc3NOYW1lID0gJ20tbWluaS1idG4nO1xuICAgICAgZGVsLnRleHRDb250ZW50ID0gJ1x1MDBENyc7XG4gICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLm9uU25hcHNob3REZWxldGUpIG9wdGlvbnMub25TbmFwc2hvdERlbGV0ZShpdGVtLmlkKTtcbiAgICAgIH0pO1xuICAgICAgbGkuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICAgIGxpLmFwcGVuZENoaWxkKGRlbCk7XG4gICAgICBzbmFwTGlzdC5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhbmltYXRlUHJlYW1wVnVzKCkge1xuICAgIGNvbnN0IGxldmVscyA9IHR5cGVvZiBwbGF5ZXIuZ2V0TWFzdGVyUHJlYW1wQmFuZExldmVscyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBwbGF5ZXIuZ2V0TWFzdGVyUHJlYW1wQmFuZExldmVscygpXG4gICAgICA6IFswLCAwLCAwLCAwLCAwXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWFtcEJhbmRWdXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGxldmVsID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgbGV2ZWxzW2ldIHx8IDApKTtcbiAgICAgIHByZWFtcEJhbmRWdXNbaV0uc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlWCgke2xldmVsfSlgO1xuICAgIH1cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZVByZWFtcFZ1cyk7XG4gIH1cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGVQcmVhbXBWdXMpO1xuXG4gIHJldHVybiB7XG4gICAgZWw6IHJvb3QsXG4gICAgdXBkYXRlLFxuICAgIGZsYXNoVlUsXG4gICAgdG9nZ2xlLFxuICAgIHN5bmNUcmFuc3BvcnQsXG4gICAgY2FwdHVyZVN0YXRlLFxuICAgIGFwcGx5U3RhdGUsXG4gICAgc2V0U25hcHNob3RzLFxuICAgIGRvbToge1xuICAgICAgcGFkQnV0dG9ucyxcbiAgICB9LFxuICB9O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIkFBQUEsU0FBUyxRQUFRLE9BQU87QUFDdEIsU0FBTyxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxLQUFLLENBQUM7QUFDdkM7QUFFQSxTQUFTLFVBQVUsTUFBTTtBQUN2QixRQUFNLFFBQVEsT0FBTyxRQUFRLEVBQUUsRUFBRSxNQUFN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
