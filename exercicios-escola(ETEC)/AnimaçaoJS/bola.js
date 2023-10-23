function Bola(context)
{
    this.context = context
    this.x = 0
    this.y = 0
    this.velocidadeX = 0
    this.velocidadeY = 0

    // Atributos de desenho padrão
    this.cor = 'black'
    this.raio = 10
}
Bola.prototype =
{
    atualizar: function()
    {
        var ctx = this.context
        this.x += this.velocidadeX
        this.y += this.velocidadeY
    }
    ,desenhar: function()
    {
        var ctx = this.context
        
        // Guardar config atuais do contexto
        ctx.save()
        
        // configurar o contexto de acordo com a bola
        ctx.fillStyle = this.cor
        
        // Desenhar
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2, false)
        ctx.fill()

        // Voltar às configurações anteriores
        ctx.restore()
    }
}