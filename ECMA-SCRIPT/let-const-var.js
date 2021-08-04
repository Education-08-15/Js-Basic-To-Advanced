// var and let both can be re-assigned
var myName = 'Shikshya Gautam';
console.log(myName);

myName = 'Cxya Gautam';
console.log(myName);

let myAge = 24;
console.log(myAge);

myAge = 25;
console.log(myAge);

// const cant be re-assigned
const myHobby = 'Coding';
console.log(myHobby);

// myHobby = 'Sleeping';
// console.log(myHobbby);  // Returns error assingment to constant variable

// var is function scope

// let bioData = function () {
//   var myFirstName = 'Shikshya';
//   console.log(myName);
//   if (true) {
//     var myLastName = 'Gautam';
//     console.log('inner :' + myLastName);
//     console.log('inner :' + myFirstName);
//   }
//   console.log('innerOuter : ' + myLastName);
// };

// bioData();

// let and const are blockScope
let bioData = function () {
  let myFirstName = 'Shikshya';
  console.log(myFirstName);
  if (true) {
    let myLastName = 'Gautam';
    console.log('inner :' + myLastName);
    console.log('inner :' + myFirstName);
  }
  // console.log('innerOuter : ' + myLastName); // gives an error exists only betn two curly braces {}
};

bioData();
