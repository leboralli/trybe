// Crie uma função que receba um número inteiro N e retorne 
// o somatório de todos os números de 1 até N.

let valor = 9;

function somatoria (numero) {
  let soma = 0
  for (let valorInicial = 1; valorInicial <= numero; valorInicial += 1) {
    soma += valorInicial
  }
  return soma
}

console.log(somatoria(valor))