const ordersSet = new Set([
    'Pasta', 
    'Pizza', 
    'Pizza', 
    'Risotto', 
    'Pasta', 
    'Pizza'
])

console.log(ordersSet)

console.log(new Set('Jonas'))

console.log(ordersSet.size)
console.log(ordersSet.has('Pizza'))
console.log(ordersSet.has('Bread'))
ordersSet.add('Garlic Bread')
ordersSet.add('Garlic Bread')
console.log(ordersSet)
ordersSet.delete('Risotto')
// ordersSet.clear() // Delete all elements
console.log(ordersSet)

for(const order of ordersSet) console.log(order)

//Example 
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']

// const removeDuplicateItens = arr => {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {arr.splice(j, 1) }
//         }
//     }
//     return arr
// }
// console.log(removeDuplicateItens(staff))

// USING SPREAD OPERATOR IN A SET TO REMOVE DUPLICATE ITENS AND TRANSFORMING IN A NEW ARRAY 
const staffUnique = new Set(staff)
console.log(staffUnique)
const newArr = [...staffUnique]
console.log(newArr)


console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size)
console.log(new Set('GuilhermeRezendeSilva'))