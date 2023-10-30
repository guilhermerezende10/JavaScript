const flight = 'G7HL9'
const guilherme = {
    name: 'Guilherme Rezende',
    passport: 1789789237238
}

const checkIn = function(flightNum, passenger) {
    flightNum = 'PHJ890'
    passenger.name = 'Mr. ' + passenger.name

    console.log(passenger.passport === 1789789237238 ? 'Checked in' : 'Wrong passport')
}

checkIn(flight, guilherme)
console.log(flight)
console.log(guilherme)

// Is the same as doing...
const flightNum = flight
const passenger = guilherme

const newPassport = person => {
    person.passport = Math.trunc(Math.random() * 10000000000000)
}

newPassport(guilherme)
checkIn(flight, guilherme)

