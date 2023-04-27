const player = {
    name: 'Cloud',
    hp: 100,
    mp: 0,
    printStatus() {
      console.log(`${this.name} tem ${this.hp} de HP e ${this.mp} de MP.`)
    }
  }

player.printStatus()

const carro = function  (modelo, ano) {
    this.modelo = modelo
    this.ano = ano
    return `Carro: ${modelo}, Ano: ${ano}`
  }
  
  const carro1 = new carro('Ferrari', 1998)
  
  console.log(carro1.modelo, carro1.ano)
  