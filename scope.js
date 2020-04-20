// let z = 'outside'; // global scope
// var z = 'outside'; // global scope
function abc(a) {
  // console.log(z); // can access
  return a;
  // let x = 0;
  // var y = 0;
}
const output = abc('Hello World');
console.log(output);
// console.log(x); // x is not defined
// console.log(y); // y is not defined
