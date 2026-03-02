import { Utils } from 'midi-writer-js';

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
    this.initAudio();
  }

  initAudio() {
    const AudioContextFunc = window.AudioContext || window.webkitAudioContext;

    this.audioContext = new AudioContextFunc();
    this.destination = this.audioContext.destination;
    this.player = new WebAudioFontPlayer();
    this.equalizer = this.player.createChannel(this.audioContext);
    this.masterGain = this.audioContext.createGain();
    this.echo = this.player.createReverberator(this.audioContext);
    this.delayInput = this.audioContext.createGain();
    this.delay = this.audioContext.createDelay(4);
    this.delayFeedback = this.audioContext.createGain();
    this.delayWet = this.audioContext.createGain();

    this.masterGain.gain.value = 1;
    this.delayFeedback.gain.value = 0.35;
    this.delayWet.gain.value = 1;
    this.delayInput.gain.value = 1;

    this.equalizer.output.connect(this.masterGain);
    this.echo.output.connect(this.masterGain);

    this.delayInput.connect(this.delay);
    this.delay.connect(this.delayFeedback);
    this.delayFeedback.connect(this.delay);
    this.delay.connect(this.delayWet);
    this.delayWet.connect(this.masterGain);

    this.masterGain.connect(this.destination);
    this.updateDelayTime();
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
      if (!nextKeys.has(key)) {
        try {
          nodes.dry.disconnect();
          nodes.reverbSend.disconnect();
          nodes.delaySend.disconnect();
        } catch (e) {
          // ignore
        }
        this.trackNodes.delete(key);
      }
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
    const changed = tempo !== this.bpm
      || length !== this.bars
      || transpose !== this.offset;

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
        if (this.beatIndex >= beats.length) {
          this.beatIndex = 0;
        }

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
      });
    }
    return this.trackState.get(key);
  }

  applyTrackState(key) {
    const nodes = this.getTrackNodes(key);
    const state = this.getTrackState(key);
    nodes.state = state;
    nodes.dry.gain.value = state.muted ? 0 : state.volume;
    nodes.reverbSend.gain.value = state.reverbSend;
    nodes.delaySend.gain.value = state.delaySend;
  }

  getTrackNodes(key) {
    if (this.trackNodes.has(key)) {
      return this.trackNodes.get(key);
    }

    const dry = this.audioContext.createGain();
    const reverbSend = this.audioContext.createGain();
    const delaySend = this.audioContext.createGain();

    dry.gain.value = 1;
    reverbSend.gain.value = 0;
    delaySend.gain.value = 0;

    dry.connect(this.equalizer.input);
    reverbSend.connect(this.echo.input);
    delaySend.connect(this.delayInput);

    const nodes = { dry, reverbSend, delaySend };
    this.trackNodes.set(key, nodes);
    this.applyTrackState(key);
    return nodes;
  }

  setMute(key, value) {
    const state = this.getTrackState(key);
    state.muted = Boolean(value);
    this.applyTrackState(key);
  }

  sectionFromTrackKey(key) {
    const parts = String(key).split('/');
    const trackName = parts.slice(1).join('/');
    if (!trackName) return null;
    const section = trackName.split('#')[0];
    return section || null;
  }

  setSectionMute(sectionName, muted) {
    if (!sectionName) return;
    const target = String(sectionName).toUpperCase();
    for (const key of this.trackNodes.keys()) {
      const section = this.sectionFromTrackKey(key);
      if (section && section.toUpperCase() === target) {
        this.setMute(key, muted);
      }
    }
  }

  getSectionMuted(sectionName) {
    if (!sectionName) return false;
    const target = String(sectionName).toUpperCase();
    const keys = [...this.trackNodes.keys()].filter(key => {
      const section = this.sectionFromTrackKey(key);
      return section && section.toUpperCase() === target;
    });
    return keys.length > 0 && keys.every(key => this.getTrackState(key).muted);
  }

  setSolo(key, value) {
    const state = this.getTrackState(key);
    state.solo = Boolean(value);
  }

  setVolume(key, value) {
    const state = this.getTrackState(key);
    state.volume = Math.max(0, Math.min(1, value));
    this.applyTrackState(key);
  }

  setReverbSend(key, value) {
    const state = this.getTrackState(key);
    state.reverbSend = Math.max(0, Math.min(1, value));
    this.applyTrackState(key);
  }

  setDelaySend(key, value) {
    const state = this.getTrackState(key);
    state.delaySend = Math.max(0, Math.min(1, value));
    this.applyTrackState(key);
  }

  setDelayFeedback(value) {
    this.delayFeedback.gain.value = Math.max(0, Math.min(0.75, value));
  }

  setDelayTime(value) {
    this.delayDivision = Math.max(0.125, Math.min(0.75, value));
    this.updateDelayTime();
  }

  updateDelayTime() {
    const whole = (4 * 60) / (this.bpm || 127);
    this.delay.delayTime.value = whole * this.delayDivision;
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
        console.log('cached', info.title);
        delete window[info.variable + 127];
      });
    }
  }

  playDrum(when, drum, nodes) {
    const [instrument, level] = drum;
    const info = this.player.loader.drumInfo(instrument);

    if (window[info.variable]) {
      const pitch = window[info.variable].zones[0].keyRangeLow;
      const gain = (1 / 127) * level;
      if (level > 0) this.queueToTrackNodes(window[info.variable], when, pitch, 1 / 64, gain, nodes);
    } else {
      this.cacheInstrument(info);
    }
  }

  queueToTrackNodes(font, when, pitch, duration, gain, nodes) {
    this.player.queueWaveTable(this.audioContext, nodes.dry, font, when, pitch, duration, gain);
    if (nodes.reverbSend.gain.value > 0) {
      this.player.queueWaveTable(this.audioContext, nodes.reverbSend, font, when, pitch, duration, gain);
    }
    if (nodes.delaySend.gain.value > 0) {
      this.player.queueWaveTable(this.audioContext, nodes.delaySend, font, when, pitch, duration, gain);
    }
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
        if (window[info.variable]) {
          this.queueToTrackNodes(window[info.variable], when, pitches, duration * N, (1 / 127) * level, nodes);
          touched = true;
        } else {
          this.cacheInstrument(info);
        }
      });

      if (touched && typeof this.onBeat === 'function') {
        this.onBeat(key, when, this.beatIndex);
      }
    });
  }
}
