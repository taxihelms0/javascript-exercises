
const fibonacci = function(num) {
  if (num == 0){
      return 0;
  }
  if (num == 1) {
    return 1;
  }  
  if(num >= 0) {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  return 'OOPS';
}

module.exports = fibonacci
