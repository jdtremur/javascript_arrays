const alumnos = ['Maria', 'Andres', 'Fernanda'];

//forEach declarando la funcion
console.log('forEach declarando la funcion')
alumnos.forEach(function(nombre) {
    console.log(nombre);
})
console.log('');

//forEach con arrown function
console.log('forEach con arrown function'); 
alumnos.forEach(nombre=>console.log(nombre));
console.log('');

//forEach con funcion callback
console.log('forEach con funcion callback')
function imprimir(nombre){
    console.log(nombre);
}

alumnos.forEach(imprimir);//Nota: solo se debe llamar la referencia osea solo el nombre sin los parentesis