// Louvado seja o Senhor

let saldo = 3000;
const saldoExibido = document.querySelector('.saldo-valor .valor');

saldoExibido.textContent = `R$ ${saldo}`;

const form = document.querySelector('.block-nova-transacao form');
form.addEventListener("submit", function(event){
    event.preventDefault();
    if(!form.checkValidity()){
        alert("Por favor, preencha o formulário corretamente!");
        return;
    }
    
    const tipoTransacaoInput = document.querySelector('#tipoTransacao');
    const valorTransacaoInput = document.querySelector('#valor');
    const dataTransacaoInput = document.querySelector('#data');
    
    let tipoTransacao = tipoTransacaoInput.value;
    let valorTransacao = valorTransacaoInput.value;
    let dataTransacao = dataTransacaoInput.value;

    if(tipoTransacao == 'Depósito'){
        saldo += parseFloat(valorTransacao);
    } else if(tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto'){
        saldo -= parseFloat(valorTransacao);
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