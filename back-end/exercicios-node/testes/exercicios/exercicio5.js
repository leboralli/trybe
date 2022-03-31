const fs = require('fs');

function funcaoTexto(nomeDoArquivo, texto) {
  try {
    const conteudoDoArquivo = fs.writeFileSync(nomeDoArquivo, texto);
    return 'ok';
  } catch (err) {
    return null;
  }
}

module.exports = funcaoTexto;

