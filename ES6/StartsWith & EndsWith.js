// StartsWith 
const texto = 'Ser ou não ser, eis a questão'

const comecaComSer = texto.startsWith('não ser', 7) //O 7 representa o index de início
console.log(comecaComSer);



// EndsWith
const terminaComQuestao = texto.endsWith('questão')
console.log(terminaComQuestao)

//   ######################### Exercicios ##############################
// 1. Guarde em uma variável se a string abaixo começa com "Meu", e logue-a no console.

const mensagem = "Olá, meu nome é John!";
const comecaComMeu = mensagem.startsWith("Meu");
console.log(comecaComMeu);

// 2. Guarde em uma variável se a string abaixo, a partir da posição 4, começa com "meu", e logue-a no console.

const mensagem2 = "Olá, meu nome é Jane!";
const comecaComMeu2 = mensagem2.startsWith("meu", 4);
console.log(comecaComMeu2);

// 3. Guarde em uma variável se a string abaixo termina com "Doe!", e logue-a no console.

const mensagem3 = 'Olá, meu nome é Doe!';
const terminaComDoe = mensagem3.endsWith('Doe!')
console.log(terminaComDoe);