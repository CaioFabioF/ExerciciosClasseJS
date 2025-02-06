// Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir os seguintes atributos: número da conta, nome do correntista e saldo. 
// Os métodos são os seguintes: alterarNome, depósito e saque; No construtor, saldo é opcional, com valor default zero e os demais atributos são obrigatórios.

class ContaCorrenteClass {
    constructor(nconta,nome,saldo=0){
        this.numeroConta = nconta
        this.nome = nome
        this.saldo = saldo
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
}

const minhaContaCorrente = new ContaCorrenteClass(1914,"Caio Fábio Felisberto",1000)
console.log(minhaContaCorrente)

minhaContaCorrente.deposito(1000)
minhaContaCorrente.saque(250)
minhaContaCorrente.alterarNome("Boquinha Ezequiel")