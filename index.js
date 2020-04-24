// Add your functions here
// function map(array, func){
//   return array.map(num => num*-1);
// } 

function map(array, func){
  let newArray = [];
  for (let value of array)
    newArray.push(func(value));
  }
  return newArray;
};

