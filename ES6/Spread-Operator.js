//Spread Operator em Listas
const numeros = [1, 2, 3];

const numerosCom4e5 = [...numeros, 4, 5]; // adiciona o 4 e o 5 na lista
console.log(numerosCom4e5);

//Spread Operator para atribuir variáveis

const [dez, vinte, ...resto] = [10, 20, 30, 40, 50]; // uso do ...Rest Operator
console.log(resto)