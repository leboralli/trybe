const produto = 0;
const valorVenda = 3200;

const imposto = produto * 0.2;
const valorTotal = produto + imposto;
const lucro = valorVenda - valorTotal;
const lucroTotal = 1000 + lucro


if (produto > 0 && valorVenda > 0) {
  console.log("O lucro total com 1000 vendas é: " + lucroTotal)
} else {
  console.log("valor errado!")
}


