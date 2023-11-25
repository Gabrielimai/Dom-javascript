function Ventilador(velMax) {
  this.velocidadeMaxima = velMax;
  this.ligado = false;
}

const ventilador1 = new Ventilador(3);

ventilador1.cor = "branco";
ventilador1.modelo = "Mundial";

ventilador1.ligaDesliga = function() {
    if(this.ligado){
        this.ligado = false
    }else{
        this.ligado = true
    }
}

console.log(ventilador1)