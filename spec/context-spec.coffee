reducer = require('../lib/reducer')

describe 'reducer', ->
  it 'can reduce expressions', ->
    context =
      '%x': input: ['b3', ['a2', 'b2']]
      '%Am': input: [['a3', 'c4', 'e3']]
      '%Cm': input: ['c3', 'd#3', 'g3']

    input = ['c3', '%', 'd4', '%x', '%Am', '%']

    expect(reducer(input, context)).toEqual [
      'c3', 'c3', 'd4', 'b3',
      ['a2', 'b2']
      ['a3', 'c4', 'e3']
      ['a3', 'c4', 'e3']
    ]

    input = ['%Cm', '%', '%', '%']

    expect(reducer(input, context)).toEqual ['c3', 'd#3', 'g3', 'c3', 'd#3', 'g3', 'c3', 'd#3', 'g3', 'c3', 'd#3', 'g3']
