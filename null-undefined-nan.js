// Undefined
let var1;
console.log(var1);

// Array Undefined
const arr = [1, 2, , 4];
console.log(arr[2]);

// function undefined
const fnc = (a, b) => {
  let res = a + b;
};
const add = fnc(2, 5);
console.log(add); // I didn't return res

// Object undefined
const obj = {
  x: 'Saifur',
  y: 'Rahman',
  z: 'Tahmina',
};
console.log('Rayhan Vai koi: ', obj.rayhan); // object is not defined

// Null
const var2 = null;
const var3 = undefined;
console.log(typeof var2, var2, typeof var3, var3);

// NaN
const x = 5 + null;
console.log(x); // Output = 5

const y = 5 + undefined;
console.log(y); // Output = NaN
