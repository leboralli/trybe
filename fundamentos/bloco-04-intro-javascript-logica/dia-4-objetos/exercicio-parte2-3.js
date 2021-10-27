// Exercicio 3
function menorValor(array) {
  let indiceMaior = 0;
  for (let indice in array) {
    if (array[indiceMaior] > array[indice]) {
      indiceMaior = indice;
    }
  }
  return indiceMaior;

}

let valores = [1,7,5,3,20,-5,27,15,9]
// console.log(valores.join(','))
console.log(menorValor(valores))