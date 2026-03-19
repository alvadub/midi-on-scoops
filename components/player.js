import midiWriter from "midi-writer-js";
import { DEFAULT_CHANNEL_ALIASES, normalizeChannelAliases } from "../lib/channels.js";
const { Utils } = midiWriter;
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const FONT_LOAD_TIMEOUT_MS = 4500;
const LOCAL_FONT_BASE = "/webaudiofont/sound";
const midiToFrequency = (pitch) => 440 * 2 ** ((pitch - 69) / 12);
const SOUND_MAP_URL_CANDIDATES = ["/sound-map.json", "./sound-map.json"];
const DRUM_KINDS = ["kick", "snare", "hat", "perc"];
const DEFAULT_SOUND_MAP = {
  drums: {
    "#2001": { kind: "kick", label: "Kick" },
    "#2004": { kind: "snare", label: "Snare" },
    "#2028": { kind: "snare", label: "Snare/Clap" },
    "#2035": { kind: "hat", label: "Hi-Hat" },
    "#2081": { kind: "hat", label: "Ride/Hi-Hat" },
    "#2123": { kind: "perc", label: "Percussion" }
  },
  instruments: {
    "393": { family: "bass", fallbackWave: "square", label: "Bass" },
    "518": { family: "lead", fallbackWave: "triangle", label: "Lead" }
  },
  keywordHints: {
    kick: ["kick", "bass drum", "bd"],
    snare: ["snare", "rim", "clap"],
    hat: ["hat", "hi-hat", "hihat", "cymbal", "ride", "crash", "shaker", "tamb"],
    perc: ["perc", "tom", "conga", "bongo", "cowbell", "clave"]
  },
  banks: {
    default: { aliases: {} },
    tr808: {
      aliases: {
        drums: {
          bd: 2001,
          kick: 2001,
          sd: 2004,
          sn: 2004,
          snare: 2004,
          cp: 2028,
          clap: 2028,
          hh: 2035,
          hat: 2035,
          oh: 2081,
          ride: 2081,
          perc: 2123
        }
      }
    },
    gm: {
      aliases: {
        instruments: {
          piano: 0,
          epiano: 4,
          organ: 16,
          guitar: 24,
          bass: 33,
          strings: 48,
          brass: 61,
          choir: 52,
          lead: 80,
          pad: 88,
          fx: 98,
          synth: 94
        }
      }
    }
  },
  aliases: DEFAULT_CHANNEL_ALIASES
};
const cloneSoundMap = () => JSON.parse(JSON.stringify(DEFAULT_SOUND_MAP));
const normalizeDrumKind = (value) => {
  const kind = String(value || "").toLowerCase();
  return DRUM_KINDS.includes(kind) ? kind : "perc";
};
const normalizeDrumChannelKey = (value) => {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (raw.startsWith("#")) {
    const n2 = parseInt(raw.slice(1), 10);
    return Number.isFinite(n2) ? `#${n2}` : "";
  }
  const n = parseInt(raw, 10);
  if (!Number.isFinite(n)) return "";
  if (n >= 2e3) return `#${n}`;
  return `#${n + 2e3}`;
};
const mergeChannelAliases = (base, overrides) => normalizeChannelAliases({
  drums: {
    ...base && base.drums || {},
    ...overrides && overrides.drums || {}
  },
  instruments: {
    ...base && base.instruments || {},
    ...overrides && overrides.instruments || {}
  }
});
const normalizeFallbackWave = (value) => {
  const wave = String(value || "").toLowerCase();
  if (wave === "triangle" || wave === "square" || wave === "sawtooth") return wave;
  return "auto";
};
const normalizeVelocity = (level) => {
  if (!Number.isFinite(level) || level <= 0) return 0;
  if (level <= 1) return clamp(level, 0, 1);
  if (level <= 16) return clamp(level / 16, 0, 1);
  return clamp(level / 127, 0, 1);
};
function makeExciterCurve(drive = 4, samples = 512) {
  const curve = new Float32Array(samples);
  const norm = Math.tanh(drive) || 1;
  for (let i = 0; i < samples; i += 1) {
    const x = i * 2 / (samples - 1) - 1;
    curve[i] = Math.tanh(drive * x) / norm;
  }
  return curve;
}
class Player {
  constructor() {
    this.data = [];
    this.beats = [];
    this.bars = 16;
    this.bpm = 127;
    this.fraq = 1 / this.bars;
    this.trackNodes = /* @__PURE__ */ new Map();
    this.trackState = /* @__PURE__ */ new Map();
    this.delayDivision = 3 / 8;
    this.onBeat = null;
    this.onPlaybackEnd = null;
    this.beatIndex = 0;
    this.loopStarted = false;
    this.songLoop = false;
    this.arrangementLoopRange = null;
    this.defaultPadFiles = [
      "coin_1.wav",
      "coin_2.wav",
      "explosion_1.wav",
      "jump_1.wav",
      "jump_2.wav",
      "jump_3.wav",
      "powerup_1.wav",
      "powerup_2.wav",
      "powerup_3.wav",
      "powerup_4.wav"
    ];
    this.pads = Array.from({ length: this.defaultPadFiles.length }, (_, i) => ({
      buffer: null,
      label: this.defaultPadFiles[i].replace(/\.[^.]+$/, ""),
      looping: false
    }));
    this.padSources = Array.from({ length: this.pads.length }, () => null);
    this.padNames = [
      "vinyl noise",
      "bass thud",
      "gong hit",
      "stab",
      "snare noise",
      "wood click",
      "riser",
      "sub drop",
      "clap burst",
      "noise sweep"
    ];
    this.pendingMidiPulse = null;
    this.fontLoadStatus = /* @__PURE__ */ new Map();
    this.fontLoadPromises = /* @__PURE__ */ new Map();
    this.soundMap = cloneSoundMap();
    this.synthFallbackEnabled = true;
    this.synthVoiceGain = 0.32;
    this.initAudio();
    this.loadSoundMap();
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
    this.masterLPF.type = "lowpass";
    this.masterLPF.frequency.value = 2e4;
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
    this.synthNoiseBuffer = this.createNoiseBuffer(0.25);
    this.updateDelayTime();
  }
  initMasterPreamp() {
    const ctx = this.audioContext;
    this.masterPreampState = {
      enabled: false,
      cutoffs: [100, 400, 1500, 6e3],
      hpf: 20,
      lpf: 2e4,
      q: 0.707,
      bandSends: Array.from({ length: 5 }, () => ({ reverb: 0.35, delay: 0.25 }))
    };
    this.masterPreampBypass.gain.value = 1;
    this.masterPreampInput = ctx.createGain();
    this.masterPreampOut = ctx.createGain();
    this.masterPreampHPF = ctx.createBiquadFilter();
    this.masterPreampLPF = ctx.createBiquadFilter();
    this.masterPreampInput.gain.value = 0;
    this.masterPreampOut.gain.value = 1;
    this.masterPreampHPF.type = "highpass";
    this.masterPreampLPF.type = "lowpass";
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
      hpf.type = "highpass";
      lpf.type = "lowpass";
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
    this.delayTone.type = "lowpass";
    this.delayTone.frequency.value = 5e3;
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
      this.loadPadFromURL(index, filename).catch((err) => {
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
      `../samples/${filename}`
    ];
    let lastErr = null;
    for (let i = 0; i < candidates.length; i += 1) {
      const url = candidates[i];
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.arrayBuffer();
        const decoded = await this.audioContext.decodeAudioData(data);
        const label = String(filename).replace(/\.[^.]+$/, "");
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
      case 0:
        return this.makeVinylNoiseBuffer();
      case 1:
        return this.makeBassThudBuffer();
      case 2:
        return this.makeGongBuffer();
      case 3:
        return this.makeStabBuffer();
      case 4:
        return this.makeSnareNoiseBuffer();
      case 5:
        return this.makeWoodClickBuffer();
      case 6:
        return this.makeRiserBuffer();
      case 7:
        return this.makeSubDropBuffer();
      case 8:
        return this.makeClapBurstBuffer();
      case 9:
        return this.makeNoiseSweepBuffer();
      default:
        return null;
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
      data[i] = (Math.random() * 2 - 1) * env * 0.65;
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
      const f = 120 - 80 * (i / len);
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
      const saw = 2 * (t * 220 % 1) - 1;
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
      data[i] = ((Math.random() * 2 - 1) * 0.8 + tone) * env;
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
      const f = 180 + p * 1200;
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
      const f = 110 - p * 80;
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
      const burst = (Math.random() * 2 - 1) * (1 - i / len * 0.35);
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
      const wobble = Math.sin(2 * Math.PI * (180 + p * 900) * t) * 0.18;
      data[i] = ((Math.random() * 2 - 1) * 0.65 + wobble) * env;
    }
    return buf;
  }
  createNoiseBuffer(durationSec = 0.25) {
    const ctx = this.audioContext;
    const len = Math.max(1, Math.floor(ctx.sampleRate * durationSec));
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i += 1) {
      data[i] = Math.random() * 2 - 1;
    }
    return buf;
  }
  pitch(value) {
    return Utils.getPitch(value) + this.offset;
  }
  preload(data) {
    this.data = data || this.data;
    let count = 0;
    this.data.forEach((track) => {
      if (track[2].length > count) count = track[2].length;
      const info = track[0] >= 2e3 ? this.player.loader.drumInfo(track[0] - 2e3) : this.player.loader.instrumentInfo(track[0]);
      this.cacheInstrument(info);
    });
    const duration = Utils.getTickDuration("32") / 256;
    const collectDrumEvents = (tick, baseOffset = 0, span = 1) => {
      if (!tick) return [];
      if (Array.isArray(tick)) {
        const total = tick.length || 1;
        return tick.reduce((memo, subTick, subIndex) => {
          memo.push(...collectDrumEvents(subTick, baseOffset + subIndex / total * span, span / total));
          return memo;
        }, []);
      }
      const level = tick && typeof tick.v !== "undefined" ? tick.v : 0;
      if (!(level > 0)) return [];
      return [[level, baseOffset, span]];
    };
    const collectNoteTokens = (tick, baseOffset = 0, span = 1) => {
      if (!tick) return [];
      if (Array.isArray(tick)) {
        const total = tick.length || 1;
        return tick.reduce((memo, subTick, subIndex) => {
          memo.push(...collectNoteTokens(subTick, baseOffset + subIndex / total * span, span / total));
          return memo;
        }, []);
      }
      if (tick.h || tick.l === "_") {
        return [{ type: "hold", offset: baseOffset, span }];
      }
      const level = tick && typeof tick.v !== "undefined" ? tick.v : 0;
      if (!(level > 0) || !tick.n) {
        return [{ type: "rest", offset: baseOffset, span }];
      }
      if (Array.isArray(tick.n)) {
        const pitches = tick.n.reduce((memo, tone) => {
          const pitch2 = this.pitch(tone);
          if (Number.isFinite(pitch2)) memo.push(pitch2);
          return memo;
        }, []);
        if (!pitches.length) return [{ type: "rest", offset: baseOffset, span }];
        return [{ type: "hit", pitches, level, offset: baseOffset, span }];
      }
      const pitch = this.pitch(tick.n);
      if (!Number.isFinite(pitch)) return [{ type: "rest", offset: baseOffset, span }];
      return [{ type: "hit", pitches: [pitch], level, offset: baseOffset, span }];
    };
    const activeNoteRefsByKey = /* @__PURE__ */ new Map();
    const nextKeys = /* @__PURE__ */ new Set();
    for (let i = 0; i < count; i += 1) {
      const beat = /* @__PURE__ */ new Map();
      this.data.forEach((track) => {
        const key = `${track[0]}/${track[1]}`;
        nextKeys.add(key);
        if (!beat.has(key)) beat.set(key, { drums: [], notes: [] });
        const slot = beat.get(key);
        const tick = typeof track[2][i] === "undefined" ? null : track[2][i];
        if (track[0] >= 2e3) {
          const events = collectDrumEvents(tick);
          events.forEach(([level, offset, span]) => {
            slot.drums.push([track[0] - 2e3, level, offset, span]);
          });
        } else {
          let activeRefs = activeNoteRefsByKey.get(key) || [];
          const events = collectNoteTokens(tick);
          events.forEach((event) => {
            if (event.type === "rest") {
              activeRefs = [];
              return;
            }
            if (event.type === "hold") {
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
      }
      this.trackNodes.delete(key);
    });
    nextKeys.forEach((key) => this.getTrackNodes(key));
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
  setArrangementLoopRange(range) {
    if (!range || !Number.isFinite(range.start) || !Number.isFinite(range.end)) {
      this.arrangementLoopRange = null;
      return;
    }
    const start = Math.max(0, Math.floor(range.start));
    const end = Math.max(start, Math.floor(range.end));
    this.arrangementLoopRange = { start, end };
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
    if (!this.beats.length || typeof this.beatIndex !== "number" || this.beatIndex >= this.beats.length) {
      this.beatIndex = 0;
    }
  }
  startPlayLoop(beats, bpm, density, fromBeat) {
    if (!beats || !beats.length) {
      this.loopStarted = false;
      return;
    }
    this.loopStarted = true;
    const wholeNoteDuration = 4 * 60 / bpm;
    const range = this.arrangementLoopRange;
    const hasRange = Boolean(
      range && beats.length > 0 && Number.isFinite(range.start) && Number.isFinite(range.end)
    );
    const rangeStart = hasRange ? Math.max(0, Math.min(beats.length - 1, range.start)) : 0;
    const rangeEnd = hasRange ? Math.max(rangeStart, Math.min(beats.length - 1, range.end)) : beats.length - 1;
    this.beatIndex = fromBeat < beats.length ? fromBeat : 0;
    if (hasRange && (this.beatIndex < rangeStart || this.beatIndex > rangeEnd)) {
      this.beatIndex = rangeStart;
    }
    this.playBeatAt(this.contextTime(), beats[this.beatIndex], bpm);
    let nextLoopTime = this.contextTime() + density * wholeNoteDuration;
    this.loopIntervalID = setInterval(() => {
      while (this.contextTime() >= nextLoopTime) {
        let nextBeatIndex = this.beatIndex + 1;
        if (hasRange && nextBeatIndex > rangeEnd) {
          nextBeatIndex = rangeStart;
        } else if (nextBeatIndex >= beats.length) {
          if (!this.songLoop) {
            this.stopPlayLoop();
            if (typeof this.onPlaybackEnd === "function") this.onPlaybackEnd();
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
        lpf: 2e4,
        hpf: 20,
        lpfQ: 1,
        hpfQ: 0.7,
        epicenterOn: false,
        epicenterFreq: 90,
        epicenterDrive: 4,
        epicenterBlend: 0.3,
        fallbackWave: "auto"
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
    hpf.type = "highpass";
    lpf.type = "lowpass";
    hpf.frequency.value = 20;
    lpf.frequency.value = 2e4;
    hpf.Q.value = 0.7;
    lpf.Q.value = 1;
    dry.gain.value = 1;
    reverbSend.gain.value = 0;
    delaySend.gain.value = 0;
    subInput.type = "bandpass";
    subInput.frequency.value = 90;
    subInput.Q.value = 0.8;
    subShaper.curve = makeExciterCurve(4);
    subShaper.oversample = "4x";
    subCleanup.type = "lowpass";
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
      subBlend
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
    state.lpf = clamp(freqHz, 20, 2e4);
    this.applyTrackState(key);
  }
  setHPF(key, freqHz) {
    const state = this.getTrackState(key);
    state.hpf = clamp(freqHz, 20, 2e4);
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
    this.masterLPF.frequency.setTargetAtTime(clamp(freqHz, 20, 2e4), now, 0.01);
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
  setFallbackWave(key, value) {
    const state = this.getTrackState(key);
    state.fallbackWave = normalizeFallbackWave(value);
  }
  normalizeLoadedSoundMap(raw) {
    const next = cloneSoundMap();
    if (!raw || typeof raw !== "object") return next;
    if (raw.drums && typeof raw.drums === "object") {
      Object.entries(raw.drums).forEach(([id, value]) => {
        const key = normalizeDrumChannelKey(id);
        if (!key) return;
        const row = value && typeof value === "object" ? value : { kind: value };
        const prev = next.drums[key] || {};
        next.drums[key] = {
          ...prev,
          ...row,
          kind: normalizeDrumKind(row.kind || prev.kind)
        };
      });
    }
    if (raw.instruments && typeof raw.instruments === "object") {
      Object.entries(raw.instruments).forEach(([id, value]) => {
        const key = String(parseInt(id, 10));
        if (!key || key === "NaN") return;
        const row = value && typeof value === "object" ? value : {};
        const prev = next.instruments[key] || {};
        next.instruments[key] = {
          ...prev,
          ...row,
          fallbackWave: normalizeFallbackWave(row.fallbackWave || prev.fallbackWave)
        };
      });
    }
    if (raw.keywordHints && typeof raw.keywordHints === "object") {
      DRUM_KINDS.forEach((kind) => {
        const row = raw.keywordHints[kind];
        if (!Array.isArray(row)) return;
        next.keywordHints[kind] = row.map((item) => String(item || "").toLowerCase().trim()).filter(Boolean);
      });
    }
    if (raw.banks && typeof raw.banks === "object") {
      const banks = {};
      Object.entries(raw.banks).forEach(([name, value]) => {
        const bankName = String(name || "").toLowerCase().trim();
        if (!bankName || !value || typeof value !== "object") return;
        const aliasesSource = value.aliases && typeof value.aliases === "object" ? value.aliases : value;
        const aliases = normalizeChannelAliases(aliasesSource);
        banks[bankName] = {
          drums: aliases.drums,
          instruments: aliases.instruments
        };
      });
      next.banks = banks;
    }
    if (raw.aliases && typeof raw.aliases === "object") {
      next.aliases = normalizeChannelAliases(raw.aliases);
    }
    return next;
  }
  async loadSoundMap() {
    if (typeof fetch !== "function") return;
    for (let i = 0; i < SOUND_MAP_URL_CANDIDATES.length; i += 1) {
      const url = SOUND_MAP_URL_CANDIDATES[i];
      try {
        const response = await fetch(url, { cache: "no-store", credentials: "same-origin" });
        if (!response.ok) continue;
        const contentType = String(response.headers.get("content-type") || "").toLowerCase();
        if (contentType.includes("text/html")) continue;
        const loaded = await response.json();
        this.soundMap = this.normalizeLoadedSoundMap(loaded);
        return;
      } catch (e) {
      }
    }
  }
  getDrumProfile(instrument) {
    const id = Number.isFinite(instrument) ? instrument : 0;
    const key = `#${id + 2e3}`;
    return this.soundMap && this.soundMap.drums ? this.soundMap.drums[key] : null;
  }
  getInstrumentProfile(instrument) {
    const key = String(parseInt(instrument, 10));
    if (!this.soundMap || !this.soundMap.instruments || key === "NaN") return null;
    return this.soundMap.instruments[key] || null;
  }
  getChannelAliases() {
    if (!this.soundMap || !this.soundMap.aliases) return DEFAULT_CHANNEL_ALIASES;
    return this.soundMap.aliases;
  }
  getAliasBank(name) {
    const key = String(name || "").toLowerCase().trim();
    if (!key || !this.soundMap || !this.soundMap.banks) return null;
    return this.soundMap.banks[key] || null;
  }
  resolveChannelAliases(selection = {}) {
    let aliases = this.getChannelAliases();
    const allBank = this.getAliasBank(selection.bank);
    if (allBank) aliases = mergeChannelAliases(aliases, allBank);
    const drumsBank = this.getAliasBank(selection.drums);
    if (drumsBank) aliases = mergeChannelAliases(aliases, { drums: drumsBank.drums });
    const instrumentsBank = this.getAliasBank(selection.instruments);
    if (instrumentsBank) aliases = mergeChannelAliases(aliases, { instruments: instrumentsBank.instruments });
    return aliases;
  }
  applyMasterPreampState() {
    const now = this.audioContext.currentTime;
    const cutoffs = Array.isArray(this.masterPreampState.cutoffs) && this.masterPreampState.cutoffs.length ? this.masterPreampState.cutoffs : [100, 400, 1500, 6e3];
    this.masterPreampBypass.gain.setTargetAtTime(this.masterPreampState.enabled ? 0 : 1, now, 0.01);
    this.masterPreampInput.gain.setTargetAtTime(this.masterPreampState.enabled ? 1 : 0, now, 0.01);
    this.masterPreampHPF.frequency.setTargetAtTime(this.masterPreampState.hpf, now, 0.02);
    this.masterPreampLPF.frequency.setTargetAtTime(this.masterPreampState.lpf, now, 0.02);
    this.masterPreampHPF.Q.setTargetAtTime(this.masterPreampState.q, now, 0.02);
    this.masterPreampLPF.Q.setTargetAtTime(this.masterPreampState.q, now, 0.02);
    this.masterPreampBands.forEach((band, i) => {
      const sends = this.masterPreampState.bandSends[i] || { reverb: 0, delay: 0 };
      const low = i === 0 ? 20 : cutoffs[Math.min(i - 1, cutoffs.length - 1)];
      const high = i >= 4 ? 2e4 : cutoffs[Math.min(i, cutoffs.length - 1)];
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
    this.masterPreampState.cutoffs = (Array.isArray(cutoffs) ? cutoffs : []).map((v) => clamp(v, 20, 2e4)).sort((a, b) => a - b);
    this.applyMasterPreampState();
  }
  setMasterPreampHPF(freqHz) {
    this.masterPreampState.hpf = clamp(freqHz, 20, 2e4);
    this.applyMasterPreampState();
  }
  setMasterPreampLPF(freqHz) {
    this.masterPreampState.lpf = clamp(freqHz, 20, 2e4);
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
    return this.masterPreampBands.map((band) => {
      if (!band || !band.analyser || !band.vuData) return 0;
      band.analyser.getByteTimeDomainData(band.vuData);
      let sum = 0;
      for (let i = 0; i < band.vuData.length; i += 1) {
        sum += Math.abs((band.vuData[i] - 128) / 128);
      }
      return clamp(sum / band.vuData.length * 3.2, 0, 1);
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
    const whole = 4 * 60 / (this.bpm || 127);
    this.setDelaySeconds(whole * this.delayDivision);
  }
  loadPad(index, audioBuffer, label = "sample") {
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
    this.padReverbSends.forEach((node) => {
      node.gain.value = this.padMasterReverb;
    });
  }
  setPadsDelay(value) {
    this.padMasterDelay = clamp(value, 0, 1);
    this.padDelaySends.forEach((node) => {
      node.gain.value = this.padMasterDelay;
    });
  }
  getTrackKeys() {
    return [...this.trackNodes.keys()];
  }
  cancelQueue() {
    this.player.cancelQueue(this.audioContext);
  }
  isFontReady(variable) {
    const preset = window[variable];
    return Boolean(preset && Array.isArray(preset.zones) && preset.zones.length > 0);
  }
  getFontFilename(url) {
    if (!url || typeof url !== "string") return "";
    const clean = url.split("?")[0].split("#")[0];
    const parts = clean.split("/");
    return parts[parts.length - 1] || "";
  }
  getFontSourceCandidates(info) {
    const out = [];
    const seen = /* @__PURE__ */ new Set();
    const push = (url) => {
      if (!url || seen.has(url)) return;
      seen.add(url);
      out.push(url);
    };
    push(info && info.url ? String(info.url) : "");
    const filename = this.getFontFilename(info && info.url);
    if (filename) {
      push(`${LOCAL_FONT_BASE}/${filename}`);
      push(`./webaudiofont/sound/${filename}`);
    }
    return out;
  }
  isCrossOriginUrl(url) {
    try {
      return new URL(url, window.location.href).origin !== window.location.origin;
    } catch (e) {
      return false;
    }
  }
  isHtmlLikeResponse(contentType, source) {
    const type = String(contentType || "").toLowerCase();
    if (type.includes("text/html") || type.includes("application/xhtml+xml")) return true;
    const head = String(source || "").trimStart().slice(0, 160).toLowerCase();
    return head.startsWith("<!doctype html") || head.startsWith("<html") || head.startsWith("<head") || head.startsWith("<body");
  }
  executeFontScriptSource(url, source, variable) {
    if (typeof document === "undefined") throw new Error("Missing document for script execution");
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.text = `${source}
//# sourceURL=${url}`;
    document.head.appendChild(script);
    script.remove();
    if (this.isFontReady(variable)) return true;
    throw new Error(`Loaded ${url}, but missing preset '${variable}'`);
  }
  loadFontScriptTag(url, variable, timeoutMs = FONT_LOAD_TIMEOUT_MS) {
    if (this.isFontReady(variable)) return Promise.resolve(true);
    if (typeof document === "undefined") return Promise.reject(new Error("Missing document for script loading"));
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      let done = false;
      const finish = (ok, error) => {
        if (done) return;
        done = true;
        clearTimeout(timeoutId);
        script.onload = null;
        script.onerror = null;
        if (ok) resolve(true);
        else reject(error || new Error(`Failed to load ${url}`));
      };
      const timeoutId = setTimeout(() => {
        finish(false, new Error(`Timed out loading ${url}`));
      }, timeoutMs);
      script.async = true;
      script.src = url;
      script.crossOrigin = "anonymous";
      script.onload = () => {
        if (this.isFontReady(variable)) {
          finish(true);
          return;
        }
        finish(false, new Error(`Loaded ${url}, but missing preset '${variable}'`));
      };
      script.onerror = () => {
        finish(false, new Error(`Network error loading ${url}`));
      };
      document.head.appendChild(script);
    });
  }
  async loadFontScript(url, variable, timeoutMs = FONT_LOAD_TIMEOUT_MS) {
    if (this.isFontReady(variable)) return true;
    if (typeof fetch !== "function") return this.loadFontScriptTag(url, variable, timeoutMs);
    const controller = typeof AbortController === "function" ? new AbortController() : null;
    let timeoutId = null;
    if (controller) {
      timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    }
    try {
      const response = await fetch(url, {
        cache: "no-store",
        credentials: "same-origin",
        signal: controller ? controller.signal : void 0
      });
      if (!response.ok) throw new Error(`HTTP ${response.status} loading ${url}`);
      const source = await response.text();
      if (this.isHtmlLikeResponse(response.headers.get("content-type"), source)) {
        throw new Error(`Received HTML response for ${url}`);
      }
      return this.executeFontScriptSource(url, source, variable);
    } catch (error) {
      const message = String(error && error.message || error || "").toLowerCase();
      const corsOrNetwork = error && error.name === "TypeError" && (message.includes("fetch") || message.includes("network") || message.includes("cors"));
      const aborted = error && error.name === "AbortError";
      if (aborted) throw new Error(`Timed out loading ${url}`);
      if (corsOrNetwork && this.isCrossOriginUrl(url)) {
        return this.loadFontScriptTag(url, variable, timeoutMs);
      }
      throw error;
    } finally {
      if (timeoutId) clearTimeout(timeoutId);
    }
  }
  async loadFontWithFallback(info) {
    const candidates = this.getFontSourceCandidates(info);
    let lastError = null;
    for (let i = 0; i < candidates.length; i += 1) {
      const url = candidates[i];
      try {
        await this.loadFontScript(url, info.variable);
        if (this.isFontReady(info.variable)) return true;
      } catch (error) {
        lastError = error;
      }
    }
    if (lastError) {
      console.warn(`Preset load failed for '${info.variable}', enabling synth fallback.`, lastError.message || lastError);
    }
    return false;
  }
  cacheInstrument(info) {
    if (!info || !info.variable) return;
    if (this.isFontReady(info.variable)) {
      this.fontLoadStatus.set(info.variable, "ready");
      return;
    }
    if (this.fontLoadPromises.has(info.variable)) return;
    this.fontLoadStatus.set(info.variable, "loading");
    const deferred = this.loadFontWithFallback(info).then((ok) => {
      this.fontLoadStatus.set(info.variable, ok ? "ready" : "failed");
    }).catch((error) => {
      this.fontLoadStatus.set(info.variable, "failed");
      console.warn(`Preset load threw for '${info.variable}', using synth fallback.`, error && error.message ? error.message : error);
    }).finally(() => {
      this.fontLoadPromises.delete(info.variable);
    });
    this.fontLoadPromises.set(info.variable, deferred);
  }
  playDrum(when, drum, nodes) {
    const [instrument, level] = drum;
    const info = this.player.loader.drumInfo(instrument);
    if (!this.isFontReady(info.variable)) {
      this.cacheInstrument(info);
      this.queueSynthDrumToTrackNodes(when, instrument, level, nodes);
      return;
    }
    const preset = window[info.variable];
    const pitch = preset.zones[0].keyRangeLow;
    const gain = 1 / 127 * level;
    if (level > 0) this.queueToTrackNodes(preset, when, pitch, 1 / 64, gain, nodes);
  }
  queueToTrackNodes(font, when, pitch, duration, gain, nodes) {
    const startAt = Math.max(when, this.audioContext.currentTime + 1e-3);
    if (Array.isArray(pitch)) {
      const tones = pitch.filter(Number.isFinite);
      if (!tones.length) return;
      this.player.queueChord(this.audioContext, nodes.input, font, startAt, tones, duration, gain);
      return;
    }
    this.player.queueWaveTable(this.audioContext, nodes.input, font, startAt, pitch, duration, gain);
  }
  isBassFallbackVoice(instrument, tones) {
    const program = Number.isFinite(instrument) ? instrument : -1;
    const profile = this.getInstrumentProfile(program);
    if (profile && String(profile.family || "").toLowerCase() === "bass") return true;
    if (program >= 32 && program <= 39) return true;
    if (!Array.isArray(tones) || !tones.length) return false;
    const maxPitch = Math.max(...tones);
    return Number.isFinite(maxPitch) && maxPitch <= 52;
  }
  getSynthFallbackWaveform(instrument, pitch, bassLike = false, fallbackWave = "auto") {
    const explicit = normalizeFallbackWave(fallbackWave);
    if (explicit !== "auto") return explicit;
    const profile = this.getInstrumentProfile(instrument);
    const profileWave = normalizeFallbackWave(profile && profile.fallbackWave ? profile.fallbackWave : "auto");
    if (profileWave !== "auto") return profileWave;
    if (!bassLike) return "triangle";
    if (!Number.isFinite(pitch) || pitch <= 45) return "square";
    return "sawtooth";
  }
  queueSynthNoteToTrackNodes(when, instrument, pitch, duration, level, nodes, fallbackWave = "auto") {
    if (!this.synthFallbackEnabled) return;
    const tones = Array.isArray(pitch) ? pitch.filter(Number.isFinite) : [pitch].filter(Number.isFinite);
    if (!tones.length) return;
    const velocity = normalizeVelocity(level);
    if (velocity <= 0) return;
    const unit = clamp((0.04 + velocity * this.synthVoiceGain) / Math.sqrt(tones.length), 0.02, 0.42);
    const bassLike = this.isBassFallbackVoice(instrument, tones);
    tones.forEach((tone) => {
      const waveform = this.getSynthFallbackWaveform(instrument, tone, bassLike, fallbackWave);
      this.queueSynthToneToTrackNodes(when, tone, duration, unit, nodes, waveform);
    });
  }
  queueSynthToneToTrackNodes(when, pitch, duration, gain, nodes, waveform = "triangle") {
    const ctx = this.audioContext;
    const startAt = Math.max(when, ctx.currentTime + 1e-3);
    const freq = midiToFrequency(pitch);
    if (!Number.isFinite(freq)) return;
    const osc = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const amp = ctx.createGain();
    const hold = clamp(duration, 0.03, 1.5);
    const peak = clamp(gain, 1e-3, 0.35);
    const wave = waveform === "square" || waveform === "sawtooth" ? waveform : "triangle";
    osc.type = wave;
    osc.frequency.setValueAtTime(freq, startAt);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(clamp(freq * (wave === "triangle" ? 5 : 3.2), 180, wave === "triangle" ? 9800 : 4200), startAt);
    filter.Q.value = 0.7;
    amp.gain.setValueAtTime(1e-4, startAt);
    amp.gain.exponentialRampToValueAtTime(peak, startAt + 0.012);
    amp.gain.exponentialRampToValueAtTime(1e-4, startAt + hold + 0.06);
    osc.connect(filter);
    filter.connect(amp);
    amp.connect(nodes.input);
    osc.start(startAt);
    osc.stop(startAt + hold + 0.08);
  }
  resolveDrumFallbackType(instrument) {
    const n = Number.isFinite(instrument) ? instrument : 0;
    const profile = this.getDrumProfile(n);
    if (profile && profile.kind) return normalizeDrumKind(profile.kind);
    let title = "";
    try {
      const info = this.player && this.player.loader ? this.player.loader.drumInfo(n) : null;
      title = String(info && info.title || "").toLowerCase();
    } catch (e) {
      title = "";
    }
    const hints = this.soundMap && this.soundMap.keywordHints ? this.soundMap.keywordHints : DEFAULT_SOUND_MAP.keywordHints;
    for (let i = 0; i < DRUM_KINDS.length; i += 1) {
      const kind = DRUM_KINDS[i];
      const words = Array.isArray(hints[kind]) ? hints[kind] : [];
      if (words.some((word) => word && title.includes(word))) return kind;
    }
    if (n === 1 || n === 36) return "kick";
    if (n === 4 || n === 37 || n === 38 || n === 39 || n === 40) return "snare";
    if (n === 35 || n === 42 || n === 44 || n === 46) return "hat";
    return "perc";
  }
  queueSynthDrumToTrackNodes(when, instrument, level, nodes) {
    if (!this.synthFallbackEnabled || !(level > 0)) return;
    const ctx = this.audioContext;
    const startAt = Math.max(when, ctx.currentTime + 1e-3);
    const kind = this.resolveDrumFallbackType(instrument);
    const isKick = kind === "kick";
    const peak = clamp(level / 127 * (isKick ? 0.36 : 0.24), 0.01, 0.45);
    if (isKick) {
      const osc = ctx.createOscillator();
      const amp2 = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(140, startAt);
      osc.frequency.exponentialRampToValueAtTime(48, startAt + 0.14);
      amp2.gain.setValueAtTime(1e-4, startAt);
      amp2.gain.exponentialRampToValueAtTime(peak, startAt + 5e-3);
      amp2.gain.exponentialRampToValueAtTime(1e-4, startAt + 0.16);
      osc.connect(amp2);
      amp2.connect(nodes.input);
      osc.start(startAt);
      osc.stop(startAt + 0.19);
      return;
    }
    const noise = ctx.createBufferSource();
    const filter = ctx.createBiquadFilter();
    const amp = ctx.createGain();
    noise.buffer = this.synthNoiseBuffer || this.createNoiseBuffer(0.25);
    if (kind === "hat") {
      filter.type = "highpass";
      filter.frequency.setValueAtTime(5200 + instrument % 5 * 280, startAt);
      filter.Q.value = 0.6;
    } else {
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(kind === "snare" ? 1900 : 1300 + instrument % 7 * 180, startAt);
      filter.Q.value = kind === "snare" ? 0.8 : 0.9;
    }
    amp.gain.setValueAtTime(1e-4, startAt);
    amp.gain.exponentialRampToValueAtTime(peak, startAt + 2e-3);
    amp.gain.exponentialRampToValueAtTime(1e-4, startAt + (kind === "hat" ? 0.07 : 0.12));
    noise.connect(filter);
    filter.connect(amp);
    amp.connect(nodes.input);
    noise.start(startAt);
    noise.stop(startAt + (kind === "hat" ? 0.09 : 0.16));
  }
  playBeatAt(when, beat, bpm) {
    if (!beat) return;
    const N = 4 * 60 / bpm;
    const beatDuration = this.fraq * N;
    const hasSolo = [...this.trackState.values()].some((item) => item.solo);
    beat.forEach((slot, key) => {
      const state = this.getTrackState(key);
      if (state.muted) return;
      if (hasSolo && !state.solo) return;
      const nodes = this.getTrackNodes(key);
      let touched = false;
      for (let i = 0; i < slot.drums.length; i += 1) {
        const drum = slot.drums[i];
        const subOffsetRatio = typeof drum[2] === "number" ? drum[2] : 0;
        this.playDrum(when + subOffsetRatio * beatDuration, drum, nodes);
        touched = true;
      }
      slot.notes.forEach((note) => {
        const [instrument, pitches, duration, level, subOffsetRatio = 0, subSpan = 1] = note;
        if (!Number.isFinite(level) || !Number.isFinite(duration) || !Number.isFinite(subSpan)) return;
        const info = this.player.loader.instrumentInfo(instrument);
        const startAt = when + subOffsetRatio * beatDuration;
        const basePulseDuration = duration * N;
        const baseDuration = basePulseDuration * subSpan;
        const legatoComp = subSpan > 1 ? Math.min(beatDuration, baseDuration * 0.5) : 0;
        const actualDuration = baseDuration + legatoComp;
        if (!this.isFontReady(info.variable)) {
          this.cacheInstrument(info);
          this.queueSynthNoteToTrackNodes(startAt, instrument, pitches, actualDuration, level, nodes, state.fallbackWave);
          touched = true;
          return;
        }
        const preset = window[info.variable];
        this.queueToTrackNodes(
          preset,
          startAt,
          pitches,
          actualDuration,
          1 / 127 * level,
          nodes
        );
        touched = true;
      });
      if (touched && typeof this.onBeat === "function") {
        this.onBeat(key, when, this.beatIndex);
      }
    });
  }
}
export {
  Player as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgbWlkaVdyaXRlciBmcm9tICdtaWRpLXdyaXRlci1qcyc7XG5pbXBvcnQgeyBERUZBVUxUX0NIQU5ORUxfQUxJQVNFUywgbm9ybWFsaXplQ2hhbm5lbEFsaWFzZXMgfSBmcm9tICcuLi9saWIvY2hhbm5lbHMuanMnO1xuXG5jb25zdCB7IFV0aWxzIH0gPSBtaWRpV3JpdGVyO1xuXG5jb25zdCBjbGFtcCA9ICh2YWx1ZSwgbWluLCBtYXgpID0+IE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2YWx1ZSkpO1xuY29uc3QgRk9OVF9MT0FEX1RJTUVPVVRfTVMgPSA0NTAwO1xuY29uc3QgTE9DQUxfRk9OVF9CQVNFID0gJy93ZWJhdWRpb2ZvbnQvc291bmQnO1xuY29uc3QgbWlkaVRvRnJlcXVlbmN5ID0gcGl0Y2ggPT4gNDQwICogKDIgKiogKChwaXRjaCAtIDY5KSAvIDEyKSk7XG5jb25zdCBTT1VORF9NQVBfVVJMX0NBTkRJREFURVMgPSBbJy9zb3VuZC1tYXAuanNvbicsICcuL3NvdW5kLW1hcC5qc29uJ107XG5jb25zdCBEUlVNX0tJTkRTID0gWydraWNrJywgJ3NuYXJlJywgJ2hhdCcsICdwZXJjJ107XG5jb25zdCBERUZBVUxUX1NPVU5EX01BUCA9IHtcbiAgZHJ1bXM6IHtcbiAgICAnIzIwMDEnOiB7IGtpbmQ6ICdraWNrJywgbGFiZWw6ICdLaWNrJyB9LFxuICAgICcjMjAwNCc6IHsga2luZDogJ3NuYXJlJywgbGFiZWw6ICdTbmFyZScgfSxcbiAgICAnIzIwMjgnOiB7IGtpbmQ6ICdzbmFyZScsIGxhYmVsOiAnU25hcmUvQ2xhcCcgfSxcbiAgICAnIzIwMzUnOiB7IGtpbmQ6ICdoYXQnLCBsYWJlbDogJ0hpLUhhdCcgfSxcbiAgICAnIzIwODEnOiB7IGtpbmQ6ICdoYXQnLCBsYWJlbDogJ1JpZGUvSGktSGF0JyB9LFxuICAgICcjMjEyMyc6IHsga2luZDogJ3BlcmMnLCBsYWJlbDogJ1BlcmN1c3Npb24nIH0sXG4gIH0sXG4gIGluc3RydW1lbnRzOiB7XG4gICAgJzM5Myc6IHsgZmFtaWx5OiAnYmFzcycsIGZhbGxiYWNrV2F2ZTogJ3NxdWFyZScsIGxhYmVsOiAnQmFzcycgfSxcbiAgICAnNTE4JzogeyBmYW1pbHk6ICdsZWFkJywgZmFsbGJhY2tXYXZlOiAndHJpYW5nbGUnLCBsYWJlbDogJ0xlYWQnIH0sXG4gIH0sXG4gIGtleXdvcmRIaW50czoge1xuICAgIGtpY2s6IFsna2ljaycsICdiYXNzIGRydW0nLCAnYmQnXSxcbiAgICBzbmFyZTogWydzbmFyZScsICdyaW0nLCAnY2xhcCddLFxuICAgIGhhdDogWydoYXQnLCAnaGktaGF0JywgJ2hpaGF0JywgJ2N5bWJhbCcsICdyaWRlJywgJ2NyYXNoJywgJ3NoYWtlcicsICd0YW1iJ10sXG4gICAgcGVyYzogWydwZXJjJywgJ3RvbScsICdjb25nYScsICdib25nbycsICdjb3diZWxsJywgJ2NsYXZlJ10sXG4gIH0sXG4gIGJhbmtzOiB7XG4gICAgZGVmYXVsdDogeyBhbGlhc2VzOiB7fSB9LFxuICAgIHRyODA4OiB7XG4gICAgICBhbGlhc2VzOiB7XG4gICAgICAgIGRydW1zOiB7XG4gICAgICAgICAgYmQ6IDIwMDEsXG4gICAgICAgICAga2ljazogMjAwMSxcbiAgICAgICAgICBzZDogMjAwNCxcbiAgICAgICAgICBzbjogMjAwNCxcbiAgICAgICAgICBzbmFyZTogMjAwNCxcbiAgICAgICAgICBjcDogMjAyOCxcbiAgICAgICAgICBjbGFwOiAyMDI4LFxuICAgICAgICAgIGhoOiAyMDM1LFxuICAgICAgICAgIGhhdDogMjAzNSxcbiAgICAgICAgICBvaDogMjA4MSxcbiAgICAgICAgICByaWRlOiAyMDgxLFxuICAgICAgICAgIHBlcmM6IDIxMjMsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgZ206IHtcbiAgICAgIGFsaWFzZXM6IHtcbiAgICAgICAgaW5zdHJ1bWVudHM6IHtcbiAgICAgICAgICBwaWFubzogMCxcbiAgICAgICAgICBlcGlhbm86IDQsXG4gICAgICAgICAgb3JnYW46IDE2LFxuICAgICAgICAgIGd1aXRhcjogMjQsXG4gICAgICAgICAgYmFzczogMzMsXG4gICAgICAgICAgc3RyaW5nczogNDgsXG4gICAgICAgICAgYnJhc3M6IDYxLFxuICAgICAgICAgIGNob2lyOiA1MixcbiAgICAgICAgICBsZWFkOiA4MCxcbiAgICAgICAgICBwYWQ6IDg4LFxuICAgICAgICAgIGZ4OiA5OCxcbiAgICAgICAgICBzeW50aDogOTQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGFsaWFzZXM6IERFRkFVTFRfQ0hBTk5FTF9BTElBU0VTLFxufTtcbmNvbnN0IGNsb25lU291bmRNYXAgPSAoKSA9PiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KERFRkFVTFRfU09VTkRfTUFQKSk7XG5jb25zdCBub3JtYWxpemVEcnVtS2luZCA9ICh2YWx1ZSkgPT4ge1xuICBjb25zdCBraW5kID0gU3RyaW5nKHZhbHVlIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gRFJVTV9LSU5EUy5pbmNsdWRlcyhraW5kKSA/IGtpbmQgOiAncGVyYyc7XG59O1xuY29uc3Qgbm9ybWFsaXplRHJ1bUNoYW5uZWxLZXkgPSAodmFsdWUpID0+IHtcbiAgY29uc3QgcmF3ID0gU3RyaW5nKHZhbHVlIHx8ICcnKS50cmltKCk7XG4gIGlmICghcmF3KSByZXR1cm4gJyc7XG4gIGlmIChyYXcuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgY29uc3QgbiA9IHBhcnNlSW50KHJhdy5zbGljZSgxKSwgMTApO1xuICAgIHJldHVybiBOdW1iZXIuaXNGaW5pdGUobikgPyBgIyR7bn1gIDogJyc7XG4gIH1cbiAgY29uc3QgbiA9IHBhcnNlSW50KHJhdywgMTApO1xuICBpZiAoIU51bWJlci5pc0Zpbml0ZShuKSkgcmV0dXJuICcnO1xuICBpZiAobiA+PSAyMDAwKSByZXR1cm4gYCMke259YDtcbiAgcmV0dXJuIGAjJHtuICsgMjAwMH1gO1xufTtcbmNvbnN0IG1lcmdlQ2hhbm5lbEFsaWFzZXMgPSAoYmFzZSwgb3ZlcnJpZGVzKSA9PiBub3JtYWxpemVDaGFubmVsQWxpYXNlcyh7XG4gIGRydW1zOiB7XG4gICAgLi4uKChiYXNlICYmIGJhc2UuZHJ1bXMpIHx8IHt9KSxcbiAgICAuLi4oKG92ZXJyaWRlcyAmJiBvdmVycmlkZXMuZHJ1bXMpIHx8IHt9KSxcbiAgfSxcbiAgaW5zdHJ1bWVudHM6IHtcbiAgICAuLi4oKGJhc2UgJiYgYmFzZS5pbnN0cnVtZW50cykgfHwge30pLFxuICAgIC4uLigob3ZlcnJpZGVzICYmIG92ZXJyaWRlcy5pbnN0cnVtZW50cykgfHwge30pLFxuICB9LFxufSk7XG5jb25zdCBub3JtYWxpemVGYWxsYmFja1dhdmUgPSAodmFsdWUpID0+IHtcbiAgY29uc3Qgd2F2ZSA9IFN0cmluZyh2YWx1ZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHdhdmUgPT09ICd0cmlhbmdsZScgfHwgd2F2ZSA9PT0gJ3NxdWFyZScgfHwgd2F2ZSA9PT0gJ3Nhd3Rvb3RoJykgcmV0dXJuIHdhdmU7XG4gIHJldHVybiAnYXV0byc7XG59O1xuY29uc3Qgbm9ybWFsaXplVmVsb2NpdHkgPSAobGV2ZWwpID0+IHtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobGV2ZWwpIHx8IGxldmVsIDw9IDApIHJldHVybiAwO1xuICBpZiAobGV2ZWwgPD0gMSkgcmV0dXJuIGNsYW1wKGxldmVsLCAwLCAxKTtcbiAgaWYgKGxldmVsIDw9IDE2KSByZXR1cm4gY2xhbXAobGV2ZWwgLyAxNiwgMCwgMSk7XG4gIHJldHVybiBjbGFtcChsZXZlbCAvIDEyNywgMCwgMSk7XG59O1xuXG5mdW5jdGlvbiBtYWtlRXhjaXRlckN1cnZlKGRyaXZlID0gNCwgc2FtcGxlcyA9IDUxMikge1xuICBjb25zdCBjdXJ2ZSA9IG5ldyBGbG9hdDMyQXJyYXkoc2FtcGxlcyk7XG4gIGNvbnN0IG5vcm0gPSBNYXRoLnRhbmgoZHJpdmUpIHx8IDE7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtcGxlczsgaSArPSAxKSB7XG4gICAgY29uc3QgeCA9ICgoaSAqIDIpIC8gKHNhbXBsZXMgLSAxKSkgLSAxO1xuICAgIGN1cnZlW2ldID0gTWF0aC50YW5oKGRyaXZlICogeCkgLyBub3JtO1xuICB9XG4gIHJldHVybiBjdXJ2ZTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB0aGlzLmJlYXRzID0gW107XG4gICAgdGhpcy5iYXJzID0gMTY7XG4gICAgdGhpcy5icG0gPSAxMjc7XG4gICAgdGhpcy5mcmFxID0gMSAvIHRoaXMuYmFycztcbiAgICB0aGlzLnRyYWNrTm9kZXMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy50cmFja1N0YXRlID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuZGVsYXlEaXZpc2lvbiA9IDMgLyA4O1xuICAgIHRoaXMub25CZWF0ID0gbnVsbDtcbiAgICB0aGlzLm9uUGxheWJhY2tFbmQgPSBudWxsO1xuICAgIHRoaXMuYmVhdEluZGV4ID0gMDtcbiAgICB0aGlzLmxvb3BTdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5zb25nTG9vcCA9IGZhbHNlO1xuICAgIHRoaXMuYXJyYW5nZW1lbnRMb29wUmFuZ2UgPSBudWxsO1xuICAgIHRoaXMuZGVmYXVsdFBhZEZpbGVzID0gW1xuICAgICAgJ2NvaW5fMS53YXYnLFxuICAgICAgJ2NvaW5fMi53YXYnLFxuICAgICAgJ2V4cGxvc2lvbl8xLndhdicsXG4gICAgICAnanVtcF8xLndhdicsXG4gICAgICAnanVtcF8yLndhdicsXG4gICAgICAnanVtcF8zLndhdicsXG4gICAgICAncG93ZXJ1cF8xLndhdicsXG4gICAgICAncG93ZXJ1cF8yLndhdicsXG4gICAgICAncG93ZXJ1cF8zLndhdicsXG4gICAgICAncG93ZXJ1cF80LndhdicsXG4gICAgXTtcbiAgICB0aGlzLnBhZHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiB0aGlzLmRlZmF1bHRQYWRGaWxlcy5sZW5ndGggfSwgKF8sIGkpID0+ICh7XG4gICAgICBidWZmZXI6IG51bGwsXG4gICAgICBsYWJlbDogdGhpcy5kZWZhdWx0UGFkRmlsZXNbaV0ucmVwbGFjZSgvXFwuW14uXSskLywgJycpLFxuICAgICAgbG9vcGluZzogZmFsc2UsXG4gICAgfSkpO1xuICAgIHRoaXMucGFkU291cmNlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMucGFkcy5sZW5ndGggfSwgKCkgPT4gbnVsbCk7XG4gICAgdGhpcy5wYWROYW1lcyA9IFtcbiAgICAgICd2aW55bCBub2lzZScsXG4gICAgICAnYmFzcyB0aHVkJyxcbiAgICAgICdnb25nIGhpdCcsXG4gICAgICAnc3RhYicsXG4gICAgICAnc25hcmUgbm9pc2UnLFxuICAgICAgJ3dvb2QgY2xpY2snLFxuICAgICAgJ3Jpc2VyJyxcbiAgICAgICdzdWIgZHJvcCcsXG4gICAgICAnY2xhcCBidXJzdCcsXG4gICAgICAnbm9pc2Ugc3dlZXAnLFxuICAgIF07XG4gICAgdGhpcy5wZW5kaW5nTWlkaVB1bHNlID0gbnVsbDtcbiAgICB0aGlzLmZvbnRMb2FkU3RhdHVzID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuZm9udExvYWRQcm9taXNlcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnNvdW5kTWFwID0gY2xvbmVTb3VuZE1hcCgpO1xuICAgIHRoaXMuc3ludGhGYWxsYmFja0VuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuc3ludGhWb2ljZUdhaW4gPSAwLjMyO1xuICAgIHRoaXMuaW5pdEF1ZGlvKCk7XG4gICAgdGhpcy5sb2FkU291bmRNYXAoKTtcbiAgfVxuXG4gIGluaXRBdWRpbygpIHtcbiAgICBjb25zdCBBdWRpb0NvbnRleHRGdW5jID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgIHRoaXMuYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dEZ1bmMoKTtcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gdGhpcy5hdWRpb0NvbnRleHQuZGVzdGluYXRpb247XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgV2ViQXVkaW9Gb250UGxheWVyKCk7XG4gICAgdGhpcy5lcXVhbGl6ZXIgPSB0aGlzLnBsYXllci5jcmVhdGVDaGFubmVsKHRoaXMuYXVkaW9Db250ZXh0KTtcbiAgICB0aGlzLm1hc3RlckdhaW4gPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5tYXN0ZXJQcmVhbXBCeXBhc3MgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5tYXN0ZXJMUEYgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICB0aGlzLmVjaG8gPSB0aGlzLnBsYXllci5jcmVhdGVSZXZlcmJlcmF0b3IodGhpcy5hdWRpb0NvbnRleHQpO1xuICAgIHRoaXMuZGVsYXlJbnB1dCA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLnZpc3VhbGl6ZXIgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVBbmFseXNlcigpO1xuICAgIHRoaXMubWFzdGVyTFBGLnR5cGUgPSAnbG93cGFzcyc7XG4gICAgdGhpcy5tYXN0ZXJMUEYuZnJlcXVlbmN5LnZhbHVlID0gMjAwMDA7XG4gICAgdGhpcy5tYXN0ZXJMUEYuUS52YWx1ZSA9IDAuNztcbiAgICB0aGlzLm1hc3RlckdhaW4uZ2Fpbi52YWx1ZSA9IDE7XG4gICAgdGhpcy5kZWxheUlucHV0LmdhaW4udmFsdWUgPSAxO1xuICAgIHRoaXMudmlzdWFsaXplci5mZnRTaXplID0gMjU2O1xuICAgIHRoaXMudmlzdWFsaXplci5zbW9vdGhpbmdUaW1lQ29uc3RhbnQgPSAwLjgyO1xuXG4gICAgdGhpcy5lcXVhbGl6ZXIub3V0cHV0LmNvbm5lY3QodGhpcy5tYXN0ZXJHYWluKTtcbiAgICB0aGlzLmVjaG8ub3V0cHV0LmNvbm5lY3QodGhpcy5tYXN0ZXJHYWluKTtcblxuICAgIHRoaXMuaW5pdE1hc3RlclByZWFtcCgpO1xuICAgIHRoaXMubWFzdGVyR2Fpbi5jb25uZWN0KHRoaXMubWFzdGVyUHJlYW1wSW5wdXQpO1xuICAgIHRoaXMubWFzdGVyR2Fpbi5jb25uZWN0KHRoaXMubWFzdGVyUHJlYW1wQnlwYXNzKTtcbiAgICB0aGlzLm1hc3RlclByZWFtcEJ5cGFzcy5jb25uZWN0KHRoaXMubWFzdGVyTFBGKTtcbiAgICB0aGlzLm1hc3RlckxQRi5jb25uZWN0KHRoaXMuZGVzdGluYXRpb24pO1xuICAgIHRoaXMubWFzdGVyR2Fpbi5jb25uZWN0KHRoaXMudmlzdWFsaXplcik7XG5cbiAgICB0aGlzLmluaXREZWxheUJ1cygpO1xuICAgIHRoaXMuaW5pdFBhZHMoKTtcbiAgICB0aGlzLnN5bnRoTm9pc2VCdWZmZXIgPSB0aGlzLmNyZWF0ZU5vaXNlQnVmZmVyKDAuMjUpO1xuICAgIHRoaXMudXBkYXRlRGVsYXlUaW1lKCk7XG4gIH1cblxuICBpbml0TWFzdGVyUHJlYW1wKCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuYXVkaW9Db250ZXh0O1xuICAgIHRoaXMubWFzdGVyUHJlYW1wU3RhdGUgPSB7XG4gICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIGN1dG9mZnM6IFsxMDAsIDQwMCwgMTUwMCwgNjAwMF0sXG4gICAgICBocGY6IDIwLFxuICAgICAgbHBmOiAyMDAwMCxcbiAgICAgIHE6IDAuNzA3LFxuICAgICAgYmFuZFNlbmRzOiBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sICgpID0+ICh7IHJldmVyYjogMC4zNSwgZGVsYXk6IDAuMjUgfSkpLFxuICAgIH07XG4gICAgdGhpcy5tYXN0ZXJQcmVhbXBCeXBhc3MuZ2Fpbi52YWx1ZSA9IDE7XG4gICAgdGhpcy5tYXN0ZXJQcmVhbXBJbnB1dCA9IGN0eC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5tYXN0ZXJQcmVhbXBPdXQgPSBjdHguY3JlYXRlR2FpbigpO1xuICAgIHRoaXMubWFzdGVyUHJlYW1wSFBGID0gY3R4LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgIHRoaXMubWFzdGVyUHJlYW1wTFBGID0gY3R4LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgIHRoaXMubWFzdGVyUHJlYW1wSW5wdXQuZ2Fpbi52YWx1ZSA9IDA7XG4gICAgdGhpcy5tYXN0ZXJQcmVhbXBPdXQuZ2Fpbi52YWx1ZSA9IDE7XG4gICAgdGhpcy5tYXN0ZXJQcmVhbXBIUEYudHlwZSA9ICdoaWdocGFzcyc7XG4gICAgdGhpcy5tYXN0ZXJQcmVhbXBMUEYudHlwZSA9ICdsb3dwYXNzJztcbiAgICB0aGlzLm1hc3RlclByZWFtcElucHV0LmNvbm5lY3QodGhpcy5tYXN0ZXJQcmVhbXBIUEYpO1xuICAgIHRoaXMubWFzdGVyUHJlYW1wSFBGLmNvbm5lY3QodGhpcy5tYXN0ZXJQcmVhbXBMUEYpO1xuICAgIHRoaXMubWFzdGVyUHJlYW1wQmFuZHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiA1IH0sICgpID0+IHtcbiAgICAgIGNvbnN0IGhwZiA9IGN0eC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICAgIGNvbnN0IGxwZiA9IGN0eC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICAgIGNvbnN0IGdhaW4gPSBjdHguY3JlYXRlR2FpbigpO1xuICAgICAgY29uc3QgcmV2ZXJiU2VuZCA9IGN0eC5jcmVhdGVHYWluKCk7XG4gICAgICBjb25zdCBkZWxheVNlbmQgPSBjdHguY3JlYXRlR2FpbigpO1xuICAgICAgY29uc3QgYW5hbHlzZXIgPSBjdHguY3JlYXRlQW5hbHlzZXIoKTtcbiAgICAgIGNvbnN0IHZ1RGF0YSA9IG5ldyBVaW50OEFycmF5KDEyOCk7XG4gICAgICBocGYudHlwZSA9ICdoaWdocGFzcyc7XG4gICAgICBscGYudHlwZSA9ICdsb3dwYXNzJztcbiAgICAgIGhwZi5RLnZhbHVlID0gMC43MDc7XG4gICAgICBscGYuUS52YWx1ZSA9IDAuNzA3O1xuICAgICAgZ2Fpbi5nYWluLnZhbHVlID0gMTtcbiAgICAgIHJldmVyYlNlbmQuZ2Fpbi52YWx1ZSA9IDAuMzU7XG4gICAgICBkZWxheVNlbmQuZ2Fpbi52YWx1ZSA9IDAuMjU7XG4gICAgICBhbmFseXNlci5mZnRTaXplID0gMjU2O1xuICAgICAgYW5hbHlzZXIuc21vb3RoaW5nVGltZUNvbnN0YW50ID0gMC44MjtcbiAgICAgIHRoaXMubWFzdGVyUHJlYW1wTFBGLmNvbm5lY3QoaHBmKTtcbiAgICAgIGhwZi5jb25uZWN0KGxwZik7XG4gICAgICBscGYuY29ubmVjdChnYWluKTtcbiAgICAgIGdhaW4uY29ubmVjdCh0aGlzLm1hc3RlclByZWFtcE91dCk7XG4gICAgICBnYWluLmNvbm5lY3QocmV2ZXJiU2VuZCk7XG4gICAgICBnYWluLmNvbm5lY3QoZGVsYXlTZW5kKTtcbiAgICAgIGdhaW4uY29ubmVjdChhbmFseXNlcik7XG4gICAgICByZXZlcmJTZW5kLmNvbm5lY3QodGhpcy5lY2hvLmlucHV0KTtcbiAgICAgIGRlbGF5U2VuZC5jb25uZWN0KHRoaXMuZGVsYXlJbnB1dCk7XG4gICAgICByZXR1cm4geyBocGYsIGxwZiwgZ2FpbiwgcmV2ZXJiU2VuZCwgZGVsYXlTZW5kLCBhbmFseXNlciwgdnVEYXRhIH07XG4gICAgfSk7XG4gICAgdGhpcy5tYXN0ZXJQcmVhbXBPdXQuY29ubmVjdCh0aGlzLm1hc3RlckxQRik7XG4gICAgdGhpcy5hcHBseU1hc3RlclByZWFtcFN0YXRlKCk7XG4gIH1cblxuICBpbml0RGVsYXlCdXMoKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5hdWRpb0NvbnRleHQ7XG4gICAgdGhpcy5kZWxheU5vZGUgPSBjdHguY3JlYXRlRGVsYXkoNCk7XG4gICAgdGhpcy5kZWxheUZlZWRiYWNrID0gY3R4LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLmRlbGF5VG9uZSA9IGN0eC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICB0aGlzLmRlbGF5V2V0ID0gY3R4LmNyZWF0ZUdhaW4oKTtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2suZ2Fpbi52YWx1ZSA9IDAuMzU7XG4gICAgdGhpcy5kZWxheVRvbmUudHlwZSA9ICdsb3dwYXNzJztcbiAgICB0aGlzLmRlbGF5VG9uZS5mcmVxdWVuY3kudmFsdWUgPSA1MDAwO1xuICAgIHRoaXMuZGVsYXlUb25lLlEudmFsdWUgPSAwLjc7XG4gICAgdGhpcy5kZWxheVdldC5nYWluLnZhbHVlID0gMTtcblxuICAgIHRoaXMuZGVsYXlJbnB1dC5jb25uZWN0KHRoaXMuZGVsYXlOb2RlKTtcbiAgICB0aGlzLmRlbGF5Tm9kZS5jb25uZWN0KHRoaXMuZGVsYXlUb25lKTtcbiAgICB0aGlzLmRlbGF5VG9uZS5jb25uZWN0KHRoaXMuZGVsYXlXZXQpO1xuICAgIHRoaXMuZGVsYXlXZXQuY29ubmVjdCh0aGlzLm1hc3RlckdhaW4pO1xuICAgIHRoaXMuZGVsYXlUb25lLmNvbm5lY3QodGhpcy5kZWxheUZlZWRiYWNrKTtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2suY29ubmVjdCh0aGlzLmRlbGF5Tm9kZSk7XG4gIH1cblxuICBpbml0UGFkcygpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmF1ZGlvQ29udGV4dDtcbiAgICB0aGlzLnBhZE1hc3RlclJldmVyYiA9IDAuMzU7XG4gICAgdGhpcy5wYWRNYXN0ZXJEZWxheSA9IDAuMjU7XG4gICAgdGhpcy5wYWRHYWlucyA9IFtdO1xuICAgIHRoaXMucGFkUmV2ZXJiU2VuZHMgPSBbXTtcbiAgICB0aGlzLnBhZERlbGF5U2VuZHMgPSBbXTtcbiAgICB0aGlzLnBhZHMuZm9yRWFjaCgocGFkLCBpKSA9PiB7XG4gICAgICBjb25zdCBnYWluID0gY3R4LmNyZWF0ZUdhaW4oKTtcbiAgICAgIGNvbnN0IHJldmVyYiA9IGN0eC5jcmVhdGVHYWluKCk7XG4gICAgICBjb25zdCBkZWxheSA9IGN0eC5jcmVhdGVHYWluKCk7XG4gICAgICBnYWluLmdhaW4udmFsdWUgPSAwLjg7XG4gICAgICByZXZlcmIuZ2Fpbi52YWx1ZSA9IHRoaXMucGFkTWFzdGVyUmV2ZXJiO1xuICAgICAgZGVsYXkuZ2Fpbi52YWx1ZSA9IHRoaXMucGFkTWFzdGVyRGVsYXk7XG4gICAgICBnYWluLmNvbm5lY3QodGhpcy5tYXN0ZXJHYWluKTtcbiAgICAgIGdhaW4uY29ubmVjdChyZXZlcmIpO1xuICAgICAgZ2Fpbi5jb25uZWN0KGRlbGF5KTtcbiAgICAgIHJldmVyYi5jb25uZWN0KHRoaXMuZWNoby5pbnB1dCk7XG4gICAgICBkZWxheS5jb25uZWN0KHRoaXMuZGVsYXlJbnB1dCk7XG4gICAgICB0aGlzLnBhZEdhaW5zW2ldID0gZ2FpbjtcbiAgICAgIHRoaXMucGFkUmV2ZXJiU2VuZHNbaV0gPSByZXZlcmI7XG4gICAgICB0aGlzLnBhZERlbGF5U2VuZHNbaV0gPSBkZWxheTtcbiAgICB9KTtcbiAgICB0aGlzLmxvYWREZWZhdWx0UGFkcygpO1xuICB9XG5cbiAgbG9hZERlZmF1bHRQYWRzKCkge1xuICAgIHRoaXMuZGVmYXVsdFBhZEZpbGVzLmZvckVhY2goKGZpbGVuYW1lLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5sb2FkUGFkRnJvbVVSTChpbmRleCwgZmlsZW5hbWUpLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUud2FybihgUGFkICR7aW5kZXggKyAxfSBzYW1wbGUgbG9hZCBmYWlsZWQgKCR7ZmlsZW5hbWV9KSwgdXNpbmcgc3ludGggZmFsbGJhY2suYCwgZXJyKTtcbiAgICAgICAgY29uc3QgZmFsbGJhY2sgPSB0aGlzLm1ha2VGYWxsYmFja1BhZEJ1ZmZlcihpbmRleCk7XG4gICAgICAgIGlmICghZmFsbGJhY2spIHJldHVybjtcbiAgICAgICAgdGhpcy5sb2FkUGFkKGluZGV4LCBmYWxsYmFjaywgdGhpcy5wYWROYW1lc1tpbmRleF0gfHwgYHBhZCAke2luZGV4ICsgMX1gKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgbG9hZFBhZEZyb21VUkwoaW5kZXgsIGZpbGVuYW1lKSB7XG4gICAgY29uc3QgY2FuZGlkYXRlcyA9IFtcbiAgICAgIGBzYW1wbGVzLyR7ZmlsZW5hbWV9YCxcbiAgICAgIGAvc2FtcGxlcy8ke2ZpbGVuYW1lfWAsXG4gICAgICBgLi4vc2FtcGxlcy8ke2ZpbGVuYW1lfWAsXG4gICAgXTtcbiAgICBsZXQgbGFzdEVyciA9IG51bGw7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYW5kaWRhdGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCB1cmwgPSBjYW5kaWRhdGVzW2ldO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5hcnJheUJ1ZmZlcigpO1xuICAgICAgICBjb25zdCBkZWNvZGVkID0gYXdhaXQgdGhpcy5hdWRpb0NvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGRhdGEpO1xuICAgICAgICBjb25zdCBsYWJlbCA9IFN0cmluZyhmaWxlbmFtZSkucmVwbGFjZSgvXFwuW14uXSskLywgJycpO1xuICAgICAgICB0aGlzLmxvYWRQYWQoaW5kZXgsIGRlY29kZWQsIGxhYmVsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBsYXN0RXJyID0gbmV3IEVycm9yKGBGYWlsZWQgJHt1cmx9OiAke2UubWVzc2FnZSB8fCBlfWApO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBsYXN0RXJyIHx8IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2FtcGxlOiAke2ZpbGVuYW1lfWApO1xuICB9XG5cbiAgbWFrZUZhbGxiYWNrUGFkQnVmZmVyKGluZGV4KSB7XG4gICAgc3dpdGNoIChpbmRleCkge1xuICAgICAgY2FzZSAwOiByZXR1cm4gdGhpcy5tYWtlVmlueWxOb2lzZUJ1ZmZlcigpO1xuICAgICAgY2FzZSAxOiByZXR1cm4gdGhpcy5tYWtlQmFzc1RodWRCdWZmZXIoKTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIHRoaXMubWFrZUdvbmdCdWZmZXIoKTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIHRoaXMubWFrZVN0YWJCdWZmZXIoKTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIHRoaXMubWFrZVNuYXJlTm9pc2VCdWZmZXIoKTtcbiAgICAgIGNhc2UgNTogcmV0dXJuIHRoaXMubWFrZVdvb2RDbGlja0J1ZmZlcigpO1xuICAgICAgY2FzZSA2OiByZXR1cm4gdGhpcy5tYWtlUmlzZXJCdWZmZXIoKTtcbiAgICAgIGNhc2UgNzogcmV0dXJuIHRoaXMubWFrZVN1YkRyb3BCdWZmZXIoKTtcbiAgICAgIGNhc2UgODogcmV0dXJuIHRoaXMubWFrZUNsYXBCdXJzdEJ1ZmZlcigpO1xuICAgICAgY2FzZSA5OiByZXR1cm4gdGhpcy5tYWtlTm9pc2VTd2VlcEJ1ZmZlcigpO1xuICAgICAgZGVmYXVsdDogcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgbWFrZVZpbnlsTm9pc2VCdWZmZXIoKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5hdWRpb0NvbnRleHQ7XG4gICAgY29uc3QgZHVyID0gMC43O1xuICAgIGNvbnN0IGJ1ZiA9IGN0eC5jcmVhdGVCdWZmZXIoMSwgTWF0aC5mbG9vcihjdHguc2FtcGxlUmF0ZSAqIGR1ciksIGN0eC5zYW1wbGVSYXRlKTtcbiAgICBjb25zdCBkYXRhID0gYnVmLmdldENoYW5uZWxEYXRhKDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgdCA9IGkgLyBkYXRhLmxlbmd0aDtcbiAgICAgIGNvbnN0IGVudiA9IE1hdGgubWluKDEsIHQgKiAxMikgKiBNYXRoLmV4cCgtdCAqIDYpO1xuICAgICAgZGF0YVtpXSA9ICgoTWF0aC5yYW5kb20oKSAqIDIpIC0gMSkgKiBlbnYgKiAwLjY1O1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgbWFrZUJhc3NUaHVkQnVmZmVyKCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuYXVkaW9Db250ZXh0O1xuICAgIGNvbnN0IGR1ciA9IDAuMjU7XG4gICAgY29uc3QgbGVuID0gTWF0aC5mbG9vcihjdHguc2FtcGxlUmF0ZSAqIGR1cik7XG4gICAgY29uc3QgYnVmID0gY3R4LmNyZWF0ZUJ1ZmZlcigxLCBsZW4sIGN0eC5zYW1wbGVSYXRlKTtcbiAgICBjb25zdCBkYXRhID0gYnVmLmdldENoYW5uZWxEYXRhKDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHQgPSBpIC8gY3R4LnNhbXBsZVJhdGU7XG4gICAgICBjb25zdCBmID0gMTIwIC0gKDgwICogKGkgLyBsZW4pKTtcbiAgICAgIGNvbnN0IGVudiA9IE1hdGguZXhwKC10ICogMjIpO1xuICAgICAgZGF0YVtpXSA9IE1hdGguc2luKDIgKiBNYXRoLlBJICogZiAqIHQpICogZW52O1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgbWFrZUdvbmdCdWZmZXIoKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5hdWRpb0NvbnRleHQ7XG4gICAgY29uc3QgZHVyID0gMS44O1xuICAgIGNvbnN0IGxlbiA9IE1hdGguZmxvb3IoY3R4LnNhbXBsZVJhdGUgKiBkdXIpO1xuICAgIGNvbnN0IGJ1ZiA9IGN0eC5jcmVhdGVCdWZmZXIoMSwgbGVuLCBjdHguc2FtcGxlUmF0ZSk7XG4gICAgY29uc3QgZGF0YSA9IGJ1Zi5nZXRDaGFubmVsRGF0YSgwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCB0ID0gaSAvIGN0eC5zYW1wbGVSYXRlO1xuICAgICAgY29uc3QgbW9kID0gTWF0aC5zaW4oMiAqIE1hdGguUEkgKiA0NDAgKiB0KSAqIDEyMDtcbiAgICAgIGNvbnN0IGNhciA9IE1hdGguc2luKDIgKiBNYXRoLlBJICogKDIyMCArIG1vZCkgKiB0KTtcbiAgICAgIGRhdGFbaV0gPSBjYXIgKiBNYXRoLmV4cCgtdCAqIDMuMikgKiAwLjg7XG4gICAgfVxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICBtYWtlU3RhYkJ1ZmZlcigpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmF1ZGlvQ29udGV4dDtcbiAgICBjb25zdCBkdXIgPSAwLjE2O1xuICAgIGNvbnN0IGxlbiA9IE1hdGguZmxvb3IoY3R4LnNhbXBsZVJhdGUgKiBkdXIpO1xuICAgIGNvbnN0IGJ1ZiA9IGN0eC5jcmVhdGVCdWZmZXIoMSwgbGVuLCBjdHguc2FtcGxlUmF0ZSk7XG4gICAgY29uc3QgZGF0YSA9IGJ1Zi5nZXRDaGFubmVsRGF0YSgwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCB0ID0gaSAvIGN0eC5zYW1wbGVSYXRlO1xuICAgICAgY29uc3Qgc2F3ID0gMiAqICgodCAqIDIyMCkgJSAxKSAtIDE7XG4gICAgICBjb25zdCBlbnYgPSBNYXRoLm1pbigxLCB0ICogMTQwKSAqIE1hdGguZXhwKC10ICogMjgpO1xuICAgICAgZGF0YVtpXSA9IHNhdyAqIGVudiAqIDAuNztcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIG1ha2VTbmFyZU5vaXNlQnVmZmVyKCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuYXVkaW9Db250ZXh0O1xuICAgIGNvbnN0IGR1ciA9IDAuMjI7XG4gICAgY29uc3QgbGVuID0gTWF0aC5mbG9vcihjdHguc2FtcGxlUmF0ZSAqIGR1cik7XG4gICAgY29uc3QgYnVmID0gY3R4LmNyZWF0ZUJ1ZmZlcigxLCBsZW4sIGN0eC5zYW1wbGVSYXRlKTtcbiAgICBjb25zdCBkYXRhID0gYnVmLmdldENoYW5uZWxEYXRhKDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHQgPSBpIC8gY3R4LnNhbXBsZVJhdGU7XG4gICAgICBjb25zdCBlbnYgPSBNYXRoLmV4cCgtdCAqIDIwKTtcbiAgICAgIGNvbnN0IHRvbmUgPSBNYXRoLnNpbigyICogTWF0aC5QSSAqIDIyMCAqIHQpICogMC4yO1xuICAgICAgZGF0YVtpXSA9ICgoKE1hdGgucmFuZG9tKCkgKiAyKSAtIDEpICogMC44ICsgdG9uZSkgKiBlbnY7XG4gICAgfVxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICBtYWtlV29vZENsaWNrQnVmZmVyKCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuYXVkaW9Db250ZXh0O1xuICAgIGNvbnN0IGR1ciA9IDAuMDg7XG4gICAgY29uc3QgbGVuID0gTWF0aC5mbG9vcihjdHguc2FtcGxlUmF0ZSAqIGR1cik7XG4gICAgY29uc3QgYnVmID0gY3R4LmNyZWF0ZUJ1ZmZlcigxLCBsZW4sIGN0eC5zYW1wbGVSYXRlKTtcbiAgICBjb25zdCBkYXRhID0gYnVmLmdldENoYW5uZWxEYXRhKDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHQgPSBpIC8gY3R4LnNhbXBsZVJhdGU7XG4gICAgICBjb25zdCBlbnYgPSBNYXRoLmV4cCgtdCAqIDYwKTtcbiAgICAgIGNvbnN0IHB1bHNlID0gTWF0aC5zaW4oMiAqIE1hdGguUEkgKiAxNDAwICogdCkgKiAwLjc7XG4gICAgICBkYXRhW2ldID0gcHVsc2UgKiBlbnY7XG4gICAgfVxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICBtYWtlUmlzZXJCdWZmZXIoKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5hdWRpb0NvbnRleHQ7XG4gICAgY29uc3QgZHVyID0gMC44O1xuICAgIGNvbnN0IGxlbiA9IE1hdGguZmxvb3IoY3R4LnNhbXBsZVJhdGUgKiBkdXIpO1xuICAgIGNvbnN0IGJ1ZiA9IGN0eC5jcmVhdGVCdWZmZXIoMSwgbGVuLCBjdHguc2FtcGxlUmF0ZSk7XG4gICAgY29uc3QgZGF0YSA9IGJ1Zi5nZXRDaGFubmVsRGF0YSgwKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBjb25zdCB0ID0gaSAvIGN0eC5zYW1wbGVSYXRlO1xuICAgICAgY29uc3QgcCA9IGkgLyBsZW47XG4gICAgICBjb25zdCBmID0gMTgwICsgKHAgKiAxMjAwKTtcbiAgICAgIGNvbnN0IGVudiA9IE1hdGgubWluKDEsIHAgKiAxLjIpICogTWF0aC5leHAoLSgxIC0gcCkgKiAwLjE1KTtcbiAgICAgIGRhdGFbaV0gPSBNYXRoLnNpbigyICogTWF0aC5QSSAqIGYgKiB0KSAqIGVudiAqIDAuNDU7XG4gICAgfVxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICBtYWtlU3ViRHJvcEJ1ZmZlcigpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmF1ZGlvQ29udGV4dDtcbiAgICBjb25zdCBkdXIgPSAwLjk7XG4gICAgY29uc3QgbGVuID0gTWF0aC5mbG9vcihjdHguc2FtcGxlUmF0ZSAqIGR1cik7XG4gICAgY29uc3QgYnVmID0gY3R4LmNyZWF0ZUJ1ZmZlcigxLCBsZW4sIGN0eC5zYW1wbGVSYXRlKTtcbiAgICBjb25zdCBkYXRhID0gYnVmLmdldENoYW5uZWxEYXRhKDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHQgPSBpIC8gY3R4LnNhbXBsZVJhdGU7XG4gICAgICBjb25zdCBwID0gaSAvIGxlbjtcbiAgICAgIGNvbnN0IGYgPSAxMTAgLSAocCAqIDgwKTtcbiAgICAgIGNvbnN0IGVudiA9IE1hdGguZXhwKC10ICogNC4yKTtcbiAgICAgIGRhdGFbaV0gPSBNYXRoLnNpbigyICogTWF0aC5QSSAqIGYgKiB0KSAqIGVudiAqIDAuOTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIG1ha2VDbGFwQnVyc3RCdWZmZXIoKSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5hdWRpb0NvbnRleHQ7XG4gICAgY29uc3QgZHVyID0gMC4xODtcbiAgICBjb25zdCBsZW4gPSBNYXRoLmZsb29yKGN0eC5zYW1wbGVSYXRlICogZHVyKTtcbiAgICBjb25zdCBidWYgPSBjdHguY3JlYXRlQnVmZmVyKDEsIGxlbiwgY3R4LnNhbXBsZVJhdGUpO1xuICAgIGNvbnN0IGRhdGEgPSBidWYuZ2V0Q2hhbm5lbERhdGEoMCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgY29uc3QgdCA9IGkgLyBjdHguc2FtcGxlUmF0ZTtcbiAgICAgIGNvbnN0IGVudiA9IE1hdGguZXhwKC10ICogMjQpO1xuICAgICAgY29uc3QgYnVyc3QgPSAoKE1hdGgucmFuZG9tKCkgKiAyKSAtIDEpICogKDEgLSAoKGkgLyBsZW4pICogMC4zNSkpO1xuICAgICAgZGF0YVtpXSA9IGJ1cnN0ICogZW52ICogMC44NTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIG1ha2VOb2lzZVN3ZWVwQnVmZmVyKCkge1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuYXVkaW9Db250ZXh0O1xuICAgIGNvbnN0IGR1ciA9IDAuNjU7XG4gICAgY29uc3QgbGVuID0gTWF0aC5mbG9vcihjdHguc2FtcGxlUmF0ZSAqIGR1cik7XG4gICAgY29uc3QgYnVmID0gY3R4LmNyZWF0ZUJ1ZmZlcigxLCBsZW4sIGN0eC5zYW1wbGVSYXRlKTtcbiAgICBjb25zdCBkYXRhID0gYnVmLmdldENoYW5uZWxEYXRhKDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHQgPSBpIC8gY3R4LnNhbXBsZVJhdGU7XG4gICAgICBjb25zdCBwID0gaSAvIGxlbjtcbiAgICAgIGNvbnN0IGVudiA9IE1hdGguZXhwKC10ICogNC42KTtcbiAgICAgIGNvbnN0IHdvYmJsZSA9IE1hdGguc2luKDIgKiBNYXRoLlBJICogKDE4MCArIChwICogOTAwKSkgKiB0KSAqIDAuMTg7XG4gICAgICBkYXRhW2ldID0gKCgoKE1hdGgucmFuZG9tKCkgKiAyKSAtIDEpICogMC42NSkgKyB3b2JibGUpICogZW52O1xuICAgIH1cbiAgICByZXR1cm4gYnVmO1xuICB9XG5cbiAgY3JlYXRlTm9pc2VCdWZmZXIoZHVyYXRpb25TZWMgPSAwLjI1KSB7XG4gICAgY29uc3QgY3R4ID0gdGhpcy5hdWRpb0NvbnRleHQ7XG4gICAgY29uc3QgbGVuID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihjdHguc2FtcGxlUmF0ZSAqIGR1cmF0aW9uU2VjKSk7XG4gICAgY29uc3QgYnVmID0gY3R4LmNyZWF0ZUJ1ZmZlcigxLCBsZW4sIGN0eC5zYW1wbGVSYXRlKTtcbiAgICBjb25zdCBkYXRhID0gYnVmLmdldENoYW5uZWxEYXRhKDApO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGRhdGFbaV0gPSAoTWF0aC5yYW5kb20oKSAqIDIpIC0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGJ1ZjtcbiAgfVxuXG4gIHBpdGNoKHZhbHVlKSB7XG4gICAgcmV0dXJuIFV0aWxzLmdldFBpdGNoKHZhbHVlKSArIHRoaXMub2Zmc2V0O1xuICB9XG5cbiAgcHJlbG9hZChkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YSB8fCB0aGlzLmRhdGE7XG5cbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICAgIGlmICh0cmFja1syXS5sZW5ndGggPiBjb3VudCkgY291bnQgPSB0cmFja1syXS5sZW5ndGg7XG4gICAgICBjb25zdCBpbmZvID0gdHJhY2tbMF0gPj0gMjAwMFxuICAgICAgICA/IHRoaXMucGxheWVyLmxvYWRlci5kcnVtSW5mbyh0cmFja1swXSAtIDIwMDApXG4gICAgICAgIDogdGhpcy5wbGF5ZXIubG9hZGVyLmluc3RydW1lbnRJbmZvKHRyYWNrWzBdKTtcbiAgICAgIHRoaXMuY2FjaGVJbnN0cnVtZW50KGluZm8pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZHVyYXRpb24gPSBVdGlscy5nZXRUaWNrRHVyYXRpb24oJzMyJykgLyAyNTY7XG4gICAgY29uc3QgY29sbGVjdERydW1FdmVudHMgPSAodGljaywgYmFzZU9mZnNldCA9IDAsIHNwYW4gPSAxKSA9PiB7XG4gICAgICBpZiAoIXRpY2spIHJldHVybiBbXTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGljaykpIHtcbiAgICAgICAgY29uc3QgdG90YWwgPSB0aWNrLmxlbmd0aCB8fCAxO1xuICAgICAgICByZXR1cm4gdGljay5yZWR1Y2UoKG1lbW8sIHN1YlRpY2ssIHN1YkluZGV4KSA9PiB7XG4gICAgICAgICAgbWVtby5wdXNoKC4uLmNvbGxlY3REcnVtRXZlbnRzKHN1YlRpY2ssIGJhc2VPZmZzZXQgKyAoKHN1YkluZGV4IC8gdG90YWwpICogc3BhbiksIHNwYW4gLyB0b3RhbCkpO1xuICAgICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgICB9LCBbXSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxldmVsID0gdGljayAmJiB0eXBlb2YgdGljay52ICE9PSAndW5kZWZpbmVkJyA/IHRpY2sudiA6IDA7XG4gICAgICBpZiAoIShsZXZlbCA+IDApKSByZXR1cm4gW107XG4gICAgICByZXR1cm4gW1tsZXZlbCwgYmFzZU9mZnNldCwgc3Bhbl1dO1xuICAgIH07XG4gICAgY29uc3QgY29sbGVjdE5vdGVUb2tlbnMgPSAodGljaywgYmFzZU9mZnNldCA9IDAsIHNwYW4gPSAxKSA9PiB7XG4gICAgICBpZiAoIXRpY2spIHJldHVybiBbXTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGljaykpIHtcbiAgICAgICAgY29uc3QgdG90YWwgPSB0aWNrLmxlbmd0aCB8fCAxO1xuICAgICAgICByZXR1cm4gdGljay5yZWR1Y2UoKG1lbW8sIHN1YlRpY2ssIHN1YkluZGV4KSA9PiB7XG4gICAgICAgICAgbWVtby5wdXNoKC4uLmNvbGxlY3ROb3RlVG9rZW5zKHN1YlRpY2ssIGJhc2VPZmZzZXQgKyAoKHN1YkluZGV4IC8gdG90YWwpICogc3BhbiksIHNwYW4gLyB0b3RhbCkpO1xuICAgICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgICB9LCBbXSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aWNrLmggfHwgdGljay5sID09PSAnXycpIHtcbiAgICAgICAgcmV0dXJuIFt7IHR5cGU6ICdob2xkJywgb2Zmc2V0OiBiYXNlT2Zmc2V0LCBzcGFuIH1dO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBsZXZlbCA9IHRpY2sgJiYgdHlwZW9mIHRpY2sudiAhPT0gJ3VuZGVmaW5lZCcgPyB0aWNrLnYgOiAwO1xuICAgICAgaWYgKCEobGV2ZWwgPiAwKSB8fCAhdGljay5uKSB7XG4gICAgICAgIHJldHVybiBbeyB0eXBlOiAncmVzdCcsIG9mZnNldDogYmFzZU9mZnNldCwgc3BhbiB9XTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGljay5uKSkge1xuICAgICAgICBjb25zdCBwaXRjaGVzID0gdGljay5uLnJlZHVjZSgobWVtbywgdG9uZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBpdGNoID0gdGhpcy5waXRjaCh0b25lKTtcbiAgICAgICAgICBpZiAoTnVtYmVyLmlzRmluaXRlKHBpdGNoKSkgbWVtby5wdXNoKHBpdGNoKTtcbiAgICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgICAgfSwgW10pO1xuICAgICAgICBpZiAoIXBpdGNoZXMubGVuZ3RoKSByZXR1cm4gW3sgdHlwZTogJ3Jlc3QnLCBvZmZzZXQ6IGJhc2VPZmZzZXQsIHNwYW4gfV07XG4gICAgICAgIHJldHVybiBbeyB0eXBlOiAnaGl0JywgcGl0Y2hlcywgbGV2ZWwsIG9mZnNldDogYmFzZU9mZnNldCwgc3BhbiB9XTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGl0Y2ggPSB0aGlzLnBpdGNoKHRpY2subik7XG4gICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShwaXRjaCkpIHJldHVybiBbeyB0eXBlOiAncmVzdCcsIG9mZnNldDogYmFzZU9mZnNldCwgc3BhbiB9XTtcbiAgICAgIHJldHVybiBbeyB0eXBlOiAnaGl0JywgcGl0Y2hlczogW3BpdGNoXSwgbGV2ZWwsIG9mZnNldDogYmFzZU9mZnNldCwgc3BhbiB9XTtcbiAgICB9O1xuICAgIGNvbnN0IGFjdGl2ZU5vdGVSZWZzQnlLZXkgPSBuZXcgTWFwKCk7XG5cbiAgICBjb25zdCBuZXh0S2V5cyA9IG5ldyBTZXQoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGJlYXQgPSBuZXcgTWFwKCk7XG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCh0cmFjayA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke3RyYWNrWzBdfS8ke3RyYWNrWzFdfWA7XG4gICAgICAgIG5leHRLZXlzLmFkZChrZXkpO1xuICAgICAgICBpZiAoIWJlYXQuaGFzKGtleSkpIGJlYXQuc2V0KGtleSwgeyBkcnVtczogW10sIG5vdGVzOiBbXSB9KTtcbiAgICAgICAgY29uc3Qgc2xvdCA9IGJlYXQuZ2V0KGtleSk7XG4gICAgICAgIGNvbnN0IHRpY2sgPSB0eXBlb2YgdHJhY2tbMl1baV0gPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHRyYWNrWzJdW2ldO1xuICAgICAgICBpZiAodHJhY2tbMF0gPj0gMjAwMCkge1xuICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IGNvbGxlY3REcnVtRXZlbnRzKHRpY2spO1xuICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKChbbGV2ZWwsIG9mZnNldCwgc3Bhbl0pID0+IHtcbiAgICAgICAgICAgIHNsb3QuZHJ1bXMucHVzaChbdHJhY2tbMF0gLSAyMDAwLCBsZXZlbCwgb2Zmc2V0LCBzcGFuXSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IGFjdGl2ZVJlZnMgPSBhY3RpdmVOb3RlUmVmc0J5S2V5LmdldChrZXkpIHx8IFtdO1xuICAgICAgICAgIGNvbnN0IGV2ZW50cyA9IGNvbGxlY3ROb3RlVG9rZW5zKHRpY2spO1xuICAgICAgICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdyZXN0Jykge1xuICAgICAgICAgICAgICBhY3RpdmVSZWZzID0gW107XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChldmVudC50eXBlID09PSAnaG9sZCcpIHtcbiAgICAgICAgICAgICAgaWYgKCFhY3RpdmVSZWZzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgICAgICAgICBhY3RpdmVSZWZzLmZvckVhY2goKHJlZikgPT4ge1xuICAgICAgICAgICAgICAgIHJlZls1XSArPSBldmVudC5zcGFuO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVmcyA9IFtdO1xuICAgICAgICAgICAgZXZlbnQucGl0Y2hlcy5mb3JFYWNoKChwaXRjaCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCByb3cgPSBbdHJhY2tbMF0sIHBpdGNoLCBkdXJhdGlvbiwgZXZlbnQubGV2ZWwsIGV2ZW50Lm9mZnNldCwgZXZlbnQuc3Bhbl07XG4gICAgICAgICAgICAgIHNsb3Qubm90ZXMucHVzaChyb3cpO1xuICAgICAgICAgICAgICByZWZzLnB1c2gocm93KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWN0aXZlUmVmcyA9IHJlZnM7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYWN0aXZlTm90ZVJlZnNCeUtleS5zZXQoa2V5LCBhY3RpdmVSZWZzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmJlYXRzW2ldID0gYmVhdDtcbiAgICB9XG5cbiAgICB0aGlzLnRyYWNrTm9kZXMuZm9yRWFjaCgobm9kZXMsIGtleSkgPT4ge1xuICAgICAgaWYgKG5leHRLZXlzLmhhcyhrZXkpKSByZXR1cm47XG4gICAgICB0cnkge1xuICAgICAgICBub2Rlcy5pbnB1dC5kaXNjb25uZWN0KCk7XG4gICAgICAgIG5vZGVzLmRyeS5kaXNjb25uZWN0KCk7XG4gICAgICAgIG5vZGVzLnJldmVyYlNlbmQuZGlzY29ubmVjdCgpO1xuICAgICAgICBub2Rlcy5kZWxheVNlbmQuZGlzY29ubmVjdCgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZ25vcmVcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhY2tOb2Rlcy5kZWxldGUoa2V5KTtcbiAgICB9KTtcbiAgICBuZXh0S2V5cy5mb3JFYWNoKGtleSA9PiB0aGlzLmdldFRyYWNrTm9kZXMoa2V5KSk7XG4gIH1cblxuICBjb250ZXh0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWU7XG4gIH1cblxuICBwbGF5TG9vcE1hY2hpbmUoZnJvbUJlYXQpIHtcbiAgICB0aGlzLnN0YXJ0UGxheUxvb3AodGhpcy5iZWF0cywgdGhpcy5icG0sIHRoaXMuZnJhcSwgZnJvbUJlYXQpO1xuICB9XG5cbiAgc3RvcExvb3BNYWNoaW5lKCkge1xuICAgIHRoaXMuc3RvcFBsYXlMb29wKCk7XG4gIH1cblxuICBzZXRTb25nTG9vcChlbmFibGVkKSB7XG4gICAgdGhpcy5zb25nTG9vcCA9IEJvb2xlYW4oZW5hYmxlZCk7XG4gIH1cblxuICBzZXRBcnJhbmdlbWVudExvb3BSYW5nZShyYW5nZSkge1xuICAgIGlmICghcmFuZ2UgfHwgIU51bWJlci5pc0Zpbml0ZShyYW5nZS5zdGFydCkgfHwgIU51bWJlci5pc0Zpbml0ZShyYW5nZS5lbmQpKSB7XG4gICAgICB0aGlzLmFycmFuZ2VtZW50TG9vcFJhbmdlID0gbnVsbDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc3RhcnQgPSBNYXRoLm1heCgwLCBNYXRoLmZsb29yKHJhbmdlLnN0YXJ0KSk7XG4gICAgY29uc3QgZW5kID0gTWF0aC5tYXgoc3RhcnQsIE1hdGguZmxvb3IocmFuZ2UuZW5kKSk7XG4gICAgdGhpcy5hcnJhbmdlbWVudExvb3BSYW5nZSA9IHsgc3RhcnQsIGVuZCB9O1xuICB9XG5cbiAgc2V0TG9vcE1hY2hpbmUoZGF0YSwgdGVtcG8sIGxlbmd0aCwgdHJhbnNwb3NlKSB7XG4gICAgY29uc3QgYXBwbGllZFRlbXBvID0gdGVtcG8gfHwgMTI3O1xuICAgIGNvbnN0IGNoYW5nZWQgPSBhcHBsaWVkVGVtcG8gIT09IHRoaXMuYnBtIHx8IGxlbmd0aCAhPT0gdGhpcy5iYXJzIHx8IHRyYW5zcG9zZSAhPT0gdGhpcy5vZmZzZXQ7XG4gICAgaWYgKGNoYW5nZWQpIHRoaXMuc3RvcFBsYXlMb29wKCk7XG4gICAgdGhpcy5iZWF0cy5sZW5ndGggPSAwO1xuICAgIHRoaXMuYnBtID0gYXBwbGllZFRlbXBvO1xuICAgIHRoaXMuYmFycyA9IGxlbmd0aCB8fCAxNjtcbiAgICB0aGlzLm9mZnNldCA9IHRyYW5zcG9zZSB8fCAwO1xuICAgIHRoaXMudXBkYXRlRGVsYXlUaW1lKCk7XG4gICAgdGhpcy5wcmVsb2FkKGRhdGEpO1xuICAgIHRoaXMuZnJhcSA9IDEgLyB0aGlzLmJhcnM7XG4gICAgcmV0dXJuIGNoYW5nZWQ7XG4gIH1cblxuICB1cGRhdGVUcmFja3MoZGF0YSkge1xuICAgIHRoaXMuYmVhdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLnByZWxvYWQoZGF0YSk7XG4gICAgaWYgKCF0aGlzLmJlYXRzLmxlbmd0aCB8fCB0eXBlb2YgdGhpcy5iZWF0SW5kZXggIT09ICdudW1iZXInIHx8IHRoaXMuYmVhdEluZGV4ID49IHRoaXMuYmVhdHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmJlYXRJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRQbGF5TG9vcChiZWF0cywgYnBtLCBkZW5zaXR5LCBmcm9tQmVhdCkge1xuICAgIGlmICghYmVhdHMgfHwgIWJlYXRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5sb29wU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmxvb3BTdGFydGVkID0gdHJ1ZTtcbiAgICBjb25zdCB3aG9sZU5vdGVEdXJhdGlvbiA9ICg0ICogNjApIC8gYnBtO1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5hcnJhbmdlbWVudExvb3BSYW5nZTtcbiAgICBjb25zdCBoYXNSYW5nZSA9IEJvb2xlYW4oXG4gICAgICByYW5nZVxuICAgICAgJiYgYmVhdHMubGVuZ3RoID4gMFxuICAgICAgJiYgTnVtYmVyLmlzRmluaXRlKHJhbmdlLnN0YXJ0KVxuICAgICAgJiYgTnVtYmVyLmlzRmluaXRlKHJhbmdlLmVuZClcbiAgICApO1xuICAgIGNvbnN0IHJhbmdlU3RhcnQgPSBoYXNSYW5nZSA/IE1hdGgubWF4KDAsIE1hdGgubWluKGJlYXRzLmxlbmd0aCAtIDEsIHJhbmdlLnN0YXJ0KSkgOiAwO1xuICAgIGNvbnN0IHJhbmdlRW5kID0gaGFzUmFuZ2UgPyBNYXRoLm1heChyYW5nZVN0YXJ0LCBNYXRoLm1pbihiZWF0cy5sZW5ndGggLSAxLCByYW5nZS5lbmQpKSA6IChiZWF0cy5sZW5ndGggLSAxKTtcbiAgICB0aGlzLmJlYXRJbmRleCA9IGZyb21CZWF0IDwgYmVhdHMubGVuZ3RoID8gZnJvbUJlYXQgOiAwO1xuICAgIGlmIChoYXNSYW5nZSAmJiAodGhpcy5iZWF0SW5kZXggPCByYW5nZVN0YXJ0IHx8IHRoaXMuYmVhdEluZGV4ID4gcmFuZ2VFbmQpKSB7XG4gICAgICB0aGlzLmJlYXRJbmRleCA9IHJhbmdlU3RhcnQ7XG4gICAgfVxuICAgIHRoaXMucGxheUJlYXRBdCh0aGlzLmNvbnRleHRUaW1lKCksIGJlYXRzW3RoaXMuYmVhdEluZGV4XSwgYnBtKTtcbiAgICBsZXQgbmV4dExvb3BUaW1lID0gdGhpcy5jb250ZXh0VGltZSgpICsgZGVuc2l0eSAqIHdob2xlTm90ZUR1cmF0aW9uO1xuICAgIHRoaXMubG9vcEludGVydmFsSUQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB3aGlsZSAodGhpcy5jb250ZXh0VGltZSgpID49IG5leHRMb29wVGltZSkge1xuICAgICAgICBsZXQgbmV4dEJlYXRJbmRleCA9IHRoaXMuYmVhdEluZGV4ICsgMTtcbiAgICAgICAgaWYgKGhhc1JhbmdlICYmIG5leHRCZWF0SW5kZXggPiByYW5nZUVuZCkge1xuICAgICAgICAgIG5leHRCZWF0SW5kZXggPSByYW5nZVN0YXJ0O1xuICAgICAgICB9IGVsc2UgaWYgKG5leHRCZWF0SW5kZXggPj0gYmVhdHMubGVuZ3RoKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLnNvbmdMb29wKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BQbGF5TG9vcCgpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9uUGxheWJhY2tFbmQgPT09ICdmdW5jdGlvbicpIHRoaXMub25QbGF5YmFja0VuZCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZXh0QmVhdEluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJlYXRJbmRleCA9IG5leHRCZWF0SW5kZXg7XG4gICAgICAgIHRoaXMucGxheUJlYXRBdChuZXh0TG9vcFRpbWUsIGJlYXRzW3RoaXMuYmVhdEluZGV4XSwgYnBtKTtcbiAgICAgICAgbmV4dExvb3BUaW1lICs9IGRlbnNpdHkgKiB3aG9sZU5vdGVEdXJhdGlvbjtcbiAgICAgIH1cbiAgICB9LCAyMik7XG4gIH1cblxuICBzdG9wUGxheUxvb3AoKSB7XG4gICAgdGhpcy5sb29wU3RhcnRlZCA9IGZhbHNlO1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sb29wSW50ZXJ2YWxJRCk7XG4gICAgdGhpcy5jYW5jZWxRdWV1ZSgpO1xuICB9XG5cbiAgZ2V0VHJhY2tTdGF0ZShrZXkpIHtcbiAgICBpZiAoIXRoaXMudHJhY2tTdGF0ZS5oYXMoa2V5KSkge1xuICAgICAgdGhpcy50cmFja1N0YXRlLnNldChrZXksIHtcbiAgICAgICAgbXV0ZWQ6IGZhbHNlLFxuICAgICAgICBzb2xvOiBmYWxzZSxcbiAgICAgICAgdm9sdW1lOiAxLFxuICAgICAgICByZXZlcmJTZW5kOiAwLFxuICAgICAgICBkZWxheVNlbmQ6IDAsXG4gICAgICAgIGxwZjogMjAwMDAsXG4gICAgICAgIGhwZjogMjAsXG4gICAgICAgIGxwZlE6IDEsXG4gICAgICAgIGhwZlE6IDAuNyxcbiAgICAgICAgZXBpY2VudGVyT246IGZhbHNlLFxuICAgICAgICBlcGljZW50ZXJGcmVxOiA5MCxcbiAgICAgICAgZXBpY2VudGVyRHJpdmU6IDQsXG4gICAgICAgIGVwaWNlbnRlckJsZW5kOiAwLjMsXG4gICAgICAgIGZhbGxiYWNrV2F2ZTogJ2F1dG8nLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRyYWNrU3RhdGUuZ2V0KGtleSk7XG4gIH1cblxuICBhcHBseVRyYWNrU3RhdGUoa2V5KSB7XG4gICAgY29uc3Qgbm9kZXMgPSB0aGlzLmdldFRyYWNrTm9kZXMoa2V5KTtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIG5vZGVzLnN0YXRlID0gc3RhdGU7XG4gICAgY29uc3Qgbm93ID0gdGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWU7XG4gICAgbm9kZXMuZHJ5LmdhaW4uc2V0VGFyZ2V0QXRUaW1lKHN0YXRlLm11dGVkID8gMCA6IHN0YXRlLnZvbHVtZSwgbm93LCAwLjAxKTtcbiAgICBub2Rlcy5yZXZlcmJTZW5kLmdhaW4uc2V0VGFyZ2V0QXRUaW1lKHN0YXRlLnJldmVyYlNlbmQsIG5vdywgMC4wMSk7XG4gICAgbm9kZXMuZGVsYXlTZW5kLmdhaW4uc2V0VGFyZ2V0QXRUaW1lKHN0YXRlLmRlbGF5U2VuZCwgbm93LCAwLjAxKTtcbiAgICBub2Rlcy5ocGYuZnJlcXVlbmN5LnNldFRhcmdldEF0VGltZShzdGF0ZS5ocGYsIG5vdywgMC4wMSk7XG4gICAgbm9kZXMubHBmLmZyZXF1ZW5jeS5zZXRUYXJnZXRBdFRpbWUoc3RhdGUubHBmLCBub3csIDAuMDEpO1xuICAgIG5vZGVzLmhwZi5RLnZhbHVlID0gc3RhdGUuaHBmUTtcbiAgICBub2Rlcy5scGYuUS52YWx1ZSA9IHN0YXRlLmxwZlE7XG4gICAgbm9kZXMuc3ViSW5wdXQuZnJlcXVlbmN5LnNldFRhcmdldEF0VGltZShzdGF0ZS5lcGljZW50ZXJGcmVxLCBub3csIDAuMDIpO1xuICAgIG5vZGVzLnN1YlNoYXBlci5jdXJ2ZSA9IG1ha2VFeGNpdGVyQ3VydmUoc3RhdGUuZXBpY2VudGVyRHJpdmUpO1xuICAgIG5vZGVzLnN1YkJsZW5kLmdhaW4uc2V0VGFyZ2V0QXRUaW1lKHN0YXRlLmVwaWNlbnRlck9uID8gc3RhdGUuZXBpY2VudGVyQmxlbmQgOiAwLCBub3csIDAuMDIpO1xuICB9XG5cbiAgZ2V0VHJhY2tOb2RlcyhrZXkpIHtcbiAgICBpZiAodGhpcy50cmFja05vZGVzLmhhcyhrZXkpKSByZXR1cm4gdGhpcy50cmFja05vZGVzLmdldChrZXkpO1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuYXVkaW9Db250ZXh0O1xuICAgIGNvbnN0IGlucHV0ID0gY3R4LmNyZWF0ZUdhaW4oKTtcbiAgICBjb25zdCBocGYgPSBjdHguY3JlYXRlQmlxdWFkRmlsdGVyKCk7XG4gICAgY29uc3QgbHBmID0gY3R4LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgIGNvbnN0IGRyeSA9IGN0eC5jcmVhdGVHYWluKCk7XG4gICAgY29uc3QgcmV2ZXJiU2VuZCA9IGN0eC5jcmVhdGVHYWluKCk7XG4gICAgY29uc3QgZGVsYXlTZW5kID0gY3R4LmNyZWF0ZUdhaW4oKTtcblxuICAgIGNvbnN0IHN1YklucHV0ID0gY3R4LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgIGNvbnN0IHN1YlNoYXBlciA9IGN0eC5jcmVhdGVXYXZlU2hhcGVyKCk7XG4gICAgY29uc3Qgc3ViQ2xlYW51cCA9IGN0eC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICBjb25zdCBzdWJCbGVuZCA9IGN0eC5jcmVhdGVHYWluKCk7XG5cbiAgICBocGYudHlwZSA9ICdoaWdocGFzcyc7XG4gICAgbHBmLnR5cGUgPSAnbG93cGFzcyc7XG4gICAgaHBmLmZyZXF1ZW5jeS52YWx1ZSA9IDIwO1xuICAgIGxwZi5mcmVxdWVuY3kudmFsdWUgPSAyMDAwMDtcbiAgICBocGYuUS52YWx1ZSA9IDAuNztcbiAgICBscGYuUS52YWx1ZSA9IDE7XG4gICAgZHJ5LmdhaW4udmFsdWUgPSAxO1xuICAgIHJldmVyYlNlbmQuZ2Fpbi52YWx1ZSA9IDA7XG4gICAgZGVsYXlTZW5kLmdhaW4udmFsdWUgPSAwO1xuICAgIHN1YklucHV0LnR5cGUgPSAnYmFuZHBhc3MnO1xuICAgIHN1YklucHV0LmZyZXF1ZW5jeS52YWx1ZSA9IDkwO1xuICAgIHN1YklucHV0LlEudmFsdWUgPSAwLjg7XG4gICAgc3ViU2hhcGVyLmN1cnZlID0gbWFrZUV4Y2l0ZXJDdXJ2ZSg0KTtcbiAgICBzdWJTaGFwZXIub3ZlcnNhbXBsZSA9ICc0eCc7XG4gICAgc3ViQ2xlYW51cC50eXBlID0gJ2xvd3Bhc3MnO1xuICAgIHN1YkNsZWFudXAuZnJlcXVlbmN5LnZhbHVlID0gMTIwO1xuICAgIHN1YkNsZWFudXAuUS52YWx1ZSA9IDAuNztcbiAgICBzdWJCbGVuZC5nYWluLnZhbHVlID0gMDtcblxuICAgIGlucHV0LmNvbm5lY3QoaHBmKTtcbiAgICBocGYuY29ubmVjdChscGYpO1xuICAgIGxwZi5jb25uZWN0KGRyeSk7XG4gICAgbHBmLmNvbm5lY3QocmV2ZXJiU2VuZCk7XG4gICAgbHBmLmNvbm5lY3QoZGVsYXlTZW5kKTtcbiAgICBkcnkuY29ubmVjdCh0aGlzLmVxdWFsaXplci5pbnB1dCk7XG4gICAgcmV2ZXJiU2VuZC5jb25uZWN0KHRoaXMuZWNoby5pbnB1dCk7XG4gICAgZGVsYXlTZW5kLmNvbm5lY3QodGhpcy5kZWxheUlucHV0KTtcblxuICAgIGxwZi5jb25uZWN0KHN1YklucHV0KTtcbiAgICBzdWJJbnB1dC5jb25uZWN0KHN1YlNoYXBlcik7XG4gICAgc3ViU2hhcGVyLmNvbm5lY3Qoc3ViQ2xlYW51cCk7XG4gICAgc3ViQ2xlYW51cC5jb25uZWN0KHN1YkJsZW5kKTtcbiAgICBzdWJCbGVuZC5jb25uZWN0KGRyeSk7XG5cbiAgICBjb25zdCBub2RlcyA9IHtcbiAgICAgIGlucHV0LFxuICAgICAgaHBmLFxuICAgICAgbHBmLFxuICAgICAgZHJ5LFxuICAgICAgcmV2ZXJiU2VuZCxcbiAgICAgIGRlbGF5U2VuZCxcbiAgICAgIHN1YklucHV0LFxuICAgICAgc3ViU2hhcGVyLFxuICAgICAgc3ViQ2xlYW51cCxcbiAgICAgIHN1YkJsZW5kLFxuICAgIH07XG4gICAgdGhpcy50cmFja05vZGVzLnNldChrZXksIG5vZGVzKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIHNldE11dGUoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUubXV0ZWQgPSBCb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICB9XG5cbiAgc2V0U2VjdGlvbk11dGUobmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBuZWVkbGUgPSBgJHtuYW1lfSNgO1xuICAgIHRoaXMudHJhY2tTdGF0ZS5mb3JFYWNoKChzdGF0ZSwga2V5KSA9PiB7XG4gICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgobmVlZGxlKSkgc3RhdGUubXV0ZWQgPSBCb29sZWFuKHZhbHVlKTtcbiAgICB9KTtcbiAgICB0aGlzLnRyYWNrTm9kZXMuZm9yRWFjaCgoX25vZGVzLCBrZXkpID0+IHtcbiAgICAgIGlmIChrZXkuc3RhcnRzV2l0aChuZWVkbGUpKSB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0U2VjdGlvbk11dGVkKG5hbWUpIHtcbiAgICBjb25zdCBuZWVkbGUgPSBgJHtuYW1lfSNgO1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgIHRoaXMudHJhY2tTdGF0ZS5mb3JFYWNoKChzdGF0ZSwga2V5KSA9PiB7XG4gICAgICBpZiAoa2V5LnN0YXJ0c1dpdGgobmVlZGxlKSkgdmFsdWVzLnB1c2goQm9vbGVhbihzdGF0ZS5tdXRlZCkpO1xuICAgIH0pO1xuICAgIGlmICghdmFsdWVzLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiB2YWx1ZXMuZXZlcnkoQm9vbGVhbik7XG4gIH1cblxuICBzZXRTb2xvKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIHN0YXRlLnNvbG8gPSBCb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIHNldFZvbHVtZShrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS52b2x1bWUgPSBjbGFtcCh2YWx1ZSwgMCwgMSk7XG4gICAgdGhpcy5hcHBseVRyYWNrU3RhdGUoa2V5KTtcbiAgfVxuXG4gIHNldFJldmVyYlNlbmQoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUucmV2ZXJiU2VuZCA9IGNsYW1wKHZhbHVlLCAwLCAxKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICB9XG5cbiAgc2V0RGVsYXlTZW5kKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIHN0YXRlLmRlbGF5U2VuZCA9IGNsYW1wKHZhbHVlLCAwLCAxKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICB9XG5cbiAgc2V0TFBGKGtleSwgZnJlcUh6KSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS5scGYgPSBjbGFtcChmcmVxSHosIDIwLCAyMDAwMCk7XG4gICAgdGhpcy5hcHBseVRyYWNrU3RhdGUoa2V5KTtcbiAgfVxuXG4gIHNldEhQRihrZXksIGZyZXFIeikge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUuaHBmID0gY2xhbXAoZnJlcUh6LCAyMCwgMjAwMDApO1xuICAgIHRoaXMuYXBwbHlUcmFja1N0YXRlKGtleSk7XG4gIH1cblxuICBzZXRMUEZRKGtleSwgcSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUubHBmUSA9IGNsYW1wKHEsIDAuMSwgMTgpO1xuICAgIHRoaXMuYXBwbHlUcmFja1N0YXRlKGtleSk7XG4gIH1cblxuICBzZXRIUEZRKGtleSwgcSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUuaHBmUSA9IGNsYW1wKHEsIDAuMSwgMTgpO1xuICAgIHRoaXMuYXBwbHlUcmFja1N0YXRlKGtleSk7XG4gIH1cblxuICBzZXRNYXN0ZXJMUEYoZnJlcUh6KSB7XG4gICAgY29uc3Qgbm93ID0gdGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWU7XG4gICAgdGhpcy5tYXN0ZXJMUEYuZnJlcXVlbmN5LnNldFRhcmdldEF0VGltZShjbGFtcChmcmVxSHosIDIwLCAyMDAwMCksIG5vdywgMC4wMSk7XG4gIH1cblxuICBzZXRFcGljZW50ZXJFbmFibGVkKGtleSwgZW5hYmxlZCkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUuZXBpY2VudGVyT24gPSBCb29sZWFuKGVuYWJsZWQpO1xuICAgIHRoaXMuYXBwbHlUcmFja1N0YXRlKGtleSk7XG4gIH1cblxuICBzZXRFcGljZW50ZXJCbGVuZChrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS5lcGljZW50ZXJCbGVuZCA9IGNsYW1wKHZhbHVlLCAwLCAxKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICB9XG5cbiAgc2V0RXBpY2VudGVyRHJpdmUoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUuZXBpY2VudGVyRHJpdmUgPSBjbGFtcCh2YWx1ZSwgMSwgMTApO1xuICAgIHRoaXMuYXBwbHlUcmFja1N0YXRlKGtleSk7XG4gIH1cblxuICBzZXRFcGljZW50ZXJGcmVxKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIHN0YXRlLmVwaWNlbnRlckZyZXEgPSBjbGFtcCh2YWx1ZSwgNDAsIDIwMCk7XG4gICAgdGhpcy5hcHBseVRyYWNrU3RhdGUoa2V5KTtcbiAgfVxuXG4gIHNldEZhbGxiYWNrV2F2ZShrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS5mYWxsYmFja1dhdmUgPSBub3JtYWxpemVGYWxsYmFja1dhdmUodmFsdWUpO1xuICB9XG5cbiAgbm9ybWFsaXplTG9hZGVkU291bmRNYXAocmF3KSB7XG4gICAgY29uc3QgbmV4dCA9IGNsb25lU291bmRNYXAoKTtcbiAgICBpZiAoIXJhdyB8fCB0eXBlb2YgcmF3ICE9PSAnb2JqZWN0JykgcmV0dXJuIG5leHQ7XG5cbiAgICBpZiAocmF3LmRydW1zICYmIHR5cGVvZiByYXcuZHJ1bXMgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3QuZW50cmllcyhyYXcuZHJ1bXMpLmZvckVhY2goKFtpZCwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IG5vcm1hbGl6ZURydW1DaGFubmVsS2V5KGlkKTtcbiAgICAgICAgaWYgKCFrZXkpIHJldHVybjtcbiAgICAgICAgY29uc3Qgcm93ID0gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHZhbHVlIDogeyBraW5kOiB2YWx1ZSB9O1xuICAgICAgICBjb25zdCBwcmV2ID0gbmV4dC5kcnVtc1trZXldIHx8IHt9O1xuICAgICAgICBuZXh0LmRydW1zW2tleV0gPSB7XG4gICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAuLi5yb3csXG4gICAgICAgICAga2luZDogbm9ybWFsaXplRHJ1bUtpbmQocm93LmtpbmQgfHwgcHJldi5raW5kKSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyYXcuaW5zdHJ1bWVudHMgJiYgdHlwZW9mIHJhdy5pbnN0cnVtZW50cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5lbnRyaWVzKHJhdy5pbnN0cnVtZW50cykuZm9yRWFjaCgoW2lkLCB2YWx1ZV0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gU3RyaW5nKHBhcnNlSW50KGlkLCAxMCkpO1xuICAgICAgICBpZiAoIWtleSB8fCBrZXkgPT09ICdOYU4nKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHJvdyA9IHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHt9O1xuICAgICAgICBjb25zdCBwcmV2ID0gbmV4dC5pbnN0cnVtZW50c1trZXldIHx8IHt9O1xuICAgICAgICBuZXh0Lmluc3RydW1lbnRzW2tleV0gPSB7XG4gICAgICAgICAgLi4ucHJldixcbiAgICAgICAgICAuLi5yb3csXG4gICAgICAgICAgZmFsbGJhY2tXYXZlOiBub3JtYWxpemVGYWxsYmFja1dhdmUocm93LmZhbGxiYWNrV2F2ZSB8fCBwcmV2LmZhbGxiYWNrV2F2ZSksXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmF3LmtleXdvcmRIaW50cyAmJiB0eXBlb2YgcmF3LmtleXdvcmRIaW50cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgIERSVU1fS0lORFMuZm9yRWFjaChraW5kID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gcmF3LmtleXdvcmRIaW50c1traW5kXTtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJvdykpIHJldHVybjtcbiAgICAgICAgbmV4dC5rZXl3b3JkSGludHNba2luZF0gPSByb3dcbiAgICAgICAgICAubWFwKGl0ZW0gPT4gU3RyaW5nKGl0ZW0gfHwgJycpLnRvTG93ZXJDYXNlKCkudHJpbSgpKVxuICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmF3LmJhbmtzICYmIHR5cGVvZiByYXcuYmFua3MgPT09ICdvYmplY3QnKSB7XG4gICAgICBjb25zdCBiYW5rcyA9IHt9O1xuICAgICAgT2JqZWN0LmVudHJpZXMocmF3LmJhbmtzKS5mb3JFYWNoKChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhbmtOYW1lID0gU3RyaW5nKG5hbWUgfHwgJycpLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgICAgICBpZiAoIWJhbmtOYW1lIHx8ICF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSByZXR1cm47XG4gICAgICAgIGNvbnN0IGFsaWFzZXNTb3VyY2UgPSB2YWx1ZS5hbGlhc2VzICYmIHR5cGVvZiB2YWx1ZS5hbGlhc2VzID09PSAnb2JqZWN0JyA/IHZhbHVlLmFsaWFzZXMgOiB2YWx1ZTtcbiAgICAgICAgY29uc3QgYWxpYXNlcyA9IG5vcm1hbGl6ZUNoYW5uZWxBbGlhc2VzKGFsaWFzZXNTb3VyY2UpO1xuICAgICAgICBiYW5rc1tiYW5rTmFtZV0gPSB7XG4gICAgICAgICAgZHJ1bXM6IGFsaWFzZXMuZHJ1bXMsXG4gICAgICAgICAgaW5zdHJ1bWVudHM6IGFsaWFzZXMuaW5zdHJ1bWVudHMsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIG5leHQuYmFua3MgPSBiYW5rcztcbiAgICB9XG5cbiAgICBpZiAocmF3LmFsaWFzZXMgJiYgdHlwZW9mIHJhdy5hbGlhc2VzID09PSAnb2JqZWN0Jykge1xuICAgICAgbmV4dC5hbGlhc2VzID0gbm9ybWFsaXplQ2hhbm5lbEFsaWFzZXMocmF3LmFsaWFzZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0O1xuICB9XG5cbiAgYXN5bmMgbG9hZFNvdW5kTWFwKCkge1xuICAgIGlmICh0eXBlb2YgZmV0Y2ggIT09ICdmdW5jdGlvbicpIHJldHVybjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFNPVU5EX01BUF9VUkxfQ0FORElEQVRFUy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgdXJsID0gU09VTkRfTUFQX1VSTF9DQU5ESURBVEVTW2ldO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgY2FjaGU6ICduby1zdG9yZScsIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSBTdHJpbmcocmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoY29udGVudFR5cGUuaW5jbHVkZXMoJ3RleHQvaHRtbCcpKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgbG9hZGVkID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB0aGlzLnNvdW5kTWFwID0gdGhpcy5ub3JtYWxpemVMb2FkZWRTb3VuZE1hcChsb2FkZWQpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlnbm9yZSBhbmQgY29udGludWUgd2l0aCBkZWZhdWx0c1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldERydW1Qcm9maWxlKGluc3RydW1lbnQpIHtcbiAgICBjb25zdCBpZCA9IE51bWJlci5pc0Zpbml0ZShpbnN0cnVtZW50KSA/IGluc3RydW1lbnQgOiAwO1xuICAgIGNvbnN0IGtleSA9IGAjJHtpZCArIDIwMDB9YDtcbiAgICByZXR1cm4gdGhpcy5zb3VuZE1hcCAmJiB0aGlzLnNvdW5kTWFwLmRydW1zID8gdGhpcy5zb3VuZE1hcC5kcnVtc1trZXldIDogbnVsbDtcbiAgfVxuXG4gIGdldEluc3RydW1lbnRQcm9maWxlKGluc3RydW1lbnQpIHtcbiAgICBjb25zdCBrZXkgPSBTdHJpbmcocGFyc2VJbnQoaW5zdHJ1bWVudCwgMTApKTtcbiAgICBpZiAoIXRoaXMuc291bmRNYXAgfHwgIXRoaXMuc291bmRNYXAuaW5zdHJ1bWVudHMgfHwga2V5ID09PSAnTmFOJykgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHRoaXMuc291bmRNYXAuaW5zdHJ1bWVudHNba2V5XSB8fCBudWxsO1xuICB9XG5cbiAgZ2V0Q2hhbm5lbEFsaWFzZXMoKSB7XG4gICAgaWYgKCF0aGlzLnNvdW5kTWFwIHx8ICF0aGlzLnNvdW5kTWFwLmFsaWFzZXMpIHJldHVybiBERUZBVUxUX0NIQU5ORUxfQUxJQVNFUztcbiAgICByZXR1cm4gdGhpcy5zb3VuZE1hcC5hbGlhc2VzO1xuICB9XG5cbiAgZ2V0QWxpYXNCYW5rKG5hbWUpIHtcbiAgICBjb25zdCBrZXkgPSBTdHJpbmcobmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgaWYgKCFrZXkgfHwgIXRoaXMuc291bmRNYXAgfHwgIXRoaXMuc291bmRNYXAuYmFua3MpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB0aGlzLnNvdW5kTWFwLmJhbmtzW2tleV0gfHwgbnVsbDtcbiAgfVxuXG4gIHJlc29sdmVDaGFubmVsQWxpYXNlcyhzZWxlY3Rpb24gPSB7fSkge1xuICAgIGxldCBhbGlhc2VzID0gdGhpcy5nZXRDaGFubmVsQWxpYXNlcygpO1xuXG4gICAgY29uc3QgYWxsQmFuayA9IHRoaXMuZ2V0QWxpYXNCYW5rKHNlbGVjdGlvbi5iYW5rKTtcbiAgICBpZiAoYWxsQmFuaykgYWxpYXNlcyA9IG1lcmdlQ2hhbm5lbEFsaWFzZXMoYWxpYXNlcywgYWxsQmFuayk7XG5cbiAgICBjb25zdCBkcnVtc0JhbmsgPSB0aGlzLmdldEFsaWFzQmFuayhzZWxlY3Rpb24uZHJ1bXMpO1xuICAgIGlmIChkcnVtc0JhbmspIGFsaWFzZXMgPSBtZXJnZUNoYW5uZWxBbGlhc2VzKGFsaWFzZXMsIHsgZHJ1bXM6IGRydW1zQmFuay5kcnVtcyB9KTtcblxuICAgIGNvbnN0IGluc3RydW1lbnRzQmFuayA9IHRoaXMuZ2V0QWxpYXNCYW5rKHNlbGVjdGlvbi5pbnN0cnVtZW50cyk7XG4gICAgaWYgKGluc3RydW1lbnRzQmFuaykgYWxpYXNlcyA9IG1lcmdlQ2hhbm5lbEFsaWFzZXMoYWxpYXNlcywgeyBpbnN0cnVtZW50czogaW5zdHJ1bWVudHNCYW5rLmluc3RydW1lbnRzIH0pO1xuXG4gICAgcmV0dXJuIGFsaWFzZXM7XG4gIH1cblxuICBhcHBseU1hc3RlclByZWFtcFN0YXRlKCkge1xuICAgIGNvbnN0IG5vdyA9IHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lO1xuICAgIGNvbnN0IGN1dG9mZnMgPSBBcnJheS5pc0FycmF5KHRoaXMubWFzdGVyUHJlYW1wU3RhdGUuY3V0b2ZmcykgJiYgdGhpcy5tYXN0ZXJQcmVhbXBTdGF0ZS5jdXRvZmZzLmxlbmd0aFxuICAgICAgPyB0aGlzLm1hc3RlclByZWFtcFN0YXRlLmN1dG9mZnNcbiAgICAgIDogWzEwMCwgNDAwLCAxNTAwLCA2MDAwXTtcbiAgICB0aGlzLm1hc3RlclByZWFtcEJ5cGFzcy5nYWluLnNldFRhcmdldEF0VGltZSh0aGlzLm1hc3RlclByZWFtcFN0YXRlLmVuYWJsZWQgPyAwIDogMSwgbm93LCAwLjAxKTtcbiAgICB0aGlzLm1hc3RlclByZWFtcElucHV0LmdhaW4uc2V0VGFyZ2V0QXRUaW1lKHRoaXMubWFzdGVyUHJlYW1wU3RhdGUuZW5hYmxlZCA/IDEgOiAwLCBub3csIDAuMDEpO1xuICAgIHRoaXMubWFzdGVyUHJlYW1wSFBGLmZyZXF1ZW5jeS5zZXRUYXJnZXRBdFRpbWUodGhpcy5tYXN0ZXJQcmVhbXBTdGF0ZS5ocGYsIG5vdywgMC4wMik7XG4gICAgdGhpcy5tYXN0ZXJQcmVhbXBMUEYuZnJlcXVlbmN5LnNldFRhcmdldEF0VGltZSh0aGlzLm1hc3RlclByZWFtcFN0YXRlLmxwZiwgbm93LCAwLjAyKTtcbiAgICB0aGlzLm1hc3RlclByZWFtcEhQRi5RLnNldFRhcmdldEF0VGltZSh0aGlzLm1hc3RlclByZWFtcFN0YXRlLnEsIG5vdywgMC4wMik7XG4gICAgdGhpcy5tYXN0ZXJQcmVhbXBMUEYuUS5zZXRUYXJnZXRBdFRpbWUodGhpcy5tYXN0ZXJQcmVhbXBTdGF0ZS5xLCBub3csIDAuMDIpO1xuICAgIHRoaXMubWFzdGVyUHJlYW1wQmFuZHMuZm9yRWFjaCgoYmFuZCwgaSkgPT4ge1xuICAgICAgY29uc3Qgc2VuZHMgPSB0aGlzLm1hc3RlclByZWFtcFN0YXRlLmJhbmRTZW5kc1tpXSB8fCB7IHJldmVyYjogMCwgZGVsYXk6IDAgfTtcbiAgICAgIGNvbnN0IGxvdyA9IGkgPT09IDAgPyAyMCA6IGN1dG9mZnNbTWF0aC5taW4oaSAtIDEsIGN1dG9mZnMubGVuZ3RoIC0gMSldO1xuICAgICAgY29uc3QgaGlnaCA9IGkgPj0gNCA/IDIwMDAwIDogY3V0b2Zmc1tNYXRoLm1pbihpLCBjdXRvZmZzLmxlbmd0aCAtIDEpXTtcbiAgICAgIGJhbmQuaHBmLmZyZXF1ZW5jeS5zZXRUYXJnZXRBdFRpbWUobG93LCBub3csIDAuMDIpO1xuICAgICAgYmFuZC5scGYuZnJlcXVlbmN5LnNldFRhcmdldEF0VGltZShoaWdoLCBub3csIDAuMDIpO1xuICAgICAgYmFuZC5nYWluLmdhaW4uc2V0VGFyZ2V0QXRUaW1lKDEsIG5vdywgMC4wMik7XG4gICAgICBiYW5kLnJldmVyYlNlbmQuZ2Fpbi5zZXRUYXJnZXRBdFRpbWUodGhpcy5tYXN0ZXJQcmVhbXBTdGF0ZS5lbmFibGVkID8gY2xhbXAoc2VuZHMucmV2ZXJiLCAwLCAxKSA6IDAsIG5vdywgMC4wMik7XG4gICAgICBiYW5kLmRlbGF5U2VuZC5nYWluLnNldFRhcmdldEF0VGltZSh0aGlzLm1hc3RlclByZWFtcFN0YXRlLmVuYWJsZWQgPyBjbGFtcChzZW5kcy5kZWxheSwgMCwgMSkgOiAwLCBub3csIDAuMDIpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0TWFzdGVyUHJlYW1wRW5hYmxlZChlbmFibGVkKSB7XG4gICAgdGhpcy5tYXN0ZXJQcmVhbXBTdGF0ZS5lbmFibGVkID0gQm9vbGVhbihlbmFibGVkKTtcbiAgICB0aGlzLmFwcGx5TWFzdGVyUHJlYW1wU3RhdGUoKTtcbiAgfVxuXG4gIHNldE1hc3RlclByZWFtcEN1dG9mZnMoY3V0b2Zmcykge1xuICAgIHRoaXMubWFzdGVyUHJlYW1wU3RhdGUuY3V0b2ZmcyA9IChBcnJheS5pc0FycmF5KGN1dG9mZnMpID8gY3V0b2ZmcyA6IFtdKVxuICAgICAgLm1hcCh2ID0+IGNsYW1wKHYsIDIwLCAyMDAwMCkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgIHRoaXMuYXBwbHlNYXN0ZXJQcmVhbXBTdGF0ZSgpO1xuICB9XG5cbiAgc2V0TWFzdGVyUHJlYW1wSFBGKGZyZXFIeikge1xuICAgIHRoaXMubWFzdGVyUHJlYW1wU3RhdGUuaHBmID0gY2xhbXAoZnJlcUh6LCAyMCwgMjAwMDApO1xuICAgIHRoaXMuYXBwbHlNYXN0ZXJQcmVhbXBTdGF0ZSgpO1xuICB9XG5cbiAgc2V0TWFzdGVyUHJlYW1wTFBGKGZyZXFIeikge1xuICAgIHRoaXMubWFzdGVyUHJlYW1wU3RhdGUubHBmID0gY2xhbXAoZnJlcUh6LCAyMCwgMjAwMDApO1xuICAgIHRoaXMuYXBwbHlNYXN0ZXJQcmVhbXBTdGF0ZSgpO1xuICB9XG5cbiAgc2V0TWFzdGVyUHJlYW1wUShxKSB7XG4gICAgdGhpcy5tYXN0ZXJQcmVhbXBTdGF0ZS5xID0gY2xhbXAocSwgMC4xLCAxOCk7XG4gICAgdGhpcy5hcHBseU1hc3RlclByZWFtcFN0YXRlKCk7XG4gIH1cblxuICBzZXRNYXN0ZXJQcmVhbXBCYW5kUmV2ZXJiU2VuZChpbmRleCwgdmFsdWUpIHtcbiAgICBjb25zdCBpID0gY2xhbXAocGFyc2VJbnQoaW5kZXgsIDEwKSB8fCAwLCAwLCA0KTtcbiAgICBjb25zdCBzZW5kcyA9IHRoaXMubWFzdGVyUHJlYW1wU3RhdGUuYmFuZFNlbmRzW2ldIHx8IHsgcmV2ZXJiOiAwLCBkZWxheTogMCB9O1xuICAgIHNlbmRzLnJldmVyYiA9IGNsYW1wKHZhbHVlLCAwLCAxKTtcbiAgICB0aGlzLm1hc3RlclByZWFtcFN0YXRlLmJhbmRTZW5kc1tpXSA9IHNlbmRzO1xuICAgIHRoaXMuYXBwbHlNYXN0ZXJQcmVhbXBTdGF0ZSgpO1xuICB9XG5cbiAgc2V0TWFzdGVyUHJlYW1wQmFuZERlbGF5U2VuZChpbmRleCwgdmFsdWUpIHtcbiAgICBjb25zdCBpID0gY2xhbXAocGFyc2VJbnQoaW5kZXgsIDEwKSB8fCAwLCAwLCA0KTtcbiAgICBjb25zdCBzZW5kcyA9IHRoaXMubWFzdGVyUHJlYW1wU3RhdGUuYmFuZFNlbmRzW2ldIHx8IHsgcmV2ZXJiOiAwLCBkZWxheTogMCB9O1xuICAgIHNlbmRzLmRlbGF5ID0gY2xhbXAodmFsdWUsIDAsIDEpO1xuICAgIHRoaXMubWFzdGVyUHJlYW1wU3RhdGUuYmFuZFNlbmRzW2ldID0gc2VuZHM7XG4gICAgdGhpcy5hcHBseU1hc3RlclByZWFtcFN0YXRlKCk7XG4gIH1cblxuICBnZXRNYXN0ZXJQcmVhbXBCYW5kTGV2ZWxzKCkge1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLm1hc3RlclByZWFtcEJhbmRzKSkgcmV0dXJuIFswLCAwLCAwLCAwLCAwXTtcbiAgICByZXR1cm4gdGhpcy5tYXN0ZXJQcmVhbXBCYW5kcy5tYXAoYmFuZCA9PiB7XG4gICAgICBpZiAoIWJhbmQgfHwgIWJhbmQuYW5hbHlzZXIgfHwgIWJhbmQudnVEYXRhKSByZXR1cm4gMDtcbiAgICAgIGJhbmQuYW5hbHlzZXIuZ2V0Qnl0ZVRpbWVEb21haW5EYXRhKGJhbmQudnVEYXRhKTtcbiAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYW5kLnZ1RGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBzdW0gKz0gTWF0aC5hYnMoKGJhbmQudnVEYXRhW2ldIC0gMTI4KSAvIDEyOCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY2xhbXAoKHN1bSAvIGJhbmQudnVEYXRhLmxlbmd0aCkgKiAzLjIsIDAsIDEpO1xuICAgIH0pO1xuICB9XG5cbiAgc2V0RGVsYXlGZWVkYmFjayh2YWx1ZSkge1xuICAgIHRoaXMuZGVsYXlGZWVkYmFjay5nYWluLnZhbHVlID0gY2xhbXAodmFsdWUsIDAsIDEuMSk7XG4gIH1cblxuICBzZXREZWxheVNlY29uZHMoc2Vjb25kcykge1xuICAgIGNvbnN0IHQgPSBjbGFtcChzZWNvbmRzLCAwLjA1LCAwLjgpO1xuICAgIGNvbnN0IG5vdyA9IHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lO1xuICAgIHRoaXMuZGVsYXlOb2RlLmRlbGF5VGltZS5zZXRUYXJnZXRBdFRpbWUodCwgbm93LCAwLjA0KTtcbiAgfVxuXG4gIHNldERlbGF5VGltZSh2YWx1ZSkge1xuICAgIHRoaXMuZGVsYXlEaXZpc2lvbiA9IGNsYW1wKHZhbHVlLCAwLjEyNSwgMC43NSk7XG4gICAgdGhpcy51cGRhdGVEZWxheVRpbWUoKTtcbiAgfVxuXG4gIHVwZGF0ZURlbGF5VGltZSgpIHtcbiAgICBjb25zdCB3aG9sZSA9ICg0ICogNjApIC8gKHRoaXMuYnBtIHx8IDEyNyk7XG4gICAgdGhpcy5zZXREZWxheVNlY29uZHMod2hvbGUgKiB0aGlzLmRlbGF5RGl2aXNpb24pO1xuICB9XG5cbiAgbG9hZFBhZChpbmRleCwgYXVkaW9CdWZmZXIsIGxhYmVsID0gJ3NhbXBsZScpIHtcbiAgICBjb25zdCBpID0gY2xhbXAoaW5kZXgsIDAsIHRoaXMucGFkcy5sZW5ndGggLSAxKTtcbiAgICBpZiAoIWF1ZGlvQnVmZmVyKSByZXR1cm47XG4gICAgdGhpcy5wYWRzW2ldLmJ1ZmZlciA9IGF1ZGlvQnVmZmVyO1xuICAgIHRoaXMucGFkc1tpXS5sYWJlbCA9IGxhYmVsO1xuICB9XG5cbiAgYXN5bmMgbG9hZFBhZEZyb21GaWxlKGluZGV4LCBmaWxlKSB7XG4gICAgaWYgKCFmaWxlKSByZXR1cm47XG4gICAgY29uc3QgYWIgPSBhd2FpdCBmaWxlLmFycmF5QnVmZmVyKCk7XG4gICAgY29uc3QgZGVjb2RlZCA9IGF3YWl0IHRoaXMuYXVkaW9Db250ZXh0LmRlY29kZUF1ZGlvRGF0YShhYik7XG4gICAgdGhpcy5sb2FkUGFkKGluZGV4LCBkZWNvZGVkLCBmaWxlLm5hbWUgfHwgYHNhbXBsZSAke2luZGV4ICsgMX1gKTtcbiAgfVxuXG4gIHRyaWdnZXJQYWQoaW5kZXgsIGxvb3AgPSBmYWxzZSwgdmVsb2NpdHkgPSAxMjcpIHtcbiAgICBjb25zdCBpID0gY2xhbXAoaW5kZXgsIDAsIHRoaXMucGFkcy5sZW5ndGggLSAxKTtcbiAgICBjb25zdCBwYWQgPSB0aGlzLnBhZHNbaV07XG4gICAgaWYgKCFwYWQgfHwgIXBhZC5idWZmZXIpIHJldHVybiBmYWxzZTtcbiAgICBpZiAodGhpcy5wYWRTb3VyY2VzW2ldKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnBhZFNvdXJjZXNbaV0uc3RvcCgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZ25vcmVcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgc3JjID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgc3JjLmJ1ZmZlciA9IHBhZC5idWZmZXI7XG4gICAgc3JjLmxvb3AgPSBCb29sZWFuKGxvb3ApO1xuICAgIGNvbnN0IHZlbCA9IGNsYW1wKHZlbG9jaXR5IC8gMTI3LCAwLjA1LCAxKTtcbiAgICB0aGlzLnBhZEdhaW5zW2ldLmdhaW4uc2V0VGFyZ2V0QXRUaW1lKHZlbCwgdGhpcy5hdWRpb0NvbnRleHQuY3VycmVudFRpbWUsIDAuMDEpO1xuICAgIHNyYy5jb25uZWN0KHRoaXMucGFkR2FpbnNbaV0pO1xuICAgIHNyYy5zdGFydCgwKTtcbiAgICBzcmMub25lbmRlZCA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnBhZFNvdXJjZXNbaV0gPT09IHNyYykgdGhpcy5wYWRTb3VyY2VzW2ldID0gbnVsbDtcbiAgICB9O1xuICAgIHRoaXMucGFkU291cmNlc1tpXSA9IHNyYztcbiAgICB0aGlzLnBhZHNbaV0ubG9vcGluZyA9IEJvb2xlYW4obG9vcCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdG9wUGFkKGluZGV4KSB7XG4gICAgY29uc3QgaSA9IGNsYW1wKGluZGV4LCAwLCB0aGlzLnBhZHMubGVuZ3RoIC0gMSk7XG4gICAgY29uc3Qgc3JjID0gdGhpcy5wYWRTb3VyY2VzW2ldO1xuICAgIGlmICghc3JjKSByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIHNyYy5zdG9wKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gaWdub3JlXG4gICAgfVxuICAgIHRoaXMucGFkU291cmNlc1tpXSA9IG51bGw7XG4gICAgdGhpcy5wYWRzW2ldLmxvb3BpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIHNldFBhZFZvbHVtZShpbmRleCwgdmFsdWUpIHtcbiAgICBjb25zdCBpID0gY2xhbXAoaW5kZXgsIDAsIHRoaXMucGFkcy5sZW5ndGggLSAxKTtcbiAgICB0aGlzLnBhZEdhaW5zW2ldLmdhaW4udmFsdWUgPSBjbGFtcCh2YWx1ZSwgMCwgMSk7XG4gIH1cblxuICBzZXRQYWRzUmV2ZXJiKHZhbHVlKSB7XG4gICAgdGhpcy5wYWRNYXN0ZXJSZXZlcmIgPSBjbGFtcCh2YWx1ZSwgMCwgMSk7XG4gICAgdGhpcy5wYWRSZXZlcmJTZW5kcy5mb3JFYWNoKG5vZGUgPT4geyBub2RlLmdhaW4udmFsdWUgPSB0aGlzLnBhZE1hc3RlclJldmVyYjsgfSk7XG4gIH1cblxuICBzZXRQYWRzRGVsYXkodmFsdWUpIHtcbiAgICB0aGlzLnBhZE1hc3RlckRlbGF5ID0gY2xhbXAodmFsdWUsIDAsIDEpO1xuICAgIHRoaXMucGFkRGVsYXlTZW5kcy5mb3JFYWNoKG5vZGUgPT4geyBub2RlLmdhaW4udmFsdWUgPSB0aGlzLnBhZE1hc3RlckRlbGF5OyB9KTtcbiAgfVxuXG4gIGdldFRyYWNrS2V5cygpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMudHJhY2tOb2Rlcy5rZXlzKCldO1xuICB9XG5cbiAgY2FuY2VsUXVldWUoKSB7XG4gICAgdGhpcy5wbGF5ZXIuY2FuY2VsUXVldWUodGhpcy5hdWRpb0NvbnRleHQpO1xuICB9XG5cbiAgaXNGb250UmVhZHkodmFyaWFibGUpIHtcbiAgICBjb25zdCBwcmVzZXQgPSB3aW5kb3dbdmFyaWFibGVdO1xuICAgIHJldHVybiBCb29sZWFuKHByZXNldCAmJiBBcnJheS5pc0FycmF5KHByZXNldC56b25lcykgJiYgcHJlc2V0LnpvbmVzLmxlbmd0aCA+IDApO1xuICB9XG5cbiAgZ2V0Rm9udEZpbGVuYW1lKHVybCkge1xuICAgIGlmICghdXJsIHx8IHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSByZXR1cm4gJyc7XG4gICAgY29uc3QgY2xlYW4gPSB1cmwuc3BsaXQoJz8nKVswXS5zcGxpdCgnIycpWzBdO1xuICAgIGNvbnN0IHBhcnRzID0gY2xlYW4uc3BsaXQoJy8nKTtcbiAgICByZXR1cm4gcGFydHNbcGFydHMubGVuZ3RoIC0gMV0gfHwgJyc7XG4gIH1cblxuICBnZXRGb250U291cmNlQ2FuZGlkYXRlcyhpbmZvKSB7XG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgY29uc3Qgc2VlbiA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBwdXNoID0gKHVybCkgPT4ge1xuICAgICAgaWYgKCF1cmwgfHwgc2Vlbi5oYXModXJsKSkgcmV0dXJuO1xuICAgICAgc2Vlbi5hZGQodXJsKTtcbiAgICAgIG91dC5wdXNoKHVybCk7XG4gICAgfTtcblxuICAgIHB1c2goaW5mbyAmJiBpbmZvLnVybCA/IFN0cmluZyhpbmZvLnVybCkgOiAnJyk7XG5cbiAgICBjb25zdCBmaWxlbmFtZSA9IHRoaXMuZ2V0Rm9udEZpbGVuYW1lKGluZm8gJiYgaW5mby51cmwpO1xuICAgIGlmIChmaWxlbmFtZSkge1xuICAgICAgcHVzaChgJHtMT0NBTF9GT05UX0JBU0V9LyR7ZmlsZW5hbWV9YCk7XG4gICAgICBwdXNoKGAuL3dlYmF1ZGlvZm9udC9zb3VuZC8ke2ZpbGVuYW1lfWApO1xuICAgIH1cblxuICAgIHJldHVybiBvdXQ7XG4gIH1cblxuICBpc0Nyb3NzT3JpZ2luVXJsKHVybCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IFVSTCh1cmwsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKS5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGlzSHRtbExpa2VSZXNwb25zZShjb250ZW50VHlwZSwgc291cmNlKSB7XG4gICAgY29uc3QgdHlwZSA9IFN0cmluZyhjb250ZW50VHlwZSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAodHlwZS5pbmNsdWRlcygndGV4dC9odG1sJykgfHwgdHlwZS5pbmNsdWRlcygnYXBwbGljYXRpb24veGh0bWwreG1sJykpIHJldHVybiB0cnVlO1xuICAgIGNvbnN0IGhlYWQgPSBTdHJpbmcoc291cmNlIHx8ICcnKS50cmltU3RhcnQoKS5zbGljZSgwLCAxNjApLnRvTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIGhlYWQuc3RhcnRzV2l0aCgnPCFkb2N0eXBlIGh0bWwnKVxuICAgICAgfHwgaGVhZC5zdGFydHNXaXRoKCc8aHRtbCcpXG4gICAgICB8fCBoZWFkLnN0YXJ0c1dpdGgoJzxoZWFkJylcbiAgICAgIHx8IGhlYWQuc3RhcnRzV2l0aCgnPGJvZHknKVxuICAgICk7XG4gIH1cblxuICBleGVjdXRlRm9udFNjcmlwdFNvdXJjZSh1cmwsIHNvdXJjZSwgdmFyaWFibGUpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGRvY3VtZW50IGZvciBzY3JpcHQgZXhlY3V0aW9uJyk7XG4gICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBzY3JpcHQudGV4dCA9IGAke3NvdXJjZX1cXG4vLyMgc291cmNlVVJMPSR7dXJsfWA7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIHNjcmlwdC5yZW1vdmUoKTtcbiAgICBpZiAodGhpcy5pc0ZvbnRSZWFkeSh2YXJpYWJsZSkpIHJldHVybiB0cnVlO1xuICAgIHRocm93IG5ldyBFcnJvcihgTG9hZGVkICR7dXJsfSwgYnV0IG1pc3NpbmcgcHJlc2V0ICcke3ZhcmlhYmxlfSdgKTtcbiAgfVxuXG4gIGxvYWRGb250U2NyaXB0VGFnKHVybCwgdmFyaWFibGUsIHRpbWVvdXRNcyA9IEZPTlRfTE9BRF9USU1FT1VUX01TKSB7XG4gICAgaWYgKHRoaXMuaXNGb250UmVhZHkodmFyaWFibGUpKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdNaXNzaW5nIGRvY3VtZW50IGZvciBzY3JpcHQgbG9hZGluZycpKTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIGxldCBkb25lID0gZmFsc2U7XG4gICAgICBjb25zdCBmaW5pc2ggPSAob2ssIGVycm9yKSA9PiB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgaWYgKG9rKSByZXNvbHZlKHRydWUpO1xuICAgICAgICBlbHNlIHJlamVjdChlcnJvciB8fCBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkICR7dXJsfWApKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmaW5pc2goZmFsc2UsIG5ldyBFcnJvcihgVGltZWQgb3V0IGxvYWRpbmcgJHt1cmx9YCkpO1xuICAgICAgfSwgdGltZW91dE1zKTtcblxuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgIHNjcmlwdC5zcmMgPSB1cmw7XG4gICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSAnYW5vbnltb3VzJztcbiAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRm9udFJlYWR5KHZhcmlhYmxlKSkge1xuICAgICAgICAgIGZpbmlzaCh0cnVlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZmluaXNoKGZhbHNlLCBuZXcgRXJyb3IoYExvYWRlZCAke3VybH0sIGJ1dCBtaXNzaW5nIHByZXNldCAnJHt2YXJpYWJsZX0nYCkpO1xuICAgICAgfTtcbiAgICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICBmaW5pc2goZmFsc2UsIG5ldyBFcnJvcihgTmV0d29yayBlcnJvciBsb2FkaW5nICR7dXJsfWApKTtcbiAgICAgIH07XG5cbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGxvYWRGb250U2NyaXB0KHVybCwgdmFyaWFibGUsIHRpbWVvdXRNcyA9IEZPTlRfTE9BRF9USU1FT1VUX01TKSB7XG4gICAgaWYgKHRoaXMuaXNGb250UmVhZHkodmFyaWFibGUpKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAodHlwZW9mIGZldGNoICE9PSAnZnVuY3Rpb24nKSByZXR1cm4gdGhpcy5sb2FkRm9udFNjcmlwdFRhZyh1cmwsIHZhcmlhYmxlLCB0aW1lb3V0TXMpO1xuXG4gICAgY29uc3QgY29udHJvbGxlciA9IHR5cGVvZiBBYm9ydENvbnRyb2xsZXIgPT09ICdmdW5jdGlvbicgPyBuZXcgQWJvcnRDb250cm9sbGVyKCkgOiBudWxsO1xuICAgIGxldCB0aW1lb3V0SWQgPSBudWxsO1xuICAgIGlmIChjb250cm9sbGVyKSB7XG4gICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2xsZXIuYWJvcnQoKSwgdGltZW91dE1zKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgY2FjaGU6ICduby1zdG9yZScsXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICBzaWduYWw6IGNvbnRyb2xsZXIgPyBjb250cm9sbGVyLnNpZ25hbCA6IHVuZGVmaW5lZCxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBIVFRQICR7cmVzcG9uc2Uuc3RhdHVzfSBsb2FkaW5nICR7dXJsfWApO1xuICAgICAgY29uc3Qgc291cmNlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgaWYgKHRoaXMuaXNIdG1sTGlrZVJlc3BvbnNlKHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSwgc291cmNlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJlY2VpdmVkIEhUTUwgcmVzcG9uc2UgZm9yICR7dXJsfWApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuZXhlY3V0ZUZvbnRTY3JpcHRTb3VyY2UodXJsLCBzb3VyY2UsIHZhcmlhYmxlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IFN0cmluZygoZXJyb3IgJiYgZXJyb3IubWVzc2FnZSkgfHwgZXJyb3IgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjb25zdCBjb3JzT3JOZXR3b3JrID1cbiAgICAgICAgZXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gJ1R5cGVFcnJvcidcbiAgICAgICAgJiYgKG1lc3NhZ2UuaW5jbHVkZXMoJ2ZldGNoJykgfHwgbWVzc2FnZS5pbmNsdWRlcygnbmV0d29yaycpIHx8IG1lc3NhZ2UuaW5jbHVkZXMoJ2NvcnMnKSk7XG4gICAgICBjb25zdCBhYm9ydGVkID0gZXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gJ0Fib3J0RXJyb3InO1xuXG4gICAgICBpZiAoYWJvcnRlZCkgdGhyb3cgbmV3IEVycm9yKGBUaW1lZCBvdXQgbG9hZGluZyAke3VybH1gKTtcbiAgICAgIGlmIChjb3JzT3JOZXR3b3JrICYmIHRoaXMuaXNDcm9zc09yaWdpblVybCh1cmwpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvYWRGb250U2NyaXB0VGFnKHVybCwgdmFyaWFibGUsIHRpbWVvdXRNcyk7XG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKHRpbWVvdXRJZCkgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgbG9hZEZvbnRXaXRoRmFsbGJhY2soaW5mbykge1xuICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSB0aGlzLmdldEZvbnRTb3VyY2VDYW5kaWRhdGVzKGluZm8pO1xuICAgIGxldCBsYXN0RXJyb3IgPSBudWxsO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FuZGlkYXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgdXJsID0gY2FuZGlkYXRlc1tpXTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZEZvbnRTY3JpcHQodXJsLCBpbmZvLnZhcmlhYmxlKTtcbiAgICAgICAgaWYgKHRoaXMuaXNGb250UmVhZHkoaW5mby52YXJpYWJsZSkpIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbGFzdEVycm9yID0gZXJyb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxhc3RFcnJvcikge1xuICAgICAgY29uc29sZS53YXJuKGBQcmVzZXQgbG9hZCBmYWlsZWQgZm9yICcke2luZm8udmFyaWFibGV9JywgZW5hYmxpbmcgc3ludGggZmFsbGJhY2suYCwgbGFzdEVycm9yLm1lc3NhZ2UgfHwgbGFzdEVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY2FjaGVJbnN0cnVtZW50KGluZm8pIHtcbiAgICBpZiAoIWluZm8gfHwgIWluZm8udmFyaWFibGUpIHJldHVybjtcbiAgICBpZiAodGhpcy5pc0ZvbnRSZWFkeShpbmZvLnZhcmlhYmxlKSkge1xuICAgICAgdGhpcy5mb250TG9hZFN0YXR1cy5zZXQoaW5mby52YXJpYWJsZSwgJ3JlYWR5Jyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmZvbnRMb2FkUHJvbWlzZXMuaGFzKGluZm8udmFyaWFibGUpKSByZXR1cm47XG5cbiAgICB0aGlzLmZvbnRMb2FkU3RhdHVzLnNldChpbmZvLnZhcmlhYmxlLCAnbG9hZGluZycpO1xuICAgIGNvbnN0IGRlZmVycmVkID0gdGhpcy5sb2FkRm9udFdpdGhGYWxsYmFjayhpbmZvKVxuICAgICAgLnRoZW4ob2sgPT4ge1xuICAgICAgICB0aGlzLmZvbnRMb2FkU3RhdHVzLnNldChpbmZvLnZhcmlhYmxlLCBvayA/ICdyZWFkeScgOiAnZmFpbGVkJyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgdGhpcy5mb250TG9hZFN0YXR1cy5zZXQoaW5mby52YXJpYWJsZSwgJ2ZhaWxlZCcpO1xuICAgICAgICBjb25zb2xlLndhcm4oYFByZXNldCBsb2FkIHRocmV3IGZvciAnJHtpbmZvLnZhcmlhYmxlfScsIHVzaW5nIHN5bnRoIGZhbGxiYWNrLmAsIGVycm9yICYmIGVycm9yLm1lc3NhZ2UgPyBlcnJvci5tZXNzYWdlIDogZXJyb3IpO1xuICAgICAgfSlcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgdGhpcy5mb250TG9hZFByb21pc2VzLmRlbGV0ZShpbmZvLnZhcmlhYmxlKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5mb250TG9hZFByb21pc2VzLnNldChpbmZvLnZhcmlhYmxlLCBkZWZlcnJlZCk7XG4gIH1cblxuICBwbGF5RHJ1bSh3aGVuLCBkcnVtLCBub2Rlcykge1xuICAgIGNvbnN0IFtpbnN0cnVtZW50LCBsZXZlbF0gPSBkcnVtO1xuICAgIGNvbnN0IGluZm8gPSB0aGlzLnBsYXllci5sb2FkZXIuZHJ1bUluZm8oaW5zdHJ1bWVudCk7XG4gICAgaWYgKCF0aGlzLmlzRm9udFJlYWR5KGluZm8udmFyaWFibGUpKSB7XG4gICAgICB0aGlzLmNhY2hlSW5zdHJ1bWVudChpbmZvKTtcbiAgICAgIHRoaXMucXVldWVTeW50aERydW1Ub1RyYWNrTm9kZXMod2hlbiwgaW5zdHJ1bWVudCwgbGV2ZWwsIG5vZGVzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcHJlc2V0ID0gd2luZG93W2luZm8udmFyaWFibGVdO1xuICAgIGNvbnN0IHBpdGNoID0gcHJlc2V0LnpvbmVzWzBdLmtleVJhbmdlTG93O1xuICAgIGNvbnN0IGdhaW4gPSAoMSAvIDEyNykgKiBsZXZlbDtcbiAgICBpZiAobGV2ZWwgPiAwKSB0aGlzLnF1ZXVlVG9UcmFja05vZGVzKHByZXNldCwgd2hlbiwgcGl0Y2gsIDEgLyA2NCwgZ2Fpbiwgbm9kZXMpO1xuICB9XG5cbiAgcXVldWVUb1RyYWNrTm9kZXMoZm9udCwgd2hlbiwgcGl0Y2gsIGR1cmF0aW9uLCBnYWluLCBub2Rlcykge1xuICAgIGNvbnN0IHN0YXJ0QXQgPSBNYXRoLm1heCh3aGVuLCB0aGlzLmF1ZGlvQ29udGV4dC5jdXJyZW50VGltZSArIDAuMDAxKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwaXRjaCkpIHtcbiAgICAgIGNvbnN0IHRvbmVzID0gcGl0Y2guZmlsdGVyKE51bWJlci5pc0Zpbml0ZSk7XG4gICAgICBpZiAoIXRvbmVzLmxlbmd0aCkgcmV0dXJuO1xuICAgICAgdGhpcy5wbGF5ZXIucXVldWVDaG9yZCh0aGlzLmF1ZGlvQ29udGV4dCwgbm9kZXMuaW5wdXQsIGZvbnQsIHN0YXJ0QXQsIHRvbmVzLCBkdXJhdGlvbiwgZ2Fpbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGxheWVyLnF1ZXVlV2F2ZVRhYmxlKHRoaXMuYXVkaW9Db250ZXh0LCBub2Rlcy5pbnB1dCwgZm9udCwgc3RhcnRBdCwgcGl0Y2gsIGR1cmF0aW9uLCBnYWluKTtcbiAgfVxuXG4gIGlzQmFzc0ZhbGxiYWNrVm9pY2UoaW5zdHJ1bWVudCwgdG9uZXMpIHtcbiAgICBjb25zdCBwcm9ncmFtID0gTnVtYmVyLmlzRmluaXRlKGluc3RydW1lbnQpID8gaW5zdHJ1bWVudCA6IC0xO1xuICAgIGNvbnN0IHByb2ZpbGUgPSB0aGlzLmdldEluc3RydW1lbnRQcm9maWxlKHByb2dyYW0pO1xuICAgIGlmIChwcm9maWxlICYmIFN0cmluZyhwcm9maWxlLmZhbWlseSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ2Jhc3MnKSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAocHJvZ3JhbSA+PSAzMiAmJiBwcm9ncmFtIDw9IDM5KSByZXR1cm4gdHJ1ZTtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodG9uZXMpIHx8ICF0b25lcy5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBtYXhQaXRjaCA9IE1hdGgubWF4KC4uLnRvbmVzKTtcbiAgICByZXR1cm4gTnVtYmVyLmlzRmluaXRlKG1heFBpdGNoKSAmJiBtYXhQaXRjaCA8PSA1MjtcbiAgfVxuXG4gIGdldFN5bnRoRmFsbGJhY2tXYXZlZm9ybShpbnN0cnVtZW50LCBwaXRjaCwgYmFzc0xpa2UgPSBmYWxzZSwgZmFsbGJhY2tXYXZlID0gJ2F1dG8nKSB7XG4gICAgY29uc3QgZXhwbGljaXQgPSBub3JtYWxpemVGYWxsYmFja1dhdmUoZmFsbGJhY2tXYXZlKTtcbiAgICBpZiAoZXhwbGljaXQgIT09ICdhdXRvJykgcmV0dXJuIGV4cGxpY2l0O1xuICAgIGNvbnN0IHByb2ZpbGUgPSB0aGlzLmdldEluc3RydW1lbnRQcm9maWxlKGluc3RydW1lbnQpO1xuICAgIGNvbnN0IHByb2ZpbGVXYXZlID0gbm9ybWFsaXplRmFsbGJhY2tXYXZlKHByb2ZpbGUgJiYgcHJvZmlsZS5mYWxsYmFja1dhdmUgPyBwcm9maWxlLmZhbGxiYWNrV2F2ZSA6ICdhdXRvJyk7XG4gICAgaWYgKHByb2ZpbGVXYXZlICE9PSAnYXV0bycpIHJldHVybiBwcm9maWxlV2F2ZTtcbiAgICBpZiAoIWJhc3NMaWtlKSByZXR1cm4gJ3RyaWFuZ2xlJztcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShwaXRjaCkgfHwgcGl0Y2ggPD0gNDUpIHJldHVybiAnc3F1YXJlJztcbiAgICByZXR1cm4gJ3Nhd3Rvb3RoJztcbiAgfVxuXG4gIHF1ZXVlU3ludGhOb3RlVG9UcmFja05vZGVzKHdoZW4sIGluc3RydW1lbnQsIHBpdGNoLCBkdXJhdGlvbiwgbGV2ZWwsIG5vZGVzLCBmYWxsYmFja1dhdmUgPSAnYXV0bycpIHtcbiAgICBpZiAoIXRoaXMuc3ludGhGYWxsYmFja0VuYWJsZWQpIHJldHVybjtcbiAgICBjb25zdCB0b25lcyA9IEFycmF5LmlzQXJyYXkocGl0Y2gpXG4gICAgICA/IHBpdGNoLmZpbHRlcihOdW1iZXIuaXNGaW5pdGUpXG4gICAgICA6IFtwaXRjaF0uZmlsdGVyKE51bWJlci5pc0Zpbml0ZSk7XG4gICAgaWYgKCF0b25lcy5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0IHZlbG9jaXR5ID0gbm9ybWFsaXplVmVsb2NpdHkobGV2ZWwpO1xuICAgIGlmICh2ZWxvY2l0eSA8PSAwKSByZXR1cm47XG4gICAgY29uc3QgdW5pdCA9IGNsYW1wKCgwLjA0ICsgKHZlbG9jaXR5ICogdGhpcy5zeW50aFZvaWNlR2FpbikpIC8gTWF0aC5zcXJ0KHRvbmVzLmxlbmd0aCksIDAuMDIsIDAuNDIpO1xuICAgIGNvbnN0IGJhc3NMaWtlID0gdGhpcy5pc0Jhc3NGYWxsYmFja1ZvaWNlKGluc3RydW1lbnQsIHRvbmVzKTtcbiAgICB0b25lcy5mb3JFYWNoKHRvbmUgPT4ge1xuICAgICAgY29uc3Qgd2F2ZWZvcm0gPSB0aGlzLmdldFN5bnRoRmFsbGJhY2tXYXZlZm9ybShpbnN0cnVtZW50LCB0b25lLCBiYXNzTGlrZSwgZmFsbGJhY2tXYXZlKTtcbiAgICAgIHRoaXMucXVldWVTeW50aFRvbmVUb1RyYWNrTm9kZXMod2hlbiwgdG9uZSwgZHVyYXRpb24sIHVuaXQsIG5vZGVzLCB3YXZlZm9ybSk7XG4gICAgfSk7XG4gIH1cblxuICBxdWV1ZVN5bnRoVG9uZVRvVHJhY2tOb2Rlcyh3aGVuLCBwaXRjaCwgZHVyYXRpb24sIGdhaW4sIG5vZGVzLCB3YXZlZm9ybSA9ICd0cmlhbmdsZScpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmF1ZGlvQ29udGV4dDtcbiAgICBjb25zdCBzdGFydEF0ID0gTWF0aC5tYXgod2hlbiwgY3R4LmN1cnJlbnRUaW1lICsgMC4wMDEpO1xuICAgIGNvbnN0IGZyZXEgPSBtaWRpVG9GcmVxdWVuY3kocGl0Y2gpO1xuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGZyZXEpKSByZXR1cm47XG5cbiAgICBjb25zdCBvc2MgPSBjdHguY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgIGNvbnN0IGZpbHRlciA9IGN0eC5jcmVhdGVCaXF1YWRGaWx0ZXIoKTtcbiAgICBjb25zdCBhbXAgPSBjdHguY3JlYXRlR2FpbigpO1xuICAgIGNvbnN0IGhvbGQgPSBjbGFtcChkdXJhdGlvbiwgMC4wMywgMS41KTtcbiAgICBjb25zdCBwZWFrID0gY2xhbXAoZ2FpbiwgMC4wMDEsIDAuMzUpO1xuXG4gICAgY29uc3Qgd2F2ZSA9IHdhdmVmb3JtID09PSAnc3F1YXJlJyB8fCB3YXZlZm9ybSA9PT0gJ3Nhd3Rvb3RoJyA/IHdhdmVmb3JtIDogJ3RyaWFuZ2xlJztcbiAgICBvc2MudHlwZSA9IHdhdmU7XG4gICAgb3NjLmZyZXF1ZW5jeS5zZXRWYWx1ZUF0VGltZShmcmVxLCBzdGFydEF0KTtcbiAgICBmaWx0ZXIudHlwZSA9ICdsb3dwYXNzJztcbiAgICBmaWx0ZXIuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKGNsYW1wKGZyZXEgKiAod2F2ZSA9PT0gJ3RyaWFuZ2xlJyA/IDUgOiAzLjIpLCAxODAsIHdhdmUgPT09ICd0cmlhbmdsZScgPyA5ODAwIDogNDIwMCksIHN0YXJ0QXQpO1xuICAgIGZpbHRlci5RLnZhbHVlID0gMC43O1xuXG4gICAgYW1wLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4wMDAxLCBzdGFydEF0KTtcbiAgICBhbXAuZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKHBlYWssIHN0YXJ0QXQgKyAwLjAxMik7XG4gICAgYW1wLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMDEsIHN0YXJ0QXQgKyBob2xkICsgMC4wNik7XG5cbiAgICBvc2MuY29ubmVjdChmaWx0ZXIpO1xuICAgIGZpbHRlci5jb25uZWN0KGFtcCk7XG4gICAgYW1wLmNvbm5lY3Qobm9kZXMuaW5wdXQpO1xuXG4gICAgb3NjLnN0YXJ0KHN0YXJ0QXQpO1xuICAgIG9zYy5zdG9wKHN0YXJ0QXQgKyBob2xkICsgMC4wOCk7XG4gIH1cblxuICByZXNvbHZlRHJ1bUZhbGxiYWNrVHlwZShpbnN0cnVtZW50KSB7XG4gICAgY29uc3QgbiA9IE51bWJlci5pc0Zpbml0ZShpbnN0cnVtZW50KSA/IGluc3RydW1lbnQgOiAwO1xuICAgIGNvbnN0IHByb2ZpbGUgPSB0aGlzLmdldERydW1Qcm9maWxlKG4pO1xuICAgIGlmIChwcm9maWxlICYmIHByb2ZpbGUua2luZCkgcmV0dXJuIG5vcm1hbGl6ZURydW1LaW5kKHByb2ZpbGUua2luZCk7XG5cbiAgICBsZXQgdGl0bGUgPSAnJztcbiAgICB0cnkge1xuICAgICAgY29uc3QgaW5mbyA9IHRoaXMucGxheWVyICYmIHRoaXMucGxheWVyLmxvYWRlciA/IHRoaXMucGxheWVyLmxvYWRlci5kcnVtSW5mbyhuKSA6IG51bGw7XG4gICAgICB0aXRsZSA9IFN0cmluZygoaW5mbyAmJiBpbmZvLnRpdGxlKSB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aXRsZSA9ICcnO1xuICAgIH1cblxuICAgIGNvbnN0IGhpbnRzID0gdGhpcy5zb3VuZE1hcCAmJiB0aGlzLnNvdW5kTWFwLmtleXdvcmRIaW50cyA/IHRoaXMuc291bmRNYXAua2V5d29yZEhpbnRzIDogREVGQVVMVF9TT1VORF9NQVAua2V5d29yZEhpbnRzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRFJVTV9LSU5EUy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3Qga2luZCA9IERSVU1fS0lORFNbaV07XG4gICAgICBjb25zdCB3b3JkcyA9IEFycmF5LmlzQXJyYXkoaGludHNba2luZF0pID8gaGludHNba2luZF0gOiBbXTtcbiAgICAgIGlmICh3b3Jkcy5zb21lKHdvcmQgPT4gd29yZCAmJiB0aXRsZS5pbmNsdWRlcyh3b3JkKSkpIHJldHVybiBraW5kO1xuICAgIH1cblxuICAgIGlmIChuID09PSAxIHx8IG4gPT09IDM2KSByZXR1cm4gJ2tpY2snO1xuICAgIGlmIChuID09PSA0IHx8IG4gPT09IDM3IHx8IG4gPT09IDM4IHx8IG4gPT09IDM5IHx8IG4gPT09IDQwKSByZXR1cm4gJ3NuYXJlJztcbiAgICBpZiAobiA9PT0gMzUgfHwgbiA9PT0gNDIgfHwgbiA9PT0gNDQgfHwgbiA9PT0gNDYpIHJldHVybiAnaGF0JztcbiAgICByZXR1cm4gJ3BlcmMnO1xuICB9XG5cbiAgcXVldWVTeW50aERydW1Ub1RyYWNrTm9kZXMod2hlbiwgaW5zdHJ1bWVudCwgbGV2ZWwsIG5vZGVzKSB7XG4gICAgaWYgKCF0aGlzLnN5bnRoRmFsbGJhY2tFbmFibGVkIHx8ICEobGV2ZWwgPiAwKSkgcmV0dXJuO1xuICAgIGNvbnN0IGN0eCA9IHRoaXMuYXVkaW9Db250ZXh0O1xuICAgIGNvbnN0IHN0YXJ0QXQgPSBNYXRoLm1heCh3aGVuLCBjdHguY3VycmVudFRpbWUgKyAwLjAwMSk7XG4gICAgY29uc3Qga2luZCA9IHRoaXMucmVzb2x2ZURydW1GYWxsYmFja1R5cGUoaW5zdHJ1bWVudCk7XG4gICAgY29uc3QgaXNLaWNrID0ga2luZCA9PT0gJ2tpY2snO1xuICAgIGNvbnN0IHBlYWsgPSBjbGFtcCgobGV2ZWwgLyAxMjcpICogKGlzS2ljayA/IDAuMzYgOiAwLjI0KSwgMC4wMSwgMC40NSk7XG5cbiAgICBpZiAoaXNLaWNrKSB7XG4gICAgICBjb25zdCBvc2MgPSBjdHguY3JlYXRlT3NjaWxsYXRvcigpO1xuICAgICAgY29uc3QgYW1wID0gY3R4LmNyZWF0ZUdhaW4oKTtcbiAgICAgIG9zYy50eXBlID0gJ3NpbmUnO1xuICAgICAgb3NjLmZyZXF1ZW5jeS5zZXRWYWx1ZUF0VGltZSgxNDAsIHN0YXJ0QXQpO1xuICAgICAgb3NjLmZyZXF1ZW5jeS5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDQ4LCBzdGFydEF0ICsgMC4xNCk7XG4gICAgICBhbXAuZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLjAwMDEsIHN0YXJ0QXQpO1xuICAgICAgYW1wLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZShwZWFrLCBzdGFydEF0ICsgMC4wMDUpO1xuICAgICAgYW1wLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMDEsIHN0YXJ0QXQgKyAwLjE2KTtcbiAgICAgIG9zYy5jb25uZWN0KGFtcCk7XG4gICAgICBhbXAuY29ubmVjdChub2Rlcy5pbnB1dCk7XG4gICAgICBvc2Muc3RhcnQoc3RhcnRBdCk7XG4gICAgICBvc2Muc3RvcChzdGFydEF0ICsgMC4xOSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgbm9pc2UgPSBjdHguY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgY29uc3QgZmlsdGVyID0gY3R4LmNyZWF0ZUJpcXVhZEZpbHRlcigpO1xuICAgIGNvbnN0IGFtcCA9IGN0eC5jcmVhdGVHYWluKCk7XG4gICAgbm9pc2UuYnVmZmVyID0gdGhpcy5zeW50aE5vaXNlQnVmZmVyIHx8IHRoaXMuY3JlYXRlTm9pc2VCdWZmZXIoMC4yNSk7XG4gICAgaWYgKGtpbmQgPT09ICdoYXQnKSB7XG4gICAgICBmaWx0ZXIudHlwZSA9ICdoaWdocGFzcyc7XG4gICAgICBmaWx0ZXIuZnJlcXVlbmN5LnNldFZhbHVlQXRUaW1lKDUyMDAgKyAoKGluc3RydW1lbnQgJSA1KSAqIDI4MCksIHN0YXJ0QXQpO1xuICAgICAgZmlsdGVyLlEudmFsdWUgPSAwLjY7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlci50eXBlID0gJ2JhbmRwYXNzJztcbiAgICAgIGZpbHRlci5mcmVxdWVuY3kuc2V0VmFsdWVBdFRpbWUoa2luZCA9PT0gJ3NuYXJlJyA/IDE5MDAgOiAxMzAwICsgKChpbnN0cnVtZW50ICUgNykgKiAxODApLCBzdGFydEF0KTtcbiAgICAgIGZpbHRlci5RLnZhbHVlID0ga2luZCA9PT0gJ3NuYXJlJyA/IDAuOCA6IDAuOTtcbiAgICB9XG4gICAgYW1wLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC4wMDAxLCBzdGFydEF0KTtcbiAgICBhbXAuZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKHBlYWssIHN0YXJ0QXQgKyAwLjAwMik7XG4gICAgYW1wLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMDEsIHN0YXJ0QXQgKyAoa2luZCA9PT0gJ2hhdCcgPyAwLjA3IDogMC4xMikpO1xuICAgIG5vaXNlLmNvbm5lY3QoZmlsdGVyKTtcbiAgICBmaWx0ZXIuY29ubmVjdChhbXApO1xuICAgIGFtcC5jb25uZWN0KG5vZGVzLmlucHV0KTtcbiAgICBub2lzZS5zdGFydChzdGFydEF0KTtcbiAgICBub2lzZS5zdG9wKHN0YXJ0QXQgKyAoa2luZCA9PT0gJ2hhdCcgPyAwLjA5IDogMC4xNikpO1xuICB9XG5cbiAgcGxheUJlYXRBdCh3aGVuLCBiZWF0LCBicG0pIHtcbiAgICBpZiAoIWJlYXQpIHJldHVybjtcbiAgICBjb25zdCBOID0gKDQgKiA2MCkgLyBicG07XG4gICAgY29uc3QgYmVhdER1cmF0aW9uID0gdGhpcy5mcmFxICogTjtcbiAgICBjb25zdCBoYXNTb2xvID0gWy4uLnRoaXMudHJhY2tTdGF0ZS52YWx1ZXMoKV0uc29tZShpdGVtID0+IGl0ZW0uc29sbyk7XG4gICAgYmVhdC5mb3JFYWNoKChzbG90LCBrZXkpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgICBpZiAoc3RhdGUubXV0ZWQpIHJldHVybjtcbiAgICAgIGlmIChoYXNTb2xvICYmICFzdGF0ZS5zb2xvKSByZXR1cm47XG4gICAgICBjb25zdCBub2RlcyA9IHRoaXMuZ2V0VHJhY2tOb2RlcyhrZXkpO1xuICAgICAgbGV0IHRvdWNoZWQgPSBmYWxzZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xvdC5kcnVtcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjb25zdCBkcnVtID0gc2xvdC5kcnVtc1tpXTtcbiAgICAgICAgY29uc3Qgc3ViT2Zmc2V0UmF0aW8gPSB0eXBlb2YgZHJ1bVsyXSA9PT0gJ251bWJlcicgPyBkcnVtWzJdIDogMDtcbiAgICAgICAgdGhpcy5wbGF5RHJ1bSh3aGVuICsgKHN1Yk9mZnNldFJhdGlvICogYmVhdER1cmF0aW9uKSwgZHJ1bSwgbm9kZXMpO1xuICAgICAgICB0b3VjaGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHNsb3Qubm90ZXMuZm9yRWFjaChub3RlID0+IHtcbiAgICAgICAgY29uc3QgW2luc3RydW1lbnQsIHBpdGNoZXMsIGR1cmF0aW9uLCBsZXZlbCwgc3ViT2Zmc2V0UmF0aW8gPSAwLCBzdWJTcGFuID0gMV0gPSBub3RlO1xuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShsZXZlbCkgfHwgIU51bWJlci5pc0Zpbml0ZShkdXJhdGlvbikgfHwgIU51bWJlci5pc0Zpbml0ZShzdWJTcGFuKSkgcmV0dXJuO1xuICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5wbGF5ZXIubG9hZGVyLmluc3RydW1lbnRJbmZvKGluc3RydW1lbnQpO1xuICAgICAgICBjb25zdCBzdGFydEF0ID0gd2hlbiArIChzdWJPZmZzZXRSYXRpbyAqIGJlYXREdXJhdGlvbik7XG4gICAgICAgIGNvbnN0IGJhc2VQdWxzZUR1cmF0aW9uID0gZHVyYXRpb24gKiBOO1xuICAgICAgICBjb25zdCBiYXNlRHVyYXRpb24gPSBiYXNlUHVsc2VEdXJhdGlvbiAqIHN1YlNwYW47XG4gICAgICAgIC8vIEhlbGQgbm90ZXMgY2FuIHNvdW5kIHNob3J0ZXIgdGhhbiBleHBlY3RlZCBvbiBzb21lIGZvbnRzIChlLmcuIHBpYW5vIGVudmVsb3BlcyksXG4gICAgICAgIC8vIHNvIGtlZXAgYSBzbWFsbCBvdmVybGFwIHRvIHByZXNlcnZlIGxlZ2F0byBwZXJjZXB0aW9uIHdpdGhvdXQgY2hhbmdpbmcgYmVhdCB0aW1pbmcuXG4gICAgICAgIGNvbnN0IGxlZ2F0b0NvbXAgPSBzdWJTcGFuID4gMSA/IE1hdGgubWluKGJlYXREdXJhdGlvbiwgYmFzZUR1cmF0aW9uICogMC41KSA6IDA7XG4gICAgICAgIGNvbnN0IGFjdHVhbER1cmF0aW9uID0gYmFzZUR1cmF0aW9uICsgbGVnYXRvQ29tcDtcblxuICAgICAgICBpZiAoIXRoaXMuaXNGb250UmVhZHkoaW5mby52YXJpYWJsZSkpIHtcbiAgICAgICAgICB0aGlzLmNhY2hlSW5zdHJ1bWVudChpbmZvKTtcbiAgICAgICAgICB0aGlzLnF1ZXVlU3ludGhOb3RlVG9UcmFja05vZGVzKHN0YXJ0QXQsIGluc3RydW1lbnQsIHBpdGNoZXMsIGFjdHVhbER1cmF0aW9uLCBsZXZlbCwgbm9kZXMsIHN0YXRlLmZhbGxiYWNrV2F2ZSk7XG4gICAgICAgICAgdG91Y2hlZCA9IHRydWU7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJlc2V0ID0gd2luZG93W2luZm8udmFyaWFibGVdO1xuICAgICAgICB0aGlzLnF1ZXVlVG9UcmFja05vZGVzKFxuICAgICAgICAgIHByZXNldCxcbiAgICAgICAgICBzdGFydEF0LFxuICAgICAgICAgIHBpdGNoZXMsXG4gICAgICAgICAgYWN0dWFsRHVyYXRpb24sXG4gICAgICAgICAgKDEgLyAxMjcpICogbGV2ZWwsXG4gICAgICAgICAgbm9kZXMsXG4gICAgICAgICk7XG4gICAgICAgIHRvdWNoZWQgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgICBpZiAodG91Y2hlZCAmJiB0eXBlb2YgdGhpcy5vbkJlYXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5vbkJlYXQoa2V5LCB3aGVuLCB0aGlzLmJlYXRJbmRleCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICJBQUFBLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMseUJBQXlCLCtCQUErQjtBQUVqRSxNQUFNLEVBQUUsTUFBTSxJQUFJO0FBRWxCLE1BQU0sUUFBUSxDQUFDLE9BQU8sS0FBSyxRQUFRLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQztBQUNyRSxNQUFNLHVCQUF1QjtBQUM3QixNQUFNLGtCQUFrQjtBQUN4QixNQUFNLGtCQUFrQixXQUFTLE1BQU8sT0FBTyxRQUFRLE1BQU07QUFDN0QsTUFBTSwyQkFBMkIsQ0FBQyxtQkFBbUIsa0JBQWtCO0FBQ3ZFLE1BQU0sYUFBYSxDQUFDLFFBQVEsU0FBUyxPQUFPLE1BQU07QUFDbEQsTUFBTSxvQkFBb0I7QUFBQSxFQUN4QixPQUFPO0FBQUEsSUFDTCxTQUFTLEVBQUUsTUFBTSxRQUFRLE9BQU8sT0FBTztBQUFBLElBQ3ZDLFNBQVMsRUFBRSxNQUFNLFNBQVMsT0FBTyxR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MUIsUUFBSSxDQUFDLEtBQU07QUFDWCxVQUFNLElBQUssSUFBSSxLQUFNO0FBQ3JCLFVBQU0sZUFBZSxLQUFLLE9BQU87QUFDakMsVUFBTSxVQUFVLENBQUMsR0FBRyxLQUFLLFdBQVcsT0FBTyxDQUFDLEVBQUUsS0FBSyxVQUFRLEtBQUssSUFBSTtBQUNwRSxTQUFLLFFBQVEsQ0FBQyxNQUFNLFFBQVE7QUFDMUIsWUFBTSxRQUFRLEtBQUssY0FBYyxHQUFHO0FBQ3BDLFVBQUksTUFBTSxNQUFPO0FBQ2pCLFVBQUksV0FBVyxDQUFDLE1BQU0sS0FBTTtBQUM1QixZQUFNLFFBQVEsS0FBSyxjQUFjLEdBQUc7QUFDcEMsVUFBSSxVQUFVO0FBQ2QsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLE1BQU0sUUFBUSxLQUFLLEdBQUc7QUFDN0MsY0FBTSxPQUFPLEtBQUssTUFBTSxDQUFDO0FBQ3pCLGNBQU0saUJBQWlCLE9BQU8sS0FBSyxDQUFDLE1BQU0sV0FBVyxLQUFLLENBQUMsSUFBSTtBQUMvRCxhQUFLLFNBQVMsT0FBUSxpQkFBaUIsY0FBZSxNQUFNLEtBQUs7QUFDakUsa0JBQVU7QUFBQSxNQUNaO0FBQ0EsV0FBSyxNQUFNLFFBQVEsVUFBUTtBQUN6QixjQUFNLENBQUMsWUFBWSxTQUFTLFVBQVUsT0FBTyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsSUFBSTtBQUNoRixZQUFJLENBQUMsT0FBTyxTQUFTLEtBQUssS0FBSyxDQUFDLE9BQU8sU0FBUyxRQUFRLEtBQUssQ0FBQyxPQUFPLFNBQVMsT0FBTyxFQUFHO0FBQ3hGLGNBQU0sT0FBTyxLQUFLLE9BQU8sT0FBTyxlQUFlLFVBQVU7QUFDekQsY0FBTSxVQUFVLE9BQVEsaUJBQWlCO0FBQ3pDLGNBQU0sb0JBQW9CLFdBQVc7QUFDckMsY0FBTSxlQUFlLG9CQUFvQjtBQUd6QyxjQUFNLGFBQWEsVUFBVSxJQUFJLEtBQUssSUFBSSxjQUFjLGVBQWUsR0FBRyxJQUFJO0FBQzlFLGNBQU0saUJBQWlCLGVBQWU7QUFFdEMsWUFBSSxDQUFDLEtBQUssWUFBWSxLQUFLLFFBQVEsR0FBRztBQUNwQyxlQUFLLGdCQUFnQixJQUFJO0FBQ3pCLGVBQUssMkJBQTJCLFNBQVMsWUFBWSxTQUFTLGdCQUFnQixPQUFPLE9BQU8sTUFBTSxZQUFZO0FBQzlHLG9CQUFVO0FBQ1Y7QUFBQSxRQUNGO0FBRUEsY0FBTSxTQUFTLE9BQU8sS0FBSyxRQUFRO0FBQ25DLGFBQUs7QUFBQSxVQUNIO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQyxJQUFJLE1BQU87QUFBQSxVQUNaO0FBQUEsUUFDRjtBQUNBLGtCQUFVO0FBQUEsTUFDWixDQUFDO0FBQ0QsVUFBSSxXQUFXLE9BQU8sS0FBSyxXQUFXLFlBQVk7QUFDaEQsYUFBSyxPQUFPLEtBQUssTUFBTSxLQUFLLFNBQVM7QUFBQSxNQUN2QztBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRjsiLAogICJuYW1lcyI6IFsibiIsICJwaXRjaCIsICJhbXAiXQp9Cg==
