const myRemove = require('./myRemove');

it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado' ,() => {
  expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4])
});