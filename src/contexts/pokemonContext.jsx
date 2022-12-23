import { createContext, useReducer } from "react";
import { pokemonReducer, INITIAL_VALUE } from "../reducers/pokemonReducer";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [state, dispatch] = useReducer(pokemonReducer, INITIAL_VALUE);

  const value = { state, dispatch };
  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
}
