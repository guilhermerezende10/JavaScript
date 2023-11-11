

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`)
//     }
// }

const greet = greeting => name => console.log(`${greeting} ${name}`)

const greeterHey = greet('Hey')
greeterHey('Jonas')
greeterHey('Steven')
greeterHey('Guilherme')

greet('Hello')('Guilherme')

