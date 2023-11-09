// Feito por Guilherme Rezende e Daniel Alonso

const comprasLista = []

const listarCompras = () => {
    const inCompras = document.getElementById('inCompras')
    const compras = inCompras.value
    comprasLista.push(compras)
    inCompras.value = ""
    inCompras.focus()
    exibirCompras()
}

document.getElementById('btEnviar').addEventListener('click', listarCompras)

const exibirCompras = () => {
    const comprasListaOrdenada = comprasLista.sort((a, b) => {
        let x = a.toUpperCase(), y = b.toUpperCase()
        return x == y ? 0 : x > y ? 1 : -1
    })
    let comprasStr = ""
    for(const compra of comprasListaOrdenada) {
        comprasStr += compra + "\n"
    }document.getElementById('outList').textContent = comprasStr
}