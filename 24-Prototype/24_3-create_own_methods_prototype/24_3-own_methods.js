const testArr = [1, 2, 3, 4, 5];
Array.prototype.filterEvens = function () {
  return this.filter((val) => val % 2 === 0);
};

Array.prototype.find3 = function () {
  return this.find((val) => val === 3);
};
Array.prototype.sum = function () {
  return this.reduce((val, cur) => val + cur);
};

console.log(testArr.filterEvens(), testArr.find3(), testArr.sum());
