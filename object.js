const myObject = {
  x: 'Hello',
  y: 123,
  z: 'BD',
};
console.log(myObject.z);

// Array Object
const obj = [
  {
    id: 1,
    name: 'Saifur Rahman',
    city: 'Comilla',
    country: 'Bangladesh',
  },
  {
    id: 2,
    name: ' Rahman',
    city: 'Sylhet',
    country: 'Bangladesh',
  },
];
console.log(obj[0].city);

// Map function
const names = obj.map((n) => {
  return n.name;
});
console.log(names);

// Find
const find = obj.find((s) => s.id > 1);
console.log(find);

// Filter
const filter = obj.filter((fl) => fl.id < 3);
console.log(filter);
