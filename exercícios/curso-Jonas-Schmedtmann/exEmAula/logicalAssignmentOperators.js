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

const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
}

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
}


// OR logical assigment Operator
// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10
// rest1.numGuests ||= 10 // Same thing in a better way, but doesn't work if you put the number 0 in numGuests.
// rest2.numGuests ||= 10 // Same thing in a better way, but doesn't work if you put the number 0 in numGuests.

//Nullish logical assigment operator
rest1.numGuests ??= 10 // the best way 
rest2.numGuests ??= 10 // the best way 

// rest1.owner = rest1.owner && '<ANONYMOUS>' // When the first value is true, its recives the second one 
// rest2.owner = rest2.owner && '<ANONYMOUS>' // When the first value is true, its recives the second one 

// AND logical assigment Operator
rest1.owner &&= '<ANONYMOUS>' 
rest2.owner &&= '<ANONYMOUS>' 

console.log(rest1)
console.log(rest2)