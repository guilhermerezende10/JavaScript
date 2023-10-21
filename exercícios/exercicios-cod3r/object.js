let amigo = {nome:'Pedrola', sexo:'M', peso:892, emagrecer(p){ 
    console.log('Vai uma batatinha, bola de pilates?')
    this.peso += p
} }
amigo.emagrecer(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)