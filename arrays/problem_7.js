// shift: input: an array
// output: removes the first element and returns it. if the array is empty returns undefined
// mutates the array.

function shift(arr) {
  var shiftedElement = arr[0];
  var length = arr.length;
  var i;
  for (i = 0; i < length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = (2);
  return shiftedElement;
}

// input: array, one or more other elements
// output: adds elements to the start of array. Returns the length of array

function unshift(array, element) {
  var i;
  for (i = 1; i < arguments.length; i++) {
    array.splice(i-1, 0, arguments[i])
  }
  return array.length;
}
console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

var testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
