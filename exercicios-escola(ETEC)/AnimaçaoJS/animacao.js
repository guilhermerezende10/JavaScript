function Animacao(context)
{
    this.context = context
    this.sprites = []
    this.ligado = false
}
Animacao.prototype = 
{
    novoSprite: function(sprite)
    {
        this.sprites.push(sprite)
    }
    ligar: function()
    {
        this.ligado = true
        this.proximoFrame()
    }
    desligar: function()
    {
        this.ligado = false
    }
    proximoFrame: function()
    {
        // Posso continuar?
        if (! this.ligado) return

        // limpar a tela ou desenha um fundo
        this.LimparTela()

        //Atualizamos o estado dos sprites
        for(var i in this.sprites)
            this.sprites[i].atualizar()

        //Desenhamos os sprites
        for(var i in this.sprites)
            this.sprites[i].desenhar()
        
        // Chamamos o proximo ciclo
        var animacao = thisrequestAnimationFrame(function()
        {
            animacao.proximoFrame()
        })
    }
    LimparTela: function()
    {
        var ctx = this.context
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    }
}