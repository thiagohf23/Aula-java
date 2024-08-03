var nome = ("Thiago Carvalho");
var x = nome.length;
console.log(x);

resultado = x > 5 ? "Obrigado" : "Por favor preencha seu nome completo";

console.log(resultado);

var res = nome.toLocaleUpperCase();
console.log(res);

var jogo = "Eu serei um otimo Programador";
var posicao = jogo.indexOf("Programador");
console.log(posicao);

var finalname = jogo.slice(12,17);
console.log(finalname); 

var val = jogo.includes("um");
console.log(val);

var srt1 = "Bom";
var srt2 = " Dia";

var srt3 = srt1.concat(srt2);
console.log(srt3);


var frase = "       Olá vc esta aprendendo Javascrupt           ";
console.log(frase.trim());

var num = "1,2,3,4,5,6,7,8";
var arr = num.split("|");
console.log(arr);