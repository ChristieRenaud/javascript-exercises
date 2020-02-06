function pop(array) {
  var lastElement = array[array.length-1];
  array.splice(array.length-1);
  return lastElement;
}


// pop
var array = [1, 2, 3];
console.log(pop(array));                        // 3
console.log(array);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

function push() {
  arr = arguments[0];
  var i;
  var startingIndex = arr.length
  for (i = 1; i < arguments.length; i++) {
    arr[arr.length] = arguments[i];
  }
  return arr.length;
}

push
var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
