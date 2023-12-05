class Animal {
    constructor(name) {
      this.name = name;
    }
    falar() {
      console.log(`${this.name} fez um barulho!`);
    }
  }
  //Pega a classe cachorro e extende(herda) da Animal
  class Cachorro extends Animal {
    constructor(name) {
      super(name); //vai chamar o constructor da classe Animal
    }
    falar() {
      console.log(`${this.name} látiu!`);
    }
    latir() {
      console.log(`${this.name} fez AoAo!!`);
    }
  }
  
  const cachorro = new Cachorro("Simba");
  cachorro.latir();
  
  const animal = new Animal("Simba animal");
  animal.falar();
  
// ############################ Exercicios ##########################################################

  // 2. Crie uma classe chamada "Viking", derivada da classe "Guerreiro" criada acima.
// Sobrescreva o método "lutar", que agora logará uma mensagem dizendo "O viking {nome},
// de {idade} anos está lutando em nome de Odin!"

// Crie também, na classe "Viking" um método chamado "lutarComMartelo", que logue uma mensagem dizendo "O viking {nome}, de {idade} anos está lutando com seu martelo no nome de Thor!"
  class Guerreiro {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
    lutar() {
      console.log(
        `O guerreiro ${this.nome}, de ${this.idade} anos está lutando!`
      );
    }
  }
  
  const guerreiro1 = new Guerreiro("Thor", 200);
  
  class Viking extends Guerreiro {
    constructor(nome, idade) {
      super(nome, idade);
      // super(idade);
    }
    grito() {
      console.log(
        `O viking ${this.nome}, de ${this.idade} anos está lutando em nome de Odin!`
      );
    }
    lutarComMartelo() {
      console.log(
        `O viking ${this.nome}, de ${this.idade} anos está lutando com seu martelo no nome de Thor!`
      );
    }
  }
  const viking = new Viking("Thor", 200);
  viking.lutarComMartelo();
  