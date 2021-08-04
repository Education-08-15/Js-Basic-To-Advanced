// Default Parameters
// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed

function mult(a, b = 3) {
  return a * b;
}
console.log(mult(4, 5));
