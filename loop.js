// for loop
for (i = 0; i <= 10; i++) {
  console.log(i);
}

// while loop
let i2 = 0;
while (i2 <= 10) {
  console.log(i2, 'Hello');
  i2++;
}

// do while loop
let i3 = 0;
do {
  console.log(i3, 'Hello do while loop');
  i3++;
} while (i3 <= 10);

// for of loop
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
for (let i of arr) {
  console.log(i);
}

// forEach loop
const arrOutput = arr.forEach((cb) => {
  console.log('ForEach: ', cb);
});
