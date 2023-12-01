// Usando o Destructuring em uma lista
const numeros = [2, 24, 390, 403];

const todosOsNumeros = ([primeiro, segundo, terceiro, quarto] = numeros);

console.log(todosOsNumeros);


//inverter as variáveis
let a = 1;
let b = 4;

[a, b] = [b, a];

console.log('a =', a)
console.log('b =', b)