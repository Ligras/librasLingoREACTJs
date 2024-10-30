import React, { createContext, useContext, useState } from 'react';


const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const [jogadores, setJogadores] = useState([
    { nome: 'Jogador 1', pontuacao: 100 },
    { nome: 'Jogador 2', pontuacao: 200 },
    { nome: 'Jogador 3', pontuacao: 150 },
    { nome: 'Jogador 4', pontuacao: 250 },
    { nome: 'Jogador 5', pontuacao: 300 },
    { nome: 'Jogador 6', pontuacao: 50 },
    { nome: 'Jogador 7', pontuacao: 75 },
    { nome: 'Jogador 8', pontuacao: 125 },
    { nome: 'Jogador 9', pontuacao: 175 },
    { nome: 'Jogador 10', pontuacao: 225 },
  ]);

  return (
    <APIContext.Provider value={jogadores}>
      {children}
    </APIContext.Provider>
  );
};

export const useAPI = () => {
  return useContext(APIContext);
};
