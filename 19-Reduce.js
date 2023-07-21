const lstSecA = [5, 6, 8, 9, 7.5];
const lstSecB = [6.5, 8, 9.5, 4.5, 7];
const lstSecC = [10, 7, 8, 9.2, 8.3];

const sumatoria = (lst) => lst.reduce((acumulador,nota)=>acumulador+nota);

const MediaAritmeticaNotas = (sumatoria(lstSecA)+sumatoria(lstSecB)+sumatoria(lstSecC))/(lstSecA.length+lstSecB.length+lstSecC.length);

console.log(MediaAritmeticaNotas.toFixed(2));