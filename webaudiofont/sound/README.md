Place optional WebAudioFont preset files here for offline/local fallback.

Expected naming matches the WebAudioFont loader output, for example:

- `0480_Chaos_sf2_file.js`
- `0330_Aspirin_sf2_file.js`
- `12835_0_Chaos_sf2_file.js`

Runtime load order in the player:

1. default remote URL from WebAudioFont metadata
2. `/webaudiofont/sound/<preset-file>.js` (this folder)
3. synth fallback (oscillator/noise voice)
