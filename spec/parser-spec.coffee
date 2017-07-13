scribble = require('scribbletune')

parsing = require('../lib/parsing')
builder = require('../lib/builder')

sample = '''

  -- intrument tracks are declared as `# name`

  # Piano -- this is a comment (instrument's name)

  -- blank lines are ignored
  -- PREFIX: ARG1 ARG2 ...

  -- any first-letter for almost any property should work, e.g.
  -- `c major 4` would call `scribble.scale('c', 'major', 4)`
  -- `0..2` would apply `.slice(0, 2)`
  n: c major 4 0..2 -- n[otes]

  p: x * 16 -- this translates to `'x'.repeat(16)` -- p[attern]

  a: 5 10..120 / 11 127x3 -- a[ccentMap]
  -- `10..120 / 11` will result in `[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]`
  -- `127x3` will result in `[127, 127, 127]`

  -- so, ranges followed by division are used to generate values
  -- otherwise, a range would slice the current value on its position...

'''

describe 'parser', ->
  beforeEach ->
    @ast = parsing(sample)

  it 'handle tracks', ->
    expect(@ast.lines[3].label).toEqual 'Piano'

    expect(@ast.tracks.Piano[0].input).toEqual ['c4', 'd4']
    expect(@ast.tracks.Piano[1].input).toEqual 'x'.repeat(16).split('')
    expect(@ast.tracks.Piano[2].input).toEqual [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 127, 127, 127]

  it 'handle expressions', ->
    expect(@ast.lines[11].input).toEqual ['c4', 'd4']
    expect(@ast.lines[13].input).toEqual 'x'.repeat(16).split('')
    expect(@ast.lines[15].input).toEqual [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 127, 127, 127]

describe 'builder', ->
  it 'can execute scribbletune code from ast', ->
    code = builder(parsing(sample))

    scribble.midi code.Piano[0]
