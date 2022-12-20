import useSWR from "swr";

import PokemonPage from "./PokemonPage";
import "./Home.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Home({ shouldFetch, apiUrlPokemon }) {
  const {
    data: pokemon,
    error,
    isLoading,
  } = useSWR(shouldFetch ? apiUrlPokemon : null, fetcher);

  return (
    <div className="Home">
      {isLoading
        ? "Loading..."
        : shouldFetch && <PokemonPage pokemon={pokemon} />}
      {error ? "Error getting Pokemons" : null}
    </div>
  );
}

export default Home;
