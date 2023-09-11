function descendingOrder(n){
    return parseInt(String(n).split('').sort().join(''))
  }   
  
  console.log(descendingOrder(987654321))