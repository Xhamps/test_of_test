import math from '../../app/math';

describe('Math', () => {
  let sumMock;

  beforeEach(() => {
    sumMock = jest.spyOn(math, 'sum');
  });

  afterEach(() => {
    sumMock.mockRestore();
  });

  test('sum(3) should equals 6', () => {
    expect(math.sum(3)).toEqual(6);
  });

  test('method with private method call', () =>{
    math.multiply(2);

    expect(math.sum).toHaveBeenCalledTimes(2);
  });

  test('using the same spy in another test', () => {
    math.multiply(1);

    expect(math.sum).toHaveBeenCalledTimes(1);
  });
})
