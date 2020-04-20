const n1 = 5;
const n2 = 2;
if (n1 > n2) {
  console.log(`${n1} is getter than ${n2}`);
} else {
  console.log(`${n1} is smaller than ${n2}`);
}

// Mark sheet
var yourResult = '96';
var marks = parseInt(Number(yourResult));

if (marks < 0 && marks > 100) {
  console.log('Invalid Result! Try Again.');
} else if (marks <= 32 && marks >= 0) {
  console.log('F');
} else if (marks >= 33 && marks <= 39) {
  console.log('D');
} else if (marks >= 40 && marks <= 49) {
  console.log('C');
} else if (marks >= 50 && marks <= 59) {
  console.log('B');
} else if (marks >= 60 && marks <= 69) {
  console.log('A-');
} else if (marks >= 70 && marks <= 79) {
  console.log('A');
} else if (marks >= 80 && marks <= 100) {
  console.log('A+');
} else {
  console.log('Invalid!');
}

// Switch
const date = new Date();
const month = date.getMonth();
switch (month) {
  case 0:
    console.log('January');
    break;
  case 1:
    console.log('February');
    break;
  case 2:
    console.log('March');
    break;
  case 3:
    console.log('April');
    break;
  case 4:
    console.log('May');
    break;
  case 5:
    console.log('June');
    break;
  case 6:
    console.log('July');
    break;
  case 7:
    console.log('August');
    break;
  case 8:
    console.log('September');
    break;
  case 9:
    console.log('October');
    break;
  case 10:
    console.log('November');
    break;
  case 11:
    console.log('December');
    break;
  default:
    console.log('Invalid result');
}
