// criando uma classe
class Veiculo{
    constructor(tamanho, cor, peso, altura){
        this.tamanho = tamanho;
        this.cor = cor;
        this.peso = peso;
        this.altura = altura;
    }

    ligar = () =>{
        //corpo da função
    }

    deligar = () =>{

    }

    acelerar = () =>{
        
    }

    freiar = () =>{
        
    }

    deligar = () =>{
        
    }
}

//criando uma classe herdeira de Veiculo
class Carro extends Veiculo{
    constructor(tamanho, cor, peso, altura, nome){
        super(tamanho, cor, peso, altura)
        this.nome = nome;
    }
}

var carro = new Carro(4.2, "prata", 1000, 1.6, 'Cruze')

console.log(carro.nome, carro.cor)