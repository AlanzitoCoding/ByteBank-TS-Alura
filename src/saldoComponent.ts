// Louvado seja o Senhor

let saldo : number = 3000;
let dataAtual : Date = new Date();
const dataExibida = document.querySelector('.block-saldo time') as HTMLElement;

const saldoExibido = document.querySelector('.saldo-valor .valor') as HTMLElement;
saldoExibido.textContent = saldo.toLocaleString("pt-br", {currency: "BRL", style: "currency"});

dataExibida.textContent = dataAtual.toLocaleDateString("pt-br", {weekday: "long", day: "2-digit", month: "2-digit", year: "numeric"});
