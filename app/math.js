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
  },

  compareWithPromise (a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (a > b) {
          resolve(true);
        } else {
          reject(false);
        }
      }, 1000);
    })
  },

  compareWithDelay (a, b, callback) {
    setTimeout(() => {
      if (a > b) {
        callback(true);
      } else {
        callback(false);
      }
    }, 1000);
  },
};

export default math;
