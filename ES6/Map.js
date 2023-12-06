const numeros = [1, 2, 3];

const multiplicaNumerosPorDois = numeros.map((i) => {
  return i * 2;
});

const usuario = [
  {
    nome: "Gabriel",
    idade: 24,
  },
  {
    nome: "Jose",
    idade: 33,
  },
];

const usuarioComIdadeMultiplicadaPorDois = usuario.map((item) => {
  return { ...item, idade: item.idade * 2 }; //retorna tudo que há no item menos a idade, e reasinalando a idade atual vezes 2
});

console.log(usuarioComIdadeMultiplicadaPorDois);

// ######################################### Exercicios ######################################################

// 1. Utilizando o .map, crie uma lista que contenha todos os valores da lista "numeros" multiplicados por dois, e logue-a no console.

const numeros = [10, 20, 30, 40, 50];

const multiplicaNumerosPorDois = numeros.map((i) => {
  return i * 2;
});

console.log(multiplicaNumerosPorDois);

// 2. Crie uma lista, usando o .map, baseando-se na lista "usuarios", que contenha a "idade" de cada usuário multiplicada por 2.

const usuarios = [
    { nome: "John", idade: 20 },
    { nome: "Jane", idade: 27 },
    { nome: "Doe", idade: 18 },
  ];
  
  const idadeMultiplicadaPor2 = usuarios.map((i) => {
    return { ...i, idade: i.idade * 2 };
  });
  
  console.log(idadeMultiplicadaPor2);

  // 3. Crie uma lista de strings, baseando-se na lista "pessoas", que diga se a pessoa pode ir ou não para a Matrix. Para ir, ela precisa ter uma idade maior que 18.
  const pessoas = [
    {
      nome: "Angelina Jolie",
      idade: 80,
    },
    {
      nome: "Eric Jones",
      idade: 2,
    },
    {
      nome: "Paris Hilton",
      idade: 5,
    },
    {
      nome: "Kayne West",
      idade: 16,
    },
    {
      nome: "Bob Ziroll",
      idade: 100,
    },
  ];
  
  const maiorDe18 = pessoas.map((i) => {
    if (i.idade >= 18) {
      return console.log(`${i.nome} tem ${i.idade} e pode ir para a Matrix`);
    } else {
      return console.log(`${i.nome} tem ${i.idade} e não tem idade sufuciente para ir para a Matrix`);
    }
  });
  
  console.log(maiorDe18);
  