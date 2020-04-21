function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Get Summery
Book.prototype.getSummery = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

// Initiate Magazine Object
const mag1 = new Magazine('Maga one', 'Saif', '2017', 'January');
console.log(mag1.getSummery());
