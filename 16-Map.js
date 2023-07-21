const lstNotas = [10, 9, 7.5, 8, 6, 4, 5];

const notasNuevas = lstNotas.map((nota)=>(nota/2)<3 ? 3:nota/2);
console.log(notasNuevas);