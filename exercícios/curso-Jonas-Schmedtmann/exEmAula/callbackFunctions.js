const oneWord = str => str.replace(/ /g, '').toLowerCase()

const upperFirstWord = str => {
    const [first, ...others]  = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
}

// Higher Order Function recives an other function as argument
const transformer = (str, fn) => {
    console.log(`Original string: ${str}`)
    console.log(`Transformed string: ${fn(str)}`)
    console.log(`Transformed by: ${fn.name}\n\n`)
}
transformer('JavaScript is the best!', upperFirstWord)
transformer('JavaScript is the best!', oneWord)

const high5 = () => console.log('✋🏼')

// Callback Function
// document.body.addEventListener('click', high5)

const arr = ['Guilherme', 'Martha', 'Adam']

arr.forEach(high5)
