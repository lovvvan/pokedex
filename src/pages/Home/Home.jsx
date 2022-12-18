import SearchBar from "../../components/form/SearchBar";
import PokemonPage from "./PokemonPage";
import "./Home.css";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Home({ allPokemons }) {
  const [API_URL, setAPI_URL] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  const {
    data: pokemon,
    error,
    isLoading,
  } = useSWR(shouldFetch ? API_URL : null, fetcher);

  function handleFetchPokemon(e, API_URL) {
    setAPI_URL(API_URL);
    setShouldFetch(true);
  }

  return (
    <div className="Home">
      <SearchBar
        placeholder="Search Pokemon..."
        data={allPokemons}
        handleFetchPokemon={handleFetchPokemon}
      ></SearchBar>
      {isLoading
        ? "Loading..."
        : shouldFetch && <PokemonPage pokemon={pokemon} />}
      {error ? "Error getting Pokemons" : null}
    </div>
  );
}

export default Home;
