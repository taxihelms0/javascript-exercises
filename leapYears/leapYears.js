const leapYears = function(year) {
  // if year is  divisible by 4
  if (year % 4 === 0){  
    // if year is divisible by 100, but not 400
    if (year % 100 === 0 && year % 400 !== 0){ 
      return false;
    }
    return true;
  } else{
    return false;
  }
  
}

module.exports = leapYears
