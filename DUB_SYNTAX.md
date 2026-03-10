# DUB Syntax Reference

DUB is a plain-text music notation format designed for live coding and fast prototyping. A `.dub` file describes tracks, rhythms, notes, and an arrangement in a compact, readable form. This document explains every part of the syntax from scratch.

---

## Table of Contents

1. [File Structure](#1-file-structure)
2. [Comments](#2-comments)
3. [Header Directives](#3-header-directives)
4. [Variables](#4-variables)
5. [Tracks and Sections](#5-tracks-and-sections)
6. [Channel Lines](#6-channel-lines)
7. [Rhythm Patterns](#7-rhythm-patterns)
8. [Velocity](#8-velocity)
9. [Notes and Chords](#9-notes-and-chords)
10. [Repeat Operators](#10-repeat-operators)
11. [Modes and Scales](#11-modes-and-scales)
12. [Chord Progressions](#12-chord-progressions)
13. [Scale Degree Selection](#13-scale-degree-selection)
14. [Euclidean Rhythms](#14-euclidean-rhythms)
15. [Pattern References](#15-pattern-references)
16. [Arrangement](#16-arrangement)
17. [Full Examples](#17-full-examples)

---

## 1. File Structure

A `.dub` file is composed of four kinds of content, in any order:

```
; header directives / comments
%variable definitions
# track blocks
> arrangement line
```

Here is the simplest complete example:

```dub
; tempo: 120

# drums
  @A
    #0 100 x-x- x-x- x-x- x-x- c3

> A x4
```

Lines are processed top to bottom. Blank lines and indentation are ignored (they are purely cosmetic). Line order within a track matters.

---

## 2. Comments

Two comment styles are supported:

```dub
; This is a full-line comment (starts with semicolon)

#1 100 x--- x--- -- x--- C4  ; inline comment — rest of line ignored

#1 100 x--- x--- x--- x--- C4 -- this is also an inline comment
```

The `--` inline comment form requires surrounding spaces and must have non-whitespace content before it on the line.

---

## 3. Header Directives

Header directives are comment lines with a recognized key. They configure playback globals.

```dub
; tempo: 138       -- BPM, clamped to 60–200
; bars: 16         -- loop length in bars (4–32)
; key: -2          -- semitone transpose for all pitched output (-12 to 12)
; bank: tr808      -- select a named sound bank for all channels
; bank.drums: tr808        -- select a sound bank for drums only
; bank.instruments: gm     -- select a sound bank for instruments only
```

All directives are optional. Defaults are `tempo: 120`, `bars: 16`, `key: 0`.

---

## 4. Variables

Variables store reusable expressions — note sequences, chords, patterns — under a name. They are referenced later with `%name`.

### `%` — Value Variables

```dub
%chord c4|g4|a#4
%bassline c2 g1 a#1 g1 f1 g1 c2 g1
%vel 96
```

Declaration: `%name <expression>`
Reference: `%name` anywhere in a channel line

```dub
#1 96 --x- --x- --x- --x- %chord %chord
```

`%` alone (without a name) is the **repeat last** operator — see [Repeat Operators](#10-repeat-operators).

### `&` — Pattern Reference Variables

`&` variables store rhythm patterns that can be reused across channel lines:

```dub
&groove x-x- -x-x x-x- -x-x

#0 100 &groove c3
```

The syntax is `&name <pattern>` for declaration and `&name` as a token in a channel line. Circular references are detected and rejected.

---

## 5. Tracks and Sections

A **track** groups one or more named sections together. Tracks are declared with `#` or `##`:

```dub
# drums
## bass
```

Both `#` and `##` declare tracks — the double `##` is cosmetic convention for sub-tracks. The track name follows the `#` (with a space). Track names are free-form text.

### Sections

Inside a track, **sections** are declared with `@NAME`:

```dub
# drums
  @A
    #0 127 x-x- x-x- c3
  @B
    #0 127 xx-- xx-- c3
```

Section names must be uppercase letters and digits (e.g. `A`, `B`, `INTRO`, `VERSE`, `DROP2`). They are referenced in the arrangement line `>`.

### Section Inheritance

A section can inherit all channels from another section in the same track:

```dub
@B < A
```

This copies every channel declared under `@A` into `@B`. Additional channel lines after `@B < A` are merged in (appended):

```dub
## drums
  @A
    #0 127 x-x- x-x- c3
    #0 100 -x-x -x-x d3
  @B < A
    #0 96 ---- ---x e3    ; adds a third channel on top of A's two
```

---

## 6. Channel Lines

A **channel line** defines one voice (instrument + rhythm + notes) within a section. The format is:

```
#<channel> <velocity> <pattern> <notes...>
```

- `#<channel>` — MIDI channel / instrument number (see below)
- `<velocity>` — default note velocity (0–127)
- `<pattern>` — rhythm pattern string
- `<notes...>` — one or more note/chord tokens cycled across pattern hits

```dub
#1 96 x--- x--- x--- x--- C4 E4 G4 E4
```

This plays C4, E4, G4, E4 on hits 1, 2, 3, 4 respectively.

### Channel Numbers

`#0` is the **drum channel** (MIDI channel 10). All other integers are instrument channels mapped to General MIDI program numbers.

Named aliases are also supported instead of raw numbers:

| Alias | Channel |
|-------|---------|
| `#bd` / `#kick` | `#2001` |
| `#sd` / `#sn` / `#snare` | `#2004` |
| `#cp` / `#clap` | `#2028` |
| `#hh` / `#hat` | `#2035` |
| `#oh` / `#ride` | `#2081` |
| `#perc` | `#2123` |
| `#piano` | `#0` |
| `#bass` | `#33` |
| `#lead` | `#80` |
| `#pad` | `#88` |
| `#strings` | `#48` |
| `#brass` | `#61` |
| `#synth` | `#94` |

```dub
#bass 100 x-x- x-x- C2 G1
```

### Multiple Channel Lines per Section

You can have as many channel lines as needed under one section. Each line is an independent voice:

```dub
@A
  #0 127 x--- ---- x--- ---- b1         ; kick
  #0 118 ---- x--- ---- x--- d2         ; snare
  #0 78  x-x- x-x- x-x- x-x- g#2       ; hi-hat
```

### Layer and Replace Merge Modes

A `+` or `!` flag after the channel token controls how multiple lines on the same channel are merged:

```dub
#1 + 100 x--- x--- E4    ; layer on top of previous #1 content
#1 ! 100 x--- x--- E4    ; replace previous #1 content
```

---

## 7. Rhythm Patterns

Patterns describe which beats are hits (`x`), rests (`-`), or sustains (`_`).

| Character | Meaning |
|-----------|---------|
| `x` | hit (note on) |
| `-` | rest (silence) |
| `_` | sustain (hold previous note) |

Spaces inside patterns are ignored — they are purely visual grouping:

```dub
x-x- x-x-      ; same as x-x-x-x-
```

### Sub-step Groups `[...]`

Brackets subdivide a single step into multiple sub-steps. The whole bracket counts as one rhythmic slot:

```dub
[xx]   ; two hits in the space of one step
[x-]   ; one hit + one rest in one step
[x_]   ; hit then sustain (a note slightly longer than one step)
```

Brackets can be nested:

```dub
[[x_][x_]][[x______]-]x_
```

This is valid and creates deeply subdivided rhythms — used for tuplet-like feels.

### Pattern Examples

```dub
x-x- x-x-              ; quarter-note hits
--x- --x- --x- --x-    ; backbeat (reggae skank)
x--- ---- x--- ----    ; half-note kick
[xx]-[xx]- [xx]-[xx]-  ; dotted rhythm grouping
```

---

## 8. Velocity

Velocity is a number from 0 to 127 placed immediately after the channel token:

```dub
#1 96 x--- x--- C4
```

Use plain numeric values for velocity (integers or decimals):

```dub
#1 96    x--- x--- C4
#1 0.75  x--- x--- C4
```

Legacy shorthand forms like `50%`, `3/4`, and `4*5` are deprecated for velocity and rejected by the parser.

---

## 9. Notes and Chords

### Single Notes

Notes use scientific pitch notation: letter + optional accidental + octave number.

```dub
C4   D#3   Eb5   G#2   A2   Bb4
```

- Letters: `A`–`G` (case-insensitive)
- Accidentals: `#` (sharp), `b` (flat)
- Octave: integer (0–8 typical range)

Notes are **cycled** across pattern hits. If there are more hits than notes, the note list wraps around:

```dub
#1 100 x-x- x-x- x-x- x-x-   C4 E4 G4
; hit 1→C4, hit 2→E4, hit 3→G4, hit 4→C4, hit 5→E4...
```

### Chords

Chords are multiple notes separated by `|`:

```dub
c4|g4|a#4        ; C minor chord voicing
e4|g4|b4         ; E minor chord
```

A chord counts as a single token and all its notes play simultaneously on one hit. Chords can also be unfolded (each note on a separate hit) by appending `..`:

```dub
c4|e4|g4..       ; C major arpeggio — notes spread across consecutive hits
```

### Chord Symbols

Named chord symbols from the `harmonics` library are also supported inline:

```dub
CM    ; C major triad
Cm7   ; C minor seventh
Fmaj7 ; F major seventh
```

These are resolved to note arrays at parse time.

---

## 10. Repeat Operators

### `%` — Repeat Last Token

A bare `%` after any token repeats the **previous token** one more time:

```dub
%chord c4|g4|a#4

#1 96 x-x- x-x- x-x- x-x-   %chord %
; expands to: %chord %chord (plays the chord twice)
```

Inside a variable definition:

```dub
%3 C4 % % % D4 % % %
; expands to: C4 C4 C4 C4 D4 D4 D4 D4
```

### `xN` — Repeat N Times

`xN` after a token repeats it N times. Appears after a note, chord, or variable reference:

```dub
#1 100 x-x- x-x-   C4 x4 E4
; plays C4 four times, then E4 once
```

In the arrangement line (see [Arrangement](#16-arrangement)), `xN` repeats sections:

```dub
> A x4 B x2
```

### `.` — Repeat First

A `.` in a note list repeats the **first** note of the current channel line:

```dub
#1 100 x-x- x-x-   C4 E4 .
; plays C4, E4, C4
```

### `/N` — Divide

`/N` divides the last numeric value by N:

```dub
half: 100 /2
> half
; resolves to 50
```

---

## 11. Modes and Scales

A **mode** expression generates a scale from a root note. The syntax is `<root> <mode>`:

```dub
C4 phrygian
D3 dorian
G2 minor
A4 major
```

Supported modes: `major`, `minor`, `phrygian`, `dorian`, `mixolydian`, `locrian`, `lydian`.

Append `..` to **expand** the scale into individual notes:

```dub
%a C2 phrygian..
; %a becomes a list of all phrygian scale notes starting at C2

#1 100 x-x_-xx_ x-x_-xx_   %a
; each hit picks the next note from the scale
```

Without `..`, the scale is used as a chord-like list that repeats cyclically.

---

## 12. Chord Progressions

The `++` operator builds a chord progression from a key + mode and a series of Roman numeral degrees.

```dub
C4 phrygian ++ I I III IV
```

This resolves the I, I, III, IV chords from C phrygian. Each chord becomes a chord token in the note list.

Roman numerals:
- Uppercase (`I`, `IV`, `V`) → major quality
- Lowercase (`i`, `iv`, `v`) → minor quality
- With `°` suffix (`vii°`) → half-diminished (m7b5)

```dub
%a C4 phrygian.. ++ I I III IV

#3 100 -x-x -x-x -x-x -x-x   %a %a
```

---

## 13. Scale Degree Selection

The `**` operator selects specific scale degrees from a key + mode expression:

```dub
C4 major ** 1 3 5        ; picks degrees 1, 3, 5 of C major → C4, E4, G4
A2 dorian ** 1..4        ; range: degrees 1 through 4
```

`1..7` notation picks a range of consecutive degrees.

```dub
%motif G3 minor ** 1 4 5 7

#1 100 x-x- x-x- x-x- x-x-   %motif
```

---

## 14. Euclidean Rhythms

Euclidean patterns distribute N hits as evenly as possible across M steps. The syntax is:

```
name(onsets, steps)
name(onsets, steps, rotation)
```

The `name` prefix is optional and ignored — it is just a label for readability:

```dub
bd(3,8)      ; 3 hits in 8 steps: x--x--x-
hh(5,8)      ; 5 hits in 8 steps: x-xx-xx-
(2,4)        ; 2 hits in 4 steps: x-x-
bd(3,8,2)    ; same as bd(3,8) but rotated 2 steps right
```

Euclidean tokens expand to regular pattern strings at parse time and can appear anywhere a pattern is expected:

```dub
#0 100 bd(3,8) bd(3,8)   c3
```

---

## 15. Pattern References

`&name` variables hold reusable rhythm patterns:

```dub
&groove x-x- -x-x x-x- -x-x
&fill   [xx][xx][xx][xx]

#0 100 &groove c3
#0 80  &fill   e3
```

Pattern references are expanded inline before evaluation. They cannot be circular.

---

## 16. Arrangement

The `>` line defines the playback order of sections. It appears at the bottom of the file (by convention) and can span multiple lines.

```dub
> A x4 B x2 THROW x2 A x2
```

This plays: A A A A B B THROW THROW A A

### Tokens

| Token | Meaning |
|-------|---------|
| `A`, `INTRO`, `DROP` | play named section once |
| `xN` | repeat previous section N more times |
| `%` | repeat previous section once more |

```dub
> INTRO x2 A x8 BRIDGE A x4
```

Multiple `>` lines are valid and concatenated:

```dub
> INTRO x2 A x4
> B x4 OUTRO
```

### Live Loop Blocks `[...]`

Square brackets around arrangement tokens define a **live loop block**:

```dub
> [A B C %]
```

A bracket block without `xN` is a **live loop** — it loops indefinitely until navigated away from during performance.

A bracket block with `xN` is a **finite expansion** — it plays the sequence N times then continues:

```dub
> [A B C] x4 OUTRO
; plays A B C A B C A B C A B C, then OUTRO
```

During playback, clicking a token inside an active live loop block keeps the loop going. Clicking a token outside the block exits it.

---

## 17. Full Examples

### Minimal Drum Beat

```dub
; tempo: 90

# drums
  @A
    #0 127 x--- x--- x--- x---   c3   ; kick on every beat
    #0 100 ---- x--- ---- x---   d3   ; snare on 2 and 4
    #0 80  x-x- x-x- x-x- x-x-  g#3  ; hi-hat 8ths

> A x4
```

### Reggae Skank with Chords

```dub
; tempo: 138

%chA c4|g4|a#4
%chB c4|f4|a4

# skank
  @A
    #1 96 --x- --x- --x- --x-   %chA %chB %chA %chB
  @B < A
    #1 96 --x- --x- --x- --x-   %chA %chA %chB %chB

> A x4 B x2
```

### Bass + Drums

```dub
; tempo: 146
; bars: 16

%bassA c2 g1 a#1 g1 f1 g1 c2 g1

## bass
  @A
    #33 118 x--- --x- x--- --x- x--- --x- x--- --x-   %bassA %

## drums
  @A
    #0 124 x--- ---- x--- ---- x--- ---- x--- ----   b1   ; kick
    #0 118 ---- x--- ---- x--- ---- x--- ---- x---   d2   ; snare
    #0 78  x-x- x-x- x-x- x-x- x-x- x-x- x-x- x-x- g#2  ; hat

> A x8
```

### Scale-based Melody

```dub
; tempo: 127

%a C2 phrygian..

# melody
  @A
    #1 100 x-x_-xx_ x-x_-xx_   %a

> A x4
```

### Progression with Section Inheritance

```dub
%a C4 phrygian.. ++ I I III IV

# lead
  @A
    #3 100 -x-x -x-x -x-x -x-x   %a %a

## drums
  @A
    #0 120 [xx]-[xx]- [xx]-[xx]-   d#1
    #0 110 -x-x -x-x                d2

> A x4
```

---

## Quick Reference Card

```
; comment                          full-line comment
; tempo: 138                       BPM header
; bars: 16                         bar count header
; key: -2                          semitone transpose

%name expr                         define value variable
&name pattern                      define pattern variable

# track name                       declare a track
  @SECTION                         declare a section
  @SECTION < OTHER                 inherit channels from OTHER

  #N vel pattern notes...          channel line
  #alias vel pattern notes...      channel by name alias

x - _                              hit, rest, sustain
[xx] [x-] [x_]                     sub-step group (1 slot)

C4 D#3 Bb2                         single note
c4|g4|a#4                          chord (simultaneous)
c4|e4|g4..                         chord unfolded (arpeggio)

%name                              variable reference
%                                  repeat last token
xN                                 repeat N times
.                                  repeat first note

C4 major                           scale (cyclic)
C4 phrygian..                      scale expanded (sequential)
C4 major ++ I III V                chord progression
C4 major ** 1 3 5                  scale degree selection
C4 major ** 2..6                   degree range

bd(3,8)                            Euclidean rhythm
(3,8,2)                            Euclidean with rotation

> A x4 B x2 OUTRO                  arrangement
> [A B C %]                        live loop block
> [A B] x4 OUTRO                   finite block expansion
```
