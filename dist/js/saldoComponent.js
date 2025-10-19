// Louvado seja o Senhor
let saldo = 3000;
let dataAtual = new Date();
const dataExibida = document.querySelector('.block-saldo time');
const saldoExibido = document.querySelector('.saldo-valor .valor');
saldoExibido.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
dataExibida.textContent = dataAtual.toLocaleDateString("pt-br", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" });
