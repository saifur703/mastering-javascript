// Bad Style
const x = new Array('Hello', 123, 54.765, 'World');
console.log(x[0]);

// Good Style
const arr2 = ['Hello World', 456, 98, 'Bye', 45.12];
console.log(arr2[2]);

// Array Copy
const arrCopy = [...arr2];
console.log(arrCopy);

// Array destructuring
const array = [1, 2, 3, 4, 5];
const [first, second, third, fourth, fifth] = array;
console.log(first);
console.log(second);

// Array Map
console.log('Map Function');
const myArr = [0, 1, 2, 3, 4, 5, 6];
const arrayOutput = myArr.map((cur, ind, newAr) => {
  // Current Number and Index Number
  return cur + ind + newAr;
});
console.log(typeof arrayOutput);
console.log(arrayOutput);

// Find Max Number From Array
const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrMax = Math.max.apply(null, ar);
console.log('Array Max', arrMax);

// Find Min Number from Array
const arrMin = Math.min.apply(null, ar);
console.log('Array Min', arrMin);

// Array length
console.log('Array Length: ', ar.length);

// Array slice
console.log('Array Slice: ');
console.log(ar.slice(0, 2));

// Array splice
console.log('Array Splice: ', ar.splice(4, 2));

// Array join
const a = ['a', 'b', 'c'];
console.log(a.join(' '));

// Array Push
const newA = ar.push('Push item');
console.log('New Array in push: ', newA);
console.log(ar);

// Array Pop
const newB = ar.pop();
console.log(ar, newB);

// Array Shift
const newC = ar.shift();
console.log(ar);

// Array unshift
const newD = ar.unshift('first', 'second');
console.log(ar);

// filter
const filt = ['Saifur', 'Rahman', 'Tahmina', 'Rahima', 'Sultana', 'Mariam'];
const filtrRsult = filt.filter((filt) => filt.length > 6);
console.log('Filter Data: ', filtrRsult);

// reduce
const red = [1, 2, 3, 4, 5];
const redResult = red.reduce((acc, prev) => {
  return acc + prev;
});
console.log(redResult);

// bind
