function calculadora(){
    var num1, num2, op, result //declarando as variáveis
    
    //atribuindo os valores nas variáveis e tratando erros
    num1 = parseFloat(prompt("Digite o primeiro número: "))
    num2 = parseFloat(prompt("Digite o segundo número: "))
    op = parseInt(prompt("Escolha uma operação 1- soma, 2- subtração, 3- divisão, 4- multiplicação: "))
    try{
        if(typeof num1 != "number") throw("Não foi digitado um número.")
        if(typeof num2 != "number") throw("Não foi digitado um número.")
        if(typeof op != "number") throw("Operação inválida.")
        if(op > 4) throw("Operação inválida.")
        if(op < 1) throw("Operação inválida.")
    }
    catch(e){
        console.log(e)
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