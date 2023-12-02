// //Spread Operator em Listas
// const numeros = [1, 2, 3];

// const numerosCom4e5 = [...numeros, 4, 5]; // adiciona o 4 e o 5 na lista
// console.log(numerosCom4e5);

// //Spread Operator para atribuir variáveis

// const [dez, vinte, ...resto] = [10, 20, 30, 40, 50]; // uso do ...Rest Operator
// console.log(resto);

// // #################################  Exercicios  ###########################################################

// // 1. Assinale uma variável pra cada valor na lista "numeros" utilizando Destructuring, e logue-as no console.

const numeros = [1, 2, 3, 4, 5];

const osNumeros = [primeiro, segundo, terceiro, quarto, quinto] = numeros;

console.log(osNumeros);     //@@@

// // *******************************************************************************************
// // 2. Inverta os valores das variáveis "a" e "b". Transforme o valor da variável "a" no valor da variável "b" e vice-versa, e logue-as no console.

let a = 5;
let b = 10;

let inverteNumeros = [a, b] = [b, a] ;

console.log(inverteNumeros);     //@@@

// // *******************************************************************************************
// 3. Crie uma nova lista baseando-se na "melhoresSeriesDoMundo" adicionando dois novos valores a ela utilizando o Spread Operator, e logue-a no console.

const melhoresSeriesDoMundo = ["GOT", "Breaking Bad", "Vikings"];
let melhoresSeriesDoMundo2 = [...melhoresSeriesDoMundo,"Game of Thrones","The Walking Dead",];

console.log(melhoresSeriesDoMundo2);  //@@

// *******************************************************************************************

// 4. Assinale os dois primeiros valores da lista "sobremesas" a duas variáveis, e distribua o restante em apenas uma, utilizando o Spread Operator, e logue-as no console.

const sobremesas = [
    "Sorvete",
    "Petit Gateau",
    "Açai",
    "Pudim",
    "Mousse de Maracujá",
  ];
  
  const [primeiro, segundo, ...rest] = [  "Sorvete","Petit Gateau","Açai","Pudim","Mousse de Maracujá",];
  console.log([primeiro, segundo, rest]);  //@@@@
  