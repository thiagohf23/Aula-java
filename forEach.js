var a = [10, 20, 30, 40, 50, 60,];


a.forEach(valor => console.log(valor));
var tot = 100;
a.forEach(valor =>{
    tot * valor;
})

console.log(tot);

var carro = [{modelo:"Uno", marca: "Fiat", ano:"2012"},
{modelo:"Corsa" , marca:"Chevrolet", ano:"2020"}]

for (let caracteristicas in carro){
    console.log(carro[caracteristicas]);//pegar todas as propriedades da variavel
}

for (let c of carro){ //pegar apenas uma propriedade
    console.log(c.ano)

}


