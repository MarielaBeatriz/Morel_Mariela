 //Crear un programa que recibe 5 (cinco) notas de un alumno, las mismas deben ser ingresadas por el
//usuario y ser naturales < 11. Debe calcular el promedio e imprimir en pantalla si el valor de media es < 5
//Reprobado ”, entre 6 y 8 Aprobado ” y si es mayor a 8 Sobresaliente

let i  = 0
let notas=[];
let suma = 0;

while (i < 5) {
let notas = prompt(" ingrese la nota "  );
if(notas <= 0 && notas < 11) {
    notas[i] = notas 
    suma += notas[i];
    i++;

} else { 
    alert("nota inavalida, por favor ingrese otro valor");
}
    }
    document.write(suma+"</br>");
    let promedio = (suma/notas.length);

if (promedio <= 5){
    document.write("reprobado");

} else if (promedio >5 && promedio <= 8){
    document.write("aprobado");
} else {
    document.write("sobresaliente")
}

    document.write(promedio);

    
