// Inverter o triângulo do exercicio 2
const n = 10;

let symbol = "*";
let inputLine = "";
let inputPos = n;

console.time();
for (let lineIndex = 0; lineIndex <= n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPos) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPos -= 1;
}
console.timeEnd();

// ----------------------------------------------------
// Resolução usando repeat
// número de espaços = n - index
// número de * = index
console.time();
for (let index = 1; index < n+1; index += 1) {
  console.log(" ".repeat(n - index), "*".repeat(index));
}
console.timeEnd();