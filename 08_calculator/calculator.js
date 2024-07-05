const add = function(...args) {
  return args.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0)
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(args) {
	return args.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0)
};

const multiply = function(args) {
  return args.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1)
};

const power = function(base, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result = result * base;
  }
  return result;
};

const factorial = function(arg) {
  let result = 1;
	for (let i = 1; i <= arg; i++) {
    result = result * i;
  }
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
