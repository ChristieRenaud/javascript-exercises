var myArray = [5, 5];
myArray[-1] = 5;
myArray[-2] = 5;

function average(array) {
  var sum = 0;
  var i;
  var j = 0;
  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
    j++;
  }

  return sum /j;
}

console.log(average(myArray)); // 5
