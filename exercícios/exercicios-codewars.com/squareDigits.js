function squareDigits(num){
  num2 = num.toString().split('')
  let newStr = ""
  for(let i = 0; i < num2.length; i++) {
    newStr += num2[i] ** 2
  }
  return parseInt(newStr)
} 

console.log(squareDigits(567))