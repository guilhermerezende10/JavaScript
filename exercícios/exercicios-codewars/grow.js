const grow = x => {
    let product = 1
    for (let i = 0; i < x.length; i++) {
        product *= x[i]
    }
        return product
}
console.log(grow([3,4,5,6]))