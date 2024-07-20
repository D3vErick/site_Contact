const form = document.getElementById('formContato');
let linhas = '';

form.addEventListener("submit", function(e){
    e.preventDefault();

    const inputNameContact = document.getElementById('nomeContato');
    const inputNumberContact = document.getElementById('numeroContato');
    
    let linha = '<tr>';
    linha += `<td><img src="./images/perfil.png" alt="Foto do contanto">${inputNameContact.value}</td>`;
    linha += `<td>${inputNumberContact.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTable = document.querySelector('tbody');
    corpoTable.innerHTML = linhas;

    inputNameContact.value = '';
    inputNumberContact.value = '';
});
