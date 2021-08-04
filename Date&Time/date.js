// JavaScript Date objects represent a single moment in time in a platform independent format. Date objects contain a number that represent milliseconds since 1 January 1970 UTC

// Creating Date Objects
//There are 4 ways to create a new date object:

// new Date();
// new Date(year, month, day, hours, minutes, seconds, milliseconds); // it takes 7 arguments
// new Date(milliseconds);
// new Date (date string)

// new Date()
// Date objects are created with new Date() constructor

let currentDate = new Date();
console.log(currentDate); // 2021-07-31T16:48:37.497Z
console.log(currentDate.toString()); // Sun Aug 01 2021 13:01:22 GMT-0400 (Eastern Daylight Time)
console.log(currentDate.toLocaleString()); // 7/31/2021, 12:49:26 PM
console.log(currentDate.toLocaleDateString()); // 7/31/2021
console.log(currentDate.toLocaleTimeString()); // 12:50:39 PM
console.log(currentDate.toUTCString()); // Sat, 31 Jul 2021 16:51:18 GMT

console.log(currentDate.toJSON());
console.log(currentDate.getSeconds()); // 53

// Date.now()
// Returns the numeric value corresponding to the current time-the number of milliseconds elapsed since janauary1, 1970 00:00:00 UTC

console.log(Date.now()); // 1627837386697

// new Date(year,month,.....)
// 7 numbers specifying year,month,day,hour,minute,second,millisecond (in that  order)
// Note: JavaScript  counts months from 0 to 11
// Janauary is 0. December is 11

let time = new Date(2022, 08, 28, 2, 30, 40);
console.log(time); // 2022-09-28T06:30:40.000Z
console.log(time.toLocaleString()); // 9/28/2022, 2:30:40 AM
console.log(time.getUTCMonth()); // 8

// new Date(milliseconds)
// creates anew date object as zero time plus milliseconds

let mSecond = new Date(5675767756757);
console.log(mSecond); // 2149-11-09T18:09:16.757Z
console.log(mSecond.toLocaleString()); // 11/9/2149, 1:09:16 PM

// Dates Method
const curDate = new Date();

// how to get the individul date
console.log(curDate.toLocaleString()); //8/1/2021, 1:32:51 PM
console.log(curDate.getFullYear()); // 2021
console.log(curDate.getMonth()); //7
console.log(curDate.getDate()); // 1
console.log(curDate.getDay()); // 0

// how to set individual date
console.log(curDate.setFullYear(2022)); // 1659375274337
//The setFullYear() method can optionally set month and day
console.log(curDate.setFullYear(2022, 07, 15));
let setMonth = curDate.setMonth(10); // 1660585128870

console.log(curDate.setDate(4)); // 1667583426862
