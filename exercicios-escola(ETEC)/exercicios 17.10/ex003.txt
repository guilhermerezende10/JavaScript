// Guilherme Rezende Silva. RM: 230278
// Daniel Alcatrão. RM: 230120

let nomesCandidatos = []
let acertosCandidatos = []

const candidatos = () => {
    let inNome = document.getElementById('nome')
    let nome = inNome.value
    let inAcertos = document.getElementById('acertos')
    let acertos = inAcertos.value

    nomesCandidatos.push(nome)
    acertosCandidatos.push(acertos)
    
    inNome.value = ""
    inAcertos.value = ""
    inNome.focus()

    listarDados()
}

const listarDados = () => {
    let lista = ""
    for(let i in nomesCandidatos) {
        lista += `${Number(i)+1}-) ${nomesCandidatos[i]}, Acertos: ${acertosCandidatos[i]}\n`
    }
    document.getElementById('outLista').textContent = lista
}

const aprovados = () => {
    let aprovados = ""
    let j = 1
    for(let i in nomesCandidatos) {
        if(acertosCandidatos[i] >= 70) {
            aprovados += ` Aprovado ${j}: ${nomesCandidatos[i]}, Acertos: ${acertosCandidatos[i]}\n`
            j++
        }

    }
    document.getElementById('outLista').textContent = aprovados
}

