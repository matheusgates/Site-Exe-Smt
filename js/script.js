//Script para confirmação de envio do form//

const handleSubmit = (event) => {
    event.preventDefault();

    alert('Inscrição confirmada!')

    const email = document.querySelector('input[name=email]').value;
    const telefone = document.querySelector('input[name=telefone]').value;

    fetch('https://api.sheetmonkey.io/form/eXGhwwjbMtW5rsUkbMddDa', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, telefone }),
    });
}

document.querySelector('form').addEventListener('submit', handleSubmit);