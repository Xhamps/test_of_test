import test from 'ava';
import sinon from 'sinon';

import math from '../app/math';

const after = () => {
	math.sum.reset();
}

sinon.spy(math, 'sum');

test('Object with no dependencies simple method call', t => {
	t.is(math.sum(3), 6)
	after()
})

test('Object with no dependencies method with private method call', t => {
	t.is(math.multiply(2), 6)
	t.is(math.sum.callCount, 2)
	after()
})

test('Object with no dependencies using the same spy in another test', t => {
	t.is(math.multiply(1), 2)
	t.is(math.sum.callCount, 1)
	after()
})
