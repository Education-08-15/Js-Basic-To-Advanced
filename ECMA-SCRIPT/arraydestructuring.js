//  Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression
// that makes it possible to unpack values from arrays,
// or properties from objects, into distinct variables.

const myInfo = ['shikshya', 22, 'Coding'];

// let myName = myInfo[0];
// let myAge = myInfo[1];
// let myInterest = myInfo[2];

let [myName, myAge, myInterest] = myInfo;
console.log(myName);
console.log(myAge);
console.log(myInterest);

// we can add Values too
let [Name, Age, Interest, myDegree = 'Bachelor'] = myInfo;
console.log(myDegree);
