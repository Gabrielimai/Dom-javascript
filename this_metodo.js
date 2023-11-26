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
