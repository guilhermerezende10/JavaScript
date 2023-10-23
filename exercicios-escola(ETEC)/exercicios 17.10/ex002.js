// Guilherme Rezende Silva. RM: 230278
// Daniel Alcatrão. RM: 230120

let listaNum = []

const verificarNum = () => {
    var inNum = document.getElementById('num')
    var num = inNum.value 
    if(num == "" || isNaN(num)) return alert('Insira um número')

    if(listaNum.includes(num)) return alert('Número repetido.')

    listaNum.push(num)
    inNum.value = ""
    inNum.focus()

    listarNum()
}

const listarNum = () => {
    let lista  = ""
    for(let i in listaNum) {
        lista += `${listaNum[i]} \n`
    }
    document.getElementById('outLista').textContent = lista

}

const verificarOrdem = () => {
    for(let i = 0; i < listaNum.length; i++) {
        if(Number(listaNum[i + 1]) < Number(listaNum[i])) return alert('A lista de números NÃO está em ordem')
    }
    alert('A lista está em ordem.')	
}
