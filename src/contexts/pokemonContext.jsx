import { createContext, useReducer, useState, useEffect } from "react";
import useSWR from "swr";

export const PokemonContext = createContext();
// const fetcher = (...args) => fetch(...args).then((res) => res.json());

function reducer(state, action) {
  switch (action.type) {
    case "setPokemon":
      return { pokemon: action.pokemon, species: state.species };
    case "setSpecies":
      return { pokemon: state.pokemon, species: action.species };
  }
}

export function PokemonProvider({ children }) {
  // const [bgColor, setBgColor] = useState("");

  const [{ pokemon, species }, dispatch] = useReducer(reducer, {
    pokemon: {},
    species: {},
  });

  // const { data: pokemonSpecies } = useSWR(
  //   pokemon == !"undefined"
  //     ? `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}/`
  //     : null,
  //   fetcher
  // );

  useEffect(() => {
    console.log("pokemonoooooooooooooonhyt");
    console.log(pokemon);
    // dispatch({ type: "setSpecies", pokemonSpecies });
  }, [pokemon]);

  const value = { pokemon, species, dispatch };
  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
}
