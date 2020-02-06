// input: 2 arrays
// output: returns true or false depending whether the arrays contain the same
// elements, but not necessarily in the same order.
// algorithm: loop throught the arrays. Check if the first element matches any element,
// if it does remove it from the array1copy. if the array1copy is empty after going through elements
// the arrays are equal

function areArraysEqual(array1, array2) {

  var i;
  var k;
  var j;

    if (array1.length !== array2.length) {
    return false;
  }

  var array2copy = array2.slice();
  var length = array1.length;
  k = 0;
  for (i = 0; i < length; i++)

    if (array1[i] === array2copy[k]) {
      array2copy.splice(k, 1);
    } else {
      for (j = 0; j < length; j++) {
        if (array1[i] === array2copy[j]) {
          array2copy.splice(j, 1);
        }
      }
    }

  return array2copy.length === 0;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]));                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]));                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']));      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]));                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]));            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]));            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]));            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]));                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]));                     // false
console.log(areArraysEqual([1, 1], [1, 1]));                        // true
