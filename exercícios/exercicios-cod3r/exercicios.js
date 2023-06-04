// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores

const operacaoMath = (a,b) => {
    console.log(a + b, a - b, a * b, a / b) 
}
/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno:Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

const triangulos = (l1, l2, l3) => {
    if (l1 == l2 && l2 == l3) {console.log("Triângulo equilátero")}
    else if (l1 == l2 && l2 != l3 || l1 == l3 && l1 != l2 || l2 == l3 && l2 != l1) {console.log("Triangulo isóceles")}
    else {console.log("Triangulo escaleno ")}
}

/*03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
 */

const elevar = (x, y) => {
    return x**y
}

/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

const divisao = (y, z) => y/z

/* 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).*/

const dinheiroCerto = (num) => {
    dinheiro = `R$ ${num.toFixed(2).toString().replace(".", ",")}`
    console.log(dinheiro)
}

/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

const jurosSimples = (CI, TJ, TA) => {
    return CI + (CI * TJ * TA)
}
const jurosCompostos = (CI, TJ, TA) => {
    return CI * (1+TJ)**TA
}

/*07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”. */

const equacao2grau = (a, b, c) => {
    let res = []
    let delta = (b**2) - (4 * a * c)
    if (delta < 0) {
        return "Delta é negativo. Não existem raizes reais."
    } 
    let X1 = (-b + Math.sqrt(delta)) / (2 * a)
    let X2 = (-b - Math.sqrt(delta)) / (2 * a)
    res.push(X1)
    res.push(X2)
    let remover = res.toString().replace(/\[.*\]/g,'')
    return remover
}

/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo). */

let pontos = "3, 5, 13, 24, 34, 23, 7, 12, 45"

function basqueteDados  (pontos)  {
    let pontuacoes = pontos.split(", ")
    let quebraRecorde = 2
    let piorJogo = 3
    let maisPontos = pontuacoes[0]
    let menosPontos = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(parseInt(pontuacoes[i]) > parseInt(maisPontos)) {
            maisPontos = pontuacoes[i]
            quebraRecorde++
        }else if (parseInt(pontuacoes[i]) < parseInt(menosPontos)) {
            menosPontos = pontuacoes[i]
            piorJogo = i+1;
        }
} 
 return [quebraRecorde, piorJogo]
}

/*09) Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
 */

const classificação = (nota) => {
    if(nota%10==4 || nota%10==9) nota++
    else if(nota%10==3 || nota%10==8) nota+=2
    else if(nota%10==2 || nota%10==7) nota-=2
    else if(nota%10==1 || nota%10==6) nota--
    nota >= 40 ? console.log("aprovado") : console.log("reprovado") 
    return nota  
}
//console.log(classificação(39))
 
/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.
 */

const divisivelPorTres = (inteiro) => inteiro%3==0 ? true : false

/*11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
 */

const anoBissexto = (ano) => {
    if(ano%400==0) return true
     else if (ano%100==0) return false
     else if (ano%4==0) return true
     else return false
    }

    /* 12) Faça um algoritmo que calcule o fatorial de um número.
*/

const fatorial = (num) => {
    if(num == 0){
        return 1
    } else {
        return num * fatorial(num - 1)
    }
}

/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

const diaDaSemana = (numDia) => {
    switch(numDia) {
        case 1:  return "fim de semana" 
        break
        case 2:  
        case 3:  
        case 4:    
        case 5:  
        case 6:  return "Dia útil"  
        break
        case 7:  return "fim de semana" 
        break
        default: return "data errada. numeros de 1 a 31 sao aceitos"
    }
}

/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.
 */

const frutas = (fruta) => {
    switch(fruta) {
        case "maçã": return "Não vendemos esta fruta aqui."
        break
        case "kiwi": return "Estamos com escassez de kiwis"
        break
        case "melancia": return "Aqui está, são 3 reais o quilo"
        break 
        default: return "Erro, voce provavelmente digitou errado."
    }
}

//console.log(frutas("melancia"))

/* 15) Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
“Não trabalhamos com este tipo de automóvel aqui”.
*/

const carroModelo = (carro) => {
    switch(carro) {
        case "hatch": return "Compra efetuada com sucesso."
        break
        case "sedans": 
        case "motocicletas":
        case "caminhonetes":
        return "Tem certeza que não prefere e esse modelo?"
        break
        default: return "Não trabalhamos com este tipo de automóvel aqui. "
        break
    }
}


//console.log(carroModelo("hatch"))

/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
 */

const calculadora = (n1, operador, n2) => {
    switch(operador) {
        case "+": return n1 + n2
        break
        case "-": return n1 - n2
        break
        case "*": return n1 * n2
        break
        case "/": return n1 /n2
        break
        default: return "[ERRO] \nParâmetro errado."
    }
}

//console.log(calculadora(34, '*', 31))

/*17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano |Aumento
A       10%
B       15%
C       20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

const aumentoPorPlano = (plano, salario) => {
    switch(plano) {
        case "A": return salario + (salario * 0.10)
        break
        case "B": return salario + (salario * 0.15)
        break
        case "C": return salario + (salario * 0.20)
        break
        default: return "[ERRO]\nPlano inválido"
        break
    }
}

//console.log(aumentoPorPlano('B', 1000))


/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

const numeroEscrito = (num, linguagem) => {
    if(linguagem == "Português")
    {
        switch(num) {
            case 1: return "Um"
            break
            case 2: return "Dois"
            break
            case 3: return "Três"
            break
            case 4: return "Quatro"
            break
            case 5: return "Cinco"
            break
            case 6: return "Seis"
            break
            case 7: return "Sete"
            break
            case 8: return "Oito"
            break
            case 9: return "Nove"
            break
            case 10: return "Dez"
            break
            default: return "[ERRO]\nNúmero fora do intervalo"
            break
        }
    }

    else if(linguagem == "English")
    {
        switch(num) {
            case 1: return "One"
            break
            case 2: return "Two"
            break
            case 3: return "Three"
            break
            case 4: return "Four"
            break
            case 5: return "Five"
            break
            case 6: return "Six"
            break
            case 7: return "Seven"
            break
            case 8: return "Eight"
            break
            case 9: return "Nine"
            break
            case 10: return "Ten"
            break
            default: return "[ERROR]\nNumber out of the interval"
            break
        }
    }
}

// Resolvi deixar mais legal colocando em 2 idiomas kkkkk
// I decided to make it funnier applying it in 2 languages     lol
//console.log(numeroEscrito(2, "English"))

/*19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

const cardápio = (código, qtd) => {
    switch (código) {
        case 100: return `R$${qtd*3}`
        break
        case 200: return `R$${qtd*4}`
        break
        case 300: return `R$${qtd*5.5}`
        break
        case 400: return `R$${qtd*7.5}`
        break
        case 500: return `R$${qtd*3.5}`
        break
        case 600: return `R$${qtd*2.8}`
        break
        default: return "Produto não existente"
        break
    }
}


//console.log(cardápio(600, 5))

/*20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
 */

const notasMaiorValor = (quantia) => {
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    let valorDasNotas = calcularValor(quantia)
    while(quantia >= valorDasNotas) {
        switch(valorDasNotas) {
            case 100: 
            quantia -= 100
            nota100++
            break
            case 50:
            quantia -= 50
            nota50++
            break
            case 10:
            quantia -= 10
            nota10++
            break
            case 5:
            quantia -= 5
            nota5++
            break
            case 1:
            quantia -= 1
            nota1++
            break
        }
        valorDasNotas = calcularValor(quantia)
    } 
    return elaborarResultado(nota100, nota50, nota10, nota5, nota1)
}

function calcularValor(quantia) {
    if (quantia >= 100) {
        return 100
    } else if (quantia >= 50) {
        return 50
    } else if (quantia >= 10) {
        return 10
    } else if (quantia >= 5) {
        return 5
    } else if (quantia >= 1) {
        return 1
    }
}

function elaborarResultado(nota100, nota50, nota10, nota5, nota1) {
    let resultado = ''

    if (nota100 > 0) {
        resultado += `${nota100} nota(s) de R$ 100\n`
    }

    if (nota50 > 0) {
        resultado += `${nota50} nota(s) de R$ 50\n`
    }

    if (nota10 > 0) {
        resultado += `${nota10} nota(s) de R$ 10\n`
    }

    if (nota5 > 0) {
        resultado += `${nota5} nota(s) de R$ 5\n`
    }

    if (nota1 > 0) {
        resultado += `${nota1} nota(s) de R$ 1\n`
    }

    return resultado
}

//console.log(notasMaiorValor(274));

/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

const planoDeSaúde = (idade) => {
    let preco = 100
    idade < 10 ? preco+= 80 : 
    idade >= 10 && idade <= 30 ? preco+= 50 : 
    idade > 30  && idade <= 60? preco+= 95 :
    idade > 60 ? preco+= 130 : preco = preco
    return `Como você tem ${idade} anos, seu convênio custa R$${preco},00`
}

//console.log(planoDeSaúde(65))

/*22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
 */

const anuidade = (mes, valorAnuidade) => {
    let juros = mes - 1
    if(mes > 1 && mes < 13) {
        let valorfinal = (valorAnuidade * ((1 + (5/100))**juros)).toFixed(2)
        return valorfinal
    } 
    else {
        return "Mês inválido"
    }
}

//console.log(anuidade(4,100))

/*23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.
 */

const calcularNota = (codigo, nota1, nota2, nota3) =>{
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let media = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}. ${media < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

//calcularNota(123, 2.8, 6, 3.5)


/*24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.
 */

const imprimirHelloWorld = () => {
    let i = 0
    while(i<12) {
        console.log(`${i}- Hello World!`)
        i++
    }
}
//imprimirHelloWorld()

/*25) Escrever um programa para exibir os números de 1 até 50 na tela.
 */

const num1a50 = () => {
    for(i=0;i<=50;i++){console.log(i)} 
}

//console.log(num1a50())

/*26) Fazer um programa para encontrar todos os pares entre 1 e 100.
 */

const par1a100 = () => {
    for(i=0;i<=100;i+=2)
    {console.log(i)}
}

//console.log(par1a100())

/* 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
*/

const ficarMaior = (alt1, alt2, taxa1, taxa2) => {
    if (alt1 == alt2) {
      return "Alturas iguais, código não funciona";
    }
  
    let maior, menor, maiorTaxa, menorTaxa;
  
    if (alt1 > alt2) {
      maior = alt1;
      maiorTaxa = taxa1;
      menor = alt2;
      menorTaxa = taxa2;
    } else {
      maior = alt2;
      maiorTaxa = taxa2;
      menor = alt1;
      menorTaxa = taxa1;
    }
  
    let anos = 0;
  
    while (menor <= maior) {
      menor += menor * menorTaxa;
      maior += maior * maiorTaxa;
      anos++;
    }
  
    return `A criança menor ultrapassará a maior em ${anos} anos.`;
  };
//console.log(ficarMaior(1.5, 1.4, 0.12, 0.13))

/*28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

const parImpar = () => {
    let numerosInteiros = [3,4,54,6,4,2,34,56,27,62,35,37]
    let par = 0
    let impar = 0
    for (let i in numerosInteiros) {
        numerosInteiros[i]%2==0 ? par++ : impar++
    }
    return `${par} numeros são pares \n${impar} numeros são ímpares`
}

//console.log(parImpar())

/*29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
 */

const intervalo = () => {
    let vetor = [6,10,12,13,15,17,19,23,27]
    let dentro = 0
    let fora = 0
    for(let i in vetor) {
        vetor[i] > 9 && vetor[i] < 21 ? dentro++ : fora++ 
    }
    return `${dentro} estão dentro \n${fora} estão fora`
}

//console.log(intervalo())

/*30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
 */

const maiorMenor = () => {
    let inteiros = [6,10,12,13,15,17,19,23,27]
    let maior = 0
    let menor = 9999**9999
    for(i in inteiros) {
        if(maior < inteiros[i]) {
            maior = inteiros[i]
        } 
        if(menor > inteiros[i]) {
            menor = inteiros[i]
        } 
    }
    return `${maior} é o maior número \n${menor} é o menor número`
}

//console.log(maiorMenor())

/*31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console. */

const negativos = () => {
    let numeros = [6,-10,-12,-13,15,-17,-19,23,-27]
    let negativos = 0
    for( let i in numeros) {
        if (numeros[i] < 0) negativos++
    }
    return negativos
}

//console.log(negativos())

/*32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

const mediaAritimetica = () => {
    let inteiros = [6,10,12,13,15,17,19,23,27]
    let soma = 0
    for(i in inteiros) {
        soma+=inteiros[i]
    }
    let media = soma / inteiros.length 
    return media
}

//console.log(mediaAritimetica())

/*33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.
 */

const vetores = () =>{
    const vetorInteiro = [1, 2, 3, 4]
    const vetorString = ['a', 'b', 'c', 'd']
    const vetorDouble = [1.1, 2.2, 3.3, 4.4]

    const resultado1 = vetorInteiro.concat(vetorString)
    console.log("Resultado 1:", resultado1)

    const resultado2 = vetorDouble.concat(vetorInteiro, vetorString)
    console.log("Resultado 2:", resultado2)
}

//console.log(vetores())

/*34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras */

const caracteresIguais = (word1, word2) => {
    const lowercaseWord1 = word1.toLowerCase()
    const lowercaseWord2 = word2.toLowerCase()

    for (let i = 0; i < lowercaseWord1.length; i++) {
        const currentChar = lowercaseWord1.charAt(i)
        
        if (!lowercaseWord2.includes(currentChar)) {
        return false
        }
    }

    for (let i = 0; i < lowercaseWord2.length; i++) {
        const currentChar = lowercaseWord2.charAt(i)
        
        if (!lowercaseWord1.includes(currentChar)) {
        return false
        }
    }

  return true
}

//console.log(caracteresIguais("io", "oi"))

/*35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
final das operações imprima os vetores no console.
 */

const vetores2 = () => {
    const vetorPilha = [1, 2, 3, 4, 5]
    const vetorAdiciona = [6, 7, 8, 9, 10]
    let juntar = vetorPilha.concat(vetorAdiciona)
    
    return juntar
}

//console.log(vetores2())

/*36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */

const array = [1, 2, 3, 4, 5]

const arrayMultiplicador = (array, num) => {
    let novoArray = []
    array.forEach(elemento => {
        novoArray.push(elemento * num)
    });
    return novoArray
}

const arrayMultiplicadorX5 = (array, num) => {
    let novoArray2 = []
    if(num < 5) return
    array.forEach(elemento => {
        novoArray2.push(elemento * num)
    });
    return novoArray2
}

//console.log(arrayMultiplicador(array, 3))
//console.log(arrayMultiplicadorX5(array, 6))

/*37) Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
bem como a soma dos elementos */

const progressãoAritimetica = (n, a1, r) => {
    for(let i = 0; i<n; i++) {
        console.log(a1 + r * i)
    }
    console.log('Soma: ' + (n * (a1 + (a1 + ((n-1)*r))))/2) 
}

const progressãoGeométrica = (n,a1,r) => {
    for(let i = 0; i<n; i++) {
        console.log(a1 *( r ** i))
    }console.log('Soma: ' + (a1 * ((r**n)-1))/(r-1))
}

//progressãoAritimetica(10, 998, 2)
//progressãoGeométrica(10, 2, 2)

/*38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
 */

const inicioFim = (inicio = 0, fim = 150) => {
    if(inicio > fim) {
        let auxiliar = inicio
        inicio = fim
        fim = auxiliar
    }
    for(; inicio <= fim; inicio++) {
        if(inicio%2!=0) {console.log(inicio) }
    }
}

//inicioFim(5, 15)

/*39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. */

let vetor1 = [2,4,5,7]
let vetor2 = [3,6,9,10]

const trocaDeVetor = (vetor1, vetor2) => {
    if(vetor1.length == vetor2.length)  {
        for(i=0; i<vetor1.length; i++) {
            vetor1[i] = vetor1[i] + vetor2[i]
            vetor2[i] = vetor1[i] - vetor2[i]
            vetor1[i] = vetor1[i] - vetor2[i]
        }
        return `vetor1: ${vetor1} \nvetor2: ${vetor2}`
    }
    else {return 'Vetores de tamanhos diferentes.'}
}

//console.log(trocaDeVetor(vetor1, vetor2))

/*40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

const notasEscolares = [2.1,4.4,5.1,7.8,9.7,10.0]

const notasDaProva = (notasEscolares) => {
    for(i=0; i<notasEscolares.length;i++) {
        let nota = notasEscolares[i]
        if(nota<5.0) console.log(`${nota} = nota D`)
        if(nota>5 && nota<7) console.log(`${nota} = nota C`)
        if(nota>7 && nota<9) console.log(`${nota} = nota B`)
        if(nota>9) console.log(`${nota} = nota A`)
    }
}

notasDaProva(notasEscolares)
