const employeeGenerator = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

const newEmployees = (employeeGenerator) => {
  const employees = {
    id1: employeeGenerator('Pedro Guerra'),
    id2: employeeGenerator('Luiza Drumond'),
    id3: employeeGenerator('Carla Paiva'),
  };
  return employees;
};

console.log(newEmployees(employeeGenerator));

// Exercicio 2
// Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const lotoGenerator = () => {
  let randomNumber = Math.floor(Math.random() * 5);
  return randomNumber;
}

const lotoChecker = (number) => {
  let numberGenerated = lotoGenerator();
  let checking = (number === numberGenerated) ? "Parabéns você ganhou" : "Tente novamente" ;
  return checking;
}

console.log(lotoChecker(3));

// Exercicio 3
// Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswers = (rightAnswers, students) => {
  let finalNote = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    if (rightAnswers[index] === students[index]) {
      finalNote += 1;
    } else if (students[index] === 'N.A') {
      finalNote = finalNote;
    } else if (rightAnswers[index] !== students[index]) {
      finalNote -= 0.5;
    }
  }
  return finalNote;
}

const verifier = (rightAnswers, students, verifyAnswers) => {
  return verifyAnswers(rightAnswers, students);
}

console.log(verifier(RIGHT_ANSWERS, STUDENT_ANSWERS, verifyAnswers));