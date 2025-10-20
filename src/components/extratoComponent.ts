// Louvado seja o Senhor 

import Conta from "../types/Conta.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatData } from "../types/FormatData.js";

const registroTransacoesDiv : HTMLElement = document.querySelector(".extrato .registro-transacoes");

function renderExtrato() : void{
    const gruposTransacoes : GrupoTransacao[] = Conta.getGruposTransacoes();
    registroTransacoesDiv.innerHTML = "";
    let htmlRegistroTransacoes : string = "";

    for( let grupoTransacao of gruposTransacoes){
        let htmlTransacaoItem : string = "";

        for(let transacao of grupoTransacao.transacoes){
            htmlTransacaoItem += `
            <div class="transacao-item">
                <div class="transacao-info">
                    <span class="tipo">${transacao.tipoTransacao}</span>
                    <strong class="valor">${formatarMoeda(transacao.valorTransacao)}</strong>
                </div>
                <time class="data">${formatarData(transacao.dataTransacao, FormatData.shortDate)}</time>
            </div>
            `;
        }
    }
}