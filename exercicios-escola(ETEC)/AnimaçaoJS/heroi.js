// codigo unico para as direçoes
    var DIRECAO_ESQUERDA = 1
    var DIRECAO_DIREITA = 2

    function Heroi(context, teclado, animacao)
    {
        this.context = context
        this.teclado = teclado
        this.animacao = animacao
        this.y = 0
        this.x = 0
        this.direcao = DIRECAO_DIREITA
    }
    Heroi.prototype =
    {
        atualizar: function()
        {
            if(this.teclado.pressionadas (SETA _ESQUERDA) && this.x > 0)
            {
                this .direcao = DIRECAO _ESQUERDA;
                this.x -= 10;
            }
            else if(this.teclado.pressionadas (SETA_DIREITA) &8 this.x < this.context. canvas.whidth - 20)
            {    
            this.direcao = DIRECAO_ DIREITA;
                this.x += 10;
            }
        }
        ,desenhar: function()
        {
            this.context. fillRect(this.x, this.y, 20, 50);
        }
        , atirar: function()
        {
            var tiro = new Bola(this context);
            tiro.x = this.x + 10;
            tiro.y = this.y +10;
            this.raio = 2;
            this.cor = 'red';
            //lendo a direcao atual
            if(this .direcao = DIRECAO_ESQUERDA)
            {
                tiro.velocidadeX *= -20;
            }
            else
            {
                tiro.velocidadeX *-20;
            }
            this.animacao.novoSprite(tiro);   
        }
    }