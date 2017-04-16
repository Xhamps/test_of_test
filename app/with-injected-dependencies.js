const injectedDependencies =  {
	initialize (math) {
		this.math = math;
		return this;
	},

  asString ({ multiply, sum }) {
  	return `mult: ${this.math.multiply(multiply)}\n sum: ${this.math.sum(sum)}`;
  },
};

export default injectedDependencies;  
