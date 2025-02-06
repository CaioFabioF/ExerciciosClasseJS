// Classe Pessoa: Crie uma classe que modele uma pessoa:
// Atributos: nome, idade, peso e altura
// Métodos: Envelhercer, engordar, emagrecer, crescer. Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos, ela deve crescer 0,5 cm.

class PessoaClass {
    constructor(nome,idade,peso,altura){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
    }
    envelhecer(anos){
        let anoEnvelhecido = anos
        this.idade += anos
        this.altura += (this.altura/anos)

        console.log(`Sua idade agora é ${this.idade}`)
        console.log(`Sua altura agora é ${this.altura}`)
    }
    engordar(kiloseng){
        let kgEngordado = kiloseng
        this.peso += kgEngordado
    }
    emagrecer(kilosema){
        let kgEmagrecido = kilosema
        this.peso -= kgEmagrecido
    }
    
}

const caio = new PessoaClass("Caio Fábio", 10, 40, 155)
console.log(caio)
caio.envelhecer(5)

caio.engordar(30)
console.log(caio)

caio.emagrecer(2)
console.log(caio)