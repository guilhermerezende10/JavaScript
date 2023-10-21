const nota = [7.0, 8.5, 7.5, 10.0, 10.0]
const alunoMedia = () => {
    let soma = 0
    for(let i=0; i < nota.length; i++) {
        let numero = soma + nota[i]
        soma =+ numero
    }
    return soma / nota.length
}
const passarDeAno = _ => {
    if(alunoMedia()> 7) {
        console.log(`Parabéns!! Você passou de ano! ${alunoMedia()} é uma boa nota, continue assim!`)}
    else {console.log(`Sua média é ${alunoMedia()}?? muito burro`)}
}

return passarDeAno()
