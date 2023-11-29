// Example 1

let f;

const g = function() {
    const a = 23
    f = function() {
        console.log(a * 2)
    }
}


const h = function() {
    const b = 777
    f = function() {
        console.log(b * 2)
    }
}

g(); f();

console.dir(f)
// Re-assigning f function
h(); f()

console.dir(f)

// Example 2

const boardPassengers = function(n, wait) {
    const perGroup = n / 3

    setTimeout(function(){console.log('.')}, 1000)
    setTimeout(function(){console.log('.')}, 2000)
    setTimeout(function(){console.log('.')}, 3000)

    setTimeout(function(){
        console.log(`We are now boarding all ${n} passengers`)
        console.log(`There are 3 groups, each with ${perGroup} passengers.`)
    }, wait * 1000)


    console.log(`Will stat boarding in ${wait} seconds.`)
}
const perGroup = 340 // Closure has priority, so it won't be used.
boardPassengers(180, 4)

