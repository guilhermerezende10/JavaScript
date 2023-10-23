const vizinhos = (num) => `${num + 1} e ${num - 1}`

const pizzaria = (conta, qtdClientes) => conta / qtdClientes

const pagamento = (preco) => `Á vista com 10% de desconto: ${preco * 0.9}\n Parcelado em 3x: ${preco /3}`

const media = (nota1, nota2) =>  (nota1 + nota2) / 2


console.log(pizzaria())    