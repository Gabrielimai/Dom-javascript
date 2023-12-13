//Some
const numeros = [2, 4, 6, 11];

const temNumeroMaiorDoQue10 = numeros.some((item) => {
  return item > 10;
});

// console.log(temNumeroMaiorDoQue10)

//Every
const numeros2 = [1, 2, 3, 4, 5];

const todosSaoMaioresDoQue1 = numeros2.every((item) => {
  return item > 1;
});

console.log(todosSaoMaioresDoQue1);
