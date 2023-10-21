'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    }
}



const arr = [2,3,4]

// Without Destructuring Array

const a = arr[0]
const b = arr[1]
const c = arr[2]
console.log(a, b, c)

// Destructuring Array

const [x, y, z] = arr
console.log(x, y, z)

let [main, secondary] = restaurant.categories

console.log(main, secondary)

let temp = main
main = secondary
secondary = temp
console.log(main, secondary)

// [main, secondary] = [secondary, main] // I dont know why, but it isn't working | TypeError: Cannot set properties of undefined (setting 'Italian')
// console.log(main, secondary)


const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse)

// Nested destructuring

const nested = [2, 4, [5, 6]]
// const [i, ,j] = nested
// console.log(i, j)

const [i, , [j, k]] = nested
console.log(i, j, k)

// Default values
const [p = 0, q = 0, r = 0] = [8, 9]
console.log(p, q, r)