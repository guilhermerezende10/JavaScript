// Slipe and Join

console.log('a+very+nice+string'.split('+').join(' '))
console.log('Guilherme Rezende'.split(' '))

const [firstName, lastName] = 'Guilherme Rezende'.split(' ')

const newName = [`Mr. ${firstName} ${lastName.toUpperCase()}`].join()
console.log(newName)


const capitalizeName = name => {
    const names = name.split(' ')
    const namesUpper = []
    for(const n of names) {
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
    }
    console.log(namesUpper.join(' '))
}

capitalizeName('jessica ann smith davis')
capitalizeName('guilherme rezende silva')

// Padding 
const message = 'Go to gate 23'
console.log(message.padStart(25, '+').padEnd(35, '+'))
console.log('Guilherme Rezende Silva'.padStart(25, '+').padEnd(35, '+'))

const maskCreditCard = number => {
    const str = String(number)
    const last = str.slice(-4)
    return last.padStart(str.length, '*')
}

console.log(maskCreditCard(61267478467878))
console.log(maskCreditCard(74897892578915))

// Repeat

const message2 = 'Bad weather... All departues Delayded...'
console.log(message2.repeat(5))

const planesInLine = n => {
    console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`)
}

planesInLine(6)
planesInLine(23)
planesInLine(12)