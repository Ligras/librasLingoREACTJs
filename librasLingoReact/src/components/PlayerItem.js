import React from 'react';

const PlayerItem = ({ nome, pontuacao }) => {
  return (
    <li>
      {nome} - Pontuação: {pontuacao}
    </li>
  );
};

export default PlayerItem;
