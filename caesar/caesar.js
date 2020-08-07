const caesar = function(str, shift) {
  let newStrArray = [];
  shift = shift % 26;
  // const strArray = str.split('');
  for(let i=0; i < str.length; i++) {
    const char = str.charAt(i);
    // ascii letter range 'A' 65 -> 'Z' 90 && 'a' 97 -> 'z' 122
    if(char.match(/^[A-Za-z]+$/)){ // if char is a letter
      newStrArray[i] = char.charCodeAt(0) + shift; // apply shift
      // constrain to alphabet if it's above 'z' or 'Z'
      if ((char.match(/^[a-z]+$/) && newStrArray[i] > 122) || (char.match(/^[A-Z]+$/) && newStrArray[i] > 90)) {
        newStrArray[i] -= 26;
      }
      // constrain to alphabet if it's below 'a' or 'A'
      else if ((char.match(/^[a-z]+$/) && newStrArray[i] < 97) || (char.match(/^[A-Z]+$/) && newStrArray[i] < 65)){
        newStrArray[i] += 26;
      }
      // convert code back to char
      newStrArray[i] = String.fromCharCode(newStrArray[i]);
    } else { // char is punctuation
      newStrArray[i] = char;
    }
  }
  // join chars in array to form string
  return newStrArray.join('')
}

module.exports = caesar
