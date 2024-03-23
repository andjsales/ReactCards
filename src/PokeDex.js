import React from "react";
import { useAxios } from "./hooks"; // Import useAxios hook
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

function PokeDex() {
  const [pokemon, addPokemon] = useAxios("https://pokeapi.co/api/v2/pokemon/"); // Use useAxios with base URL

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={ (name) => addPokemon(name) } /> {/* Pass name to addPokemon function from useAxios here */ }
      </div>
      <div className="PokeDex-card-area">
        { pokemon.map(cardData => (
          <PokemonCard
            key={ cardData.id }
            front={ cardData.sprites.front_default }
            back={ cardData.sprites.back_default }
            name={ cardData.name }
            stats={ cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            })) }
          />
        )) }
      </div>
    </div>
  );
}

export default PokeDex;
