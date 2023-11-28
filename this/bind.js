// O MÉTODO BIND() PEGA O THIS, E LIGA A UMA NOVA FUNÇÃO QUE É CRIADA ASSIM QUE FOR CHAMADO.

function thisBindExemplo(){
    console.log(this);
}

const obj = { exemplo: "Exemplo"}

// O this dessa função vira referência ao obj
thisBindExemplo = thisBindExemplo.bind(obj);

thisBindExemplo()

// Igual a cima!
const obj2 = { exemplo: "Exemplo 2", thisBindExemplo: function(){console.log(this)}}

obj2.thisBindExemplo()