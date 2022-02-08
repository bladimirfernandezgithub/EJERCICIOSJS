const enlaces = document.getElementsByTagName('a');
console.log("representa la cantidad de  enlaces de la página: ",enlaces.length);
console.log("Direcciona hacia el penúltimo enlace: ", enlaces[enlaces.length-2].href);
const parrafos = document.getElementsByTagName('p');
console.log("Número que representa los  enlaces del tercer párrafo:", parrafos[2].getElementsByTagName('a').length);