const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const funcaoTesteNumero = require('./exercicio1');
const funcaoTexto = require('./exercicio5');

describe('Exercicio 1', () => {
  it('Testando se o resultado é string', () => {
    const resposta = funcaoTesteNumero(0);
    expect(resposta).to.be.a('string');
  });
  it('Testando se o input é menor que 1', () => {
    const resultado = funcaoTesteNumero(-5);
    expect(resultado).to.be.equal('menor que 0');
  });
  it('Testando se o input é maior que 1', () => {
    const resultado = funcaoTesteNumero(3);
    expect(resultado).to.be.equal('maior que 0');
  });
  it('Testando se o input é igual a zero', () => {
    const resultado = funcaoTesteNumero(0);
    expect(resultado).to.be.equal('igual a 0');
  }); 
});

describe('Exercicio 3', () => {
  it('Testando o que acontece se não receber numero', () => {
    const resultado = funcaoTesteNumero('teste');
    expect(resultado).to.be.equal('não é um número');
  });
});

describe('Exercicio 4', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });
  const textoResultado = funcaoTexto('nomeArquivo.txt', 'teste');
  it('Retorno da função é string', () => {
    expect(textoResultado).to.be.a('string');
  });
  it('Retorno da função é ok', () => {
    expect(textoResultado).to.be.equal('ok');
  });

});