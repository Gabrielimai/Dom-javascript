//Destructuring
const user = {
    name: "Gabriel",
    lastName: "Imai",
    age: 24,
  };
  
  const { name:vai, lastName, age } = user;
  
  console.log(`Me chamo ${vai} ${lastName}, e tenho ${age}.`);
  


//Spread operator
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };

console.log(a, b, rest);

const { one, two = 10 } = { one: 5, two: 99 }; //atribuir valores padrões

console.log(two);

// ################################################ Exercicios #################################

// 1. Acesse as propriedades "tamanhoDaBarba", "idade" e "familia" do objeto "viking" por meio do Destructuring, e logue-as no console.

const viking = {
  familia: "Lothbrok",
  tamanhoDaBarba: "enorme",
  idade: 30,
};

const { familia, tamanhoDaBarba, idade } = viking;
console.log(familia, tamanhoDaBarba, idade);

// 2. Acesse as propriedades "name" e "age" do objeto "usuário" por meio do Destructuring, renomeie-as para sua tradução em português, e logue-as no console.

const usuario = {
  name: "Jane Doe",
  age: 28,
};

const { name: nome, age: idade2 } = usuario;
console.log(nome, idade2);

// 3. Acesse, utilizando o Destructuring, todas as propriedades dentro dos objetos "dadosPessoais" e "dadosProfissionais" do objeto "piloto", e logue-as no console.

const piloto = {
  dadosPessoais: {
    nome: "Ayrton Senna",
    idade: 34,
  },
  dadosProfissionais: {
    categoria: "Fórmula 1",
    conquistas: "É o melhor de todos os tempos. =)",
  },
};

const { dadosPessoais:{nome: name, idade:age}, dadosProfissionais:{categoria,conquistas}} = piloto;

console.log(name, age,categoria,conquistas);

// 4. Assinale as propriedades "a" e "b" do objeto abaixo a duas variáveis, e distribua as restantes em uma.

const obj = { a: 10, b: 20, c: 30, d: 40 };
const { a: objA, b: objB, ...rest } = obj;
console.log(objA, objB, rest);
