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





