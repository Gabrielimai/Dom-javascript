// escope Global
this.name = "Gabriel";

function sayMyName() {
  // Escope local
  console.log(this.name);
}

sayMyName();

const user = {
  name: "josé",
  sayMyName: function () {
    console.log(this.name);
  },
};

user.sayMyName();
console.log(window.name);
