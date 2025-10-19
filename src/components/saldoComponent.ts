// Louvado seja o Senhor

import { formatarMoeda, formatarData } from "../utils/formatters.js";
import { FormatData } from "../types/FormatData.js";
import Conta from "../types/Conta.js";

const dataExibida = document.querySelector('.block-saldo time') as HTMLElement;
const saldoExibido = document.querySelector('.saldo-valor .valor') as HTMLElement;

dataExibida.textContent = formatarData(Conta.getDataAcesso(), FormatData.longDate);

renderSaldo();
export function renderSaldo() : void{
    saldoExibido.textContent = formatarMoeda(Conta.getSaldo());
}

const SaldoComponent = {
    atualizar(){
        renderSaldo();
    }
}

export default SaldoComponent;