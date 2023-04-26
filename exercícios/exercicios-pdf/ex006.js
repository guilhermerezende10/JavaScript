function InvertBooleanNumber(valor) {
    let tipo = typeof valor

    if (tipo === 'boolean') return !valor
    else if (tipo === 'number') return -valor
    else return `This is not a Number or a Boolean, It's a ${tipo}`
}
console.log(InvertBooleanNumber("Olá, mundo"))