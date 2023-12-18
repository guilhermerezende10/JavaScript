
console.log(Math.sqrt(25))
console.log(25 ** (1 / 2))
console.log(8 ** (1 / 3))

console.log(Math.max( 3, 5, 6, 87, 8))
console.log(Math.max( 3, 5, 6, '87', 8))
console.log(Math.max( 3, 5, 6, '87px', 8))

console.log(Math.min( 3, 5, 6, 87, 8))

console.log(Math.PI * Number.parseFloat('10px') ** 2)

console.log(Math.trunc(Math.random() * 6) + 1)

const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min
console.log(randomInt(3, 10))

// Rounding Integers
console.log(Math.trunc(23.3)) // remove decimal part
console.log('----------------------')
console.log(Math.round(23.3))
console.log(Math.round(23.7))
console.log('----------------------')
console.log(Math.ceil(23.3))
console.log(Math.ceil(23.7))
console.log('----------------------')
console.log(Math.floor(23.3))
console.log(Math.floor('23.7'))
console.log('----------------------')
// Negatives
console.log(Math.trunc(-23.3))
console.log(Math.trunc(-23.7))
console.log('----------------------')
console.log(Math.floor(-23.3))
console.log(Math.floor(-23.7))

// Rounding decimals

console.log((2.7).toFixed(0))
console.log((2.7).toFixed(1))
console.log((2.753).toFixed(2))
console.log((2.753).toFixed(3))


