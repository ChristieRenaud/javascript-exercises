// input: Takes a string of digits
// returns the corresponding number
// algorithm: Create an array with each element the string representation
// of each index. Split the string into an array and iterate through it,
// saving the result of calling indexOf on each element to a results string
// which is returned.

NUMBER_CONVERSION = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function stringToInteger(numberString) {
  var result = 0;
  var numberArray = numberString.split('');
  var i;
  var placeValue = 1;
  for (i = numberArray.length - 1; i >= 0; i -= 1, placeValue *= 10) {
    result += (NUMBER_CONVERSION.indexOf(numberArray[i]) * placeValue);
  }
  return result;
}
console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
