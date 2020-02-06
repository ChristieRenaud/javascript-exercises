// slice
// input: 3 arguments: an array, begin index and end index.
// output: returns a new array containing extracted elements starting from begin
// up to but not including end. Does not mutate the original array. if begin or end
// is greater than the length of the array set it equal to the length of the array.


function slice(array, begin, end) {
  var results = [];
  if (begin > array.length) {
    begin = array.length
  }
  if (end > array.length) {
    end = array.length
  }
  var i;
  for (i = begin; i < end; i++) {
    results.push(array[i]);
  }
  return results;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

var arr = [1, 2, 3];
console.log(slice(arr, 1, 3));                     // [2, 3]
console.log(arr);                                  // [1, 2, 3]
