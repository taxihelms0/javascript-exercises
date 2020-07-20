const palindromes = function(str) {
  // remove punctuation and save in new string
  let newString = str.replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
  // counter vars
  let downCounter = newString.length - 1;
  let upCounter = 0;
  // compare first and last letter moving towards center
  // works for odd and even lengths. for odd lengths, checks middle char against itself
  while(downCounter >= upCounter){
    if(newString[upCounter] === newString[downCounter]){
      // increment counters
      upCounter++;
      downCounter--;
    } else {
      // found a mismatch
      console.log(`${str} is NOT a palindrome!`);
      return false;
    }
    // all letters check out. Therefore str is a palindrome
    console.log(`${str} is a palindrome`);
    return true;
  }
  
}
module.exports = palindromes
