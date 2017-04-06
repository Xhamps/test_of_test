import withDependencies from '../app/with-injected-dependencies';
import { expect } from 'chai';
import sinon from 'sinon';

describe('Object with dependencies', () => {
  it('simple method call', () => {
		const math = {
		  sum: sinon.stub(),
		  multiply: sinon.stub(),
		}
		withDependencies.__Rewire__({ math })

    withDependencies.asString({ multiply: 2, sum: 3 });

		console.log(withDependencies)

    expect(math.sum.calledWith(3)).to.be.true;
    expect(math.multiply.calledWith(2)).to.be.true;
		withDependencies.__ResetDependency__('math')
  });
});

