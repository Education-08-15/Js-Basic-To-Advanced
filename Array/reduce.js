// Array.prototype.reduce()
// Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
// Takes four arguments  (accumulator,currentValue,Index,Array)

let arr = [5, 6, 2];
let sum = arr.reduce((acc, elem, index, arr) => {
  debugger;
  return (acc = acc + elem);
}, 10);
console.log(sum); //23

let Array = [[1], 2, 3, [4, 5], [4, 5], 5];
let flatReduce = Array.reduce((accumulator, currVal) =>
  accumulator.concat(currVal),
);
console.log(flatReduce); // [1, 2, 3,4, 5, 4, 5, 5]

let flatMap = Array.flatMap((elem) => {
  return elem;
});
console.log(flatMap); // [1, 2, 3,4, 5, 4, 5, 5]
