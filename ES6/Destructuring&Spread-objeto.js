//Destructuring
const user = {
    name: "Gabriel",
    lastName: "Imai",
    age: 24,
  };
  
  const { name:vai, lastName, age } = user;
  
  console.log(`Me chamo ${vai} ${lastName}, e tenho ${age}.`);
  


//Spread operator
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };

console.log(a, b, rest);

const { one, two = 10 } = { one: 5, two: 99 }; //atribuir valores padrões

console.log(two);
