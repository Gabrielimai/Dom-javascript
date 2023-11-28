// O método apply() chama uma função com um dado valor "this" e argumentos providos como um array (ou objeto parecido com um array)

const obj1 = {exemplo:"Exemplo1", mostraThis:function mostraCallExemplo( a, b, c){
  console.log(this)
}}

obj1.mostraThis()


const obj2 = {exemplo2:"Exemplo2"}

//Executa a função mostraThis e chama (aponta) o this do obj2
obj1.mostraThis.apply(obj2, [1, 3, 6])


//################################################################################################


"user strict";

 this.name = "Camilla";
 this.age = 25;

 function sayMyName(age) {
   this.age = arguments[0];
   this.likes = arguments[1];
   this.clother = arguments[2];
   console.log(this.name, this.age, this.likes, this.clother);
 }

 const dev = {
   name: "joão",
 };

 sayMyName.apply(this, [18, "Abacate", "Camiseta long-line" ]);

// ################################################################################################################################

function multiply() {
  const arg = Array.from(arguments);
  return arg.reduce((accumulator, item) => {
    return accumulator * item;
  }, 1);
}

const total = multiply.apply(this, [2, 2, 3]);
console.log(total);
