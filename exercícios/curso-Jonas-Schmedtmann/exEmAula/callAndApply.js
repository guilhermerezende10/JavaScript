

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
    
}

lufthansa.book(123, 'Guilherme')
lufthansa.book(145, 'Jon Smith')

const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book 
// book(23, 'Guilherme') // Does not work


// CALL METHOD

book.call(eurowings, 23, 'Guilherme')
console.log(eurowings)
book.call(lufthansa, 57, 'Guilherme')
console.log(lufthansa)

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

book.call(swiss, 999,'Robb Stark')
console.log(swiss)

// APPLY METHOD

const flightData = [2345, 'Jon Snow']
book.apply(swiss, flightData) // not used anymore
console.log(swiss)

book.call(swiss, ...flightData) // better way to use an array as argument in call or apply, always using call method

