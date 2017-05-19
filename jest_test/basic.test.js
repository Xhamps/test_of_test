import math from '../app/math';

jest.unmock('../app/math');

test('blau', () => {
  expect(math.sum(3)).toEqual(6);
});
