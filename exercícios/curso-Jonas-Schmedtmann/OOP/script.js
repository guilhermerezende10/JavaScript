// 'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // // Never do this
//   // this.calcAge = function() {
//   //     console.log(2024 - this.birthYear)
//   // }
// };

// const guilherme = new Person('Guilherme', 2008); // Constructor functions are called with the operator 'new'

// console.log(guilherme);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically returns {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);
// console.log(matilda);
// console.log(jack);

// console.log(guilherme instanceof Person);

// // Prototypes

// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// console.log(Person.prototype);

// guilherme.calcAge();
// matilda.calcAge();
// jack.calcAge();

// console.log(guilherme.__proto__);
// console.log(guilherme.__proto__ === Person.prototype); // true
// console.log(Person.prototype.isPrototypeOf(guilherme)); // true
// console.log(Person.prototype.isPrototypeOf(matilda)); // true
// console.log(Person.prototype.isPrototypeOf(jack)); // true
// console.log(Person.prototype.isPrototypeOf(Person)); // false

// Person.prototype.species = 'Homo Sapiens';
// console.log(guilherme.species);

// console.log(guilherme.hasOwnProperty('firstName')); // true
// console.log(guilherme.hasOwnProperty('species')); // false

// console.log(guilherme.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(guilherme.__proto__.__proto__);
// console.log(guilherme.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [3, 4, 9, 6, 7, 8, 9, 3, 34];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); // true

// console.log(arr.__proto__.__proto__);
// console.log(arr);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// // Class expression

// // const PersonCl = class {

// // }

// // Class declaration

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to the .prototype property
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.fullName}`);
//   }

//   get age() {
//     return 2024 - this.birthYear;
//   }

//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }

//   get fullName() {
//     return this._fullName;
//   }
//   static hey = function () {
//     console.log('Hey there');
//     console.log(this);
//   };
// }

// const jessica = new PersonCl('Jessica Davis', 1996);

// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype); // true

// jessica.greet();

// // 1. Classes are NOT hoisted
// // 2. Classes are first-class citizens
// // 3. Classes are executed in strict mode

// const walter = new PersonCl('Walter White', 1965);
// walter.greet();

// PersonCl.hey();

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 5000;

// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 2008);
// sarah.calcAge();

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2049 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and my course is ${this.course}`);
// };

// const guilherme = new Student('Guilherme', 2008, 'Systems Development');
// console.log(guilherme);

// guilherme.introduce();
// guilherme.calcAge();

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);




class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to the .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }
  static hey = function () {
    console.log('Hey there');
    console.log(this);
  };
}

class StudentCl extends PersonCl{
  constructor(fullName, birthYear, course) {
    // always needs to happend first
    super(fullName, birthYear)
    this.course = course;

};
    introduce() {
      console.log(`My name is ${this.fullName} and my course is ${this.course}`)

  }

  calcAge() {
    console.log(`Im ${2049 - this.birthYear} years old, but as a student I feel more like ${2049 - this.birthYear + 10}`)
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science')
martha.introduce()
martha.calcAge()
