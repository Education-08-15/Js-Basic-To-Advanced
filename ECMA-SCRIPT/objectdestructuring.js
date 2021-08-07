// Object destructuring

let myBioData = {
  myFname: 'shikshya',
  myLname: 'gautam',
  myAge: 23,
};

let age = myBioData.myAge;
y;
console.log(age);

let fname = myBioData.myFname;
console.log(fname);

let { myFname, myLName, myAge, myDegree = 'Bachelors' } = myBioData;
console.log(myFname);
console.log(myAge);
console.log(myDegree);
