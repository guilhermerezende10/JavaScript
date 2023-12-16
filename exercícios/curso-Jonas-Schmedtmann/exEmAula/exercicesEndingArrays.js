// 1.

const bankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((sum, cur) => sum + cur, 0)
console.log(bankDepositSum)

// 2. 

const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => cur >= 1000 ? ++count : count, 0) // Prefixed ++ operator 
console.log(numDeposits1000)

// 3.

const {deposits, withdrawals} = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
  // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur)
  sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur
  return sums
}, {deposits:0, withdrawals: 0}) 
console.log(deposits, withdrawals)

// 4.

const convertTitleCase = function(title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1)
  const expections = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with']
  const titleCase = title.toLowerCase().split(' ').map(word =>  (expections.includes(word) ? word : capitalize(word))).join(' ')
  return capitalize(titleCase)
}

console.log(convertTitleCase('this is a nice title'))
console.log(convertTitleCase('this is a LONG title but not too long'))
console.log(convertTitleCase('and here is another title with an EXAMPLE'))

