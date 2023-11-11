

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
        this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
    }
    
}

const eurowings = {
    name: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}

const book = lufthansa.book 

// Bind Method

const bookEW = book.bind(eurowings)
const bookLH = book.bind(lufthansa)
const bookLX = book.bind(swiss)

bookEW(456, 'Daemon')

const bookEW23 = book.bind(eurowings, 23)
bookEW23('Maegor')
bookEW23('Aegon')

