const [airline, plane] = ['Singapore Airlines','B777']
console.log(airline + '\n' + plane)

console.log(airline.indexOf('e'))
console.log(airline.indexOf('Airlines'))
console.log(airline.lastIndexOf('e'))

console.log(airline.slice(3))
console.log(airline.slice(7, 15))

console.log(airline.slice(0, airline.indexOf(' ')))
console.log(airline.slice(airline.indexOf(' ') + 1))

const checkMiddleSeat = seat => {
    // B and E are middle seats
    console.log(seat.slice(-1) == 'B' || seat.slice(-1) == 'E' ? 'It is a middle seat' : 'It is not a middle seat')
}

checkMiddleSeat('11D')

console.log(new String('Gui'))
console.log(typeof new String('Gui'))

console.log(typeof new String('Gui').slice(1))

