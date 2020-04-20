function clock1() {
  let num = 0;
  return function () {
    num++;
    return num;
  };
}

const myClock1 = clock1();
console.log(myClock1());
console.log(myClock1());
console.log(myClock1());

const myClock2 = clock1();
console.log(myClock2());
console.log(myClock2());
console.log(myClock2());
console.log(myClock1());
console.log(myClock1());
