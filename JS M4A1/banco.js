function Banco(conta, saldo, tipo, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipo = tipo;
    this.agencia = agencia;
    buscarSaldo: function ValorSaldo(){
        console.log(saldo);
    }
    depositar = function ValorDeposito(deposito){
        saldo = saldo + deposito
        console.log("O deposito de " + deposito + " foi concluído.")
    }
    sacar = function ValorSaque(saque){
        if(saldo >= saque){
            saldo = saldo - saque
            console.log("O saque de " + saque + " foi concluído.")
            console.log("Seu saldo atual é: " + saldo)
        } else {
            console.log("Não é possivel sacar esse valor.")
        }
    }
    numeroConta = function NumConta(){
        console.log("O número da sua conta é: " + conta)
    }
}

Banco(1234, 1000, "corrente", 0001)