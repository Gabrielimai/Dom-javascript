
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

