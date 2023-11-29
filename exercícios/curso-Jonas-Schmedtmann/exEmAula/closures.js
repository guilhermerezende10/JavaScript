
const secureBooking = function() {
    let passengerCount = 0

    return function() {
        passengerCount++
        console.log(`${passengerCount} passengers`)
    }
}

const booker = secureBooking()

booker()
booker()
booker()

// "Closures makes a function remeber all the variables exist in its birth place, even the function is not in call stack anymore."

console.dir(booker) // To view in console all the variables stored in closures