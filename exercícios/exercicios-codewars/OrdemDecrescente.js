function descendingOrder(num){
    return parseInt(String(num).split('').sort().join(''))
  }   
  
  console.log(descendingOrder(987654321))