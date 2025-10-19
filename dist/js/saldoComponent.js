// Louvado seja o Senhor
let saldo = 3000;
let dataAtual = new Date();
const dataExibida = document.querySelector('.block-saldo time');
const saldoExibido = document.querySelector('.saldo-valor .valor');
saldoExibido.textContent = formatarMoeda(saldo);
dataExibida.textContent = formatarData(dataAtual, FormatData.longDate);
