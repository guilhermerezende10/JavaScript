
// Map
currencies.forEach(function(value, key, map) {
    console.log(`${key}: ${value}`)

})

// Set

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(currenciesUnique)
//                               (value, value, map) In maps the 2nd element does not exist, is just a copy of the 1st 
currenciesUnique.forEach(function(value, value, map) {
    console.log(`${key}: ${value}`)
})