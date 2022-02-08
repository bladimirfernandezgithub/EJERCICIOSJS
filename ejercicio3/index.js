const data = ["hola",2,5,"adios"];
var hola = data[0];
var adios = data[3];
var a = data[1];
var b = data[2];

console.log(hola);
//operadores comparativos
let OC = "Operadores Comparativos: ";
console.log(OC);

var mayorque = a>b;
var menorque = a<b;
var mayoroigualque = a>=b;
var menoroigualque= a<=b;
var igual= a === b;
var diferente= a != b;

console.log('2 es mayor que 5 ', mayorque);
console.log('2 es menor que 5 ', menorque);
console.log('2 es mayor o igual que 5 ', mayoroigualque);
console.log('2 es menor o igual que 5 ', menoroigualque);
console.log('2 es  igual  5 ', igual);
console.log('2 es diferente que 5 ', diferente);


//operadores aritmeticos

let OA = "Operadores Aritmeticos: ";
console.log(OA);
let suma = (data[1] + data[2]);
let resta = (data[1] - data[2])
let multiplicacion = (data[1] * data[2])
let division = (data[1] / data[2])
let Porcentaje = (data[1] % data[2])
console.log('la suma de 2 + 5 es: ',suma)
console.log('la resta de 2 - 5 es: ',resta)
console.log('la multiplicaion de 2 * 5 es: ',multiplicacion)
console.log('la division de 2 / 5 es: ',division)
console.log('el resto de  de 2 % 5 es: ',Porcentaje)

console.log(adios);
