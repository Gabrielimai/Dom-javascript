//Some
const numeros = [2, 4, 6, 11];

const temNumeroMaiorDoQue10 = numeros.some((item) => {
  return item > 10;
});

console.log(temNumeroMaiorDoQue10)

//Every
const numeros2 = [1, 2, 3, 4, 5];

const todosSaoMaioresDoQue1 = numeros2.every((item) => {
  return item > 1;
});

console.log(todosSaoMaioresDoQue1);


// ##################################### EXERCICIOS ##########################################

// 1. Guarde em uma variável se algum valor da lista "numeros" é par, e logue-a no console.

const numeros = [1, 2, 3, 4, 5, 6];
const algumNumeroPar = numeros.some((numero) => {
  return numero % 2 === 0;
});

console.log(algumNumeroPar);

// 2. Guarde uma variável se alguma pessoa da lista "pessoas" é maior de idade, e logue-a no console.

const pessoas = [
    {
      nome: "Ragnar Lothbrok",
      idade: 30,
    },
    {
      nome: "Harvey Specter",
      idade: 41,
    },
    {
      nome: "John Doe",
      idade: 12,
    },
  ];
  
  const maiorDeIdade = pessoas.some((pessoa) => {
    return pessoa.idade > 18;
  });
  
  console.log(maiorDeIdade);

  
  // 3. Guarde em uma variável se todos os valores da lista "numeros2" é par, e logue-a no console.

const numeros2 = [1, 2, 3, 4, 5, 6];

const todosNumerosPares = numeros2.every((n) => {
  return n % 2 === 0;
});

console.log(todosNumerosPares);

// 4. Guarde em uma variável se todos os itens da "listaDeDesejos" está em estoque (quantidadeEstoque maior que 0).

const listaDeDesejos = [
    {
      titulo: "Tesla Model S",
      quantidadeEstoque: 0,
    },
    {
      titulo: "MacBook Pro",
      quantidadeEstoque: 10,
    },
    {
      titulo: "Carro de Fórmula 1",
      quantidadeEstoque: 1,
    },
  ];
  
  const temEmEstoque = listaDeDesejos.every((estoque) => {
    return estoque > 0;
  });
  
  console.log(temEmEstoque);