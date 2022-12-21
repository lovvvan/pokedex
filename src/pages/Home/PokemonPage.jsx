import useSWR from "swr";

import { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";
import Pokemon from "./Pokemon";
import "./PokemonPage.css";
import PokemonInfo from "./PokemonInfo";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function PokemonPage({ pokemon }) {
  // const { setBgColor } = useContext(PokemonContext);

  const { data: pokemonSpecies } = useSWR(
    pokemon
      ? `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}/`
      : null,
    fetcher
  );

  // useEffect(() => {
  //   setBgColor(pokemonSpecies?.color.name);
  // }, [pokemonSpecies, setBgColor]);

  return (
    <article className="PokemonPage">
      <Pokemon />
      <div className="PokemonPage__Info-start"></div>
      <PokemonInfo pokemonSpecies={pokemonSpecies} />
    </article>
  );
}

export default PokemonPage;
