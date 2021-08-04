const arr1 = [0, 1, 2, [3, 4]];

let flattenArr = arr1.flat();
console.log(flattenArr);
// [ 0, 1, 2, 3, 4 ]

const arr2 = [1, 23, [4, 3, [44, 55, 33, [7]], [8]]];
let flattenArr2 = arr2.flat(2);
console.log(flattenArr2);
//  [  1,  23, 4, 3,  44, 55,  33, [ 7 ], 8]

const arr3 = [2, 4, [5, 6], [55], [33, 45, 6, 7, [45, 5]]];
let flattenArr3 = arr3.flat(Infinity);
console.log(flattenArr3);
//[2,  4, 5, 6, 55,33, 45, 6, 7, 45, 5]

const arr4 = [
  2,
  4,
  [5, 6],
  [55],
  [33, 45, 6, 7, [45, 5], [9], [445]],
  [99],
  [56],
];
let flattenArr4 = arr4.flat();
console.log(flattenArr4);
//[2,4,5, 6, 55, 33,45, 6, 7,[ 45, 5 ], [ 9 ], [ 445 ],99, 56]

const arr5 = [1, 2, [3, 4, [5, 6]]];
console.log(arr5.flat());
// [ 1, 2, 3, 4, [ 5, 6 ] ]

const arr6 = [1, 2, , 4, 5];
console.log(arr6.flat()); // [ 1, 2, 4, 5 ]
