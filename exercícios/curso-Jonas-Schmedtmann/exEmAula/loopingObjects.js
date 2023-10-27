const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22
    },
    [weekdays[4]]: {
        open: 11,
        close: 23
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24
    }
}

const restaurant = {
    nome: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    // openingHours: openingHours, old method
    // ES6 enhaced object literals
    openingHours, // new method

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery({starterIndex = 1, time = '20:00', address, mainIndex = 0}) {
        console.log(`\nOrder received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} \n`)
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`)
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient, otherIngredients)
    }
}

// Properties NAMES

const properties = Object.keys(openingHours)
console.log(properties)

let openStr = `We are open on ${properties.length} days:`

for(const day of Object.keys(openingHours)) {
    openStr+= `${day},`
}

console.log(openStr)

// Property VALUES

const values = Object.values(openingHours)
console.log(values)

const entries = Object.entries(openingHours)
console.log(entries)

for(const [key, {open, close}] of entries) {
    console.log(`On ${key} we open at ${open} and close at ${close}`)
}