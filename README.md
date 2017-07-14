# MIDI on SCOOPS

Translate DAW (from GUI-world) to ASCII (to text-world) as "Fast DUB Prototyping" approach.

## Problem

I spent lots of time using DAWs just for settings up pet projects, sandboxes, laboratories, etc.

Just having fun and brainstorming is difficult because I don't have enough physical instruments for playing music.

Since technology is a good solution because it's already cheap, I would like to have a "tool" for writing DUB in text format.

> MVP: I found several forms of composing MIDI on a modern web browser, so I would like to play DUB while on the BUS right on my phone.

## Libraries

[MIDI.js](https://galactic.ink/midi-js/) for all the hardcore-stuff on the web-browser.
[MIDI.js Soundfonts](https://github.com/gleitz/midi-js-soundfonts) standard sound-fonts free to use (cc).
[Scribbletune](https://github.com/walmik/scribbletune) for the rhythm-box, since it's pattern-based and use pure array-values it can be abstracted easily.
[soundfont-player](https://github.com/danigb/soundfont-player) as light-weight alternative to MIDI.js (preferred)
[WebAudioFont](https://github.com/surikov/webaudiofont) prerendered sound-fonts for usage with MIDI.js*

## General syntax proposal

Each expression would generate a value or an array of values, sub-expressions are resolved and would produce on or more values, etc.

Once done, all expressions are concatenated into a single array where possible.

    @tempo: 120 ; globally set before any track gets defined

    ; intrument tracks are declared as `# name`

    # Piano ; this is a comment (instrument's name)

    ; blank lines are ignored
    ; PREFIX: ARG1 ARG2 ...

    ; `c major 4` would call `scribble.scale('c', 'major', 4)`
    ; `0..2` would apply `.slice(0, 2)`
    notes: c major 4 0..2

    pattern: x * 16 ; this translates to `'x'.repeat(16)`

    accentMap: 5 10..120 / 11 127x3
    ; `10..120 / 11` will result in `[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]`
    ; `127x3` will result in `[127, 127, 127]`

    ; so, ranges followed by division are used to generate values
    ; otherwise, a range would slice the current value on its position...

    ; in order to avoid duplication we can use `%id` for placing reusable expressions,
    ; additionally a single `%` can be used for repeat the last given value, e.g.

    %Am: a3|c4|e4 ; this is a chord
    %Gm: g3|c4|e4
    %Fm: f3|c4|a4

    ; of course we can abstract more large expressions
    %prelude: %Am % %Gm % %Am % %Gm %
    %intro: %Fm % % % %Am % % %
    %scale: 100..127 / 8

    # Skanking

    notes: %prelude %intro
    pattern: -----x-- * 16
    accentMap: %scale %

    @skip

    ; using placeholders also relaxes the parser, allowing to express more advanced stuff
    ; by abstracting music fragments and details, just like coding :D

    ; global or individual settings are allowed by using tags, e.g.

    @tempo: 90 ; this override the global tempo value
    @instrument: 81 ; other tags are just local and only affect the selected track

    ; use `@skip` or `@only` to mute/solo any track,
    ; set the max-volume with `@level: 120` (global/local)
    ; instrumment assignment works by using MIDI-codes, check the reference below:
    ; http://www.ccarh.org/courses/253/handout/gminstruments/

The code above would produce the next scribbletune's settings:

```js
{
  notes: ['c3', 'd3'],
  pattern: 'x'.repeat(16),
  accentMap: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 127, 127, 127],
}
```

## Using the CLI

When calling `midi` it will use `timidity` as default for MIDI playback.

Use a different player by appending the arguments:

```bash
$ midi music/src fluidsynth music/sf2/PC51f.sf2
# under the hood it will be called as `fluidsynth music/sf2/PC51f.sf2 path/to/generated_midi_file.mid`
```
