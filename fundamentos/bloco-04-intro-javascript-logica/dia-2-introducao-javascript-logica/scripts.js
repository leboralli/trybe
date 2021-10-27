let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (i = 0; i < numbers.length; i++) {
   soma += numbers[i];
}
console.log("Exercicios 2")
console.log(soma)

// Exercicio3 3
let mediaAritmetica = soma/numbers.length
console.log("Exercicios 3")
console.log(mediaAritmetica)

if ((numbers[numbers.length -1]) > 20) {
  console.log("Valor maior que 20")
} else {
  console.log("Valor menor ou igual a 20")
}

// Exercicio 5
let teste = 0;
let primeiroNumero = 0;
let maiorNumero = 0;
for (let i = 0; i < numbers.length; i++) {  
  // console.log(numbers[i+1])
  primeiroNumero = numbers[i]; ;
  if (primeiroNumero > numbers[i+1]) { //comparar com o indice seguinte
    maiorNumero = primeiroNumero
    // console.log(maiorNumero)
  } else {
    maiorNumero = numbers[i+1]
  }
}
console.log(maiorNumero); 