const notas = [8, 7, 9, 6, 10];

let media = (notas[0]+notas[1]+notas[2]+notas[3]+notas[4])/notas.length;

console.log(media);
console.log(notas);
notas.pop();

media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length;
console.log(notas);
console.log(media);

notas.shift();
media = (notas[0]+notas[1]+notas[2])/notas.length;
console.log(notas);
console.log(media);
