import useSWR from "swr";
import "./MiniPokemon.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function MiniPokemon({ pokemonName }) {
  const {
    data: pokemon,
    error,
    isLoading,
  } = useSWR(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`, fetcher);

  return (
    <div className="MiniPokemon">
      {isLoading ? "Loading image..." : null}
      {error ? (
        "Error getting image"
      ) : (
        <img
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt="pokemonName"
        />
      )}
      <p>{pokemonName.toUpperCase()}</p>
    </div>
  );
}

export default MiniPokemon;
