import useSWR from 'swr'

function PokemonPage({ pokemon }) {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data: pokemonSpecies, error: pokemonSpeciesError, isLoading: pokemonSpeciesisLoading } = useSWR(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}/`, fetcher)
  const { data: evolutionChainData, error, isLoading } = useSWR(pokemonSpecies ? pokemonSpecies["evolution_chain"].url : null , fetcher)
  
  function getAllEvolutionsOf(evolutionChainData) {
    let evolutions = []
    if (evolutionChainData) {
      const firstPokemon = evolutionChainData.chain.species.name
      evolutions.push(firstPokemon)
      let evolves_to = evolutionChainData.chain['evolves_to']
      while (evolves_to) {
        if (evolves_to.length > 1) {
          // If there are alternative evolutions
          let alternativeEvolutions = []
          for(let i = 0;  i < evolves_to.length; i++) {
            let otherEvolution = evolves_to[i].species.name
            alternativeEvolutions.push(otherEvolution)
          }
          evolves_to = false
          evolutions.push(alternativeEvolutions)
        } else if (evolves_to.length == 1) {
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

  const evolutions = getAllEvolutionsOf(evolutionChainData)
  console.log(evolutions)
  return (
    <div>
      <h1>{pokemon.name}</h1> 
      <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
      <h3>Evolution chain</h3>

      {evolutions.map((pokemon) => {
        if (typeof pokemon === 'string') {
          return <p key={pokemon}>{pokemon}</p>
        } else {
          let alternativeEvolutions = pokemon
          // for (let i = 0; i < alternativeEvolutions.length; i++) {
          //   return <p key={pokemon}>{pokemon}</p>
          // }
          alternativeEvolutions.map((pokemon) => {
            return <p key={pokemon}>{pokemon}</p>
          })
        }
      })}
    </div>
  )
}




export default PokemonPage