export const INITIAL_VALUE = {
  pokemon: {},
  species: {},
  evolutions: {},
};

export function pokemonReducer(state, action) {
  switch (action.type) {
    case "setPokemon":
      return { ...state, pokemon: action.pokemon };
    case "setSpecies":
      return { ...state, species: action.species };
    case "setEvolutions":
      return { ...state, evolutions: action.evolutions };
    default:
      return state;
  }
}

