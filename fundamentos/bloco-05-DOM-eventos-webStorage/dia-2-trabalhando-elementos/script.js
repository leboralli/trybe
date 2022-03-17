// Exercicio 1
let pai = document.querySelector('#pai');
console.log(pai);
let irmaoSection = document.createElement("section");
irmaoSection.className = "irmaoOndeEstou";
// console.log(irmaoSection);
pai.appendChild(irmaoSection);

// --------------------------------------
// Exercicio 2
let ondeEstou = document.querySelector('#elementoOndeVoceEsta');
let filhoOndeEstou = document.createElement("section");
filhoOndeEstou.className = "irmaoOndeEstou";
ondeEstou.appendChild(filhoOndeEstou);

// Exercicio 3
let primeiroFilhoFilho = document.querySelector('#primeiroFilhoDoFilho');
let filhoDoFilho = document.createElement("section");
filhoDoFilho.className = "filhoDoFilho";
primeiroFilhoFilho.appendChild(filhoDoFilho);
// console.log(primeiroFilhoFilho)

// Exercicio 4
let primeiroFilhoDoFilho = document.querySelector('.filhoDoFilho')
let paiParte4 = primeiroFilhoDoFilho.parentNode;

console.log(paiParte4.lastChild)