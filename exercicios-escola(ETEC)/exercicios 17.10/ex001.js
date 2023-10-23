// Guilherme Rezende Silva. RM: 230278
// Daniel Alcatrão. RM: 230120

let listaTimes = []

const adicionarAoVetor = function() {
    const inTime = document.getElementById('addClube')
    let time = inTime.value
    if (time == "") return alert('[ERRO] Digite alguma coisa antes de adicionar.')
    listaTimes.push(time)

    inTime.value = ""
    inTime.focus()

    listarClubes()
}

const listarClubes = function() {
    if (listaTimes.length == 0) return alert('[ERRO] Lista está vazia.')

    let lista  = ""
    for(let i in listaTimes) {
        lista += `${Number(i) + 1}-) ${listaTimes[i]} \n `
    }

    document.getElementById('outLista').textContent = lista
}

const montarTabela = function() {
    if (listaTimes.length % 2 !== 0) return alert(`Com o número ímpar de times não é possível realizar as Eliminatórias.`)

    let tabela = ""
    let maior = listaTimes.length - 1
    for(let i = 0; i < listaTimes.length / 2; i++) {
        tabela += `${listaTimes[i]} x ${listaTimes[maior]} \n`
        maior--
    }

    document.getElementById('outTabela').textContent = tabela
}  

const limparTudo = function() {
    document.getElementById('outTabela').textContent = ""
    document.getElementById('outLista').textContent = ""
    listaTimes = []
}