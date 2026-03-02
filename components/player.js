const { Utils } = require("midi-writer-js");
class Player {
  constructor() {
    this.data = [];
    this.beats = [];
    this.bars = 8;
    this.bpm = 127;
    this.fraq = 1 / this.bars;
    this.initAudio();
  }
  initAudio() {
    const AudioContextFunc = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContextFunc();
    this.destination = this.audioContext.destination;
    this.player = new WebAudioFontPlayer();
    this.equalizer = this.player.createChannel(this.audioContext);
    this.output = this.audioContext.createGain();
    this.echo = this.player.createReverberator(this.audioContext);
    this.echo.output.connect(this.output);
    this.equalizer.output.connect(this.echo.input);
    this.output.connect(this.destination);
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
    for (let i = 0; i < count; i += 1) {
      const drums = [];
      const notes = [];
      this.data.forEach((track) => {
        const tick = track[2][i] || {};
        if (track[0] >= 2e3) {
          drums.push([track[0] - 2e3, tick.v]);
        } else if (Array.isArray(tick.n)) {
          tick.n.forEach((tone) => {
            notes.push([track[0], this.pitch(tone), duration, tick.v]);
          });
        } else if (tick.n) {
          notes.push([track[0], this.pitch(tick.n), duration, tick.v]);
        }
      });
      this.beats[i] = [drums, notes];
    }
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
    this.preload(data);
    this.fraq = 1 / this.bars;
    return changed;
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
  playDrum(when, drum) {
    const [instrument, level] = drum;
    const info = this.player.loader.drumInfo(instrument);
    if (window[info.variable]) {
      const pitch = window[info.variable].zones[0].keyRangeLow;
      if (level > 0) {
        this.player.queueWaveTable(this.audioContext, this.equalizer.input, window[info.variable], when, pitch, 1 / 64, 1 / 127 * level);
      }
    } else {
      this.cacheInstrument(info);
    }
  }
  playBeatAt(when, beat, bpm) {
    if (!beat) return;
    const N = 4 * 60 / bpm;
    for (let i = 0; i < beat[0].length; i += 1) {
      this.playDrum(when, beat[0][i]);
    }
    beat[1].forEach((note) => {
      const [instrument, pitches, duration, level] = note;
      const info = this.player.loader.instrumentInfo(instrument);
      if (window[info.variable]) {
        this.player.queueWaveTable(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration * N, 1 / 127 * level);
      } else {
        this.cacheInstrument(info);
      }
    });
  }
}
module.exports=Player;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvcGxheWVyLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBVdGlscyB9IGZyb20gJ21pZGktd3JpdGVyLWpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy5iZWF0cyA9IFtdO1xuICAgIHRoaXMuYmFycyA9IDg7XG4gICAgdGhpcy5icG0gPSAxMjc7XG4gICAgdGhpcy5mcmFxID0gMSAvIHRoaXMuYmFycztcbiAgICB0aGlzLmluaXRBdWRpbygpO1xuICB9XG5cbiAgaW5pdEF1ZGlvKCkge1xuICAgIGNvbnN0IEF1ZGlvQ29udGV4dEZ1bmMgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG5cbiAgICB0aGlzLmF1ZGlvQ29udGV4dCA9IG5ldyBBdWRpb0NvbnRleHRGdW5jKCk7XG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IHRoaXMuYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uO1xuICAgIHRoaXMucGxheWVyID0gbmV3IFdlYkF1ZGlvRm9udFBsYXllcigpO1xuICAgIHRoaXMuZXF1YWxpemVyID0gdGhpcy5wbGF5ZXIuY3JlYXRlQ2hhbm5lbCh0aGlzLmF1ZGlvQ29udGV4dCk7XG4gICAgdGhpcy5vdXRwdXQgPSB0aGlzLmF1ZGlvQ29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5lY2hvID0gdGhpcy5wbGF5ZXIuY3JlYXRlUmV2ZXJiZXJhdG9yKHRoaXMuYXVkaW9Db250ZXh0KTtcbiAgICB0aGlzLmVjaG8ub3V0cHV0LmNvbm5lY3QodGhpcy5vdXRwdXQpO1xuICAgIHRoaXMuZXF1YWxpemVyLm91dHB1dC5jb25uZWN0KHRoaXMuZWNoby5pbnB1dCk7XG4gICAgdGhpcy5vdXRwdXQuY29ubmVjdCh0aGlzLmRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIHBpdGNoKHZhbHVlKSB7XG4gICAgcmV0dXJuIFV0aWxzLmdldFBpdGNoKHZhbHVlKSArIHRoaXMub2Zmc2V0O1xuICB9XG5cbiAgcHJlbG9hZChkYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YSB8fCB0aGlzLmRhdGE7XG5cbiAgICBsZXQgY291bnQgPSAwO1xuICAgIHRoaXMuZGF0YS5mb3JFYWNoKHRyYWNrID0+IHtcbiAgICAgIGlmICh0cmFja1syXS5sZW5ndGggPiBjb3VudCkgY291bnQgPSB0cmFja1syXS5sZW5ndGg7XG5cbiAgICAgIGNvbnN0IGluZm8gPSB0cmFja1swXSA+PSAyMDAwXG4gICAgICAgID8gdGhpcy5wbGF5ZXIubG9hZGVyLmRydW1JbmZvKHRyYWNrWzBdIC0gMjAwMClcbiAgICAgICAgOiB0aGlzLnBsYXllci5sb2FkZXIuaW5zdHJ1bWVudEluZm8odHJhY2tbMF0pO1xuXG4gICAgICB0aGlzLmNhY2hlSW5zdHJ1bWVudChpbmZvKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGR1cmF0aW9uID0gVXRpbHMuZ2V0VGlja0R1cmF0aW9uKCczMicpIC8gMjU2O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBkcnVtcyA9IFtdO1xuICAgICAgY29uc3Qgbm90ZXMgPSBbXTtcblxuICAgICAgdGhpcy5kYXRhLmZvckVhY2godHJhY2sgPT4ge1xuICAgICAgICBjb25zdCB0aWNrID0gdHJhY2tbMl1baV0gfHwge307XG5cbiAgICAgICAgaWYgKHRyYWNrWzBdID49IDIwMDApIHtcbiAgICAgICAgICBkcnVtcy5wdXNoKFt0cmFja1swXSAtIDIwMDAsIHRpY2sudl0pO1xuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGljay5uKSkge1xuICAgICAgICAgIHRpY2subi5mb3JFYWNoKHRvbmUgPT4ge1xuICAgICAgICAgICAgbm90ZXMucHVzaChbdHJhY2tbMF0sIHRoaXMucGl0Y2godG9uZSksIGR1cmF0aW9uLCB0aWNrLnZdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aWNrLm4pIHtcbiAgICAgICAgICBub3Rlcy5wdXNoKFt0cmFja1swXSwgdGhpcy5waXRjaCh0aWNrLm4pLCBkdXJhdGlvbiwgdGljay52XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmJlYXRzW2ldID0gW2RydW1zLCBub3Rlc107XG4gICAgfVxuICB9XG5cbiAgY29udGV4dFRpbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXVkaW9Db250ZXh0LmN1cnJlbnRUaW1lO1xuICB9XG5cbiAgcGxheUxvb3BNYWNoaW5lKGZyb21CZWF0KSB7XG4gICAgdGhpcy5zdGFydFBsYXlMb29wKHRoaXMuYmVhdHMsIHRoaXMuYnBtLCB0aGlzLmZyYXEsIGZyb21CZWF0KTtcbiAgfVxuXG4gIHN0b3BMb29wTWFjaGluZSgpIHtcbiAgICB0aGlzLnN0b3BQbGF5TG9vcCgpO1xuICB9XG5cbiAgc2V0TG9vcE1hY2hpbmUoZGF0YSwgdGVtcG8sIGxlbmd0aCwgdHJhbnNwb3NlKSB7XG4gICAgY29uc3QgY2hhbmdlZCA9IHRlbXBvICE9PSB0aGlzLmJwbVxuICAgICAgfHwgbGVuZ3RoICE9PSB0aGlzLmJhcnNcbiAgICAgIHx8IHRyYW5zcG9zZSAhPT0gdGhpcy5vZmZzZXQ7XG5cbiAgICBpZiAoY2hhbmdlZCkgdGhpcy5zdG9wUGxheUxvb3AoKTtcblxuICAgIHRoaXMuYmVhdHMubGVuZ3RoID0gMDtcbiAgICB0aGlzLmJwbSA9IHRlbXBvIHx8IDEyNztcbiAgICB0aGlzLmJhcnMgPSBsZW5ndGggfHwgMTY7XG4gICAgdGhpcy5vZmZzZXQgPSB0cmFuc3Bvc2UgfHwgMDtcbiAgICB0aGlzLnByZWxvYWQoZGF0YSk7XG4gICAgdGhpcy5mcmFxID0gMSAvIHRoaXMuYmFycztcblxuICAgIHJldHVybiBjaGFuZ2VkO1xuICB9XG5cbiAgc3RhcnRQbGF5TG9vcChiZWF0cywgYnBtLCBkZW5zaXR5LCBmcm9tQmVhdCkge1xuICAgIHRoaXMubG9vcFN0YXJ0ZWQgPSB0cnVlO1xuXG4gICAgY29uc3Qgd2hvbGVOb3RlRHVyYXRpb24gPSAoNCAqIDYwKSAvIGJwbTtcblxuICAgIHRoaXMuYmVhdEluZGV4ID0gZnJvbUJlYXQgPCBiZWF0cy5sZW5ndGggPyBmcm9tQmVhdCA6IDA7XG4gICAgdGhpcy5wbGF5QmVhdEF0KHRoaXMuY29udGV4dFRpbWUoKSwgYmVhdHNbdGhpcy5iZWF0SW5kZXhdLCBicG0pO1xuXG4gICAgbGV0IG5leHRMb29wVGltZSA9IHRoaXMuY29udGV4dFRpbWUoKSArIGRlbnNpdHkgKiB3aG9sZU5vdGVEdXJhdGlvbjtcbiAgICB0aGlzLmxvb3BJbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuY29udGV4dFRpbWUoKSA+IG5leHRMb29wVGltZSAtIGRlbnNpdHkgKiB3aG9sZU5vdGVEdXJhdGlvbikge1xuICAgICAgICB0aGlzLmJlYXRJbmRleCArPSAxO1xuICAgICAgICBpZiAodGhpcy5iZWF0SW5kZXggPj0gYmVhdHMubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5iZWF0SW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbGF5QmVhdEF0KG5leHRMb29wVGltZSwgYmVhdHNbdGhpcy5iZWF0SW5kZXhdLCBicG0pO1xuICAgICAgICBuZXh0TG9vcFRpbWUgKz0gZGVuc2l0eSAqIHdob2xlTm90ZUR1cmF0aW9uO1xuICAgICAgfVxuICAgIH0sIDIyKTtcbiAgfVxuXG4gIHN0b3BQbGF5TG9vcCgpIHtcbiAgICB0aGlzLmxvb3BTdGFydGVkID0gZmFsc2U7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxvb3BJbnRlcnZhbElEKTtcbiAgICB0aGlzLmNhbmNlbFF1ZXVlKCk7XG4gIH1cblxuICBjYW5jZWxRdWV1ZSgpIHtcbiAgICB0aGlzLnBsYXllci5jYW5jZWxRdWV1ZSh0aGlzLmF1ZGlvQ29udGV4dCk7XG4gIH1cblxuICBjYWNoZUluc3RydW1lbnQoaW5mbykge1xuICAgIGlmIChpbmZvICYmICF3aW5kb3dbaW5mby52YXJpYWJsZV0pIHtcbiAgICAgIGlmICh3aW5kb3dbaW5mby52YXJpYWJsZSArIDEyN10pIHJldHVybjtcbiAgICAgIHdpbmRvd1tpbmZvLnZhcmlhYmxlICsgMTI3XSA9IHRydWU7XG4gICAgICB0aGlzLnBsYXllci5sb2FkZXIuc3RhcnRMb2FkKHRoaXMuYXVkaW9Db250ZXh0LCBpbmZvLnVybCwgaW5mby52YXJpYWJsZSk7XG4gICAgICB0aGlzLnBsYXllci5sb2FkZXIud2FpdExvYWQoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnY2FjaGVkJywgaW5mby50aXRsZSk7XG4gICAgICAgIGRlbGV0ZSB3aW5kb3dbaW5mby52YXJpYWJsZSArIDEyN107XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwbGF5RHJ1bSh3aGVuLCBkcnVtKSB7XG4gICAgY29uc3QgW2luc3RydW1lbnQsIGxldmVsXSA9IGRydW07XG4gICAgY29uc3QgaW5mbyA9IHRoaXMucGxheWVyLmxvYWRlci5kcnVtSW5mbyhpbnN0cnVtZW50KTtcblxuICAgIGlmICh3aW5kb3dbaW5mby52YXJpYWJsZV0pIHtcbiAgICAgIGNvbnN0IHBpdGNoID0gd2luZG93W2luZm8udmFyaWFibGVdLnpvbmVzWzBdLmtleVJhbmdlTG93O1xuXG4gICAgICBpZiAobGV2ZWwgPiAwKSB7XG4gICAgICAgIHRoaXMucGxheWVyLnF1ZXVlV2F2ZVRhYmxlKHRoaXMuYXVkaW9Db250ZXh0LCB0aGlzLmVxdWFsaXplci5pbnB1dCwgd2luZG93W2luZm8udmFyaWFibGVdLCB3aGVuLCBwaXRjaCwgMSAvIDY0LCAoMSAvIDEyNykgKiBsZXZlbCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FjaGVJbnN0cnVtZW50KGluZm8pO1xuICAgIH1cbiAgfVxuXG4gIHBsYXlCZWF0QXQod2hlbiwgYmVhdCwgYnBtKSB7XG4gICAgaWYgKCFiZWF0KSByZXR1cm47XG4gICAgY29uc3QgTiA9ICg0ICogNjApIC8gYnBtO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiZWF0WzBdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB0aGlzLnBsYXlEcnVtKHdoZW4sIGJlYXRbMF1baV0pO1xuICAgIH1cblxuICAgIGJlYXRbMV0uZm9yRWFjaChub3RlID0+IHtcbiAgICAgIGNvbnN0IFtpbnN0cnVtZW50LCBwaXRjaGVzLCBkdXJhdGlvbiwgbGV2ZWxdID0gbm90ZTtcbiAgICAgIGNvbnN0IGluZm8gPSB0aGlzLnBsYXllci5sb2FkZXIuaW5zdHJ1bWVudEluZm8oaW5zdHJ1bWVudCk7XG5cbiAgICAgIGlmICh3aW5kb3dbaW5mby52YXJpYWJsZV0pIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIucXVldWVXYXZlVGFibGUodGhpcy5hdWRpb0NvbnRleHQsIHRoaXMuZXF1YWxpemVyLmlucHV0LCB3aW5kb3dbaW5mby52YXJpYWJsZV0sIHdoZW4sIHBpdGNoZXMsIGR1cmF0aW9uICogTiwgKDEgLyAxMjcpICogbGV2ZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYWNoZUluc3RydW1lbnQoaW5mbyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICJBQUFBLFNBQVMsYUFBYTtBQUV0QixNQUFPLE9BQXFCO0FBQUEsRUFDMUIsY0FBYztBQUNaLFNBQUssT0FBTyxDQUFDO0FBQ2IsU0FBSyxRQUFRLENBQUM7QUFDZCxTQUFLLE9BQU87QUFDWixTQUFLLE1BQU07QUFDWCxTQUFLLE9BQU8sSUFBSSxLQUFLO0FBQ3JCLFNBQUssVUFBVTtBQUFBLEVBQ2pCO0FBQUEsRUFFQSxZQUFZO0FBQ1YsVUFBTSxtQkFBbUIsT0FBTyxnQkFBZ0IsT0FBTztBQUV2RCxTQUFLLGVBQWUsSUFBSSxpQkFBaUI7QUFDekMsU0FBSyxjQUFjLEtBQUssYUFBYTtBQUNyQyxTQUFLLFNBQVMsSUFBSSxt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
