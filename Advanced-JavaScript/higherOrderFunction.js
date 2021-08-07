const add = (a, b) => {
  return a + b;
};

const sub = (a, b) => {
  return a - b;
};

const mul = (a, b) => {
  return a * b;
};

const div = (a, b) => {
  return a / b;
};

const calculator = (num1, num2, operator) => {
  return operator(num1, num2);
};

console.log(calculator(4, 5, add)); // 9
console.log(calculator(4, 5, sub)); // -1
console.log(calculator(4, 5, mul)); // 20
console.log(calculator(4, 5, div)); // 0.8

// // In the above example, calculator is the higher-order function,  which accepts three arguments, the third one being the callback.
// Here the calculator is called the Higher Order Function because it takes another function as an argument
