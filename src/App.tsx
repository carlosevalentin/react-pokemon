import React, { useState } from 'react';
import './App.css';
import PokemonList from './components/pokemonList/PokemonList';
import PokemonDetail from './components/pokemonDetail/PokemonDetail';


function App() {
  const [selectedPokemonUrl, setSelectedPokemonUrl] = useState<string | null>(null);

  const handlePokemonSelect = (url: string) => {
    setSelectedPokemonUrl(url);
  };

  return (
    <div className="App">
      <h1>PokeAPI App</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <PokemonList onSelect={handlePokemonSelect} />
        </div>
        <div style={{ flex: 1 }}>
          {selectedPokemonUrl && <PokemonDetail url={selectedPokemonUrl} />}
        </div>
      </div>
    </div>
  );
}

export default App;
