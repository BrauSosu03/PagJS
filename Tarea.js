let nombre = prompt("Ingresa tu nombre: ");
let primerApellido = prompt ("Ingresa tu primer apellido: ");
let segundoApellido = prompt ("Ingresa tu segundo apellido: ");
let peso = prompt ("Ingresa tu peso (kg): ");
let estatura = prompt ("Ingresa tu estatura (m): ");
let nacionalidad = prompt ("Ingresa tu nacionalidad: ");
let estaturaCuadrado = parseFloat(estatura) * parseFloat(estatura);
let imc = parseInt(peso) / parseFloat(estaturaCuadrado);

console.log("Tu nombre completo es: " + nombre + " " + primerApellido + " " + segundoApellido);
console.log("Tu peso es " + peso);
console.log("Tu estatura es: " + estatura);
console.log("Tu nacionalidad es: " + nacionalidad);
console.log("Tu IMC es: " + imc);

//console.log(typeof imc);
//Prueba gitbash
