import useSWR from "swr";

import MiniPokemon from "./MiniPokemon";
import { getAllEvolutionsOf } from "../../utils/utils";
import "./Evolutions.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Evolutions({ pokemonSpecies }) {
  const { data: evolutionChainData } = useSWR(
    pokemonSpecies ? pokemonSpecies["evolution_chain"].url : null,
    fetcher
  );

  const evolutions = getAllEvolutionsOf(evolutionChainData);

  return (
    <div className="Evolutions">
      <h3>Evolutions</h3>
      <section className="Evolutions__pokemons">
        {evolutions.map((pokemonName) => {
          if (typeof pokemonName === "string") {
            return <MiniPokemon key={pokemonName} pokemonName={pokemonName} />;
          } else {
            // TODO: this does not work for evee (and other pokemons with alternative evolutions)
            let alternativeEvolutions = pokemonName;
            alternativeEvolutions.map((pokemonName) => {
              return <p key={pokemonName}>{pokemonName}</p>;
            });
          }
        })}
      </section>
    </div>
  );
}

export default Evolutions;
