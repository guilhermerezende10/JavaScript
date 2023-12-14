

const owners = ['Jonas', 'Zach', 'Adam', 'Martha']
console.log(owners)
console.log(owners.sort())

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// return < 0 A,B
// return > 0 B,A

console.log(movements.sort((a, b) => a - b)) // Ascending
console.log(movements.sort((a, b) => b - a)) // Descending 
