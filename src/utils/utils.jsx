

function getAlternativeEvolutions(evolves_to) {
    let alternativeEvolutions = []
    for(let i = 0;  i < evolves_to.length; i++) {
      let otherEvolution = evolves_to[i].species.name
      alternativeEvolutions.push(otherEvolution)
    }
    return alternativeEvolutions
}

function getAllEvolutionsOf(evolutionChainData) {
    let evolutions = []
    if (evolutionChainData) {
      const firstPokemon = evolutionChainData.chain.species.name
      evolutions.push(firstPokemon)
      let evolves_to = evolutionChainData.chain['evolves_to']
      while (evolves_to) {
        if (evolves_to.length > 1) {
          // If there are alternative choices of evolution
          evolutions.push(getAlternativeEvolutions(evolves_to))
          evolves_to = false
        } else if (evolves_to.length === 1) {
          // If there is only one choice of evolution
          let nextEvolution = evolves_to[0].species.name
          evolutions.push(nextEvolution)
          evolves_to = evolves_to[0].evolves_to
        } else {
          evolves_to = false
        }
      }
    }
    return evolutions
  }

  export default getAllEvolutionsOf