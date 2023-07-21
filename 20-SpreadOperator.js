const lstSecA = [5, 6, 8, 9, 7.5];
console.log(lstSecA);

//Manera correcta de clonar un arregle sin afectar el arreglo original
const lstClon = [...lstSecA];
//Arreglo clonado sin modificar
console.log(lstClon);

//Arreglo clonado modificado agragando una nota de 9.5
lstClon.push(9.5);
console.log(lstClon);

console.log(lstSecA);