// Find
const pessoas = [
    {
        nome: 'John', idade: 18,
    },
    {
        nome: 'Jane', idade: 20,
    },
    {
        nome: 'Jane', idade: 24,
    },
]

const john = pessoas.find((item)=>{
    return item.nome === 'John'
})

console.log(john);

//FindIndex
const johnIndex = pessoas.findIndex((item)=>{
    return item.nome === 'John'
})

console.log(johnIndex);

// ############################ Exercicios ##########################################################
// 1. Encontre na lista abaixo o objeto que tenha o valor "Japan" como "pais", guarde-o em uma variável e logue-a no console.

const foguetes = [
    { pais: "Russia", lancamentos: 32 },
    { pais: "US", lancamentos: 23 },
    { pais: "China", lancamentos: 16 },
    { pais: "Europe", lancamentos: 7 },
    { pais: "India", lancamentos: 4 },
    { pais: "Japan", lancamentos: 3 }
  ]

  const japan = foguetes.find((item)=>{
    return item.pais === 'Japan'
  })

  console.log(japan);

  
// 2. Encontre, na lista abaixo, a posição que se encontra o item com o "titulo" igual a "Carro de Fórmula 1", guarde-a em uma variável e logue-a no console.

const listaDeDesejos = [
	{
		titulo: "Tesla Model S",
		quantidadeEstoque: 0,
	},
	{
		titulo: "MacBook Pro",
		quantidadeEstoque: 10,
	},
	{
		titulo: "Carro de Fórmula 1",
		quantidadeEstoque: 1,
	},
];

const formula1 = listaDeDesejos.findIndex((f1)=>{
    return f1.titulo === "Carro de Fórmula 1"
})

console.log(formula1);