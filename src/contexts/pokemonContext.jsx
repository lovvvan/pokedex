import { createContext, useState } from "react";

export const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [bgColor, setBgColor] = useState("");
  const value = { bgColor, setBgColor };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
}
