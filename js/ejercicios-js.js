const edades = [    
    { id:37, valor: 1200},
    { id:26, valor: 2400},
    { id:25, valor: 3400}
];

//convertir estos elementos usando un map
const valores = edades.map(x => x.valor);
console.log(valores);