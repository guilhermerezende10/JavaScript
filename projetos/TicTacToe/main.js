
let game = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let winner = false
let draw = false

let youCount = 0
let machineCount = 0

let user = ""
checkUser()

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
    if(game.includes(Number(num))) {
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
    checkWin()
    artificialPlaying()
}

function artificialPlaying() {
    if(game.length > 0 && !winner) {
        do{
            var random = Math.floor(Math.random() * 10)
        } while(!game.includes(random))
        let randomStr = `button${random}` 
        let machineAtual = document.getElementById(randomStr)
        let machine = user === 'X' ? 'O' : 'X'
        machineAtual.innerHTML = machine
        machineAtual.style.backgroundColor = 'rgb(240, 70, 70)'
        let indexRandom = game.indexOf(random)
        game.splice(indexRandom, 1)
    }

    if(!winner && !draw){
        checkWin()
    }
}

function checkWin(machine = user === 'X' ? 'O' : 'X') {
    const buttonValues = []
    for(let i = 1; i <= 9; i++){
        let btnStr = 'button' + i
        let btn = document.getElementById(btnStr).textContent
        buttonValues.push(btn)
    }
    if(buttonValues[0] === buttonValues[1] && buttonValues[1] === buttonValues[2] && buttonValues[2] === user) {
        alert('Congratulations, you won!!!')
        winner = true
        youCount++
    }
    else if(buttonValues[0] === buttonValues[1] && buttonValues[1] === buttonValues[2] && buttonValues[2] === machine) {
        alert('Im sorry, you lost.')
        winner = true
        machineCount++
    }
    else if(buttonValues[0] === buttonValues[3] && buttonValues[3] === buttonValues[6] && buttonValues[6] === user) {
        alert('Congratulations, you won!!!')
        winner = true
        youCount++
    }
    else if(buttonValues[0] === buttonValues[3] && buttonValues[3] === buttonValues[6] && buttonValues[6] === machine) {
        alert('Im sorry, you lost.')
        winner = true
        machineCount++
    }
    else if(buttonValues[0] === buttonValues[4] && buttonValues[4] === buttonValues[8] && buttonValues[8] === user) {
        alert('Congratulations, you won!!!')
        winner = true
        youCount++
    }
    else if(buttonValues[0] === buttonValues[4] && buttonValues[4] === buttonValues[8] && buttonValues[8] === machine) {
        alert('Im sorry, you lost.')
        winner = true
        machineCount++
    }
    else if(buttonValues[1] === buttonValues[4] && buttonValues[4] === buttonValues[7] && buttonValues[7] === user) {
        alert('Congratulations, you won!!!')
        winner = true
        youCount++
    }
    else if(buttonValues[1] === buttonValues[4] && buttonValues[4] === buttonValues[7] && buttonValues[7] === machine) {
        alert('Im sorry, you lost.')
        winner = true
        machineCount++
    }
    else if(buttonValues[2] === buttonValues[5] && buttonValues[5] === buttonValues[8] && buttonValues[8] === user) {
        alert('Congratulations, you won!!!')
        winner = true
        youCount++
    }
    else if(buttonValues[2] === buttonValues[5] && buttonValues[5] === buttonValues[8] && buttonValues[8] === machine) {
        alert('Im sorry, you lost.')
        winner = true
        machineCount++
    }
    else if(buttonValues[2] === buttonValues[4] && buttonValues[4] === buttonValues[6] && buttonValues[6] === user) {
        alert('Congratulations, you won!!!')
        winner = true
        youCount++
    }
    else if(buttonValues[2] === buttonValues[4] && buttonValues[4] === buttonValues[6] && buttonValues[6] === machine) {
        alert('Im sorry, you lost.')
        winner = true
        machineCount++
    }
    else if(buttonValues[3] === buttonValues[4] && buttonValues[4] === buttonValues[5] && buttonValues[5] === user) {
        alert('Congratulations, you won!!!')
        winner = true
        youCount++
    }
    else if(buttonValues[3] === buttonValues[4] && buttonValues[4] === buttonValues[5] && buttonValues[5] === machine) {
        alert('Im sorry, you lost.')
        winner = true
        machineCount++
    }
    else if(buttonValues[6] === buttonValues[7] && buttonValues[7] === buttonValues[8] && buttonValues[8] === user) {
        alert('Congratulations, you won!!!')
        winner = true
        youCount++
    }
    else if(buttonValues[6] === buttonValues[7] && buttonValues[7] === buttonValues[8] && buttonValues[8] === machine) {
        alert('Im sorry, you lost.')
        winner = true
        machineCount++
    }

    if(game.length == 0 && !winner && !draw) {
        alert('It is a draw.')
        draw = true
    }

    document.getElementById('outCountYou').textContent = ' ' + youCount
    document.getElementById('outCountMachine').textContent = ' '+ machineCount

    if(winner || draw) {
        clean()
    }
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