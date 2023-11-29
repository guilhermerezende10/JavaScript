
const runOnce = function () {
    console.log('This will never run again')
}

runOnce();

// Immeditely Invoked Function Expressions (IIFE)

(function() {
    console.log('This also will never run again')
    const isPrivate = 23
})();

// That's crazy bro, I didn't expect something like this. lol

(() => console.log('This ALSO will never run again, that\'\s too nice, isn\'t\ it?'))();

// Using as arrow function, but it ALWAYS need to use ; in the end of the sentence.

{
    const isPrivate = 23
    var notPrivate = 23
}

// console.log(isPrivate)
console.log(notPrivate)