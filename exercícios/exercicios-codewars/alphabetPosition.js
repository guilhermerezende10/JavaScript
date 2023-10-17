'use strict';

function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  text = text.toLowerCase()
  let newStr = ""
  for(let i = 0; i < text.length; i++) {
    for(let j = 0; j < alphabet.length; j++) {
      if (text[i] == alphabet[j]) {
        newStr += j + 1 + ' '
      }
    }
  }
  let result = newStr.trim()
  return result
}

console.log(alphabetPosition("The sunset sets at twelve o'clock."))