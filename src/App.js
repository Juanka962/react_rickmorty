import './App.css';
import Characters from './components/Characters';
import rickymorty from './img/rick-morty.png'
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState(null);

  const regApi = async () => {
    const Api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await Api.json();
    setCharacters(characterApi.results);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
            <img src={rickymorty} alt="Rick & Morty" className="img-home"></img>
            <button onClick={regApi} className="btn-search">Buscar personajes</button>
          </>
        )}

      </header>
    </div>
  );
}

export default App;
