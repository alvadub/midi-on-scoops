export default class Player {
  constructor() {
    this.tracks = [];
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
    this.volumesInstrument = [];
    this.volumesDrum = [];
  }

  contextTime() {
    return this.audioContext.currentTime;
  }

  preloadSounds() {
    const sounds = [];

    this.tracks.forEach(idx => {
      try {
        if (idx[0] && idx[0][0]) sounds.push(...idx.map(x => x.reduce((prev, y) => prev.concat(y[0]), [])));
      } catch (e) {
        console.log('SKIP', e);
      }
    });

    [...new Set(sounds.reduce((memo, cur) => memo.concat(cur), []))].forEach(nth => {
      if (nth === '0') this.cacheDrum(nth);
      else this.cacheInstrument(nth);
    });
  }

  playLoopMachine(tempo) {
    this.bpm = tempo || this.bpm;
    this.startPlayLoop(this.beats, this.bpm, this.fraq);
  }

  stopLoopMachine() {
    this.stopPlayLoop();
  }

  setLoopMachine(data) {
    this.tracks = data || this.tracks;
    this.bars = (data[0] && data[0][0] && data[0][0][0] && data[0][0][0].length - 2) || 4;
    this.fraq = 1 / this.bars;
    this.preloadSounds();

    for (let i = 0; i < this.bars; i += 1) {
      const drums = [];
      const notes = [];

      this.tracks.forEach(track => {
        if (!track) return;
        track.forEach(clips => {
          if (!clips) return;
          clips.forEach(clip => {
            if (clip[i + 2]) {
              const [level, chunk] = clip[i + 2];

              if (clip[0] > 127) {
                clip[0] -= 127;
                drums.push(clip[i + 2]);
              } else {
                if (Array.isArray(chunk)) {
                  chunk.forEach(tone => {
                    notes.push([clip[0], tone, 1 / 16]);
                  });
                }
                if (typeof chunk === 'number') {
                  notes.push([clip[0], chunk, 1 / 16]);
                }
              }
            }
          });
        });
      });

      this.beats[i] = [drums, notes];
    }
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

  // make methods more generic...
  cacheInstrument(n) {
    const info = this.player.loader.instrumentInfo(n);

    if (!window[info.variable]) {
      this.player.loader.startLoad(this.audioContext, info.url, info.variable);
      this.player.loader.waitLoad(function () {
        console.log('cached', n, info.title);
      });
    }
  }

  cacheDrum(n) {
    const info = this.player.loader.drumInfo(n);

    if (!window[info.variable]) {
      this.player.loader.startLoad(this.audioContext, info.url, info.variable);
      this.player.loader.waitLoad(function () {
        console.log('cached', n, info.title);
      });
    }
  }

  playDrum(when, drum) {
    const info = this.player.loader.drumInfo(drum);

    if (window[info.variable]) {
      const pitch = window[info.variable].zones[0].keyRangeLow;
      const volume = this.volumeDrumAdjust(drum);

      // FIXME: adjust this one
      this.player.queueWaveTable(this.audioContext, this.equalizer.input, window[info.variable], when, pitch, 1/16, volume);
    } else {
      this.cacheDrum(drum);
    }
  }

  playDrumsAt(when, drums) {
    for (let i = 0; i < drums.length; i += 1) {
      this.playDrum(when, drums[i]);
    }
  }

  volumeInstrumentAdjust(instrument) {
    return typeof this.volumesInstrument[instrument] !== 'undefined' ? this.volumesInstrument[instrument] : 1;
  }

  volumeDrumAdjust(drum) {
    return typeof this.volumesDrum[drum] !== 'undefined' ? this.volumesDrum[drum] : 1;
  }

  playBeatAt(when, beat, bpm) {
    this.playDrumsAt(when, beat[0]);

    const chords = beat[1];
    const N = (4 * 60) / bpm;

    for (let i = 0; i < chords.length; i += 1) {
      const chord = chords[i];
      const [instrument, pitches, duration] = chord;

      let kind = 0;
      if (chord.length > 3) {
        kind = chord[3];
      }

      if (kind === 1) {
        this.playStrumDownAt(when, instrument, pitches, duration * N);
      } else if (kind === 2) {
        this.playStrumUpAt(when, instrument, pitches, duration * N);
      } else if (kind === 3) {
        this.playSnapAt(when, instrument, pitches, duration * N);
      } else {
        this.playChordAt(when, instrument, pitches, duration * N);
      }
    }
  }

  // make more generic!
  playChordAt(when, instrument, pitches, duration) {
    const info = this.player.loader.instrumentInfo(instrument);

    if (window[info.variable]) {
      this.player.queueWaveTable(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration, this.volumeInstrumentAdjust(instrument));
      // this.player.queueChord(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration, this.volumeInstrumentAdjust(instrument));
    } else {
      this.cacheInstrument(instrument);
    }
  }

  playStrumUpAt(when, instrument, pitches, duration) {
    const info = this.player.loader.instrumentInfo(instrument);

    if (window[info.variable]) {
      this.player.queueStrumUp(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration, this.volumeInstrumentAdjust(instrument));
    } else {
      this.cacheInstrument(instrument);
    }
  }

  playStrumDownAt(when, instrument, pitches, duration) {
    const info = this.player.loader.instrumentInfo(instrument);

    if (window[info.variable]) {
      this.player.queueStrumDown(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration, this.volumeInstrumentAdjust(instrument));
    } else {
      this.cacheInstrument(instrument);
    }
  }

  playSnapAt(when, instrument, pitches, duration) {
    const info = this.player.loader.instrumentInfo(instrument);

    if (window[info.variable]) {
      this.player.queueSnap(this.audioContext, this.equalizer.input, window[info.variable], when, pitches, duration, this.volumeInstrumentAdjust(instrument));
    } else {
      this.cacheInstrument(instrument);
    }
  }
}
