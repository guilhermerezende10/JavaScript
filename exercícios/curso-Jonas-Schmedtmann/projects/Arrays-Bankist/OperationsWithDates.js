
const future = new Date(2049, 3, 15, 12, 35)
console.log(+future)

const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)) + ' days'

console.log(calcDaysPassed(new Date(2049, 3, 12, 2, 3, 4), new Date(2049, 3, 15)))