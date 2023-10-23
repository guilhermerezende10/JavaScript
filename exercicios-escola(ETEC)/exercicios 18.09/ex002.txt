let tempo = Number(prompt("Quantos minutos você usou o computador? "))
//autoexplicativo
let tempoArredondado = Math.ceil(tempo / 15) 
//arredonda o tempo para a quinzena de minutos mais próxima
let preco15min = (Number(prompt("Qual é o preço de 15 min no PC?")))
let preco = tempoArredondado * preco15min
//calcula o preço informado multiplicando pelos minutos arredondados pra cima
alert(`Por ${tempo} min você vai pagar R$${preco}`)
//exibe o total