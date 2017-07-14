parsing = require('../lib/parsing')

sample = '''

  ; intrument tracks are declared as `# name`

  # Piano ; this is a comment (instrument's name)

  ; blank lines are ignored
  ; PREFIX: ARG1 ARG2 ...

  ; any first-letter for almost any property should work, e.g.
  ; `c major 4` would call `scribble.scale('c', 'major', 4)`
  ; `0..2` would apply `.slice(0, 2)`
  n: c major 4 0..2 ; n[otes]

  p: x * 16 ; this translates to `'x'.repeat(16)` -- p[attern]

  a: 5 10..120 / 11 127x3 ; a[ccentMap]
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
  %prelude: %Am % % % %Gm % % %
  %intro: %prelude * 4
  %scale: 100..127 / 8

  # Skanking

  n: %prelude %Fm % % % %Am % % %
  p: -----x-- * 16
  a: %scale * 2

  ; using placeholders also relaxes the parser, allowing to express more advanced stuff
  ; by abstracting music fragments and details, just like coding :D

'''

describe 'parser', ->
  beforeEach ->
    @ast = parsing(sample)

  it 'can handle tracks', ->
    expect(@ast.lines[3].label).toEqual 'Piano'

    expect(@ast.tracks.Piano[0].input).toEqual ['c4', 'd4']
    expect(@ast.tracks.Piano[1].input).toEqual 'x'.repeat(16)
    expect(@ast.tracks.Piano[2].input).toEqual [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 127, 127, 127]

  it 'can handle expressions', ->
    expect(@ast.lines[11].input).toEqual ['c4', 'd4']
    expect(@ast.lines[13].input).toEqual 'x'.repeat(16)
    expect(@ast.lines[15].input).toEqual [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 127, 127, 127]

  it 'can handle substitutions', ->
    expect(@ast.context['%scale'].input).toEqual [100, 103.375, 106.75, 110.125, 113.5, 116.875, 120.25, 123.625, 127]
    expect(@ast.context['%prelude'].input).toEqual ['%Am', '%', '%', '%', '%Gm', '%', '%', '%']
    expect(@ast.context['%Am'].input).toEqual [['a3', 'c4', 'e4']]
    expect(@ast.context['%Am'].comment).toEqual 'this is a chord'
    expect(@ast.tracks.Skanking[0].input).toEqual ['%prelude', '%Fm', '%', '%', '%', '%Am', '%', '%', '%']
