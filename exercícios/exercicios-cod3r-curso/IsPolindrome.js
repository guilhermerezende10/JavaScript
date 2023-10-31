const isPolidrome = str => {
    const palidromeStr = str.replace(/ /g, '').toLowerCase()
    const newStr = []
    for(i = str.length; i >= 0; i--) {
        newStr.push(palidromeStr[i])
    }
    return newStr.join('') === palidromeStr
}

console.log(isPolidrome('subi no onibus'))