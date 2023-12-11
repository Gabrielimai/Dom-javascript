const foguetes = [
    { pais: "Russia", lancamentos: 32 },
    { pais: "US", lancamentos: 23 },
    { pais: "China", lancamentos: 16 },
    { pais: "Brasil", lancamentos: 7 },
    { pais: "India", lancamentos: 4 },
    { pais: "Japão", lancamentos: 3 },
  ];
  
  const totalDeLancamentos = foguetes.reduce((acumulador, foguete) => {
    return acumulador + foguete.lancamentos;
  }, 0);
  
  console.log(totalDeLancamentos)