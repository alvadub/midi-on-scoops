const scribble = require('scribbletune');

const utils = require('./utils');
const reduce = require('./reduce');

module.exports = ast => {
  const map = {};

  Object.keys(ast.tracks).forEach(key => {
    const context = utils.merge(ast.tracks[key].context, ast.context);
    const props = ast.tracks[key].params;
    const config = {};

    props.forEach(field => {
      config[field.prop] = reduce(field.input, context);
    });

    // FIXME: stats?
    // console.log(key, config.notes.length);
    // console.log(key, config.pattern.length);

    if (Array.isArray(config.pattern)) {
      config.pattern = config.pattern.join('');
    }

    let clip;

    try {
      clip = scribble.clip(config);
    } catch (e) {
      throw new Error(`Invalid clip settings, given '${JSON.stringify(config, null, 2)}'`);
    }

    if (!ast.tracks[key]) {
      throw new Error(`Expecting a valid track, given '${key}'`);
    }

    map[key] = map[key] || [];
    map[key].push({
      track: key,
      clipObj: clip,
      settings: ast.tracks[key].settings,
    });
  });

  return map;
};
