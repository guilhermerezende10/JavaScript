function check(a, x) {
  for(i = 0; i < a.length; i++) {
    if (a[i] == x) {
            return true
        } 
  }
  return false
}

console.log(check([4,6,7,2.3,"d",5], 12))

/*
(5) Use ES2015 method to see if array contains the value.
    Eliminate more cruft.

const check = (a,x)=>a.includes(x)

*/