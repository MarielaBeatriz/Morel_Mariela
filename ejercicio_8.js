vocales = ["a", "e", "i", "o", "u"];
 texto = prompt("Introduce un texto");
 textomin = texto.toLowerCase();
 posicion = 0;
 parar = false;

for (var i = 0; i < textomin.length; i++) { 
    for (var j = 0; j < vocales.length; j++) {
        
        if (vocales[j] == textomin.charAt(i)) {
            
            posicion = i;
            parar = true; 
            break;
        }
    }  
    if (parar) {
        break;
    }
}
document.write((vocales[j]),"&nbsp;es la primera vocal está en la posición ", texto.indexOf(vocales[j]));
