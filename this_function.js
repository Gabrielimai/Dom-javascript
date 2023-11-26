
// escope Global
this.name = "Gabriel";

function sayMyName() {
  // Escope local

  console.log(this.name); // sem o estrito o contexto de função vai pagar do global
}

sayMyName();
