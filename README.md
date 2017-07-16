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

Each expression would generate a value or an array of values, sub-expressions are resolved and would produce on or more values, etc.

Once done, all expressions are concatenated into a single array where possible.

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
$ midi music/src fluidsynth music/sf2/PC51f.sf2
# under the hood it will be called as `fluidsynth music/sf2/PC51f.sf2 path/to/generated_midi_file.mid`
```
