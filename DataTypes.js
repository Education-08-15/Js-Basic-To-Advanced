/* ****Data Types *** */

let myName = 'Shikshya Gautam';
console.log(typeof myName); // string

let myAge = 24;
console.log(typeof myAge); // number

let passedResult;
console.log(typeof passedResult); // (undefined) declared but value not assigned

let isCoder = true;
console.log(typeof isCoder); // boolean

/* *** Challange Questions *** */

console.log(10 + '20'); //1020
console.log(9 - '5'); //4
console.log('Java' + 'Script'); //JavaScript
console.log(' ' + ' '); //empty
console.log('' + 0); // '0'
console.log('Shikshya' - 'Gautam'); // NaN

// In js true=1 and false=0
console.log(true + true); // 2
console.log(true + false); //1
console.log(true - false); //1
console.log(false + false); //0
console.log(false - true); //-1

/* ****Difference betn null and undefined *** */

let iAmUseless = null;
console.log(iAmUseless); //null
console.log(typeof iAmUseless); //object

let iAmStandBy;
console.log(iAmStandBy); // undefined (declared but value not assigned)
console.log(typeof iAmStandBy); // undefined

/* *** What is NaN *** */
// Stands for Not A Number (i.e Invalid Number)

let myPhoneNumber = 1234567890;
let myFullName = 'Shikshya Gautam';

console.log(isNaN(myPhoneNumber)); // false
console.log(isNaN(myFullName)); // true

//NaN practice

console.log(NaN === NaN); //false
console.log(Number.NaN === NaN); // false

console.log(isNaN(NaN)); //true
console.log(isNaN(Number.NaN)); //true
console.log(Number.isNaN(NaN)); //true
