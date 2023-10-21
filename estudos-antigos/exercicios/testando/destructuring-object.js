// Quando vamos desestruturar um objeto, ultilizamos o {}

const person = {
    nome: 'Cristiano',
    idade: 37,
    país: 'brasil',
    endereço: {
        rua: 'fim do mundo',
        numero: 2
    }
}

/* Como atribuir um objeto dentro de um objeto á uma variavel:

const {endereço: {rua: r, numero: num}} = person
console.log(r, num) 

*/

const {nome, idade} = person
// no codigo acima foi usada uma estrutura simples para retirar 2 valores de um objeto (no caso o 'person') chamada destructuring (desestruturação)
console.log(nome, idade)

//const {nome: n, idade: i, país: p} = person
// Agora além de retirar do objeto determinado atributo eu o coloquei dentro de uma variavel, tendo o mesmo resultado do codigo anterior
//console.log(n, i, p)

const {sobrenome, humor = true} = person
// Aqui é um exemplo de uma tentativa de acessar um atributo que nao esta dentro do objeto, mas no 'humor' foi colocado um valor padrao que pode ser alterado
console.log(sobrenome, humor)