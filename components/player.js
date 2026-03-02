const { Utils } = require("midi-writer-js");
class Player {
  constructor() {
    this.data = [];
    this.beats = [];
    this.bars = 8;
    this.bpm = 127;
    this.fraq = 1 / this.bars;
    this.trackNodes = /* @__PURE__ */ new Map();
    this.trackState = /* @__PURE__ */ new Map();
    this.delayDivision = 3 / 8;
    this.onBeat = null;
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
    this.data.forEach((track) => {
      if (track[2].length > count) count = track[2].length;
      const info = track[0] >= 2e3 ? this.player.loader.drumInfo(track[0] - 2e3) : this.player.loader.instrumentInfo(track[0]);
      this.cacheInstrument(info);
    });
    const duration = Utils.getTickDuration("32") / 256;
    const nextKeys = /* @__PURE__ */ new Set();
    for (let i = 0; i < count; i += 1) {
      const beat = /* @__PURE__ */ new Map();
      this.data.forEach((track) => {
        const key = `${track[0]}/${track[1]}`;
        nextKeys.add(key);
        if (!beat.has(key)) beat.set(key, { drums: [], notes: [] });
        const slot = beat.get(key);
        const tick = track[2][i] || {};
        if (track[0] >= 2e3) {
          slot.drums.push([track[0] - 2e3, tick.v]);
        } else if (Array.isArray(tick.n)) {
          tick.n.forEach((tone) => {
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
        }
        this.trackNodes.delete(key);
      }
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
    if (!this.beats.length || typeof this.beatIndex !== "number" || this.beatIndex >= this.beats.length) {
      this.beatIndex = 0;
    }
  }
  startPlayLoop(beats, bpm, density, fromBeat) {
    this.loopStarted = true;
    const wholeNoteDuration = 4 * 60 / bpm;
    this.beatIndex = fromBeat < beats.length ? fromBeat : 0;
    this.playBeatAt(this.contextTime(), beats[this.beatIndex], bpm);
    let nextLoopTime = this.contextTime() + density * wholeNoteDuration;
    this.loopIntervalID = setInterval(() => {
      if (this.contextTime() > nextLoopTime - density * wholeNoteDuration) {
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
        delaySend: 0
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
    const whole = 4 * 60 / (this.bpm || 127);
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
        console.log("cached", info.title);
        delete window[info.variable + 127];
      });
    }
  }
  playDrum(when, drum, nodes) {
    const [instrument, level] = drum;
    const info = this.player.loader.drumInfo(instrument);
    if (window[info.variable]) {
      const pitch = window[info.variable].zones[0].keyRangeLow;
      const gain = 1 / 127 * level;
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
    const N = 4 * 60 / bpm;
    const hasSolo = [...this.trackState.values()].some((item) => item.solo);
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
      slot.notes.forEach((note) => {
        const [instrument, pitches, duration, level] = note;
        const info = this.player.loader.instrumentInfo(instrument);
        if (window[info.variable]) {
          this.queueToTrackNodes(window[info.variable], when, pitches, duration * N, 1 / 127 * level, nodes);
          touched = true;
        } else {
          this.cacheInstrument(info);
        }
      });
      if (touched && typeof this.onBeat === "function") {
        this.onBeat(key, when, this.beatIndex);
      }
    });
  }
}
module.exports=Player;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBVdGlscyB9IGZyb20gJ21pZGktd3JpdGVyLWpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5iZWF0cyA9IFtdO1xuICAgIHRoaXMuYmFycyA9IDg7XG4gICAgdGhpcy5icG0gPSAxMjc7XG4gICAgdGhpcy5mcmFxID0gMSAvIHRoaXMuYmFycztcbiAgICB0aGlzLnRyYWNrTm9kZXMgPSBuZXcgTWFwKCk7XG4gICAgdGhpcy50cmFja1N0YXRlID0gbmV3IE1hcCgpO1xuICAgIHRoaXMuZGVsYXlEaXZpc2lvbiA9IDMgLyA4O1xuICAgIHRoaXMub25CZWF0ID0gbnVsbDtcbiAgICB0aGlzLmluaXRBdWRpbygpO1xuICB9XG5cbiAgaW5pdEF1ZGlvKCkge1xuICAgIGNvbnN0IEF1ZGlvQ29udGV4dEZ1bmMgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG5cbiAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHRGdW5jKCk7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uO1xuICAgIHRoaXMucGxheWVyID0gbmV3IFdlYkF1ZGlvRm9udFBsYXllcigpO1xuICAgIHRoaXMuZXF1YWxpemVyID0gdGhpcy5wbGF5ZXIuY3JlYXRlQ2hhbm5lbCh0aGlzLmF1ZGlvQ29udGV4dCk7XG4gICAgdGhpcy5tYXN0ZXJHYWluID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuZWNobyA9IHRoaXMucGxheWVyLmNyZWF0ZVJldmVyYmVyYXRvcih0aGlzLmF1ZGlvQ29udGV4dCk7XG4gICAgdGhpcy5kZWxheUlucHV0ID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuZGVsYXkgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVEZWxheSg0KTtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2sgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5kZWxheVdldCA9IHRoaXMuYXVkaW9Db250ZXh0LmNyZWF0ZUdhaW4oKTtcblxuICAgIHRoaXMubWFzdGVyR2Fpbi5nYWluLnZhbHVlID0gMTtcbiAgICB0aGlzLmRlbGF5RmVlZGJhY2suZ2Fpbi52YWx1ZSA9IDAuMzU7XG4gICAgdGhpcy5kZWxheVdldC5nYWluLnZhbHVlID0gMTtcbiAgICB0aGlzLmRlbGF5SW5wdXQuZ2Fpbi52YWx1ZSA9IDE7XG5cbiAgICB0aGlzLmVxdWFsaXplci5vdXRwdXQuY29ubmVjdCh0aGlzLm1hc3RlckdhaW4pO1xuICAgIHRoaXMuZWNoby5vdXRwdXQuY29ubmVjdCh0aGlzLm1hc3RlckdhaW4pO1xuXG4gICAgdGhpcy5kZWxheUlucHV0LmNvbm5lY3QodGhpcy5kZWxheSk7XG4gICAgdGhpcy5kZWxheS5jb25uZWN0KHRoaXMuZGVsYXlGZWVkYmFjayk7XG4gICAgdGhpcy5kZWxheUZlZWRiYWNrLmNvbm5lY3QodGhpcy5kZWxheSk7XG4gICAgdGhpcy5kZWxheS5jb25uZWN0KHRoaXMuZGVsYXlXZXQpO1xuICAgIHRoaXMuZGVsYXlXZXQuY29ubmVjdCh0aGlzLm1hc3RlckdhaW4pO1xuXG4gICAgdGhpcy5tYXN0ZXJHYWluLmNvbm5lY3QodGhpcy5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy51cGRhdGVEZWxheVRpbWUoKTtcbiAgfVxuXG4gIHBpdGNoKHZhbHVlKSB7XG4gICAgcmV0dXJuIFV0aWxzLmdldFBpdGNoKHZhbHVlKSArIHRoaXMub2Zmc2V0O1xuICB9XG5cbiAgcHJlbG9hZChkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YSB8fCB0aGlzLmRhdGE7XG5cbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICAgIGlmICh0cmFja1syXS5sZW5ndGggPiBjb3VudCkgY291bnQgPSB0cmFja1syXS5sZW5ndGg7XG5cbiAgICAgIGNvbnN0IGluZm8gPSB0cmFja1swXSA+PSAyMDAwXG4gICAgICAgID8gdGhpcy5wbGF5ZXIubG9hZGVyLmRydW1JbmZvKHRyYWNrWzBdIC0gMjAwMClcbiAgICAgICAgOiB0aGlzLnBsYXllci5sb2FkZXIuaW5zdHJ1bWVudEluZm8odHJhY2tbMF0pO1xuXG4gICAgICB0aGlzLmNhY2hlSW5zdHJ1bWVudChpbmZvKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGR1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKCczMicpIC8gMjU2O1xuICAgIGNvbnN0IG5leHRLZXlzID0gbmV3IFNldCgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBiZWF0ID0gbmV3IE1hcCgpO1xuXG4gICAgICB0aGlzLmRhdGEuZm9yRWFjaCh0cmFjayA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGAke3RyYWNrWzBdfS8ke3RyYWNrWzFdfWA7XG4gICAgICAgIG5leHRLZXlzLmFkZChrZXkpO1xuICAgICAgICBpZiAoIWJlYXQuaGFzKGtleSkpIGJlYXQuc2V0KGtleSwgeyBkcnVtczogW10sIG5vdGVzOiBbXSB9KTtcbiAgICAgICAgY29uc3Qgc2xvdCA9IGJlYXQuZ2V0KGtleSk7XG4gICAgICAgIGNvbnN0IHRpY2sgPSB0cmFja1syXVtpXSB8fCB7fTtcblxuICAgICAgICBpZiAodHJhY2tbMF0gPj0gMjAwMCkge1xuICAgICAgICAgIHNsb3QuZHJ1bXMucHVzaChbdHJhY2tbMF0gLSAyMDAwLCB0aWNrLnZdKTtcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRpY2subikpIHtcbiAgICAgICAgICB0aWNrLm4uZm9yRWFjaCh0b25lID0+IHtcbiAgICAgICAgICAgIHNsb3Qubm90ZXMucHVzaChbdHJhY2tbMF0sIHRoaXMucGl0Y2godG9uZSksIGR1cmF0aW9uLCB0aWNrLnZdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aWNrLm4pIHtcbiAgICAgICAgICBzbG90Lm5vdGVzLnB1c2goW3RyYWNrWzBdLCB0aGlzLnBpdGNoKHRpY2subiksIGR1cmF0aW9uLCB0aWNrLnZdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYmVhdHNbaV0gPSBiZWF0O1xuICAgIH1cblxuICAgIHRoaXMudHJhY2tOb2Rlcy5mb3JFYWNoKChub2Rlcywga2V5KSA9PiB7XG4gICAgICBpZiAoIW5leHRLZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbm9kZXMuZHJ5LmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICBub2Rlcy5yZXZlcmJTZW5kLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICBub2Rlcy5kZWxheVNlbmQuZGlzY29ubmVjdCgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50cmFja05vZGVzLmRlbGV0ZShrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbmV4dEtleXMuZm9yRWFjaChrZXkgPT4gdGhpcy5nZXRUcmFja05vZGVzKGtleSkpO1xuICB9XG5cbiAgY29udGV4dFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lO1xuICB9XG5cbiAgcGxheUxvb3BNYWNoaW5lKGZyb21CZWF0KSB7XG4gICAgdGhpcy5zdGFydFBsYXlMb29wKHRoaXMuYmVhdHMsIHRoaXMuYnBtLCB0aGlzLmZyYXEsIGZyb21CZWF0KTtcbiAgfVxuXG4gIHN0b3BMb29wTWFjaGluZSgpIHtcbiAgICB0aGlzLnN0b3BQbGF5TG9vcCgpO1xuICB9XG5cbiAgc2V0TG9vcE1hY2hpbmUoZGF0YSwgdGVtcG8sIGxlbmd0aCwgdHJhbnNwb3NlKSB7XG4gICAgY29uc3QgY2hhbmdlZCA9IHRlbXBvICE9PSB0aGlzLmJwbVxuICAgICAgfHwgbGVuZ3RoICE9PSB0aGlzLmJhcnNcbiAgICAgIHx8IHRyYW5zcG9zZSAhPT0gdGhpcy5vZmZzZXQ7XG5cbiAgICBpZiAoY2hhbmdlZCkgdGhpcy5zdG9wUGxheUxvb3AoKTtcblxuICAgIHRoaXMuYmVhdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmJwbSA9IHRlbXBvIHx8IDEyNztcbiAgICB0aGlzLmJhcnMgPSBsZW5ndGggfHwgMTY7XG4gICAgdGhpcy5vZmZzZXQgPSB0cmFuc3Bvc2UgfHwgMDtcbiAgICB0aGlzLnVwZGF0ZURlbGF5VGltZSgpO1xuICAgIHRoaXMucHJlbG9hZChkYXRhKTtcbiAgICB0aGlzLmZyYXEgPSAxIC8gdGhpcy5iYXJzO1xuXG4gICAgcmV0dXJuIGNoYW5nZWQ7XG4gIH1cblxuICB1cGRhdGVUcmFja3MoZGF0YSkge1xuICAgIHRoaXMuYmVhdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLnByZWxvYWQoZGF0YSk7XG4gICAgaWYgKCF0aGlzLmJlYXRzLmxlbmd0aCB8fCB0eXBlb2YgdGhpcy5iZWF0SW5kZXggIT09ICdudW1iZXInIHx8IHRoaXMuYmVhdEluZGV4ID49IHRoaXMuYmVhdHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmJlYXRJbmRleCA9IDA7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRQbGF5TG9vcChiZWF0cywgYnBtLCBkZW5zaXR5LCBmcm9tQmVhdCkge1xuICAgIHRoaXMubG9vcFN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3Qgd2hvbGVOb3RlRHVyYXRpb24gPSAoNCAqIDYwKSAvIGJwbTtcblxuICAgIHRoaXMuYmVhdEluZGV4ID0gZnJvbUJlYXQgPCBiZWF0cy5sZW5ndGggPyBmcm9tQmVhdCA6IDA7XG4gICAgdGhpcy5wbGF5QmVhdEF0KHRoaXMuY29udGV4dFRpbWUoKSwgYmVhdHNbdGhpcy5iZWF0SW5kZXhdLCBicG0pO1xuXG4gICAgbGV0IG5leHRMb29wVGltZSA9IHRoaXMuY29udGV4dFRpbWUoKSArIGRlbnNpdHkgKiB3aG9sZU5vdGVEdXJhdGlvbjtcbiAgICB0aGlzLmxvb3BJbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY29udGV4dFRpbWUoKSA+IG5leHRMb29wVGltZSAtIGRlbnNpdHkgKiB3aG9sZU5vdGVEdXJhdGlvbikge1xuICAgICAgICB0aGlzLmJlYXRJbmRleCArPSAxO1xuICAgICAgICBpZiAodGhpcy5iZWF0SW5kZXggPj0gYmVhdHMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5iZWF0SW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbGF5QmVhdEF0KG5leHRMb29wVGltZSwgYmVhdHNbdGhpcy5iZWF0SW5kZXhdLCBicG0pO1xuICAgICAgICBuZXh0TG9vcFRpbWUgKz0gZGVuc2l0eSAqIHdob2xlTm90ZUR1cmF0aW9uO1xuICAgICAgfVxuICAgIH0sIDIyKTtcbiAgfVxuXG4gIHN0b3BQbGF5TG9vcCgpIHtcbiAgICB0aGlzLmxvb3BTdGFydGVkID0gZmFsc2U7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxvb3BJbnRlcnZhbElEKTtcbiAgICB0aGlzLmNhbmNlbFF1ZXVlKCk7XG4gIH1cblxuICBnZXRUcmFja1N0YXRlKGtleSkge1xuICAgIGlmICghdGhpcy50cmFja1N0YXRlLmhhcyhrZXkpKSB7XG4gICAgICB0aGlzLnRyYWNrU3RhdGUuc2V0KGtleSwge1xuICAgICAgICBtdXRlZDogZmFsc2UsXG4gICAgICAgIHNvbG86IGZhbHNlLFxuICAgICAgICB2b2x1bWU6IDEsXG4gICAgICAgIHJldmVyYlNlbmQ6IDAsXG4gICAgICAgIGRlbGF5U2VuZDogMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50cmFja1N0YXRlLmdldChrZXkpO1xuICB9XG5cbiAgYXBwbHlUcmFja1N0YXRlKGtleSkge1xuICAgIGNvbnN0IG5vZGVzID0gdGhpcy5nZXRUcmFja05vZGVzKGtleSk7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBub2Rlcy5zdGF0ZSA9IHN0YXRlO1xuICAgIG5vZGVzLmRyeS5nYWluLnZhbHVlID0gc3RhdGUubXV0ZWQgPyAwIDogc3RhdGUudm9sdW1lO1xuICAgIG5vZGVzLnJldmVyYlNlbmQuZ2Fpbi52YWx1ZSA9IHN0YXRlLnJldmVyYlNlbmQ7XG4gICAgbm9kZXMuZGVsYXlTZW5kLmdhaW4udmFsdWUgPSBzdGF0ZS5kZWxheVNlbmQ7XG4gIH1cblxuICBnZXRUcmFja05vZGVzKGtleSkge1xuICAgIGlmICh0aGlzLnRyYWNrTm9kZXMuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYWNrTm9kZXMuZ2V0KGtleSk7XG4gICAgfVxuXG4gICAgY29uc3QgZHJ5ID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIGNvbnN0IHJldmVyYlNlbmQgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgY29uc3QgZGVsYXlTZW5kID0gdGhpcy5hdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuXG4gICAgZHJ5LmdhaW4udmFsdWUgPSAxO1xuICAgIHJldmVyYlNlbmQuZ2Fpbi52YWx1ZSA9IDA7XG4gICAgZGVsYXlTZW5kLmdhaW4udmFsdWUgPSAwO1xuXG4gICAgZHJ5LmNvbm5lY3QodGhpcy5lcXVhbGl6ZXIuaW5wdXQpO1xuICAgIHJldmVyYlNlbmQuY29ubmVjdCh0aGlzLmVjaG8uaW5wdXQpO1xuICAgIGRlbGF5U2VuZC5jb25uZWN0KHRoaXMuZGVsYXlJbnB1dCk7XG5cbiAgICBjb25zdCBub2RlcyA9IHsgZHJ5LCByZXZlcmJTZW5kLCBkZWxheVNlbmQgfTtcbiAgICB0aGlzLnRyYWNrTm9kZXMuc2V0KGtleSwgbm9kZXMpO1xuICAgIHRoaXMuYXBwbHlUcmFja1N0YXRlKGtleSk7XG4gICAgcmV0dXJuIG5vZGVzO1xuICB9XG5cbiAgc2V0TXV0ZShrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS5tdXRlZCA9IEJvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuYXBwbHlUcmFja1N0YXRlKGtleSk7XG4gIH1cblxuICBzZXRTb2xvKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIHN0YXRlLnNvbG8gPSBCb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIHNldFZvbHVtZShrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFRyYWNrU3RhdGUoa2V5KTtcbiAgICBzdGF0ZS52b2x1bWUgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSkpO1xuICAgIHRoaXMuYXBwbHlUcmFja1N0YXRlKGtleSk7XG4gIH1cblxuICBzZXRSZXZlcmJTZW5kKGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgIHN0YXRlLnJldmVyYlNlbmQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB2YWx1ZSkpO1xuICAgIHRoaXMuYXBwbHlUcmFja1N0YXRlKGtleSk7XG4gIH1cblxuICBzZXREZWxheVNlbmQoa2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5nZXRUcmFja1N0YXRlKGtleSk7XG4gICAgc3RhdGUuZGVsYXlTZW5kID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdmFsdWUpKTtcbiAgICB0aGlzLmFwcGx5VHJhY2tTdGF0ZShrZXkpO1xuICB9XG5cbiAgc2V0RGVsYXlGZWVkYmFjayh2YWx1ZSkge1xuICAgIHRoaXMuZGVsYXlGZWVkYmFjay5nYWluLnZhbHVlID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMC43NSwgdmFsdWUpKTtcbiAgfVxuXG4gIHNldERlbGF5VGltZSh2YWx1ZSkge1xuICAgIHRoaXMuZGVsYXlEaXZpc2lvbiA9IE1hdGgubWF4KDAuMTI1LCBNYXRoLm1pbigwLjc1LCB2YWx1ZSkpO1xuICAgIHRoaXMudXBkYXRlRGVsYXlUaW1lKCk7XG4gIH1cblxuICB1cGRhdGVEZWxheVRpbWUoKSB7XG4gICAgY29uc3Qgd2hvbGUgPSAoNCAqIDYwKSAvICh0aGlzLmJwbSB8fCAxMjcpO1xuICAgIHRoaXMuZGVsYXkuZGVsYXlUaW1lLnZhbHVlID0gd2hvbGUgKiB0aGlzLmRlbGF5RGl2aXNpb247XG4gIH1cblxuICBnZXRUcmFja0tleXMoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLnRyYWNrTm9kZXMua2V5cygpXTtcbiAgfVxuXG4gIGNhbmNlbFF1ZXVlKCkge1xuICAgIHRoaXMucGxheWVyLmNhbmNlbFF1ZXVlKHRoaXMuYXVkaW9Db250ZXh0KTtcbiAgfVxuXG4gIGNhY2hlSW5zdHJ1bWVudChpbmZvKSB7XG4gICAgaWYgKGluZm8gJiYgIXdpbmRvd1tpbmZvLnZhcmlhYmxlXSkge1xuICAgICAgaWYgKHdpbmRvd1tpbmZvLnZhcmlhYmxlICsgMTI3XSkgcmV0dXJuO1xuICAgICAgd2luZG93W2luZm8udmFyaWFibGUgKyAxMjddID0gdHJ1ZTtcbiAgICAgIHRoaXMucGxheWVyLmxvYWRlci5zdGFydExvYWQodGhpcy5hdWRpb0NvbnRleHQsIGluZm8udXJsLCBpbmZvLnZhcmlhYmxlKTtcbiAgICAgIHRoaXMucGxheWVyLmxvYWRlci53YWl0TG9hZCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjYWNoZWQnLCBpbmZvLnRpdGxlKTtcbiAgICAgICAgZGVsZXRlIHdpbmRvd1tpbmZvLnZhcmlhYmxlICsgMTI3XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHBsYXlEcnVtKHdoZW4sIGRydW0sIG5vZGVzKSB7XG4gICAgY29uc3QgW2luc3RydW1lbnQsIGxldmVsXSA9IGRydW07XG4gICAgY29uc3QgaW5mbyA9IHRoaXMucGxheWVyLmxvYWRlci5kcnVtSW5mbyhpbnN0cnVtZW50KTtcblxuICAgIGlmICh3aW5kb3dbaW5mby52YXJpYWJsZV0pIHtcbiAgICAgIGNvbnN0IHBpdGNoID0gd2luZG93W2luZm8udmFyaWFibGVdLnpvbmVzWzBdLmtleVJhbmdlTG93O1xuICAgICAgY29uc3QgZ2FpbiA9ICgxIC8gMTI3KSAqIGxldmVsO1xuICAgICAgaWYgKGxldmVsID4gMCkgdGhpcy5xdWV1ZVRvVHJhY2tOb2Rlcyh3aW5kb3dbaW5mby52YXJpYWJsZV0sIHdoZW4sIHBpdGNoLCAxIC8gNjQsIGdhaW4sIG5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYWNoZUluc3RydW1lbnQoaW5mbyk7XG4gICAgfVxuICB9XG5cbiAgcXVldWVUb1RyYWNrTm9kZXMoZm9udCwgd2hlbiwgcGl0Y2gsIGR1cmF0aW9uLCBnYWluLCBub2Rlcykge1xuICAgIHRoaXMucGxheWVyLnF1ZXVlV2F2ZVRhYmxlKHRoaXMuYXVkaW9Db250ZXh0LCBub2Rlcy5kcnksIGZvbnQsIHdoZW4sIHBpdGNoLCBkdXJhdGlvbiwgZ2Fpbik7XG4gICAgaWYgKG5vZGVzLnJldmVyYlNlbmQuZ2Fpbi52YWx1ZSA+IDApIHtcbiAgICAgIHRoaXMucGxheWVyLnF1ZXVlV2F2ZVRhYmxlKHRoaXMuYXVkaW9Db250ZXh0LCBub2Rlcy5yZXZlcmJTZW5kLCBmb250LCB3aGVuLCBwaXRjaCwgZHVyYXRpb24sIGdhaW4pO1xuICAgIH1cbiAgICBpZiAobm9kZXMuZGVsYXlTZW5kLmdhaW4udmFsdWUgPiAwKSB7XG4gICAgICB0aGlzLnBsYXllci5xdWV1ZVdhdmVUYWJsZSh0aGlzLmF1ZGlvQ29udGV4dCwgbm9kZXMuZGVsYXlTZW5kLCBmb250LCB3aGVuLCBwaXRjaCwgZHVyYXRpb24sIGdhaW4pO1xuICAgIH1cbiAgfVxuXG4gIHBsYXlCZWF0QXQod2hlbiwgYmVhdCwgYnBtKSB7XG4gICAgaWYgKCFiZWF0KSByZXR1cm47XG4gICAgY29uc3QgTiA9ICg0ICogNjApIC8gYnBtO1xuICAgIGNvbnN0IGhhc1NvbG8gPSBbLi4udGhpcy50cmFja1N0YXRlLnZhbHVlcygpXS5zb21lKGl0ZW0gPT4gaXRlbS5zb2xvKTtcblxuICAgIGJlYXQuZm9yRWFjaCgoc2xvdCwga2V5KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0VHJhY2tTdGF0ZShrZXkpO1xuICAgICAgaWYgKHN0YXRlLm11dGVkKSByZXR1cm47XG4gICAgICBpZiAoaGFzU29sbyAmJiAhc3RhdGUuc29sbykgcmV0dXJuO1xuXG4gICAgICBjb25zdCBub2RlcyA9IHRoaXMuZ2V0VHJhY2tOb2RlcyhrZXkpO1xuICAgICAgbGV0IHRvdWNoZWQgPSBmYWxzZTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbG90LmRydW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMucGxheURydW0od2hlbiwgc2xvdC5kcnVtc1tpXSwgbm9kZXMpO1xuICAgICAgICB0b3VjaGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgc2xvdC5ub3Rlcy5mb3JFYWNoKG5vdGUgPT4ge1xuICAgICAgICBjb25zdCBbaW5zdHJ1bWVudCwgcGl0Y2hlcywgZHVyYXRpb24sIGxldmVsXSA9IG5vdGU7XG4gICAgICAgIGNvbnN0IGluZm8gPSB0aGlzLnBsYXllci5sb2FkZXIuaW5zdHJ1bWVudEluZm8oaW5zdHJ1bWVudCk7XG4gICAgICAgIGlmICh3aW5kb3dbaW5mby52YXJpYWJsZV0pIHtcbiAgICAgICAgICB0aGlzLnF1ZXVlVG9UcmFja05vZGVzKHdpbmRvd1tpbmZvLnZhcmlhYmxlXSwgd2hlbiwgcGl0Y2hlcywgZHVyYXRpb24gKiBOLCAoMSAvIDEyNykgKiBsZXZlbCwgbm9kZXMpO1xuICAgICAgICAgIHRvdWNoZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2FjaGVJbnN0cnVtZW50KGluZm8pO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRvdWNoZWQgJiYgdHlwZW9mIHRoaXMub25CZWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMub25CZWF0KGtleSwgd2hlbiwgdGhpcy5iZWF0SW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiQUFBQSxTQUFTLGFBQWE7QUFFdEIsTUFBTyxPQUFxQjtBQUFBLEVBQzFCLGNBQWM7QUFDWixTQUFLLE9BQU8sQ0FBQztBQUNiLFNBQUssUUFBUSxDQUFDO0FBQ2QsU0FBSyxPQUFPO0FBQ1osU0FBSyxNQUFNO0FBQ1gsU0FBSyxPQUFPLElBQUksS0FBSztBQUNyQixTQUFLLGFBQWEsb0JBQUksSUFBSTtBQUMxQixTQUFLLGFBQWEsb0JBQUksSUFBSTtBQUMxQixTQUFLLGdCQUFnQixJQUFJO0FBQ3pCLFNBQUssU0FBUztBQUNkLFNBQUssVUFBVTtBQUFBLEVBQ2pCO0FBQUEsRUFFQSxZQUFZO0FBQ1YsVUFBTSxtQkFBbUIsT0FBTyxnQkFBZ0IsT0FBTztBQUV2RCxTQUFLLGVBQWUsSUFBSSxpQkFBaUI7QUFDekMsU0FBSyxjQUFjLEtBQUssYUFBYTtBQUNyQyxTQUFLLFNBQVMsSUFBSSxtQkFBbUI7QUFDckMsU0FBSyxZQUFZLEtBQUssT0FBTyxjQUFjLEtBQUssWUFBWTtBQUM1RCxTQUFLLGFBQWEsS0FBSyxhQUFhLFdBQVc7QUFDL0MsU0FBSyxPQUFPLEtBQUssT0FBTyxtQkFBbUIsS0FBSyxZQUFZO0FBQzVELFNBQUssYUFBYSxLQUFLLGFBQWEsV0FBVztBQUMvQyxTQUFLLFFBQVEsS0FBSyxhQUFhLFlBQVksQ0FBQztBQUM1QyxTQUFLLGdCQUFnQixLQUFLLGFBQWEsV0FBVztBQUNsRCxTQUFLLFdBQVcsS0FBSyxhQUFhLFdBQVc7QUFFN0MsU0FBSyxXQUFXLEtBQUssUUFBUTtBQUM3QixTQUFLLGNBQWMsS0FBSyxRQUFRO0FBQ2hDLFNBQUssU0FBUyxLQUFLLFFBQVE7QUFDM0IsU0FBSyxX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
