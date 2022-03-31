function funcaoTesteNumero(number) {
  if (number < 0) {
    return 'menor que 0';
  } else if (number > 0) {
    return 'maior que 0';
  } else  if (number === 0) {
    return 'igual a 0';
  } else {
    return 'não é um número';
  }
}
console.log(funcaoTesteNumero(-2));

module.exports = funcaoTesteNumero;