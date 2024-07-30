var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var num = numeros.map(function(valor){
    return valor * 6;

});

console.log(num);

var funcionarios = [
    {nome: "Davi", idade: 62},
    {nome: "lucas", idade: 22},
    {nome: "geonava", idade: 18},
    {nome: "manu", idade: 25},
]

nomes = funcionarios.map(pessoa => pessoa.nome);
console.log (nomes);