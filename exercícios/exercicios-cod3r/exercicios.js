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
