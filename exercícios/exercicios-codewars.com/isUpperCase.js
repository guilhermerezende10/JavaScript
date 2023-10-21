String.prototype.isUpperCase = function () {
  return !/[a-z]/.test(this);
};

console.log('HELLO THERE'.isUpperCase())
console.log('HELLo THERE'.isUpperCase())
console.log('hello there'.isUpperCase())
console.log('hello There'.isUpperCase())