// input: an integer;
// output: a string version of the number
// algorithm: Isolate each digit of the number by dividing it and saving the
// remainder. COnvert each digit to a string and save to a new string.

NUMBER_CONVERSION = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
function reverseString(string) {
  return string.split('').reverse().join('')
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


console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
