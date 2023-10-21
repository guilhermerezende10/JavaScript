const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

 //Não é a melhor opção para navegar em arrays
for (let i in notas) {
    console.log(`índice ${i} = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}
 // Acessar objetos com isso é muito útil
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}