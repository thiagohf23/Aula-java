var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var resultado = numeros.filter(item => item %2 == 0);
console.log(resultado);


var numerosFiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
);

console.log(numerosFiltrados);

function buscarValores(valor){
    return valor >5;
}
var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);

var r1 = numeros.filter((valor)=>{
    return valor > 5;
} );

console.log(r1);

var r2 = numeros.filter(valor => valor > 5);

console.log(r2);

var funcionarios = [
    {nome: "Davi", idade: 62},
    {nome: "lucas", idade: 22},
    {nome: "geonava", idade: 18},
    {nome: "manu", idade: 25},
]

var pessoasListagem = funcionarios.filter(
    function(valor){
        return valor.nome.length > 5 
    }
)
console.log(pessoasListagem);

