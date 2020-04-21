const BookProtos = {
  getSummery: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },

  getAge: function () {
    const date = new Date();
    const fullYear = date.getFullYear();
    const years = fullYear - this.year;
    return `${this.title} is written ${years} years ago`;
  },
};

// Create Object System 1
// const book1 = Object.create(BookProtos);
// book1.title = 'Amar Boi';
// book1.author = 'Ami Saifur';
// book1.year = '2020';

// Create Object System 2
const book1 = Object.create(BookProtos, {
  title: { value: 'Habluder jonno boi' },
  author: { value: 'Ami Moga' },
  year: { value: '2016' },
});

// output
console.log(book1);
