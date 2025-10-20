// Louvado seja o Senhor
import Conta from "../types/Conta.js";
import SaldoComponent from "./saldoComponent.js";
const form = document.querySelector('.block-nova-transacao form');
form.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!form.checkValidity()) {
            alert("Por favor, preencha o formulário corretamente!");
            return;
        }
        const tipoTransacaoInput = document.querySelector('#tipoTransacao');
        const valorTransacaoInput = document.querySelector('#valor');
        const dataTransacaoInput = document.querySelector('#data');
        let tipoTransacao = tipoTransacaoInput.value;
        let valorTransacao = parseFloat(valorTransacaoInput.value);
        let dataTransacao = new Date(dataTransacaoInput.value);
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valorTransacao: valorTransacao,
            dataTransacao: dataTransacao
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizar();
        form.reset();
    }
    catch (err) {
        alert(err.message);
    }
});
