'use strict';

// console.log(this) // this keyword here is pointing to the global scope

const calcAge = function(birthYear) {
    console.log(2023 - birthYear)
    // console.log(this) // here is undefined, because expression functions have their own this keyword, but we haven't defined it yet
}

calcAge(2008)

const calcAgeArrow = (birthYear) => {
    console.log(2023 - birthYear)
    // console.log(this) // here is pointing to the global scope, because arrow functions does not have their own this keyword, the This keyword here points to the parent function.
}

calcAgeArrow(2008)

const guilherme = {
    year: 2008,
    calcAge: function() {console.log(this)}  // When we have a method call, the this keyword insight of the method will be the object that is calling the method.
}

guilherme.calcAge()

const matilda = {
    year: 2012
}

matilda.calcAge = guilherme.calcAge
matilda.calcAge()