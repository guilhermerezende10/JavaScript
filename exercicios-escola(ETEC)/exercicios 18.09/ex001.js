let preco = Number(prompt("Qual o preço do produto? "))
//pergunta o preço para o usuário
let qtd = Number(prompt("Quantos produtos? "))
//pergunta a quantidade de produtos
if(qtd == 2) {
    preco = Math.floor(preco)
    //se tiver comprando 2 produtos o valor total será arredondado pra baixo
    alert(`O preco com desconto é de ${preco}`)
    //exibir o preco com desconto
}

