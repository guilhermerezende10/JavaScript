
console.log(2 ** 53 - 1)
console.log(Number.MAX_SAFE_INTEGER)
console.log(2 ** 53 + 1)
console.log(2 ** 53 + 2)
console.log(2 ** 53 + 3)
console.log(2 ** 53 + 4)

console.log(23789347894743287234893472n) // 'n' transforms a regular number in a big number
console.log(BigInt(23789347894743287234893472)) // not too good

// Operations 
console.log(10000n + 10000n) // works the same
console.log(1003420000000000000n * 1000000000002340000n) // works the same
// console.log(Math.sqrt(1003420000000000000n))  

const huge = 232342342378423472389n
const num = 23
// console.log(huge * num) // error
console.log(huge * BigInt(num))

console.log(245n > 28)
console.log(20n === 20) // diferent types
console.log(typeof 20n)
console.log(20n == 20) // same value, diferent types

console.log(huge + ' is REALLY BIG')

// Divisions
console.log(10n / 3n)
console.log(10 / 3)

