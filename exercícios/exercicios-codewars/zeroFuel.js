const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump

console.log(zeroFuel(50, 25, 1))