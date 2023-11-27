// escope Global
this.name = "Gabriel";

function sayMyName() {
  // Escope local

  console.log(this.name); // sem o estrito o contexto de função vai pagar do global
}

sayMyName();

// Quando não estiver no modo estrito o this apontará para o objeto global

function thisNaoEstrito() {
  console.log(this);
}

function thisEstrito() {
  "use strict";
  console.log(this);
}

thisNaoEstrito();
thisEstrito();
