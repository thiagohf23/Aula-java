var cidade = "Gurupi";

if (cidade != "Gurupi") {
    console.log("Você não é de Gurupi");
} else {
    console.log("Você é Gurupiense");
}

var idade = 22;

if (idade < 16) {
    console.log("Não vota");
} else if (idade < 18 || idade >= 65) {
    console.log("Voto opcional");
} else {
    console.log("Voto obrigatório");
}

var diasem = 2;

switch(diasem){
    case 1:
        console.log("Segunda-Feira");
        break;
    case 2:
        console.log("Terça-Feira")
        break;
    case 3:
        console.log("Quarta-Feira")
        break;
    case 4:
        console.log("Quinta-Feira")
        break;
    case 5:
        console.log("Sexta-Feira") 
    defalt:
        console.log("Este dia da semana não existe!")
}


