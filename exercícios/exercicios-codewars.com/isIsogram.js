function isIsogram(str){
  const iso = str.toUpperCase().split('')
  for(let i = 0; i < iso.length; i++) {
    for(let j = i + 1; j < iso.length; j++) {
        if(iso[i] === iso[j]) {return false}
    }
}
  return true
}

console.log(isIsogram(""))