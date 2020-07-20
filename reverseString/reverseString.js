const reverseString = function(str) {
  let newStr = '';
  
  // using built in functions
  // newStr = str.split('').reverse().join('');
  
  // using for loop
  // for(let i=0; i < str.length; i++){
  //   // add the last letter to the end of the string
  //   newStr += str[str.length - 1 - i]; 
  // }

  // using recursion...
  if(str === ""){ // terminal case
    return "";
  } else {
    /* substr(1) is string without first letter, 
    str.charAt(0) is the first letter. 
    This function removes the first letter of the string and places it on the end*/
    return reverseString(str.substr(1)) + str.charAt(0);
  }

  // console.log(newStr);
  // return newStr;
}

module.exports = reverseString
