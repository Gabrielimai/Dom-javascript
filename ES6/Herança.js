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
  