// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl'
// child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'
// methods of this class, and also update the 'brake' method in the 'CarCl'
// class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

class CarCl {
  constructor(speed, make) {
    this.speed = speed;
    this.make = make;
  }

  get speedUS() {
    return this.speed / 1.6
  }

  set speedUS(speed) {
    this.speed = speed * 1.6
  }
}

class EVCL extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed) 
        this.#charge = charge
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this
      };
    
      accelerate() {
        this.speed += 20;
        this.#charge --;
        console.log(`'${this.make}' is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this
      };

      brake() {
        this.speed -= 5;
        console.log(`'${this.make}' is going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
        return this
      };
    
}

const rivian = new EVCL(120, 'Rivian', 23);

console.log(rivian)

rivian.accelerate().accelerate().brake().chargeBattery(25).accelerate()
