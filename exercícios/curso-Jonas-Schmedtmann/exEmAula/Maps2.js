const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'Ruby'],
    [2, 'Python'],
    [3, 'JavaScript'],
    [4, 'Go'],
    ['correct', 3],
    [true, 'Correct, congratulations'],
    [false, 'Try again.']
]);

console.log(question)

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22
    },
    [weekdays[4]]: {
        open: 11,
        close: 23
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24
    }
}

// Converting object to map
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap)

// Quiz app

console.log(question.get('question'))

for(const [key, value] of question) {
    if (typeof key == 'number') console.log(`Answer ${key}: ${value}`)
}

const answer = 3 // Could be a prompt or an input
console.log(question.get(answer === question.get('correct')))


console.log(question.entries())
console.log(question.keys())
console.log(question.values())
console.log(...question) // Spread Operator converts a Map in an Aray
