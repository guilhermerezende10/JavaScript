'use strict';

const Person = function(firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear

    // // Never do this
    // this.calcAge = function() {
    //     console.log(2024 - this.birthYear)
    // }
}

const guilherme = new Person('Guilherme', 2008) // Constructor functions are called with the operator 'new' 

console.log(guilherme)

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)
console.log(matilda)
console.log(jack)

console.log(guilherme instanceof Person)

// Prototypes

Person.prototype.calcAge = function() {
    console.log(2024 - this.birthYear)
}

console.log(Person.prototype)

guilherme.calcAge()
matilda.calcAge()
jack.calcAge()

console.log(guilherme.__proto__)
console.log(guilherme.__proto__ === Person.prototype) // true
console.log(Person.prototype.isPrototypeOf(guilherme)) // true
console.log(Person.prototype.isPrototypeOf(matilda)) // true
console.log(Person.prototype.isPrototypeOf(jack)) // true
console.log(Person.prototype.isPrototypeOf(Person)) // false

Person.prototype.species = 'Homo Sapiens'
console.log(guilherme.species)

console.log(guilherme.hasOwnProperty('firstName')) // true
console.log(guilherme.hasOwnProperty('species')) // false

console.log(guilherme.__proto__)
// Object.prototype (top of prototype chain)
console.log(guilherme.__proto__.__proto__)
console.log(guilherme.__proto__.__proto__.__proto__)

console.dir(Person.prototype.constructor)

const arr = [3,4,9,6,7,8,9,3,34]
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype) // true

console.log(arr.__proto__.__proto__)
console.log(arr)

Array.prototype.unique = function() {
    return [...new Set(this)]
}

console.log(arr.unique())

const h1 = document.querySelector('h1');
console.dir(x => x + 1)

