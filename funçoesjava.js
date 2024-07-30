function multiplicar(x,y){
    return x * y
}

var a = multiplicar (9,9);
console.log(a)

var b = multiplicar (6,6);
console.log (b)




function somaValores (a, b = 2,c = 5){
    var total = a + b + c
    return total
}

var f = somaValores(8,4,5);
console.log(f)


var infoCal = function(a,b,c){
    return a + b + c;
}

console.log (infoCal(2,2,2))

const soma = (num1,num2) =>{
    return num1 + num2
}
console.log(soma(39,66))

var listaProdutos = ["leite", "arroz", "feijão"];
var listaMaiuscula = listaProdutos.map(primeiraEmMaiuscula);

function primeiraEmMaiuscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)

}
console.log(listaMaiuscula)