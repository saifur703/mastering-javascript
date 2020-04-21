// Function is a Object
function abc() {
  const firstName = 'Saifur';
  return firstName;
}

const lastName = (abc.lastName = 'Rahman');

console.log(abc()); // output -> Saifur
console.log(lastName); // Output -> Rahman

abc.fullName = function () {
  return 'Saifur Rahaman';
};
console.log(abc.fullName());

('use strict');
function bbc() {
  return this;
}
//console.log(bbc());

// constructor function
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
  return this;
}
Person.prototype.fullNameProto = function () {
  return `${this.firstName} ${this.lastName}`;
};
const person1 = new Person('Saifur', 'Rahman');
console.log(person1, person1.fullName());
console.log(person1.fullNameProto());

// console.log(Person.prototype === person1.__proto__); return true;
