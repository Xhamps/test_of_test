const math =  {
  sum (value = 1) {
    return value + value
  },
  multiply (count){
    let result = 0;

    for(let i = 1 ; i < count + 1; i++){
      result += this.sum(i);
    }

    return result;
  }
};

module.exports = math;  
