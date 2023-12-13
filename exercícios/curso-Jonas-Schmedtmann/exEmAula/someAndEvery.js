

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements)

// EQUALITY
console.log(movements.includes(200))

// CONDITION
console.log(movements.some(mov => mov === -130))
const anyDeposits = movements.some(mov => mov > 1500)
console.log(anyDeposits)