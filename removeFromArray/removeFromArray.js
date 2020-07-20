const removeFromArray = function(arr, ...args) {
  let newArr = [];
  let index;
  // console.log(args);
  
  for(let i=0; i < args.length; i++){
    index = arr.indexOf(args[i]);
    if(index > -1){
      
      arr.splice(index, 1);
    }
  }
  console.log(arr);
  return arr;
}

module.exports = removeFromArray
