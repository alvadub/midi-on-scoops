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

    -- intrument tracks are declared as `# name`

    # Piano -- this is a comment (instrument's name)

    -- blank lines are ignored
    -- PREFIX: ARG1 ARG2 ...

    -- any first-letter for almost any property should work, e.g.
    -- `c major 4` would call `scribble.scale('c', 'major', 4)`
    -- `0..2` would apply `.slice(0, 2)`
    n: c major 4 0..2 -- n[otes]

    p: x * 16 -- this translates to `'x'.repeat(16)` -- p[attern]

    a: 5 10..120 / 10 127x3 -- a[ccentMap]
    -- `10..120 / 10` will result in `[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]`
    -- `127x3` will result in `[127, 127, 127]`

    -- so, ranges followed by division are used to generate values
    -- otherwise, a range would slice the current value on its position...

The code above would produce the next scribbletune's settings:

```js
{
  notes: ['c3', 'd3'],
  pattern: 'x'.repeat(16),
  accentMap: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 127, 127, 127],
}
```
