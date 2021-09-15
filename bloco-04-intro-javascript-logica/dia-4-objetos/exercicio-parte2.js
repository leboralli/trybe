//Exercicio 1

function verificaPalindrome (string) {
  let reverso = string.split('');
  reverso = reverso.reverse()
  reverso = reverso.join('')
  if (string === reverso) {
    return true
  } else {
    return false
  }
}

let palavra = "arara";
console.log(verificaPalindrome(palavra))

// Exercicio 2
function maiorValor(array) {
  let indiceMaior = 0;
  for (let indice in array) {
    if (array[indiceMaior] < array[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;

}

let valores = [1,7,5,3,20,12,27,15,9]
// console.log(valores.join(','))
console.log(maiorValor(valores))