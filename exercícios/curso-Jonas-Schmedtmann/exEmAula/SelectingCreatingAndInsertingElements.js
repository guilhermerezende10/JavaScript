

// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

document.getElementsByClassName('btn');

// Creating and inserting Elements
// .insertAdjascentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML = 'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie"> Got it! <button/>';

// header.prepend(message) // Insert/move as first element
header.append(message) // Insert/move as last element
// header.append(message.cloneNode(true)) // copying the element

// header.before(message) // Before the element (header)
// header.after(message) // After the element (header)

// Delete elements

document.querySelector('.btn--close-cookie').addEventListener('click', () => message.remove()) 
// old way: message.parentElement.removeChild(message)
// new way: message.remove()