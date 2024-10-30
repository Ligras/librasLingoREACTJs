import React from 'react';
import './Quiz.css';
import imagemA from "../img/A.jpg";

function Quiz() {
  return (
    <div className="Quiz">
      <a href="/jogo">
        <button id="btnVoltar">VOLTAR</button>
      </a>
      <div id="main">
        <div id="div1">
          <img src={imagemA} alt="Imagem do Quiz" id="imagem" />
        </div>
        <div id="div2">
          <div className="grid-container">
            <button className="opcao">A</button>
            <button className="opcao">B</button>
            <button className="opcao">C</button>
            <button className="opcao">D</button>
          </div>
        </div>
        <label id="mensagem">
        </label>
        <div id="div3">
          <div>
            <label>ACERTOS: </label>
            <div id="acertos">0</div>
          </div>
          <div>
            <label>ERROS: </label>
            <div id="erros">0</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
