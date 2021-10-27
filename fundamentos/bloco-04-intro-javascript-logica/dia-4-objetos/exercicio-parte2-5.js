// Crie uma função que receba um array de inteiros e 
// retorne o inteiro que mais se repete.

let arrayTeste = [2, 3, 2, 5, 8, 2, 3, 8, 8, 8, 8, 8];

function contadorInteiros (array) {
  let contador = 0;
  let numeroRepetido = 0;
  let indexRepetido = 0;
  for (let indice in array) {
    let verifica = array[indice];
    for (let indice2 in array) {
      if (verifica === array[indice2]) {
        contador += 1;
      }
    }
    if (contador > numeroRepetido) {
      numeroRepetido = contador;
      indexRepetido = indice
    }
    contador = 0;
  }
  return array[indexRepetido];
}

console.log(contadorInteiros(arrayTeste))