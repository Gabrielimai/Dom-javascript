//Já no contexto de método não pega o global
const user = {
    name: "josé",
    sayMyName: function () {
      console.log(this.name);
    },
  };
  
  user.sayMyName();
  console.log(window.name);
  