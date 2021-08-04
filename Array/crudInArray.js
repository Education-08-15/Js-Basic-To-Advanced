// CRUD IN ARRAY

//Array.prototype.push()
// Adds one or more elements to the end of an array, and returns the new length of the array.

const animals = ['pigs', 'goats', 'sheep'];
animals.push('Mouse');
console.log(animals); // [ 'pigs', 'goats', 'sheep', 'Mouse' ]

animals.push('Cow', 'Buffalo');
console.log(animals); // [ 'pigs', 'goats', 'sheep', 'Mouse', 'Cow', 'Buffalo' ]

// Array.prototype.unshift()
//Adds one or more elements to the front of an array, and returns the new length of the array.

animals.unshift('Dog');
console.log(animals); // ['Dog',     'pigs','goats',   'sheep','Mouse',   'Cow',  'Buffalo']

animals.unshift('Monkey', 'Mongoose');
console.log(animals);
// [ 'Monkey',  'Mongoose', 'Dog', 'pigs', 'goats',   'sheep','Mouse',   'Cow',   'Buffalo']

// Array.prototype.pop()
// Removes the last element from an array and returns that element.

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop()); // tomato

console.log(plants);
// ['broccoli', 'cauliflower', 'cabbage', 'kale'];

plants.pop();
console.log(plants); // [ 'broccoli', 'cauliflower', 'cabbage' ]

// Array.prototype.shift()
// Removes the first element from an array and returns that element.

const array1 = [1, 2, 3];

console.log(array1.shift()); // 1
console.log(array1); //[2,3]

// Array.prototype.splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements

const months = ['Jan', 'March', 'April', 'June'];

// add element at the end of the array using splice method
const add = months.splice(months.length, 0, 'Dec');
console.log(months); // [ 'Jan', 'March', 'April', 'June', 'Dec' ]

const weeks = ['Sun', 'Mon', 'Tues', 'Wes'];
//remove element at the given certain index
const remove = weeks.splice(2, 2); //removes 2 element starting from index 2
console.log(weeks); // [ 'Sun', 'Mon' ]

let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
// remove elements at certain index and insert an element

let removeAndUpdate = myFish.splice(3, 1, 'trumpet', 'ghogi');
console.log(myFish); // [ 'angel', 'clown', 'drum', 'trumpet', 'ghogi', 'sturgeon' ]

// remove thirdlast element
let num = [1, 2, 4, 5, 6, 4, 56, 3];
let removeThirdLast = num.splice(-3, 1);
console.log(removeThirdLast); // [4]
console.log(num); // [ 1,  2, 4, 5, 6, 56, 3]

// remove all element from certain index
let name = ['nanu', 'nancy', 'abhi', 'yug'];
let removedNames = name.splice(1);
console.log(removedNames); // [ 'nancy', 'abhi', 'yug' ]
console.log(name); //[ 'nanu' ]
