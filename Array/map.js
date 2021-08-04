// Array.prototype.map()
// Returns a new array containing the results of calling a function on every element in this array.
// arr.map(cb(element,index,array)=> {},thisArg)
// returns a new array without mutating the original array
//we can chain other methods such as sort,filter,reduce etc in map method

const values = [1, 2, 3, 4, 5];

let greaterThanTwo = values.map((element, index, array) => {
  return element > 2;
});
console.log(greaterThanTwo); //[ false, false, true, true, true ]

let greaterThan2 = values
  .map((element) => element)
  .filter((element) => element > 2);
console.log(greaterThan2); //[ 3, 4, 5 ]

let sqRoot = values.map((element, index, array) => {
  return element ** 2;
});
console.log(sqRoot); // [ 1, 4, 9, 16, 25 ]
