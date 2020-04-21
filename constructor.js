function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  // Bad
  /*
  
  this.getSummery = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }; 
  
  */
}

// Good
Book.prototype.getSummery = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};
Book.prototype.getAge = function () {
  const date = new Date();
  const fullYear = date.getFullYear();
  const years = fullYear - this.year;
  return `${this.title} is written ${years} years ago`;
};

const book1 = new Book('Choitra', 'Saifur Rahman', '2016');
const book2 = new Book('Boishakhi', 'Mamun', '2018');
console.log(book1);
console.log(book1.getSummery());
console.log(book2.getAge());
