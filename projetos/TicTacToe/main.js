
const game = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

const user = document.getElementById('userChoose')

function button1() {
    const btnAtual = document.getElementById('button1')
    buttonClicked(btnAtual)
}
function button2() {
    const btnAtual = document.getElementById('button2')
    buttonClicked(btnAtual)
}
function button3() {
    const btnAtual = document.getElementById('button3')
    buttonClicked(btnAtual)
}
function button4() {
    const btnAtual = document.getElementById('button4')
    buttonClicked(btnAtual)
}
function button5() {
    const btnAtual = document.getElementById('button5')
    buttonClicked(btnAtual)
}
function button6() {
    const btnAtual = document.getElementById('button6')
    buttonClicked(btnAtual)
}
function button7() {
    const btnAtual = document.getElementById('button7')
    buttonClicked(btnAtual)
}
function button8() {
    const btnAtual = document.getElementById('button8')
    buttonClicked(btnAtual)
}
function button9() {
    const btnAtual = document.getElementById('button9')
    buttonClicked(btnAtual)
}

const buttonClicked = function(btnAtual) {
    btnAtual.textContent = user
}