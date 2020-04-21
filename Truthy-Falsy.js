// Truthy Value
/* 

1. true
2. Non-zero Numbers (Positive, Negative)
3. Strings
4. Objects 
5. Arrays 
6. Functions
7. "0" (if it's string then its Truthy)
8. " " (space string)

*/

// Falsy Value
/* 

1. false 
2. 0
3. "" (empty string)
4. undefined
5. Null 
6. NaN

*/
const a = undefined;
if (a) {
  console.log('Truthy Value');
} else {
  console.log('Falsy Value');
}
