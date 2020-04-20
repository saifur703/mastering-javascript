// String
/* 
1. ""
2. ''
3. ``
*/
const a = 'Hello Text in quote, this is string';
console.log(a);

// uppercase
const aUpper = a.toUpperCase();
console.log(aUpper);

// lower case
const aLower = a.toLowerCase();
console.log(aLower);

// string length count with space
const str = 'Hello BD';
console.log(str.length);

// string position
console.log(str.charAt(4));

// concat
const str1 = 'Hello Bangladesh';
const str2 = 'How are you?';
const strOutput = str1.concat(' ', str2);
console.log(strOutput);

// search word
const sentence = 'Hello Saifur';
if (sentence.indexOf('text') === -1) {
  console.log('Okay good, Match kore nai.');
}
