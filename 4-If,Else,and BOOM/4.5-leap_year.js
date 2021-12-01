const isLeap = (year) =>
  year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    ? "This is a leap year"
    : "NOT a leap year";
console.log(isLeap(2012), isLeap(2100), isLeap(2400));
