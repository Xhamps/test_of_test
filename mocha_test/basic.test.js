import { expect } from 'chai';
import sinon from 'sinon';
import math from '../app/math';

describe('Object with no dependencies', () => {
  before(() => {
    sinon.spy(math, 'sum');
  });
  
  afterEach(() => {
    math.sum.reset();
  });
  
  it('simple method call', () => {
    expect(math.sum(3)).to.equal(6);
  });

  it('method with private method call', () =>{
    expect(math.multiply(2)).to.equal(6);
    expect(math.sum.callCount).to.equal(2);
  });

  it('using the same spy in another test', () => {
    expect(math.multiply(1)).to.equal(2);
    expect(math.sum.callCount).to.equal(1);
  });
});
