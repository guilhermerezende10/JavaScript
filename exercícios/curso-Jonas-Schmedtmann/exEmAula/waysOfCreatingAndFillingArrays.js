
const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(new Array(1, 2, 3, 4, 5, 6, 7))

const x = new Array(7) // 7 spaces empty
console.log(x)
// methods does not work in empty arrays
// x.fill(5)
x.fill(5, 3, 7)
console.log(x)

arr.fill(100, 2, 7)
console.log(arr)

// Array.from
const arr2 = Array.from({length: 7}, () => 1)
console.log(arr2)

const z = Array.from({length: 7}, (_, i) => i + 1)
console.log(z)

const movementsUI = Array.from(document.querySelectorAll('.movements__value')).map(el => Number(el.textContent.replace('€', ' ')))