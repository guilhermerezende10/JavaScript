// -------------------1) DESTRUCTURING ----------------------

// Spread, beacuse on RIGHT side of = 
const arr = [1, 2, ...[3, 4]]

//REST, because on LEFT side of = 
const [a, b, ...others] = [1, 2, 3, 4, 5] // Rest pattern collects the elements that arent beeing used 
console.log(a, b, others)

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

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood)

// Objects

const {sat, ...weekdays} = restaurant.openingHours
console.log(weekdays)

// -------------------2) FUNCTIONS ----------------------
console.log("\n -----------------------------------------------------\n")

const add = function(...numbers) {
    let sum = 0
    for ( let i = 0; i < numbers.length; i++) sum += numbers[i]
    console.log(sum)
}

add(2, 3)
add(5, 3, 7, 2)
add(8, 4, 9, 1, 5, 3, 7, 2)

const x = [23, 5 , 7]
add(...x)

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
restaurant.orderPizza('mushrooms')

