function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (vals) {
  return vals.reduce((a, b) => (a + b), 0);
}

function multiply (vals) {
	return vals.reduce((a, b) => (a * b), 1); // start w/ 1 bc anything * 0 == 0 
}

function power(x, n) {
	if( n === 1) {
    return x;
  } else {
    return x * power(x, n - 1);
  }
}

function factorial(a) {
  if(a === 0){
    return 1;
  } else {
    return a * factorial(a - 1);
  }
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}