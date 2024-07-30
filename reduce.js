
//USANDO O FOR
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var total = 0;
    for(var i = 0; i < numeros.length;i++){
        total += numeros[i];
    }

    console.log(total);

//USANDO O REDUCE

var tot = numeros.reduce(function(total,numero){
    return total + numeros;
},0);

console.log(tot);