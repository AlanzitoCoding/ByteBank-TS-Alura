// Louvado seja o Senhor

let saldo = 3000;
const saldoExibido = document.querySelector('.saldo-valor .valor') as HTMLElement;
saldoExibido.textContent = `R$ ${saldo}`;

const form = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
form.addEventListener("submit", function(event){
    event.preventDefault();
    if(!form.checkValidity()){
        alert("Por favor, preencha o formulário corretamente!");
        return;
    }
    
    const tipoTransacaoInput = document.querySelector('#tipoTransacao') as HTMLInputElement;
    const valorTransacaoInput = document.querySelector('#valor') as HTMLInputElement;
    const dataTransacaoInput = document.querySelector('#data') as HTMLInputElement;
    
    let tipoTransacao : string = tipoTransacaoInput.value;
    let valorTransacao : number = parseFloat(valorTransacaoInput.value);
    let dataTransacao : Date = new Date(dataTransacaoInput.value);

    if(tipoTransacao == 'Depósito'){
        saldo += valorTransacao;
    } else if(tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto'){
        saldo -= valorTransacao;
    } else{
        alert("Tipo de transação inválido!");
        return;
    }

    saldoExibido.textContent = `R$ ${saldo}`;
    
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valorTransacao: valorTransacao,
        dataTransacao: dataTransacao    
    };

    console.log(novaTransacao);
    form.reset();
});
