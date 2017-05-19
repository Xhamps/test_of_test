import test from 'ava';
import sinon from 'sinon';

import withDependencies from '../app/with-dependencies';

test('Object with dependencies simple method call', t => {
	const math = {
	  sum: sinon.stub(),
	  multiply: sinon.stub(),
	}

	withDependencies.__Rewire__({ math })

  withDependencies.asString({ multiply: 2, sum: 3 })

	t.truthy(math.sum.calledWith(3))
	t.truthy(math.multiply.calledWith(2))

  withDependencies.__ResetDependency__('math')
})
