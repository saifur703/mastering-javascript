// Spread Array
const a = [1, 2, 3];
const b = [...a, 4, 5, 6, 7];
console.log(a);
console.log(b);

// Spread Object
const obj = {
  id: 1,
  name: 'Saifur',
};
const newObj = {
  ...obj,
  city: 'Comilla',
};
console.log(obj);
console.log(newObj);

// Spread String
const str = 'Hello Bangladesh';
const str2 = [...str];
console.log(str);
console.log(str2);

// Rest Operator
const [first, second, ...rest] = [45, 23, 10, 76, 34];
console.log('First: ', first);
console.log('Second: ', second);
console.log('Array Rest: ', rest);

// Rest in Object
const { x, y, ...others } = {
  x: 'something',
  y: 123,
  c: 'Comilla',
  d: 'BD',
  e: 'another text',
};
console.log('Object 1: ', x);
console.log('Object 2: ', y);
console.log('Object Rest: ', others);
