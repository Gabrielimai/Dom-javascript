// function.call(this, a, b)
// Call do inglês chamar
// Retorna o this no contexto que eu enviar

// NOTA: call() e apply()  tem uma síntaxe indêntica. A diferença é que call() aceita uma lista de argumentos, enquanto apply() aceita um array de argumentos.

//O método Call() invoca uma função com dado valor "this", e argumentos passados individualmente.

const obj1 = {exemplo:"Exemplo1", mostraThis:function mostraCallExemplo(){
  console.log(this)
}}

obj1.mostraThis()


const obj2 = {exemplo2:"Exemplo2"}

//Executa a função mostraThis e chama (aponta) o this do obj2
obj1.mostraThis.call(obj2)

//################################################################################################################

this.name = "Camilla";

function sayMyName(age) {
  this.age = age;
  console.log(this.name, this.age);
}

const dev = {
  name: "joão",
};

sayMyName.call(this, 19);
sayMyName.call(dev, 18);

