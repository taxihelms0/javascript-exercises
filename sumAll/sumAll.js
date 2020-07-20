const sumAll = function(firstNum, secondNum) {
  let upperNum;
  let lowerNum;
  let total = -1; // initialize total to negative to throw error as default
  
  // set lower and upper values based on which is larger
  if(firstNum > secondNum){
    lowerNum = secondNum;
    upperNum = firstNum;
    total = lowerNum; // start total at lower number
  } else if (secondNum > firstNum){
    lowerNum = firstNum;
    upperNum = secondNum;
    total = lowerNum; // start total at lower number
  } 
  // if total is negative throw error or either number is an array or string
  if (total < 0 || firstNum.length > 1 || secondNum.length > 1) {
    return 'ERROR';
  }
  else {
    while (lowerNum < upperNum) {
      // add lowerNumer + 1 to the total
      total += lowerNum + 1; 
      lowerNum++;
    }
    return total
  }
  
  
}

module.exports = sumAll
