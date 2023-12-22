

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor()
  console.log('LINK', e.target, e.currentTarget)
  console.log(e.currentTarget === this) // true

  // stop propagation
  // e.stopPropagation() // not good idea
})

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor()
  console.log('CONTAINER', e.target, e.currentTarget)
})

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor()
  console.log('NAV', e.target, e.currentTarget)
}, true)const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`

document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor()
  console.log('LINK', e.target, e.currentTarget)
  console.log(e.currentTarget === this) // true

  // stop propagation
  // e.stopPropagation() // not good idea
})

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor()
  console.log('CONTAINER', e.target, e.currentTarget)
})

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor()
  console.log('NAV', e.target, e.currentTarget)
}, true)