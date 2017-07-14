reducer = require('../lib/reducer')

describe 'reducer', ->
  it 'can reduce expressions', ->
    context =
      '%x':
        input: ['b3', ['a2', 'b2']]

    input = ['c3', '%', 'd4', '%x']

    expect(reducer(input, context)).toEqual ['c3', 'c3', 'd4', 'b3', ['a2', 'b2']]
