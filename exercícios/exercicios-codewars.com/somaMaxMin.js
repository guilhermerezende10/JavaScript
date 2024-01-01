

function maxMin(arr) {
    const array = arr.sort((a, b) => a - b) 
    const soma = arr.reduce((acc, num) => acc += num)
    return `${soma - arr.at(-1)} ${soma - arr[0]}` 
}

console.log(maxMin([1, 2, 3, 4, 5]))