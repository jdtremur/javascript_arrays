const lstNotas = [7, 5, 9, 8, 7.5, 4, 10, 9, 8];

let sumaNotas = 0;
lstNotas.forEach((nota, indice)=>{
    sumaNotas+=nota;
    console.log(indice);
})

const mediaAritmetica = sumaNotas/lstNotas.length;

console.log(`la media aritmetica es ${mediaAritmetica.toFixed(2)}`);