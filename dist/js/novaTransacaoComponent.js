// Louvado seja o Senhor
const form = document.querySelector('.block-nova-transacao form');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.checkValidity()) {
        alert("Por favor, preencha o formulário corretamente!");
        return;
    }
    const tipoTransacaoInput = document.querySelector('#tipoTransacao');
    const valorTransacaoInput = document.querySelector('#valor');
    const dataTransacaoInput = document.querySelector('#data');
    let tipoTransacao = tipoTransacaoInput.value;
    let valorTransacao = parseFloat(valorTransacaoInput.value);
    let dataTransacao = new Date(dataTransacaoInput.value);
    if (tipoTransacao == TipoTransacao.deposito) {
        saldo += valorTransacao;
    }
    else if (tipoTransacao == TipoTransacao.transferencia || tipoTransacao == TipoTransacao.pagBoleto) {
        if (saldo - valorTransacao >= 0) {
            saldo -= valorTransacao;
        }
        else {
            alert("Saldo insuficiente!");
        }
    }
    else {
        alert("Tipo de transação inválido!");
        return;
    }
    saldoExibido.textContent = saldo.toLocaleString("pt-br", { currency: "BRL", style: "currency" });
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valorTransacao: valorTransacao,
        dataTransacao: dataTransacao
    };
    console.log(novaTransacao);
    form.reset();
});
