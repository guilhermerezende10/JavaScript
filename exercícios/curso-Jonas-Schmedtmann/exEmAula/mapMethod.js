

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1

const movementsUsd = movements.map(mov => mov * eurToUsd)
// const movementsUsd = movements.map(function(mov){return mov * eurToUsd})
console.log(movementsUsd) 


const movementsUSDfor = []
for(const mov of movements) movementsUSDfor.push(mov * eurToUsd)

console.log(movementsUSDfor)

const movementDescriptions = movements.map((mov, i, arr) => `Movement ${i + 1}: You ${mov > 0 ? 'deposited': 'withdrew'} ${Math.abs(mov)}`)

console.log(movementDescriptions)