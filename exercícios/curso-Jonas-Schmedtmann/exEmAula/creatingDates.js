

// Create a date

const now = new Date()
console.log(now)
console.log(new Date('2023-12-18T21:19:18.475Z'))
console.log(new Date('December 25, 2023'))
console.log(new Date(2049, 3, 15, 12, 35, 30))
console.log(new Date(2037, 10, 31))
console.log(new Date(0))
console.log(new Date(3 * 24 * 60 * 60 * 1000))
console.log(new Date(1 * 31 * 24 * 60 * 60 * 1000))
//                   m | d | hr | min | sec | milisec
console.log(new Date(4 * 12 * 31 * 24 * 60 * 60 * 1000))
//                   y | m | d | hr | min | sec | milisec


// Working with dates
const future = new Date(2049, 3, 15, 12, 35)
console.log(future)
console.log(future.getFullYear())
console.log(future.getMonth())
console.log(future.getDay())
console.log(future.getHours())
console.log(future.getMinutes())
console.log(future.getSeconds())
console.log(future.toISOString())
console.log(future.getTime())

console.log(new Date(2502113700000))
console.log(Date.now())

future.setFullYear(2050)
console.log(future)