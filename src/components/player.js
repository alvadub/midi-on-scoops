export default class Player {
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

  preload(data, length) {
    this.data = data || this.data;
    this.bars = length || this.bars || 16;

    let count = 0;
    this.data.forEach(sections => {
      if (!sections) return;
      sections.forEach(parts => {
        if (!parts) return;
        parts.forEach(clip => {
          if (clip.length - 2 > count) count = clip.length - 2;
          const info = this.player.loader.instrumentInfo(clip[0]);
          this.cacheInstrument(info);
        });
      });
    });

    for (let i = 0; i < count; i += 1) {
      const drums = [];
      const notes = [];

      this.data.forEach(sections => {
        if (!sections) return;
        sections.forEach(parts => {
          if (!parts) return;
          parts.forEach(clip => {
            if (clip[i + 2]) {
              const [level, chunk] = clip[i + 2];

              if (clip[0] > 127) {
                clip[0] -= 127;
                drums.push(clip[i + 2]);
              } else {
                if (Array.isArray(chunk)) {
                  chunk.forEach(tone => {
                    notes.push([clip[0], tone, 1 / 16, level]);
                  });
                }
                if (typeof chunk === 'number') {
                  notes.push([clip[0], chunk, 1 / 16, level]);
                }
              }
            }
          });
        });
      });

      this.beats[i] = [drums, notes];
    }
  }

  contextTime() {
    return this.audioContext.currentTime;
  }

  playLoopMachine(tempo) {
    this.bpm = tempo || this.bpm;
    this.startPlayLoop(this.beats, this.bpm, this.fraq);
  }

  stopLoopMachine() {
    this.stopPlayLoop();
  }

  setLoopMachine(data, length) {
    this.beats.length = 0;
    this.preload(data, length);
    this.fraq = 1 / this.bars;
  }

  startPlayLoop(beats, bpm, density, fromBeat) {
    this.stopPlayLoop();
    this.loopStarted = true;

    const wholeNoteDuration = (4 * 60) / bpm;

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
        console.log('cached', info.title);
        delete window[info.variable + 127];
      });
    }
  }

  playDrum(when, drum) {
    const [instrument, level] = drum;
    const info = this.player.loader.drumInfo(instrument);

    if (window[info.variable]) {
      const pitch = window[info.variable].zones[0].keyRangeLow;

      this.player.queueWaveTable(this.audioContext, this.equalizer.input, window[info.variable], when, pitch, 1 / 16, (1 / 127) * level);
    } else {
      this.cacheInstrument(info);
    }
  }

  playBeatAt(when, beat, bpm) {
    const chords = beat[1];
    const N = (4 * 60) / bpm;

    for (let i = 0; i < beat[0].length; i += 1) {
      this.playDrum(when, beat[0][i]);
    }

    for (let i = 0; i < chords.length; i += 1) {
      const chord = chords[i];
      const [instrument, pitches, duration, level] = chord;
      const info = this.player.loader.instrumentInfo(instrument);

      if (window[info.variable]) {
        this.player.queueWaveTable(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration * N, (1 / 127) * level);
      } else {
        this.cacheInstrument(info);
      }
    }
  }
}
