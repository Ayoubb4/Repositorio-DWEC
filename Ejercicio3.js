/* 3- Crea una función que, dada una cadena de texto, devuelve una nueva cadena cambiando la primera letra de  cada palabra en mayúsculas. (3 puntos) 
 */
function MayusculaPrimeraLetra(texto) {
    let nuevaCadena = '';

    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];

        if (char == ' ' || char == '.') {
            nuevaCadena += char;
        } else if (char !== ' ') {
            nuevaCadena += char.toUpperCase(); 
        } else {
            nuevaCadena += char; 
        }
    }

    return nuevaCadena;
}

let texto = prompt ("Dame una serie de palabras");
console.log(MayusculaPrimeraLetra(texto));