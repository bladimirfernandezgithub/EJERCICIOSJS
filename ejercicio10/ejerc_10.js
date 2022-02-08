const meses = ['enero ','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const mesesaño = meses.filter(function(mes) {
    return mes.length>7
});

var total = mesesaño.length 
console.log(mesesaño, 'la cantidad de meses que cumplen con la condicion de letras < 7 son: ', total );




