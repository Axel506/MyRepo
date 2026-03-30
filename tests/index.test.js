'use strict';

const { greet } = require('../src/index');

describe('greet', () => {
  test('returns a generic greeting when no name is provided', () => {
    expect(greet()).toBe('Hello, World!');
  });

  test('returns a personalized greeting when a name is provided', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  test('handles empty string as no name', () => {
    expect(greet('')).toBe('Hello, World!');
  });
});
