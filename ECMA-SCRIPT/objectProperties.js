let myName = 'Shikshya';
const myBio = {
  [myName]: 'Hello How are you?',
  26: 'is my age',
};

console.log(myBio); // { '26': 'is my age', Shikshya: 'Hello How are you?' }

//  no need to write key and value, if both are same

let myFname = 'Shikshya';
let myAge = 23;

const info = {
  myFname,
  myAge,
};
console.log(info); // { myFname: 'Shikshya', myAge: 23 }
