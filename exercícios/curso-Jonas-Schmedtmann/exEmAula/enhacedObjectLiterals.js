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

const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
}

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
}

console.log(restaurant)