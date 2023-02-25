function carregar(){

var msg = window.document.querySelector('#msg')
var img = window.document.querySelector('#img')
var data = new Date()
var bom = window.document.querySelector('#bom')
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora <12) {

    bom.innerHTML='Bom dia'
    img.src='Bomdia.png'
    
}
else if(hora >=12 && hora <=19){

    bom.innerHTML='Boa tarde'
    img.src='Boatarde.png'
    

}
else{
    bom.innerHTML='Boa noite'
    img.src = 'Boanoite.png'}

}