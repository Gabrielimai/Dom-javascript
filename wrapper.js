"Hello world!".split("");

//Cria uma string
const str1 = String("Hello world!");
const str2 = String("Let`s go!");
console.log(`str1 ${str1}
str2 ${str2}`);

console.log(`str1 divida => ${str1.split("")}
str2 divida => ${str2.split("")}`);

const str2Convertiodo = str2.valueOf(); //Usamos o valueOf() para sabermos o valor primitivo
console.log(typeof str2Convertiodo);

// ########################################################################################################################

//Cria um Número
const num1 = Number("1"); //converte de string para number
const num2 = new Number("2");

console.log(`num1 => ${num1}
num2 => ${num2}`);

console.log(`num1 com duas casas decimais ${num1.toFixed(2)}
num2 com 3 casas decimais ${num2.toFixed(3)}`)


const converteStringParaNumber = num1.valueOf()
console.log(`O tipo é um ${typeof converteStringParaNumber}`);