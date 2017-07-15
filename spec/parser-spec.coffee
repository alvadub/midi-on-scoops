parsing = require('../lib/parsing')

sample = '''

  ; this line is a comment, it can appear anywhere on a single line
  @tempo: 120 ; here you can set the tempo for the song

  ; blank lines are ignored, global variables can be placed here, before any track

  ; here we are storing a pattern 4/4 pattern timeline
  %1: x---x---x---x--- x---x---x---x--- x---x---x---x--- x---x---x---x---

  ; also we can store other variables (`%` is used for repetition)
  %a: %1 % % %

  ; tracks starts with `#`
  # title

  ; you can set the instrument for this track
  @instrument: 1 ; use 0-index based values,
  ; see: http://www.ccarh.org/courses/253/handout/gminstruments/

  ; you can set the volume for this track
  @level: 90

  ; store local variables (also global variables are available here)
  %x: c3 *16 ; this will duplicate `c3` 16th times
  %y: Cmin3 ; chords are supported as-is, they also support
  ; `spread...` and `unfold..` operations from modes and chords
  ; spread will expand and merge its values on the final expression
  ; unfold will expand and keep open for slicing, once done its merged too

  ; assign notes for this track
  notes: %x
  pattern: %a

  ; you can mute/solo tracks by adding `@skip` and `@only` tags on any track

'''

describe 'parser', ->
  it 'can handle the syntax described', ->
    @ast = parsing(sample)
    #console.log JSON.stringify(@ast, null, 2)
