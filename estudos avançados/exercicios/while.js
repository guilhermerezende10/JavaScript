function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min)
    return Math.floor(valor)
}
let opcao = 1

while (opcao != 5) {
    console.log(`número ${opcao}`)
    opcao = getInteiroAleatorioEntre(1, 10)
}