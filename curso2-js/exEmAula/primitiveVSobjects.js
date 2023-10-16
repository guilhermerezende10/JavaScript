// Primitive types
let lastName = 'Rezende'
let oldlastName = lastName
lastName = 'Silva'
console.log(lastName, oldlastName)


// Reference types
const jessica = {
    firstName: 'Jessica',
    lastName: 'Willams',
    age:27
}

const marriedJessica = jessica
marriedJessica.lastName = 'Davis'
console.log(`Before marriage: ${JSON.stringify(jessica)}\nAfter marriage: ${JSON.stringify(marriedJessica)}`)

// marriedJessica = {}

//Copying objects

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Willams',
    age:27,
    family: ['Alice', 'Bob']
}

const jessicaCopy = Object.assign({}, jessica2)

jessicaCopy.lastName = 'Davis'
jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')

console.log('\n-------------------How to change it correctly-----------------------\n')
console.log(`Before marriage: ${JSON.stringify(jessica2)}\nAfter marriage: ${JSON.stringify(jessicaCopy)}`)

