// Classe Quadrado: Crie uma classe que modele um quadrado:
// Atributos: Tamanho do lado
// Métodos: Mudar valor do Lado, Retornar valor do Lado e calcular Área;

class QuadradoClass {
    constructor(tlado){
        this.lado = tlado
    }
    mudarLado(ladox){
        let novoLado = ladox
        this.lado = novoLado
    }
    valorLado(){
        console.log(`O valor do lado do quadrado é ${this.lado}`)
    }
    calcArea(){
        let ladocalc = this.lado
        console.log(`A área do quadrado é ${ladocalc * ladocalc}`)
    }
}

const quadrado1 = new QuadradoClass(5)
console.log(quadrado1)

quadrado1.calcArea()
quadrado1.valorLado()

quadrado1.mudarLado(6)
quadrado1.valorLado()
quadrado1.calcArea()