import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { configure } = require('japa');

configure({
  files: ['tests/*.test.js'],
  filter(filePath) {
    return !filePath.endsWith('tests/_setup.js')
      && !filePath.endsWith('tests/_expect.js');
  },
  experimentalEsmSupport: true,
});
