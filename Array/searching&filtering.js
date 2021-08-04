let myFriends = ['Andy', 'Ana', 'Amsi', 'Nancy', 'Aman', 'Amsi'];

//Array.Prototype.indexOf()
// Returns the first (least) index of an element within the array equal to an element , or -1 if none is found. It searches the element from the 0th index

let indexOf = myFriends.indexOf('Amsi');
console.log(indexOf); // 2
console.log(myFriends.indexOf('Amsi', 3)); // 5 (because it starts srearching from given index value)

console.log(myFriends.indexOf('Nanu')); //-1

//Array.Prototype.lastIndexOf()
//Returns the last (greatest) index of an elemet within the arrray equal to an element, or -1 if none is found. It searches elements last to first

console.log(myFriends.lastIndexOf('Amsi')); // 5
console.log(myFriends.lastIndexOf('Amsi', 3)); // 2
console.log(myFriends.lastIndexOf('Nanu')); // -1

// Array.prototype.includes()
// Determines whether the array contains a value,
//returning true or false as appropriate.

console.log(myFriends.includes('Nancy')); //true
console.log(myFriends.includes('Nancy', 5)); // false
console.log(myFriends.includes('Nanu')); // false

// Array.prototype.find()
//arr.find(callback(elemnt[,index[,array]])[,thisArg])
//Returns the found element in the array,
// if some element in the array satisfies the testing function, or undefined if not found.
//Only problem is that it return only one element

const prices = [200, 200, 250, 400, 450, 500, 600];

const findElem = prices.find((currVal) => {
  return currVal < 400;
});
console.log(findElem); //200

console.log(prices.find((currVal) => currVal > 1400)); //undefined

// Array.prototype.findIndex()
// Returns the found index in the array, if an element in the array satisfies the testing function, or -1 if not found.

const findElemIndex = prices.findIndex((currVal) => {
  return currVal < 400;
});
console.log(findElemIndex); //0

console.log(prices.findIndex((currVal) => currVal > 1400)); //-1

//Array.prototype.filter()
// Returns a new array containing all elements of the calling array for which the provided filtering function returns true.

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];

const result = words.filter((elem) => {
  return elem.length > 6;
});
console.log(result); // [ 'exuberant', 'destruction', 'present' ]

console.log(words.filter((elem) => elem.length > 12)); // []

// Array.prototype.sort()
// Sorts the elements of an array in place and returns the array. default sorting order is ascending
const months = ['March', 'Jan', 'Feb', 'Dec'];
const sort = months.sort();
console.log(sort); //[ 'Dec', 'Feb', 'Jan', 'March' ]

const numbers = [4, 5, 8, -22, 3, 2, -1, -33];

console.log(numbers.sort()); //[-1,-22,-33, 2, 3, 4,5, 8]

console.log(numbers.sort((a, b) => a - b)); // [-33 - 22, -1, 2, 3, 4, 5, 8];
