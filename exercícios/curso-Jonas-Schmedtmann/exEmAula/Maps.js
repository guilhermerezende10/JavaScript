const rest = new Map()
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze Italy')
console.log(rest.set(2, 'Lisbon, Portugal'))

rest
.set('categories', ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open :D')
.set(false, 'We are closed :(')
console.log(rest.get(1))
console.log(rest.get('name'))
console.log(rest.get('open'))


const time = 20
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

console.log(rest.has('categories'))
rest.delete(2)
console.log(rest)
// rest.clear()
const arr = [1, 2]
rest.set(arr, 'Test')
console.log(rest)
console.log(rest.size)

console.log(rest.get(arr))