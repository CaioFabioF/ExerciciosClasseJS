// Classe Funcionário: Implemente a classe Funcionário. Um empregado tem um nome (um string) e um salário(um double). 
// Escreva um construtor com dois parâmetros (nome e salário) e métodos para devolver nome e salário. Escreva um pequeno programa que teste sua classe.
// Aprimore a classe do exercício anterior para adicionar o método aumentarSalario (porcentualDeAumento) que aumente o salário do funcionário em uma certa porcentagem.

class Funcionario{
    constructor(nome,salario){
        this.nome = nome
        this.salario = salario
    }
    mostrarNome(){
        console.log(`O seu nome é ${this.nome}`)
    }
    mostrarSalario(){
        console.log(`O seu salário é ${this.salario}`)
    }
    aumentarSalario(aumento){
        let aumentoSalario = (aumento/100) * this.salario
        this.salario += aumentoSalario
        console.log(`O seu novo salário é ${this.salario}`)
    }
}

const Caio = new Funcionario("Caio Fábio", 4000)
console.log(Caio)
Caio.aumentarSalario(15)