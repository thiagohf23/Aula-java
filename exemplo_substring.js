var s = "JavaScript e Python"

var pos1 = s.indexOf("Python")

var novastring = s.substring(13,19)
console.log(novastring)

var frase = "Olá mundo"
if(frase.startsWith("Olá")){
    let sub = frase.substring(4)
    let novastring = sub.replace("mundo", "pessoal")
    let novastringMaiuscula = novastring.toUpperCase();
    console.log(novastringMaiuscula) 
}