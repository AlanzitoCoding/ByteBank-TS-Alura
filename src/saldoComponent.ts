// Louvado seja o Senhor

let saldo : number = 3000;
let dataAtual : Date = new Date();

const dataExibida = document.querySelector('.block-saldo time') as HTMLElement;
const saldoExibido = document.querySelector('.saldo-valor .valor') as HTMLElement;

saldoExibido.textContent = formatarMoeda(saldo);
dataExibida.textContent = formatarData(dataAtual, FormatData.longDate);
