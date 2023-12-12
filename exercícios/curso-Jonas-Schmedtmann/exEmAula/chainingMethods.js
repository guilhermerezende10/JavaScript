// PIPELINE

const eurToUsd = 1.1
const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
.reduce((acc, cur) => acc += cur, 0)

console.log(totalDepositsUSD)