// Classe Bichinho Virtual:Crie uma classe que modele um Tamagushi (Bichinho Eletrônico)
// Atributos: Nome, Fome, Saúde e Idade b. Métodos: Alterar Nome, Fome, Saúde e Idade; Retornar Nome, Fome, Saúde e Idade Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi, este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então não devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a qualquer momento.

class Bichinho {
    constructor(nome,fome,saude,idade){
        this.nome = nome
        this.fome = fome
        this.saude = saude
        this.idade = idade
    }
    altNome(nomeAlt){
        let novoNome = nomeAlt
        this.nome = novoNome
    }
    altFome(fomeAlt){
        let novaFome = fomeAlt
        this.fome = novaFome
    }
    altSaude(saudeAlt){
        let novaSaude = saudeAlt
        this.saude = novaSaude
    }
    altIdade(idadeAlt){
        let novaIdade = idadeAlt
        this.idade = novaIdade
    }
    mostrarNome(){
        console.log(`A seu nome é ${this.nome}`)
    }
    mostrarFome(){
        console.log(`A sua fome é ${this.fome}`)
    }
    mostrarSaude(){
        console.log(`A sua saúde é ${this.saude}`)
    }
    mostrarIdade(){
        console.log(`A sua idade é ${this.idade}`)
    }
    mostrarFelicidade(){
        let felicidade = (this.fome + this.saude) / 2
        console.log(`Sua felicidade é ${felicidade}`)
    }
}

const Jeff = new Bichinho("Jeff",70,60,10)
console.log(Jeff)

Jeff.mostrarFelicidade()