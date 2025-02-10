// Classe Ponto e Retangulo: Faça um programa completo utilizando funções e classes que:

// Possua uma classe chamada Ponto, com os atributos x e y.
// Possua uma classe chamada Retangulo, com os atributos largura e altura.
// Possua uma função para imprimir os valores da classe Ponto
// Possua uma função para encontrar o centro de um Retângulo.

// Você deve criar alguns objetos da classe Retangulo.
// Cada objeto deve ter um vértice de partida, por exemplo, o vértice inferior esquerdo do retângulo, que deve ser um objeto da classe Ponto.
// A função para encontrar o centro do retângulo deve retornar o valor para um objeto do tipo ponto que indique os valores de x e y para o centro do objeto.
// O valor do centro do objeto deve ser mostrado na tela
// Crie um menu para alterar os valores do retângulo e imprimir o centro deste retângulo.

class Ponto{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    imp(){
        console.log(`${this.x}, ${this.y}`)
    }
}
class Retangulo{
    constructor(largura,altura){
        this.largura = largura
        this.altura = altura
    }
    imp(){
        console.log(`${this.largura}, ${this.altura}`)
    }
    centroRetangulo(){
        let nome = new Ponto(this.largura/2,this.altura/2)
        console.log(`O centro do retângulo é ${nome.x} no eixo X e ${nome.y} no eixo Y.`)
    }
    altLargura(valor){
        this.largura = valor
    }
    altAltura(valor){
        this.altura = valor
    }
}
const ret1 = new Retangulo(20,10)
console.log(ret1)
ret1.centroRetangulo()

const ret2 = new Retangulo(10,5)
console.log(ret2)
ret2.centroRetangulo()

ret2.altAltura(30)
ret2.centroRetangulo()
console.log()
