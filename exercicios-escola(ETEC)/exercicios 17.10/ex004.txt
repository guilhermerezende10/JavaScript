let noticiasDoMomento = []

const addNoticias = () => {
    let inNoticias = document.getElementById('noticias')
    let noticias = inNoticias.value
    if(noticias == "") return alert('Insira uma notícia')
    noticiasDoMomento.push(noticias)
    inNoticias.value = ""
    inNoticias.focus()

    exibirNoticias()
}

const exibirNoticias = () => {
    let listaNoticias  = ""
    for(let i in noticiasDoMomento) {
        listaNoticias += `${noticiasDoMomento[i]} \n`
    }
    document.getElementById('outLista').textContent = listaNoticias
}

const exibirNumNoticias = () => {
    let inNumNoticias = document.getElementById('numNoticias')
    let numNoticias = inNumNoticias.value
    if(numNoticias == "" || isNaN(numNoticias)) return alert('Insira uma notícia')
    let listaFinal = ""
    let noticiasTotais = noticiasDoMomento.length - numNoticias
    
    for(let j = noticiasDoMomento.length; j > noticiasTotais ; j--) {
        noticiasDoMomento.pop()
    }
    let listaInvertida = noticiasDoMomento.reverse()
    for(let i in listaInvertida) {
        listaFinal += `${listaInvertida[i]} \n`
    }

    document.getElementById('outLista').textContent = listaFinal


}