function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

const squareObj = new Square(10, 10, 10, 10);

Square.prototype.isSquare = function () {
  return Object.values(this).every((val, i, arr) => val === arr[0]);
};

console.log(squareObj.isSquare());
