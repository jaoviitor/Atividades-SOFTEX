// classe concreta
class PC{
    constructor(RAM, HD, CPU, Tipo){
        this.RAM = RAM
        this.HD = HD
        this.CPU = CPU
        this.Tipo = Tipo
    }
    getRAM(){
        return this.RAM
    }
    getHD(){
        return this.HD
    }
    getCPU(){
        return this.CPU
    }
    getTipo(){
        return this.Tipo
    }
}

class Server{
    constructor(RAM, HD, CPU, Tipo){
        this.RAM = RAM
        this.HD = HD
        this.CPU = CPU
        this.Tipo = Tipo
    }
    getRAM(){
        return this.RAM
    }
    getHD(){
        return this.HD
    }
    getCPU(){
        return this.CPU
    }
    getTipo(){
        return this.Tipo
    }
}

class Logistica{
        // função construtora
        createComputador(R, H, C, T){
            if (type === 'PC'){
                return new PC(R, H, C, T)
            }

            if(type === 'Server'){
                return new Server(R, H, C, T)
            }
        }
}

// utlizando

const logistic = new Logistica()
const Pc = logistic.createComputador('8 Gb', '500 Gb', '2.4 GHz', 'PC')
const server = logistic.createComputador('16 Gb', '1000 Gb', '4.0 GHz', 'Server')

console.log(PC)