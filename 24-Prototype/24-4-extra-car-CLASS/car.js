function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}
Car.prototype.accelerate = function () {
  this.speed += 10;
};
Car.prototype.brake = function () {
  this.speed -= 5;
};

const bmw = new Car("BMW", 120);
const porsche = new Car("Porsche", 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
porsche.accelerate();
porsche.accelerate();
porsche.brake();

console.log(bmw.speed, porsche.speed);

class Car1 {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate1() {
    this.speed += 10;
  }
  brake1() {
    this.speed -= 5;
  }
}
const bmw1 = new Car1("BMW", 120);
const porsche1 = new Car1("Porsche", 95);

bmw1.accelerate1();
bmw1.accelerate1();
bmw1.brake1();
bmw1.accelerate1();
porsche1.accelerate1();
porsche1.accelerate1();
porsche1.brake1();

console.log(bmw1.speed, porsche1.speed);
