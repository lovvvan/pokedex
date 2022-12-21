import { createContext, useReducer, useState } from "react";

export const PokemonContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "setPokemon":
      return { pokemon: action.pokemon };
  }
}

export function PokemonProvider({ children }) {
  // const [bgColor, setBgColor] = useState("");

  const [{ pokemon }, dispatch] = useReducer(reducer, { pokemon: {} });

  const value = { pokemon, dispatch };
  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
}
