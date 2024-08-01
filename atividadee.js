class Funcionario {
        constructor(nome, idade, cargo) {
            this.nome = nome;
            this.idade = idade;
            this.cargo = cargo;
        }
    
        seApresentar() {
            console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
        }
    
        trabalhar() {
            console.log(`${this.nome} está trabalhando.`);
        }
    }
    
    class Gerente extends Funcionario {
        constructor(nome, idade, cargo, departamento) {
            super(nome, idade, cargo);
            this.departamento = departamento;
        }
    
        gerenciar() {
            console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
        }
    }
    
    class Desenvolvedor extends Funcionario {
        constructor(nome, idade, cargo, linguagem) {
            super(nome, idade, cargo);
            this.linguagem = linguagem;
        }
    
        programar() {
            console.log(`${this.nome} está programando em ${this.linguagem}.`);
        }
    }
    
    // Criando instância de um Gerente
   // const gerente = new Gerente('Julio', 41, 'Infermeiro', 'UTI');
  //  gerente.seApresentar();
   // gerente.trabalhar();
  //  gerente.gerenciar();
    
    const gerente = new Gerente('Maria', 55, 'Tecnica de Enfermagem', 'Posto de Saúde');
    gerente.seApresentar();
    gerente.trabalhar();
    gerente.gerenciar();
    
    