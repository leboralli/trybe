const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

// Exercicio 3
function mudarTexto(event) {
  let elementoAlvo = document.querySelector('.tech');
  elementoAlvo.target.innerText = "texto";
}
firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.

// Exercicio 2
secondLi.addEventListener('click', function (event) {
  secondLi.className = 'tech';
  console.log(event.type); 
  console.log(event.target);
});

// Exercicio 3
input.addEventListener('keyup', mudarTexto)

function mudarTexto () {
  let elementoAlvo = document.querySelector('.tech')
  elementoAlvo.innerText = input.value;
};

// Exercicio 4
myWebpage.addEventListener('dblclick', mudarPagina);

function mudarPagina() {
  window.location.href = "https://leboralli.github.io/";
} 

// Exercicio 5
myWebpage.addEventListener('mousemove', mudarCor);

function mudarCor() {
  myWebpage.style.color = 'blue';
}