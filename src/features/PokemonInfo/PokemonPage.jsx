import useSWR from "swr";

import { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";
import Pokemon from "./Pokemon";
import "./PokemonPage.css";
import PokemonInfo from "./PokemonInfo";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function PokemonPage() {
  const { state, dispatch } = useContext(PokemonContext);

  const { data: species } = useSWR(
    state.pokemon
      ? `https://pokeapi.co/api/v2/pokemon-species/${state.pokemon.name}/`
      : null,
    fetcher
  );

  useEffect(() => {
    species && dispatch({ type: "setSpecies", species });
  }, [species]);

  return (
    <article className="PokemonPage">
      <Pokemon />
      <div className="PokemonPage__Info-start"></div>
      <PokemonInfo />
    </article>
  );
}

export default PokemonPage;
