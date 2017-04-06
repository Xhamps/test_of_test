import { expect } from 'chai';
import sinon from 'sinon';
import math from '../app/math';
import withInjectedDependencies from '../app/with-injected-dependencies';

describe('Object with injected dependencies', () => {
  it('simple method call using a naive factory', () => {
    const buildMathMock = () => ({ 
      sum (value) { this.sumValue = value; }, 
      multiply(value) { this.multiplyValue = value },
    })

    const injected = buildMathMock()
    const subject = withInjectedDependencies.initialize(injected)
    subject.asString({ multiply: 2, sum: 3 });
    expect(injected.sumValue).to.equal(3);
    expect(injected.multiplyValue).to.equal(2);
  });

  it('simple method call using stubbed oject', () => {
    const injected = {
      sum: sinon.stub(),
      multiply: sinon.stub(),
    }
    const subject = withInjectedDependencies.initialize(injected)

    subject.asString({ multiply: 2, sum: 3 });

    expect(injected.sum.calledWith(3)).to.be.true;
    expect(injected.multiply.calledWith(2)).to.be.true;
  });
});

