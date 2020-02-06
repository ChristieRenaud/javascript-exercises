// input: a string or an array;
// output: a new string or array with elements in reverse order.

function reverse(inputForReversal) {
  var length = inputForReversal.length;
  var reversedObject = Array.isArray(inputForReversal) ? [] : '';
  var i;
  var j = 0;
  for (i = length - 1; i >= 0; i--) {
    if (Array.isArray(reversedObject)) {
    reversedObject[j] = inputForReversal[i];
    j++;
    } else {
      reversedObject += inputForReversal[i];
    }
  }

  return reversedObject;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
