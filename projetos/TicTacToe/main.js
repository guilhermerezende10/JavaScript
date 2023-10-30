
let game = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let user = ""
checkUser()

let winner = false

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
        console.log(game)
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
        let indexRandom = game.indexOf(random)
        game.splice(indexRandom, 1)
        console.log(game)
        let randomStr = `button${random}` 
        let machine = user === 'X' ? 'O' : 'X'
        let machineAtual = document.getElementById(randomStr)
        machineAtual.innerHTML = machine
        machineAtual.style.backgroundColor = 'rgb(240, 70, 70)'
    }
    if(!winner){
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
    }
    else if(buttonValues[0] === buttonValues[1] && buttonValues[1] === buttonValues[2] && buttonValues[2] === machine) {
        alert('Im sorry, you lost.')
        winner = true
    }
    else if(buttonValues[0] === buttonValues[3] && buttonValues[3] === buttonValues[6] && buttonValues[6] === user) {
        alert('Congratulations, you won!!!')
        winner = true
    }
    else if(buttonValues[0] === buttonValues[3] && buttonValues[3] === buttonValues[6] && buttonValues[6] === machine) {
        alert('Im sorry, you lost.')
        winner = true
    }
    else if(buttonValues[0] === buttonValues[4] && buttonValues[4] === buttonValues[8] && buttonValues[8] === user) {
        alert('Congratulations, you won!!!')
        winner = true
    }
    else if(buttonValues[0] === buttonValues[4] && buttonValues[4] === buttonValues[8] && buttonValues[8] === machine) {
        alert('Im sorry, you lost.')
        winner = true
    }
    else if(buttonValues[1] === buttonValues[4] && buttonValues[4] === buttonValues[7] && buttonValues[7] === user) {
        alert('Congratulations, you won!!!')
        winner = true
    }
    else if(buttonValues[1] === buttonValues[4] && buttonValues[4] === buttonValues[7] && buttonValues[7] === machine) {
        alert('Im sorry, you lost.')
        winner = true
    }
    else if(buttonValues[2] === buttonValues[5] && buttonValues[5] === buttonValues[8] && buttonValues[8] === user) {
        alert('Congratulations, you won!!!')
        winner = true
    }
    else if(buttonValues[2] === buttonValues[5] && buttonValues[5] === buttonValues[8] && buttonValues[8] === machine) {
        alert('Im sorry, you lost.')
        winner = true
    }
    else if(buttonValues[2] === buttonValues[4] && buttonValues[4] === buttonValues[6] && buttonValues[6] === user) {
        alert('Congratulations, you won!!!')
        winner = true
    }
    else if(buttonValues[2] === buttonValues[4] && buttonValues[4] === buttonValues[6] && buttonValues[6] === machine) {
        alert('Im sorry, you lost.')
        winner = true
    }
    else if(buttonValues[3] === buttonValues[4] && buttonValues[4] === buttonValues[5] && buttonValues[5] === user) {
        alert('Congratulations, you won!!!')
        winner = true
    }
    else if(buttonValues[3] === buttonValues[4] && buttonValues[4] === buttonValues[5] && buttonValues[5] === machine) {
        alert('Im sorry, you lost.')
        winner = true
    }
    else if(buttonValues[6] === buttonValues[7] && buttonValues[7] === buttonValues[8] && buttonValues[8] === user) {
        alert('Congratulations, you won!!!')
        winner = true
    }
    else if(buttonValues[6] === buttonValues[7] && buttonValues[7] === buttonValues[8] && buttonValues[8] === machine) {
        alert('Im sorry, you lost.')
        winner = true
    }

    if(game.length == 0 && !winner) {
        alert('It is a draw.')
    }
    console.log(buttonValues)
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