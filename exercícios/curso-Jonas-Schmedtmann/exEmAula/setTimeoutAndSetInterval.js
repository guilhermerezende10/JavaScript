
// Set interval
const ingredients = ["olives", "spinach"];

const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}!`),
  3000,
  ...ingredients
);

console.log("Wainting...");

if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

// Set interval
setInterval(() => {
    const now = new Date()
    const hour = String(now.getHours()).padStart(2, 0)
    const min = String(now.getMinutes()).padStart(2, 0)
    const sec = String(now.getSeconds()).padStart(2, 0)
    console.log(`${hour}:${min}:${sec}`)
}, 1000)





