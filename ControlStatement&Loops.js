// If ....Else
/*Syntax : if (condition is true) {
           // statement
           } else {
           //statement
           }
*/

let rainy = true;
if (rainy) {
  console.log(`Take an umbrella`);
} else {
  console.log(`No need to take an umbrella`);
}

// Wap to check that if a given year is a leap year or not
let year = 2020;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year} is a leap year`);
    } else {
      console.log(`${year} No it's not a leap year`);
    }
  } else {
    console.log(`${year} No it's not a leap year`);
  }
} else {
  console.log(`${year} No it's not a leap year`);
}

// Switch Statement
/* Syntax :    switch (condition) 
                case 1:
                statement
                break
                 case 2 :
                statement
                break
                ------
                 case n:
                statement
                break
                default
                statement
 */
// Find area using  switch case
let Shape = 'triangle';
let l = 2,
  b = 3,
  r = 4,
  PI = 3.142;

switch (Shape) {
  case 'circle':
    console.log(`Area of circle is : ${PI * r ** 2}`);
    break;
  case 'triangle':
    console.log(`Area of triangle is : ${(l * b) / 2}`);
    break;
  case 'rectangle':
    console.log(`Area of rectangle is : ${l * b}`);
    break;
  default:
    console.log(`Please enter a valid shape`);
}

// While Loop  --> The while statement creates a loop that executes a specified statekment as long as the test condtion evaluates to true

let num = 10;

while (num <= 10) {
  console.log(num);
  num++;
}

// do While ( runs once even if the condition is false)

// let num = 20;
do {
  console.log(num);
  num++;
} while (num <= 12);

// For Loop
/* syntax      for (initializer,condition,iteration)
                {
                  // code to be executed
                }

*/
// for (let i = 0; i < 10; i++) {
//   console.log(i ** 2);
// }

let tableOf = 8;
for (let i = 0; i <= 10; i++) {
  console.log(tableOf * i);
}
