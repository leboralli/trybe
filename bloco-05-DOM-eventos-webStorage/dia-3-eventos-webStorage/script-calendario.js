function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Exercicio 1
// Criar dinamicamente cada dia do calendário e adicionar como filhos/filhas
// da tag ul com ID "days"
// primeiro, vamos criar um For que cria os filhos de <ul id="days">
let dia = document.querySelector('#days');
// console.log(dia);
for (let index in dezDaysList) {  
  let novoLi = document.createElement('li');
  if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
    novoLi.className = 'day holiday';    
    novoLi.innerText = dezDaysList[index];
    dia.appendChild(novoLi);
  } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 ||
    dezDaysList[index] === 18 || dezDaysList[index] === 25){
      novoLi.className = 'day friday';    
    novoLi.innerText = dezDaysList[index];
    dia.appendChild(novoLi);
  } else {
  novoLi.className = 'day';
  novoLi.innerText = dezDaysList[index];
  dia.appendChild(novoLi);
  }
}

// Exercicio 2
// Criar uma função que recebe a string "Feriados" e cria dinamicamente
// um botão com o nome Feriados
// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

let containerBotao = document.querySelector(".buttons-container");
let novoBotao = document.createElement('button');
novoBotao.id = "btn-holiday";
novoBotao.innerText = "Feriados"
containerBotao.appendChild(novoBotao);

// Exercicio 3
// Função no botão "Feriados" de evento de clock, que muda a cor dos fundos
// da classe "holidays"
let feriados = document.querySelector("#btn-holiday");
feriados.addEventListener('click', mudarFundoFeriados);

function mudarFundoFeriados(){
  let holiday = document.querySelectorAll(".holiday");
  for (let index in holiday) {
    holiday[index].style.color = 'red';
  }
}
