//  What is Object Literal?
// Object literal is simply a key:value pair data structure.
// Storing variables and functions together in one container, we can refer this as an Objects.

// Ways of creating an Object?

// 1st Way
const bioData = {
  myName: {
    realName: 'Shikshya',
    nickName: 'Nanu',
  },
  myAge: 23,
  myInterests: ['Coding', 'Eating', 'Sleeping'],
  getData() {
    console.log(`My Name is ${bioData.myName.realName}`);
  },
};
console.log(bioData);
// {
//   myName: { realName: 'Shikshya', nickName: 'Nanu' },
//   myAge: 23,
//   myInterests: [ 'Coding', 'Eating', 'Sleeping' ],
//   getData: [Function: getData]
// }
console.log(bioData.getData()); // My Name is Shikshya
console.log(bioData.myName); // { realName: 'Shikshya', nickName: 'Nanu' }

// 2nd Way to write functions after es6

let info = {
  myName: {
    realName: 'Shikshya',
    nickName: 'Nanu',
  },
  myAge: 23,
  myInterests: ['Coding', 'Eating', 'Sleeping'],
  getData: () => {
    console.log(`My Name is ${bioData.myName.realName}`);
  },
};
console.log(info.getData()); // My Name is Shikshya

info.myAge = 24;
console.log(info);
// age is replaced
// {
//   myName: { realName: 'Shikshya', nickName: 'Nanu' },
//   myAge: 24,
//   myInterests: [ 'Coding', 'Eating', 'Sleeping' ],
//   getData: [Function: getData]
// }
