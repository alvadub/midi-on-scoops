import assert from 'assert/strict';

function includes(haystack, needle) {
  if (typeof haystack === 'string') return haystack.includes(needle);
  if (Array.isArray(haystack)) return haystack.includes(needle);
  if (haystack && typeof haystack === 'object') return Object.values(haystack).includes(needle);
  return false;
}

function makeMatcher(actual, negate = false) {
  const run = (ok, message) => {
    if (negate ? ok : !ok) {
      throw new assert.AssertionError({
        message: message || `Expectation failed for value: ${String(actual)}`,
      });
    }
  };

  const api = {
    equal(expected) {
      if (negate) assert.notStrictEqual(actual, expected);
      else assert.strictEqual(actual, expected);
    },
    eql(expected) {
      if (negate) assert.notDeepStrictEqual(actual, expected);
      else assert.deepStrictEqual(actual, expected);
    },
    match(pattern) {
      const value = String(actual);
      const ok = pattern instanceof RegExp
        ? pattern.test(value)
        : value.includes(String(pattern));
      run(ok, `Expected ${value} to ${negate ? 'not ' : ''}match ${String(pattern)}`);
    },
    include(value) {
      const ok = includes(actual, value);
      run(ok, `Expected value to ${negate ? 'not ' : ''}include ${String(value)}`);
    },
    throw(expectedMessage) {
      const fn = actual;
      if (typeof fn !== 'function') {
        throw new TypeError('expect(...).to.throw expects a function');
      }
      if (negate) {
        assert.doesNotThrow(fn);
        return;
      }
      if (!expectedMessage) {
        assert.throws(fn);
        return;
      }
      const matcher = expectedMessage instanceof RegExp
        ? expectedMessage
        : new RegExp(String(expectedMessage).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
      assert.throws(fn, matcher);
    },
    get deep() {
      return {
        equal: api.eql,
      };
    },
    get have() {
      return {
        lengthOf(size) {
          assert.strictEqual(actual.length, size);
        },
        length(size) {
          assert.strictEqual(actual.length, size);
        },
      };
    },
    get be() {
      return {
        get true() {
          assert.strictEqual(actual, true);
          return true;
        },
        get false() {
          assert.strictEqual(actual, false);
          return false;
        },
      };
    },
  };

  return api;
}

export function expect(actual) {
  return {
    to: {
      ...makeMatcher(actual, false),
      not: makeMatcher(actual, true),
    },
  };
}
