var erros = []

//gera um numero aleatorio entre 1 e 100

var sorteado = Math.floor(Math.random() + 100) + 1

// declara constante com o número de chances
const CHANCES = 6

const apostaNumero = () => {
    // cria referencia ao ponto de entrada e obtém seu conteúdo
    var inNumero = document.getElementById('inNumero')
    var numero = Number(numero.value)

    //valida o numero
    if(numero <= 0 || numero > 100 || isNaN(numero)) {
        alert("Informe um numero valido")
        inNumero.focus()
        return
    }

    // referencia ao espaço da saída de dados
    var outDica = document.getElementById('outDica')
    var outErros = document.getElementById('outErros')
    var outChances = document.getElementById('outChances')

    // se a aposta do jogador for igual ao numero sorteado

    if(numero == sorteado) {
        alert(`Parabéns, você acertou, ${numero} era o número sorteado!!`)
        // troca status dos botões
        btApostar.disabled = true
        btJogar.className = "exibe"
        outDica.textContent = "Parabéns!!"
    } else {
        // se numero existo no vetor erros
        if(erros.indexOf(numero) >= 0) {
            alert(`Você apostou o número ${numero} 
            Tente outro...`)
        } else {
            erros.push(numero) // add numeros ao vetor
            var numeroErros = erros.length // obtém tamanho do vetor

            var numChances = CHANCES - numeroErros
            outErros.textContent = numeroErros + " (" + erros.join(", ") + ")"
            outChances.textContent = numChances
            if(numChances == 0) {
                alert("Suas chances acabaram")
                btApostar.disabled = true
                btJogar.className = "exibe"
                outDica.textContent = `Game over!!
                O numero sorteado era: ${sorteado}`
            } else {
                 //usa operador ternário para mensagem de dica
                 var dica = numero < sorteado ? "maior" : "menor"
                 outDica.textContent = `Dica: tente um número ${dica}`
            }
        }
    }
    // limpa campos de entrada e posiciona cursor neste campo
    inNumero.value = ""
    inNumero.focus()

    var btApostar = document.getElementById('btApostar')
    btApostar.addEventListener("click", apostaNumero)

    function jogarNovamente() {
        
    }
}

