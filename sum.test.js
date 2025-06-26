const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to not equal 4', () => {
  expect(sum(1, 2)).not.toBe(4);
});

test('failing test example', () => {
  expect(sum(1, 1)).toBe(3); // This will fail
});
