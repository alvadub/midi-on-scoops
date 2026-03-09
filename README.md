# MIDI on SCOOPS

Fast DUB prototyping in plain text.

Try it live: [m0s.soypache.co](https://m0s.soypache.co)

## What It Is

MIDI on SCOOPS lets you describe tracks, sections, rhythms, and arrangements as readable ASCII.
You can use the browser playground for instant playback or the CLI to generate `.mid` files.

## Syntax

```dub
%bass f#2 c#2 e2 f#2 e2 c#2 b1 c#2
%chord a3|c#4|f#4

# synth
  @INTRO
    #94 45 ---- ---- ---- ----
  @A
    #94 75 x--- --x- ---- ---- %chord

## drums
  @INTRO
    #0 50 x-x- x-x- x-x- x-x- f#2
  @A < INTRO

> INTRO x2 A x8
```

| Token | Meaning |
|---|---|
| `# name` | Start a track |
| `## name` | Additional track lane/group |
| `@SEC` | Section label |
| `@B < A` | Section inheritance |
| `#N [level] pattern notes` | Clip line: instrument/program + optional velocity + rhythm + notes |
| `#alias [level] pattern notes` | High-level channel alias (`#bd`, `#sd`, `#hh`, `#piano`, `#bass`, etc.) mapped to `#N` |
| `#0 ...` | Drum lane |
| `%var value` | Variable declaration |
| `; bank: name` | Select shared alias bank (from `/sound-map.json`) |
| `; bank.drums: name` | Override drum alias bank |
| `; bank.instruments: name` | Override instrument alias bank |
| `... -- note` | Suffix inline comment |
| `> ...` | Top-level arrangement |
| `xN` | Repeat N times |
| `** 1 3 5` | Select degrees from current `root mode` scale context |
| `[xx]` | Pattern grouping |

## Chords & Scales

```dub
%bass C2 phrygian..
%chords C4 major ++ I IV V
```

## Using the CLI

When calling `dub`, it uses `timidity` by default for playback.

```sh
$ dub examples/billy_jean.dub
$ dub examples/locks.dub
$ dub examples/x.dub
```

Use a different player by appending arguments:

```sh
$ dub music/src fluidsynth -i --gain 2 music/sf2/PC51f.sf2
```

Convert a `.mid` file into a first-pass DUB draft focused on pulse patterns:

```sh
$ midi2dub input.mid output.dub
```

### Compress a source

Use `dub compress` to reduce repeated note/chord expressions by extracting them to `%cN` variables.

```sh
$ dub compress examples/billy_jean.dub
$ dub compress examples/billy_jean.dub -o generated/compressed.billy_jean.dub --min-occ 3 --min-len 4
```

Options:

- `--dry-run`: show a replacement summary without writing files
- `--min-occ`: minimum occurrences for a replacement candidate (default `2`)
- `--min-len`: minimum sequence length for pass B (default `2`)
- `--aggressive`: allow candidates even when local savings is non-positive

Guarantees:

- Parser-compatible output (`parse` is expected to succeed after rewrite)
- No pattern/rhythm tokens are modified
- Deterministic `%c1`, `%c2`, ... naming order

Lint a DUB source for semantic issues (unknown sections, pulse/note mismatches, sustain misuse, duplicate input clips):

```sh
$ npm run dub:lint -- examples/billy_jean.dub
$ npm run dub:lint -- --strict examples/billy_jean.dub
```

## Browser Playground

Open [m0s.soypache.co](https://m0s.soypache.co) to write and play DUB in real time.

- `Space` or `Cmd/Ctrl+Enter`: play/stop
- BPM, Bars, and Key controls update the loop
- Drafts are auto-saved in `localStorage`
- WebAudioFont load order: remote preset URL -> local `/webaudiofont/sound/` subset -> built-in synth fallback
- Channel aliases plus fallback drum/instrument families are loaded from `/sound-map.json` (edit this file to remap without JS changes)

Example bank headers:

```dub
; bank: default
; bank.drums: tr808
; bank.instruments: gm
```

## Dub Sound Guide (Preamp + FX)

Use these controls in the right rack to get a classic dub tone quickly.

### 1) Set Musical Context First

At the top of your draft, set transport metadata:

```dub
; tempo: 138
; bars: 16
; key: -2
```

### 2) Enable Master Preamp

Turn on `Master Preamp` in the FX section.
The preamp is fixed to **5 bands** with **4 crossover cuts** (`Band Cut 1..4`).

Suggested crossover start point:
- `Band Cut 1`: ~100 Hz
- `Band Cut 2`: ~400 Hz
- `Band Cut 3`: ~1.5 kHz
- `Band Cut 4`: ~6 kHz

### 3) Shape the Overall Tone

- `Preamp HPF`: raise slightly (20-60 Hz) to clean sub rumble
- `Preamp LPF`: lower slightly (8-14 kHz) for darker dub top-end
- `Preamp Q`: keep gentle (`0.7-1.2`) for smooth crossover behavior

### 4) Use Per-Band Sends (Dub Character)

Each band has:
- `Band N Rev`
- `Band N Dly`
- `Band N VU` (activity meter)

A reliable dub starting recipe:
- Band 1 (sub): low rev, low dly (`0-10%`)
- Band 2 (low mids): moderate dly (`20-35%`)
- Band 3 (presence): moderate rev + dly (`25-40%`)
- Band 4 (highs): higher rev (`35-55%`), light dly (`10-25%`)
- Band 5 (air): mostly rev, very little dly

### 5) Set Delay Engine

Use global delay controls:
- `Delay Division`: `1/4` or `3/8` for classic bounce
- `Feedback`: `25-45%` for repeating tails without runaway

### 6) Arrangement Tips for Dub

- Leave space: fewer notes, more mute/rest bars
- Throw sends on transitions (A -> B, fills, last beat of bar)
- Snapshot good moments and recall them live

### 7) Quick Troubleshooting

- If FX feels too dense, lower per-band delay on Bands 2/3 first
- If mix is muddy, reduce low-band reverb and raise `Preamp HPF`
- If echoes feel off-grid, recheck `tempo` + `bars` metadata

## MIDI Drums

Use drum notes on the drum lane (`#0`):

```dub
# drums
  @A
    #0 120 xxxx xxxx f#2
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

## MIDI Instruments

Program numbers map to General MIDI families:

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

</details>
