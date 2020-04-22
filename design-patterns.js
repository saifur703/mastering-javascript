/* 
1. Create Module 
2. Export Module 
3. Understanding "returns": returning an Object with a function as a property
4. Private Method and Private Property: convention and uses
5. different way of making object
6. Revealing Module Pattern 
7. Passing data from outside 
8. Push data to an array
*/

// Module Design Pattern

const Module = (function () {
  // Anonymous Function
  // Private Property
  const hello = 'Hello World';

  // Private Method
  const myAnotherFunc = function () {
    console.log('My Another Function');
  };
  return {
    myFunc: function () {
      console.log(hello);
    },
    myAnotherFunc,
  };
})();
Module.myFunc();
Module.myAnotherFunc();
