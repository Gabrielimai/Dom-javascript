
const numeros = [1, 20, 30, 4, 10, 17];

const numerosMaiorQue10 = numeros.filter((numero) => {
  return numero > 10;
});

console.log(numerosMaiorQue10);


const usuarios = [
    {
      nome: "Steve jobs",
      idade: 17,
    },
    {
      nome: "Elon Musk",
      idade: 37,
    },
    {
      nome: "jeff Bezos",
      idade: 56,
    },
  ];
  
  const usuariosMaioresDeIdade = usuarios.filter((idade)=>{
      if(idade.idade >= 18){
          console.log(`O Usuários ${idade.nome} é maior de idade pois tem ${idade.idade} anos`);
      }else{
          console.log(`Desculpe, ${idade.nome} mas você não tem idade suficiente`)
      }
  })
  
  console.log(usuariosMaioresDeIdade);

//   ######################################################### Exercicios ########################################################

// 1. Crie uma lista que contenha apenas os valores que são maiores que 5 da lista "numeros".

const numeros = [3, 6, 8, 2];

const numerosMaioresQue5 = numeros.filter((numero) => {
  return numero > 5;
});

console.log(numerosMaioresQue5);


// 2. Crie uma lista que contenha apenas os valores pares da lista "numeros2".

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8];

const numerosPares = numeros2.filter((par) => {
  return par % 2 === 0;
});

console.log(numerosPares);
// 3. Crie uma lista que contenha apenas as pessoas que têm idade o suficiente pra fazer parte da Matrix (a idade mínima é 18 anos), e logue-a no console.

const pessoas = [
    { nome: "Angelina Jolie", idade: 80 },
    { nome: "Eric Jones", idade: 2 },
    { nome: "Paris Hilton", idade: 5 },
    { nome: "Kayne West", idade: 16 },
    { nome: "Bob Ziroll", idade: 100 },
  ];
  
  const maiorDeIdade = pessoas.filter((idade) => {
    return idade.idade >= 18;
  });
  
  console.log(maiorDeIdade)
  