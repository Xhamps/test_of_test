import { expect } from 'chai';
import math from '../app/math';

describe('Promises', () => {
  it('resolves as promised', () => {
    return math.compareWithPromise(5, 3)
      .then((result) => { expect(result).to.be.true })
  });

  it('rejects as promised', () => {
    return math.compareWithPromise(3, 5)
      .catch((result) => expect(result).to.be.false)
  });
});
