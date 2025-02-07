// Classe Bomba de Combustível: Faça um programa completo utilizando classes e métodos que:

// Possua uma classe chamada bombaCombustível, com no mínimo esses atributos:
// tipoCombustivel.
// valorLitro
// quantidadeCombustivel

// Possua no mínimo esses métodos:
// abastecerPorValor( ) – método onde é informado o valor a ser abastecido e mostra a quantidade de litros que foi colocada no veículo
// abastecerPorLitro( ) – método onde é informado a quantidade em litros de combustível e mostra o valor a ser pago pelo cliente.
// alterarValor( ) – altera o valor do litro do combustível.
// alterarCombustivel( ) – altera o tipo do combustível.
// alterarQuantidadeCombustivel( ) – altera a quantidade de combustível restante na bomba.

// OBS: Sempre que acontecer um abastecimento é necessário atualizar a quantidade de combustível total na bomba.

class BombaDeCombustível {
    constructor(tipoCombustivel,valorLitro,quantidadeCombustivel){
        this.tpComb = tipoCombustivel
        this.valLitro = valorLitro
        this.quantComb = quantidadeCombustivel
    }
    abastecerPorValor(preço){
        let combustivelAdicionadoP = preço / this.valLitro
        console.log(`Foi adicionado ${combustivelAdicionadoP} L de combustível no veículo.`)
        this.quantComb -= combustivelAdicionadoP
    }
    abastecerPorLitro(litro){
        let combustivelAdicionadoL = litro
        let combustivelPago = litro * this.valLitro
        console.log(`Foi adicionado ${combustivelAdicionadoL} L de combustível no veículo.`)
        console.log(`O valor a ser pago é ${combustivelPago}`)
        this.quantComb -= combustivelAdicionadoL
    }
    alterarValor(altVal){
        let novoValor = altVal
        this.valLitro = novoValor
    }
    alterarCombustivel(altComb){
        let novoCombustivel = altComb
        this.tpComb = novoCombustivel
    }
    alterarQuantidadeCombustivelBoma(valor){
        if(valor<0){
            let diminuir = valor
            this.quantComb -= diminuir
            console.log(`Agora a quantidade de combustível na bomba é de ${this.quantComb} L.`)
        }else{
            let aumentar = valor
            this.quantComb += aumentar
            console.log(`Agora a quantidade de combustível na bomba é de ${this.quantComb} L.`)
        }
    }
}

const bomba1 = new BombaDeCombustível("Gasolina",6,100)
console.log(bomba1)

bomba1.abastecerPorValor(25)
bomba1.abastecerPorLitro(10)
console.log(bomba1)

bomba1.alterarValor(7)
console.log(bomba1)

bomba1.alterarCombustivel("Querosene")
console.log(bomba1)

bomba1.alterarQuantidadeCombustivelBoma(5)
console.log(bomba1)