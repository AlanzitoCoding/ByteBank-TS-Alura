// Louvado seja o Senhor 
import { TipoTransacao } from "./TipoTransacao.js";
let saldo = 3000;
const Conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    registrarTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.deposito) {
            saldo += novaTransacao.valorTransacao;
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.transferencia || novaTransacao.tipoTransacao == TipoTransacao.pagBoleto) {
            if (saldo - novaTransacao.valorTransacao >= 0) {
                saldo -= novaTransacao.valorTransacao;
            }
            else {
                alert("Saldo insuficiente!");
            }
        }
        else {
            alert("Tipo de transação inválido!");
            return;
        }
        console.log(novaTransacao);
    }
};
export default Conta;
