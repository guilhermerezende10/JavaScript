// // Importing module

// // import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// // addToCart('bread', 5);
// // console.log(price, tq);
// console.log('Importing module');

// import shoppingCart from './shoppingCart.js';
// // import * as ShoppingCart from './shoppingCart.js';
// // ShoppingCart.addToCart('bread', 5);

// // import add, { addToCart, totalPrice as price, tq }  from './shoppingCart.js';
// // console.log(price, tq)

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 6);
// add('apples', 12);
// console.log(cart);

// // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
// // const data = await res.json()
// // console.log(data)

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// // const lastPost = getLastPost();
// // console.log(lastPost);

// // Not very clean
// // lastPost.then(last => console.log(last))

// // const lastPost2 = await getLastPost();
// // console.log(lastPost2)





// const ShoppingCart2 = (function () {
//     const cart = [];
//     const shippingCost = 10;
//     const totalPrice = 237
//     const totalQuantity = 23
    
//     const addToCart = function(product, quantity) {
//         cart.push({product, quantity})
//         console.log(`${quantity} ${product} added to the cart`)
//     }

//     const orderStock = function(product, quantity) {
//         console.log(`${quantity} ${product} ordered from supplier`)
//     }

//     return {
//         addToCart,
//         cart,
//         totalPrice,
//         totalQuantity,
//     }
// })();


// ShoppingCart2.addToCart('apple', 5)
// ShoppingCart2.addToCart('pizza', 3)
// console.log(ShoppingCart2)
// console.log(ShoppingCart2.shippingCost)

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
    cart: [
        {product:'bread', quantity: 5},
        {product: 'pizza', quantity: 3}
    ],
    user: {loggedIn: true},
}

const stateClone = Object.assign({}, state)
const stateDeepClone = cloneDeep(state)
state.user.loggedIn = false;


console.log(state, stateClone)
console.log(stateDeepClone)

