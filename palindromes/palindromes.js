const palindromes = function(str) {
  // remove punctuation, make lowercase and save in new string
  const processedString = str
    .toLowerCase()
    .replace(/[ .,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  
  return processedString === processedString.split('').reverse().join('');
  // return processedString === processedString
  //   .split('') 
  //   .reverse()
  //   .join();
}
module.exports = palindromes
