function updateLight(current) {
    return current == "green" ? "yellow" : current == "yellow" ? "red" : current == "red" ? "green" : null 
  }

console.log(updateLight("yellow"))