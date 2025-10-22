// Louvado seja o Senhor 
import Conta from "../types/Conta.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatData } from "../types/FormatData.js";
const registroTransacoesDiv = document.querySelector(".extrato .registro-transacoes");
renderExtrato();
function renderExtrato() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    registroTransacoesDiv.innerHTML = "";
    let htmlRegistroTransacoes = "";
    for (let grupoTransacao of gruposTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of grupoTransacao.transacoes) {
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
        htmlRegistroTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${grupoTransacao.label}</strong>
                ${htmlTransacaoItem}
            </div>
        `;
    }
    if (htmlRegistroTransacoes == "") {
        htmlRegistroTransacoes = `
            <div>Não há transações registradas.</div>
        `;
    }
    registroTransacoesDiv.innerHTML = htmlRegistroTransacoes;
}
const ExtratoComponent = {
    update() {
        renderExtrato();
    }
};
export default ExtratoComponent;
