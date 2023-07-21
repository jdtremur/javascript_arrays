const lstNotas = [7, 5, 9, 8, 7.5, 4, 10, 9, 8];

let sumaNotas = 0;

for(let nota of lstNotas){
    sumaNotas+=nota;
}

const mediaAritmetica = sumaNotas/lstNotas.length;

console.log(`La media aritmetica de las notas es ${mediaAritmetica.toFixed(2)}`);
