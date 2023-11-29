"Hello world!".split(""); //É o mesmo que abaixo
//Cria uma string
const str1 = String("Hello world!");
const str2 = String("Let`s go!");
console.log(`str1 ${str1}
str2 ${str2}`);

console.log(`str1 divida => ${str1.split("")}
str2 divida => ${str2.split("")}`);

const str2Convertiodo = str2.valueOf(); //Usamos o valueOf() para sabermos o valor primitivo
console.log(typeof str2Convertiodo);
