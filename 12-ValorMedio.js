const lstNotas = [7, 5, 9, 8, 7.5, 4, 10, 9, 8];

let sumeNotas = 0;

for(let i = 0; i<lstNotas.length; i++){
    sumeNotas+=lstNotas[i];
}

const mediaAritmetica = sumeNotas/lstNotas.length

console.log(`El valor de la media aritmetica es ${mediaAritmetica.toFixed(2)}`);