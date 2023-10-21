function likes(names) {
    if(names.length == 0) return "no one likes this"
    switch(names.length) {
        case 1: return `${names} likes this`; break
        case 2: return `${names[0]} and ${names[1]} like this`; break
        case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break
        default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`; break
    }}

  console.log(likes(['Guilherme']))
  console.log(likes(['Guilherme', 'Matthew']))
  console.log(likes(['Guilherme', 'Matthew', 'John',]))
  console.log(likes(['Guilherme', 'Matthew', 'John', 'Anne']))