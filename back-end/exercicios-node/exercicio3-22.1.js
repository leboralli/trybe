// Reescreva o código do exercício anterior para que utilize async/await .
// Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async .

async function calculaSomaMult (n1, n2, n3) {
  return new Promise((resolve, reject) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number' || typeof n3 !== 'number') {
      reject('Informe apenas números');
    } 
    const resultado = (n1 + n2) * n3;
    if (resultado < 50) {
      reject('Valor muito baixo');
    }
    resolve(resultado);
  });
}

async function randomNumber () {
  return new Promise((resolve) => {
    resolve(Math.floor(Math.random() * 100 + 1));
  });
}
  
async function teste () {


calculaSomaMult(randomNumber(), randomNumber(), randomNumber())
  try{
    const resultado = await calculaSomaMult(randomNumber(), randomNumber(), randomNumber());
    console.log(resultado);
  }
  catch(err){
    console.error(err);
  };
}
teste();