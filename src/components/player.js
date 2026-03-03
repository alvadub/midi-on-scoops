import { Utils } from 'midi-writer-js';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function sliderToFreq(v) {
  return 20 * Math.pow(1000, clamp(v, 0, 1));
}

function makeExciterCurve(drive = 4, samples = 512) {
  const curve = new Float32Array(samples);
  const norm = Math.tanh(drive) || 1;
  for (let i = 0; i < samples; i += 1) {
    const x = ((i * 2) / (samples - 1)) - 1;
    curve[i] = Math.tanh(drive * x) / norm;
  }
  return curve;
}

function makeNoiseBuffer(ctx, duration) {
  const len = Math.max(1, Math.floor(ctx.sampleRate * duration));
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const out = buf.getChannelData(0);
  for (let i = 0; i < len; i += 1) {
    const env = Math.exp(-i / (ctx.sampleRate * 0.015));
    out[i] = ((Math.random() * 2) - 1) * env;
  }
  return buf;
}

function makeDiracBuffer(ctx) {
  const buf = ctx.createBuffer(1, 1, ctx.sampleRate);
  buf.getChannelData(0)[0] = 1;
  return buf;
}

function sectionFromTrackKey(key) {
  const m = String(key).match(/^([^#]+)#/);
  return m ? m[1] : '';
}

export default class Player {
  constructor() {
    this.data = [];
    this.beats = [];
    this.bars = 8;
    this.bpm = 127;
    this.fraq = 1 / this.bars;
    this.trackNodes = new Map();
    this.trackState = new Map();
    this.delayDivision = 3 / 8;
    this.onBeat = null;
    this.beatIndex = 0;
    this.loopStarted = false;
    this.sirenActive = false;
    this.sirenVol = 0.5;
    this.sirenRange = { lo: 220, hi: 900 };
    this.pads = Array.from({ length: 4 }, () => ({ buffer: null, label: 'empty', looping: false }));
    this.padSources = [null, null, null, null];
    this.padNames = ['vinyl noise', 'bass thud', 'gong hit', 'stab'];
    this.pendingMidiPulse = null;
    this.initAudio();
  }

  initAudio() {
    const AudioContextFunc = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContextFunc();
    this.destination = this.audioContext.destination;
    this.player = new WebAudioFontPlayer();
    this.equalizer = this.player.createChannel(this.audioContext);
    this.masterGain = this.audioContext.createGain();
    this.masterLPF = this.audioContext.createBiquadFilter();
    this.echo = this.player.createReverberator(this.audioContext);
    this.delayInput = this.audioContext.createGain();
    this.visualizer = this.audioContext.createAnalyser();
    this.masterLPF.type = 'lowpass';
    this.masterLPF.frequency.value = 20000;
    this.masterLPF.Q.value = 0.7;
    this.masterGain.gain.value = 1;
    this.delayInput.gain.value = 1;
    this.visualizer.fftSize = 256;
    this.visualizer.smoothingTimeConstant = 0.82;

    this.equalizer.output.connect(this.masterGain);
    this.echo.output.connect(this.masterGain);

    this.masterGain.connect(this.masterLPF);
    this.masterLPF.connect(this.destination);
    this.masterGain.connect(this.visualizer);

    this.initTapeEcho();
    this.initSiren();
    this.initPads();
    this.initThunder();
    this.updateDelayTime();
  }

  initTapeEcho() {
    const ctx = this.audioContext;
    this.tapeInput = ctx.createGain();
    this.delayHead1 = ctx.createDelay(4);
    this.delayHead2 = ctx.createDelay(4);
    this.delayHead3 = ctx.createDelay(4);
    this.h1Gain = ctx.createGain();
    this.h2Gain = ctx.createGain();
    this.h3Gain = ctx.createGain();
    this.delayWet = ctx.createGain();
    this.feedHPF = ctx.createBiquadFilter();
    this.feedLPF = ctx.createBiquadFilter();
    this.feedDrive = ctx.createWaveShaper();
    this.feedGain = ctx.createGain();
    this.wowOsc = ctx.createOscillator();
    this.flutterOsc = ctx.createOscillator();
    this.wowDepth = ctx.createGain();
    this.flutterDepth = ctx.createGain();
    this.tapTimes = [];
    this.tapeWarp = 0.04;
    this.tapeMode = 4;
    this.delayFeedback = this.feedGain;

    this.delayWet.gain.value = 1;
    this.feedGain.gain.value = 0.35;
    this.feedHPF.type = 'highpass';
    this.feedHPF.frequency.value = 120;
    this.feedLPF.type = 'lowpass';
    this.feedLPF.frequency.value = 4500;
    this.feedDrive.curve = makeExciterCurve(1.6);
    this.feedDrive.oversample = '4x';

    this.wowOsc.type = 'sine';
    this.wowOsc.frequency.value = 1.2;
    this.flutterOsc.type = 'sine';
    this.flutterOsc.frequency.value = 11;
    this.wowDepth.gain.value = 0.0008;
    this.flutterDepth.gain.value = 0.0002;

    this.delayInput.connect(this.tapeInput);
    this.tapeInput.connect(this.delayHead1);
    this.tapeInput.connect(this.delayHead2);
    this.tapeInput.connect(this.delayHead3);
    this.delayHead1.connect(this.h1Gain);
    this.delayHead2.connect(this.h2Gain);
    this.delayHead3.connect(this.h3Gain);
    this.h1Gain.connect(this.delayWet);
    this.h2Gain.connect(this.delayWet);
    this.h3Gain.connect(this.delayWet);
    this.delayWet.connect(this.masterGain);

    this.delayHead1.connect(this.feedHPF);
    this.feedHPF.connect(this.feedLPF);
    this.feedLPF.connect(this.feedDrive);
    this.feedDrive.connect(this.feedGain);
    this.feedGain.connect(this.delayHead1);

    this.wowOsc.connect(this.wowDepth);
    this.flutterOsc.connect(this.flutterDepth);
    [this.delayHead1, this.delayHead2, this.delayHead3].forEach(head => {
      this.wowDepth.connect(head.delayTime);
      this.flutterDepth.connect(head.delayTime);
    });

    this.wowOsc.start();
    this.flutterOsc.start();
    this.setTapeMode(4);
  }

  initSiren() {
    const ctx = this.audioContext;
    this.sirenOsc = ctx.createOscillator();
    this.sirenLFO = ctx.createOscillator();
    this.sirenLFODepth = ctx.createGain();
    this.sirenGain = ctx.createGain();
    this.sirenLPF = ctx.createBiquadFilter();
    this.sirenReverbSend = ctx.createGain();
    this.sirenDelaySend = ctx.createGain();
    this.sirenOsc.type = 'sine';
    this.sirenLFO.type = 'sine';
    this.sirenLFO.frequency.value = 0.5;
    this.sirenGain.gain.value = 0;
    this.sirenLPF.type = 'lowpass';
    this.sirenLPF.frequency.value = 20000;
    this.sirenReverbSend.gain.value = 0.35;
    this.sirenDelaySend.gain.value = 0.25;

    this.sirenLFO.connect(this.sirenLFODepth);
    this.sirenLFODepth.connect(this.sirenOsc.frequency);
    this.sirenOsc.connect(this.sirenGain);
    this.sirenGain.connect(this.sirenLPF);
    this.sirenLPF.connect(this.masterGain);
    this.sirenGain.connect(this.sirenReverbSend);
    this.sirenGain.connect(this.sirenDelaySend);
    this.sirenReverbSend.connect(this.echo.input);
    this.sirenDelaySend.connect(this.delayInput);
    this.setSirenFreqRange(this.sirenRange.lo, this.sirenRange.hi);
    this.sirenOsc.start();
    this.sirenLFO.start();
  }

  initPads() {
    const ctx = this.audioContext;
    this.padMasterReverb = 0.35;
    this.padMasterDelay = 0.25;
    this.padGains = [];
    this.padReverbSends = [];
    this.padDelaySends = [];
    this.pads.forEach((pad, i) => {
      const gain = ctx.createGain();
      const reverb = ctx.createGain();
      const delay = ctx.createGain();
      gain.gain.value = 0.8;
      reverb.gain.value = this.padMasterReverb;
      delay.gain.value = this.padMasterDelay;
      gain.connect(this.masterGain);
      gain.connect(reverb);
      gain.connect(delay);
      reverb.connect(this.echo.input);
      delay.connect(this.delayInput);
      this.padGains[i] = gain;
      this.padReverbSends[i] = reverb;
      this.padDelaySends[i] = delay;
    });
    this.loadDefaultPads();
  }

  loadDefaultPads() {
    const ctx = this.audioContext;
    this.loadPad(0, this.makeVinylNoiseBuffer(), this.padNames[0]);
    this.loadPad(1, this.makeBassThudBuffer(), this.padNames[1]);
    this.loadPad(2, this.makeGongBuffer(), this.padNames[2]);
    this.loadPad(3, this.makeStabBuffer(), this.padNames[3]);
    if (!ctx) return;
  }

  initThunder() {
    const ctx = this.audioContext;
    this.thunderGain = ctx.createGain();
    this.thunderReverbSend = ctx.createGain();
    this.thunderDelaySend = ctx.createGain();
    this.thunderConvolver = ctx.createConvolver();
    this.thunderIRLoaded = false;
    this.thunderGain.gain.value = 1.5;
    this.thunderReverbSend.gain.value = 0.8;
    this.thunderDelaySend.gain.value = 0.6;
    this.thunderConvolver.normalize = true;
    this.thunderConvolver.connect(this.thunderGain);
    this.thunderGain.connect(this.masterGain);
    this.thunderGain.connect(this.thunderReverbSend);
    this.thunderGain.connect(this.thunderDelaySend);
    this.thunderReverbSend.connect(this.echo.input);
    this.thunderDelaySend.connect(this.delayInput);
    this.loadThunderIR();
  }

  async loadThunderIR() {
    try {
      const res = await fetch('spring-crash.wav');
      if (!res.ok) return;
      const ab = await res.arrayBuffer();
      this.thunderConvolver.buffer = await this.audioContext.decodeAudioData(ab);
      this.thunderIRLoaded = Boolean(this.thunderConvolver.buffer);
    } catch (e) {
      this.thunderIRLoaded = false;
    }
  }

  makeVinylNoiseBuffer() {
    const ctx = this.audioContext;
    const dur = 0.7;
    const buf = ctx.createBuffer(1, Math.floor(ctx.sampleRate * dur), ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      const t = i / data.length;
      const env = Math.min(1, t * 12) * Math.exp(-t * 6);
      data[i] = ((Math.random() * 2) - 1) * env * 0.65;
    }
    return buf;
  }

  makeBassThudBuffer() {
    const ctx = this.audioContext;
    const dur = 0.25;
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i += 1) {
      const t = i / ctx.sampleRate;
      const f = 120 - (80 * (i / len));
      const env = Math.exp(-t * 22);
      data[i] = Math.sin(2 * Math.PI * f * t) * env;
    }
    return buf;
  }

  makeGongBuffer() {
    const ctx = this.audioContext;
    const dur = 1.8;
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i += 1) {
      const t = i / ctx.sampleRate;
      const mod = Math.sin(2 * Math.PI * 440 * t) * 120;
      const car = Math.sin(2 * Math.PI * (220 + mod) * t);
      data[i] = car * Math.exp(-t * 3.2) * 0.8;
    }
    return buf;
  }

  makeStabBuffer() {
    const ctx = this.audioContext;
    const dur = 0.16;
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i += 1) {
      const t = i / ctx.sampleRate;
      const saw = 2 * ((t * 220) % 1) - 1;
      const env = Math.min(1, t * 140) * Math.exp(-t * 28);
      data[i] = saw * env * 0.7;
    }
    return buf;
  }

  pitch(value) {
    return Utils.getPitch(value) + this.offset;
  }

  preload(data) {
    this.data = data || this.data;
    let count = 0;
    this.data.forEach(track => {
      if (track[2].length > count) count = track[2].length;
      const info = track[0] >= 2000
        ? this.player.loader.drumInfo(track[0] - 2000)
        : this.player.loader.instrumentInfo(track[0]);
      this.cacheInstrument(info);
    });

    const duration = Utils.getTickDuration('32') / 256;
    const nextKeys = new Set();
    for (let i = 0; i < count; i += 1) {
      const beat = new Map();
      this.data.forEach(track => {
        const key = `${track[0]}/${track[1]}`;
        nextKeys.add(key);
        if (!beat.has(key)) beat.set(key, { drums: [], notes: [] });
        const slot = beat.get(key);
        const tick = track[2][i] || {};
        if (track[0] >= 2000) {
          slot.drums.push([track[0] - 2000, tick.v]);
        } else if (Array.isArray(tick.n)) {
          tick.n.forEach(tone => {
            slot.notes.push([track[0], this.pitch(tone), duration, tick.v]);
          });
        } else if (tick.n) {
          slot.notes.push([track[0], this.pitch(tick.n), duration, tick.v]);
        }
      });
      this.beats[i] = beat;
    }

    this.trackNodes.forEach((nodes, key) => {
      if (nextKeys.has(key)) return;
      try {
        nodes.input.disconnect();
        nodes.dry.disconnect();
        nodes.reverbSend.disconnect();
        nodes.delaySend.disconnect();
      } catch (e) {
        // ignore
      }
      this.trackNodes.delete(key);
    });
    nextKeys.forEach(key => this.getTrackNodes(key));
  }

  contextTime() {
    return this.audioContext.currentTime;
  }

  playLoopMachine(fromBeat) {
    this.startPlayLoop(this.beats, this.bpm, this.fraq, fromBeat);
  }

  stopLoopMachine() {
    this.stopPlayLoop();
  }

  setLoopMachine(data, tempo, length, transpose) {
    const changed = tempo !== this.bpm || length !== this.bars || transpose !== this.offset;
    if (changed) this.stopPlayLoop();
    this.beats.length = 0;
    this.bpm = tempo || 127;
    this.bars = length || 16;
    this.offset = transpose || 0;
    this.updateDelayTime();
    this.preload(data);
    this.fraq = 1 / this.bars;
    return changed;
  }

  updateTracks(data) {
    this.beats.length = 0;
    this.preload(data);
    if (!this.beats.length || typeof this.beatIndex !== 'number' || this.beatIndex >= this.beats.length) {
      this.beatIndex = 0;
    }
  }

  startPlayLoop(beats, bpm, density, fromBeat) {
    this.loopStarted = true;
    const wholeNoteDuration = (4 * 60) / bpm;
    this.beatIndex = fromBeat < beats.length ? fromBeat : 0;
    this.playBeatAt(this.contextTime(), beats[this.beatIndex], bpm);
    let nextLoopTime = this.contextTime() + density * wholeNoteDuration;
    this.loopIntervalID = setInterval(() => {
      while (this.contextTime() >= nextLoopTime) {
        this.beatIndex += 1;
        if (this.beatIndex >= beats.length) this.beatIndex = 0;
        this.playBeatAt(nextLoopTime, beats[this.beatIndex], bpm);
        nextLoopTime += density * wholeNoteDuration;
      }
    }, 22);
  }

  stopPlayLoop() {
    this.loopStarted = false;
    clearInterval(this.loopIntervalID);
    this.cancelQueue();
  }

  getTrackState(key) {
    if (!this.trackState.has(key)) {
      this.trackState.set(key, {
        muted: false,
        solo: false,
        volume: 1,
        reverbSend: 0,
        delaySend: 0,
        lpf: 20000,
        hpf: 20,
        lpfQ: 1,
        hpfQ: 0.7,
        epicenterOn: false,
        epicenterFreq: 90,
        epicenterDrive: 4,
        epicenterBlend: 0.3,
        multibandOn: false,
        multibandCount: 3,
        multibandCutoffs: [200, 2000],
      });
    }
    return this.trackState.get(key);
  }

  applyTrackState(key) {
    const nodes = this.getTrackNodes(key);
    const state = this.getTrackState(key);
    nodes.state = state;
    const now = this.audioContext.currentTime;
    nodes.dry.gain.setTargetAtTime(state.muted ? 0 : state.volume, now, 0.01);
    nodes.reverbSend.gain.setTargetAtTime(state.reverbSend, now, 0.01);
    nodes.delaySend.gain.setTargetAtTime(state.delaySend, now, 0.01);
    nodes.hpf.frequency.setTargetAtTime(state.hpf, now, 0.01);
    nodes.lpf.frequency.setTargetAtTime(state.lpf, now, 0.01);
    nodes.hpf.Q.value = state.hpfQ;
    nodes.lpf.Q.value = state.lpfQ;
    nodes.subInput.frequency.setTargetAtTime(state.epicenterFreq, now, 0.02);
    nodes.subShaper.curve = makeExciterCurve(state.epicenterDrive);
    nodes.subBlend.gain.setTargetAtTime(state.epicenterOn ? state.epicenterBlend : 0, now, 0.02);
    this.applyMultibandState(nodes, state);
  }

  buildMultibandNodes() {
    const ctx = this.audioContext;
    const input = ctx.createGain();
    const dry = ctx.createGain();
    const rev = ctx.createGain();
    const dly = ctx.createGain();
    const bands = Array.from({ length: 5 }, () => {
      const hpf = ctx.createBiquadFilter();
      const lpf = ctx.createBiquadFilter();
      const gain = ctx.createGain();
      const revSend = ctx.createGain();
      const dlySend = ctx.createGain();
      hpf.type = 'highpass';
      lpf.type = 'lowpass';
      hpf.Q.value = 0.707;
      lpf.Q.value = 0.707;
      gain.gain.value = 1;
      revSend.gain.value = 0;
      dlySend.gain.value = 0;
      input.connect(hpf);
      hpf.connect(lpf);
      lpf.connect(gain);
      gain.connect(dry);
      gain.connect(revSend);
      gain.connect(dlySend);
      revSend.connect(this.echo.input);
      dlySend.connect(this.delayInput);
      return { hpf, lpf, gain, revSend, dlySend };
    });
    return { input, dry, rev, dly, bands };
  }

  applyMultibandState(nodes, state) {
    const now = this.audioContext.currentTime;
    const configs = {
      3: [200, 2000],
      4: [150, 800, 3000],
      5: [100, 400, 1500, 6000],
    };
    const count = clamp(state.multibandCount || 3, 3, 5);
    const cutoffs = Array.isArray(state.multibandCutoffs) && state.multibandCutoffs.length
      ? state.multibandCutoffs
      : configs[count];
    nodes.directPath.gain.setTargetAtTime(state.multibandOn ? 0 : 1, now, 0.01);
    nodes.multiband.input.gain.setTargetAtTime(state.multibandOn ? 1 : 0, now, 0.01);
    nodes.multiband.dry.gain.setTargetAtTime(state.multibandOn ? 1 : 0, now, 0.01);
    nodes.multiband.bands.forEach((band, i) => {
      const low = i === 0 ? 20 : cutoffs[Math.min(i - 1, cutoffs.length - 1)];
      const high = i >= count - 1 ? 20000 : cutoffs[Math.min(i, cutoffs.length - 1)];
      band.hpf.frequency.setTargetAtTime(low, now, 0.02);
      band.lpf.frequency.setTargetAtTime(high, now, 0.02);
      band.gain.gain.setTargetAtTime(i < count ? 1 : 0, now, 0.02);
    });
  }

  getTrackNodes(key) {
    if (this.trackNodes.has(key)) return this.trackNodes.get(key);
    const ctx = this.audioContext;
    const input = ctx.createGain();
    const hpf = ctx.createBiquadFilter();
    const lpf = ctx.createBiquadFilter();
    const directPath = ctx.createGain();
    const dry = ctx.createGain();
    const reverbSend = ctx.createGain();
    const delaySend = ctx.createGain();

    const subInput = ctx.createBiquadFilter();
    const subShaper = ctx.createWaveShaper();
    const subCleanup = ctx.createBiquadFilter();
    const subBlend = ctx.createGain();

    hpf.type = 'highpass';
    lpf.type = 'lowpass';
    hpf.frequency.value = 20;
    lpf.frequency.value = 20000;
    hpf.Q.value = 0.7;
    lpf.Q.value = 1;
    directPath.gain.value = 1;
    dry.gain.value = 1;
    reverbSend.gain.value = 0;
    delaySend.gain.value = 0;
    subInput.type = 'bandpass';
    subInput.frequency.value = 90;
    subInput.Q.value = 0.8;
    subShaper.curve = makeExciterCurve(4);
    subShaper.oversample = '4x';
    subCleanup.type = 'lowpass';
    subCleanup.frequency.value = 120;
    subCleanup.Q.value = 0.7;
    subBlend.gain.value = 0;

    input.connect(hpf);
    hpf.connect(lpf);
    lpf.connect(directPath);
    directPath.connect(dry);
    directPath.connect(reverbSend);
    directPath.connect(delaySend);
    dry.connect(this.equalizer.input);
    reverbSend.connect(this.echo.input);
    delaySend.connect(this.delayInput);

    lpf.connect(subInput);
    subInput.connect(subShaper);
    subShaper.connect(subCleanup);
    subCleanup.connect(subBlend);
    subBlend.connect(dry);

    const multiband = this.buildMultibandNodes();
    lpf.connect(multiband.input);
    multiband.dry.connect(this.equalizer.input);

    const nodes = {
      input,
      hpf,
      lpf,
      directPath,
      dry,
      reverbSend,
      delaySend,
      subInput,
      subShaper,
      subCleanup,
      subBlend,
      multiband,
    };
    this.trackNodes.set(key, nodes);
    this.applyTrackState(key);
    return nodes;
  }

  setMute(key, value) {
    const state = this.getTrackState(key);
    state.muted = Boolean(value);
    this.applyTrackState(key);
  }

  setSectionMute(name, value) {
    const needle = `${name}#`;
    this.trackState.forEach((state, key) => {
      if (key.startsWith(needle)) state.muted = Boolean(value);
    });
    this.trackNodes.forEach((_nodes, key) => {
      if (key.startsWith(needle)) this.applyTrackState(key);
    });
  }

  getSectionMuted(name) {
    const needle = `${name}#`;
    const values = [];
    this.trackState.forEach((state, key) => {
      if (key.startsWith(needle)) values.push(Boolean(state.muted));
    });
    if (!values.length) return false;
    return values.every(Boolean);
  }

  setSolo(key, value) {
    const state = this.getTrackState(key);
    state.solo = Boolean(value);
  }

  setVolume(key, value) {
    const state = this.getTrackState(key);
    state.volume = clamp(value, 0, 1);
    this.applyTrackState(key);
  }

  setReverbSend(key, value) {
    const state = this.getTrackState(key);
    state.reverbSend = clamp(value, 0, 1);
    this.applyTrackState(key);
  }

  setDelaySend(key, value) {
    const state = this.getTrackState(key);
    state.delaySend = clamp(value, 0, 1);
    this.applyTrackState(key);
  }

  setLPF(key, freqHz) {
    const state = this.getTrackState(key);
    state.lpf = clamp(freqHz, 20, 20000);
    this.applyTrackState(key);
  }

  setHPF(key, freqHz) {
    const state = this.getTrackState(key);
    state.hpf = clamp(freqHz, 20, 20000);
    this.applyTrackState(key);
  }

  setLPFQ(key, q) {
    const state = this.getTrackState(key);
    state.lpfQ = clamp(q, 0.1, 18);
    this.applyTrackState(key);
  }

  setHPFQ(key, q) {
    const state = this.getTrackState(key);
    state.hpfQ = clamp(q, 0.1, 18);
    this.applyTrackState(key);
  }

  setMasterLPF(freqHz) {
    const now = this.audioContext.currentTime;
    this.masterLPF.frequency.setTargetAtTime(clamp(freqHz, 20, 20000), now, 0.01);
  }

  setEpicenterEnabled(key, enabled) {
    const state = this.getTrackState(key);
    state.epicenterOn = Boolean(enabled);
    this.applyTrackState(key);
  }

  setEpicenterBlend(key, value) {
    const state = this.getTrackState(key);
    state.epicenterBlend = clamp(value, 0, 1);
    this.applyTrackState(key);
  }

  setEpicenterDrive(key, value) {
    const state = this.getTrackState(key);
    state.epicenterDrive = clamp(value, 1, 10);
    this.applyTrackState(key);
  }

  setEpicenterFreq(key, value) {
    const state = this.getTrackState(key);
    state.epicenterFreq = clamp(value, 40, 200);
    this.applyTrackState(key);
  }

  setMultibandEnabled(key, enabled) {
    const state = this.getTrackState(key);
    state.multibandOn = Boolean(enabled);
    this.applyTrackState(key);
  }

  setMultibandCount(key, count) {
    const state = this.getTrackState(key);
    state.multibandCount = clamp(parseInt(count, 10) || 3, 3, 5);
    this.applyTrackState(key);
  }

  setMultibandCutoffs(key, cutoffs) {
    const state = this.getTrackState(key);
    state.multibandCutoffs = (Array.isArray(cutoffs) ? cutoffs : [])
      .map(v => clamp(v, 20, 20000))
      .sort((a, b) => a - b);
    this.applyTrackState(key);
  }

  setDelayFeedback(value) {
    this.feedGain.gain.value = clamp(value, 0, 1.1);
  }

  setDelayMode(mode) {
    this.setTapeMode(mode);
  }

  setTapeMode(mode) {
    this.tapeMode = clamp(parseInt(mode, 10) || 1, 1, 7);
    const matrix = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
      [1, 1, 0],
      [1, 0, 1],
      [0, 1, 1],
      [1, 1, 1],
    ][this.tapeMode - 1];
    this.h1Gain.gain.value = matrix[0];
    this.h2Gain.gain.value = matrix[1];
    this.h3Gain.gain.value = matrix[2];
  }

  setTapeWarp(value) {
    this.tapeWarp = clamp(value, 0.001, 0.2);
  }

  setTapeWowFlutter(value) {
    const n = clamp(value, 0, 1);
    this.wowDepth.gain.value = 0.0008 * n;
    this.flutterDepth.gain.value = 0.0002 * n;
  }

  setTapeSpeed(seconds, warpTC = this.tapeWarp || 0.04) {
    const t = clamp(seconds, 0.05, 0.8);
    const now = this.audioContext.currentTime;
    this.delayHead1.delayTime.setTargetAtTime(t, now, warpTC);
    this.delayHead2.delayTime.setTargetAtTime(t * 1.5, now, warpTC);
    this.delayHead3.delayTime.setTargetAtTime(t * 2, now, warpTC);
    this._tapeSpeed = t;
  }

  tapTapeTempo() {
    const now = performance.now();
    if (this.tapTimes.length && now - this.tapTimes[this.tapTimes.length - 1] > 3000) {
      this.tapTimes = [];
    }
    this.tapTimes.push(now);
    if (this.tapTimes.length > 4) this.tapTimes.shift();
    if (this.tapTimes.length < 2) return null;
    let sum = 0;
    for (let i = 1; i < this.tapTimes.length; i += 1) {
      sum += this.tapTimes[i] - this.tapTimes[i - 1];
    }
    const seconds = (sum / (this.tapTimes.length - 1)) / 1000;
    this.setTapeSpeed(seconds);
    return seconds;
  }

  setDelayTime(value) {
    this.delayDivision = clamp(value, 0.125, 0.75);
    this.updateDelayTime();
  }

  updateDelayTime() {
    const whole = (4 * 60) / (this.bpm || 127);
    this.setTapeSpeed(whole * this.delayDivision);
  }

  setSirenVolume(value) {
    this.sirenVol = clamp(value, 0, 1);
    if (this.sirenActive) this.sirenGain.gain.value = this.sirenVol;
  }

  sirenHold(active) {
    this.sirenActive = Boolean(active);
    this.sirenGain.gain.setTargetAtTime(this.sirenActive ? this.sirenVol : 0, this.audioContext.currentTime, 0.01);
  }

  setSirenWave(type) {
    this.sirenOsc.type = type;
  }

  setSirenRate(hz) {
    this.sirenLFO.frequency.setTargetAtTime(clamp(hz, 0.1, 8), this.audioContext.currentTime, 0.01);
  }

  setSirenFreqRange(lo, hi) {
    const l = clamp(Math.min(lo, hi), 30, 4000);
    const h = clamp(Math.max(lo, hi), 30, 4000);
    this.sirenRange = { lo: l, hi: h };
    const center = (l + h) / 2;
    const depth = (h - l) / 2;
    this.sirenOsc.frequency.setTargetAtTime(center, this.audioContext.currentTime, 0.02);
    this.sirenLFODepth.gain.setTargetAtTime(depth, this.audioContext.currentTime, 0.02);
  }

  setSirenReverb(value) {
    this.sirenReverbSend.gain.value = clamp(value, 0, 1);
  }

  setSirenDelay(value) {
    this.sirenDelaySend.gain.value = clamp(value, 0, 1);
  }

  setSirenLPF(freqHz) {
    this.sirenLPF.frequency.setTargetAtTime(clamp(freqHz, 20, 20000), this.audioContext.currentTime, 0.02);
  }

  loadPad(index, audioBuffer, label = 'sample') {
    const i = clamp(index, 0, this.pads.length - 1);
    if (!audioBuffer) return;
    this.pads[i].buffer = audioBuffer;
    this.pads[i].label = label;
  }

  async loadPadFromFile(index, file) {
    if (!file) return;
    const ab = await file.arrayBuffer();
    const decoded = await this.audioContext.decodeAudioData(ab);
    this.loadPad(index, decoded, file.name || `sample ${index + 1}`);
  }

  triggerPad(index, loop = false, velocity = 127) {
    const i = clamp(index, 0, this.pads.length - 1);
    const pad = this.pads[i];
    if (!pad || !pad.buffer) return false;
    if (this.padSources[i]) {
      try {
        this.padSources[i].stop();
      } catch (e) {
        // ignore
      }
    }
    const src = this.audioContext.createBufferSource();
    src.buffer = pad.buffer;
    src.loop = Boolean(loop);
    const vel = clamp(velocity / 127, 0.05, 1);
    this.padGains[i].gain.setTargetAtTime(vel, this.audioContext.currentTime, 0.01);
    src.connect(this.padGains[i]);
    src.start(0);
    src.onended = () => {
      if (this.padSources[i] === src) this.padSources[i] = null;
    };
    this.padSources[i] = src;
    this.pads[i].looping = Boolean(loop);
    return true;
  }

  stopPad(index) {
    const i = clamp(index, 0, this.pads.length - 1);
    const src = this.padSources[i];
    if (!src) return;
    try {
      src.stop();
    } catch (e) {
      // ignore
    }
    this.padSources[i] = null;
    this.pads[i].looping = false;
  }

  setPadVolume(index, value) {
    const i = clamp(index, 0, this.pads.length - 1);
    this.padGains[i].gain.value = clamp(value, 0, 1);
  }

  setPadsReverb(value) {
    this.padMasterReverb = clamp(value, 0, 1);
    this.padReverbSends.forEach(node => { node.gain.value = this.padMasterReverb; });
  }

  setPadsDelay(value) {
    this.padMasterDelay = clamp(value, 0, 1);
    this.padDelaySends.forEach(node => { node.gain.value = this.padMasterDelay; });
  }

  thunder(intensity = 1) {
    const ctx = this.audioContext;
    const power = clamp(intensity, 0.05, 1.2);
    this.thunderGain.gain.setTargetAtTime(power * 2, ctx.currentTime, 0.002);
    if (this.thunderIRLoaded && this.thunderConvolver.buffer) {
      const src = ctx.createBufferSource();
      src.buffer = makeDiracBuffer(ctx);
      src.connect(this.thunderConvolver);
      src.start(ctx.currentTime);
      return;
    }
    const src = ctx.createBufferSource();
    src.buffer = makeNoiseBuffer(ctx, 0.06);
    const bpf = ctx.createBiquadFilter();
    const lpf = ctx.createBiquadFilter();
    const peak = ctx.createBiquadFilter();
    bpf.type = 'bandpass';
    bpf.frequency.value = 600;
    bpf.Q.value = 0.8;
    lpf.type = 'lowpass';
    lpf.frequency.value = 900;
    lpf.Q.value = 8 + (power * 8);
    peak.type = 'peaking';
    peak.frequency.value = 2400;
    peak.Q.value = 4;
    peak.gain.value = 8;
    src.connect(bpf);
    bpf.connect(lpf);
    lpf.connect(peak);
    peak.connect(this.thunderGain);
    src.start(ctx.currentTime);
  }

  getTrackKeys() {
    return [...this.trackNodes.keys()];
  }

  cancelQueue() {
    this.player.cancelQueue(this.audioContext);
  }

  cacheInstrument(info) {
    if (info && !window[info.variable]) {
      if (window[info.variable + 127]) return;
      window[info.variable + 127] = true;
      this.player.loader.startLoad(this.audioContext, info.url, info.variable);
      this.player.loader.waitLoad(() => {
        delete window[info.variable + 127];
      });
    }
  }

  playDrum(when, drum, nodes) {
    const [instrument, level] = drum;
    const info = this.player.loader.drumInfo(instrument);
    if (!window[info.variable]) {
      this.cacheInstrument(info);
      return;
    }
    const pitch = window[info.variable].zones[0].keyRangeLow;
    const gain = (1 / 127) * level;
    if (level > 0) this.queueToTrackNodes(window[info.variable], when, pitch, 1 / 64, gain, nodes);
  }

  queueToTrackNodes(font, when, pitch, duration, gain, nodes) {
    this.player.queueWaveTable(this.audioContext, nodes.input, font, when, pitch, duration, gain);
  }

  playBeatAt(when, beat, bpm) {
    if (!beat) return;
    const N = (4 * 60) / bpm;
    const hasSolo = [...this.trackState.values()].some(item => item.solo);
    beat.forEach((slot, key) => {
      const state = this.getTrackState(key);
      if (state.muted) return;
      if (hasSolo && !state.solo) return;
      const nodes = this.getTrackNodes(key);
      let touched = false;
      for (let i = 0; i < slot.drums.length; i += 1) {
        this.playDrum(when, slot.drums[i], nodes);
        touched = true;
      }
      slot.notes.forEach(note => {
        const [instrument, pitches, duration, level] = note;
        const info = this.player.loader.instrumentInfo(instrument);
        if (!window[info.variable]) {
          this.cacheInstrument(info);
          return;
        }
        this.queueToTrackNodes(window[info.variable], when, pitches, duration * N, (1 / 127) * level, nodes);
        touched = true;
      });
      if (touched && typeof this.onBeat === 'function') {
        this.onBeat(key, when, this.beatIndex);
      }
    });
  }
}

export { sectionFromTrackKey, sliderToFreq };
