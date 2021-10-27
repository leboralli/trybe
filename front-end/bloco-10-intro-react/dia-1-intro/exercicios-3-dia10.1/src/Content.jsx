import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <div>{conteudos.map((elem) => (
          <div>
            <h4>O conteúdo é: {elem.conteudo}</h4>
            <h4>Status: {elem.status}</h4>
            <h4>Bloco: {elem.bloco}</h4>
          </div>
        ))}</div>
      </div>
    );
  }
}

export default Content;