import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import imagemLogo from "./img/libraslingologo.jpg";

function Home() {
  return (
    <div className="Home">
      <header>
        <figure>
          <img id="img1" src={imagemLogo}/>
          <figcaption>
            <h6>LIBRAS LINGO</h6>
          </figcaption>
        </figure>
        <Link to="/cadastro">
          <button class="btn-cad">CADASTRO</button>
        </Link>
      </header>
      <main>
        <Link to="/jogo">
          <button class="btn-jogar">JOGAR</button>
        </Link>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default Home;