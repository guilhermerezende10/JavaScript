var carros = []

var adicionaCarros = () => {
    var inModelo = document.getElementById('inModelo')
    var inPreco = document.getElementById('InPreco')

    let modelo = inModelo.value
    let preco = Number(inPreco.value)

    if (modelo == "" || preco == 0 || isNaN(preco)){
        alert("Informe corretamente os dados")
        inModelo.focus
        return
    }
    carros.push({modelo: modelo, preco: preco})

    inModelo.value = ""
    inPreco.value = ""
    inModelo.focus()

    listarCarros();
}

var listarCarros = () => {
    if(carros.length == 0) {
        alert("Não há carros na lista")
        return
    }
    var lista = ""

    for(let i = 0; i < carros.length; i++) {
        lista += carros[i].modelo + "- R$" + carros[i].preco.tofixed(2) + "\n"
    }

    document.getElementById('outLista').textContent = lista
}

var filtrarCarros = () => {
    var maximo = Number(prompt("Qual é o valor máximo que o cliente deseja pagar? "))

    if(maximo == 0 || isNaN(maximo)) {
        return
    }

    var lista1 = ""
    for(let i = 0; i < carros.length; i++) {
        lista1 += carros[i].modelo + "- R$" + carros[i].preco.tofixed(2) + "\n"
    }
    var outLista = document.getElementById('outLista')
    if(lista == "") {
        outLista += textContent = "Não há carros com preço até R$" + maximo.tofixed(2)
    } else {
        outLista.textContent = "Carro até R$" + maximo.tofixed(2) + "\n ------------------------------------------------------------- \n" + lista
    }
}