import test from 'japa';

const { configure } = test;

configure({
  files: ['tests/*.test.js'],
  filter(filePath) {
    return !filePath.endsWith('tests/_setup.js')
      && !filePath.endsWith('tests/_expect.js');
  },
  experimentalEsmSupport: true,
});
