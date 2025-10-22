// Louvado seja o Senhor 
import { TipoTransacao } from "./TipoTransacao.js";
let saldo = JSON.parse(localStorage.getItem("saldo")) || 0;
const transacoes = JSON.parse(localStorage.getItem("transacoes"), (key, value) => {
    if (key === "dataTransacao") {
        return new Date(value);
    }
    return value;
}) || [];
const resumoTransacoes = JSON.parse(localStorage.getItem("resumoTransacoes"), (value) => { return parseInt(value); }) || [];
function debitar(valor) {
    if (valor <= 0) {
        throw new Error("O valor deve ser maior que zero!");
    }
    if (valor > saldo) {
        throw new Error("Saldo insuficiente para realização da transação!");
    }
    saldo -= valor;
    localStorage.setItem("saldo", JSON.stringify(saldo));
}
function depositar(valor) {
    if (valor <= 0) {
        throw new Error("O valor deve ser maior que zero!");
    }
    saldo += valor;
    localStorage.setItem("saldo", JSON.stringify(saldo));
}
function guardarResumoTransacao(transacao) {
    if (transacao.tipoTransacao == TipoTransacao.deposito) {
        return resumoTransacoes.totalDepositos++;
    }
    else if (transacao.tipoTransacao == TipoTransacao.transferencia) {
        return resumoTransacoes.totalTransferencias++;
    }
    else if (transacao.tipoTransacao == TipoTransacao.pagBoleto) {
        return resumoTransacoes.totalPagamentosBoleto++;
    }
}
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    getGruposTransacoes() {
        const gruposTransacoes = [];
        const listaTransacoes = structuredClone(transacoes);
        const transacoesOrdenadas = listaTransacoes.sort((t1, t2) => t2.dataTransacao.getTime() - t1.dataTransacao.getTime());
        let labelAtualGrupoTransacao = "";
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao = transacao.dataTransacao.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }
        return gruposTransacoes;
    },
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.deposito) {
            depositar(novaTransacao.valorTransacao);
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.transferencia || novaTransacao.tipoTransacao == TipoTransacao.pagBoleto) {
            debitar(novaTransacao.valorTransacao);
            novaTransacao.valorTransacao *= -1;
        }
        else {
            throw new Error("Tipo de transação inválido!");
        }
        guardarResumoTransacao(novaTransacao);
        transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
        localStorage.setItem("resumoTransacoes", JSON.stringify(resumoTransacoes));
        console.log(guardarResumoTransacao(novaTransacao));
    }
};
export default Conta;
