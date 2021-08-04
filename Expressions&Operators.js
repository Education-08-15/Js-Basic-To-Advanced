/* assingment operator 
Assigns a value to its left operand based on the value of its right operand 
The simple assingment operator is equal (=)
*/

let x = 5;
let y = 5;

console.log(`are both x any y equal :  ${x == y}`);
console.log('are both x and y equal :' + x == y);

/* arithmetic operators 
An arithmetic operator takes numerical values (either literals or variables) as their operands and returns a single numerical value
*/

console.log(x + y); //10
console.log(x - y); //0
console.log(x * y); //25
console.log(x / y); //1

console.log(`Remainder Operator : ` + (81 % 5)); //1 (Returns the remainer)

//Increment and Decrement operator
// Operator : x++ or ++x or x-- or --x
//If used postfix,with operand after operand(eg: x++)
//the increment operator increments and returns the value before incrementing
let a = 12;

let numA = a++;
console.log(a); // 13
console.log(numA); //12

let b = 4;
let numB = b--;
console.log(b); //3
console.log(numB); //4

//If used refix,with operator before operand(eg: ++x)
// the increment opreator increments and returns the value after incrementing
let c = 3;
let newC = --c;
console.log(c); //2
console.log(newC); //2

/* Comparision operators 
A comparision operator compares its operators and returns the value based on the comparision either (true or false)
*/

let s = 23;
let t = 50;

//equals to
console.log(s == t); // false

// doeanot equals to
console.log(s !== t); // true

// greater than
console.log(s > t); // false

// smaller than
console.log(s < t); // true

let num1 = 23;
let num2 = 23;
// greater than or equal to
console.log(num2 > num1); // flase;
console.log(num2 >= num1); //true;

// less than or equal to
console.log(num1 <= num2); // true

/* logical operators 
//Logical opertors are typically used with Booean (logical) values
//when they are , they return true

*/

let n1 = 12;
let n2 = 21;

//Logical AND (&&)  returns true if all of the conditions are true
console.log(n1 < n2 && n2 % 2 !== 0); //true
console.log(n1 > n2 && n2 % 2 !== 0); //false

//Logical OR (||) return true if any one condition is true  more than one conditions are true
console.log(n1 > n2 || n2 % 2 !== 0); //true

//Logical NOT (!)  // returns the vice-versa
let boolean1 = true;
console.log(!boolean1); // false

/* String operator (String concatenation)
// The concatenation (+) operator conctenates two string values together and returns another string which is union of the two strings */

let string1 = 'Hello';
let string2 = 'World';

console.log(string1 + ' ' + string2); // Hello World

//Power
console.log(3 ** 3); //i.e 3*3*3
console.log(9 ** 2); // i.e 9*9
console.log(10 ** -2); // i.e 0.01

// swap two numbers
let d = 4;
let e = 5;

let temp = d;
d = e;
e = temp;

console.log(d);
console.log(e);

// swap two numbers without using third variable
let g = 10;
let h = 5;
g = g + h;
h = g - h;
g = g - h;
console.log(g);
console.log(h);

// Diff betn( ==) & (===)

let comp1 = 5;
let comp2 = '5';
console.log(comp1 == comp2); //true
console.log(comp1 === comp2); // false

// Conditional ternary operators
// The conditional(ternary)operator is the only js operator that takes three operands

let age = 8;
let eligibleToVote =
  age >= 18 ? `You are eligible to vote ` : `You are not eligible to vote`;
console.log(eligibleToVote);
