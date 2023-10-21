var data = new Date()
var hora = data.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora <12 && hora > 5) {
console.log('Bom Dia!') }

else if (hora <= 18 && hora >= 12) {
    console.log('Boa Tarde!')
}
else if (hora <= 24 && hora >= 19) {
    console.log("Boa Noite!")
}
if (hora >= 0 && hora <= 5) {
    console.log('Boa Madrugada!')
}