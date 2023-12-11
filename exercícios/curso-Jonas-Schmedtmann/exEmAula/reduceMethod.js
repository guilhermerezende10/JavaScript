

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


 // Acumulator is like a snowball
// const balance = movements.reduce((acc, cur , i, arr) => {console.log(`Iteration ${i}: ${acc}`); return acc + cur}, 0) // the inicial value of the acumulator
const balance = movements.reduce((acc, cur , i, arr) => acc + cur, 0) // the inicial value of the acumulator
console.log(balance)

let balance2 = 0
for(const cur of movements) balance2 += cur
console.log(balance2)