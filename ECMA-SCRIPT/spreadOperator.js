// 7️) Spread Operator

const colors = ['red', 'green', 'blue', 'white', 'pink'];

const myColors = ['white', 'pink', 'yellow', 'black'];

// 2nd time add one more color on top and tell we need to write it again on myColor array too

const myFavColors = [...colors, ...myColors, 'pink'];

console.log(myFavColors);
/*
[
  'red',   'green',
  'blue',  'white',
  'pink',  'white',
  'pink',  'yellow',
  'black', 'pink'
]
*/
