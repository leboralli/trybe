let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

let infoTioPatinha = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota:  'O último MacPatinhas',
  recorrente: 'Sim'
};
//Exercicio 1
console.log('Bem-vinda, ' + info.personagem)

//Exercicio 2
console.log('-------------------------')
console.log(info)

//Exercicio 3
console.log('-------------------------')
for (i in info) {
  console.log(i)
}

//Exercicio 4
console.log('-------------------------')
for (i in info) {
  console.log(info[i])
}

//Exercicio 5
console.log('-------------------------')
console.log(info.personagem + ' e ' + infoTioPatinha.personagem)
console.log(info.origem + ' e ' + infoTioPatinha.origem)
console.log(info.nota + ' e ' + infoTioPatinha.nota)
if (info.recorrente === 'Sim' & infoTioPatinha.recorrente === 'Sim') {
  console.log("Ambos recorrentes")
}