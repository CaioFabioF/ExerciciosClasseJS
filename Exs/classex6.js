// Classe TV: Faça um programa que simule um televisor criando-o como um objeto. 
// O usuário deve ser capaz de informar o número do canal e aumentar ou diminuir o volume. 
// Certifique-se de que o número do canal e o nível do volume permanecem dentro de faixas válidas.

class TvClass {
    constructor(ncanal=0,vol=0){
        if(ncanal<0){
            console.log("Valor inválido")
        }else{
            this.numerocanal = ncanal
        }
        if(vol<0 || vol>100){
            console.log("Valor inválido")
        }else{
            this.volume = vol
        }
    }
    aumentarVolume(valor){
        if(valor<0 || valor>100){
            console.log("Valor inválido")
        }else{
            let aumentoVolume = valor
            this.volume += aumentoVolume
            console.log(`O volume agora é ${this.volume}`)
        }
    }
    diminuirVolume(valor){
        if(valor<0 || valor>100){
            console.log("Valor inválido")
        }else{
            let subtrairVolume = valor
            this.volume -= subtrairVolume
            console.log(`O volume agora é ${this.volume}`)
        }
    }
    mudarCanal(canal){
        if(canal<0){
            console.log("Valor inválido")
        }else{
            let novoCanal = canal
            this.numerocanal = novoCanal
            console.log(`O canal agora é o de número ${this.numerocanal}`)
        }
    }
}

const tv1 = new TvClass(10,99)
console.log(tv1)

tv1.diminuirVolume(19)
tv1.mudarCanal(15)