// Imprimir um quadrado feito de asteristicos do tamanho de n
// Consegui fazer através de uma busca no Stackoverflow sobre repetições de
// caracteres no javascript
const n = 5;

for (let index = 0; index < n; index += 1) {
  console.log("*".repeat(n))
}

// O método seguinte é do gabarito oficial
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};