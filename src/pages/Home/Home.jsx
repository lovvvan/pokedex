import PokemonPage from "./PokemonPage";
import "./Home.css";

function Home({ pokemon, isLoading, shouldFetch, error }) {
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
