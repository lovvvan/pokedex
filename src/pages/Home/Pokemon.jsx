import { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";

import "./Pokemon.css";

function Pokemon() {
  const { pokemon } = useContext(PokemonContext);

  return (
    <div className="Pokemon">
      <p className="Pokemon__id">#{pokemon?.id}</p>
      <h1>{pokemon?.name.toUpperCase()}</h1>
      <img
        src={pokemon?.sprites.other["official-artwork"].front_default}
        alt="Pokemon"
      />
    </div>
  );
}

export default Pokemon;
