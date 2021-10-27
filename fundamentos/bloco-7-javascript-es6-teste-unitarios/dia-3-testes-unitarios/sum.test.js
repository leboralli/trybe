// sum.test.js
const sum = require('./sum');

it('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});

it('teste se o retorno de sum (4,5) é 9', () => {
  expect(sum(4, 5)).toBe(9);
});

it('Teste se o retorno de sum(0, 0) é 0', () => {
  expect(sum(0, 0)).toBe(0);
});

it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
  expect(sum(4, '5')).toBe(9);
});