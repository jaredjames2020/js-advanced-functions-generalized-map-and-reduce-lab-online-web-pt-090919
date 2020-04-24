// Add your functions here
// function map(array, func){
//   return array.map(num => num*-1);
// } 

function map(array, func){
  func(array){
    return array.map(num => num*-1)
  }
  return (func(array), `${array}`);
  
}