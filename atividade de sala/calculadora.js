function calculadora(){
    var num1, num2, op, result //declarando as variáveis
    
    //atribuindo os valores nas variáveis e tratando erros
    let num1 = Number(prompt("Digite o primeiro número: "))
    let num2 = Number(prompt("Digite o segundo número: "))
    let op = Number(prompt("Escolha uma operação 1- soma, 2- subtração, 3- divisão, 4- multiplicação: "))
    
    //tratando os erros
    try{
        if((num1 || num2) != Number) throw("Não foi digitado um número.")
        if(op != Number) throw("Operação inválida.")
        if(op > 4) throw("Operação inválida.")
        if(op < 1) throw("Operação inválida.")
    }
    catch(error){
        console.log(error)
    }
    //realizando as operações

    switch(op) {
        case 1:
            result = num1 + num2
            console.log(num1, " + ", num2, " = ", result)
            break;
        case 2:
            result = num1 - num2
            console.log(num1, " - ", num2, " = ", result)
            break;
        case 3:
            try{
                if(num2 = 0) throw("Não é possivel dividir um número por 0")
            }
            catch(e){
                console.log(e)
            }
            result = num1 / num2
            console.log(num1, " / ", num2, " = ", result)
            break;
        case 4:
            result = num1 * num2
            console.log(num1, " x ", num2, " = ", result)
            break;
    }
}
calculadora();