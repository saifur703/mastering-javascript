// Normal Function

function addition(x, y) {
  return x + y;
}
const add = addition(5, 5);
console.log(add);

// Arrow Function
const jog = (a, b) => {
  return a + b;
};
const jogKora = jog(12, 12);
console.log(jogKora);

// Arguments
function abc(a, b, c) {
  let arg = [...arguments];
  return arg;
}
console.log(abc(5, 7));

// Default Value
function xyz(a = 5, b = 12) {
  return a * b;
}
const multiply = xyz(2, 6, 2);
console.log(multiply);

// Unlimited Arguments
function addNumbers(num1, num2, ...num) {
  console.log(arguments);
  console.log(num1, num2, num);
  return num1 + num2 + num;
}
const add2 = addNumbers(5, 6, 2);
console.log(add2);
