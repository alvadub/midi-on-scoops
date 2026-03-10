import { createRequire } from 'module';
import { expect } from './_expect.js';

const require = createRequire(import.meta.url);
const test = require('japa');

globalThis.expect = expect;
globalThis.describe = (title, callback) => {
  return test.group(title, callback);
};
globalThis.it = (title, callback) => {
  return test(title, callback);
};
globalThis.it.skip = (title, callback) => {
  return test.skip(title, callback);
};
