// Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: 
// Math.floor(Math.random() * 100 + 1) .
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

// const calcula = require('./exercicio2-22.1.js');
function calculaSomaMult (n1, n2, n3) {
  return new Promise((resolve, reject) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number') {
      reject('Informe apenas números');
    } 
    const resultado = (n1 + n2) * n3;
    if (resultado < 50) {
      reject('Valor muito baixo');
    }
    resolve(resultado);
  });
}

function randomNumber () {
  return Math.floor(Math.random() * 100 + 1);
}
calculaSomaMult(randomNumber(), randomNumber(), randomNumber())
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.error(err);
  });