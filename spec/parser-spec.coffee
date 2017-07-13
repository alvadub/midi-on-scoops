scribble = require('scribbletune')

parsing = require('../lib/parsing')
builder = require('../lib/builder')

exec = require('child_process').exec

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

  # skanking

  n: a3|c4|e4 * 4 g3|c4|e4 g3|c4|e4 g3|c4|e4 g3|c4|e4 f3|c4|a4 f3|c4|a4 f3|c4|a4 f3|c4|a4
  p: -----x-- * 16
  a: 100..127 / 8

'''

jasmine.DEFAULT_TIMEOUT_INTERVAL = 999999

describe 'parser', ->
  beforeEach ->
    @ast = parsing(sample)

  it 'handle tracks', ->
    expect(@ast.lines[3].label).toEqual 'Piano'

    expect(@ast.tracks.Piano[0].input).toEqual ['c4', 'd4']
    expect(@ast.tracks.Piano[1].input).toEqual 'x'.repeat(16)
    expect(@ast.tracks.Piano[2].input).toEqual [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 127, 127, 127]

  it 'handle expressions', ->
    expect(@ast.lines[11].input).toEqual ['c4', 'd4']
    expect(@ast.lines[13].input).toEqual 'x'.repeat(16)
    expect(@ast.lines[15].input).toEqual [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 127, 127, 127]

# describe 'builder', ->
#   it 'can execute scribbletune code from ast', (done) ->
#     ast = parsing(sample)
#     code = builder(ast)

#     for i in ast.tracks.skanking
#       console.log i.comment if i.comment
#       console.log i.prop, if Array.isArray(i.input)
#         i.input.join(' ')
#       else
#         i.input

#     scribble.midi code.skanking[0]
#     exec 'timidity music.mid', done
