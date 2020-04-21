console.log('Promise');
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Resolve Text');
  }, 1000);
}).then((data) => console.log(data));
console.log(p);
