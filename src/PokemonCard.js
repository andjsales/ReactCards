import React from "react";
import { useFlip } from "./hooks"; // Import useFlip hook
import "./PokemonCard.css";

function PokemonCard({ front, back, name, stats }) {
  const [isFacingUp, toggle] = useFlip(); // Use useFlip hook

  return (
    <div onClick={ toggle } className="PokemonCard Card"> {/* Use toggle function from useFlip here */ }
      { isFacingUp ? (
        <div className="PokemonCard-front">
          <img src={ front } alt={ `${name} front` } />
          <div>
            <p className="PokemonCard-name">{ name }</p>
            <ul className="PokemonCard-stats">
              { stats.map(stat => (
                <li key={ stat.name }>
                  <em>{ stat.name }</em>: { stat.value }
                </li>
              )) }
            </ul>
          </div>
        </div>
      ) : (
        <div className="PokemonCard-back">
          <img src={ back } alt={ `${name} back` } />
        </div>
      ) }
    </div>
  );
}

export default PokemonCard;
