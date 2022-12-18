import useSWR from "swr";

import { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";
import Pokemon from "./Pokemon";
import Evolutions from "./Evolutions";
import "./PokemonPage.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function PokemonPage({ pokemon }) {
  const { setBgColor } = useContext(PokemonContext);

  const { data: pokemonSpecies } = useSWR(
    pokemon
      ? `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}/`
      : null,
    fetcher
  );

  useEffect(() => {
    setBgColor(pokemonSpecies?.color.name);
  }, [pokemonSpecies, setBgColor]);

  return (
    <article className="PokemonPage">
      <Pokemon pokemon={pokemon} />
      <Evolutions pokemonSpecies={pokemonSpecies} />
    </article>
  );
}

export default PokemonPage;
