//1- Forma de criar objetos
const pessoa = {
    nome: 'thiago',
    sobrenome: 'de Sá'
}
console.log(pessoa['sobrenome'])

//2- Forma de criar objetos

const funcionario = new Object();
funcionario.nome = "Karen"
funcionario.sobrenome = "Silva"

console.log(funcionario.nome)

//3- Forma de criar objetos

function criarPessoa(nome,sobrenome){
    return {nome,sobrenome}
}
const p1 = criarPessoa("Sarah", "Raquel")

const p2 = criarPessoa("jennifer", "Susy")

console.log(p1.nome)




function criarPessoa(nome, sobrenome, i) {
    return {
        nome,
        sobrenome,
        i,
        nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p3 = criarPessoa("Sarah", "Raquel", 11);
const p4 = criarPessoa("Jennifer", "Susy", 21);

console.log(p3.idade); // Correção para acessar nome
console.log(p3.sobrenome); // Correção para acessar sobrenome
console.log(p3.nomeCompleto()); // Exibe o nome completo




