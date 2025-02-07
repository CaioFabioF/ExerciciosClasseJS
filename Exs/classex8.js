// Classe Macaco: Desenvolva uma classe Macaco,que possua os atributos nome e bucho (estomago) e pelo menos os métodos comer(), verBucho() e digerir(). 
// Faça um programa ou teste interativamente, criando pelo menos dois macacos, alimentando-os com pelo menos 3 alimentos diferentes e verificando o conteúdo do estomago a cada refeição. 
// Experimente fazer com que um macaco coma o outro. É possível criar um macaco canibal?

class Macaco {
    constructor(nome){
        this.nome = nome
        this.estomago = []
    }
    comer(alimento){
        console.log(`Você comeu ${alimento}`)
        this.estomago.push(alimento)
    }
    verEstomago(){
        console.log(`${this.estomago} `)
    }
    digerir(){
        this.estomago.pop()
    }
}

const macaco1 = new Macaco("Jack")
console.log(macaco1)
macaco1.comer("Maçã")
macaco1.verEstomago()
macaco1.digerir()
macaco1.verEstomago()