import { expect } from 'chai';
import math from '../app/math';
import sinon from 'sinon';

describe.only('With delay', () => {
  it('identifies the correct callback call with stub', (done) => {
  	const callback = sinon.stub();
    math.compareWithDelay(5, 3, callback);

    setTimeout(() => {
    	expect(callback.calledWith(true)).to.be.true;
    	done();
    }, 1500)
  });

  it('identifies the correct callback call directly in the callback', (done) => {
  	const callback = (val) => {
    	expect(val).to.be.true;
    	done();
  	};

    math.compareWithDelay(5, 3, callback);
  });
});
