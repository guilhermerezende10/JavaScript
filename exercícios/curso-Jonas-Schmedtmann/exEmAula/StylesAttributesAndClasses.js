const header = document.querySelector(".header");
document.getElementsByClassName("btn");
const message = document.createElement("div");
message.classList.add("cookie-message");
message.innerHTML =
  'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie"> Got it! <button/>';
header.append(message);
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", () => message.remove());

// Styles

message.style.backgroundColor = "#37383d";
message.style.width = "98vw";

console.log(message.style.backgroundColor);
console.log(message.style.color); // We can have access only for in-line style doing this way
console.log(message.style.height);

console.log(getComputedStyle(message).color); // now all style is usefull
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");
// in this case 'documentElement' === ':root' in css file

// Atributes
const logo = document.querySelector(".nav__logo");
console.log(logo.src);
console.log(logo.className);
console.log(logo.alt);

logo.alt = "Beutiful minimalist logo";
console.log(logo.alt);

// Non standart
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
logo.setAttribute("company", "Bankist");

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".nav__link--btn");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data Attributes

console.log(logo.dataset.versionNumber);

// Classes

logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c"); // not includes

// Don't use
logo.className = "jonas";
