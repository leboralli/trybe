// Fazer a pirâmide, mas no formato real de pirâmide
// Se n for 5, a base terá 5, a linha do meio 3 e topo 1

// Primeiro usando .repeat

const n = 5;
const symbol = "*";
const space = " ";
let spaceN = "";



for (let index = 1; index <= n; index += 2) {
  spaceN = space.repeat(n%2);
  console.log(spaceN, symbol.repeat(index),spaceN);
}