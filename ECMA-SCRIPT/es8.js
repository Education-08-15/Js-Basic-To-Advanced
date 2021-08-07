// Object.values()
const person = { name: 'Fred', age: 87 };

console.log(Object.values(person));
// [ 'Fred', 87 ]

// Object.entries()
const arrObj = Object.entries(person);

console.log(arrObj);
// [ [ 'name', 'Fred' ], [ 'age', 87 ] ]

console.log(Object.fromEntries(arrObj));
//{ name: 'Fred', age: 87 }
