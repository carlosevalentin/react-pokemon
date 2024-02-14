import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, ListContainer } from './PokemonList.styled';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonListProps {
  onSelect: (url: string) => void;
}

const PokemonList: React.FC<PokemonListProps> = ({ onSelect }) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Erro ao buscar lista de Pokémon:', error);
      }
    };

    fetchPokemonList();
  }, []);

  return (
    <ListContainer>
      <h2>Lista de Pokémon</h2>
      
        {pokemonList.map((pokemon, index) => (          
            <Button onClick={() => onSelect(pokemon.url)}>{pokemon.name}</Button>          
        ))}      
    </ListContainer>
  );
};

export default PokemonList;