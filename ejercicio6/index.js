/* Iterando un array con el bucle for
const notas = [6,7,2,9,3,4,5,8,2];
let sum = 0;
for (let i = 0; i<notas.length; i++){
    sum += notas[i];
    console.log(sum);
}
*/
/*
const numero1 = 3;
const numero2 = 4;
const numero3 = 13;
const numero4 = 2;
const numero5 = 3;
const numero6 = -7;
function sumaNumeros(numero1,numero2){
    let resultado = numero1 + numero2;
    console.log('resultado', resultado);
}

sumaNumeros(numero1,numero2);
sumaNumeros(numero3,numero4);
sumaNumeros(numero5,numero6);
*/







// Funciones para strings

// length:calcula la longitud de una cadena de texo
/*const msj = 'Hola';
const numeroLetras = msj.length;
console.log(numeroLetras);*/

// concat(): Concatena varias cadenas de texto
/*
const msj = 'hola';
const mensaje= msj.concat(' mundillo');
console.log(mensaje);
*/

// toUpperCase ():Transforma todos los caracteres en mayuscula
/*
const msj = 'hola';
const msj2 = msj.toUpperCase(); 
console.log(msj2);
*/

// toLowerCase: Transforma todos los caracteres en minuscula
/*
const  msj = 'HoLA';
const  msj2 = msj.toLowerCase();
console.log(msj2);
*/

// chartAt(): obtiene el caracter de la posicion indicada
/*
const  msj = 'Hola';
let letra = msj.charAt (0);
let letrita = msj.charAt(3);
console.log (letra,letrita);
*/
// substring(inicio, fin): extrae una porción de una cadena de texto. El segundo  
//parámetro es opcional, si no se indica se devuelve entero
/*
const mensaje = 'Hola Mundo';
const porcion = mensaje.substring(2);
const porcion2= mensaje.substring(1,8);
console.log(porcion,porcion2);
*/

// split(separador): convierte una cadena de texto en un array de cadena de texto.
/*    const mensaje = "Hola Mundo, soy una cadena";
    const palabras = mensaje.split(" ");
    console.log(palabras);
*/


// FUNCIONES PARA ARRAY

//  length: calcula la longitud de un array.
/*
const vocales = ["a", "e", "i", "o" ,"u"];
const numVocales = vocales.length;
console.log(numVocales);
*/

//  concat(): concatena varios arrays.
/*
const array1 = [1,2,3];
const array2 = array1.concat([4,5,6]);
console.log(array2);
*/

// join(separador): une todos los elementos de un array para formar una cadena de texto
// es la funcion contratia a split()
/*
const palabras = ["hola", "mundo"]
const mensaje = palabras.join("-");
console.log(mensaje);
*/

//  pop(): elimina el último elemento del array.
/*
const array1 = [1,2,3];
array1.pop();
console.log(array1);
*/

// push(): añade un elemento al final del array.
/*
const array1 = [1,2,3];
array1.push(4);
console.log(array1);
*/

// shift(): elimina el primer elemento del array.
/*
const array1 = [1,2,3]
array1.shift();
console.log(array1);
*/

// unshift(): añade un elemento al inicio del array.
/*
const array1 = [1,2,3];
array1.unshift(5);
console.log(array1);
*/

// reverse(): modifica el array colocando sus elementos en el orden inverso al original.
/*
const array1= [1,2,3];
array1.reverse();
console.log(array1);
*/
//

