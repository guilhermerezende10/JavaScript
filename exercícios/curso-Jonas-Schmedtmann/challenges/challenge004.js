/*Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement � (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25” */

const tipAndBill = (bill) => {
    var tip = 0
    bill > 49 && bill < 301 ? tip = 0.15 : tip = 0.2
    tip = bill * tip
    let total = tip + bill
    return `The bill was ${bill}, the tip was ${tip}, and the total value was ${total}`
}

console.log(tipAndBill(100))