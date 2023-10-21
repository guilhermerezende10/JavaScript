const calcAverage = (v1,v2,v3) => (v1 + v2 + v3) / 3

function checkWinner(avgDolphins, avgKoalas){
    let winner = ""
    avgDolphins > avgKoalas * 2 ? winner = "Dolphins" : winner = "Draw"
    avgKoalas > avgDolphins * 2 ? winner = "Koalas" : winner = "Draw"
    console.log(`${winner} (${avgDolphins} x ${avgKoalas}) `)

}

checkWinner(calcAverage(44, 23, 71), calcAverage(1265, 54,  49))