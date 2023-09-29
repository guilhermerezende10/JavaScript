const getSum = (a,b) => {
    if(a > b){
        var maior = a
        var menor = b
    }
    else if (b > a) {
        var maior = b
        var menor = a
    }

    else if (b == a) return a

    let sum = 0
    for(let i = menor; i <= maior; i++){
        sum += i
    }
    return sum
}

console.log(getSum(-1,2))