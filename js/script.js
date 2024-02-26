document.getElementById('btnBuscar').addEventListener('click', consultarCEP);

function consultarCEP() {
    var cep = document.getElementById('cepInput').value;
    var resultDiv = document.getElementById('result');

    fetch(`http://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(dados => {
            if (dados.error) {
                resultDiv.innerHTML = 'CEP não encontrado!';
            } else {
                resultDiv.innerHTML = `
                    <p><strong>Logradouro: </strong>${dados.logradouro}</p>
                    <p><strong>Bairro:     </strong>${dados.bairro}</p>
                    <p><strong>Localidade: </strong>${dados.localidade} - ${dados.uf}</p>`;
            }
        })
        .catch(error => {
            console.log('Erro na requisição...', error);
            resultDiv.innerHTML = 'Erro na requisição! Favor tentar novamente...';
        });
}
