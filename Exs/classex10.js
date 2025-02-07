// Classe Conta de Investimento: Faça uma classe contaInvestimento que seja semelhante a classe contaBancaria, com a diferença de que se adicione um atributo taxaJuros. Forneça um construtor que configure tanto o saldo inicial como a taxa de juros. Forneça um método adicioneJuros (sem parâmetro explícito) que adicione juros à conta. 
// Escreva um programa que construa uma poupança com um saldo inicial de R$1000,00 e uma taxa de juros de 10%. Depois aplique o método adicioneJuros() cinco vezes e imprime o saldo resultante.

class ContaInvestimento {
    constructor(nconta,nome,saldo=0,taxajuros=0){
        this.numeroConta = nconta
        this.nome = nome
        this.saldo = saldo
        this.juros = taxajuros
    }
    alterarNome(nomeAlt){
        let novoNome = nomeAlt
        this.nome = novoNome
        console.log(`O nome da sua conta agora é ${this.nome}`)
    }
    deposito(depVal){
        this.saldo += depVal
        console.log(`O seu saldo agora é de ${this.saldo}`)
    }
    saque(saqVal){
        this.saldo -= saqVal
        console.log(`O seu saldo agora é de ${this.saldo}`)
    }
    adicioneJuros(){
        let jurosaumento = this.juros
        this.saldo += (jurosaumento/100) * this.saldo
    }
    mostrarSaldo(){
        console.log(`O saldo da sua conta é R$ ${this.saldo}`)
    }
}

const conta1 = new ContaInvestimento(1914,"Caio Fábio Felisberto", 1000, 10)
console.log(conta1)

conta1.adicioneJuros()
conta1.adicioneJuros()
conta1.adicioneJuros()
conta1.adicioneJuros()
conta1.adicioneJuros()
conta1.mostrarSaldo()