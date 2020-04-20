// Date
const date = new Date();
console.log(date);

// Day
const day = date.getDay();
console.log(day);

if (day === 0) {
  console.log('Sunday');
} else if (day === 1) {
  console.log('Monday');
} else if (day === 2) {
  console.log('Tuesday');
} else if (day === 3) {
  console.log('Wednesday');
} else if (day === 4) {
  console.log('Thursday');
} else if (day === 5) {
  console.log('Friday');
} else if (day === 6) {
  console.log('Saturday');
} else {
  console.log('Invalid Result');
}

// Month
const month = date.getMonth();
console.log(month);
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

// Year
const year = date.getFullYear();
console.log(year);

// Hours
const hour = date.getHours();
console.log(hour);
// Minute
const minute = date.getMinutes();
console.log('Minute: ', minute);

// Second
const second = date.getSeconds();
console.log('Second: ', second);

// Digital Watch
function setTime() {
  console.log(`${hour}: ${minute}: ${second}`);
}
setInterval(setTime, 1000);
