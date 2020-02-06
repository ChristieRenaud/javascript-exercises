// input: a signed number in string format
// output: the number as a positive or negative integer
// algorithm: Determine if the first character is a number, if so convert to a
// positive integer. If it is a "-" remove the first character and convert
// to an integer. Make negative. If the first character is a "+" remove the
// first character and convert to an integer and return.

NUMBER_CONVERSION = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function stringToSignedInteger(digits) {
  var firstChar = digits[0];
  if (firstChar === "-") {
    return -stringToInteger(digits.slice(1));
  } else if (firstChar === "+") {
    return stringToInteger(digits.slice(1));
  } else {
    return stringToInteger(digits);
  }
}



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


console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
