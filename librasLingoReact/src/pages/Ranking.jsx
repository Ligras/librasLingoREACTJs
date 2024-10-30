import React from 'react';
import { APIProvider } from './context/APIContext';
import PlayerList from './components/PlayerList';
import './Ranking.css';

function Ranking () {
  return (
    <div className="Ranking">
    <header>
        <Link to="/">
            <button id="btnVoltar">VOLTAR</button>
        </Link>
    </header>
    <main>
        <APIProvider>
            <div>
                <h1>Ranking dos jogadores com as melhores pontuações</h1>
                <PlayerList />
            </div>
        </APIProvider>
    </main>
    <footer>
    </footer>
</div>

  );
};

export default Ranking;
