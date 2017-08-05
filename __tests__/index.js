/* eslint-disable */
const compose = require('../src/index');

test('see for composition of two functions', () => {
  expect(compose(a => a * 2, b => b + 2)(4)).toBe(10)
});
