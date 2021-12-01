const numArr = [1, 2, 3, 4, 5];
const max = (arr) => arr.reduce((max, currNum) => Math.max(max, currNum));
console.log(max(numArr));

const sumOfEvens = (arr) =>
  arr.reduce((sum, curr) => (curr % 2 === 0 ? (sum += curr) : sum), 0);
console.log(sumOfEvens(numArr));

const avg = (arr) => arr.reduce((avg, curr) => avg + curr) / arr.length;
console.log(avg(numArr));
