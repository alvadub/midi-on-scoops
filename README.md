
# MIDI on SCOOPS

Translate DAW (from GUI-world) to ASCII (to text-world) as "Fast DUB Prototyping" approach.

## Problem

I spent lots of time using DAWs just for settings up pet projects, sandboxes, laboratories, etc.

Just having fun and brainstorming is difficult because I don't have enough instruments for playing music.

Since technology is a good solution because it's already cheap, I would like to have a "tool" for writing DUB in text format.

> MVP: I found several forms of composing MIDI on a modern web browser, so I would like to play DUB while on the BUS right on my phone.

## Libraries

- [MIDI.js](https://galactic.ink/midi-js/) for all the hardcore-stuff on the web-browser.
- [MIDI.js Soundfonts](https://github.com/gleitz/midi-js-soundfonts) standard sound-fonts free to use (cc).
- [Scribbletune](https://github.com/walmik/scribbletune) for the rhythm-box, since it's pattern-based and use pure array-values it can be abstracted easily.

- [soundfont-player](https://github.com/danigb/soundfont-player) as light-weight alternative to MIDI.js (preferred)
- [WebAudioFont](https://github.com/surikov/webaudiofont) prerendered sound-fonts for usage with MIDI.js*
- [Awesome Audio Viz](https://github.com/willianjusten/awesome-audio-visualization) a curated stuff for playing around...

> Web support is not ready yet! PR welcome :)

## General syntax proposal

Each expression would generate a value or an array of values, sub-expressions are resolved and would produce one or more values, etc.

Once declared, all expressions are concatenated into a single array where possible.

    # track 1

    @instrument: 1

    %sequence: x--- *16
    %range: 10..120 /11

    notes: c3 d3
    pattern: %sequence
    accentMap: 5 %range 127x3

The code above would produce the next scribbletune's settings:

```js
{
  notes: ['c3', 'd3'],
  pattern: 'x---'.repeat(16),
  accentMap: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 127, 127, 127],
}
```

## Using the CLI

When calling `midi` it will use `timidity` as default for MIDI playback.

- If you specify a file, it will be loaded an played. E.g. `midi sample.txt`
- Opening a directory will watch and play on any changes. E.g. `midi music/src`

Use a different player by appending the arguments:

```bash
$ midi music/src fluidsynth -i --gain 2 music/sf2/PC51f.sf2
# under the hood it will be called as `fluidsynth music/sf2/PC51f.sf2 path/to/generated_midi_file.mid`
```

### MIDI Drums

To enable the Drumkit you must use the channel 9, e.g.

```
@tempo: 90

# hat
@channel: 9

notes: f#2
pattern: xxxx *16

# snare
notes: e2
pattern: [---x][-x] *32
```

<details>
<summary>Note/Sound Mappings</summary>

- `d1` &mdash; Heart Bit
- `d#1` &mdash; Zap
- `g1` &mdash; Stick
- `a1` &mdash; Side Stick
- `a#1` &mdash; Ring Bell
- `b1` &mdash; Acoustic Bass Drum
- `c2` &mdash; Bass Drum 1
- `c#2` &mdash; Side Stick
- `d2` &mdash; Acoustic Snare
- `d#2` &mdash; Hand Clap
- `e2` &mdash; Electric Snare
- `f2` &mdash; Low Floor Tom
- `f#2` &mdash; Closed Hi Hat
- `g2` &mdash; High Floor Tom
- `g#2` &mdash; Pedal Hi-Hat
- `a2` &mdash; Low Tom
- `a#2` &mdash; Open Hi-Hat
- `b2` &mdash; Low-Mid Tom
- `c3` &mdash; Hi-Mid Tom
- `c#3` &mdash; Crash Cymbal 1
- `d3` &mdash; High Tom
- `d#3` &mdash; Ride Cymbal 1
- `e3` &mdash; Chinese Cymbal
- `f3` &mdash; Ride Bell
- `f#3` &mdash; Tambourine
- `g3` &mdash; Splash Cymbal
- `g#3` &mdash; Cowbell
- `a3` &mdash; Crash Cymbal 2
- `a#3` &mdash; Vibraslap
- `b3` &mdash; Ride Cymbal 2
- `c4` &mdash; Hi Bongo
- `c#4` &mdash; Low Bongo
- `d4` &mdash; Mute Hi Conga
- `d#4` &mdash; Open Hi Conga
- `e4` &mdash; Low Conga
- `f4` &mdash; High Timbale
- `f#4` &mdash; Low Timbale
- `g4` &mdash; High Agogo
- `g#4` &mdash; Low Agogo
- `a4` &mdash; Cabasa
- `a#4` &mdash; Maracas
- `b4` &mdash; Short Whistle
- `c5` &mdash; Long Whistle
- `c#5` &mdash; Short Guiro
- `d5` &mdash; Long Guiro
- `d#5` &mdash; Claves
- `e5` &mdash; Hi Wood Block
- `f5` &mdash; Low Wood Block
- `f#5` &mdash; Mute Cuica
- `g5` &mdash; Open Cuica
- `g#5` &mdash; Mute Triangle
- `a5` &mdash; Open Triangle
- `a#5` &mdash; Cabasa 2
- `c6` &mdash; Curtain

</details>

### MIDI Instruments

<details>
<summary>Number/Sound</summary>

- `0-7` &mdash; Piano
- `8-15` &mdash; Chromatic Percussion
- `16-23` &mdash; Organ
- `24-31` &mdash; Guitar
- `32-39` &mdash; Bass
- `40-47` &mdash; Strings
- `48-55` &mdash; Ensemble
- `56-63` &mdash; Brass
- `64-71` &mdash; Reed
- `72-79` &mdash; Pipe
- `80-87` &mdash; Synth Lead
- `88-95` &mdash; Synth Pad
- `96-103` &mdash; Synth Effects
- `104-111` &mdash; Ethnic
- `112-119` &mdash; Percussive
- `120-127` &mdash; Sound Effects

</summary>
