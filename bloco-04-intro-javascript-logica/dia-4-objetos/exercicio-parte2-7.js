// Crie uma função que receba uma string word e outra string ending . 
// Verifique se a string ending é o final da string word . 
// Considere que a string ending sempre será menor que a string word .

function verificaFinal (word, ending) {
  let arrayWord = word.split('');
  let arrayEnding = ending.split('');
  for (let index in arrayEnding) {
    console.log(arrayEnding[index])
  }
}

verificaFinal('trybe', 'be')