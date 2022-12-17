import useSWR from 'swr'
import getAllEvolutionsOf from '../../utils/utils'
import MiniPokemon from './MiniPokemon'
import './PokemonPage.css'

function PokemonPage({ pokemon }) {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data: pokemonSpecies } = useSWR(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}/`, fetcher)
  const { data: evolutionChainData } = useSWR(pokemonSpecies ? pokemonSpecies["evolution_chain"].url : null , fetcher)
  
  const evolutions = getAllEvolutionsOf(evolutionChainData)

  return (
    <article className="PokemonPage">

      <div className="PokemonPage__pokemon">
        <img src={pokemon.sprites.other["official-artwork"].front_default} alt="Pokemon" />
        <h1>{pokemon.name.toUpperCase()}</h1> 
      </div>

      <div className="PokemonPage__evolutions">
        <h3>Evolutions</h3>
        <section className="PokemonPage__evolution__pokemons">
          {evolutions.map((pokemonName) => {
            if (typeof pokemonName === 'string') {
              return <MiniPokemon key={pokemonName} pokemonName={pokemonName} />
            } else {
              // TODO: this does not work for evee (and other pokemons with alternative evolutions)
              let alternativeEvolutions = pokemonName
              alternativeEvolutions.map((pokemonName) => {
                return <p key={pokemonName}>{pokemonName}</p>
              })
            }
          })}
        </section>
      </div>
    </article>
  )
}




export default PokemonPage