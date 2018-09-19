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
    expect(-> tokenize('ERR ..')).toThrow()
    expect(-> tokenize('CM ... / 2')).toThrow()
    expect(-> tokenize('Dm7 ... * 2')).toThrow()
    expect(-> tokenize('1 / 2 / 3 / 4 / 5')).toThrow()
    expect(-> tokenize('1 * 2 * 3 * 4 * 5')).toThrow()

  it 'can build an ast from input', ->
    expect(tokenize('x')).toEqual [
      {type: 'pattern', value: 'x'}
    ]
    expect(tokenize('x *2')).toEqual [
      {type: 'pattern', value: 'x'}
      {type: 'multiply', value: 2}
    ]
    expect(tokenize('x /2')).toEqual [
      {type: 'pattern', value: 'x'}
      {type: 'divide', value: 2}
    ]
    expect(tokenize('0..10')).toEqual [
      {type: 'range', value: [0, 10]}
    ]
    expect(tokenize('0..10 *2')).toEqual [
      {type: 'range', value: [0, 10]}
      {type: 'multiply', value: 2}
    ]
    expect(tokenize('0..10 /2')).toEqual [
      {type: 'range', value: [0, 10]}
      {type: 'divide', value: 2}
    ]
    # FIXME: range -> slice
    expect(tokenize('0..10 0..2')).toEqual [
      {type: 'range', value: [0, 10]}
      {type: 'range', value: [0, 2]}
    ]
    expect(tokenize('0..10 *3 /2')).toEqual [
      {type: 'range', value: [0, 10]}
      {type: 'multiply', value: 3}
      {type: 'divide', value: 2}
    ]
    expect(tokenize('0..10 /2 0..1')).toEqual [
      {type: 'range', value: [0, 10]}
      {type: 'divide', value: 2}
      {type: 'slice', value: [0, 1]}
    ]
    expect(tokenize('0..10 0..2 /2 *2 0..3')).toEqual [
      {type: 'range', value: [0, 10]}
      {type: 'range', value: [0, 2]}
      {type: 'divide', value: 2}
      {type: 'multiply', value: 2}
      {type: 'slice', value: [0, 3]}
    ]

  it 'should handle regular notes', ->
    expect(tokenize('c3 c3 c3 c4 f3 f3 f3 f4')).toEqual [
      {type: 'note', value: 'c3'}
      {type: 'note', value: 'c3'}
      {type: 'note', value: 'c3'}
      {type: 'note', value: 'c4'}
      {type: 'note', value: 'f3'}
      {type: 'note', value: 'f3'}
      {type: 'note', value: 'f3'}
      {type: 'note', value: 'f4'}
    ]

  it 'should handle scribble-modes', ->
    expect(tokenize('c d e')).toEqual [
      {type: 'mode', value: 'c'}
      {type: 'mode', value: 'd'}
      {type: 'mode', value: 'e'}
    ]
    expect(tokenize('c 4')).toEqual [
      {type: 'mode', value: 'c 4'}
    ]
    expect(tokenize('c major')).toEqual [
      {type: 'mode', value: 'c major'}
    ]
    expect(tokenize('c major 4 0..2')).toEqual [
      {type: 'mode', value: 'c major 4'}
      {type: 'slice', value: [0, 2]}
    ]
    expect(tokenize('c minor 3 0..2 f')).toEqual [
      {type: 'mode', value: 'c minor 3'}
      {type: 'slice', value: [0, 2]}
      {type: 'mode', value: 'f'}
    ]
    expect(tokenize('c minor 3 0..2 f 3')).toEqual [
      {type: 'mode', value: 'c minor 3'}
      {type: 'slice', value: [0, 2]}
      {type: 'mode', value: 'f 3'}
    ]
    expect(tokenize('c minor 3 0..2 f minor')).toEqual [
      {type: 'mode', value: 'c minor 3'}
      {type: 'slice', value: [0, 2]}
      {type: 'mode', value: 'f minor'}
    ]
    expect(tokenize('c minor 3 0..2 f minor 3')).toEqual [
      {type: 'mode', value: 'c minor 3'}
      {type: 'slice', value: [0, 2]}
      {type: 'mode', value: 'f minor 3'}
    ]
    expect(tokenize('c minor 3 0..2 f minor 3 0..2')).toEqual [
      {type: 'mode', value: 'c minor 3'}
      {type: 'slice', value: [0, 2]}
      {type: 'mode', value: 'f minor 3'}
      {type: 'slice', value: [0, 2]}
    ]

  it 'can multiple regular notes', ->
    expect(tokenize('c4 *2')).toEqual [
      {type: 'note', value: 'c4'}
      {type: 'multiply', value: 2}
    ]
    expect(tokenize('c4 *2 d3 *3')).toEqual [
      {type: 'note', value: 'c4'}
      {type: 'multiply', value: 2}
      {type: 'note', value: 'd3'}
      {type: 'multiply', value: 3}
    ]
    expect(tokenize('c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4 c4').length).toEqual 16

  it 'should handle scribble-chords', ->
    expect(tokenize('CM')).toEqual [
      {type: 'chord', value: scribble.chord('CM')}
    ]
    expect(tokenize('CM FMaj')).toEqual [
      {type: 'chord', value: scribble.chord('CM')}
      {type: 'chord', value: scribble.chord('FMaj')}
    ]
    expect(tokenize('CM FMaj GMaj')).toEqual [
      {type: 'chord', value: scribble.chord('CM')}
      {type: 'chord', value: scribble.chord('FMaj')}
      {type: 'chord', value: scribble.chord('GMaj')}
    ]
    expect(tokenize('CM FMaj GMaj CM')).toEqual [
      {type: 'chord', value: scribble.chord('CM')}
      {type: 'chord', value: scribble.chord('FMaj')}
      {type: 'chord', value: scribble.chord('GMaj')}
      {type: 'chord', value: scribble.chord('CM')}
    ]

  it 'should handle unpacked-chords', ->
    expect(tokenize('a3|c4|e4')).toEqual [
      {type: 'chord', value: ['a3', 'c4', 'e4']}
    ]

  it 'should handle scribble-scales', ->
    expect(tokenize('C2 phrygian.. ^ /2')).toEqual [
      {type: 'scale', value: scribble.scale('C2 phrygian'), unfold: true}
      {type: 'divide', value: 2}
    ]

  it 'should handle scribble-progressions', ->
    expect(tokenize('D4 minor... + I IV V ii 0..2')).toEqual [
      {type: 'progression', value: 'DM-4 GM-4 AM-4 Em-4', spread: true}
      {type: 'slice', value: [0, 2]}
    ]

  it 'can unfold/spread notes by chord-names', ->
    expect(tokenize('Dm7...')).toEqual [
      {type: 'chord', value: scribble.chord('Dm7'), spread: true}
    ]
    expect(tokenize('Dm7.. 0..2')).toEqual [
      {type: 'chord', value: scribble.chord('Dm7'), unfold: true}
      {type: 'slice', value: [0, 2]}
    ]
    expect(tokenize('Dm7 GMaj7 Bb')).toEqual [
      {type: 'chord', value: scribble.chord('Dm7')}
      {type: 'chord', value: scribble.chord('GMaj7')}
      {type: 'note', value: 'Bb'}
    ]
    expect(tokenize('Dm7... GMaj7 Bb')).toEqual [
      {type: 'chord', value: scribble.chord('Dm7'), spread: true}
      {type: 'chord', value: scribble.chord('GMaj7')}
      {type: 'note', value: 'Bb'}
    ]
    expect(tokenize('Dm7... GMaj7.. Bmajb')).toEqual [
      {type: 'chord', value: scribble.chord('Dm7'), spread: true}
      {type: 'chord', value: scribble.chord('GMaj7'), unfold: true}
      {type: 'chord', value: scribble.chord('Bmajb')}
    ]
    expect(tokenize('Dm7... GMaj7... Bmajb..')).toEqual [
      {type: 'chord', value: scribble.chord('Dm7'), spread: true}
      {type: 'chord', value: scribble.chord('GMaj7'), spread: true}
      {type: 'chord', value: scribble.chord('Bmajb'), unfold: true}
    ]
    expect(tokenize('Dm7... 0..2')).toEqual [
      {type: 'chord', value: scribble.chord('Dm7'), spread: true}
      {type: 'range', value: [0, 2]}
    ]
    expect(tokenize('Dm7.. 0..2')).toEqual [
      {type: 'chord', value: scribble.chord('Dm7'), unfold: true}
      {type: 'slice', value: [0, 2]}
    ]

  it 'can expands, divide and duplicate regular chords', ->
    expect(tokenize('Cmin4 *2 Fmin3 *2')).toEqual [
      {type: 'chord', value: scribble.chord('Cmin4')}
      {type: 'multiply', value: 2}
      {type: 'chord', value: scribble.chord('Fmin3')}
      {type: 'multiply', value: 2}
    ]
    expect(tokenize('Cmin4 /2 Fmin3 *2')).toEqual [
      {type: 'chord', value: scribble.chord('Cmin4')}
      {type: 'divide', value: 2}
      {type: 'chord', value: scribble.chord('Fmin3')}
      {type: 'multiply', value: 2}
    ]
    expect(tokenize('Cmin4 *2 Fmin3 /2')).toEqual [
      {type: 'chord', value: scribble.chord('Cmin4')}
      {type: 'multiply', value: 2}
      {type: 'chord', value: scribble.chord('Fmin3')}
      {type: 'divide', value: 2}
    ]

  it 'can slice and duplicate unfolded chords', ->
    expect(tokenize('CM... 0..2')).toEqual [
      {type: 'chord', value: scribble.chord('CM'), spread: true}
      {type: 'range', value: [0, 2]}
    ]
    expect(tokenize('CM... *2 Dm7.. 0..7')).toEqual [
      {type: 'chord', value: scribble.chord('CM'), spread: true}
      {type: 'multiply', value: 2}
      {type: 'chord', value: scribble.chord('Dm7'), unfold: true}
      {type: 'slice', value: [0, 7]}
    ]
    expect(tokenize('CM.. CM.. *5 0..5')).toEqual [
      {type: 'chord', value: scribble.chord('CM'), unfold: true}
      {type: 'chord', value: scribble.chord('CM'), unfold: true}
      {type: 'multiply', value: 5}
      {type: 'range', value: [0, 5]}
    ]

  it 'can handle ranges, slicing, duplicates, etc.', ->
    expect(tokenize('5 10..120 /11 127x3')).toEqual [
      {type: 'number', value: 5}
      {type: 'range', value: [10, 120]}
      {type: 'divide', value: 11}
      {type: 'number', value: 127, repeat: 3}
    ]
    expect(tokenize('c3 *6 a#2 a#2 c3 *6 d#3 d#3 d#3')).toEqual [
      {type: 'note', value: 'c3'}
      {type: 'multiply', value: 6}
      {type: 'note', value: 'a#2'}
      {type: 'note', value: 'a#2'}
      {type: 'note', value: 'c3'}
      {type: 'multiply', value: 6}
      {type: 'note', value: 'd#3'}
      {type: 'note', value: 'd#3'}
      {type: 'note', value: 'd#3'}
    ]

  it 'will return placeholders as-is on tokenization', ->
    expect(tokenize('g3 *7 f2 %')).toEqual [
      {type: 'note', value: 'g3'}
      {type: 'multiply', value: 7}
      {type: 'note', value: 'f2', repeat: 2}
    ]
    expect(tokenize('%Am % % %')).toEqual [
      {type: 'param', value: '%Am', repeat: 4}
    ]
