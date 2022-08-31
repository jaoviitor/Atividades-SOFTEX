// criando objeto
var game = {
    nome: "Horizon Zero Dawn",
    cod: 15638,
    genero: "Ação"
}

// criando array
var saves = ['save 1', 'save 2', 'save 3'];

// criando as funções
function dadosGame (){
    for(var dados in game){
        console.log(dados);
    }
}

function dadosSaves(){
    for (var dados of saves) {
        console.log(dados);
    }
}

// executando
dadosGame()
console.log("///")
dadosSaves()