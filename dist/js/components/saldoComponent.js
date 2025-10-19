// Louvado seja o Senhor
import { formatarMoeda, formatarData } from "../utils/formatters.js";
import { FormatData } from "../types/FormatData.js";
import Conta from "../types/Conta.js";
const dataExibida = document.querySelector('.block-saldo time');
const saldoExibido = document.querySelector('.saldo-valor .valor');
dataExibida.textContent = formatarData(Conta.getDataAcesso(), FormatData.longDate);
renderSaldo();
export function renderSaldo() {
    saldoExibido.textContent = formatarMoeda(Conta.getSaldo());
}
const SaldoComponent = {
    atualizar() {
        renderSaldo();
    }
};
export default SaldoComponent;
