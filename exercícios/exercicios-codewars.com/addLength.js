function addLength(str) {
    let arr = str.split(" ");
    for(let n of arr) {
        n = `${n} ${n.length}`
    }
    return arr
  }

  console.log(addLength('Ola mundo'))
  