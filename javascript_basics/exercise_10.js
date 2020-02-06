// input: signed number
// output: signed string
// algorithm: if number is positive, prepend at + to the converted number.
// if negative prepend a "-". else return the converted number.




NUMBER_CONVERSION = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function signedIntegerToString(number) {
  if (number > 0) {
   return '+' + integerToString(number);
 } else if (number < 0) {
   return '-' + integerToString(-number);
 } else {
   return integerToString(number);
 }
}

function integerToString(number) {
if (number === 0) return NUMBER_CONVERSION[number];
var integerString = "";
var newValue = number;
var result = "";

while (newValue !== 0) {
  digit = newValue % 10
  result = NUMBER_CONVERSION[digit] + result
  newValue = (newValue - digit)/10
}
return result

}


console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"
