function getCount(str) {
  let counter = 0
  const vowels = "aeiou"
  for(let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      counter++
    }
}
  return counter;
}