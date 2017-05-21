import test from 'ava';
import sinon from 'sinon';

import math from '../app/math';
import withInjectedDependencies from '../app/with-injected-dependencies';

test('Object with injected dependencies simple method call using a naive factory', t => {
  const buildMathMock = () => ({
    sum (value) { this.sumValue = value; },
    multiply(value) { this.multiplyValue = value },
  })

  const injected = buildMathMock()
  const subject = withInjectedDependencies.initialize(injected)
  subject.asString({ multiply: 2, sum: 3 });

	t.is(injected.sumValue, 3)
	t.is(injected.multiplyValue, 2)
})

test('Object with injected dependencies simple method call using stubbed oject', t => {
  const injected = {
    sum: sinon.stub(),
    multiply: sinon.stub(),
  }
  const subject = withInjectedDependencies.initialize(injected)

  subject.asString({ multiply: 2, sum: 3 });

	t.truthy(injected.sum.calledWith(3))
	t.truthy(injected.multiply.calledWith(2))
})
