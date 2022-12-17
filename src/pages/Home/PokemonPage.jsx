import useSWR from 'swr'
import getAllEvolutionsOf from '../../utils/utils'

function PokemonPage({ pokemon }) {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data: pokemonSpecies } = useSWR(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}/`, fetcher)
  const { data: evolutionChainData } = useSWR(pokemonSpecies ? pokemonSpecies["evolution_chain"].url : null , fetcher)
  
  const evolutions = getAllEvolutionsOf(evolutionChainData)

  return (
    <div>
      <h1>{pokemon.name}</h1> 
      <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
      <h3>Evolution chain</h3>

      {evolutions.map((pokemon) => {
        if (typeof pokemon === 'string') {
          return <p key={pokemon}>{pokemon}</p>
        } else {
          // TODO: this does not work for evee (and other pokemons with alternative evolutions)
          let alternativeEvolutions = pokemon
          alternativeEvolutions.map((pokemon) => {
            return <p key={pokemon}>{pokemon}</p>
          })
        }
      })}
    </div>
  )
}




export default PokemonPage