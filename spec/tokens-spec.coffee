scribble = require('scribbletune')

tokenize = require('../lib/tokenize')

describe 'tokenizer', ->
  it 'can handle syntax errors', ->
    expect(-> tokenize()).toThrow()
    expect(-> tokenize('')).toThrow()
    expect(-> tokenize('/')).toThrow()
    expect(-> tokenize('*')).toThrow()
    expect(-> tokenize('..')).toThrow()
    expect(-> tokenize('x / 2')).toThrow()
    expect(-> tokenize('2 / x')).toThrow()
    expect(-> tokenize('1 2 * x')).toThrow()
    expect(-> tokenize('ERR ...')).toThrow()
    expect(-> tokenize('CMaj..')).toThrow()
    expect(-> tokenize('CMaj...')).toThrow()
    expect(-> tokenize('CMaj ... / 2')).toThrow()
    expect(-> tokenize('im not exists')).toThrow()
    expect(-> tokenize('1 / 2 / 3 / 4 / 5')).toThrow()
    expect(-> tokenize('1 * 2 * 3 * 4 * 5')).toThrow()

  it 'can repeat tokens', ->
    expect(tokenize('x*3')).toEqual ['x', 'x', 'x']
    expect(tokenize('x* 3')).toEqual ['x', 'x', 'x']
    expect(tokenize('x *3')).toEqual ['x', 'x', 'x']
    expect(tokenize('x * 3')).toEqual ['x', 'x', 'x']

  it 'should tokenize strings', ->
    expect(tokenize('x_-')).toEqual ['x', '_', '-']
    expect(tokenize('x_ -')).toEqual ['x', '_', '-']
    expect(tokenize('x _-')).toEqual ['x', '_', '-']
    expect(tokenize('x _ -')).toEqual ['x', '_', '-']

  it 'can repeat sub-strings', ->
    expect(tokenize('x_- * 2')).toEqual ['x', '_', '-', 'x', '_', '-']
    expect(tokenize('x_ - * 2')).toEqual ['x', '_', '-', '-']
    expect(tokenize('x _- * 2')).toEqual ['x', '_', '-', '_', '-']
    expect(tokenize('x _ - * 2')).toEqual ['x', '_', '-', '-']

  it 'can divide numbers', ->
    expect(tokenize('1')).toEqual [1]
    expect(tokenize('1 / 2')).toEqual [0.5]
    expect(tokenize('1 2 / 3')).toEqual [1, 2 / 3]
    expect(tokenize('1 2 3 / 4')).toEqual [1, 2, 3 / 4]
    expect(tokenize('1 / 2 3 4 / 5')).toEqual [1 / 2, 3, 4 / 5]

  it 'can multiply numbers', ->
    expect(tokenize('1 * 2')).toEqual [2]
    expect(tokenize('1 2 * 3')).toEqual [1, 6]
    expect(tokenize('1 2 3 * 4')).toEqual [1, 2, 12]
    expect(tokenize('1 * 2 3 4 * 5')).toEqual [2, 3, 20]

  it 'can handle number-ranges', ->
    expect(tokenize('1..3')).toEqual [1, 2, 3]
    expect(tokenize('1 2..3')).toEqual [1, 2, 3]
    expect(tokenize('1 2..3 4')).toEqual [1, 2, 3, 4]
    expect(tokenize('1 2..3 4..5')).toEqual [1, 2, 3, 4, 5]
    expect(tokenize('1 2..3 4..5 6')).toEqual [1, 2, 3, 4, 5, 6]
    expect(tokenize('1..2 3..4 5..6')).toEqual [1, 2, 3, 4, 5, 6]

  it 'should handle scribble-modes', ->
    expect(tokenize('c')).toEqual scribble.mode('c')
    expect(tokenize('c 4')).toEqual scribble.mode('c', undefined, 4)
    expect(tokenize('c major')).toEqual scribble.mode('c', 'major')
    expect(tokenize('c major 4 0..2')).toEqual scribble.mode('c', undefined, 4).slice(0, 2)

  it 'should handle scribble-chords', ->
    expect(tokenize('CMaj')).toEqual ['CMaj']
    expect(tokenize('CMaj FMaj')).toEqual ['CMaj', 'FMaj']
    expect(tokenize('CMaj FMaj GMaj')).toEqual ['CMaj', 'FMaj', 'GMaj']
    expect(tokenize('CMaj FMaj GMaj CMaj')).toEqual ['CMaj', 'FMaj', 'GMaj', 'CMaj']

  it 'should handle unpacked-chords', ->
    expect(tokenize('a3,c4,e4')).toEqual [['a3', 'c4', 'e4']]
    expect(tokenize('a3|c4|e4')).toEqual [['a3', 'c4', 'e4']]
    expect(tokenize('a3+c4+e4')).toEqual [['a3', 'c4', 'e4']]

  it 'can unfold notes by chord-names', ->
    expect(tokenize('Dmin7 ..')).toEqual [['d4', 'f4', 'a4', 'c5']]
    expect(tokenize('Dmin7 .. 0..2')).toEqual [['d4', 'f4']]
    expect(tokenize('Dmin7 GMaj7 Bb')).toEqual ['Dmin7', 'GMaj7', 'Bb']
    expect(tokenize('Dmin7 ... GMaj7 Bb')).toEqual scribble.chord('Dmin7').concat('GMaj7', 'Bb')
    expect(tokenize('Dmin7 ... GMaj7 ... Bmajb')).toEqual scribble.chord('Dmin7').concat(scribble.chord('GMaj7')).concat('Bmajb')
    expect(tokenize('Dmin7 ... GMaj7 ... Bmajb ...')).toEqual scribble.chord('Dmin7').concat(scribble.chord('GMaj7')).concat(scribble.chord('Bmajb'))

  it 'can slice and duplicate unfolded chords', ->
    expect(tokenize('CMaj ... 0..2')).toEqual scribble.chord('CMaj').slice(0, 2)
    expect(tokenize('CMaj ... * 2 Dmin7 ... 0..7')).toEqual scribble.chord('CMaj').concat(scribble.chord('CMaj')).concat(scribble.chord('Dmin7').slice(0, 1))

  it 'can handle ranges, slicing, duplicates, etc.', ->
    expect(tokenize('5 10..120 / 11 127x3')).toEqual [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 127, 127, 127]
