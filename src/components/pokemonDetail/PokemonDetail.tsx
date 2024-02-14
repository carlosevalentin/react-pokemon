import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DetailContainer } from './PokemonDetails.styled';

interface Pokemon {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
}

interface PokemonDetailProps {
  url: string;
}

const PokemonDetail: React.FC<PokemonDetailProps> = ({ url }) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      try {
        const response = await axios.get(url);
        setPokemon(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do Pokémon:', error);
      }
    };

    if (url) {
      fetchPokemonDetail();
    }
  }, [url]);

  return (
    <DetailContainer>
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      )}
    </DetailContainer>
  );
};

export default PokemonDetail;
