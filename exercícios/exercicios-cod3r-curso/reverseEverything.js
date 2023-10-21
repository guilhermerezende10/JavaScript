'use strict';

const reverseEverything = (obj) => {

    let reverse;

    if (typeof obj === "number") {
         reverse = parseInt(obj.toString().split('').reverse().join(''));
    }

    else if (typeof obj === "string") {
         reverse = obj.split('').reverse().join('')
    }
   
    else if (Array.isArray(obj)) {
         reverse = obj.reverse()
    }

    return reverse
    
}

console.log(reverseEverything(987654321))
console.log(reverseEverything("It's over Anakin, I have the highground"))
console.log(reverseEverything(["h", "e", "l", "l", "o"]))