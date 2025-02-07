// Classe carro: Implemente uma classe chamada Carro com as seguintes propriedades:

// Um veículo tem um certo consumo de combustível (medidos em km / litro) e uma certa quantidade de combustível no tanque.
// O consumo é especificado no construtor e o nível de combustível inicial é 0.
// Forneça um método andar( ) que simule o ato de dirigir o veículo por uma certa distância, reduzindo o nível de combustível no tanque de gasolina.
// Forneça um método obterGasolina( ), que retorna o nível atual de combustível.
// Forneça um método adicionarGasolina( ), para abastecer o tanque.

class Carro {
    constructor(consumo,combustivel){
        this.consumo = consumo
        this.combustivel = combustivel
    }
    andar(kms){
        console.log(`O carro andou ${kms} Kms.`)
        let gasolinaGasta = kms / this.consumo
        this.combustivel -= gasolinaGasta
        console.log(`O carro gastou ${gasolinaGasta} L de combustível.`)
        console.log(`O combustível restante é ${this.combustivel} L.`)
    }
    mostrarCombustível(){
        console.log(`O combustível do carro é ${this.combustivel} L.`)
    }
    adicionarGasolina(gasolina){
        let novaGasolina = gasolina
        this.combustivel += novaGasolina
    }
}

const camaroAmarelo = new Carro(15,30)
console.log(camaroAmarelo)

camaroAmarelo.adicionarGasolina(10)
camaroAmarelo.mostrarCombustível()
camaroAmarelo.andar(30)

console.log(camaroAmarelo)