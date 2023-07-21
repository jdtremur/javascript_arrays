const lstNotasYAlumnos = [['fernanda', 'sofia', 'nini', 'fernando', 'felipe'],[9,8.5,9.5,10,7]]

const nombreAlumno = 'nini';

//Con condicional larga
/*if(lstNotasYAlumnos[0].includes(nombreAlumno)){
    console.log(`Alumno encontrado, en el indice ${lstNotasYAlumnos.indexOf(nombreAlumno)}`);
}else{
    console.log('Alumno no encontrado');
}*/

//Con condicional larga
(lstNotasYAlumnos[0].includes(nombreAlumno))? console.log(`Alumno encontrado, en el indice ${lstNotasYAlumnos.indexOf(nombreAlumno)}`):console.log('Alumno no encontrado');