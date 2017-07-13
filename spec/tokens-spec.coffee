scribble = require('scribbletune')

tokenize = require('../lib/tokenize')

describe 'x', ->
  it 'can handle syntax errors', ->
    expect(-> tokenize()).toThrow()
    expect(-> tokenize('')).toThrow()
    expect(-> tokenize('/')).toThrow()
    expect(-> tokenize('*')).toThrow()
    expect(-> tokenize('..')).toThrow()
    expect(-> tokenize('x / 2')).toThrow()
    expect(-> tokenize('2 / x')).toThrow()
    expect(-> tokenize('im not exists')).toThrow()

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
    expect(tokenize('1 2 3 / 2')).toEqual [1, 2, 1.5]

  it 'can multiply numbers', ->
    expect(tokenize('1 * 2')).toEqual [2]
    expect(tokenize('1 2 * 3')).toEqual [1, 6]
    expect(tokenize('1 2 3 * 4')).toEqual [1, 2, 12]

  it 'should handle scribble-modes', ->
    expect(tokenize('c')).toEqual scribble.mode('c')
    expect(tokenize('c 4')).toEqual scribble.mode('c', undefined, 4)
    expect(tokenize('c major')).toEqual scribble.mode('c', 'major')
    expect(tokenize('c major 4 0..2')).toEqual scribble.mode('c', undefined, 4).slice(0, 2)

  it 'can handle ranges, slicing, duplicates, etc.', ->
    expect(tokenize('5 10..120 / 11 127x3')).toEqual [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 127, 127, 127]
