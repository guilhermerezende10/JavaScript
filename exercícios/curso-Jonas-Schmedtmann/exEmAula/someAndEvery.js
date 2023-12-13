

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements)

// EQUALITY
console.log(movements.includes(200))

// SOME: CONDITION
console.log(movements.some(mov => mov === -130))
const anyDeposits = movements.some(mov => mov > 1500)
console.log(anyDeposits)

// EVERY
console.log(movements.every(mov => !isNaN(mov)))
console.log(movements.every(mov => mov != 100))
console.log(movements.every(mov => mov != 200))

// Separate callback
const deposit = mov => mov > 0
console.log(movements.some(deposit))
console.log(movements.every(deposit))
console.log(movements.filter(deposit))