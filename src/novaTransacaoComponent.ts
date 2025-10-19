// Louvado seja o Senhor

const form = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
form.addEventListener("submit", function(event){
    event.preventDefault();
    if(!form.checkValidity()){
        alert("Por favor, preencha o formulário corretamente!");
        return;
    }
    
    const tipoTransacaoInput = document.querySelector('#tipoTransacao') as HTMLSelectElement;
    const valorTransacaoInput = document.querySelector('#valor') as HTMLInputElement;
    const dataTransacaoInput = document.querySelector('#data') as HTMLInputElement;
    
    let tipoTransacao : TipoTransacao = tipoTransacaoInput.value as TipoTransacao;
    let valorTransacao : number = parseFloat(valorTransacaoInput.value);
    let dataTransacao : Date = new Date(dataTransacaoInput.value);

    if(tipoTransacao == TipoTransacao.deposito){
        saldo += valorTransacao;
    } else if(tipoTransacao == TipoTransacao.transferencia || tipoTransacao == TipoTransacao.pagBoleto){
        if(saldo - valorTransacao >= 0){
            saldo -= valorTransacao;
        } else {
            alert("Saldo insuficiente!");
        }
    } else{
        alert("Tipo de transação inválido!");
        return;
    }

    saldoExibido.textContent = formatarMoeda(saldo);
    
    const novaTransacao : Transacao = {
        tipoTransacao: tipoTransacao,
        valorTransacao: valorTransacao,
        dataTransacao: dataTransacao    
    };

    console.log(novaTransacao);
    form.reset();
});