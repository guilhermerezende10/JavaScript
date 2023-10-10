const guilherme = {
    firstName: 'Guilherme',
    lastName: 'Rezende',
    birthYear: 2008,
    job: 'Software Developer',
    friends: ['Mary', 'Admilson', 'Daniel'],
    hasDriversLicense: false,
    //calcAge: function () {return 2023 - this.birthYear} // 'this' is used to access the 'birthYear' in 'guilherme'
    calcAge: function() {return this.age = 2023 - this.birthYear},
     // A function inside an object is called "Method"
    getSummary: function() {return `${this.firstName} is a ${this.calcAge()}-year young ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`}
}

console.log(guilherme.getSummary())

// console.log(guilherme.age) // Dot notation
// console.log(guilherme['calcAge']()) // Bracket notation