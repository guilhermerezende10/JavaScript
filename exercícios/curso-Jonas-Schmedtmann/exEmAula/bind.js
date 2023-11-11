

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

// With Event Listeners

lufthansa.planes = 300
lufthansa.buyPlane = function() {
    console.log(this)
    this.planes++
    console.log(this.planes)
}

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

const addTax = (rate, value) => value + value * rate

console.log(addTax(0.2, 200))

const addVAT = addTax.bind(null, 0.23)

console.log(addVAT(1000))
console.log(addVAT(284))

const addTaxRate  = function(rate) {
    return function(value) {
        return value + value * rate
    }
}

const addVAT2 = addTaxRate(0.23)

console.log(addVAT2(100))
console.log(addVAT2(23))
