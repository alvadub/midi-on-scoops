import { Utils } from 'midi-writer-js';

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function makeExciterCurve(drive = 4, samples = 512) {
  const curve = new Float32Array(samples);
  const norm = Math.tanh(drive) || 1;
  for (let i = 0; i < samples; i += 1) {
    const x = ((i * 2) / (samples - 1)) - 1;
    curve[i] = Math.tanh(drive * x) / norm;
  }
  return curve;
}


export default class Player {
  constructor() {
    this.data = [];
    this.beats = [];
    this.bars = 16;
    this.bpm = 127;
    this.fraq = 1 / this.bars;
    this.trackNodes = new Map();
    this.trackState = new Map();
    this.delayDivision = 3 / 8;
    this.onBeat = null;
    this.onPlaybackEnd = null;
    this.beatIndex = 0;
    this.loopStarted = false;
    this.songLoop = false;
    this.defaultPadFiles = [
      'coin_1.wav',
      'coin_2.wav',
      'explosion_1.wav',
      'jump_1.wav',
      'jump_2.wav',
      'jump_3.wav',
      'powerup_1.wav',
      'powerup_2.wav',
      'powerup_3.wav',
      'powerup_4.wav',
    ];
    this.pads = Array.from({ length: this.defaultPadFiles.length }, (_, i) => ({
      buffer: null,
      label: this.defaultPadFiles[i].replace(/\.[^.]+$/, ''),
      looping: false,
    }));
    this.padSources = Array.from({ length: this.pads.length }, () => null);
    this.padNames = [
      'vinyl noise',
      'bass thud',
      'gong hit',
      'stab',
      'snare noise',
      'wood click',
      'riser',
      'sub drop',
      'clap burst',
      'noise sweep',
    ];
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
    this.masterPreampBypass = this.audioContext.createGain();
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

    this.initMasterPreamp();
    this.masterGain.connect(this.masterPreampInput);
    this.masterGain.connect(this.masterPreampBypass);
    this.masterPreampBypass.connect(this.masterLPF);
    this.masterLPF.connect(this.destination);
    this.masterGain.connect(this.visualizer);

    this.initDelayBus();
    this.initPads();
    this.updateDelayTime();
  }

  initMasterPreamp() {
    const ctx = this.audioContext;
    this.masterPreampState = {
      enabled: false,
      cutoffs: [100, 400, 1500, 6000],
      hpf: 20,
      lpf: 20000,
      q: 0.707,
      bandSends: Array.from({ length: 5 }, () => ({ reverb: 0.35, delay: 0.25 })),
    };
    this.masterPreampBypass.gain.value = 1;
    this.masterPreampInput = ctx.createGain();
    this.masterPreampOut = ctx.createGain();
    this.masterPreampHPF = ctx.createBiquadFilter();
    this.masterPreampLPF = ctx.createBiquadFilter();
    this.masterPreampInput.gain.value = 0;
    this.masterPreampOut.gain.value = 1;
    this.masterPreampHPF.type = 'highpass';
    this.masterPreampLPF.type = 'lowpass';
    this.masterPreampInput.connect(this.masterPreampHPF);
    this.masterPreampHPF.connect(this.masterPreampLPF);
    this.masterPreampBands = Array.from({ length: 5 }, () => {
      const hpf = ctx.createBiquadFilter();
      const lpf = ctx.createBiquadFilter();
      const gain = ctx.createGain();
      const reverbSend = ctx.createGain();
      const delaySend = ctx.createGain();
      const analyser = ctx.createAnalyser();
      const vuData = new Uint8Array(128);
      hpf.type = 'highpass';
      lpf.type = 'lowpass';
      hpf.Q.value = 0.707;
      lpf.Q.value = 0.707;
      gain.gain.value = 1;
      reverbSend.gain.value = 0.35;
      delaySend.gain.value = 0.25;
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.82;
      this.masterPreampLPF.connect(hpf);
      hpf.connect(lpf);
      lpf.connect(gain);
      gain.connect(this.masterPreampOut);
      gain.connect(reverbSend);
      gain.connect(delaySend);
      gain.connect(analyser);
      reverbSend.connect(this.echo.input);
      delaySend.connect(this.delayInput);
      return { hpf, lpf, gain, reverbSend, delaySend, analyser, vuData };
    });
    this.masterPreampOut.connect(this.masterLPF);
    this.applyMasterPreampState();
  }

  initDelayBus() {
    const ctx = this.audioContext;
    this.delayNode = ctx.createDelay(4);
    this.delayFeedback = ctx.createGain();
    this.delayTone = ctx.createBiquadFilter();
    this.delayWet = ctx.createGain();
    this.delayFeedback.gain.value = 0.35;
    this.delayTone.type = 'lowpass';
    this.delayTone.frequency.value = 5000;
    this.delayTone.Q.value = 0.7;
    this.delayWet.gain.value = 1;

    this.delayInput.connect(this.delayNode);
    this.delayNode.connect(this.delayTone);
    this.delayTone.connect(this.delayWet);
    this.delayWet.connect(this.masterGain);
    this.delayTone.connect(this.delayFeedback);
    this.delayFeedback.connect(this.delayNode);
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
    this.defaultPadFiles.forEach((filename, index) => {
      this.loadPadFromURL(index, filename).catch(err => {
        console.warn(`Pad ${index + 1} sample load failed (${filename}), using synth fallback.`, err);
        const fallback = this.makeFallbackPadBuffer(index);
        if (!fallback) return;
        this.loadPad(index, fallback, this.padNames[index] || `pad ${index + 1}`);
      });
    });
  }

  async loadPadFromURL(index, filename) {
    const candidates = [
      `samples/${filename}`,
      `/samples/${filename}`,
      `../samples/${filename}`,
    ];
    let lastErr = null;
    for (let i = 0; i < candidates.length; i += 1) {
      const url = candidates[i];
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.arrayBuffer();
        const decoded = await this.audioContext.decodeAudioData(data);
        const label = String(filename).replace(/\.[^.]+$/, '');
        this.loadPad(index, decoded, label);
        return;
      } catch (e) {
        lastErr = new Error(`Failed ${url}: ${e.message || e}`);
      }
    }
    throw lastErr || new Error(`Failed to load sample: ${filename}`);
  }

  makeFallbackPadBuffer(index) {
    switch (index) {
      case 0: return this.makeVinylNoiseBuffer();
      case 1: return this.makeBassThudBuffer();
      case 2: return this.makeGongBuffer();
      case 3: return this.makeStabBuffer();
      case 4: return this.makeSnareNoiseBuffer();
      case 5: return this.makeWoodClickBuffer();
      case 6: return this.makeRiserBuffer();
      case 7: return this.makeSubDropBuffer();
      case 8: return this.makeClapBurstBuffer();
      case 9: return this.makeNoiseSweepBuffer();
      default: return null;
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

  makeSnareNoiseBuffer() {
    const ctx = this.audioContext;
    const dur = 0.22;
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i += 1) {
      const t = i / ctx.sampleRate;
      const env = Math.exp(-t * 20);
      const tone = Math.sin(2 * Math.PI * 220 * t) * 0.2;
      data[i] = (((Math.random() * 2) - 1) * 0.8 + tone) * env;
    }
    return buf;
  }

  makeWoodClickBuffer() {
    const ctx = this.audioContext;
    const dur = 0.08;
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i += 1) {
      const t = i / ctx.sampleRate;
      const env = Math.exp(-t * 60);
      const pulse = Math.sin(2 * Math.PI * 1400 * t) * 0.7;
      data[i] = pulse * env;
    }
    return buf;
  }

  makeRiserBuffer() {
    const ctx = this.audioContext;
    const dur = 0.8;
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i += 1) {
      const t = i / ctx.sampleRate;
      const p = i / len;
      const f = 180 + (p * 1200);
      const env = Math.min(1, p * 1.2) * Math.exp(-(1 - p) * 0.15);
      data[i] = Math.sin(2 * Math.PI * f * t) * env * 0.45;
    }
    return buf;
  }

  makeSubDropBuffer() {
    const ctx = this.audioContext;
    const dur = 0.9;
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i += 1) {
      const t = i / ctx.sampleRate;
      const p = i / len;
      const f = 110 - (p * 80);
      const env = Math.exp(-t * 4.2);
      data[i] = Math.sin(2 * Math.PI * f * t) * env * 0.9;
    }
    return buf;
  }

  makeClapBurstBuffer() {
    const ctx = this.audioContext;
    const dur = 0.18;
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i += 1) {
      const t = i / ctx.sampleRate;
      const env = Math.exp(-t * 24);
      const burst = ((Math.random() * 2) - 1) * (1 - ((i / len) * 0.35));
      data[i] = burst * env * 0.85;
    }
    return buf;
  }

  makeNoiseSweepBuffer() {
    const ctx = this.audioContext;
    const dur = 0.65;
    const len = Math.floor(ctx.sampleRate * dur);
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i += 1) {
      const t = i / ctx.sampleRate;
      const p = i / len;
      const env = Math.exp(-t * 4.6);
      const wobble = Math.sin(2 * Math.PI * (180 + (p * 900)) * t) * 0.18;
      data[i] = ((((Math.random() * 2) - 1) * 0.65) + wobble) * env;
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
    const collectDrumEvents = (tick, baseOffset = 0, span = 1) => {
      if (!tick) return [];

      if (Array.isArray(tick)) {
        const total = tick.length || 1;
        return tick.reduce((memo, subTick, subIndex) => {
          memo.push(...collectDrumEvents(subTick, baseOffset + ((subIndex / total) * span), span / total));
          return memo;
        }, []);
      }

      const level = tick && typeof tick.v !== 'undefined' ? tick.v : 0;
      if (!(level > 0)) return [];
      return [[level, baseOffset, span]];
    };
    const collectNoteTokens = (tick, baseOffset = 0, span = 1) => {
      if (!tick) return [];

      if (Array.isArray(tick)) {
        const total = tick.length || 1;
        return tick.reduce((memo, subTick, subIndex) => {
          memo.push(...collectNoteTokens(subTick, baseOffset + ((subIndex / total) * span), span / total));
          return memo;
        }, []);
      }

      if (tick.h || tick.l === '_') {
        return [{ type: 'hold', offset: baseOffset, span }];
      }

      const level = tick && typeof tick.v !== 'undefined' ? tick.v : 0;
      if (!(level > 0) || !tick.n) {
        return [{ type: 'rest', offset: baseOffset, span }];
      }

      if (Array.isArray(tick.n)) {
        const pitches = tick.n.reduce((memo, tone) => {
          const pitch = this.pitch(tone);
          if (Number.isFinite(pitch)) memo.push(pitch);
          return memo;
        }, []);
        if (!pitches.length) return [{ type: 'rest', offset: baseOffset, span }];
        return [{ type: 'hit', pitches, level, offset: baseOffset, span }];
      }

      const pitch = this.pitch(tick.n);
      if (!Number.isFinite(pitch)) return [{ type: 'rest', offset: baseOffset, span }];
      return [{ type: 'hit', pitches: [pitch], level, offset: baseOffset, span }];
    };
    const activeNoteRefsByKey = new Map();

    const nextKeys = new Set();
    for (let i = 0; i < count; i += 1) {
      const beat = new Map();
      this.data.forEach(track => {
        const key = `${track[0]}/${track[1]}`;
        nextKeys.add(key);
        if (!beat.has(key)) beat.set(key, { drums: [], notes: [] });
        const slot = beat.get(key);
        const tick = typeof track[2][i] === 'undefined' ? null : track[2][i];
        if (track[0] >= 2000) {
          const events = collectDrumEvents(tick);
          events.forEach(([level, offset, span]) => {
            slot.drums.push([track[0] - 2000, level, offset, span]);
          });
        } else {
          let activeRefs = activeNoteRefsByKey.get(key) || [];
          const events = collectNoteTokens(tick);
          events.forEach((event) => {
            if (event.type === 'rest') {
              activeRefs = [];
              return;
            }
            if (event.type === 'hold') {
              if (!activeRefs.length) return;
              activeRefs.forEach((ref) => {
                ref[5] += event.span;
              });
              return;
            }
            const refs = [];
            event.pitches.forEach((pitch) => {
              const row = [track[0], pitch, duration, event.level, event.offset, event.span];
              slot.notes.push(row);
              refs.push(row);
            });
            activeRefs = refs;
          });
          activeNoteRefsByKey.set(key, activeRefs);
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

  setSongLoop(enabled) {
    this.songLoop = Boolean(enabled);
  }

  setLoopMachine(data, tempo, length, transpose) {
    const appliedTempo = tempo || 127;
    const changed = appliedTempo !== this.bpm || length !== this.bars || transpose !== this.offset;
    if (changed) this.stopPlayLoop();
    this.beats.length = 0;
    this.bpm = appliedTempo;
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
    if (!beats || !beats.length) {
      this.loopStarted = false;
      return;
    }
    this.loopStarted = true;
    const wholeNoteDuration = (4 * 60) / bpm;
    this.beatIndex = fromBeat < beats.length ? fromBeat : 0;
    this.playBeatAt(this.contextTime(), beats[this.beatIndex], bpm);
    let nextLoopTime = this.contextTime() + density * wholeNoteDuration;
    this.loopIntervalID = setInterval(() => {
      while (this.contextTime() >= nextLoopTime) {
        let nextBeatIndex = this.beatIndex + 1;
        if (nextBeatIndex >= beats.length) {
          if (!this.songLoop) {
            this.stopPlayLoop();
            if (typeof this.onPlaybackEnd === 'function') this.onPlaybackEnd();
            return;
          }
          nextBeatIndex = 0;
        }
        this.beatIndex = nextBeatIndex;
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
  }

  getTrackNodes(key) {
    if (this.trackNodes.has(key)) return this.trackNodes.get(key);
    const ctx = this.audioContext;
    const input = ctx.createGain();
    const hpf = ctx.createBiquadFilter();
    const lpf = ctx.createBiquadFilter();
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
    lpf.connect(dry);
    lpf.connect(reverbSend);
    lpf.connect(delaySend);
    dry.connect(this.equalizer.input);
    reverbSend.connect(this.echo.input);
    delaySend.connect(this.delayInput);

    lpf.connect(subInput);
    subInput.connect(subShaper);
    subShaper.connect(subCleanup);
    subCleanup.connect(subBlend);
    subBlend.connect(dry);

    const nodes = {
      input,
      hpf,
      lpf,
      dry,
      reverbSend,
      delaySend,
      subInput,
      subShaper,
      subCleanup,
      subBlend,
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

  applyMasterPreampState() {
    const now = this.audioContext.currentTime;
    const cutoffs = Array.isArray(this.masterPreampState.cutoffs) && this.masterPreampState.cutoffs.length
      ? this.masterPreampState.cutoffs
      : [100, 400, 1500, 6000];
    this.masterPreampBypass.gain.setTargetAtTime(this.masterPreampState.enabled ? 0 : 1, now, 0.01);
    this.masterPreampInput.gain.setTargetAtTime(this.masterPreampState.enabled ? 1 : 0, now, 0.01);
    this.masterPreampHPF.frequency.setTargetAtTime(this.masterPreampState.hpf, now, 0.02);
    this.masterPreampLPF.frequency.setTargetAtTime(this.masterPreampState.lpf, now, 0.02);
    this.masterPreampHPF.Q.setTargetAtTime(this.masterPreampState.q, now, 0.02);
    this.masterPreampLPF.Q.setTargetAtTime(this.masterPreampState.q, now, 0.02);
    this.masterPreampBands.forEach((band, i) => {
      const sends = this.masterPreampState.bandSends[i] || { reverb: 0, delay: 0 };
      const low = i === 0 ? 20 : cutoffs[Math.min(i - 1, cutoffs.length - 1)];
      const high = i >= 4 ? 20000 : cutoffs[Math.min(i, cutoffs.length - 1)];
      band.hpf.frequency.setTargetAtTime(low, now, 0.02);
      band.lpf.frequency.setTargetAtTime(high, now, 0.02);
      band.gain.gain.setTargetAtTime(1, now, 0.02);
      band.reverbSend.gain.setTargetAtTime(this.masterPreampState.enabled ? clamp(sends.reverb, 0, 1) : 0, now, 0.02);
      band.delaySend.gain.setTargetAtTime(this.masterPreampState.enabled ? clamp(sends.delay, 0, 1) : 0, now, 0.02);
    });
  }

  setMasterPreampEnabled(enabled) {
    this.masterPreampState.enabled = Boolean(enabled);
    this.applyMasterPreampState();
  }

  setMasterPreampCutoffs(cutoffs) {
    this.masterPreampState.cutoffs = (Array.isArray(cutoffs) ? cutoffs : [])
      .map(v => clamp(v, 20, 20000))
      .sort((a, b) => a - b);
    this.applyMasterPreampState();
  }

  setMasterPreampHPF(freqHz) {
    this.masterPreampState.hpf = clamp(freqHz, 20, 20000);
    this.applyMasterPreampState();
  }

  setMasterPreampLPF(freqHz) {
    this.masterPreampState.lpf = clamp(freqHz, 20, 20000);
    this.applyMasterPreampState();
  }

  setMasterPreampQ(q) {
    this.masterPreampState.q = clamp(q, 0.1, 18);
    this.applyMasterPreampState();
  }

  setMasterPreampBandReverbSend(index, value) {
    const i = clamp(parseInt(index, 10) || 0, 0, 4);
    const sends = this.masterPreampState.bandSends[i] || { reverb: 0, delay: 0 };
    sends.reverb = clamp(value, 0, 1);
    this.masterPreampState.bandSends[i] = sends;
    this.applyMasterPreampState();
  }

  setMasterPreampBandDelaySend(index, value) {
    const i = clamp(parseInt(index, 10) || 0, 0, 4);
    const sends = this.masterPreampState.bandSends[i] || { reverb: 0, delay: 0 };
    sends.delay = clamp(value, 0, 1);
    this.masterPreampState.bandSends[i] = sends;
    this.applyMasterPreampState();
  }

  getMasterPreampBandLevels() {
    if (!Array.isArray(this.masterPreampBands)) return [0, 0, 0, 0, 0];
    return this.masterPreampBands.map(band => {
      if (!band || !band.analyser || !band.vuData) return 0;
      band.analyser.getByteTimeDomainData(band.vuData);
      let sum = 0;
      for (let i = 0; i < band.vuData.length; i += 1) {
        sum += Math.abs((band.vuData[i] - 128) / 128);
      }
      return clamp((sum / band.vuData.length) * 3.2, 0, 1);
    });
  }

  setDelayFeedback(value) {
    this.delayFeedback.gain.value = clamp(value, 0, 1.1);
  }

  setDelaySeconds(seconds) {
    const t = clamp(seconds, 0.05, 0.8);
    const now = this.audioContext.currentTime;
    this.delayNode.delayTime.setTargetAtTime(t, now, 0.04);
  }

  setDelayTime(value) {
    this.delayDivision = clamp(value, 0.125, 0.75);
    this.updateDelayTime();
  }

  updateDelayTime() {
    const whole = (4 * 60) / (this.bpm || 127);
    this.setDelaySeconds(whole * this.delayDivision);
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
    const startAt = Math.max(when, this.audioContext.currentTime + 0.001);
    if (Array.isArray(pitch)) {
      const tones = pitch.filter(Number.isFinite);
      if (!tones.length) return;
      this.player.queueChord(this.audioContext, nodes.input, font, startAt, tones, duration, gain);
      return;
    }
    this.player.queueWaveTable(this.audioContext, nodes.input, font, startAt, pitch, duration, gain);
  }

  playBeatAt(when, beat, bpm) {
    if (!beat) return;
    const N = (4 * 60) / bpm;
    const beatDuration = this.fraq * N;
    const hasSolo = [...this.trackState.values()].some(item => item.solo);
    beat.forEach((slot, key) => {
      const state = this.getTrackState(key);
      if (state.muted) return;
      if (hasSolo && !state.solo) return;
      const nodes = this.getTrackNodes(key);
      let touched = false;
      for (let i = 0; i < slot.drums.length; i += 1) {
        const drum = slot.drums[i];
        const subOffsetRatio = typeof drum[2] === 'number' ? drum[2] : 0;
        this.playDrum(when + (subOffsetRatio * beatDuration), drum, nodes);
        touched = true;
      }
      slot.notes.forEach(note => {
        const [instrument, pitches, duration, level, subOffsetRatio = 0, subSpan = 1] = note;
        if (!Number.isFinite(level) || !Number.isFinite(duration) || !Number.isFinite(subSpan)) return;
        const info = this.player.loader.instrumentInfo(instrument);
        if (!window[info.variable]) {
          this.cacheInstrument(info);
          return;
        }
        const startAt = when + (subOffsetRatio * beatDuration);
        const basePulseDuration = duration * N;
        const baseDuration = basePulseDuration * subSpan;
        // Held notes can sound shorter than expected on some fonts (e.g. piano envelopes),
        // so keep a small overlap to preserve legato perception without changing beat timing.
        const legatoComp = subSpan > 1 ? Math.min(beatDuration, baseDuration * 0.5) : 0;
        this.queueToTrackNodes(
          window[info.variable],
          startAt,
          pitches,
          baseDuration + legatoComp,
          (1 / 127) * level,
          nodes,
        );
        touched = true;
      });
      if (touched && typeof this.onBeat === 'function') {
        this.onBeat(key, when, this.beatIndex);
      }
    });
  }
}
