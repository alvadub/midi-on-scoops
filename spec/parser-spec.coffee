parsing = require('../lib/parsing')

sample = '''

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
  accentMap: %scale * 2

  @skip

  ; using placeholders also relaxes the parser, allowing to express more advanced stuff
  ; by abstracting music fragments and details, just like coding :D

  ; global or individual settings are allowed by using tags, e.g.

  @tempo: 90 ; for this track only (local)
  @instrument: 81 ; other tags are just local and just affect the selected track

  ; use `@skip` or `@only` to mute/solo any track,
  ; set the max-volume with `@level: 120` (global/local)
  ; instrumment assignment works by using MIDI-codes, check the reference below:
  ; http://www.ccarh.org/courses/253/handout/gminstruments/

'''

describe 'parser', ->
  beforeEach ->
    @ast = parsing(sample)

  it 'can handle tracks', ->
    expect(@ast.lines[5].label).toEqual 'Piano'

    expect(@ast.tracks.Piano.options[0].input).toEqual ['c4', 'd4']
    expect(@ast.tracks.Piano.options[1].input).toEqual 'x'.repeat(16)
    expect(@ast.tracks.Piano.options[2].input).toEqual [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 127, 127, 127]

  it 'can handle contexts', ->
    expect(@ast.settings).toEqual { tempo: '120' }
    expect(@ast.tracks.Skanking.settings).toEqual { skip: true, tempo: '90', instrument: '81' }

  it 'can handle expressions', ->
    expect(@ast.lines[12].input).toEqual ['c4', 'd4']
    expect(@ast.lines[14].input).toEqual 'x'.repeat(16)
    expect(@ast.lines[16].input).toEqual [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 127, 127, 127]

  it 'can handle substitutions', ->
    expect(@ast.context['%scale'].input).toEqual [100, 103.375, 106.75, 110.125, 113.5, 116.875, 120.25, 123.625, 127]
    expect(@ast.context['%prelude'].input).toEqual ['%Am', '%', '%Gm', '%', '%Am', '%', '%Gm', '%']
    expect(@ast.context['%Am'].input).toEqual [['a3', 'c4', 'e4']]
    expect(@ast.context['%Am'].comment).toEqual 'this is a chord'
    expect(@ast.tracks.Skanking.options[0].input).toEqual ['%prelude', '%intro']
