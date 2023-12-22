function longest(s1, s2) {
  const arr = (s1 + s2).split('').sort()
  return [... new Set(arr)].join('')
}

console.log(longest("aretheyhere", "yestheyarehere"))
