// function.call(this, a, b)
// Call do inglês chamar
// Retorna o this no contexto que eu enviar

// "use strict";

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
