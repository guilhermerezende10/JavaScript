function correct(string)
{
	for(letra in string) {
    switch(string.charAt(letra)) {
      case "5": string = string.replace(string.charAt(letra), "S")
      break
      case "0": string = string.replace(string.charAt(letra), "O")
      break
      case "1": string = string.replace(string.charAt(letra), "I")
      break
    }
  }
  return string
}

console.log(correct("L0ND0N"))