const carro = function  (modelo, ano) {
    this.modelo = modelo
    this.ano = ano
    return `Carro: ${modelo}, Ano: ${ano}`
  }
  
  const carro1 = new carro('Ferrari', 1998)
  
  console.log(carro1.modelo, carro1.ano)
  
  

