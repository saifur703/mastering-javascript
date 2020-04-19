/* 
Number 
=======
1. Integer => 1, 2, 3, 4, 5 (Literal)
2. Float => 34.54, 98.234 (Literal)
*/

// Number Function
var n = Number('23');
console.log(n);

// parse Int
let num1 = 34.769;
console.log(Number.parseInt(num1));

// parse Float
let num2 = 45;
console.log(typeof num2, Number.parseFloat(num2));

// check int and float
const a = 12.5;
if (Number.isInteger(a)) {
  console.log('Integer number %d', a);
} else {
  console.log('Float number %d', a);
}

// Max Value
console.log('Max Value: ', Number.MAX_VALUE);

// Min Value
console.log('Min Value: ', Number.MIN_VALUE);
