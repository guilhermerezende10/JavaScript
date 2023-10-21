var agora = new Date()
var dia = agora.getDay()
/* 
    0 = Domingo  |  Sunday
    1 = Segunda  |  Monday
    2 = Terça    |  Tuesday
    3 = Quarta   |  Wednesday
    4 = Quinta   |  Thursday
    5 = Sexta    |  Friday
    6 = Sábado   |  Saturday

*/

//console.log(dia)

switch(dia) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
     case 6:
        console.log('Sábado')
        break

    default: 
        console.log('[ERRO] Dia inválido!')
        break

}