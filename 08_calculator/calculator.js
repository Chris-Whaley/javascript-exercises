const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(array) {
  return array.reduce((sum, current) => sum + current, 0);
	
};

const multiply = function(array) {
  return array.reduce((sum, current) => sum * current, 1);

};

const power = function(a, b) {
  return a ** b;

};

const factorial = function(a) {
  
  let allNums = [];

  // get all numbers up until factorial request (i.e., "a")
  for (let index = 1; index <= a; index++) {
    allNums.splice(index, 0, index);
    
  }
  
  let result = allNums.reduce((total, current) => total * current, 1);

  return result;
	
};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

