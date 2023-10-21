function isPangram(string) {
    string = string.toLowerCase().replace(/[^a-z]/g, '')
    let letters = new Set(string)
    return letters.size === 26
  }

console.log(isPangram("The quick brown fox jumps over the lazy dog."))