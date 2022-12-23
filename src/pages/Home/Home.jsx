import useSWR from "swr";

import "./Home.css";
import { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";
import PokemonPage from "../../features/PokemonInfo/PokemonPage";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Home({ shouldFetch, apiUrlPokemon }) {
  const { dispatch } = useContext(PokemonContext);

  const {
    data: pokemon,
    error,
    isLoading,
  } = useSWR(shouldFetch ? apiUrlPokemon : null, fetcher);

  useEffect(() => {
    dispatch({ type: "setPokemon", pokemon });
  }, [pokemon]);

  return (
    <div className="Home">
      {isLoading ? "Loading..." : shouldFetch && <PokemonPage />}
      {error ? "Error getting Pokemons" : null}
    </div>
  );
}

export default Home;
