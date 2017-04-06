import math from './math';

const withDependencies =  {
  asString ({ multiply, sum }) {
  	return `mult: ${this.math.multiply(multiply)}\n sum: ${this.math.sum(sum)}`;
  },
};

module.exports = withDependencies;  
