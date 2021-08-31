// rie uma função que receba um array de nomes 
//e retorne o nome com a maior quantidade de caracteres.

let arrayTeste =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function qtideCaracteres (array) {
  let indice = 0;
  let indiceMaior = 0;
  let contador = 0;
  for (keys in array) {
    let caracteres = array[keys].split('');
    if (contador < caracteres.length){
      contador = caracteres.length;
      indice = keys
    }
    
  }
  console.log(contador)
  console.log(indice)
  return array[indice]
}

console.log(qtideCaracteres(arrayTeste))