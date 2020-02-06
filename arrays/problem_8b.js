// input: array, a start index, a deleteCount, and zero or more elements to be added
// output: removes deleteCount number of elements from the array, beginning at the
// start index. Any optional element arguments are inserted into the array beginning
// at the start index. Returns a new array containing the deleted elements or
// an empty array. Mutates the original array.
// - if start is greater than the length of the array, set it equal to the length
// - if deleteCount is greater than the number of elements from start up to the end
// of the array, set deleteCount to the diffence between the array's length and start
// - if no elements to add are provided, splice only removes elements.
// algorithm: Check that deleteCount and start are valid and adjust them if necessary
// make two parts. to delete, iterate through the array, and pop off
// the elements to be deleted. To insert, iterate through the elements using the
// arguments function and push them to the array in the correct spot.
function removeElements(array, start, deleteCount) {
  var i;
  var results = [];
  for (i = start; i < start + deleteCount; i++) {
    results.push(array[i])
    array[start] = array[i + 1];
  }
  array.length = array.length - deleteCount;
  return results;
}
function insertElements(array, start, deleteCount, element1, elementN) {
  var arrayEnd = array.slice(start, array.length);
  var i;
  var j = 3;
  for (i = start; j < arguments.length; i++) {
    array[i] = arguments[j];
    j++;
  }
  array.length = start +

  var k;
  for (k = 0)
}

function splice(array, start, deleteCount, element1, elementN) {
  if (start > array.length) {
    start = array.length;
  }
  if (deleteCount > array.length - start) {
    deleteCount = array.length - start;
  }
  var removedElementArray = removeElements(array, start, deleteCount);
  insertElements(array, start, deleteCount, element1, elementN);
  return removedElementArray;
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));             // [2]
console.log(arr);                                  // [1, "two", 3]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three"]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
console.log(arr);                                  // ["a", 1, 2, 3]
