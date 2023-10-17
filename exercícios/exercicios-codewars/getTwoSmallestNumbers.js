function sumTwoSmallestNumbers(numbers) {
    let smallers = [numbers[0]]  
    for(let i = 1; i < numbers.length; i++) {
        if (smallers[0] > numbers[i]) {
            smallers[0] = numbers[i]
        }
    }
    
    let index = numbers.indexOf(smallers[0])
    numbers.splice(index, 1)
    smallers[1] = numbers[0]
    for(let k = 0; k < numbers.length; k++) {
        if (smallers[1] > numbers[k]) {
            smallers[1] = numbers[k]
        }
    }
    return smallers[0] + smallers[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))