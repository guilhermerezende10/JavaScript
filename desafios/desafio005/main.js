let num = document.getElementById('num')
let lista = document.getElementById('select')
let res = document.getElementById('res')
let valores = []



function isNumero (n) {
    if(Number(n) >= 1 && Number(n) <= 100){
    return true
    } else {
        return false
    }
}  

function inLista(n1, l) {
    if (l.indexOf(Number(n1)) != -1 ){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {  
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} tá dentro`
        lista.appendChild(item)
        res.innerHTML = ''
} else {
    alert('Valor inválido ou já inserido na lista.')
} 
    num.value = ''
    num.focus
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar, mula.')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }

        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados </p>`
        res.innerHTML += `<p>O maior valor informado foi o ${maior} </p>`
        res.innerHTML += `<p>O menor valor informado foi o ${menor} </p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma} </p>`
        res.innerHTML += `<p>A media dos valores é ${media} </p>`
    }
}

