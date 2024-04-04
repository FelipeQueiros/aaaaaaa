const form = document.getElementById('cadastroLista');
const inputNome = document.getElementById('cadastroNome');
const inputTelefone = document.getElementById('cadastroTelefone');

const nomes = [];
const telefones = [];

form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    adicionaLinha();
});

function adicionaLinha() {
    const inputnomeCadastro = document.getElementById('cadastroNome');
    const inputtelefoneCadastro = document.getElementById('cadastroTelefone');

    nomes.push(inputnomeCadastro.value);
    telefones.push(inputtelefoneCadastro.value);

    let linha = '<tr>';
    linha += `<td>${inputnomeCadastro.value}</td>`;
    linha += `<td>${inputtelefoneCadastro.value}</td>`;
    linha += '</tr>';

    const tabela = document.querySelector('table tbody');
    tabela.innerHTML += linha;


    inputnomeCadastro.value = '';
    inputtelefoneCadastro.value = '';

    window.alert('Você incluiu mais um contato!');
}


