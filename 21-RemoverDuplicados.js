const nombres = ['Julian', 'Maria', 'Julian', 'Andrea', 'Carlos', 'Maria'];
console.log(nombres);

//Filtramos los valores unicos con la clase Set y los asignamos a la variable valoresUnicos
const valoresUnicos = [...(new Set(nombres))];
console.log(valoresUnicos);
