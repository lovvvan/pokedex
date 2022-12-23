import useSWR from "swr";
import { useContext, useEffect } from "react";
import { PokemonContext } from "../../contexts/pokemonContext";

import MiniPokemon from "./MiniPokemon";
import { getAllEvolutionsOf } from "../../utils/utils";
import "./Evolutions.css";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function Evolutions() {
  const { state, dispatch } = useContext(PokemonContext);

  const { data: evolutionChainData } = useSWR(
    state?.species ? state.species["evolution_chain"].url : null,
    fetcher
  );
  const evolutions =
    evolutionChainData && getAllEvolutionsOf(evolutionChainData);

  useEffect(() => {
    evolutions && dispatch({ type: "setEvolutions", evolutions });
  }, [evolutionChainData]);

  return (
    <div className="Evolutions">
      <section className="Evolutions__pokemons">
        {evolutions?.map((pokemonName) => {
          if (typeof pokemonName === "string") {
            return <MiniPokemon key={pokemonName} pokemonName={pokemonName} />;
          } else {
            // TODO: need to fix showing alternative evolutions for e.g. evee (and other pokemons with alternative evolutions)
            return null;
          }
        })}
      </section>
    </div>
  );
}

export default Evolutions;
