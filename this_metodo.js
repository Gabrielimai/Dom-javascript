//Já no contexto de método não pega o global com o modo estrito
"use strict";

this.name = "jose";

const dev = {
  name: "Gabriel",
  sayMyName: function() {
    console.log(this.name);
  },
};
dev.sayMyName();

// ##################################################

const user = {
  prop: 100,
  f: function () {
    return this.prop; // O this está apontando para o obj user, e acessando a propriedade prop.
  },
};

console.log(user.f());
