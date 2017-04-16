import math from './math';

const withDependencies = {
  asString ({ multiply, sum }) {
  	return `mult: ${math.multiply(multiply)}\n sum: ${math.sum(sum)}`;
  },
};

export default withDependencies;  
