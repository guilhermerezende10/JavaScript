console.log('\n----------------------------- OR ----------------------------\n')

// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Guilherme') // Numbers are truthy, excepts 0
console.log('Guilherme' || 3) // strings are truthy
console.log('' || 'Guilherme')// empty string is falsy, otherwise the strings are truthy
console.log(true || 0) // true is truthy and 0 is falsy
console.log(undefined || null) // undefined is a falsy value and null too, but undefined is the first one, then the JS shows the second one
console.log(undefined || 0 || '' || 'Hello' || 23 || null) // Hello is the first truthy value

const restaurant = {
    nome: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22
        },
        fri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24
        }
    },

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function({starterIndex = 1, time = '20:00', address, mainIndex = 0}) {
        console.log(`\nOrder received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} \n`)
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`)
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, otherIngredients)
    }
}

restaurant.numGuests = 26
const guests1 = restaurant.numGuests ? restaurant. numGuests : 10

console.log(guests1)

const guests2 = restaurant.numGuests || 10
console.log(guests2)

console.log('\n----------------------------- AND ----------------------------\n')

console.log(0 && 'Guilherme') // Returns the falsy value
console.log('Guilherme' && 0) // Returns the falsy value
console.log(7 && undefined)
console.log(10 && 'Guilherme') // Otherwise, returns the second one, like we have seen before

console.log('Hello' && 23 && null && 'Guilherme') // null is the first and the only one falsy value

if(restaurant.orderPizza) {
    restaurant.orderPizza('mushroons' , 'spinach')
}


