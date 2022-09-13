class Veiculo{
    constructor(modelo, marca, cor, numRodas){
        this.modelo = modelo;
        this.modelo = marca;
        this.cor = cor;
        this.numRodas = numRodas;
    }

    clone(obj){
        obj.__proto__;
    }

    represent(){
        console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numRodas}`); 
    }
}

class Carro extends Veiculo{
    constructor(modelo, marca, cor, numRodas){
        super(modelo, marca, cor, numRodas)
        this.numPortas = this.numPortas

        let cloneCarro = {
            modelo: this.modelo,
            marca: this.marca,
            cor: this.cor,
            numRodas: this.numRodas,
            numPortas: this.numPortas
        }
        Veiculo.prototype.clone = function(obj){
            obj.prototype = cloneCarro
        }

        Veiculo.prototype.represent = function(){
            console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numRodas}`)
        }
    }
}

class Caminhao extends Veiculo{
    constructor(modelo, marca, cor, numRodas){
        super(modelo, marca, cor, numRodas)
        this.numPortas = this.numPortas

        let cloneBike = {
            modelo: this.modelo,
            marca: this.marca,
            cor: this.cor,
            numRodas: this.numRodas,
            numPortas: this.numPortas
        }
        Veiculo.prototype.clone = function(obj){
            obj.prototype = cloneOnibus
        }

        Veiculo.prototype.represent = function(){
            console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numRodas}, ${this.numPortas}`)
        }
    }
}

let Fiat = new Carro('Pulse','Fiat','Cinza', 4, 5)
Fiat.represent()
Fiat.clone(Fiat)

let Chevrolet = new Carro('Cruze','Chevrolet','Branco', 4, 4)
Chevrolet.represent()
Chevrolet.clone(Chevrolet)

let Audi = new Carro('TT','Audi','Prata', 4, 2)
Audi.represent()
Audi.clone(Audi)

let Mazda = new Carro('RX-7','Mazda','Azul', 4, 2)
Mazda.represent()
Mazda.clone(Mazda)

let Honda = new Carro('Civic','Honda','Preto', 4, 4)
Honda.represent()
Honda.clone(Honda)

let Nissan = new Carro('Kicks','Nissan','Branco', 4, 5)
Nissan.represent()
Nissan.clone(Nissan)

const veiculos = []

veiculos.push(Fiat)
veiculos.push(Chevrolet)
veiculos.push(Audi)

veiculos.push(Mazda)
veiculos.push(Honda)
veiculos.push(Nissan)