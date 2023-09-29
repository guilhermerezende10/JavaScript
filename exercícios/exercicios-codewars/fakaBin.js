function fakeBin(x){
    let newStr = ""
    for(var i = 0; i < x.length; i++) {
        if( x[i] < "5" ) {newStr += "0"} 
        if( x[i] >= "5") {newStr += "1"} 
    }
    return newStr
}

console.log(fakeBin('45385593107843568'))