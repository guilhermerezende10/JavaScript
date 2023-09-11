function validatePIN(pin) {
    if (pin.length === 4 || pin.length === 6) {
      const pinArray = pin.split('');
      for (let i = 0; i < pinArray.length; i++) {
        if (isNaN(parseInt(pinArray[i]))) {
          return false;
        }
      }
  
      return true;
    }
  
    return false;
  }
  
console.log(validatePIN("2358"))
console.log(validatePIN("12356"))
console.log(validatePIN("a346"))    