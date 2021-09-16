const estados = ['Amazonas', 'Acre', 'Roraima', 'Rondonia', 'Amapa', 'Para', 
'Tocantins', 'Maranhão', 'Piauí', 'Ceará', 'Rio Grande do Norte', 'Paraíba',
'Pernambuco', 'Alagoas', 'Sergipe', 'Bahia', 'Mato Grosso', 'Mato Gross do Sul',
'Goiás', 'Minas Gerais', 'Espírito Santo', 'Rio de Janeiro', 'São Paulo', 'Paraná',
'Santa Catarina', 'Rio Grande do Sul'];

const selectEstados = document.querySelector('#estados');
for (let index in estados) {
    let elementoOption = document.createElement('option');
    elementoOption.text = estados[index];
    elementoOption.value = estados[index];
    selectEstados.appendChild(elementoOption)
}