const sumAll = function(min, max) {
  if (min < 0 || max < 0 || typeof min !== "number" || typeof max !== "number")
    return 'ERROR'; 
  // set lower and upper values based on which is larger
  if(min > max){
    const temp = min;
    min = max;
    max = temp;
  } 
  let sum = 0;
  // if sum is negative throw error or either number is an array or string
  while (min <= max) {
    // add min + 1 to the sum
    sum += min; 
    min++;
  }
  return sum
}

module.exports = sumAll
