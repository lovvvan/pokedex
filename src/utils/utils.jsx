function getAlternativeEvolutions(nextEvolution) {
  let alternativeEvolutions = [];
  for (let i = 0; i < nextEvolution.length; i++) {
    let otherEvolution = nextEvolution[i].species.name;
    alternativeEvolutions.push(otherEvolution);
  }
  return alternativeEvolutions;
}

function getNextEvolution(evolutions, nextEvolution) {
  if (nextEvolution.length > 1) {
    // If there are alternative choices of evolution. Ex Evee that has 8 alternatives
    evolutions.push(getAlternativeEvolutions(nextEvolution));
    // NOTE: the following does not work properly IF there are pokemons that
    // have evolutions after alternative evolutions.
    nextEvolution = nextEvolution[0].evolves_to;
  } else if (nextEvolution.length === 1) {
    let evolution = nextEvolution[0].species.name;
    evolutions.push(evolution);
    nextEvolution = nextEvolution[0].evolves_to;
  } else {
    nextEvolution = false;
  }
  return nextEvolution;
}

export function getAllEvolutionsOf(evolutionChainData) {
  let evolutions = [];

  if (evolutionChainData) {
    const firstEvolution = evolutionChainData.chain.species.name;
    evolutions.push(firstEvolution);

    let nextEvolution = evolutionChainData.chain["evolves_to"];
    while (nextEvolution) {
      nextEvolution = getNextEvolution(evolutions, nextEvolution);
    }
  }
  return evolutions;
}
