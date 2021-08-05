// 2️) What is this Object?
// The definition  of "this" object is that it contain the current context.
// The this object can have different values depending on where it is placed.

//  For Example 1
// console.log(this.alert('Awesome'));
// it refers to the current context and that is window global object

// ex 2
function myName() {
  console.log(this);
}
console.log(myName());

//ex 3
var Name = 'Shikshya';
function name() {
  console.log(this.Name);
}

//ex 4
const obj = {
  myAge: 26,
  myName() {
    console.log(this.myAge);
  },
};

obj.myName();

//  ex 5
// this object will not work with arrow function bcz arrow function is bound to class.

const obj1 = {
  myAge: 26,
  myName: () => {
    console.log(this);
  },
};
obj1.myName();

// // ex 6

let bioData = {
  myName: {
    realName: 'Shikshya',
    channelName: 'edycation',
  },
  // things to remember is that the myName is the key and the object is act like a value
  myAge: 24,
  getData() {
    console.log(
      `My name is ${this.myName.channelName} and my age is ${this.myAge} `,
    );
  },
};

bioData.getData();
