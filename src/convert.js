const scribble = require('scribbletune');

const utils = require('./utils');
const reduce = require('./reduce');

module.exports = (ast, samples) => {
  const map = {};

  Object.keys(ast.tracks).forEach(key => {
    const context = utils.merge(ast.tracks[key].context, ast.context);
    const options = ast.tracks[key].settings;
    const props = ast.tracks[key].params;
    const clip = {};

    props.forEach(field => {
      clip[field.prop] = reduce(field.input, context);
    });

    if (Array.isArray(clip.pattern)) {
      clip.pattern = clip.pattern.join('');
    }

    let output;

    try {
      output = scribble.clip({
        samples: samples && samples[options.samples],
        synth: options.synth,
        ...clip,
      });
    } catch (e) {
      throw new Error(`Invalid clip settings, given '${JSON.stringify(output, null, 2)}'`);
    }

    if (!ast.tracks[key]) {
      throw new Error(`Expecting a valid track, given '${key}'`);
    }

    map[key] = map[key] || [];
    map[key].push({
      track: key,
      clipObj: output,
      settings: ast.tracks[key].settings,
    });
  });

  return map;
};
