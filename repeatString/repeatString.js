const repeatString = function(str, repeats) {
  let output = '';
  if (repeats < 0) {
    return 'ERROR'
  } else {
    for(let i=0; i < repeats; i++){
      output += str;
    }
    return output;
  }
  
}

module.exports = repeatString
