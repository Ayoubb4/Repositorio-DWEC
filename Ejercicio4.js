function mcm(a, b) {
    const mcd = (x, y) => y == 0 ? x : mcd(y, x % y);
    return (a * b) / mcd(a, b);
}

let entrada = prompt("Introduce nº separados por comas:");
let numeros = entrada.split(",");
//convierte en nº reales de string del array a nº real
for (let i = 0; i < numeros.length; i++) {
    numeros[i] = parseInt(numeros[i]);
}

let resultado = numeros.reduce((acc, num) => mcm(acc, num));

alert("El MCM de los números es: " + resultado);
