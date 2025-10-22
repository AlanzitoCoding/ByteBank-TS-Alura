// Louvado seja o Senhor 

import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { GrupoTransacao } from "./GrupoTransacao.js";
import { ResumoTransacoes } from "./ResumoTransacoes.js";

let saldo : number = JSON.parse(localStorage.getItem("saldo")) || 0;
const transacoes : Transacao[] = JSON.parse(localStorage.getItem("transacoes"), (key : string, value : string) => {
    if(key === "dataTransacao"){
        return new Date(value);
    }

    return value;
}) || [];
const resumoTransacoes : ResumoTransacoes = JSON.parse(localStorage.getItem("resumoTransacoes"), (value : string) => { return parseInt(value); }) || [];

function debitar(valor : number) : void{
    if(valor <= 0){
        throw new Error("O valor deve ser maior que zero!");
    }
    if(valor > saldo){
        throw new Error("Saldo insuficiente para realização da transação!");
    }

    saldo -= valor;
    localStorage.setItem("saldo", JSON.stringify(saldo));
}

function depositar(valor : number) : void{
    if(valor <= 0){
        throw new Error("O valor deve ser maior que zero!");
    }

    saldo += valor;
    localStorage.setItem("saldo", JSON.stringify(saldo));
}

function guardarResumoTransacao(transacao : Transacao) : number{
    if(transacao.tipoTransacao == TipoTransacao.deposito){
        return resumoTransacoes.totalDepositos++;
    }
    else if(transacao.tipoTransacao == TipoTransacao.transferencia){
        return resumoTransacoes.totalTransferencias++;
    }
    else if(transacao.tipoTransacao == TipoTransacao.pagBoleto){
        return resumoTransacoes.totalPagamentosBoleto++;
    }
}

const Conta = {
    getSaldo(){
        return saldo;
    },

    getDataAcesso() : Date{
        return new Date();
    },

    getGruposTransacoes() : GrupoTransacao[]{
        const gruposTransacoes : GrupoTransacao[] = [];
        const listaTransacoes : Transacao[] = structuredClone(transacoes);
        const transacoesOrdenadas : Transacao[] = listaTransacoes.sort((t1, t2) => t2.dataTransacao.getTime() - t1.dataTransacao.getTime());
        let labelAtualGrupoTransacao : string = "";

        for(let transacao of transacoesOrdenadas){
            let labelGrupoTransacao : string = transacao.dataTransacao.toLocaleDateString("pt-br", {month: "long", year: "numeric"});

            if(labelAtualGrupoTransacao !== labelGrupoTransacao){
                labelAtualGrupoTransacao = labelGrupoTransacao;

                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                })
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }

        return gruposTransacoes;
    },

    registrarTransacao(novaTransacao : Transacao) : void{
        if(novaTransacao.tipoTransacao == TipoTransacao.deposito){
            depositar(novaTransacao.valorTransacao);
        } 

        else if(novaTransacao.tipoTransacao == TipoTransacao.transferencia || novaTransacao.tipoTransacao == TipoTransacao.pagBoleto){
            debitar(novaTransacao.valorTransacao);
            novaTransacao.valorTransacao *= -1;
        } 

        else{
            throw new Error("Tipo de transação inválido!");
        }

        guardarResumoTransacao(novaTransacao);
        transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());

        localStorage.setItem("transacoes", JSON.stringify(transacoes));
        localStorage.setItem("resumoTransacoes", JSON.stringify(resumoTransacoes));

        console.log(guardarResumoTransacao(novaTransacao));
    }
}

export default Conta;