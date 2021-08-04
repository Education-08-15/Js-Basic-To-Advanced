/* Math Object in JavaScript */

// The JavaScript Math object allows you to perform mathematical tasks on numbers.

console.log(Math.PI); // 3.141592653589793

// Math.round()
// returns the value of x to its nearest integer
let num = 10.52;
console.log(Math.round(num)); // 11

console.log(Math.round(10.4)); // 10

// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y

console.log(Math.pow(2, 3)); //2*2*2 = 8
console.log(Math.pow(2)); // returns NaN  when passed only one argument

// Math.sqrt()
// Math.sqrt(x) returns the square root of x
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(6)); // 2.449489742783178

// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x
console.log(Math.abs(-20)); // 20
console.log(Math.abs(-10.321)); // 10.321
console.log(Math.abs(2 - 4)); // 2

// Math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearest integer

console.log(Math.ceil(3.21)); // 4
console.log(Math.ceil(-4.23)); // -4
console.log(Math.ceil(6.2)); //7
console.log(Math.ceil(6.6)); // 7

// Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(99.1)); //99

// Math.min()
// Math.min() can be used to find the lowest value in a list of arguments

console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200

// Math.max()
// Math.max() can be used to find the highest value in a list of arguments

console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150

// Math.random()
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
console.log(Math.random()); // betn 0 to 1

console.log(Math.random() * 10); // betn 0 to 9
console.log(Math.floor(Math.random() * 10));

// Math.trunc()
// The trunc() method returns the integer part of a number

console.log(Math.trunc(4.6)); // 4
console.log(Math.trunc(-99.1)); // -99
