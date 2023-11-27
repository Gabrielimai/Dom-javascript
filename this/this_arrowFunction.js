// THIS NAS ARROW FUNCTIONS()=> //

// Nas arrow functions (funções de seta), o this é definido lexicalmente, isto é, seu valor é
// definido pelo contexto de execução onde está inserido. Em um código global. this assume o objeto global:
// Diferente das function, as arrows functions tem uma diferença de acessar seus this.

//CONTEXTO DE CRIAÇÃO: GLOBAL
const arrowFunctionThis1 = () => {
    console.log(this);
  };
  
  // CONTEXTO DE CRIAÇÃO: OBJETO // ERRADO
  const arrowFunctionThis2 = {
    prop: 150,
    arrowF: () => {
      console.log(this); //Para ligar o this dela ao objeto, é preciso coloca-la dentro de uma outra função.
    },
  };
  
  // CONTEXTO DE CRIAÇÃO: OBJETO // CORRETO
  const objt1 = {
    exemplo: "exemplo1",
    mostraThis: function () {
      const f = (() => this)(); // isso é uma IIFE ela é declarada e ao mesmo tempo chamada.
      console.log(f);
    },
  };
  
  arrowFunctionThis1();
  arrowFunctionThis2.arrowF();
  objt1.mostraThis();
  