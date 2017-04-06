import { expect } from 'chai';
import sinon from 'sinon';
import Math from '../app/math';

describe('Test Math', () => {
  beforeEach(() => {
    sinon.spy(Math, 'some');
  });
  
  afterEach(() => {
    Math.some.restore();
  });
  
  it('test some', () => {
    expect(Math.some(3)).to.equal(6);
  });

  it('test multiply', () =>{
    expect(Math.multiply(2)).to.equal(6);
    expect(Math.some.callCount).to.equal(2);
  });

  it('validate if clear spy', () => {
    expect(Math.multiply(1)).to.equal(2);
    expect(Math.some.callCount).to.equal(1);
  });
});

