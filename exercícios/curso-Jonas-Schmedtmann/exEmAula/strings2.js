
const capitalize = str => {
    const strLower = str.toLowerCase()
    const strCorrect = strLower[0].toUpperCase() + strLower.slice(1)
    return strCorrect 
}

console.log(capitalize('gUILHERME'))

// Comparing emails
const email = 'rezendeguilherme733@gmail.com'
const loginEmail = 'RezendeGuilherme733@Gmail.Com'

console.log(loginEmail)
const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)
console.log(email === normalizedEmail)

// replacing

const priceUS = '$288.97'
console.log(priceUS)
const priceTranslate = '$' + (priceUS.slice(1) * 5).toFixed(3)
const priceBR = priceTranslate.replace('$', 'R$').replace('.', ',')
console.log(priceBR)

const announcement = 'All passengers come to boarding door 23. Boarding door 23!'

console.log(announcement.replaceAll('door', 'gate')) // It works as well
console.log(announcement.replace(/door/g, 'gate'))

// Booleans 

const plane = 'Airbus A320neo'
console.log(plane.includes('A320'))
console.log(plane.includes('Boeing'))
console.log(plane.startsWith('A3'))

if(plane.startsWith('Airbus') && plane.endsWith('neo')) console.log('Part of the NEW Airbus family') 

//Pratice exercise
const checkBaggage = items => {
    const itemsLower = items.toLowerCase()
    console.log(itemsLower.includes('knife') || itemsLower.includes('gun') ? 'You can not carry this' : 'OK. Its all allowed')
}

checkBaggage('I have a laptop, some Food and a pocket Knife')
checkBaggage('Socks and camera')
checkBaggage('Got some snacks and a gun for protection')