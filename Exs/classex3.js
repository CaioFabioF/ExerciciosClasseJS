// Classe Retangulo: Crie uma classe que modele um retangulo:
// Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// Métodos: Mudar valor dos lados, Retornar valor dos lados, calcular Área e calcular Perímetro;
// Crie um programa que utilize esta classe. Ele deve pedir ao usuário que informe as medidades de um local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés necessárias para o local.

class RetanguloClass {
    constructor(x,y){
        this.ladoA = x
        this.ladoB = y
    }
    mudarLados(x,y){
        let novoladoA = x
        let novoladoB = y
        this.ladoA = novoladoA
        this.ladoB = novoladoB
    }
    valLados(){
        return `O valor do ladoA é ${this.ladoA} e o valor do ladoB é ${this.ladoB}`
    }
    calcArea(){
        return `A área é ${this.ladoA * this.ladoB}`
    }
    calcPer(){
        return `O valor do perímetro é ${(this.ladoA * 2) + (this.ladoB * 2)}`
    }
}

const retangulo1 = new RetanguloClass(10,20)
console.log(retangulo1)

console.log(retangulo1.valLados())
console.log(retangulo1.calcArea())
console.log(retangulo1.calcPer())

retangulo1.mudarLados(50,100)
console.log(retangulo1.valLados())
console.log(retangulo1.calcArea())
console.log(retangulo1.calcPer())

criarRetangulo()

function criarRetangulo(){
    let ladoA1 = window.prompt("Digite o valor do lado A")
    let ladoB1 = window.prompt("Digite o valor do lado B")
    let ladoA2 = ladoA1
    let ladoB2 = ladoB1

    const retangulo2 = new RetanguloClass(ladoA2,ladoB2)

    console.log(`${retangulo2.calcArea()}`)
    console.log(`${retangulo2.calcPer()}`)
}
