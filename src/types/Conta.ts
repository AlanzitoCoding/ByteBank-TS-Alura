// Louvado seja o Senhor 

import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";

let saldo : number = 3000;

const Conta = {
    getSaldo(){
        return saldo;
    },

    getDataAcesso() : Date{
        return new Date();
    },

    registrarTransacao(novaTransacao : Transacao) : void{
        if(novaTransacao.tipoTransacao == TipoTransacao.deposito){
        saldo += novaTransacao.valorTransacao;
        } 

        else if(novaTransacao.tipoTransacao == TipoTransacao.transferencia || novaTransacao.tipoTransacao == TipoTransacao.pagBoleto){
            if(saldo - novaTransacao.valorTransacao >= 0){
                saldo -= novaTransacao.valorTransacao;
            } else {
                alert("Saldo insuficiente!");
            }
        } 

        else{
            alert("Tipo de transação inválido!");
            return;
        }

        console.log(novaTransacao);
    }
}

export default Conta;