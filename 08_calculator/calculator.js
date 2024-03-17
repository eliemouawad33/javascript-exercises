const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
    return num1 - num2;
};

const sum = function(array) {
	for (i in array) {
        sum += array[i];
    }
    return sum;
};

const multiply = function(num1, num2) {
    return num1 * num2;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num1) {
	return Math.factorial(num1);
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
