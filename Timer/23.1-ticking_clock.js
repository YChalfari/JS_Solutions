let hours, minutes, seconds;
hours = minutes = seconds = 0;
let start = setInterval(counter, 1000);
function counter() {
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  seconds++;
  return console.log(hours, minutes, seconds);
}
