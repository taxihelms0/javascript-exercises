/* 
  [°F] = [°C] × ​9⁄5 + 32	
  [°C] = ([°F] − 32) × ​5⁄9
*/

const roundToDecimal = function(num){
  return Math.round((num + Number.EPSILON) * 10) / 10; // why does this work
}

const ftoc = function(f) {
  return roundToDecimal((f - 32) * (5/9));
}

const ctof = function(c) {
  return roundToDecimal(c * (9/5) + 32);
}

module.exports = {
  ftoc,
  ctof
}
