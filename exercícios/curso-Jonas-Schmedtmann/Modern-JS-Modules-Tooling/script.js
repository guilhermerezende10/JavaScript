// Importing module

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);
console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);

// import add, { addToCart, totalPrice as price, tq }  from './shoppingCart.js';
// console.log(price, tq)

import add, {cart} from './shoppingCart.js';
add('pizza', 2)
add('bread', 6)
add('apples', 12)
console.log(cart)


