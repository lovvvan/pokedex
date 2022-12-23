import { useContext } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";

import "./Pokemon.css";

function Pokemon() {
  const { state } = useContext(PokemonContext);

  return (
    <div className="Pokemon">
      <p className="Pokemon__id">#{state?.pokemon?.id}</p>
      <h1>{state?.pokemon?.name.toUpperCase()}</h1>
      <img
        src={state?.pokemon?.sprites.other["official-artwork"].front_default}
        alt="Pokemon"
      />
    </div>
  );
}

export default Pokemon;
