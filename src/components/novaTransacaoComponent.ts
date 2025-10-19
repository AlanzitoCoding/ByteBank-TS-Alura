// Louvado seja o Senhor

import Conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import SaldoComponent from "./saldoComponent.js";

const form = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
form.addEventListener("submit", function(event){
    event.preventDefault();
    if(!form.checkValidity()){
        alert("Por favor, preencha o formulário corretamente!");
        return;
    }
    
    const tipoTransacaoInput = document.querySelector('#tipoTransacao') as HTMLSelectElement;
    const valorTransacaoInput = document.querySelector('#valor') as HTMLInputElement;
    const dataTransacaoInput = document.querySelector('#data') as HTMLInputElement;
    
    let tipoTransacao : TipoTransacao = tipoTransacaoInput.value as TipoTransacao;
    let valorTransacao : number = parseFloat(valorTransacaoInput.value);
    let dataTransacao : Date = new Date(dataTransacaoInput.value);
    
    const novaTransacao : Transacao = {
        tipoTransacao: tipoTransacao,
        valorTransacao: valorTransacao,
        dataTransacao: dataTransacao    
    };

    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizar();
    form.reset();
});