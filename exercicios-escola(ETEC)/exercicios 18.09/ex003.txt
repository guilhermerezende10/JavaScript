let preco = Number(prompt("Qual o preco do produto? "))
// pergunta o preco
let setor = String(prompt("Qual é o setor do produto"))
// pergunta o setor
if(setor == "higiene") {
    let precox3 = (preco * 3) - preco * 0.5
    // se for do setor de higiene o terceiro produto vai ter 50% de desconto
    alert(`PROMOÇÃO 50% DE DESCONTO NA COMPRA DE 3 UNIDADES 1 SAI PELA METADE DO PREÇO 
NOVO PRECO = R$${precox3}
     `)
//exibe a promoção
}