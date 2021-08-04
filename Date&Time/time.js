// Time Methods
const curTime = new Date();
console.log(curTime); // 2021-08-01T18:07:37.036Z

// how to get the indivisual Time

console.log(curTime.getTime());
// The getTime() method returns the number of millisecondssince January 1, 1970
console.log(curTime.getHours());
// The getHours() method returns the hours of a date as a number (0-23)
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

// how to set the indivisual Time

// console.log(curTime.setTime());
console.log(curTime.setHours(5));
console.log(curTime.setMinutes(5));
console.log(curTime.setSeconds(5));
console.log(curTime.setMilliseconds(5));
