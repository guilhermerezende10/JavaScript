// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!

const list = []

const convertCamelCase = function() {
    let InTextArea = document.getElementById('textArea')
    let textArea =  InTextArea.value.toLowerCase().trim()
    let textAreaCorrect = ''
    for(let i = 0; i < textArea.length; i++) {
        if(textArea[i] === '_') {
            let letter = textArea[i + 1].toUpperCase()
            textAreaCorrect = textArea.slice(0, i) + letter + textArea.slice(i + 2).replace(/_/g, '').padEnd(20) + '✅'.repeat(list.length)
        }
 
    }
    InTextArea.value = ''
    InTextArea.focus()
    list.push(textAreaCorrect)

    let listStr = ''
    for(const n of list) {
        listStr += n + '\n'
    }
    document.getElementById('outlist').textContent = listStr
}

convertCamelCase()