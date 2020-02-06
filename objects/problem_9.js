//input: integer representing minutes before or after midnight
// output: time in hour: minutes format

// algorithm: determine hours and minutes. For positive numbers find the remainder of dividing
// 24 * 60. then divide by 60 to get hours, remainder is minutes. create a date object
// and call .toLocaleString(undefined, format)

function timeOfDay(minutes) {
  const hoursInDay = 24;
  const minutesInHour = 60;
  var adjMinutes = minutes < 0 ? -minutes : minutes

  var minutesAbsolute = adjMinutes % (minutesInHour * hoursInDay);
  if (minutes < 0) {
    minutesAbsolute = minutesInHour * hoursInDay - minutesAbsolute
  }
  var hours = Math.floor(minutesAbsolute / minutesInHour)
  minutes = minutesAbsolute % 60;
  var time = new Date(0, 0, 0, hours, minutes)
  return time.toLocaleTimeString(undefined, {hour12: false, hour: "numeric", minute: "numeric"});

}

console.log(timeOfDay(0));          // "00:00"
console.log(timeOfDay(-3));         // "23:57"
console.log(timeOfDay(35));         // "00:35"
console.log(timeOfDay(-1437));      // "00:03"
console.log(timeOfDay(3000));       // "02:00"
console.log(timeOfDay(800));        // "13:20"
console.log(timeOfDay(-4231));      // "01:29"
