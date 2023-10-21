'use strict';

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
    }
}

restaurant.orderDelivery({time:'22:30', address: 'Via del Sole, 21', mainIndex: 2, starterIndex: 2})

const {nome, openingHours, categories} = restaurant
console.log(nome, openingHours, categories)

console.log('\n------------------------------------------\n')

const {
    nome: restaurantName, 
    openingHours: hours, 
    categories: tags
} = restaurant
console.log(restaurantName, hours, tags)

console.log('\n------------------------------------------\n')

// Default values
const {menu = [], starterMenu: starters = []} = restaurant
console.log(menu, starters)

// Mutating variables
// let a = 111
// let b = 999
// const obj = {a: 23, b: 7, c: 14}
// ({a, b} = obj1)
// console.log(a, b)

// Nested objects
const {fri: {open:o, close:c}} = openingHours
console.log(o, c)