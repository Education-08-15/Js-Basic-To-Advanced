//Traversal in an array / Navigate through an array

let array = [1, 2, 3, 4, 5, 6];

// access all elements in an array

for (let i = 0; i < array.length; i++) {
  console.log(array[i], i);
}

// After ES6 we have for ..in and for ..of loop

// for ..in loop return index
for (let items in array) {
  console.log(items); // return index
  console.log(typeof items); // string
}

// for ..of loop returns elemnts
for (let items of array) {
  console.log(items); // returns elements
  console.log(typeof items); // number
}
console.log('---------------');
// forEach
array.forEach((elements, index, array) => {
  // console.log(elements);
  // console.log(index);
  // console.log(array);
});
