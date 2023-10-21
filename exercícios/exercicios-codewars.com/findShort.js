function findShort(s){
    let arr = s.split(" ")
    let shorter = arr[0]
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length < shorter.length) {shorter = arr[i]}
    }
    return shorter.length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))