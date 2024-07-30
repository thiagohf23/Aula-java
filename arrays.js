var valores = [8,1,7,2,9];

console.log("Array invertido" + valores.reverse())

console.log (valores [3]);

for (var pos = 0 ; pos < valores.length; pos++){
    console.log ("Posição: " + pos + "Valor" + valores[pos]);
}

var arr1 = [1,2,3,4,6]
console.log(arr1.join(' ')); //adiciona simbolos

var retirado = arr1.shift(); //retira o primeiro elemento do array
console.log(retirado)

console.log(arr1);

console.log("Posição do numero 3:" + arr1.indexOf(3));

arr1.push(7); //acrescenta no final

console.log(arr1)

arr1.pop();

console.log(arr1); //remove no final

var arr2 = [1,2,3,4,5,""]

arr2.splice(2,3);

console.log(arr2);

var nomes = ["Maria","Thiago","Lucas","Thais"]; //Substituição de arrays com o slice
var novos = nomes.splice(1,2,"Judas", "Ronaldo");
console.log(nomes);


var cidades = ["Brasil","Peru","Paris"];
cidades.unshift("Gurupi");//Cria um elemento no inicio
console.log(cidades);

var piranhas = ["Rafaella","Trevosa","Bruxa","Alerquina","Monica"];
piranhas.unshift("Manuella");
console.log(piranhas); // ok

var piranhas = piranhas.pop();
console.log(piranhas.pop);
console.log(piranhas); //ok

var carros = ["honda","civic","corola"];
carros.splice(2,2,"Ferrari");
console.log(carros); //ok

var dia = ["terça","quarta","quinta"];
dia.unshift("segunda");//OK
console.log(dia);

dia.push("sexta","Sabado","Domingo");
console.log(dia);
console.log("ATIVIDADES FINALIZADAS...");

var dogs = ["rogerin", "bolinha","rex", "belinha"];
var racas = ["pitbull", "doberman"];
var dogs1 = dogs.slice(1,3); //nao muda o original,diferente do splice que mdua
 
console.log(dogs);
console.log(dogs1);

var donos = dogs.concat(racas);//ajunda vareaveis

console.log(donos);


var mesess = ["Janeiro" , "Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];


// Array com os nomes dos meses
const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril",
    "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"
];

// Imprimindo os meses e sua separação em semestres
console.log("Meses do Ano:");
meses.forEach((mes, index) => {
    console.log(`${index + 1}. ${mes}`);
});

console.log("\nSeparação dos Meses por Semestre:");

// Separação do 1º semestre
console.log("\n1º Semestre:");
for (let i = 0; i < 6; i++) {
    console.log(meses[i]);
}

// Separação do 2º semestre
console.log("\n2º Semestre:");
for (let i = 6; i < 12; i++) {
    console.log(meses[i]);
}













