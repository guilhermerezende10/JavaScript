

console.log(23 === 23.0);

// conversion
console.log(typeof Number("100"));
console.log(typeof +"100"); // easier way to convert

// parsing
console.log(Number.parseFloat("30px", 10));
console.log(Number.parseFloat("e30", 10));

console.log(Number.parseFloat('2.5rem', 10))
console.log(Number.parseInt('2.5rem', 10))
console.log(Number.parseFloat('2rem', 10))

console.log(Number.isNaN(20))
console.log(Number.isNaN('20'))
console.log(Number.isNaN('20X'))
console.log(Number.isNaN(+'20X')) // true
console.log(Number.isNaN(23 / 0)) // infinity is a number

// The Best method to know if value is not a number is ISFINITE
console.log(Number.isFinite(20))
console.log(Number.isFinite('20'))
console.log(Number.isFinite(+'20X'))
console.log(Number.isFinite(23 / 0))

// Check if is integer
console.log(Number.isInteger(23))
console.log(Number.isInteger(23.0))
console.log(Number.isInteger('23'))
console.log(Number.isInteger(23 / 0))

