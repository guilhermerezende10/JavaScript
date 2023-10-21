const arr = [4, 5, 6]
const badNewArr = [1, 2, arr[0], arr[1], arr[2]] // Bad way to create a new array putting a new element on the beginning
// The Spread Operator (...)
const newGoodArr = [1, 2, 3, ...arr] // Best way to create a new array putting a new element on the beginning
console.log(...newGoodArr)
const newGoodArr2 = [...arr, 10, 11, 12] // Best way to create a new array putting a new element on the end
console.log(...newGoodArr2)

console.log(...newGoodArr) // BEST WAY TO WRITE ON CONSOLE THE ARRAY WITHOUT '[]' and ','

const copyArr = [...newGoodArr] //Best way to copy and existent array
console.log(...copyArr)

const arr2 = [7, 8 , 9]
const fullArray = [...arr, ...arr2] // Joining 2 arrays
console.log(...fullArray)

// Iterables: arrays, strings, maps and sets. but NOT objects

const me = 'Guilherme'
let nome = [...me, ' ', 'R.'].join().replace(/,/g, "")
console.log(...nome)

// Objects

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
    }
}

const ingredients = ['Cheese', 'Parmesan', 'White sauce']
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
restaurant.orderPasta(...ingredients) //New way in ES6 to pass all arguments from an array to a function

const newRestaurant = {foundedeIn: 1998, ...restaurant, founder: nome}
console.log(newRestaurant)

const restaurantCopy = {...restaurant}
restaurantCopy.nome = 'Ristorante Roma'
console.log(restaurantCopy.nome)
console.log(restaurant.nome)
