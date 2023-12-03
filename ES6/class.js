const usuario = {
    login() {
      console.log(`${this.nome} fez login!`);
    },
    logout() {
      console.log(`${this.nome} fez logout`);
    },
  };
  
  // criando o obj acima com class
  
  class Usuario {
      // Definindo uma função construtora
    constructor(nome, idade) {
      // Atributos do objeto Usuario
      this.nome = nome;
      this.idade = idade;
    }
    login() {
        console.log(`${this.nome} fez login!`);
      }
      logout() {
          console.log(`${this.nome} fez logout`);
      }
      static sayHello(){
        console.log('Olá eu sou um metodo estático!')
      }
  }
  
  Usuario.sayHello()
  
  
  //Usando 'new' para criar uma instância do objeto Usuario, e podemos criar quantos obj quiser
  const usuario1 = new Usuario("Gabriel Imai", 24);
  const usuario2 = new Usuario("Letica Andrade", 20);
  
  console.log(usuario1);
  usuario1.login()
  console.log(usuario2);
  usuario2.logout()
  