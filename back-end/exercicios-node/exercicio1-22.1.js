// Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

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
calculaSomaMult(1, 2, 3)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.error(err);
  });

calculaSomaMult(10, 10, 10)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.error(err);
  });

calculaSomaMult(1, 'a', 3)
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((err) => {
    console.error(err);
  });

// module.exports = calculaSomaMult;
