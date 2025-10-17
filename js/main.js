// Louvado seja o Senhor
var saldo = 3000;
var saldoExibido = document.querySelector('.saldo-valor .valor');
saldoExibido.textContent = "R$ ".concat(saldo);
var form = document.querySelector('.block-nova-transacao form');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
        alert("Por favor, preencha o formulário corretamente!");
        return;
    }
    var tipoTransacaoInput = document.querySelector('#tipoTransacao');
    var valorTransacaoInput = document.querySelector('#valor');
    var dataTransacaoInput = document.querySelector('#data');
    var tipoTransacao = tipoTransacaoInput.value;
    var valorTransacao = parseFloat(valorTransacaoInput.value);
    var dataTransacao = new Date(dataTransacaoInput.value);
    if (tipoTransacao == 'Depósito') {
        saldo += valorTransacao;
    }
    else if (tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto') {
        saldo -= valorTransacao;
    }
    else {
        alert("Tipo de transação inválido!");
        return;
    }
    saldoExibido.textContent = "R$ ".concat(saldo);
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valorTransacao: valorTransacao,
        dataTransacao: dataTransacao
    };
    console.log(novaTransacao);
    form.reset();
});
