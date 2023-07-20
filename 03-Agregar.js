const notas = [9, 8, 6];

//Agragando elementos al final
notas.push(10);
let media = (notas[0]+notas[1]+notas[2]+notas[3])/notas.length;
console.log(media);

notas.unshift(9);
media = (notas[0]+notas[1]+notas[2]+notas[3]+notas[4])/notas.length;
console.log(media);