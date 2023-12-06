const numeros = [1, 2, 3];

const multiplicaNumerosPorDois = numeros.map((i) => {
  return i * 2;
});

const usuario = [
  {
    nome: "Gabriel",
    idade: 24,
  },
  {
    nome: "Jose",
    idade: 33,
  },
];

const usuarioComIdadeMultiplicadaPorDois = usuario.map((item) => {
  return { ...item, idade: item.idade * 2 }; //retorna tudo que há no item menos a idade, e reasinalando a idade atual vezes 2
});

console.log(usuarioComIdadeMultiplicadaPorDois);
