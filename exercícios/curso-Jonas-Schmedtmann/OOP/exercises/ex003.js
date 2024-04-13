// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

const Car = function(speed, make){
    this.speed = speed;
    this.make = make;
}

const EletricCar = function (speed, make, charge) {
  Car.call(this, speed, make);
  this.charge = charge;
};

EletricCar.prototype = Object.create(Car.prototype);

EletricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(
    `'${this.make}' is going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

EletricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `'${this.make}' is going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

EletricCar.prototype.brake = function () {
  this.speed -= 5;
  console.log(
    `'${this.make}' is going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const EV = new EletricCar(120, 'Tesla', 23);
console.log(EV)
EV.accelerate()
EV.accelerate()
EV.brake()
EV.chargeBattery(49)
