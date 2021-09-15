// Criar um triangulo com asteristicos com o valor de n
const n = 5;

let symbol = "*";
let inputLine = "";

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
  console.log(inputLine)
};


// ----------------------------------------------------
// Resolução usando repeat
for (let index = 0; index < n; index += 1) {
  console.log("*".repeat(index +1));
}