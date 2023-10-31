
let game = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let winner = false
let draw = false
let youCount = 0
let machineCount = 0
let user = ""
checkUser()
let machine = user === 'X' ? 'O' : 'X'

function checkUser() {
    if(user.length === 0 ) {
        user = prompt('Which do you want to be? X or O?')
    }
    if(user != 'X' && user != 'O') {
        alert('Only the letter "X" and "O" are allowed')
        user = "" 
        checkUser()
    }
    return user
}

function button(num) {
    if(game.includes(Number(num)) && !winner && !draw) {
        const btnStr = 'button' + num
        const btnAtual = document.getElementById(btnStr)
        btnAtual.style.backgroundColor = 'rgb(82, 198, 233)'
        let i = game.indexOf(Number(num))
        game.splice(i, 1)
        buttonClicked(btnAtual)
    }
}

const buttonClicked = function(btnAtual) {
    btnAtual.textContent = user
    checkWin(user)
    artificialPlaying()
}

function artificialPlaying() {
    if(game.length > 0 && !winner) {
        do{
            var random = Math.floor(Math.random() * 10)
        } while(!game.includes(random))
        let randomStr = `button${random}` 
        let machineAtual = document.getElementById(randomStr)
        machineAtual.innerHTML = machine
        machineAtual.style.backgroundColor = 'rgb(240, 70, 70)'
        let indexRandom = game.indexOf(random)
        game.splice(indexRandom, 1)
    }

    if(!winner && !draw){
        checkWin(machine)
    }
}

function checkWin(player) {
    const buttonValues = []
    for(let i = 1; i <= 9; i++){
        let btnStr = 'button' + i
        let btn = document.getElementById(btnStr).textContent
        buttonValues.push(btn)
    }
    
    const combinations = [[0, 1, 2],[0, 3, 6],[0, 4, 8],[1, 4, 7],[2, 5, 8],[2, 4, 6],[3, 4, 5],[6, 7, 8],]
    
      for (const combo of combinations) {
        if (combo.every(index => buttonValues[index] === player)) {
          alert(player === user ? 'Congratulations, you won!!!' : 'Im sorry, you lost.')
          winner = true
          player === user ? youCount++ : machineCount++
          return
        }
      }

    if(game.length == 0 && !winner && !draw) {
        alert('It is a draw.')
        draw = true
    }

    document.getElementById('outCountYou').textContent = ' ' + youCount
    document.getElementById('outCountMachine').textContent = ' '+ machineCount

}

function clean() {
    for(let i = 1; i <= 9; i++){
        let btnStr = 'button' + i
        document.getElementById(btnStr).textContent = ""
        document.getElementById(btnStr).style.backgroundColor = "white"
    }
    buttonValues = []
        game = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        winner = false
}