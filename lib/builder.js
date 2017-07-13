const scribble = require('scribbletune');

// FIXME: apply options
module.exports = (ast, options) => {
  const map = {};

  Object.keys(ast.tracks).forEach(key => {
    const props = ast.tracks[key];
    const config = {};

    props.forEach(field => {
      config[field.prop] = field.input;
    });

    const clip = scribble.clip(config);

    map[key] = map[key] || [];
    map[key].push(clip);
  });

  return map;
};
