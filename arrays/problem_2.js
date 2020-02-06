var myArray = [1, 2, 3, 4];
var myOtherArray = [];
var i;
for (i = 0; i < myArray.length; i++) {
  myOtherArray.push(myArray[i]);
}

myOtherArray = myArray.slice(0);

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// alternative answer

var myArray = [1, 2, 3, 4];
var myOtherArray = [];

myOtherArray = myArray.slice(0);

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
