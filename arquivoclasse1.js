 class DispositivosEletronicos{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log("Já esta ligado")
            return
        }
        this.ligado = true;
    }


}
class SmartPhone extends DispositivosEletronicos{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
            
    }
}

var s1 = new SmartPhone ("IPHONE", "Rosa", "11");
console.log(s1);
s1.ligar();
s1.ligar();
