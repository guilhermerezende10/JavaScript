let age = 15
let oldAge = age
age = 16
console.log(age)
console.log(oldAge)

const me = {
    name: 'guilherme',
    age: 15
}

const friend = me
friend.age = 27
console.log(`Friend: ${friend.age}`)
console.log(`Me: ${me.age}`)