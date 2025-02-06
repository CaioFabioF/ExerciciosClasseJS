// Classe Bola: Crie uma classe que modele uma bola:
// Atributos: Cor, circunferência, material
// Métodos: trocaCor e mostraCor

class BolaClass {
    constructor(cor,circunferência,material){
        this.cor = cor
        this.circ = circunferência
        this.mat = material
    }
    trocaCor(corx){
        let novaCor = corx
        this.cor = novaCor
    }
    mostraCor(){
        console.log(`A cor da bola é ${this.cor}.`)
    }
}
const bola1 = new BolaClass("Azul",10,"Plastico")
console.log(bola1)

bola1.mostraCor()
bola1.trocaCor("Preta")
bola1.mostraCor()
console.log(bola1)