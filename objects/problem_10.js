// input: time string
// output: The number of minutes before or after midnight. return a number
// between 0 and 1439
// algorithm: Create a time object with random days at midnight. create a time object
// for the new time and get the number of milliseconds. Get the number of milliseconds
// at midnight and subtract from the new time. Convert the milliseconds to minutes by
// dividing by seconds in minute times milliseconds in seconds.
// for before midnight, subtract this number from 1440.

var MILLISECONDS_PER_SECOND = 1000;
var SECONDS_PER_MINUTE = 60;
var MINUTES_PER_DAY = 1440;

function afterMidnight(time) {
  var midnight = new Date('1/1/2000 00:00');
  var newTime = new Date('1/1/2000 ' + time);
  var deltaMilliseconds = newTime - midnight;
  return deltaMilliseconds/(MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE)
}

function beforeMidnight(time) {
  deltaMinutes = MINUTES_PER_DAY - afterMidnight(time);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}





console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686
