import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.scss';

function Home() {
  return (
    <div className="home-container">
      <img
                className="logoImage"
                src={require(`../images/logo-clean3000-transparent.png`)}
                
              />
      <div>
        <Link to="/nouveau-client">
          <button className="home-button blue-button">Créer un nouveau client</button>
        </Link>
      </div>
      <div>
        <Link to="/nouvel-avis">
          <button className="home-button green-button">Saisir un nouvel avis de passage</button>
        </Link>
      </div>
      <div>
        <Link to="/recherche-avis">
          <button className="home-button orange-button">Recherche d'un avis de passage</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;